// Line-item descriptions seeded into /create?trade=<slug>.
//
// This lives apart from invoice-template-trades.ts for one reason: /create is a
// client component, and importing the full trade map there would ship every
// intro paragraph, FAQ answer, and gotcha in this catalogue to the browser for
// a feature that needs four short strings. This module is the small half.
//
// It is still the SINGLE source of these strings — invoice-template-trades.ts
// imports from here rather than keeping its own copy, and asserts at module
// load that every published trade has an entry. A trade added to the catalogue
// without seeds fails the build instead of silently opening an empty invoice.
//
// Rates are deliberately absent. Seeding a made-up dollar figure risks someone
// sending an invoice carrying our number; seeding the *descriptions* removes
// the blank-page problem without putting words about price in anyone's mouth.

export interface TradeSeed {
  /** Display name, used for the restore/confirmation copy on /create. */
  trade: string;
  /** Item descriptions, in the order they should appear. */
  items: string[];
}

export const tradeSeeds: Record<string, TradeSeed> = {
  cleaning: {
    trade: "Cleaning",
    items: [
      "Standard clean — 3 bed / 2 bath",
      "Deep clean surcharge — first visit",
      "Interior windows",
      "Cleaning supplies and consumables",
    ],
  },
  landscaping: {
    trade: "Landscaping & Lawn Care",
    items: [
      "Weekly mowing — 4 cuts (dates listed)",
      "Spring cleanup — leaf and debris removal",
      "Mulch — installed (cu yd)",
      "Debris disposal and dump fees",
    ],
  },
  construction: {
    trade: "Construction",
    items: [
      "Contract line — % complete this period",
      "Change order # — per signed CO",
      "Labor — crew hours",
      "Materials delivered and stored on site",
      "Retainage held — 10% (enter as negative)",
    ],
  },
  plumbing: {
    trade: "Plumbing",
    items: [
      "Service call / diagnostic fee",
      "Labor — hours @ standard rate",
      "Parts (itemized)",
      "Permit and inspection fee",
    ],
  },
  electrical: {
    trade: "Electrical",
    items: [
      "Diagnostic / troubleshooting — hours",
      "Labor — journeyman hours @ rate",
      "Materials (itemized)",
      "Permit fee — permit #",
    ],
  },
  hvac: {
    trade: "HVAC",
    items: [
      "Diagnostic fee — system evaluation",
      "Labor — hours @ standard rate",
      "R-410A refrigerant — lbs",
      "Part replaced (note warranty status)",
    ],
  },
  handyman: {
    trade: "Handyman",
    items: [
      "Labor — hours (task list below)",
      "Tasks completed:",
      "Materials — itemized",
      "Materials pickup / supply run",
    ],
  },
  painting: {
    trade: "Painting",
    items: [
      "Surface prep — scrape, sand, patch, caulk",
      "Primer — 1 coat",
      "Walls — 2 coats (product / sheen)",
      "Trim and doors — 2 coats",
      "Materials — paint and sundries",
    ],
  },
  roofing: {
    trade: "Roofing",
    items: [
      "Tear-off — squares / layers / pitch",
      "Shingles installed — squares (product)",
      "Underlayment and ice-and-water shield",
      "Decking replacement — sheets @ unit price",
      "Dumpster and debris disposal",
    ],
  },
  "auto-repair": {
    trade: "Auto Repair",
    items: [
      "Vehicle: year / make / model — VIN, mileage",
      "Diagnostic — scan and findings",
      "Labor — hours (flat rate) @ shop rate",
      "Parts (note OEM or aftermarket)",
    ],
  },
  photography: {
    trade: "Photography",
    items: [
      "Photography collection — hours / crew",
      "Retainer received (enter as negative credit)",
      "Usage licence — term / territory / media",
      "Travel — mileage",
    ],
  },
  "snow-removal": {
    trade: "Snow Removal",
    items: [
      "Plow — service dates listed",
      "Storm date — accumulation / tier",
      "Salt application — lbs",
      "Sidewalk clearing — hand crew hours",
    ],
  },
  "junk-removal": {
    trade: "Junk Removal & Hauling",
    items: [
      "Truck load — fraction / cu yd removed",
      "Dump / transfer station fee — tons",
      "Item surcharges (mattress, appliance, e-waste)",
      "Labor surcharge — stairs / long carry",
    ],
  },
  catering: {
    trade: "Catering & Events",
    items: [
      "Food and beverage — guests @ per-person rate",
      "Guaranteed count (confirmed date)",
      "Deposit received (enter as negative credit)",
      "Staffing — servers / captain hours",
      "Service charge — % (not a gratuity)",
    ],
  },
  "web-development": {
    trade: "Web Development",
    items: [
      "Milestone _ of _ — deliverable",
      "Deposit received (enter as negative credit)",
      "Development — hours @ rate",
      "Third-party costs — hosting / licences (at cost)",
    ],
  },
};

export function getTradeSeed(slug: string): TradeSeed | undefined {
  return tradeSeeds[slug];
}
