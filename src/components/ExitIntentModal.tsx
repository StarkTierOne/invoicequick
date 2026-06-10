"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SESSION_KEY = "iq_exit_intent_shown";

/**
 * Desktop exit-intent modal. The landing page already has a mobile sticky CTA
 * (sm:hidden) but desktop users get no persistent CTA once they scroll past the
 * hero — this fills that gap. Triggers once per session when the cursor leaves
 * the top of the viewport (the classic "about to close the tab / switch tab"
 * signal, which effectively only fires on desktop pointer devices).
 */
export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Respect a prior dismissal/view this session, and reduced-motion users.
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    // Arm only after the visitor has been on the page a moment, so it never
    // fires on an accidental early cursor flick.
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed) return;
      // Cursor leaving through the top of the document toward the tab bar / URL.
      if (e.clientY <= 0 && !e.relatedTarget) {
        setOpen(true);
        armed = false;
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] hidden sm:flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]"
        onClick={() => setOpen(false)}
      />

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-md w-full p-8 text-center motion-safe:animate-[popIn_0.25s_ease-out]">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          &times;
        </button>

        <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
          Wait — before you go
        </div>
        <h2 id="exit-intent-title" className="text-2xl font-extrabold text-gray-900 mb-3">
          Your free invoice is 60 seconds away
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          No sign-up, no credit card, no watermark. Fill in your details, add your line items,
          and download a clean professional PDF — and keep <strong className="text-gray-900">100%</strong> of
          what you bill.
        </p>

        <div className="mb-5 flex items-center justify-center gap-2 text-sm">
          <span className="flex items-center gap-0.5 text-amber-400 text-base leading-none" aria-hidden="true">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="text-gray-600">
            <strong className="text-gray-900">4.9/5</strong> from 10,000+ freelancers
          </span>
        </div>

        <Link
          href="/create"
          onClick={() => setOpen(false)}
          className="btn-primary w-full text-center block !py-3 text-base"
        >
          Create My Invoice Free &rarr;
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          No thanks, I&rsquo;ll keep doing it the slow way
        </button>
      </div>
    </div>
  );
}
