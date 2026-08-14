"use client";

import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";

/**
 * Site-wide analytics.
 *
 * Two layers:
 *
 * 1. `<VercelAnalytics />` — pageviews for every route. Web Analytics is already
 *    provisioned on this Vercel project; until this component shipped, nothing
 *    in the codebase ever loaded the script, so the project had collected zero
 *    data since it was turned on.
 *
 * 2. A delegated click listener that fires `create_cta_click` for every link
 *    pointing at /create, anywhere on the site.
 *
 * The listener is deliberately delegated rather than a `<TrackedLink>` wrapper
 * applied at each call site. There are ~35 links to /create across the homepage,
 * the blog template, the trade template pages, the generator page and the
 * exit-intent modal. Instrumenting them by hand creates exactly the failure this
 * codebase has now hit three times — a second, hand-maintained copy of a list
 * that silently drifts. A partially instrumented funnel is worse than none: it
 * reports "the homepage sends 3 clicks" when the homepage sent fourteen, and
 * nothing about the number looks wrong. Delegation means a CTA added next month
 * is measured the day it ships.
 *
 * Vercel records the path the event fired on, so which *page* drove the click is
 * automatic. What it can't know is which CTA *within* that page, so the label
 * and destination travel as props.
 */
export function Analytics() {
  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      // Let genuine new-tab / download / modified clicks through untouched; we
      // only ever observe, and never call preventDefault.
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      // Resolve relative to the current page so "/create", "create?trade=x" and
      // a full URL all normalise to the same comparison.
      let url: URL;
      try {
        url = new URL(anchor.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== "/create") return;

      track("create_cta_click", {
        // The concrete page, not the route. Vercel stamps events with the route
        // pattern, which collapses all 73 blog guides into a single
        // "/blog/[slug]" row and all 15 trade pages into "/invoice-template/
        // [trade]" — leaving *which guide converts* unanswerable, which is the
        // entire question this instrumentation exists to answer.
        from: window.location.pathname.slice(0, 120),
        // Which CTA on the page — hero, footer, pricing card, exit-intent.
        // Trimmed because some CTAs carry a trailing arrow and a line break.
        label: (anchor.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60) || "unlabelled",
        // Present when the click came from a trade template page.
        trade: url.searchParams.get("trade") || "none",
        // The landing-page starter passes a typed business name; we record only
        // that it was used, never the name itself.
        seeded_name: url.searchParams.has("from"),
      });
    }

    // Capture phase: still observed if a handler downstream stops propagation.
    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, []);

  return <VercelAnalytics />;
}
