import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Generator | Create Professional Invoices Online — InvoiceQuick",
  description: "Generate professional invoices for free in under 60 seconds. No signup required. Add your business details, line items, and download a polished PDF instantly.",
  keywords: "free invoice generator, create invoice online, invoice maker, free invoice creator, online invoice generator, make invoice free",
  alternates: {
    canonical: "https://invoicequick.vercel.app/free-invoice-generator",
  },
};

const pageFaqs = [
  {
    question: "Is InvoiceQuick really free?",
    answer: "Yes. You can create and download unlimited invoices without paying anything. There are no watermarks, no trial periods, and no hidden fees. We offer optional paid features for businesses that need client portals and payment tracking.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. You can create and download an invoice immediately without signing up. If you want to save your invoices and access them later, you can optionally create a free account.",
  },
  {
    question: "What format are the invoices?",
    answer: "Invoices are generated as PDF files, which is the industry standard. PDFs preserve formatting across all devices and can be easily emailed or printed.",
  },
  {
    question: "Can I add my logo to the invoice?",
    answer: "Yes. InvoiceQuick lets you upload your business logo, which appears on your invoice for a branded, professional look.",
  },
  {
    question: "Does InvoiceQuick calculate taxes automatically?",
    answer: "Yes. You can set a tax rate and InvoiceQuick will automatically calculate the tax amount and add it to your invoice total.",
  },
  {
    question: "How do I reference my contract or agreement on the invoice?",
    answer: "Add a short reference line in the notes field or directly under each line item. Common wordings include \"Per agreement dated [DATE]\", \"Per Contract #[NUMBER], Section [X.Y]\", \"Per Statement of Work signed [DATE]\", \"Per Change Order #[NUMBER]\", and \"Per PO #[NUMBER]\". This 10-second addition gives a client's AP team the paper trail they need to approve payment without follow-up questions.",
    link: {
      href: "/blog/how-to-reference-contract-on-invoice",
      text: "Read the full guide on referencing contracts on invoices →",
    },
  },
  {
    question: "How do I bill a recurring or retainer client?",
    answer: "Use a fixed cadence — the 1st of the month, billed in advance, is the standard. Name the month explicitly on the invoice (\"Monthly retainer — May 2026\"), spell out the reserved hours or deliverables, and put the overage rate on the invoice itself (not buried in the contract) so there is no surprise the first time the client exceeds the reserved scope. Bill overages on a separate invoice at month-end, every cycle. On the free tier, duplicate last month's retainer invoice and update the month name — about 20 seconds per client per month. InvoiceQuick Pro automates the cadence entirely.",
    link: {
      href: "/blog/recurring-invoices-for-freelancers",
      text: "Read the full guide to recurring & retainer invoicing →",
    },
  },
];

export default function FreeInvoiceGeneratorPage() {
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
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Blog</Link>
            <Link href="/create" className="btn-primary text-sm !py-2 !px-4">Create Invoice</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
          Free Invoice Generator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Create professional invoices in under 60 seconds. No account required, no watermarks, no hidden fees. Just fill in your details and download a clean PDF.
        </p>
        <Link href="/create" className="btn-primary text-base !py-3 !px-8 inline-block">
          Create Your Free Invoice &rarr;
        </Link>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> No sign-up required</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> No credit card</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> PDF ready in 60 seconds</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> Free forever</span>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="border-y border-gray-200 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <div className="text-3xl font-extrabold text-gray-900">10,000+</div>
            <div className="text-sm text-gray-500">Freelancers & Businesses</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-gray-900">50,000+</div>
            <div className="text-sm text-gray-500">Invoices Created</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-indigo-600">9/10</div>
            <div className="text-sm text-gray-500">
              Rated by{" "}
              <a href="https://toolsrated.vercel.app/reviews/best-invoicing-software" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                ToolsRated
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use a Free Invoice Generator?</h2>
          <p className="text-gray-700 mb-4">
            If you are a freelancer, contractor, or small business owner, you need to send invoices regularly. But creating them from scratch in Word or Excel every time is slow, error-prone, and unprofessional. A free invoice generator like InvoiceQuick solves all of these problems by giving you a clean, pre-formatted template that you simply fill in and download.
          </p>
          <p className="text-gray-700 mb-4">
            Unlike many invoice tools that lock features behind a paywall or require you to create an account before you can even see the interface, InvoiceQuick lets you start creating your first invoice immediately. There is no signup wall, no credit card required, and no limit on how many invoices you can generate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">What Makes a Good Invoice Generator?</h2>
          <p className="text-gray-700 mb-4">
            Not all invoice generators are created equal. The best ones share a few key characteristics: they are fast to use, produce professional-looking output, calculate totals and taxes automatically, and export to PDF format so your invoices look the same on every device. InvoiceQuick checks every box. For a deeper walkthrough, see our guide to <Link href="/blog/how-to-create-professional-invoice" className="text-indigo-600 hover:text-indigo-700 underline">creating a professional invoice</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            A great invoice generator should also be flexible enough to handle different types of work. Whether you charge by the hour, by the project, or by the item, your generator should accommodate itemized line items with descriptions, quantities, and rates. It should let you add <Link href="/blog/how-to-write-payment-terms-on-invoice" className="text-indigo-600 hover:text-indigo-700 underline">clear payment terms</Link>, notes, and your preferred payment methods so clients know exactly how to pay you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">How to Generate an Invoice in 3 Steps</h2>
          <div className="grid sm:grid-cols-3 gap-6 my-8">
            <div className="card text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Enter Your Details</h3>
              <p className="text-gray-600 text-sm">Add your business name, client information, and logo.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Add Line Items</h3>
              <p className="text-gray-600 text-sm">List your services or products with rates and quantities.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Download PDF</h3>
              <p className="text-gray-600 text-sm">Get a polished, professional invoice ready to send.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Who Uses InvoiceQuick?</h2>
          <p className="text-gray-700 mb-4">
            InvoiceQuick is used by thousands of freelancers, consultants, contractors, and small business owners across every industry. <Link href="/blog/invoice-template-graphic-designers" className="text-indigo-600 hover:text-indigo-700 underline">Graphic designers</Link> use it to bill for branding projects. Web developers use it to invoice for website builds and maintenance. Writers and editors use it for content contracts. <Link href="/blog/invoice-template-photographers" className="text-indigo-600 hover:text-indigo-700 underline">Photographers</Link>, videographers, tutors, <Link href="/blog/invoice-template-consultants" className="text-indigo-600 hover:text-indigo-700 underline">consultants</Link>, and tradespeople all rely on InvoiceQuick to get paid professionally and on time.
          </p>
          <p className="text-gray-700 mb-4">
            The tool is designed to be simple enough for someone sending their very first invoice, yet flexible enough for experienced business owners who need customized line items, tax calculations, and detailed payment terms. If you have already sent invoices and a client is overdue, our guide on <Link href="/blog/client-wont-pay-invoice" className="text-indigo-600 hover:text-indigo-700 underline">what to do when a client won&apos;t pay</Link> walks through the full escalation process.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {pageFaqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
                {faq.link && (
                  <Link href={faq.link.href} className="text-indigo-600 hover:text-indigo-700 underline text-sm mt-2 inline-block">
                    {faq.link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pageFaqs.map((faq) => ({
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

      {/* CTA */}
      <section className="bg-indigo-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Start Creating Invoices for Free</h2>
          <p className="text-indigo-100 mb-6">No signup, no watermarks, no limits. Generate your first invoice in under a minute.</p>
          <Link href="/create" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg text-base hover:bg-indigo-50 transition-colors inline-block">
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
