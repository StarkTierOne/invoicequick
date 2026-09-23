// The signed-out draft slot, in one place.
//
// The no-account flow keeps the whole invoice in React state, so a refresh, a
// tab eviction, or a trip out to one of the trade guides would lose it all.
// Signed-in users have "Save Invoice" and server-side history; signed-out users
// get their in-progress invoice mirrored to this device instead.
//
// This module exists because the slot now has a *second* reader. /create writes
// and restores it; the homepage reads it to offer "pick up where you left off".
// Two copies of the key, the expiry window, and the is-it-worth-keeping rule
// would drift — and the failure would be silent and asymmetric: the homepage
// would advertise a draft /create had already discarded, or stay quiet about one
// that was still there. One definition, two callers.

import { calcTotal, formatCurrency, type InvoiceData } from "./types";

export const DRAFT_KEY = "iq_invoice_draft_v1";
export const DRAFT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export interface StoredDraft {
  data: InvoiceData;
  savedAt: string;
}

/** A draft is worth keeping once the visitor has typed something of their own. */
export function isDraftWorthKeeping(d: InvoiceData): boolean {
  if (!d || !Array.isArray(d.items)) return false;
  return Boolean(
    d.fromName?.trim() ||
    d.toName?.trim() ||
    d.notes?.trim() ||
    d.items.some((i) => i?.description?.trim() || Number(i?.rate) > 0)
  );
}

/**
 * Read (and validate) whatever draft this device is holding. Returns null and
 * clears the slot for anything missing, expired, or not worth keeping — so a
 * caller that gets a draft back can trust it is restorable.
 */
export function readStoredDraft(): StoredDraft | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const age = Date.now() - new Date(parsed?.savedAt).getTime();
    if (parsed?.data && Number.isFinite(age) && age < DRAFT_MAX_AGE_MS && isDraftWorthKeeping(parsed.data)) {
      return { data: parsed.data as InvoiceData, savedAt: parsed.savedAt as string };
    }
    localStorage.removeItem(DRAFT_KEY);
    return null;
  } catch {
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
    return null;
  }
}

export function clearStoredDraft(): void {
  try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
}

export function describeAge(savedAt: string): string {
  const mins = Math.floor((Date.now() - new Date(savedAt).getTime()) / 60000);
  if (mins < 1) return "a moment ago";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  const days = Math.floor(hrs / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

/**
 * A one-line, human description of a draft for surfaces that only *mention* it
 * rather than open it — currently the homepage resume banner.
 *
 * `client` is whichever end of the invoice the visitor actually filled in: the
 * client name if they got that far, otherwise their own business name, so the
 * banner can say something specific rather than "an invoice". `total` is
 * omitted entirely when nothing has been priced yet — a banner reading "$0.00"
 * reads as a broken draft and suppresses the click it exists to earn.
 */
export function summarizeDraft(draft: StoredDraft): { client: string | null; total: string | null } {
  const d = draft.data;
  const client = d.toName?.trim() || d.fromName?.trim() || null;
  const amount = calcTotal(d.items || [], Number(d.taxRate) || 0, Number(d.discountRate) || 0);
  return {
    client: client ? client.slice(0, 40) : null,
    total: Number.isFinite(amount) && amount > 0 ? formatCurrency(amount, d.currency || "USD") : null,
  };
}
