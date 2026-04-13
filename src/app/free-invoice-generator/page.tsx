import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Generator | Create Professional Invoices Online — InvoiceQuick",
  description: "Generate professional invoices for free in under 60 seconds. No signup required. Add your business details, line items, and download a polished PDF instantly.",
  keywords: "free invoice generator, create invoice online, invoice maker, free invoice creator, online invoice generator, make invoice free",
};

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
            Not all invoice generators are created equal. The best ones share a few key characteristics: they are fast to use, produce professional-looking output, calculate totals and taxes automatically, and export to PDF format so your invoices look the same on every device. InvoiceQuick checks every box.
          </p>
          <p className="text-gray-700 mb-4">
            A great invoice generator should also be flexible enough to handle different types of work. Whether you charge by the hour, by the project, or by the item, your generator should accommodate itemized line items with descriptions, quantities, and rates. It should let you add payment terms, notes, and your preferred payment methods so clients know exactly how to pay you.
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
            InvoiceQuick is used by thousands of freelancers, consultants, contractors, and small business owners across every industry. Graphic designers use it to bill for branding projects. Web developers use it to invoice for website builds and maintenance. Writers and editors use it for content contracts. Photographers, videographers, tutors, coaches, and tradespeople all rely on InvoiceQuick to get paid professionally and on time.
          </p>
          <p className="text-gray-700 mb-4">
            The tool is designed to be simple enough for someone sending their very first invoice, yet flexible enough for experienced business owners who need customized line items, tax calculations, and detailed payment terms.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Is InvoiceQuick really free?</h3>
              <p className="text-gray-600 text-sm">Yes. You can create and download unlimited invoices without paying anything. There are no watermarks, no trial periods, and no hidden fees. We offer optional paid features for businesses that need client portals and payment tracking.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to create an account?</h3>
              <p className="text-gray-600 text-sm">No. You can create and download an invoice immediately without signing up. If you want to save your invoices and access them later, you can optionally create a free account.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">What format are the invoices?</h3>
              <p className="text-gray-600 text-sm">Invoices are generated as PDF files, which is the industry standard. PDFs preserve formatting across all devices and can be easily emailed or printed.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Can I add my logo to the invoice?</h3>
              <p className="text-gray-600 text-sm">Yes. InvoiceQuick lets you upload your business logo, which appears on your invoice for a branded, professional look.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Does InvoiceQuick calculate taxes automatically?</h3>
              <p className="text-gray-600 text-sm">Yes. You can set a tax rate and InvoiceQuick will automatically calculate the tax amount and add it to your invoice total.</p>
            </div>
          </div>
        </div>
      </section>

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
