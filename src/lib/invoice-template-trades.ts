// Per-trade invoice template landing pages.
//
// Why this exists: the whole competitive set in this niche (Jobber, Wave,
// Harvest, FieldCamp, InvoiceMaker, Bookipi) ranks a page per trade for the
// "<trade> invoice template" keyword family, and we had exactly one generic
// /invoice-template page. That family is a different, more commercial intent
// than the "how to invoice for <trade>" guides we already publish: the searcher
// wants the artifact, not the explanation.
//
// This map is the SINGLE SOURCE OF TRUTH for those pages. The route, the hub
// grid, and the sitemap all derive from it — adding a trade here publishes it
// everywhere. That is deliberate: three separate bugs in the last week came
// from a hand-maintained second copy of a list (the sitemap slugs, the blog
// index cards, the homepage trade grid). No new copy gets to exist.
//
// Content rule: every entry must carry material a generic invoice page cannot —
// this trade's real billing units, its real line items, and the specific way
// its invoices get disputed. A page that is the generic page with one word
// swapped is a doorway page, and Google treats it accordingly.

import { tradeSeeds } from "./invoice-template-seeds";

export interface TradeLineItem {
  /** Line-item description, written the way this trade would actually word it. */
  description: string;
  /** How the line is measured — the unit is the part that varies by trade. */
  unit: string;
  /** Why the line belongs on the invoice / what it prevents. */
  note: string;
}

export interface TradeFaq {
  q: string;
  a: string;
}

export interface TradeTemplate {
  /** URL segment: /invoice-template/<slug> */
  slug: string;
  /** Display name, title case, as it appears mid-sentence. */
  trade: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence summary under the H1. */
  tagline: string;
  /** Two intro paragraphs of trade-specific context. */
  intro: string[];
  /** How work in this trade is actually priced. */
  billingModel: string;
  /** The lines that belong on this trade's invoice. */
  lineItems: TradeLineItem[];
  /** Trade-specific ways these invoices get disputed, delayed, or short-paid. */
  gotchas: string[];
  faqs: TradeFaq[];
  /** Matching long-form guide in the blog, when one exists. */
  guideSlug?: string;
  guideLabel?: string;
}

export const tradeTemplates: Record<string, TradeTemplate> = {
  cleaning: {
    slug: "cleaning",
    trade: "Cleaning",
    icon: "🧹",
    metaTitle: "Free Cleaning Invoice Template — Fill In & Download PDF | InvoiceQuick",
    metaDescription:
      "A free cleaning invoice template for residential and commercial cleaners. Bill per visit, per square foot, or on a recurring contract — itemize supplies, add-ons, and travel, then download a PDF. No sign-up.",
    tagline:
      "Built for residential and commercial cleaners billing per visit, per square foot, or on a recurring contract.",
    intro: [
      "Cleaning invoices get short-paid for one reason more than any other: the client thought the add-on was part of the standard clean. Interior windows, inside the fridge, baseboards, and the oven are the four lines that turn a routine invoice into an argument, because every cleaning company draws the line between standard and deep in a slightly different place. The fix is not a better conversation — it is an invoice that lists the standard scope and the extras as separate lines, so the client can see what the base rate bought and what it did not.",
      "The second issue is cadence. A recurring cleaning client billed once a month for four visits will pay a single invoice far more reliably than one billed four times, and your own follow-up time drops by three quarters. This template supports either shape: one line per visit with the service date in the description, or a single recurring line covering the period. Put the date range in the description no matter which you choose — a cleaning invoice with no service dates on it is the one that sits in accounts payable while someone tries to remember which month it covers.",
    ],
    billingModel:
      "Residential cleaning is usually flat-rate per visit, priced from bedroom/bathroom count. Commercial work is priced per square foot per month or on a monthly contract. Deep cleans, move-in/move-out, and post-construction are quoted per job or hourly with a stated minimum.",
    lineItems: [
      {
        description: "Standard clean — 3 bed / 2 bath",
        unit: "per visit",
        note: "Name the property size in the line. It is what makes the flat rate defensible later.",
      },
      {
        description: "Recurring service — biweekly, 4 visits (dates listed)",
        unit: "per period",
        note: "One invoice per month beats four. List the service dates so AP can match it to the calendar.",
      },
      {
        description: "Deep clean surcharge — first visit",
        unit: "per job",
        note: "First-visit deep cleans take 2–3× the time. Bill it as its own line or it reads as a price hike.",
      },
      {
        description: "Interior windows — 14 panes",
        unit: "per pane or per job",
        note: "The single most common add-on dispute. Never fold it into the base rate silently.",
      },
      {
        description: "Inside refrigerator / inside oven",
        unit: "per appliance",
        note: "Both are excluded from a standard clean almost everywhere. Itemize them.",
      },
      {
        description: "Move-out clean — includes cabinet interiors and appliance pull-out",
        unit: "per job",
        note: "Move-outs are inspected against a landlord checklist. Spell out the scope you performed.",
      },
      {
        description: "Cleaning supplies and consumables",
        unit: "per visit or pass-through",
        note: "Only bill this if your quote said you would. Surprise supply lines get disputed.",
      },
      {
        description: "Travel / trip charge — outside standard service area",
        unit: "per trip or per mile",
        note: "State the mileage threshold. 'Trip charge' with no basis is the least-paid line in the trade.",
      },
    ],
    gotchas: [
      "Add-ons billed without a written scope. If your quote did not name the extras, the client will read them as padding. List standard scope on the invoice, then extras as separate lines.",
      "No service dates. A recurring invoice that says 'monthly cleaning' with no dates cannot be matched against the client's calendar and stalls in approval.",
      "Billing per visit for commercial accounts. Property managers pay monthly on a PO. Four small invoices means four approval cycles and four chances to lose one.",
      "Key/access charges buried in the total. Lockout trips, re-keys, and failed-entry visits are real costs — but only get paid when they are their own line with the date of the failed visit.",
      "Missing your license or insurance number. Commercial clients and property managers often cannot release payment without it on the document.",
    ],
    faqs: [
      {
        q: "What should a cleaning invoice include?",
        a: "Your business name, contact details, and license or insurance number if you carry one; the client and the service address (they are frequently different for property managers); a unique invoice number; the service date or date range; itemized lines separating the standard clean from any add-ons; subtotal, tax if your state taxes cleaning services, and total; and payment terms. The service address and the service dates are the two fields cleaning invoices most often omit, and both cause approval delays.",
      },
      {
        q: "Should I charge per hour or per job for cleaning?",
        a: "Flat rate per job is better for residential work you have seen before — it rewards you for getting faster and clients prefer a known number. Hourly is the honest choice for first-time deep cleans, move-outs, and post-construction jobs where the scope is genuinely unknown, but quote an hourly rate with a not-to-exceed cap so the client is not signing a blank cheque. Many cleaners run both: flat rate for recurring accounts, hourly with a two-hour minimum for one-offs.",
      },
      {
        q: "Do I charge sales tax on cleaning services?",
        a: "It depends entirely on your state. Cleaning services are taxable in some states (Texas, New York, Connecticut, and others tax residential or commercial cleaning under specific rules) and untaxed in many others, and a few tax commercial but not residential. Check your state's department of revenue rather than copying what another cleaner does — the rules are unusually inconsistent for this trade. This template lets you set any tax rate or leave it at zero.",
      },
      {
        q: "How do I invoice a recurring cleaning client?",
        a: "Bill monthly in arrears with one line per visit and the date in each description, or a single line covering the period with the dates listed. Monthly beats per-visit for both payment reliability and your own admin time. Put your cancellation window on the invoice notes — a same-day cancellation you still paid a crew for is only billable if the policy existed in writing first.",
      },
    ],
    guideSlug: "how-to-invoice-for-cleaning-services",
    guideLabel: "How to invoice for cleaning services",
  },

  landscaping: {
    slug: "landscaping",
    trade: "Landscaping & Lawn Care",
    icon: "🌿",
    metaTitle: "Free Landscaping & Lawn Care Invoice Template — Download PDF | InvoiceQuick",
    metaDescription:
      "A free lawn care and landscaping invoice template. Bill per cut, per season, or per install — itemize mowing, materials, disposal, and equipment, then download a professional PDF. No sign-up required.",
    tagline:
      "For lawn maintenance routes, seasonal contracts, and one-off landscape installs.",
    intro: [
      "Lawn care runs two completely different billing shapes out of the same truck. Maintenance is a route: high volume, low value per stop, and the invoice only works if it is cheap to produce and covers a whole month at once. Installs are projects: plants, hardscape, materials, disposal, and a deposit, where the invoice needs to look like a construction document. Using one shape for the other is the usual cause of both slow payment and unbilled work.",
      "The line that most often goes unbilled in this trade is disposal. Clippings, brush, stumps, and old sod all cost you dump fees and truck time, and none of it is visible to the client once the truck leaves. If disposal is not its own line, it silently comes out of your margin. The same goes for material markup on an install — plants and stone bought at wholesale and installed at retail is a legitimate, standard part of the business, but only when the invoice shows materials and labor as separate lines.",
    ],
    billingModel:
      "Maintenance is per cut or per month on a seasonal contract (total season price ÷ months, billed evenly). Installs are quoted per project with a deposit, materials and labor separated. Cleanups and one-offs are per job or hourly with a minimum.",
    lineItems: [
      {
        description: "Weekly mowing — 4 cuts (dates listed)",
        unit: "per cut, billed monthly",
        note: "One monthly invoice per property. Per-cut invoicing on a 60-stop route is unpayable admin.",
      },
      {
        description: "Seasonal contract — monthly installment 4 of 8",
        unit: "per month",
        note: "Number the installment. It stops the 'we already paid you' call in month six.",
      },
      {
        description: "Spring / fall cleanup — leaf and debris removal",
        unit: "per job or hourly",
        note: "Scope by property size and leaf load. Cleanups blow past estimates more than any other line.",
      },
      {
        description: "Mulch — 6 cu yd installed",
        unit: "per cubic yard",
        note: "Quantity in the unit the client can verify. 'Mulch — $480' invites a challenge.",
      },
      {
        description: "Plant material — per plant list attached",
        unit: "per unit",
        note: "Separate from labor. Bundled plant-and-labor lines get compared to nursery retail prices.",
      },
      {
        description: "Debris disposal and dump fees",
        unit: "per load or per job",
        note: "The most commonly unbilled cost in the trade. Make it a line every single time.",
      },
      {
        description: "Fertilizer / weed control application",
        unit: "per application",
        note: "Note the product and application date — several states require it on the record anyway.",
      },
      {
        description: "Equipment charge — stump grinder, aerator, skid steer",
        unit: "per day or per job",
        note: "Rented or owned, the machine is a cost. Bill it as a line, not inside a labor rate.",
      },
    ],
    gotchas: [
      "Disposal folded into labor. Dump fees and haul-away time are real money and invisible to the client unless itemized.",
      "Per-cut invoicing on a maintenance route. Bill monthly — the admin cost of 60 small invoices exceeds the value of several of them.",
      "Seasonal contract installments with no number. Clients lose track of where they are in an 8-month split; 'installment 4 of 8' ends the dispute before it starts.",
      "Materials and labor on one line. It lets the client price-check your plants against a garden centre and conclude you overcharged.",
      "No rain-delay or reschedule note. If a skipped week still bills under a seasonal contract, the contract terms need to appear on the invoice.",
    ],
    faqs: [
      {
        q: "What should a lawn care invoice include?",
        a: "Business name and contact details, any state pesticide or landscape license number, the client and the property address, a unique invoice number, the service dates covered, itemized lines separating labor from materials and disposal, subtotal and tax if applicable, and payment terms. For seasonal contracts, add which installment this is out of the total so the client can reconcile it against the agreement.",
      },
      {
        q: "How do I bill a seasonal lawn care contract?",
        a: "Price the full season, then divide it into equal monthly installments across the months you agreed — commonly 8 payments covering a March-to-October season, or 12 to smooth the client's cash flow across the year. Bill the same amount on the same day each month and label the installment number. The whole benefit of the seasonal model is that neither side re-negotiates in a heavy-growth week or a drought month, so the invoice should never vary with the number of cuts.",
      },
      {
        q: "Should I charge for mulch and plants at cost?",
        a: "No — a markup on materials is standard across the trade and covers your sourcing, hauling, waste, and warranty on plant material that dies. What matters is that materials and labor appear as separate lines so the client sees a coherent structure rather than one large unexplained number. If a client asks you to pass materials through at cost, price the labor accordingly; you cannot do both.",
      },
      {
        q: "How do I handle a client who cancels a scheduled cut?",
        a: "Put the cancellation window in your service agreement and repeat it in your invoice notes. A route stop cancelled the morning of is a slot you cannot resell, and it is billable — but only if the policy pre-existed the cancellation in writing. Under a seasonal contract, skipped cuts normally do not reduce the installment, which is exactly why the contract terms should be stated on the invoice itself.",
      },
    ],
    guideSlug: "how-to-invoice-for-lawn-care-and-landscaping",
    guideLabel: "How to invoice for lawn care and landscaping",
  },

  construction: {
    slug: "construction",
    trade: "Construction",
    icon: "🏗️",
    metaTitle: "Free Construction Invoice Template — Progress Billing & Retainage | InvoiceQuick",
    metaDescription:
      "A free construction invoice template with progress billing, retainage, change orders, and materials vs labor separated. Fill it in and download a professional PDF. No sign-up required.",
    tagline:
      "Progress billing, retainage, change orders, and stored materials — structured the way GCs and lenders expect.",
    intro: [
      "A construction invoice is reviewed by someone whose job is to find a reason not to pay it yet. That is not cynicism — on any funded project the general contractor, the owner's rep, and often a lender's inspector each verify the billed percentage against what is actually standing on site before a draw is released. An invoice that says 'framing — $42,000' with no schedule of values, no percent complete, and no prior-billed column gives all three of them a reason to send it back.",
      "The two lines that decide whether you get paid on time are retainage and change orders. Retainage — usually 5 or 10% held until substantial completion — has to be shown as a deduction on the face of the invoice, or your books and the GC's will disagree by exactly that amount for the life of the project. Change orders must be billed as separately numbered lines referencing the signed CO, never absorbed into a base contract line, because a change order buried inside a progress line is the single most common cause of a rejected draw.",
    ],
    billingModel:
      "Progress billing against a schedule of values: each line shows the scheduled value, percent complete this period, amount previously billed, and amount due now. Retainage is deducted from the total. Change orders are billed as numbered additions. Small jobs may bill time and materials or a fixed lump sum with a deposit.",
    lineItems: [
      {
        description: "Contract line 03100 — Concrete forms, 60% complete this period",
        unit: "% of scheduled value",
        note: "Percent complete plus the SOV code is what an inspector verifies against.",
      },
      {
        description: "Previously billed to date",
        unit: "running total",
        note: "Show it. Without it the reviewer cannot confirm you are not double-billing a phase.",
      },
      {
        description: "Change order #4 — added footing depth per RFI 11 (signed 8/2)",
        unit: "per approved CO",
        note: "Numbered, dated, referencing the signed CO. Never absorb a CO into a base line.",
      },
      {
        description: "Labor — 6 crew × 38 hrs @ trade rate",
        unit: "per hour",
        note: "On T&M work, hours by crew and classification. Prevailing-wage jobs require the classification.",
      },
      {
        description: "Materials delivered and stored on site",
        unit: "per invoice, receipts attached",
        note: "Stored materials are billable on most contracts — but usually only with supplier invoices attached.",
      },
      {
        description: "Equipment — excavator, 3 days",
        unit: "per day or per hour",
        note: "Owned equipment bills at a published rate too. Idle standby time is a separate rate.",
      },
      {
        description: "Retainage held — 10% of this draw",
        unit: "deduction",
        note: "Shown as a negative on the invoice face, so both ledgers agree from day one.",
      },
      {
        description: "Permit and inspection fees",
        unit: "pass-through",
        note: "Pass-throughs need receipts. Marked-up permits are a frequent audit finding.",
      },
    ],
    gotchas: [
      "Change orders folded into base contract lines. The fastest way to have a whole draw rejected rather than partially paid.",
      "No retainage line. If you invoice the gross and the GC pays the net, your AR is permanently wrong by the retained amount and nobody catches it until closeout.",
      "Missing the prior-billed column. The reviewer cannot verify the period amount and will hold the draw until they can.",
      "Billing stored materials with no supplier invoices attached. Most contracts allow it; almost none allow it undocumented.",
      "Ignoring the lien deadline. Preliminary notice and lien filing windows run from first furnishing or last work — invoice dates are the evidence, so keep them accurate and keep the copies.",
    ],
    faqs: [
      {
        q: "What is progress billing on a construction invoice?",
        a: "Progress billing charges for the portion of contracted work completed during a specific period rather than the whole job at the end. Each line of the schedule of values shows its scheduled value, the percent complete as of this period, the amount previously billed, and the amount due now. The structure exists so the owner, the GC, and any lender's inspector can each verify the claim against physical progress on site. The industry-standard forms for this are AIA G702/G703; a plain invoice works on smaller jobs as long as it carries the same columns.",
      },
      {
        q: "How do I show retainage on an invoice?",
        a: "List the gross amount earned this period, then show retainage as an explicit deduction line — for example 'Less 10% retainage — ($4,200)' — and present the net as the amount due. Never invoice only the net without showing the retained amount, because your receivable and the GC's payable then disagree for the life of the project and the retainage release at closeout becomes an argument. Some states cap the retainage percentage or require it held in escrow, so check your state's prompt-payment statute.",
      },
      {
        q: "How should change orders appear on a construction invoice?",
        a: "As their own numbered lines, referencing the change order number and its signature date, kept visually separate from base contract lines. A change order absorbed into a progress line makes the base line exceed its scheduled value, which is exactly the anomaly a reviewer is scanning for, and the usual result is that the entire draw is held rather than the disputed portion. Never invoice unsigned work as a change order — invoice it only once the CO is executed, and chase the signature separately.",
      },
      {
        q: "When should a construction invoice be sent?",
        a: "On the contract's billing cycle, which is usually monthly with a cutoff date — often the 25th — so the GC can assemble the owner draw. Missing the cutoff by a day typically pushes your payment a full month, which is the most avoidable cash-flow injury in the trade. Put the billing period explicitly on the invoice, and on T&M work send it while the work is still fresh enough for the field to verify the hours.",
      },
    ],
    guideSlug: "how-to-invoice-for-construction-work",
    guideLabel: "How to invoice for construction work",
  },

  plumbing: {
    slug: "plumbing",
    trade: "Plumbing",
    icon: "🔧",
    metaTitle: "Free Plumbing Invoice Template — Service Call, Parts & Labor | InvoiceQuick",
    metaDescription:
      "A free plumbing invoice template with the service call fee, labor, parts markup, and permit lines already structured. Fill it in and download a professional PDF. No sign-up required.",
    tagline:
      "Service-call fee, labor, parts, and permits — laid out the way a plumbing invoice actually needs to read.",
    intro: [
      "The service call fee is the line that makes or breaks a plumbing invoice. Charge it invisibly and the customer thinks they were billed an hour for twenty minutes of work; show it as its own line — with a note saying whether it is credited toward the repair — and the same total reads as fair. Almost every plumbing billing complaint traces back to this one presentation choice rather than to the price itself.",
      "The second is parts. A markup on parts is standard and legitimate: it covers your truck stock, the trip to the supply house, and the warranty you carry on the part. But a line that reads 'parts — $340' next to a customer who can look up the same fixture online for $180 creates an argument you will lose on optics. Itemize the parts, and keep labor on its own line, and the same invoice stops looking like a mystery.",
    ],
    billingModel:
      "Either flat-rate per task from a price book, or time and materials: service call fee, labor at an hourly rate with a minimum, parts at cost plus markup. Emergency and after-hours work bills at a premium rate stated up front. Permits and inspection fees pass through.",
    lineItems: [
      {
        description: "Service call / diagnostic fee — credited toward repair",
        unit: "per visit",
        note: "State the credit policy in the line. It converts the most-complained-about charge into a fair one.",
      },
      {
        description: "Labor — 2.5 hrs @ standard rate",
        unit: "per hour, 1 hr minimum",
        note: "Say the minimum and the rounding increment. Vague hours are the top dispute after parts.",
      },
      {
        description: "After-hours / emergency premium — Sunday call",
        unit: "premium rate",
        note: "Only defensible if quoted before dispatch. Put the day and time on the line.",
      },
      {
        description: "Parts — 3/4\" ball valve, supply lines, solder",
        unit: "per part",
        note: "Itemized parts survive a price check. A single lumped 'parts' figure does not.",
      },
      {
        description: "Water heater — 50 gal, installed",
        unit: "per unit installed",
        note: "Equipment installs bill as a unit. Note the model and serial for the warranty claim later.",
      },
      {
        description: "Drain cleaning / camera inspection",
        unit: "per job",
        note: "Camera work is a separate service, not part of a snake job. Bill it as one.",
      },
      {
        description: "Permit and inspection fee",
        unit: "pass-through",
        note: "Water heaters, repipes, and gas work usually require one. Pass it through at cost with the receipt.",
      },
      {
        description: "Haul-away and disposal — old water heater",
        unit: "per item",
        note: "Disposal is a real cost with a real fee at the transfer station. It is billable.",
      },
    ],
    gotchas: [
      "Service call fee hidden inside labor. The customer reads the total as an overcharge for a short visit.",
      "A single lumped 'parts' line. It invites the online price check you cannot win. Itemize.",
      "Emergency premium applied after the fact. If the rate was not stated before dispatch, expect to eat it.",
      "No license number on the invoice. Several states require the plumbing license on the billing document, and permit offices ask for it.",
      "Missing the warranty terms. If your labor carries a 90-day and the part carries the manufacturer's, saying so on the invoice prevents a free callback in month four.",
    ],
    faqs: [
      {
        q: "What should a plumbing invoice include?",
        a: "Your business name, contact details, and plumbing license number; the customer and the service address; a unique invoice number and the service date; a clear description of the problem diagnosed and the work performed; the service call fee shown separately; labor hours and rate; itemized parts; permit fees passed through; subtotal, tax, and total; your warranty terms; and payment terms. The diagnosis line matters more than plumbers expect — it is what justifies the labor when the customer only saw twenty minutes of visible work.",
      },
      {
        q: "Should I charge a service call fee?",
        a: "Yes, and show it as its own line. The trip, the truck, the fuel, and the diagnostic time are real costs you incur before any repair is authorized. The decision that matters is whether the fee is credited toward the repair if the customer proceeds — most residential plumbers credit it and say so on the invoice, which converts the fee from a grievance into an obvious incentive to approve the work. Whatever your policy, state it in the line description rather than leaving the customer to infer it.",
      },
      {
        q: "How much should I mark up plumbing parts?",
        a: "Markup in the trade commonly runs 25–100% depending on the part's cost and how much truck stock and warranty exposure it carries, with the highest percentages on small, cheap parts where the real cost is the trip to fetch them. The presentation matters more than the number: itemize each part so the invoice shows a structure rather than a lump. If you use flat-rate pricing from a price book instead, the markup is already inside the task price — in that case do not also itemize parts, or you will appear to be charging twice.",
      },
      {
        q: "Do I need to put my license number on a plumbing invoice?",
        a: "In many states, yes — contractor and plumbing licensing statutes require the license number on contracts, bids, and invoices, and some require the licensing board's contact information as well. Even where it is not required, include it: permit offices, insurers, and commercial property managers routinely will not process payment without it, and it is free credibility on a residential job where the customer is deciding whether you are the real thing.",
      },
    ],
    guideSlug: "how-to-invoice-for-plumbing-services",
    guideLabel: "How to invoice for plumbing services",
  },

  electrical: {
    slug: "electrical",
    trade: "Electrical",
    icon: "⚡",
    metaTitle: "Free Electrical Invoice Template — Labor, Materials & Permits | InvoiceQuick",
    metaDescription:
      "A free electrical contractor invoice template with labor, materials, permit and inspection fees, and license number. Fill it in and download a professional PDF. No sign-up required.",
    tagline:
      "For electrical contractors billing service calls, panel work, and permitted installs.",
    intro: [
      "Electrical invoices carry a compliance burden that most trades do not. The permit and the inspection are part of the deliverable, not overhead — a panel upgrade or a service change that has not passed inspection is not finished work, and the invoice should show the permit fee, the inspection status, and the license number that makes the whole job legal. On residential resale, that paperwork gets pulled years later during a home sale, and your invoice is the record.",
      "The other structural issue is the gap between a service call and a project. A troubleshooting visit is diagnostic labor — the customer is paying for the finding, and the finding may be that nothing needs replacing. A panel upgrade is a project with materials, a permit, and an inspection. Billing the first like the second makes a small job look padded; billing the second like the first leaves the permit and inspection time unpaid.",
    ],
    billingModel:
      "Service work bills a diagnostic/trip fee plus hourly labor with a minimum, or flat-rate per task from a price book. Projects bill a fixed quote with a deposit, materials and labor separated, permits passed through. Commercial and prevailing-wage work bills hourly by classification.",
    lineItems: [
      {
        description: "Diagnostic / troubleshooting — 1.5 hrs",
        unit: "per hour, 1 hr minimum",
        note: "The finding is the deliverable. Describe what you traced, not just 'troubleshoot'.",
      },
      {
        description: "Labor — journeyman, 8 hrs @ rate",
        unit: "per hour by classification",
        note: "Classification matters on commercial and prevailing-wage jobs. Name it.",
      },
      {
        description: "200A panel upgrade — labor and installation",
        unit: "per job",
        note: "Fixed-scope project line. Note the panel make and model for the inspection record.",
      },
      {
        description: "Materials — breakers, conductors, conduit, devices",
        unit: "itemized",
        note: "Copper prices move. Itemizing protects the quote when material cost is the variable.",
      },
      {
        description: "Permit fee — city electrical permit #_____",
        unit: "pass-through",
        note: "Put the permit number on the invoice. It is what a future buyer's inspector looks for.",
      },
      {
        description: "Inspection scheduling and meet — utility/AHJ",
        unit: "per visit",
        note: "Waiting for an inspector is billable time. It is almost never billed.",
      },
      {
        description: "EV charger install — 60A circuit, load calculation",
        unit: "per install",
        note: "Load calc is real engineering work. Name it so it does not read as padding.",
      },
      {
        description: "Emergency / after-hours premium",
        unit: "premium rate",
        note: "Quote it before dispatch. Retroactive premiums do not get paid.",
      },
    ],
    gotchas: [
      "No permit number on the invoice. It resurfaces years later at resale, and its absence makes the work look unpermitted.",
      "Inspection wait time unbilled. Meeting the AHJ is scheduled, unavoidable labor that most electricians absorb for free.",
      "Materials lumped into one line while copper prices move. Itemized materials are what let you defend a quote revision.",
      "Missing license number. Required on invoices in many states, and required in practice by every commercial client.",
      "Diagnostic described as 'troubleshoot'. The customer paid for a finding — write the finding, or the labor looks unearned.",
    ],
    faqs: [
      {
        q: "What should an electrical invoice include?",
        a: "Business name, contact details, and your electrical contractor license number; the customer and the job address; invoice number and service date; a description of the work performed including the circuits, panels, or devices involved; labor with hours and classification; itemized materials; permit and inspection fees passed through with the permit number; subtotal, tax, and total; warranty terms; and payment terms. On permitted work, the permit number on the invoice is the single most valuable field for the customer's future records.",
      },
      {
        q: "Should permit fees be marked up?",
        a: "Pass the permit fee through at cost and bill your time for pulling it as a separate labor line. Marking up a government fee reads badly if the customer checks the city's published schedule — which is public and easy to find — while billing the hour it took you to pull the permit and the hour spent meeting the inspector is entirely legitimate and usually not billed at all. Naming those lines is a straightforward way to recover real time you are currently giving away.",
      },
      {
        q: "How do I invoice for an EV charger installation?",
        a: "Treat it as a project rather than a service call: a line for the load calculation, a line for the circuit and panel work with the amperage stated, itemized materials, the charger unit if you supplied it, the permit fee with the permit number, and the inspection meet. Note the charger's make, model, and the installed circuit rating on the invoice — utility rebate programs and the customer's insurer both ask for exactly that information, and being the contractor whose invoice already contains it is worth referrals.",
      },
      {
        q: "Do electrical invoices need a license number?",
        a: "In most states electrical contractors are required to display their license number on contracts and invoices, and some also require the licensing board's contact details. Beyond the legal requirement, permit offices, commercial property managers, and insurance carriers routinely refuse to process an invoice without it. Put it in your business header so it appears on every document automatically rather than remembering it per job.",
      },
    ],
    guideSlug: "how-to-invoice-for-electrical-work",
    guideLabel: "How to invoice for electrical work",
  },

  hvac: {
    slug: "hvac",
    trade: "HVAC",
    icon: "❄️",
    metaTitle: "Free HVAC Invoice Template — Service, Refrigerant & Equipment | InvoiceQuick",
    metaDescription:
      "A free HVAC invoice template covering diagnostic fees, refrigerant, equipment installs, maintenance agreements, and warranty parts. Fill in and download a PDF. No sign-up required.",
    tagline:
      "Diagnostic fees, refrigerant, equipment installs, and maintenance agreements in one structure.",
    intro: [
      "HVAC has the widest gap of any trade between what the customer sees and what the invoice says. A capacitor is a fifteen-dollar part and a twenty-minute visit, and the bill is a few hundred dollars — entirely fairly, once you count the truck, the tech's training, the diagnostic, and the fact that you answered on the hottest day of the year. But the invoice has to make that structure visible. A single line reading 'AC repair — $385' produces a phone call; the same total split into diagnostic, labor, and part does not.",
      "Refrigerant is the other line that needs care. It is metered by the pound, it is expensive, it is regulated, and a system that needed refrigerant almost certainly has a leak. Bill the refrigerant by weight, note the type, and put the leak finding on the invoice — both because the EPA record matters and because it is the documentation that turns a repeat callback into an approved repair rather than an argument about why the charge did not hold.",
    ],
    billingModel:
      "Service bills a diagnostic fee plus flat-rate per task or hourly labor, with refrigerant metered by the pound. Installs bill per unit with equipment, labor, materials, permit, and old-unit disposal. Maintenance agreements bill annually or monthly and cover scheduled visits at a discounted rate.",
    lineItems: [
      {
        description: "Diagnostic fee — system evaluation",
        unit: "per visit",
        note: "Say whether it credits toward the repair. Same fairness effect as the plumbing service call.",
      },
      {
        description: "Labor — 2 hrs @ standard rate",
        unit: "per hour, minimum applies",
        note: "Peak-season and after-hours rates should be named as such, not silently applied.",
      },
      {
        description: "R-410A refrigerant — 3.5 lbs",
        unit: "per pound",
        note: "By weight, with the refrigerant type. Required for the record, and it defends the price.",
      },
      {
        description: "Leak search and repair — evaporator coil",
        unit: "per job",
        note: "Adding refrigerant without documenting the leak is what makes the next visit a fight.",
      },
      {
        description: "Condenser / air handler — 3 ton, installed",
        unit: "per unit",
        note: "Record make, model, and serial. Every future warranty claim depends on this line.",
      },
      {
        description: "Part replaced under manufacturer warranty — labor only",
        unit: "labor only",
        note: "Show the part at $0 with 'warranty' noted. It proves you did not charge for a covered part.",
      },
      {
        description: "Maintenance agreement — annual, 2 visits",
        unit: "per year or per month",
        note: "Bill the agreement separately from the repair it discounted, and show the discount.",
      },
      {
        description: "Old equipment removal and disposal",
        unit: "per unit",
        note: "Refrigerant recovery and metal disposal are regulated and cost real money.",
      },
    ],
    gotchas: [
      "One lumped 'AC repair' line. The customer saw twenty minutes of work; the structure is what makes the total read as fair.",
      "Refrigerant billed as a flat fee. Meter it by the pound and name the type — it is a regulated substance and a large cost line.",
      "Refrigerant added with no leak finding on the invoice. Guarantees a disputed callback when the charge drops again.",
      "Warranty parts left off entirely. Listing the part at $0 with 'covered under manufacturer warranty' is what proves you did not bill for it.",
      "Maintenance-agreement discounts applied invisibly. Show the list price and the member discount, or the agreement never demonstrates its value at renewal.",
    ],
    faqs: [
      {
        q: "What should an HVAC invoice include?",
        a: "Business name, contact details, and HVAC/EPA certification or license number; customer and service address; invoice number and date; equipment make, model, and serial number; the diagnostic finding; labor hours and rate; parts itemized with warranty status noted; refrigerant type and weight added; permit fees on installs; disposal of old equipment; subtotal, tax, and total; warranty terms; and payment terms. The model and serial numbers are the fields customers most often need later and technicians most often omit.",
      },
      {
        q: "How should refrigerant be billed?",
        a: "By the pound, with the refrigerant type named — R-410A, R-32, or R-22, which is phased out and priced accordingly. Metering it by weight is both the regulated way to document a charge and the presentation that defends an expensive line, because a per-pound rate times a stated weight is arithmetic the customer can follow. Always record the leak diagnosis alongside it: a system taking refrigerant has a leak by definition, and an invoice that adds refrigerant without documenting why is the setup for a dispute on the next callback.",
      },
      {
        q: "How do I invoice a job covered by a manufacturer warranty?",
        a: "List the covered part on its own line at $0.00 with 'covered under manufacturer warranty' in the description, then bill your labor, refrigerant, and any non-covered materials normally. Manufacturer warranties on residential equipment almost always cover the part and not the labor, and customers frequently believe otherwise — an invoice that shows the part at zero makes the distinction concrete instead of argumentative, and it is also the document the customer needs if they later pursue a claim.",
      },
      {
        q: "Should I offer a maintenance agreement, and how do I bill it?",
        a: "Maintenance agreements are the most reliable revenue in the trade: they smooth the seasonal swing, they schedule your slow months, and agreement holders call you first in an emergency. Bill the agreement as its own invoice — annually up front or monthly — and keep it separate from repair invoices. When an agreement discount applies to a repair, show the list price and the member discount as separate lines so the value of the agreement is visible every time the customer reads a bill.",
      },
    ],
    guideSlug: "how-to-invoice-for-hvac-service",
    guideLabel: "How to invoice for HVAC service",
  },

  handyman: {
    slug: "handyman",
    trade: "Handyman",
    icon: "🛠️",
    metaTitle: "Free Handyman Invoice Template — Hourly, Half-Day & Materials | InvoiceQuick",
    metaDescription:
      "A free handyman invoice template for hourly, half-day, and per-task billing, with materials, trip charge, and disposal lines. Fill in and download a professional PDF. No sign-up.",
    tagline:
      "For multi-task visits billed hourly, by the half-day, or per task — with materials kept separate.",
    intro: [
      "The handyman invoice problem is the punch list. A visit is rarely one job; it is a door that sticks, a leaking trap, two blinds, and a TV mount, and the customer remembers the four tasks while the invoice shows six hours. Listing the tasks — even when you bill by the hour and not per task — is what makes the hours legible. It costs nothing and it removes almost the entire category of handyman billing disputes.",
      "The second is the small-job minimum. Driving across town for a twenty-minute fix costs you an hour of unbillable travel, which is why a minimum charge or half-day rate is standard and reasonable. It just has to be quoted before the visit and shown on the invoice as its own line. A minimum that appears for the first time on the bill reads as a penalty; the same minimum stated up front reads as a policy.",
    ],
    billingModel:
      "Hourly with a stated minimum (commonly 1–2 hours), half-day and full-day rates for larger punch lists, or flat rate per task for common jobs. Materials billed at cost plus markup or passed through with receipts. Trip charge outside the service area.",
    lineItems: [
      {
        description: "Labor — 6 hrs (see task list below)",
        unit: "per hour, 2 hr minimum",
        note: "Pair the hours with the task list. Hours alone always feel high on a multi-task visit.",
      },
      {
        description: "Tasks completed: door adjustment, trap replacement, 2 blinds, TV mount",
        unit: "descriptive",
        note: "The single highest-value line on a handyman invoice. It converts hours into visible work.",
      },
      {
        description: "Half-day rate — 4 hrs",
        unit: "per half day",
        note: "Cleaner than hourly for a planned punch list, and it protects your scheduling block.",
      },
      {
        description: "Minimum service charge",
        unit: "per visit",
        note: "Only fair if quoted before the visit. Then it is a policy, not a surprise.",
      },
      {
        description: "Materials — hardware, caulk, fasteners, trap kit",
        unit: "itemized or pass-through",
        note: "Itemize. Small-material lumps are the second-biggest complaint after hours.",
      },
      {
        description: "Materials pickup / supply run — 45 min",
        unit: "per hour",
        note: "Real, billable, and routinely given away for free.",
      },
      {
        description: "Trip charge — outside standard service area",
        unit: "per trip or per mile",
        note: "State the mileage threshold so it does not look arbitrary.",
      },
      {
        description: "Debris removal and disposal",
        unit: "per load",
        note: "Old fixtures, packaging, and demo debris cost dump fees. Bill them.",
      },
    ],
    gotchas: [
      "Hours with no task list. Six hours reads as expensive; six hours next to eleven completed tasks reads as a bargain.",
      "A minimum charge revealed on the invoice. Quote it when the appointment is booked or expect to waive it.",
      "Supply runs given away. The trip to the hardware store is working time on the customer's job.",
      "Scope creep absorbed silently. 'While you're here' tasks are billable — add them as lines rather than swallowing them and resenting it.",
      "Work that legally requires a licensed trade. Most states cap unlicensed handyman work by dollar value and exclude electrical, plumbing, and gas outright — invoicing it creates real exposure.",
    ],
    faqs: [
      {
        q: "What should a handyman invoice include?",
        a: "Your business name and contact details, any license or registration number your state requires, the customer and service address, an invoice number and date, a list of the tasks completed, labor hours with your rate and stated minimum, itemized materials, any trip charge or disposal, subtotal, tax if your state taxes labor, total, and payment terms. The task list is the field that distinguishes a handyman invoice from every other trade's, and it is the one that most reliably prevents a dispute.",
      },
      {
        q: "Should a handyman charge hourly or per job?",
        a: "Hourly with a minimum works best for unpredictable punch lists, which is most handyman work — the customer keeps adding tasks and hourly billing handles that naturally. Flat rate per task is better for jobs you have done a hundred times and can price confidently, like mounting a TV or replacing a garbage disposal, and customers prefer a known number. Many handymen run both: a published flat rate for common tasks and an hourly rate with a two-hour minimum for everything else. A half-day rate is the useful middle for a planned list.",
      },
      {
        q: "Can I charge a minimum service fee?",
        a: "Yes, and you should. A one-hour or two-hour minimum reflects the fact that travel, setup, and scheduling consume the same resources whether the fix takes twenty minutes or two hours. The only requirement is that the customer knows before you drive out — state it when booking, and show it on the invoice as its own line rather than by quietly rounding the hours up, which is what makes customers feel misled even when the total is identical.",
      },
      {
        q: "Do I need a license to invoice as a handyman?",
        a: "It varies sharply by state and by dollar value. Many states allow unlicensed handyman work below a threshold — often somewhere between $500 and $1,000 per job — and require a contractor license above it, while electrical, plumbing, gas, and HVAC work generally require the specific trade license at any value. Invoicing for work you were not licensed to perform can make the contract unenforceable and void your insurance, so check your state's contractor board before you take the job, not after you bill it.",
      },
    ],
    guideSlug: "how-to-invoice-for-handyman-services",
    guideLabel: "How to invoice for handyman services",
  },

  painting: {
    slug: "painting",
    trade: "Painting",
    icon: "🎨",
    metaTitle: "Free Painting Invoice Template — Per Room, Per Sq Ft & Materials | InvoiceQuick",
    metaDescription:
      "A free painting contractor invoice template with prep, coats, materials, and per-room or per-square-foot pricing. Fill it in and download a professional PDF. No sign-up required.",
    tagline:
      "Prep, coats, and materials itemized — for interior, exterior, and commercial painting.",
    intro: [
      "Prep is 60% of a paint job and 0% of what the customer sees. Scraping, sanding, patching, caulking, masking, and priming are the difference between a finish that lasts eight years and one that peels in two, and if the invoice says only 'paint living room' then the customer has priced your labor against the cost of a gallon of paint. Itemizing prep separately from application is the single most effective change a painting contractor can make to how their invoices land.",
      "The second is coats. 'Two coats' is not a detail — it is a doubling of the application labor, and it is the first thing a cheaper competitor quietly drops. Put the number of coats, the product line, and the sheen on the invoice. It documents what the customer bought, it protects you when a single-coat competitor's price gets waved at you, and it is the record you need if the finish is ever questioned.",
    ],
    billingModel:
      "Interior work prices per room or per square foot of wall area; exterior prices per square foot of surface with a height/access factor. Commercial and repaints often bid as a lump sum with a deposit and progress payments. Materials either included in the bid or billed separately at cost plus markup.",
    lineItems: [
      {
        description: "Surface prep — scrape, sand, patch, caulk (12 hrs)",
        unit: "per hour or per room",
        note: "The most valuable line to break out. Invisible work that is most of the job.",
      },
      {
        description: "Primer — 1 coat, stain-blocking",
        unit: "per coat",
        note: "Primer is a separate coat and a separate product. It is not included in 'two coats'.",
      },
      {
        description: "Interior walls — 2 coats, eggshell (living/dining/hall)",
        unit: "per room or per sq ft",
        note: "Coats, sheen, and rooms. This line is your defence against a one-coat competitor's price.",
      },
      {
        description: "Trim, doors, and casings — 2 coats semi-gloss",
        unit: "per linear ft or per unit",
        note: "Trim is slow, detailed work priced differently from walls. Never bundle it in.",
      },
      {
        description: "Ceilings — 1 coat flat",
        unit: "per sq ft",
        note: "Different product, different coverage, often a different coat count.",
      },
      {
        description: "Exterior — siding and trim, 2 coats, 2-story access",
        unit: "per sq ft + access factor",
        note: "Height and access drive exterior cost more than area. Say which applies.",
      },
      {
        description: "Materials — paint, primer, caulk, masking, sundries",
        unit: "itemized or included",
        note: "Name the product line. 'Paint' and 'premium paint' are a 3× price difference.",
      },
      {
        description: "Furniture moving, masking, and daily cleanup",
        unit: "per job",
        note: "Protection and cleanup are labor the customer expects and never pictures being paid for.",
      },
    ],
    gotchas: [
      "Prep folded into the paint line. It is most of the labor and all of the durability, and it is invisible unless you write it down.",
      "No coat count on the invoice. It is the first thing a low bidder drops and the first thing you will be asked to prove.",
      "No product line named. 'Paint' spans a 3× price range; naming the line justifies your material cost.",
      "Colour changes absorbed for free. A customer switching colours after purchase means new material and often an extra coat — that is a change order.",
      "Deposit not shown as applied. On a bid job the invoice must show contract total, deposit received, and balance due, or the customer reads the balance as the whole price again.",
    ],
    faqs: [
      {
        q: "What should a painting invoice include?",
        a: "Business name, contact details, and license number where required; customer and job address; invoice number and date; the areas painted named specifically; prep work itemized separately from application; the number of coats, the product line, and the sheen for each surface type; materials; the contract total, any deposit received, and the balance due; subtotal, tax, and total; warranty on workmanship; and payment terms. Coats and product name are the two fields that protect you months later if the finish is questioned.",
      },
      {
        q: "Should I price painting per room or per square foot?",
        a: "Per room is faster to quote and easier for residential customers to understand, and it works well when rooms are conventionally sized. Per square foot of surface area is more accurate and is the norm on exteriors and commercial work, where a large open wall and a heavily cut-up one differ enormously in labor even at the same area. Whichever you quote from, itemize the invoice by area — the customer wants to see the living room, the hall, and the trim as separate lines regardless of how you arrived at the number.",
      },
      {
        q: "Should materials be included in the price or billed separately?",
        a: "Both are standard. Including materials in a bid gives the customer one clean number and lets you keep your margin private, which suits residential repaints. Billing materials separately at cost plus markup suits jobs where the customer is choosing premium products or where colour changes are likely, because it makes the cost consequence of their choices visible instead of a fight. If you include materials, still name the product line on the invoice so the specification is on record.",
      },
      {
        q: "How do I handle a customer who changes the colour mid-job?",
        a: "As a change order, priced and acknowledged before you carry it out. A colour change after paint has been purchased means unusable material, a trip to the supplier, and frequently an additional coat if the new colour has less coverage over the old. Note it as its own invoice line referencing the date the change was requested. Customers accept this readily when it is raised in the moment and almost never accept it when it appears for the first time on the final bill.",
      },
    ],
    guideSlug: "how-to-invoice-for-painting-jobs",
    guideLabel: "How to invoice for painting jobs",
  },

  roofing: {
    slug: "roofing",
    trade: "Roofing",
    icon: "🏠",
    metaTitle: "Free Roofing Invoice Template — Squares, Tear-Off & Insurance | InvoiceQuick",
    metaDescription:
      "A free roofing invoice template billing by the square, with tear-off, decking, underlayment, disposal, and insurance-claim lines. Fill in and download a PDF. No sign-up required.",
    tagline:
      "Billed by the square, with tear-off, decking, disposal, and insurance-claim structure built in.",
    intro: [
      "Roofing bills in squares — 100 square feet of roof surface — and the invoice should say so. A total with no square count, pitch, and layer count cannot be checked by the homeowner, the insurance adjuster, or the next contractor, and on an insurance job that is fatal: the carrier's estimate is written in squares against a specific pitch and material, and an invoice that does not use the same units cannot be reconciled with it.",
      "The line that most often goes unbilled is decking. You cannot know how much rotten sheathing is under a roof until the old one is off, which is why decking replacement belongs on every roofing contract as a per-sheet unit price agreed up front. Discovering rot and eating the cost is the standard way a profitable roof becomes a break-even one. Agreeing the unit price before tear-off, then billing the actual sheet count, turns the same discovery into a line the homeowner has already accepted.",
    ],
    billingModel:
      "Priced per square of roof area, adjusted for pitch, layers to tear off, and access. Decking replacement bills per sheet at an agreed unit price. Deposit up front, balance on completion; insurance jobs bill against the carrier's scope with ACV, depreciation, and deductible shown.",
    lineItems: [
      {
        description: "Tear-off — 28 squares, 2 layers, 6/12 pitch",
        unit: "per square",
        note: "Squares, layers, and pitch. All three change the labor and all three get verified.",
      },
      {
        description: "Architectural shingles installed — 28 squares",
        unit: "per square",
        note: "Name the product and colour. It is the warranty registration record.",
      },
      {
        description: "Synthetic underlayment and ice-and-water shield",
        unit: "per square / per roll",
        note: "Code-required in most northern jurisdictions. Bill it, and note the coverage.",
      },
      {
        description: "Decking replacement — 14 sheets @ agreed unit price",
        unit: "per sheet",
        note: "Agree the unit price BEFORE tear-off. This is the trade's most-eaten cost.",
      },
      {
        description: "Flashing, drip edge, pipe boots, ridge vent",
        unit: "per linear ft / per unit",
        note: "Detail work that adjusters expect itemized and homeowners never think about.",
      },
      {
        description: "Dumpster and debris disposal",
        unit: "per load",
        note: "A tear-off fills a dumpster. It is a large, real, separately-billable cost.",
      },
      {
        description: "Permit and final inspection",
        unit: "pass-through",
        note: "Most jurisdictions require a roofing permit. Pass it through with the number.",
      },
      {
        description: "Insurance claim — ACV paid, recoverable depreciation, deductible",
        unit: "claim structure",
        note: "Three separate amounts. Merging them is the top cause of a rejected supplement.",
      },
    ],
    gotchas: [
      "No square count on the invoice. Nobody — homeowner, adjuster, or lender — can verify the price without it.",
      "Decking discovered after tear-off with no agreed unit price. The single most common way a roofing job loses its margin.",
      "Insurance jobs invoiced as one number. ACV, recoverable depreciation, and the deductible are three separate amounts and the carrier reconciles all three.",
      "Offering to 'cover the deductible'. It is insurance fraud in most states and voids the claim — never put it on paper.",
      "No permit number. Roofing permits are pulled on nearly every full replacement and the number is what a future buyer's inspector looks for.",
    ],
    faqs: [
      {
        q: "What should a roofing invoice include?",
        a: "Business name, contact details, and roofing license number; homeowner and property address; invoice number and date; roof measurements in squares with pitch and the number of layers torn off; itemized lines for tear-off, underlayment, shingles with the product named, flashing and accessories, decking replacement by sheet count, and disposal; permit fee and number; the contract total with deposit applied and balance due; workmanship warranty separate from the manufacturer's material warranty; and payment terms.",
      },
      {
        q: "How do I bill for a roof by the square?",
        a: "A square is 100 square feet of roof surface — not floor area, which is why pitch matters: a steeper roof has more surface over the same footprint and takes longer and costs more to work safely. Measure the roof, state the square count, the pitch, and the number of existing layers on the invoice, and price tear-off and installation per square. Anyone checking your price — the homeowner, an adjuster, a lender — works in exactly these units, and an invoice that uses them is far faster to approve.",
      },
      {
        q: "How do I invoice an insurance roofing claim?",
        a: "Bill against the carrier's scope using their line structure, and show the three amounts separately: actual cash value already paid, recoverable depreciation released on completion, and the homeowner's deductible. Any work beyond the carrier's scope is a supplement, documented with photos and submitted separately rather than added quietly to the invoice. Never offer to waive or absorb the deductible — it is insurance fraud in most states, it voids the claim, and an invoice that hints at it is written evidence.",
      },
      {
        q: "How do I charge for decking replacement I could not see in the estimate?",
        a: "Set a per-sheet unit price in the contract before tear-off begins, and bill the actual count on the invoice. Rotten sheathing is genuinely invisible until the old roof is removed, so no honest estimate can include it, but a homeowner who signed a contract saying 'decking replacement: $__ per 4x8 sheet as required' has already agreed to the mechanism. Photograph the rot before you cover it — that is what turns a surprise line into an obvious one.",
      },
    ],
    guideSlug: "how-to-invoice-for-roofing-jobs",
    guideLabel: "How to invoice for roofing jobs",
  },

  "auto-repair": {
    slug: "auto-repair",
    trade: "Auto Repair",
    icon: "🚗",
    metaTitle: "Free Auto Repair Invoice Template — Parts, Labor & Shop Fees | InvoiceQuick",
    metaDescription:
      "A free auto repair invoice template with parts, labor hours, diagnostic fee, shop supplies, and vehicle details. Fill it in and download a professional PDF. No sign-up required.",
    tagline:
      "Parts, labor hours, diagnostics, and shop fees — with the vehicle details the record needs.",
    intro: [
      "An auto repair invoice is a service record as much as a bill. Year, make, model, VIN, and mileage at service belong on it, because that document follows the vehicle: it supports a warranty claim, it gets handed to the next buyer as evidence of maintenance, and it is what a manufacturer asks for when a customer claims a covered failure. A repair order without the VIN and the odometer reading is worth noticeably less to your customer than one with them, at zero extra cost to you.",
      "Labor is billed from a book time, not a stopwatch, in most of the industry — the flat-rate hours a job is allotted regardless of whether the technician beats or misses it. Customers who do not know this see three hours billed for a two-hour visit and assume padding. Saying 'labor — 3.2 hrs (flat rate)' on the invoice defuses the entire conversation, and it is more honest than quietly presenting book time as clock time.",
    ],
    billingModel:
      "Labor at a shop rate against flat-rate book times, parts at cost plus markup (higher on low-cost parts), a diagnostic fee that may credit toward the repair, plus shop supplies and hazardous waste disposal as a percentage or flat fee where state law allows.",
    lineItems: [
      {
        description: "Vehicle: 2019 Honda CR-V — VIN, 84,220 mi",
        unit: "record header",
        note: "VIN and odometer make the invoice a service record. Costs nothing, worth a lot.",
      },
      {
        description: "Diagnostic — scan, road test, findings",
        unit: "per hour or flat",
        note: "Say whether it credits toward the repair, and write the actual finding.",
      },
      {
        description: "Labor — 3.2 hrs (flat rate) @ shop rate",
        unit: "book hours",
        note: "Naming it flat rate prevents the 'you weren't here that long' argument.",
      },
      {
        description: "Parts — front brake pads and rotors (OEM/aftermarket noted)",
        unit: "per part",
        note: "Note OEM vs aftermarket. It is the difference the customer is actually comparing.",
      },
      {
        description: "Shop supplies",
        unit: "% of labor or flat",
        note: "Many states cap or regulate this. Check yours and disclose it.",
      },
      {
        description: "Hazardous waste / fluid disposal",
        unit: "per job",
        note: "Oil, coolant, and refrigerant disposal are regulated costs.",
      },
      {
        description: "Declined / recommended work — noted, not billed",
        unit: "$0.00",
        note: "Recording declined work at $0 protects you when the failure happens later.",
      },
      {
        description: "Warranty — 12 months / 12,000 miles on parts and labor",
        unit: "terms",
        note: "State it. It is a selling point and the answer to a future callback.",
      },
    ],
    gotchas: [
      "No VIN or mileage. Turns a service record into a receipt and costs your customer a warranty claim later.",
      "Book time presented as clock time. Say 'flat rate' — the customer's objection is to the appearance of padding, not the hours.",
      "Undisclosed shop-supply fees. Several states regulate or cap them, and an undisclosed percentage is a complaint waiting to happen.",
      "Declined work left off the invoice. Recording it at $0.00 is your evidence when the customer returns after the failure.",
      "Exceeding the authorized estimate. Many states require written or recorded authorization before exceeding an estimate by a set percentage — get it before the work, not at pickup.",
    ],
    faqs: [
      {
        q: "What should an auto repair invoice include?",
        a: "Shop name, address, phone, and any state repair-facility registration number; customer details; the vehicle's year, make, model, VIN, licence plate, and odometer reading at service; the customer's stated concern and your diagnostic finding; labor lines with hours and rate; parts itemized with OEM or aftermarket noted; shop supplies and disposal fees; declined or recommended work listed at $0.00; subtotal, tax, total; warranty terms; and payment terms. The VIN and odometer are what make it a service record rather than a receipt.",
      },
      {
        q: "What is flat-rate labor and should it be on the invoice?",
        a: "Flat rate means labor is billed from a published book time for the specific job on the specific vehicle, rather than the technician's actual clock time. It is the industry standard and it is fair in both directions — the customer pays the same whether the technician is fast or slow, and beats the alternative of paying for another shop's inefficiency. Put '(flat rate)' next to the hours on the invoice. Customers object to what looks like invented hours, and one word removes the objection entirely.",
      },
      {
        q: "Can I charge a shop supplies fee?",
        a: "In most states yes, but the rules vary and several cap the amount or require it to be disclosed before the work begins. Shop supplies cover the real consumables no single repair can be assigned — rags, cleaners, lubricants, fasteners, gloves — and are commonly billed as a small percentage of labor with a cap. Disclose the fee on your estimate, show it as its own line on the invoice, and check your state's regulations, because this is one of the most commonly cited items in auto-repair consumer complaints.",
      },
      {
        q: "Should I list work the customer declined?",
        a: "Yes, always, at $0.00 with a clear description and the date. If a customer declines a recommended brake replacement and has a failure two months later, the line on that invoice is your documentation that the condition was identified and communicated. It also converts naturally into future business — a declined-work list is the most qualified follow-up list a shop has, and the customer already has your written record of it in their glovebox.",
      },
    ],
    guideSlug: "how-to-invoice-for-auto-repair",
    guideLabel: "How to invoice for auto repair",
  },

  photography: {
    slug: "photography",
    trade: "Photography",
    icon: "📸",
    metaTitle: "Free Photography Invoice Template — Retainer, Balance & Licensing | InvoiceQuick",
    metaDescription:
      "A free photography invoice template covering the retainer, the balance, usage licensing, second shooter, and travel. Fill in and download a professional PDF. No sign-up required.",
    tagline:
      "Retainer, balance, usage licence, and deliverables — for weddings, portraits, and commercial shoots.",
    intro: [
      "Photography is billed in two halves separated by months, and most billing problems in the trade come from an invoice that forgets the first half. A wedding booked in January with a retainer and shot in September needs a final invoice that shows the full package price, the retainer received with its date, and the balance due — otherwise a client who paid $1,500 in January sees the full package price again in September and reacts accordingly. It is the same money; it is a presentation failure.",
      "The other half is licensing. On commercial work the photographs are the smaller part of what you are selling — the usage rights are the product. An invoice that says 'photography — $2,400' with no term, no territory, and no media grants nothing explicitly and, in practice, invites the client to assume they bought everything forever. The licence line does not have to be long. It has to exist.",
    ],
    billingModel:
      "Package or day rate with a non-refundable retainer at booking and the balance due before delivery. Commercial work adds a licensing fee by term, territory, and media. Extras — second shooter, travel, additional hours, albums, prints, rush delivery — bill as separate lines.",
    lineItems: [
      {
        description: "Wedding collection — 8 hrs coverage, 2 photographers",
        unit: "per package",
        note: "Name the hours and the crew. It is what the package price is anchored to.",
      },
      {
        description: "Retainer received 1/14 — non-refundable",
        unit: "credit (negative)",
        note: "Shown as a credit with its date. Skipping this is the trade's #1 billing complaint.",
      },
      {
        description: "Balance due before gallery delivery",
        unit: "net of retainer",
        note: "Say when it is due relative to delivery. Ambiguity here delays every wedding invoice.",
      },
      {
        description: "Commercial usage licence — 12 months, US, web and social",
        unit: "per licence term",
        note: "Term, territory, media. Without it the client assumes unlimited rights.",
      },
      {
        description: "Second shooter — 6 hrs",
        unit: "per hour or per day",
        note: "A cost you pay out. Never absorb it into the package price silently.",
      },
      {
        description: "Additional coverage — 1.5 hrs beyond contracted",
        unit: "per hour",
        note: "Overtime rate should be in the contract so the invoice is arithmetic, not negotiation.",
      },
      {
        description: "Travel — mileage and lodging",
        unit: "per mile / at cost",
        note: "Destination work is a real expense. Pass it through, stated in the contract.",
      },
      {
        description: "Album, prints, or rush delivery",
        unit: "per item",
        note: "Post-delivery add-ons are the most profitable lines in portrait work. Invoice them separately.",
      },
    ],
    gotchas: [
      "Retainer not shown on the final invoice. The client sees the full package price twice and assumes a mistake or a double-charge.",
      "No licence term on commercial work. Silence is read as unlimited rights, and repurposing disputes are unwinnable after the fact.",
      "Second shooter absorbed into the package. It is money leaving your account; it belongs on the invoice.",
      "Overtime with no contracted rate. Negotiating an hourly rate at 11pm at a reception is a losing position.",
      "Gallery delivered before the balance clears. Delivery is your only real leverage — state 'balance due before delivery' and hold to it.",
    ],
    faqs: [
      {
        q: "What should a photography invoice include?",
        a: "Your business name and contact details; the client; invoice number and date; the shoot date and location; the package or day rate with hours and crew named; any retainer already received shown as a dated credit; the balance due and when it is due relative to delivery; the usage licence term, territory, and media for commercial work; extras such as second shooter, travel, additional hours, and albums; subtotal, tax if your state taxes photography or the physical products, total; and payment terms. Showing the retainer is the single most important line.",
      },
      {
        q: "How do I invoice a retainer and the final balance?",
        a: "Send a booking invoice for the retainer alone at contract signature, described as a non-refundable retainer that reserves the date. Then, on the final invoice, list the full package price, show the retainer as a dated credit line, and present the balance as the amount due. The client sees one coherent document with the arithmetic done for them. Set the balance due before gallery delivery rather than after — delivery is your only practical leverage, and once the files are out the invoice becomes a collections problem.",
      },
      {
        q: "How do I charge for image licensing?",
        a: "Price the licence separately from the shoot fee and define it by three variables: term (how long they may use the images), territory (where), and media (which channels — web, social, print, out-of-home, paid advertising). A twelve-month US web-and-social licence is a fundamentally different product from a perpetual worldwide all-media buy, and the difference in price is legitimate and expected in commercial work. Put the specific terms on the invoice, because an invoice with no stated licence tends to be read as granting everything.",
      },
      {
        q: "Should a photography retainer be refundable?",
        a: "The standard in the industry is non-refundable, and the reasoning is sound: booking a date means turning away every other client who wanted it, and that loss is real whether or not the shoot happens. Use the word 'retainer' rather than 'deposit' in your contract and on your invoice — a deposit implies money held against future performance and is more readily argued to be refundable, while a retainer is payment for reserving your availability. Whatever you choose, the invoice should state it in the line description.",
      },
    ],
    guideSlug: "how-to-invoice-for-photography",
    guideLabel: "How to invoice for photography",
  },

  "snow-removal": {
    slug: "snow-removal",
    trade: "Snow Removal",
    icon: "🌨️",
    metaTitle: "Free Snow Removal Invoice Template — Per Push, Seasonal & Salt | InvoiceQuick",
    metaDescription:
      "A free snow removal invoice template for per-push, per-inch, seasonal contract, and salting work. Log the storm date and snowfall, then download a PDF. No sign-up required.",
    tagline:
      "Per push, per inch, or seasonal contract — with the storm log that gets the invoice approved.",
    intro: [
      "Snow removal invoices are approved or disputed on one field: the storm record. A property manager reviewing a January invoice with nine service dates on it is checking them against the weather, and a line that says 'snow removal — December' with no dates and no snowfall depths cannot be verified, so it sits. Every service date, the accumulation, the start and end time, and what was done — plow, shovel, salt — is what converts this invoice from a claim into a record.",
      "August is when this decision actually gets made. Seasonal contracts are negotiated and signed between late summer and October, well before the first flake, and the billing structure you agree then determines your entire winter cash flow. A per-push contract pays well in a heavy season and pays nothing in a mild one; a seasonal contract bills in equal monthly installments regardless of snowfall and gives you predictable revenue in exchange for absorbing the weather risk. Both are legitimate; the invoice looks completely different for each.",
    ],
    billingModel:
      "Per push (a flat rate each time you clear), per inch in banded tiers (1–3\", 3–6\", 6–9\"), per hour for equipment and crews, or a seasonal contract billed in equal monthly installments. Salt and ice melt bill by weight or per application, usually separate from plowing.",
    lineItems: [
      {
        description: "Plow — 1/12, 1/15, 1/18, 1/22 (4 pushes)",
        unit: "per push",
        note: "Every service date on the invoice. This is the line that gets it approved.",
      },
      {
        description: "Storm 1/18 — 7.5\" accumulation, 6–9\" tier",
        unit: "per inch band",
        note: "Depth and tier. On tiered contracts this is the entire basis of the charge.",
      },
      {
        description: "Seasonal contract — installment 3 of 5 (Nov–Mar)",
        unit: "per month",
        note: "Number the installment. Clients lose track and question the fourth one every year.",
      },
      {
        description: "Salt application — 800 lbs, bulk",
        unit: "per lb or per application",
        note: "Salt is a large, volatile material cost. Bill it separately from plowing, always.",
      },
      {
        description: "Sidewalk and walkway clearing — hand crew, 3 hrs",
        unit: "per hour or per visit",
        note: "Hand work is priced entirely differently from plowing. Separate line.",
      },
      {
        description: "Ice-melt application / refreeze return visit",
        unit: "per visit",
        note: "Refreeze returns are separate events. Date them or they read as double-billing.",
      },
      {
        description: "Snow relocation / stacking — loader, 2 hrs",
        unit: "per hour",
        note: "Late-season pile management is heavy equipment work and rarely inside the base contract.",
      },
      {
        description: "Snow hauling and off-site removal — 6 loads",
        unit: "per load",
        note: "Full lots need snow trucked away. Per load with the date and destination.",
      },
    ],
    gotchas: [
      "No service dates or snowfall depths. The property manager cannot verify it against the weather, so it does not get approved.",
      "Salt bundled into the plow rate. Salt cost swings hard year to year and is the fastest way to lose a season's margin invisibly.",
      "Seasonal installments with no number. 'Installment 3 of 5' pre-empts the annual 'why are we still paying, it barely snowed' call.",
      "Refreeze return visits undated. Two charges for the same storm read as double-billing unless each carries its own date and time.",
      "No trigger depth stated. If the contract says you push at 2\", the invoice should show the accumulation that triggered each push.",
    ],
    faqs: [
      {
        q: "What should a snow removal invoice include?",
        a: "Business name and contact details, insurance certificate number if the property requires one, the client and each property serviced, invoice number and billing period, and then the storm log: every service date, the accumulation, the time on site, and the service performed — plow, shovel, salt, or haul. Add salt or ice melt by weight, equipment hours, subtotal, tax, total, and payment terms. Commercial properties frequently require the service log before they will approve payment, so building it into the invoice removes an entire round trip.",
      },
      {
        q: "Should I charge per push or per season?",
        a: "Per push pays you for the work actually done and rewards you in a heavy winter, but it makes your revenue a function of the weather and gives you nothing in a mild season. A seasonal contract bills equal monthly installments across the winter regardless of snowfall — predictable for both sides, and the client is buying certainty rather than a number of visits. Most operators run both across a portfolio: seasonal contracts on anchor commercial accounts for baseline revenue, per push on residential and overflow. Decide before you sign, because the invoice structure follows the contract.",
      },
      {
        q: "How do I bill for salt separately from plowing?",
        a: "Bill salt by weight applied or per application, on its own line, with the date. Salt is the most volatile input cost in the business — bulk prices move substantially year to year and a heavy ice season can consume several times the tonnage you modelled. Folding it into a per-push rate means a bad ice winter quietly destroys your margin with nothing on paper explaining why. Separating it also lets a client who wants to reduce cost make a real choice about application frequency instead of arguing about your rate.",
      },
      {
        q: "When are seasonal snow contracts signed?",
        a: "Most commercial seasonal contracts are negotiated between August and October, before the first storm and while property managers are still setting winter budgets. That is the window in which the season's structure — per push versus seasonal, trigger depth, salt terms, response time, and whether sidewalks are included — is actually decided. Waiting until November means bidding against operators whose routes are already full and taking whatever terms are left, which is why late summer is the right time to have your contract and invoice format ready.",
      },
    ],
    guideSlug: "how-to-invoice-for-snow-removal",
    guideLabel: "How to invoice for snow removal",
  },

  "junk-removal": {
    slug: "junk-removal",
    trade: "Junk Removal & Hauling",
    icon: "🚛",
    metaTitle: "Free Junk Removal Invoice Template — Truck Load, Dump Fees & Labor | InvoiceQuick",
    metaDescription:
      "A free junk removal and hauling invoice template. Bill by truck load or volume, itemize dump fees, heavy items, and labor, then download a professional PDF. No sign-up required.",
    tagline:
      "Priced by truck-load volume, with disposal fees, heavy items, and labor kept visible.",
    intro: [
      "Junk removal is priced by volume — a fraction of the truck bed — and that is unusual enough that customers do not intuitively understand it. Someone who booked a quarter-load and watched two people work for forty minutes sees a bill that feels large, unless the invoice shows what actually consumed it: the volume taken, the dump fee paid by weight at the transfer station, the surcharges on the items landfills will not take at standard rates, and the labor for two people carrying a sofa down two flights.",
      "Disposal is the cost that makes this business hard and the line that most often disappears. Transfer stations charge by the ton, mattresses and tyres and appliances carry per-item surcharges, and electronics and paint go to separate facilities at separate rates. A hauler who quotes a load price and absorbs disposal is running a business whose margin is set by the transfer station's pricing rather than their own. Putting disposal on the invoice as its own line is both more honest and more profitable.",
    ],
    billingModel:
      "Priced by truck-load fraction (1/8, 1/4, 1/2, full) or by cubic yard, with a stated minimum. Disposal fees pass through by weight or per item. Labor surcharges for stairs, long carries, and heavy items. Single-item pickups at a flat rate.",
    lineItems: [
      {
        description: "1/2 truck load — approx. 8 cu yd removed",
        unit: "per load fraction",
        note: "Volume is the unit. State the fraction and the approximate cubic yards.",
      },
      {
        description: "Minimum pickup charge",
        unit: "per job",
        note: "A truck and two people roll out regardless of load size. Quote it when booking.",
      },
      {
        description: "Dump / transfer station fee — 1.4 tons",
        unit: "pass-through by weight",
        note: "The cost that decides whether the job was profitable. Never absorb it silently.",
      },
      {
        description: "Mattress and box spring disposal — 2 units",
        unit: "per item surcharge",
        note: "Mattresses carry per-item fees almost everywhere. Same for tyres and appliances.",
      },
      {
        description: "Appliance with refrigerant — recovery fee",
        unit: "per unit",
        note: "Fridges and AC units require certified refrigerant recovery. A regulated, real cost.",
      },
      {
        description: "Electronics / e-waste recycling",
        unit: "per item or per lb",
        note: "Separate facility, separate rate, and often the reason the run took an extra hour.",
      },
      {
        description: "Labor surcharge — 2nd floor carry, no elevator",
        unit: "per job or per hour",
        note: "Stairs and long carries double the labor. Quote them at booking, show them on the invoice.",
      },
      {
        description: "Heavy item — piano, safe, hot tub",
        unit: "per item",
        note: "Specialty items need extra crew and equipment. Flat surcharge per item.",
      },
    ],
    gotchas: [
      "Disposal absorbed into the load price. Transfer-station rates then set your margin instead of you.",
      "No volume stated. 'Junk removal — $420' with no load fraction cannot be checked and feels arbitrary.",
      "Stairs and long carries discovered on arrival. Ask at booking; a second-floor walk-up is a materially different job.",
      "Per-item surcharges omitted. Mattresses, tyres, refrigerant appliances, and paint all carry fees you already paid.",
      "Charity donation and recycling diversion not mentioned. Many customers care, and noting what was diverted is free goodwill on a document they keep.",
    ],
    faqs: [
      {
        q: "What should a junk removal invoice include?",
        a: "Business name and contact details, any hauling permit or license number your city requires, the customer and pickup address, invoice number and service date, the volume removed expressed as a truck-load fraction or cubic yards, disposal and transfer-station fees, per-item surcharges for mattresses, appliances, tyres, or e-waste, any labor surcharge for stairs or long carries, subtotal, tax, total, and payment terms. Noting what was donated or recycled rather than landfilled is worth including — customers keep it and it differentiates you.",
      },
      {
        q: "How is junk removal priced?",
        a: "By volume — the fraction of the truck bed your load occupies, typically sold in eighths, quarters, halves, and full loads, or by the cubic yard. Weight matters too, because the transfer station charges by the ton, which is why a quarter load of concrete or roofing debris costs more than a quarter load of cardboard. Almost every operator sets a minimum charge covering the truck, fuel, and two-person crew for the smallest job, and single-item pickups such as one appliance or one mattress usually price at a flat rate.",
      },
      {
        q: "Should dump fees be passed through to the customer?",
        a: "Yes, and as their own line. Transfer stations charge by weight and add per-item surcharges for mattresses, tyres, refrigerant-containing appliances, and electronics, and those charges vary by facility and change without much notice. A hauler who quotes an all-in price and absorbs disposal has handed control of their margin to the landfill's rate card. Showing the fee separately is also more persuasive to the customer than a larger unexplained total — it demonstrates that a real third-party cost sits inside the price.",
      },
      {
        q: "How do I charge for stairs, long carries, and heavy items?",
        a: "As explicit surcharges quoted at booking. A sofa from a ground-floor garage and the same sofa from a third-floor walk-up are different jobs with different crew time and different injury risk, and pricing them identically means the easy jobs subsidise the hard ones. Ask about floor level, elevator access, and carry distance when the job is booked, quote the surcharge then, and show it as its own line on the invoice. Specialty items — pianos, safes, hot tubs — warrant a flat per-item surcharge because they need extra crew and equipment.",
      },
    ],
  },

  catering: {
    slug: "catering",
    trade: "Catering & Events",
    icon: "🍽️",
    metaTitle: "Free Catering Invoice Template — Per Head, Deposit & Service Charge | InvoiceQuick",
    metaDescription:
      "A free catering and events invoice template with per-head pricing, deposit, guaranteed count, staffing, rentals, and service charge. Fill in and download a PDF. No sign-up required.",
    tagline:
      "Per-head pricing, guaranteed counts, staffing, rentals, and service charge — structured for events.",
    intro: [
      "Catering invoices turn on one number that most people outside the industry have never heard of: the guaranteed count. You buy food and schedule staff against a headcount the client confirms a set number of days before the event, and you bill against that guarantee even if fewer people show up — because the food was purchased and the staff were booked. If the guaranteed count and its deadline are not on the contract and repeated on the invoice, every under-attended event becomes a negotiation you will partly lose.",
      "The second is the difference between a service charge and a gratuity. A service charge is your revenue, covering event overhead, coordination, and administration. A gratuity goes to the staff. Clients routinely assume the service charge is the tip, and several states regulate how each must be disclosed. Two separate lines, clearly labelled, prevents both the awkward conversation and the compliance problem.",
    ],
    billingModel:
      "Per person for food and beverage against a guaranteed count, plus staffing by hour and role, rentals at cost or with markup, a service charge as a percentage, and optional gratuity. Deposit at booking, balance due before or on the event date.",
    lineItems: [
      {
        description: "Plated dinner — 120 guests @ per-person rate",
        unit: "per person",
        note: "Per-head against the guarantee, not the actual attendance.",
      },
      {
        description: "Guaranteed count: 120 (confirmed 8/6, 7 days prior)",
        unit: "record line",
        note: "The count and the confirmation date. This line ends the post-event headcount argument.",
      },
      {
        description: "Deposit received 6/2 — 50%",
        unit: "credit (negative)",
        note: "Dated credit. Same rule as photography: show what was already paid.",
      },
      {
        description: "Staffing — 6 servers × 6 hrs, 1 captain × 8 hrs",
        unit: "per hour by role",
        note: "By role and hours. Staffing is a large cost clients underestimate until they see it.",
      },
      {
        description: "Bar service — 2 bartenders, 5 hrs (client-supplied alcohol)",
        unit: "per hour",
        note: "State who supplies the alcohol — it changes licensing and liability.",
      },
      {
        description: "Rentals — linens, china, glassware, chafers",
        unit: "at cost or with markup",
        note: "Note whether damage and loss are the client's responsibility.",
      },
      {
        description: "Service charge — 20% (not a gratuity)",
        unit: "% of food and beverage",
        note: "Label it explicitly. Clients assume it is the tip; several states regulate the disclosure.",
      },
      {
        description: "Delivery, setup, and breakdown",
        unit: "per event",
        note: "Load-in, setup, and a 1am breakdown are hours. Bill them.",
      },
    ],
    gotchas: [
      "No guaranteed count on the invoice. Billing the actual attendance instead of the guarantee is a self-inflicted loss on every under-attended event.",
      "Service charge mistaken for gratuity. Label both, separately — it is both a client-relations and a compliance issue.",
      "Deposit not shown as a credit. The client sees the full event price again and reacts badly on the day of the event.",
      "Setup and breakdown unbilled. Load-in, setup, and a late-night breakdown are frequently more hours than the service itself.",
      "Rental damage terms unstated. Broken glassware and lost linens get charged to you by the rental house whether or not you passed the terms on.",
    ],
    faqs: [
      {
        q: "What should a catering invoice include?",
        a: "Business name, contact details, and any health permit or catering license number; client and event details including date, venue, and time; the guaranteed guest count with the date it was confirmed; per-person food and beverage pricing; staffing by role and hours; rentals; delivery, setup, and breakdown; the service charge clearly labelled as not a gratuity; any separate gratuity; the deposit already received shown as a dated credit; subtotal, tax, total, and payment terms. The guaranteed count and the deposit credit are the two lines that prevent nearly all catering billing disputes.",
      },
      {
        q: "What is a guaranteed guest count and how do I bill it?",
        a: "It is the headcount the client confirms by a contractual deadline — commonly 7 to 10 days before the event — and it is the number you bill, regardless of how many people actually attend. Food is purchased, prepped, and staffed against that number, so the cost is incurred whether or not the guests arrive. Put the guarantee and its confirmation date on the invoice as a record line. If more guests attend than were guaranteed, you bill the higher actual count; the guarantee is a floor, not a cap.",
      },
      {
        q: "Is a service charge the same as a gratuity?",
        a: "No, and the distinction matters legally as well as practically. A service charge is revenue to the business, covering event coordination, overhead, and administration; a gratuity is a voluntary payment intended for the staff. Clients very commonly assume the service charge is the tip and that staff have therefore been taken care of. Several states require explicit disclosure of which is which, and some require service charges to be identified as not being gratuities. Two clearly labelled lines solves it.",
      },
      {
        q: "How much deposit should a caterer take?",
        a: "A deposit of 25–50% at booking is standard, with the balance due either before the event or on the event date, depending on the size of the job and how long you have worked with the client. The reasoning is straightforward: booking an event date means turning away other work, and you incur substantial purchasing and staffing commitments before you see any further money. Whatever the split, show the deposit as a dated credit on the final invoice so the client can see the arithmetic without having to reconstruct it.",
      },
    ],
    guideSlug: "how-to-invoice-for-catering-and-events",
    guideLabel: "How to invoice for catering and events",
  },

  "web-development": {
    slug: "web-development",
    trade: "Web Development",
    icon: "💻",
    metaTitle: "Free Web Development Invoice Template — Milestones, Hourly & Retainer | InvoiceQuick",
    metaDescription:
      "A free web development invoice template for milestone, hourly, and retainer billing, with scope changes, third-party costs, and maintenance lines. Download a PDF free. No sign-up.",
    tagline:
      "Milestone, hourly, and retainer billing — with scope changes and pass-through costs handled.",
    intro: [
      "Web development invoices fail on scope, not on rate. A build quoted as a fixed price grows through a hundred small reasonable requests, none of which felt like a change at the time, and the developer either absorbs them or raises the issue at the end when the relationship is already strained. Milestone billing with a written scope is the structure that prevents this: bill on defined deliverables, and invoice anything outside them as a numbered scope-change line at the moment it is agreed, not at the end.",
      "The other thing this trade routinely gets wrong is pass-through costs. Hosting, domains, premium plugins, fonts, stock imagery, API usage, and app-store fees are the client's operating costs, not yours, and a developer who quietly pays for them out of the project fee has given themselves an unfunded liability that renews annually. Put them on the invoice at cost, or better, put them in the client's own accounts from the start.",
    ],
    billingModel:
      "Fixed price against milestones with a deposit, hourly for open-ended or maintenance work, or monthly retainer for ongoing support with a stated hour allocation and overage rate. Third-party costs passed through at cost.",
    lineItems: [
      {
        description: "Milestone 2 of 4 — design system and component library",
        unit: "per milestone",
        note: "Numbered against the agreed schedule. Deliverable-based, not time-based.",
      },
      {
        description: "Deposit received 7/1 — 30% (applied)",
        unit: "credit (negative)",
        note: "Show it applied. Otherwise the final invoice looks like the whole project again.",
      },
      {
        description: "Development — 24 hrs @ hourly rate (see time log)",
        unit: "per hour",
        note: "Reference the time log. Hours nobody can inspect are hours that get questioned.",
      },
      {
        description: "Scope change #3 — multi-language support (approved 7/28)",
        unit: "per approved change",
        note: "Numbered, dated, approved. Invoice at agreement, not at project end.",
      },
      {
        description: "Monthly retainer — 10 hrs support included",
        unit: "per month",
        note: "State the included hours and what happens to unused ones.",
      },
      {
        description: "Retainer overage — 3.5 hrs @ overage rate",
        unit: "per hour",
        note: "A rate agreed in the contract makes overage arithmetic instead of a conversation.",
      },
      {
        description: "Third-party costs — hosting, domain, plugin licences (at cost)",
        unit: "pass-through",
        note: "The client's operating costs. Pass them through or put them on the client's card.",
      },
      {
        description: "Post-launch support window — 30 days included",
        unit: "included / then hourly",
        note: "Define when 'fixing bugs' ends and 'billable work' begins, in writing.",
      },
    ],
    gotchas: [
      "Scope changes invoiced at project end. Raise and bill them at the moment of agreement, when the client still remembers asking.",
      "Third-party costs absorbed. Hosting and licences renew every year and quietly become a permanent unfunded liability.",
      "Deposit not shown as applied. The final invoice reads as the full project price a second time.",
      "No defined end to post-launch support. Without a stated window, 'one more small fix' continues indefinitely and unpaid.",
      "Handing over code and credentials before final payment. Delivery is your leverage; transfer on payment, and say so on the invoice.",
    ],
    faqs: [
      {
        q: "What should a web development invoice include?",
        a: "Your business name and contact details, the client, invoice number and date, the project name, the billing basis — milestone, hourly, or retainer — with the specific deliverable or period named, hours with a reference to a time log if billing hourly, any numbered scope changes with their approval dates, third-party costs passed through at cost, the deposit shown as an applied credit, subtotal, tax where applicable, total, and payment terms. For international clients, note the currency explicitly and who bears the wire fee.",
      },
      {
        q: "Should I bill web development hourly or by milestone?",
        a: "Milestone billing suits defined projects: it ties payment to visible deliverables, gives the client predictability, and gives you cash flow through a long build instead of one payment at the end. Hourly suits open-ended work, maintenance, and clients whose requirements genuinely are not settled — but it caps your income at your available hours and rewards you for being slow. A common structure is milestones for the build with a deposit, then an hourly or retainer arrangement for everything after launch.",
      },
      {
        q: "How do I invoice for scope creep?",
        a: "As a numbered scope-change line, raised and agreed at the moment the request arrives rather than at the end of the project. The pattern that fails is silently absorbing a series of small requests and then presenting a large unexpected total, by which point the client has forgotten asking for most of them. Say plainly that the request sits outside the agreed scope, quote it, get written approval, and invoice it as 'Scope change #3 — multi-language support (approved 7/28)'. Clients accept this readily in the moment.",
      },
      {
        q: "How do retainer invoices work for ongoing development?",
        a: "Bill a fixed monthly amount that includes a stated number of hours, with an overage rate for anything beyond it, and state explicitly whether unused hours roll over — most agreements say they do not, because you reserved the capacity regardless. Invoice at the start of the month for the month ahead, which is what makes a retainer a retainer rather than a delayed hourly bill. Include the hours used against the allocation on the invoice so the client can see the value they consumed.",
      },
    ],
    guideSlug: "how-to-invoice-for-web-development",
    guideLabel: "How to invoice for web development",
  },
};

/** Stable ordering for the hub grid and sitemap. */
export const tradeTemplateSlugs = Object.keys(tradeTemplates);

// Every published trade must have create-screen seed items. The seeds live in
// their own small module so /create (a client component) does not ship this
// catalogue's prose to the browser — which means the two files CAN drift, and
// the drift would be silent: the page publishes, the CTA works, and the create
// screen just opens blank. This turns that into a build failure instead.
const missingSeeds = tradeTemplateSlugs.filter((slug) => !tradeSeeds[slug]?.items?.length);
if (missingSeeds.length > 0) {
  throw new Error(
    `invoice-template-trades: no create-screen seed items for ${missingSeeds.join(", ")}. ` +
      `Add them to lib/invoice-template-seeds.ts.`,
  );
}

export function getTradeTemplate(slug: string): TradeTemplate | undefined {
  return tradeTemplates[slug];
}
