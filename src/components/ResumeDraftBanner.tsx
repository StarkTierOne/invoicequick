"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readStoredDraft, clearStoredDraft, describeAge, summarizeDraft, type StoredDraft } from "@/lib/invoice-draft";

/**
 * "Pick up where you left off" — the homepage's warmest possible CTA.
 *
 * /create already mirrors a signed-out invoice to this device and restores it on
 * the next visit. But the restore only fires once the visitor is *back on
 * /create* — and the people who most need it are precisely the ones who didn't
 * go back: they started an invoice, bounced to look something up, and returned
 * to the homepage to a page that behaves as though they'd never been here. The
 * site was quietly holding their half-finished invoice and saying nothing about
 * it. Every other CTA on this page argues a stranger into starting; this one
 * hands a returning visitor work they've already done.
 *
 * Deliberately unpushy: it renders nothing at all when there's no live draft
 * (which is most visits), and it carries its own dismissal that throws the draft
 * away, so "no thanks, that's stale" is one click and doesn't nag on the next
 * visit. The link is a plain <Link href="/create">, which means the delegated
 * listener in <Analytics /> records it as create_cta_click with this banner's
 * text as the label — no separate instrumentation to keep in sync.
 */
export default function ResumeDraftBanner() {
  // Never render on the server: the draft lives in localStorage, so the first
  // client render has to match the server's "nothing here" or React will warn.
  const [draft, setDraft] = useState<StoredDraft | null>(null);

  useEffect(() => {
    setDraft(readStoredDraft());
  }, []);

  if (!draft) return null;

  const { client, total } = summarizeDraft(draft);

  const discard = () => {
    clearStoredDraft();
    setDraft(null);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 pt-6" aria-label="Unfinished invoice">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">
            You have an unfinished invoice
            {client ? <> for <span className="text-indigo-700">{client}</span></> : null}
          </p>
          <p className="text-sm text-gray-600 mt-0.5">
            {total ? <><strong className="text-gray-900">{total}</strong> &middot; s</> : "S"}aved on this device{" "}
            {describeAge(draft.savedAt)}. Nothing was sent &mdash; it&rsquo;s still yours to finish.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/create" className="btn-primary text-sm !py-2.5 !px-5 whitespace-nowrap">
            Pick up where I left off &rarr;
          </Link>
          <button
            type="button"
            onClick={discard}
            className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 whitespace-nowrap"
          >
            Discard
          </button>
        </div>
      </div>
    </section>
  );
}
