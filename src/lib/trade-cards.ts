// The trade line-up as it appears on the homepage grid.
//
// Why this file exists, and why it is NOT just derived from the trade map:
// `invoice-template-trades.ts` is the source of truth for trade pages, but it
// carries the full prose catalogue (intros, gotchas, FAQs — ~1,400 lines). The
// homepage is a client component, so importing that catalogue there would ship
// every word of it to the browser to render 23 links. This is the same split
// already made for `invoice-template-seeds.ts`, for the same reason.
//
// So this module is deliberately prose-free: an icon, a label, and the two
// slugs a card can point at. Like the seeds file, it CAN drift from the
// catalogue — and like the seeds file, that drift is turned into a BUILD
// FAILURE by an assertion in `invoice-template-trades.ts`, which checks that
// every template trade appears here with a matching icon and label, and that
// every guide slug named here is a real article.
//
// That assertion is the point of the whole exercise. The list this replaced was
// hand-curated, and the failure it allowed was silent: `junk-removal` shipped a
// complete template page that the homepage never linked to, and nothing
// distinguished that omission from a deliberate one. Now it cannot happen —
// adding a trade to the catalogue without adding it here fails the build.

export interface TradeCard {
  icon: string;
  /** Display label — must match the catalogue's `trade` for template-backed cards. */
  trade: string;
  /** Trade-template slug → /invoice-template/<tmpl>. Present when a template page exists. */
  tmpl?: string;
  /** Long-form guide slug → /blog/<guide>. Present when a guide exists. */
  guide?: string;
}

// Ordered roughly by search demand. Template-backed trades lead because their
// card can offer the artifact itself; the guide-only trades follow.
export const tradeCards: TradeCard[] = [
  { icon: "🔧", trade: "Plumbing", tmpl: "plumbing", guide: "how-to-invoice-for-plumbing-services" },
  { icon: "⚡", trade: "Electrical", tmpl: "electrical", guide: "how-to-invoice-for-electrical-work" },
  { icon: "❄️", trade: "HVAC", tmpl: "hvac", guide: "how-to-invoice-for-hvac-service" },
  { icon: "🛠️", trade: "Handyman", tmpl: "handyman", guide: "how-to-invoice-for-handyman-services" },
  { icon: "🚗", trade: "Auto Repair", tmpl: "auto-repair", guide: "how-to-invoice-for-auto-repair" },
  { icon: "🏠", trade: "Roofing", tmpl: "roofing", guide: "how-to-invoice-for-roofing-jobs" },
  { icon: "🎨", trade: "Painting", tmpl: "painting", guide: "how-to-invoice-for-painting-jobs" },
  { icon: "🧹", trade: "Cleaning", tmpl: "cleaning", guide: "how-to-invoice-for-cleaning-services" },
  { icon: "🌿", trade: "Landscaping & Lawn Care", tmpl: "landscaping", guide: "how-to-invoice-for-lawn-care-and-landscaping" },
  { icon: "🌨️", trade: "Snow Removal", tmpl: "snow-removal", guide: "how-to-invoice-for-snow-removal" },
  { icon: "🚛", trade: "Junk Removal & Hauling", tmpl: "junk-removal" },
  { icon: "🏗️", trade: "Construction", tmpl: "construction", guide: "how-to-invoice-for-construction-work" },
  { icon: "🍽️", trade: "Catering & Events", tmpl: "catering", guide: "how-to-invoice-for-catering-and-events" },
  { icon: "📸", trade: "Photography", tmpl: "photography", guide: "how-to-invoice-for-photography" },
  { icon: "💻", trade: "Web Development", tmpl: "web-development", guide: "how-to-invoice-for-web-development" },

  // Guide-only trades: strong articles with no template page yet. Each is a
  // candidate for the next wave of template pages.
  { icon: "🚚", trade: "Trucking & Freight", guide: "how-to-invoice-for-trucking-and-freight" },
  { icon: "🔁", trade: "Recurring Services", guide: "how-to-invoice-for-recurring-services" },
  { icon: "🧾", trade: "Independent Contractors", guide: "how-to-invoice-as-an-independent-contractor" },
  { icon: "⏱️", trade: "Hourly Work", guide: "how-to-invoice-for-hourly-work" },
  { icon: "📚", trade: "Tutoring & Test Prep", guide: "how-to-invoice-for-tutoring" },
  { icon: "🔨", trade: "Subcontracting", guide: "how-to-invoice-as-a-subcontractor" },
  { icon: "✏️", trade: "Graphic Design", guide: "invoice-template-graphic-designers" },
  { icon: "💼", trade: "Consulting", guide: "invoice-template-consultants" },
];
