import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Invoice Template | Download & Customize — InvoiceQuick",
  description: "Get a free, professional invoice template you can customize and download as PDF. Perfect for freelancers, contractors, and small businesses. No signup required.",
  keywords: "invoice template, free invoice template, invoice template PDF, invoice template download, professional invoice template, freelance invoice template",
};

export default function InvoiceTemplatePage() {
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
          Free Invoice Template
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A clean, professional invoice template you can customize in seconds. Add your business details, line items, and download a polished PDF — completely free.
        </p>
        <Link href="/create" className="btn-primary text-base !py-3 !px-8 inline-block">
          Use This Template Free &rarr;
        </Link>
      </section>

      {/* What's Included */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Included in This Invoice Template?</h2>
          <p className="text-gray-700 mb-4">
            A professional invoice template needs to include every piece of information your client and their accounts payable department expect to see. Missing even one field can delay payment or force you to resend a corrected version. The InvoiceQuick template includes all of the following fields, pre-formatted and ready to fill in.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Business Identity</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Your business name and logo</li>
                <li>Your address and contact info</li>
                <li>Tax ID or VAT number (optional)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Client Details</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Client name and company</li>
                <li>Client billing address</li>
                <li>Client email for delivery</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Invoice Information</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Unique invoice number</li>
                <li>Invoice date and due date</li>
                <li>Payment terms (Net 15, Net 30, etc.)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Line Items & Totals</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Itemized services or products</li>
                <li>Quantity, rate, and amount per line</li>
                <li>Subtotal, tax, and grand total</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Why Use a Template Instead of Starting from Scratch?</h2>
          <p className="text-gray-700 mb-4">
            Creating an invoice from a blank document every time you finish a project is a recipe for inconsistency and errors. You might forget to include your payment terms on one invoice, use a different layout for another, or miscalculate the tax. Templates eliminate these problems by giving you a consistent starting point with all required fields already in place.
          </p>
          <p className="text-gray-700 mb-4">
            Templates also save significant time. Instead of spending ten to fifteen minutes formatting each invoice, you spend less than a minute filling in the details that change from project to project: the client name, line items, and amounts. Everything else, including your business information, logo, payment instructions, and formatting, stays the same.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Invoice Templates for Different Industries</h2>
          <p className="text-gray-700 mb-4">
            While the core structure of an invoice is the same across industries, the details vary. A freelance writer might have one or two line items describing articles delivered, while a web development agency might list dozens of tasks across multiple project phases. A photographer might include licensing terms and usage rights in the notes section. A consultant might break work into hourly blocks with detailed descriptions.
          </p>
          <p className="text-gray-700 mb-4">
            InvoiceQuick handles all of these scenarios because you control the line items, descriptions, and notes. The template adapts to your business rather than forcing you into a rigid format. Add as many or as few line items as you need, include custom notes and terms, and the PDF output always looks clean and professional.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">How to Customize Your Invoice Template</h2>
          <p className="text-gray-700 mb-4">
            Getting started takes less than a minute. Open the InvoiceQuick creator, enter your business name and contact details, upload your logo if you have one, and fill in your first client&apos;s information. Add your services as line items with rates and quantities, set your tax rate if applicable, and add your payment terms and notes. Then download the finished invoice as a PDF, ready to email to your client.
          </p>
          <p className="text-gray-700 mb-6">
            Your details are saved locally, so the next time you create an invoice, your business information is already filled in. You only need to update the client-specific fields and line items, making each subsequent invoice even faster to create.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Is this invoice template really free?</h3>
              <p className="text-gray-600 text-sm">Yes, completely free with no watermarks. You can create and download as many invoices as you need without paying anything.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Can I use this template for my business?</h3>
              <p className="text-gray-600 text-sm">Absolutely. The template works for freelancers, contractors, agencies, consultants, and any small business that needs to send invoices. Customize it with your logo and branding.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">What file format is the invoice?</h3>
              <p className="text-gray-600 text-sm">Invoices are downloaded as PDF files, which look professional and consistent on every device. PDF is the standard format for business invoices.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to install anything?</h3>
              <p className="text-gray-600 text-sm">No. InvoiceQuick runs entirely in your browser. There is nothing to download, install, or update. Just open the page and start creating your invoice.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Can I add multiple line items?</h3>
              <p className="text-gray-600 text-sm">Yes. You can add as many line items as your invoice requires. Each line includes a description, quantity, rate, and calculated amount. Totals and taxes are computed automatically.</p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-2">Is my data safe?</h3>
              <p className="text-gray-600 text-sm">Your invoice data is processed in your browser and stored locally on your device. We do not sell or share your information with third parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Use This Template?</h2>
          <p className="text-indigo-100 mb-6">Create a professional invoice in under 60 seconds. Free forever, no signup required.</p>
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
