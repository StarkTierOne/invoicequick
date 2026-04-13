import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invoice Tips & Guides | InvoiceQuick Blog",
  description: "Learn how to create professional invoices, get paid faster, and manage your freelance finances. Free guides, templates, and best practices.",
  keywords: "invoice tips, how to create invoice, invoice template, freelance invoicing, invoice best practices, late fees, invoice vs receipt, free invoice template freelancers, payment terms on invoice, invoice number format, send invoice via email, self employed invoice example",
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
  {
    slug: "free-invoice-template-for-freelancers",
    title: "Free Invoice Template for Freelancers (2025)",
    excerpt:
      "Finding the right invoice template can feel overwhelming when you are just starting out as a freelancer. You need something that looks professional, includes all the legally required fields, and does not take twenty minutes to fill out every time a project wraps up. A good freelance invoice template should include your business name and contact details, the client's information, a unique invoice number, an itemized list of services with rates and quantities, applicable taxes, the total amount due, and clear payment terms including due date and accepted payment methods. Many freelancers start with a Word or Excel template, but those come with drawbacks: manual math errors, inconsistent formatting across invoices, and the hassle of saving and organizing each file. A better approach is to use InvoiceQuick, which gives you a professional template you can fill out in under a minute, automatically calculates totals and taxes, and lets you download a clean PDF instantly. Whether you are a graphic designer, writer, developer, or consultant, having a polished invoice template builds client trust and helps you get paid on time. Stop using generic spreadsheets and start sending invoices that reflect the quality of your work.",
  },
  {
    slug: "how-to-write-payment-terms-on-invoice",
    title: "How to Write Payment Terms on an Invoice (With Examples)",
    excerpt:
      "Payment terms are one of the most important sections of any invoice, yet many freelancers and small business owners treat them as an afterthought. Clear payment terms set expectations, reduce disputes, and give you legal standing if a client pays late. At minimum, your payment terms should specify when payment is due (for example, Net 15 or Net 30), which payment methods you accept (bank transfer, credit card, PayPal, etc.), any early payment discounts you offer (such as 2/10 Net 30, meaning a two-percent discount if paid within ten days), and late fee policies. Common payment term formats include Due on Receipt, which means payment is expected immediately; Net 15 or Net 30, which gives the client fifteen or thirty days to pay; and milestone-based terms for larger projects, where you bill a percentage upfront and the rest upon completion. When writing your terms, be specific and avoid vague language like \"payment due soon.\" Instead, include the exact due date right on the invoice. If you charge late fees, state the rate clearly, for example, \"A 1.5% monthly fee will be applied to balances overdue by more than 7 days.\" InvoiceQuick lets you add custom payment terms to every invoice you create, so your clients always know exactly when and how to pay you.",
  },
  {
    slug: "invoice-number-format-best-practices",
    title: "Invoice Number Format Best Practices for Small Businesses",
    excerpt:
      "A consistent invoice numbering system is essential for bookkeeping, tax filing, and audit readiness. Yet many freelancers start with random numbers or reset their count every January, creating confusion and potential legal problems down the road. The best invoice number formats are sequential, unique, and easy to reference. Common approaches include simple sequential numbers (INV-001, INV-002), date-based prefixes (2025-001, 2025-002), and client-code prefixes (ACME-001, ACME-002). Each has trade-offs: sequential is simple but reveals your invoice volume to clients; date-based keeps things organized by year but can create gaps if you skip months; client-based makes it easy to filter invoices by account but requires more setup. Whatever format you choose, follow these rules: never reuse an invoice number, never leave gaps unexplained (tax authorities may ask), always increment in order, and store a record of every number issued. If you use InvoiceQuick, the system automatically assigns sequential invoice numbers for you, so you never have to worry about duplicates or formatting inconsistencies. You can also customize the prefix to match your business naming conventions. A clean numbering system saves hours during tax season and makes you look professional when clients request past invoices.",
  },
  {
    slug: "how-to-send-invoice-via-email",
    title: "How to Send an Invoice via Email (Step-by-Step)",
    excerpt:
      "Email is the most common way freelancers and small businesses send invoices, but there is a right way and a wrong way to do it. A poorly written invoice email can get buried in a client's inbox, flagged as spam, or simply ignored. To send an invoice professionally, follow these steps: First, create your invoice with all required details including your business information, the client's details, line items, totals, and payment terms. Second, export or download the invoice as a PDF, which is the standard format because it preserves formatting and cannot be easily edited. Third, compose a short, professional email with a clear subject line like \"Invoice #1042 from [Your Business Name] — Due March 15.\" In the body, briefly reference the project or service, state the total amount and due date, and mention your preferred payment method. Fourth, attach the PDF to the email and double-check that the attachment actually loaded before hitting send. Fifth, follow up if you have not received payment within a few days of the due date with a polite reminder. Pro tips: always CC yourself so you have a sent record, use a professional email address rather than a personal Gmail, and consider using read-receipt tracking so you know when the client opened your invoice. InvoiceQuick makes this entire process faster: create your invoice, download the PDF, and send it, all in under two minutes.",
  },
  {
    slug: "self-employed-invoice-example",
    title: "Self-Employed Invoice Example: What to Include and Why",
    excerpt:
      "When you are self-employed, every invoice you send is a reflection of your business. A sloppy or incomplete invoice can delay payment, confuse your client, and create problems at tax time. A proper self-employed invoice should include your full legal name or business name, your address and contact information, the client's name and address, a unique invoice number, the invoice date and due date, a detailed description of each service provided along with the rate and quantity, subtotal, any applicable taxes, the total amount due, and your payment instructions. For example, a freelance web developer might list line items like \"Homepage Design — 8 hours at $95/hour\" and \"Responsive Testing — 3 hours at $95/hour\" with a subtotal of $1,045, sales tax where applicable, and a grand total. Unlike employees, self-employed workers are responsible for tracking and reporting all income, so every invoice becomes a financial record. Keep copies of every invoice you send, organized by year and client, for at least seven years. If you are VAT-registered or operate in a jurisdiction that requires tax IDs on invoices, make sure to include those as well. InvoiceQuick is built specifically for self-employed professionals: fill in your details once, create invoices in seconds, and download polished PDFs that include every field you need for clean recordkeeping.",
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${article.slug}`} className="hover:text-indigo-600 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                Read Article &rarr;
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
