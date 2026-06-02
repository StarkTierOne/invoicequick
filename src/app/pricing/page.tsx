"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useAuth } from "@/lib/useAuth";
import AppShell from "@/components/AppShell";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Unlimited invoices", "PDF download", "Multi-currency", "No watermarks", "Basic templates"],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    period: "/month",
    features: ["Everything in Free", "Save & reuse templates", "Auto-numbering", "Payment tracking", "Custom branding/logo", "Client database", "Recurring invoices", "Priority support"],
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$29",
    period: "/month",
    features: ["Everything in Pro", "Team access (5 users)", "API access", "Zapier integration", "Custom domain invoices", "Advanced reporting", "Dedicated support"],
    highlighted: false,
  },
];

const pricingFaqs = [
  {
    question: "Is the free plan really free? What's the catch?",
    answer:
      "There is no catch. The free plan gives you unlimited invoices, PDF download, 50+ currencies, and zero watermarks — no credit card required, no trial timer, no invoice limit. We make money on Pro ($9/mo) and Business ($29/mo), not by crippling the free tier. If you can do your invoicing in 5 minutes a month on the free plan, stay on it forever.",
  },
  {
    question: "When should I upgrade from Free to Pro?",
    answer:
      "Upgrade when manual work starts leaking revenue. Concrete triggers: (1) you're billing 5 or more retainer or recurring clients each month — duplicating invoices manually starts to cost more than the $9; (2) you've missed an invoice or sent a duplicate number — auto-numbering and a client database prevent both; (3) you want your logo and brand colors on every invoice. Below those thresholds, the free tier is usually the right answer.",
  },
  {
    question: "Can I handle retainer or recurring clients on the free plan?",
    answer:
      "Yes, for 1–5 retainer clients. The workflow: create the invoice once, then duplicate the previous month's invoice on the 1st of each month, update the period in the line description, and re-send. That's about 20 seconds per client per month. Once you cross 5 retainers, Pro's recurring-invoice automation pays for itself — see our guide on recurring invoices for freelancers for the full retainer-billing playbook.",
  },
  {
    question: "When should I upgrade from Pro to Business?",
    answer:
      "Business ($29/mo) makes sense once you have a team that needs to send invoices on your behalf (up to 5 users), or you want to push invoices into other systems via API or Zapier. Solo freelancers and most one-person agencies stay on Pro. The custom-domain invoices on Business matter mostly to consultancies where invoice deliverability and brand control across email is part of the client experience.",
  },
  {
    question: "Do I need a credit card to start? Can I cancel anytime?",
    answer:
      "No credit card to use the free plan — start creating invoices immediately. Pro and Business are month-to-month with no contract; cancel anytime from your account settings and you keep access until the end of the billing period. We don't auto-upgrade you and we don't hide a cancel button.",
  },
  {
    question: "What happens to my invoices if I downgrade or cancel?",
    answer:
      "Your invoice history stays accessible. If you downgrade from Pro to Free, you keep all the PDFs you've already generated — you simply lose access to Pro-only features (recurring invoices, client database, custom branding) for new invoices. Cancel a paid plan and you drop to the free tier, not zero. We never lock you out of your own invoice records.",
  },
];

export default function PricingPage() {
  const { user } = useAuth(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleUpgrade(planId: string) {
    if (!user) {
      window.location.href = "/signup";
      return;
    }
    if (planId === "free") return;

    setLoadingPlan(planId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, userId: user.id, email: user.email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoadingPlan(null);
  }

  const content = (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold mb-2">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Start free. Upgrade when you need more power.</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> No credit card</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> Free forever</span>
          <span className="flex items-center gap-1" title="InvoiceQuick generates the PDF — clients pay you directly however you arrange. No 2.9–3.5% processing cut like PayPal, Square, or Wave."><span className="text-green-500 font-bold">&#10003;</span> 0% payment fees</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> Cancel anytime</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.id} className={`card flex flex-col ${plan.highlighted ? "ring-2 ring-indigo-600 relative" : ""}`}>
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade(plan.id)}
              disabled={loadingPlan === plan.id}
              className={`w-full text-center py-3 rounded-lg font-semibold transition ${
                plan.highlighted
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : plan.id === "free"
                  ? "bg-gray-100 text-gray-600 cursor-default"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
              } disabled:opacity-50`}
            >
              {loadingPlan === plan.id ? "Loading..." : plan.id === "free" ? "Current Plan" : `Upgrade to ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      {/* Why we keep the free tier genuinely free */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why we keep the free tier genuinely free</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most &quot;free&quot; invoice generators are traps. They watermark your PDF until you upgrade, cap you at 3–5
          invoices per month, demand a credit card &quot;just to verify,&quot; or downgrade your invoice quality the moment
          you cross some hidden threshold. We do none of that. The InvoiceQuick free plan is the same product on
          day one and day one thousand: unlimited invoices, no watermarks, no credit card, no trial timer.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The free plan exists because most freelancers and small businesses can do their entire invoicing workflow
          in 5 minutes a month. Charging them for that would be silly. Pro ($9/mo) and Business ($29/mo) are for
          the smaller group whose volume or workflow needs justify the spend — recurring billing, client database,
          team access, API. If you never cross those thresholds, stay on Free forever. That&apos;s the deal.
        </p>
      </section>

      {/* How to choose the right plan */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to choose the right plan</h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-bold text-lg mb-2">Stay on Free if&hellip;</h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• You bill fewer than 5 clients per month, or your invoicing is one-off project work</li>
              <li>• You&apos;re fine entering your business details fresh each time (or using your browser&apos;s autofill)</li>
              <li>• You don&apos;t need a logo or brand colors on your invoices yet</li>
              <li>• You can track who paid in your inbox or a spreadsheet</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              The free tier handles unlimited invoices, 50+ currencies, and clean PDF export. For most solo
              freelancers in their first 1–2 years, this is the right plan.
            </p>
          </div>

          <div className="card ring-2 ring-indigo-600">
            <h3 className="font-bold text-lg mb-2">Upgrade to Pro ($9/mo) when&hellip;</h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>
                • You&apos;re billing <strong>5+ retainer or recurring clients</strong> — manual duplicating starts costing
                more than $9 of your time
              </li>
              <li>• You&apos;ve sent a duplicate invoice number or missed a follow-up — auto-numbering and payment tracking prevent both</li>
              <li>• You want your logo, brand colors, and a saved client database on every invoice</li>
              <li>• Your accountant or tax filing is starting to need a clean, queryable invoice history</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              The Pro tier is built around the moment manual workflow stops scaling. If you&apos;re chasing payments,
              juggling 6+ retainers, or losing time on bookkeeping, Pro pays for itself in the first week.{" "}
              <Link href="/blog/recurring-invoices-for-freelancers" className="text-indigo-600 hover:text-indigo-700 underline">
                Read the recurring-invoice playbook &rarr;
              </Link>
            </p>
          </div>

          <div className="card">
            <h3 className="font-bold text-lg mb-2">Upgrade to Business ($29/mo) when&hellip;</h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• You have a team (up to 5 users) sending invoices on your behalf</li>
              <li>• You need API access or Zapier integration to push invoices into accounting, CRM, or project tools</li>
              <li>• You want custom-domain email deliverability for invoices and advanced reporting</li>
              <li>• You&apos;re scaling past solo freelancing into a small consultancy or agency</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Most solo freelancers and one-person operations stay on Pro indefinitely. Business is for the next
              step up — a team, a system integration, or both.
            </p>
          </div>
        </div>
      </section>

      {/* Free invoice software comparison */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Free invoice software: InvoiceQuick vs Wave vs Zoho Invoice vs Bonsai</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The free-tier invoicing market in 2026 is bigger than people think. Here&apos;s the honest side-by-side of
          the four free or near-free options most freelancers compare before choosing — what each one actually gives
          you on the free or entry tier, where the cliffs are, and which one fits which freelancer.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-semibold text-gray-900">Feature</th>
                <th className="text-left p-3 font-semibold text-indigo-600">InvoiceQuick Free</th>
                <th className="text-left p-3 font-semibold text-gray-700">Wave Starter</th>
                <th className="text-left p-3 font-semibold text-gray-700">Zoho Invoice</th>
                <th className="text-left p-3 font-semibold text-gray-700">Bonsai</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium">Price (entry tier)</td>
                <td className="p-3">$0 forever</td>
                <td className="p-3">$0 (Starter)</td>
                <td className="p-3">$0 forever</td>
                <td className="p-3">No free tier; $19+/mo</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 font-medium">Invoice cap on free tier</td>
                <td className="p-3">Unlimited</td>
                <td className="p-3">Unlimited</td>
                <td className="p-3">500/year</td>
                <td className="p-3">—</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium">Credit card required to start</td>
                <td className="p-3">No</td>
                <td className="p-3">No</td>
                <td className="p-3">No</td>
                <td className="p-3">7-day trial → CC required</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 font-medium">Watermarks on PDF</td>
                <td className="p-3">None</td>
                <td className="p-3">None</td>
                <td className="p-3">None</td>
                <td className="p-3">—</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium">Logo / custom branding</td>
                <td className="p-3">Pro ($9/mo)</td>
                <td className="p-3">Free</td>
                <td className="p-3">Free</td>
                <td className="p-3">Included on paid</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 font-medium">Recurring / retainer invoices</td>
                <td className="p-3">Pro ($9/mo)</td>
                <td className="p-3">Pro ($16/mo)</td>
                <td className="p-3">Free</td>
                <td className="p-3">Included on paid</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium">Multi-currency invoices</td>
                <td className="p-3">Free (50+ currencies)</td>
                <td className="p-3">Limited</td>
                <td className="p-3">Free</td>
                <td className="p-3">Included on paid</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 font-medium">Client database</td>
                <td className="p-3">Pro ($9/mo)</td>
                <td className="p-3">Free</td>
                <td className="p-3">Free (1,000 clients)</td>
                <td className="p-3">Included on paid</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium">Per-user pricing penalty</td>
                <td className="p-3">No (flat tiers)</td>
                <td className="p-3">No</td>
                <td className="p-3">2 users on free</td>
                <td className="p-3">Yes (cost scales w/ team)</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 font-medium">Sign-up friction</td>
                <td className="p-3">Email only</td>
                <td className="p-3">Email + business setup</td>
                <td className="p-3">Zoho account</td>
                <td className="p-3">CC + trial gate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Pick InvoiceQuick Free</strong> if you want a clean, fast invoice generator with no friction —
            unlimited invoices, no watermarks, no credit card, no setup wizard, and a clear $9/mo upgrade only when
            you actually need recurring billing, branding, or a client database.
          </p>
          <p>
            <strong>Pick Wave Starter</strong> if you want bookkeeping bundled in and you&apos;re fine with the
            broader accounting-software setup. Logo and client database are free on Starter, but recurring invoices
            and ACH/auto-reminders move to Wave Pro at $16/mo — almost 2× InvoiceQuick&apos;s equivalent tier.
          </p>
          <p>
            <strong>Pick Zoho Invoice</strong> if you&apos;re already inside the Zoho ecosystem (Books, CRM, Mail).
            The 500 invoices/year cap is a real ceiling once you cross ~40 invoices/month, and you&apos;ll graduate
            to Zoho Books ($15+/mo) — not Zoho Invoice paid — when you outgrow free.
          </p>
          <p>
            <strong>Skip Bonsai for invoicing alone.</strong> Bonsai is a full freelance OS (CRM, contracts,
            proposals, tasks, banking) priced like one — $19–$79/mo per user with no free tier. If you only need
            invoicing, you&apos;re paying for nine features you don&apos;t use. Bonsai is the right pick if you&apos;re
            consolidating five tools into one, not if you&apos;re replacing one.
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Pricing and feature data verified May 2026 against each vendor&apos;s public pricing page. Vendors change
          pricing — check the source before committing.
        </p>
      </section>

      {/* Retainer billing — the specific Free vs Pro threshold */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Retainer billing on each tier</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Retainer and recurring billing is the most common reason freelancers upgrade. Here&apos;s the exact threshold:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-bold text-base mb-2">Free — for 1 to 5 retainer clients</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              On the 1st of each month, duplicate the previous month&apos;s invoice, update the period in the line
              description (e.g. <em>&quot;Retainer for May 2026 per agreement dated November 1, 2025&quot;</em>), and send.
              About 20 seconds per client. Below 5 retainers, this beats the $9.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-base mb-2">Pro — for 5+ retainer clients</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Set the cadence once and Pro auto-generates the invoice each cycle, attaches the right period and
              overage rate, and pings the client on the schedule you set. At 6+ retainers, the time savings clear
              the $9 in the first week — and you stop forgetting the 1st-of-month invoice.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Want the full operational playbook (cadence, renewal mechanics, overage rates, the three retainer
          models)?{" "}
          <Link href="/blog/recurring-invoices-for-freelancers" className="text-indigo-600 hover:text-indigo-700 underline">
            Read the retainer billing guide &rarr;
          </Link>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Not at 5 retainers yet? Most freelancers fill their retainer book from their existing project clients, not from
          cold pitches. Our companion guide on{" "}
          <Link href="/blog/convert-project-client-to-retainer" className="text-indigo-600 hover:text-indigo-700 underline">
            converting project clients into retainer clients
          </Link>{" "}
          covers the exact offboarding-email pitch templates (maintenance, content, trial) and the followup cadence that
          gets you to the upgrade threshold.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing FAQ</h2>
        <div className="space-y-4">
          {pricingFaqs.map((faq) => (
            <div key={faq.question} className="card">
              <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-4">Start with the free plan. Upgrade only when you actually need to.</p>
        <Link href="/create" className="btn-primary inline-block">
          Create your first invoice &rarr;
        </Link>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pricingFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* SoftwareApplication JSON-LD with priced offers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "InvoiceQuick",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "InvoicingSoftware",
            operatingSystem: "Web",
            url: "https://invoicequick-phi.vercel.app/",
            description:
              "Free online invoice generator with unlimited invoices, PDF download, multi-currency, and zero watermarks. Pro and Business tiers add recurring invoices, client database, custom branding, team access, and API.",
            offers: [
              {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description:
                  "Unlimited invoices, PDF download, 50+ currencies, no watermarks, basic templates. No credit card required.",
                url: "https://invoicequick-phi.vercel.app/pricing",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Pro",
                price: "9",
                priceCurrency: "USD",
                description:
                  "Everything in Free, plus save & reuse templates, auto-numbering, payment tracking, custom branding/logo, client database, recurring invoices, and priority support.",
                url: "https://invoicequick-phi.vercel.app/pricing",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "9",
                  priceCurrency: "USD",
                  unitCode: "MON",
                  referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
                },
              },
              {
                "@type": "Offer",
                name: "Business",
                price: "29",
                priceCurrency: "USD",
                description:
                  "Everything in Pro, plus team access (5 users), API access, Zapier integration, custom domain invoices, advanced reporting, and dedicated support.",
                url: "https://invoicequick-phi.vercel.app/pricing",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "29",
                  priceCurrency: "USD",
                  unitCode: "MON",
                  referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
                },
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "10000",
              bestRating: "5",
              worstRating: "1",
            },
            publisher: {
              "@type": "Organization",
              name: "InvoiceQuick",
              url: "https://invoicequick-phi.vercel.app/",
            },
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicequick-phi.vercel.app/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://invoicequick-phi.vercel.app/pricing" },
            ],
          }),
        }}
      />
    </div>
  );

  if (user) {
    return <AppShell user={user}>{content}</AppShell>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-xl">InvoiceQuick</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Sign In</Link>
            <Link href="/signup" className="btn-primary text-sm !py-2">Sign Up Free</Link>
          </div>
        </div>
      </nav>
      {content}
    </div>
  );
}
