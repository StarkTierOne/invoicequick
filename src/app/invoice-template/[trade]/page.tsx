import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog-articles";
import { tradeTemplates, tradeTemplateSlugs, getTradeTemplate } from "@/lib/invoice-template-trades";

const BASE_URL = "https://invoicequick-phi.vercel.app";

type Props = { params: Promise<{ trade: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { trade } = await params;
  const t = getTradeTemplate(trade);
  if (!t) return { title: "Invoice Template — InvoiceQuick" };
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: `${t.trade.toLowerCase()} invoice template, free ${t.trade.toLowerCase()} invoice, ${t.trade.toLowerCase()} invoice example, ${t.trade.toLowerCase()} invoice pdf, ${t.trade.toLowerCase()} billing`,
    alternates: { canonical: `${BASE_URL}/invoice-template/${t.slug}` },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${BASE_URL}/invoice-template/${t.slug}`,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return tradeTemplateSlugs.map((trade) => ({ trade }));
}

export default async function TradeInvoiceTemplatePage({ params }: Props) {
  const { trade } = await params;
  const t = getTradeTemplate(trade);
  if (!t) notFound();

  // The matching long-form guide only gets linked if it actually exists in the
  // article map. A guideSlug that has been renamed or retired degrades to no
  // link rather than shipping a 404 into every one of these pages.
  const guideExists = Boolean(t.guideSlug && articles[t.guideSlug]);

  // Sibling trades for the cross-link rail, in map order, excluding this one.
  const others = tradeTemplateSlugs
    .filter((s) => s !== t.slug)
    .map((s) => tradeTemplates[s]);

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-xl">InvoiceQuick</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/invoice-template" className="text-gray-600 hover:text-gray-900 text-sm font-medium hidden sm:inline">Templates</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Blog</Link>
            <Link href={`/create?trade=${t.slug}`} className="btn-primary text-sm !py-2 !px-4">Create Invoice</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/invoice-template" className="hover:text-gray-700">Invoice Templates</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{t.trade}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-10 text-center">
        <div className="text-5xl mb-4" aria-hidden="true">{t.icon}</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-gray-900">
          {t.trade} Invoice Template
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{t.tagline}</p>
        <Link href={`/create?trade=${t.slug}`} className="btn-primary text-base !py-3 !px-8 inline-block">
          Start a {t.trade} Invoice &rarr;
        </Link>
        <p className="text-sm text-gray-500 mt-3">
          Opens with the {t.trade.toLowerCase()} lines already listed. Free, no sign-up, PDF download.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        {t.intro.map((p, i) => (
          <p key={i} className="text-gray-700 mb-4 leading-relaxed">{p}</p>
        ))}
      </section>

      {/* Billing model */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How {t.trade.toLowerCase()} work is priced</h2>
        <div className="card bg-indigo-50 border-indigo-100">
          <p className="text-gray-700 leading-relaxed">{t.billingModel}</p>
        </div>
      </section>

      {/* Line items table — the substance of the page */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          What belongs on a {t.trade.toLowerCase()} invoice
        </h2>
        <p className="text-gray-600 mb-6">
          These are the lines this trade actually bills, the unit each is measured in, and what each one
          prevents. Every line below is optional — use the ones that match the job.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-gray-900">Line item</th>
                <th className="py-3 pr-4 text-sm font-semibold text-gray-900 whitespace-nowrap">Billed as</th>
                <th className="py-3 text-sm font-semibold text-gray-900">Why it belongs there</th>
              </tr>
            </thead>
            <tbody>
              {t.lineItems.map((item) => (
                <tr key={item.description} className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-4 text-sm text-gray-900 font-medium">{item.description}</td>
                  <td className="py-3 pr-4 text-sm text-indigo-700 whitespace-nowrap">{item.unit}</td>
                  <td className="py-3 text-sm text-gray-600">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gotchas */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          How {t.trade.toLowerCase()} invoices get disputed
        </h2>
        <p className="text-gray-600 mb-6">
          Nearly every unpaid or short-paid invoice in this trade comes down to one of these.
        </p>
        <ul className="space-y-3">
          {t.gotchas.map((g) => (
            <li key={g} className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0" aria-hidden="true">&#10005;</span>
              <span className="text-gray-700 text-sm leading-relaxed">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div className="card bg-gray-900 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Skip the Word and Excel files</h2>
          <p className="text-gray-300 text-sm mb-5 max-w-xl mx-auto">
            A downloadable template means fixing the layout, re-entering the formulas, and reformatting every
            time. This one fills in on screen, does the maths, and downloads a clean PDF — with the{" "}
            {t.trade.toLowerCase()} lines already listed.
          </p>
          <Link
            href={`/create?trade=${t.slug}`}
            className="bg-white text-gray-900 font-semibold px-7 py-3 rounded-lg text-sm hover:bg-gray-100 transition-colors inline-block"
          >
            Open the {t.trade} Template &rarr;
          </Link>
        </div>
      </section>

      {/* Guide link */}
      {guideExists && t.guideSlug && (
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="card">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">Go deeper</p>
            <Link href={`/blog/${t.guideSlug}`} className="text-lg font-bold text-indigo-600 hover:text-indigo-700">
              {t.guideLabel || `How to invoice for ${t.trade.toLowerCase()}`} &rarr;
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              The full guide — rates, payment terms, deposits, and what to do when the invoice goes unpaid.
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t.trade} invoicing questions
          </h2>
          <div className="space-y-6">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other trades */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Invoice templates for other trades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/invoice-template/${o.slug}`}
              className="card hover:border-indigo-300 hover:shadow-md transition-all text-center py-4"
            >
              <div className="text-2xl mb-1" aria-hidden="true">{o.icon}</div>
              <div className="text-sm font-medium text-gray-900">{o.trade}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Structured data: FAQ + the page itself */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: t.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                  { "@type": "ListItem", position: 2, name: "Invoice Templates", item: `${BASE_URL}/invoice-template` },
                  { "@type": "ListItem", position: 3, name: `${t.trade} Invoice Template`, item: `${BASE_URL}/invoice-template/${t.slug}` },
                ],
              },
            ],
          }),
        }}
      />

      {/* CTA */}
      <section className="bg-indigo-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Send your next {t.trade.toLowerCase()} invoice today</h2>
          <p className="text-indigo-100 mb-6">Free forever, no sign-up, professional PDF in under 60 seconds.</p>
          <Link
            href={`/create?trade=${t.slug}`}
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg text-base hover:bg-indigo-50 transition-colors inline-block"
          >
            Create Free Invoice &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} InvoiceQuick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
