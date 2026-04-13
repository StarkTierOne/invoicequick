import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invoice Tips & Guides | InvoiceQuick Blog",
  description: "Learn how to create professional invoices, get paid faster, and manage your freelance finances. Free guides, templates, and best practices.",
  keywords: "invoice tips, how to create invoice, invoice template, freelance invoicing, invoice best practices, late fees, invoice vs receipt",
};

const articles = [
  {
    slug: "how-to-create-professional-invoice",
    title: "How to Create a Professional Invoice (Step-by-Step Guide)",
    excerpt:
      "A professional invoice does more than request payment — it builds trust with your clients and sets the tone for your business relationship. Whether you are a freelancer sending your first invoice or a seasoned contractor looking to polish your process, this guide walks you through every element of a professional invoice: from header and contact details to line items, tax calculations, and payment terms. Follow these steps and you will get paid faster with fewer follow-ups.",
  },
  {
    slug: "free-invoice-template-freelancers",
    title: "Invoice Template: Free Download for Freelancers",
    excerpt:
      "Stop wasting time formatting invoices from scratch. A well-designed invoice template saves you hours each month and ensures you never forget a critical detail like payment terms or tax ID. In this article we break down what makes a great freelance invoice template, which fields are legally required in different countries, and how to customize your template for different client types. Plus, create unlimited invoices for free with InvoiceQuick — no download required.",
  },
  {
    slug: "when-to-send-invoice",
    title: "When to Send an Invoice: Best Practices for Getting Paid Faster",
    excerpt:
      "Timing is everything when it comes to getting paid. Send your invoice too early and the client may not be ready to process it; too late and you risk being forgotten in next month's payment cycle. Research shows that invoices sent within 24 hours of project completion are paid 1.5x faster than those sent a week later. Learn the optimal timing for different industries, how to structure milestone billing, and when to set up recurring invoices for retainer clients.",
  },
  {
    slug: "how-to-calculate-late-fees",
    title: "How to Calculate Late Fees on Invoices",
    excerpt:
      "Late payments cost freelancers thousands of dollars in lost productivity and cash-flow stress each year. Charging late fees is not just about recovering losses — it incentivizes clients to pay on time. But how much should you charge, and is it even legal in your state? This guide covers common late-fee structures (flat fee vs. percentage), how to calculate interest on overdue invoices, state-by-state regulations, and how to word your payment terms so clients take deadlines seriously.",
  },
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What's the Difference?",
    excerpt:
      "Invoices and receipts are both essential financial documents, but they serve very different purposes — and mixing them up can create accounting headaches and even legal issues. An invoice is a request for payment sent before or at the time of delivery, while a receipt is proof that payment has been received. Understanding when to use each document, what information they must contain, and how they affect your taxes will keep your books clean and your clients happy.",
  },
];

export default function BlogPage() {
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
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</Link>
            <Link href="/create" className="btn-primary text-sm !py-2 !px-4">Create Invoice</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
          Invoice Tips & Guides
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practical advice to help freelancers and small business owners create better invoices and get paid faster.
        </p>
      </section>

      {/* Articles */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="card hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <Link href="/create" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                Create Your Free Invoice &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-indigo-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Send Your Next Invoice?</h2>
          <p className="text-indigo-100 mb-6">Create a professional invoice in under 60 seconds. Free forever.</p>
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
