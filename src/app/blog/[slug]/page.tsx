import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string;
    body: string[];
  }
> = {
  "how-to-create-professional-invoice": {
    title: "How to Create a Professional Invoice (Step-by-Step Guide)",
    description:
      "Learn how to create a professional invoice step by step. Covers every required field, formatting best practices, and how to get paid faster.",
    keywords:
      "how to create a professional invoice, invoice creation guide, invoice fields, freelance invoice",
    body: [
      "A professional invoice does more than request payment — it builds trust with your clients and sets the tone for your business relationship. Whether you are a freelancer sending your first invoice or a seasoned contractor looking to polish your process, this guide walks you through every element.",
      "## 1. Include Your Business Information",
      "At the top of your invoice, include your full legal name or business name, your address, phone number, and email. If you are VAT-registered or have a tax ID, include that too. This is the information your client needs to process payment and file records.",
      "## 2. Add the Client's Details",
      "Include your client's name (or company name), their billing address, and a contact name if relevant. Double-check the spelling — an incorrect name on an invoice can delay payment while the client waits for a corrected version.",
      "## 3. Assign a Unique Invoice Number",
      "Every invoice needs a unique number for tracking purposes. Use a consistent format like INV-001, INV-002, or a date-based prefix like 2026-001. Never reuse invoice numbers. InvoiceQuick auto-assigns sequential numbers so you never have to think about this.",
      "## 4. Set the Invoice Date and Due Date",
      "The invoice date is when you created and sent the invoice. The due date is when payment is expected. Common payment terms are Net 15 (15 days) or Net 30 (30 days). For faster payment, consider using Due on Receipt for smaller amounts.",
      "## 5. Itemize Your Services",
      "List each service or product on its own line with a description, quantity, rate, and line total. Avoid vague descriptions like 'Consulting' — be specific: 'Homepage design — 12 hours at $85/hour'. Detailed itemization reduces disputes and speeds up approval.",
      "## 6. Calculate Subtotal, Tax, and Total",
      "Show the subtotal before tax, then any applicable sales or VAT tax as a separate line, then the grand total. InvoiceQuick auto-calculates all of this based on your inputs, eliminating math errors.",
      "## 7. Include Payment Instructions",
      "Tell your client exactly how to pay: bank transfer (include account details or routing number), PayPal, Stripe, check, or other methods. The easier you make it for them to pay, the faster you get paid.",
      "## 8. Add Payment Terms and Late Fee Policy",
      "State your payment terms clearly: 'Payment due within 30 days of invoice date. A 1.5% monthly fee applies to balances overdue by more than 7 days.' Having this in writing gives you legal standing if you need to follow up.",
      "## Send Your Invoice Promptly",
      "Research shows invoices sent within 24 hours of project completion are paid 1.5x faster than those sent a week later. Create your invoice while the project is fresh, send it immediately, and follow up politely if you haven't heard back by the due date.",
    ],
  },
  "free-invoice-template-freelancers": {
    title: "Invoice Template: Free Download for Freelancers",
    description:
      "Download a free professional invoice template for freelancers. Learn what fields to include and why InvoiceQuick is faster than Word or Excel.",
    keywords:
      "free invoice template freelancers, freelance invoice template download, invoice template word excel",
    body: [
      "Stop wasting time formatting invoices from scratch. A well-designed invoice template saves you hours each month and ensures you never forget a critical detail like payment terms or your tax ID.",
      "## What Makes a Great Freelance Invoice Template?",
      "A good freelance invoice template is clean, professional, and includes all legally required fields. It should be easy to fill out quickly and produce a polished PDF that looks good on any device.",
      "## Required Fields for a Freelance Invoice",
      "Every freelance invoice should include: your business name and contact information, the client's name and address, a unique invoice number, the invoice date and payment due date, an itemized list of services with descriptions and rates, subtotal, applicable taxes, total amount due, accepted payment methods, and your payment terms.",
      "## Word vs. Excel vs. InvoiceQuick",
      "Word and Excel templates are free but come with drawbacks: manual math errors, inconsistent formatting, and the hassle of saving and organizing each file. InvoiceQuick gives you a professional template that auto-calculates totals, produces a polished PDF in seconds, and keeps your invoice history organized — all for free.",
      "## Customizing Your Template for Different Clients",
      "Different client types may need different invoice formats. Corporate clients often require purchase order numbers on your invoice. International clients may need currency specified explicitly. Creative clients appreciate a clean, minimal design. InvoiceQuick Pro lets you save multiple templates so you can switch between them instantly.",
      "## Create Your Free Invoice Now",
      "Instead of downloading a static template and fighting with Word formatting, try InvoiceQuick. Fill in your details, preview the result in real time, and download a clean PDF in under a minute. No sign-up required.",
    ],
  },
  "when-to-send-invoice": {
    title: "When to Send an Invoice: Best Practices for Getting Paid Faster",
    description:
      "Timing your invoice correctly can dramatically speed up payment. Learn the best time to send an invoice and how milestone billing works.",
    keywords:
      "when to send invoice, invoice timing, how to get paid faster, milestone billing freelance",
    body: [
      "Timing is everything when it comes to getting paid. Research shows that invoices sent within 24 hours of project completion are paid 1.5x faster than those sent a week later. Here is how to optimize your invoicing timing.",
      "## Send Immediately After Completing Work",
      "The best time to send an invoice is the same day you finish a project or milestone. The work is fresh in your client's mind, they are satisfied with the result, and they are most motivated to process payment quickly.",
      "## Use Milestone Billing for Large Projects",
      "For projects over $5,000, consider breaking payment into milestones: 50% upfront before starting, 25% at a midpoint, and 25% on delivery. This protects your cash flow and reduces risk if the project scope changes.",
      "## Set Up Recurring Invoices for Retainer Clients",
      "If you have clients on monthly retainers, set up recurring invoices so you never forget to bill. InvoiceQuick Pro handles recurring billing automatically — set the amount, frequency, and start date, and invoices go out on schedule.",
      "## Avoid Invoicing at the Wrong Time",
      "Don't send invoices on Friday afternoons (they get buried over the weekend), on holidays, or during known busy periods for your client. Tuesday through Thursday mornings tend to get the fastest response rates.",
      "## Follow Up Before the Due Date",
      "Send a friendly reminder 3-5 days before the invoice is due — not after. A proactive nudge is less awkward than a collection call and gets you paid without damaging the relationship.",
    ],
  },
  "how-to-calculate-late-fees": {
    title: "How to Calculate Late Fees on Invoices",
    description:
      "Learn how to calculate late fees on overdue invoices, what rates are standard, and how to word your payment terms to get paid on time.",
    keywords:
      "how to calculate late fees on invoice, invoice late fee, overdue invoice fee, late payment fee freelancer",
    body: [
      "Late payments cost freelancers thousands of dollars in lost productivity and cash-flow stress each year. Charging late fees is not just about recovering losses — it incentivizes clients to pay on time.",
      "## Standard Late Fee Rates",
      "The most common late fee rate is 1.5% per month on the outstanding balance (which equals 18% annually). Some freelancers charge a flat fee of $25–$50 for invoices under $1,000, or 1–2% per month for larger amounts.",
      "## How to Calculate a Monthly Late Fee",
      "To calculate a 1.5% monthly late fee: multiply the overdue amount by 0.015. For example, on a $2,000 overdue invoice: $2,000 × 0.015 = $30 late fee for the first month. If it remains unpaid for two months, the second month's fee applies to the new balance of $2,030.",
      "## State-by-State Regulations",
      "Most US states allow late fees but cap the maximum rate. For example, California caps interest at 10% annually, while Texas allows up to 18% annually. Check your state's laws before setting your rate. In practice, 1.5% per month (18% annually) is legal in most states.",
      "## How to Word Your Late Fee Policy",
      "Include your late fee terms clearly on every invoice: 'Payment is due within 30 days of invoice date. A 1.5% monthly late fee (18% APR) will be applied to all balances overdue by more than 7 days.' This sets expectations upfront and gives you legal standing to charge the fee.",
      "## When to Enforce Late Fees",
      "Many freelancers waive late fees for first-time offenders or long-term clients who pay late once. Be consistent with clients who habitually pay late — enforcing the fee or requiring upfront deposits for future work sends a clear message.",
    ],
  },
  "invoice-vs-receipt": {
    title: "Invoice vs Receipt: What's the Difference?",
    description:
      "Understand the key differences between an invoice and a receipt, when to use each, and why it matters for your taxes and bookkeeping.",
    keywords:
      "invoice vs receipt difference, what is an invoice, what is a receipt, invoice receipt difference",
    body: [
      "Invoices and receipts are both essential financial documents, but they serve very different purposes — and mixing them up can create accounting headaches and even legal issues.",
      "## What Is an Invoice?",
      "An invoice is a request for payment sent by the seller to the buyer before payment is made. It details what was provided, how much is owed, and when payment is due. Invoices are forward-looking documents — they say 'you owe me this amount.'",
      "## What Is a Receipt?",
      "A receipt is proof that payment has already been received. It confirms the transaction is complete. Receipts are backward-looking documents — they say 'you paid this amount on this date.'",
      "## Key Differences at a Glance",
      "Invoice: sent before payment, includes due date, payment terms, and invoice number. Receipt: sent after payment, includes payment date, method, and confirmation of amount received.",
      "## Why It Matters for Taxes",
      "Invoices are your record of income earned. Receipts are your clients' record of expenses paid. Both documents are important for tax purposes — you need invoices to report income accurately, and your clients need receipts (or paid invoices) to claim expenses.",
      "## When to Send Each Document",
      "Send an invoice when you complete a project or milestone and want to request payment. Send a receipt (or mark the invoice as 'Paid') after you receive payment. In InvoiceQuick, you can mark any invoice as paid to create a clear record of completed transactions.",
    ],
  },
  "how-to-write-payment-terms-on-invoice": {
    title: "How to Write Payment Terms on an Invoice (With Examples)",
    description:
      "Learn how to write clear payment terms on your invoice. Includes examples of Net 15, Net 30, and milestone billing terms.",
    keywords:
      "how to write payment terms on invoice, invoice payment terms examples, Net 30 invoice, freelance payment terms",
    body: [
      "Payment terms are one of the most important sections of any invoice, yet many freelancers treat them as an afterthought. Clear payment terms set expectations, reduce disputes, and give you legal standing if a client pays late.",
      "## Common Payment Term Formats",
      "Due on Receipt: payment is expected immediately upon receiving the invoice. Net 15: payment is due within 15 days of the invoice date. Net 30: payment is due within 30 days. Net 60: common for large corporate clients who have extended payment cycles.",
      "## Early Payment Discounts",
      "Offer an incentive for early payment with terms like '2/10 Net 30' — meaning a 2% discount if paid within 10 days, otherwise full payment due in 30 days. Many clients will take the discount, improving your cash flow.",
      "## How to Write Your Terms Clearly",
      "Be specific and avoid vague language. Instead of 'payment due soon,' write: 'Payment due by March 15, 2026 (Net 30). A 1.5% monthly late fee applies to overdue balances.' Always include the exact due date right on the invoice, not just the number of days.",
      "## Payment Method Instructions",
      "Specify which payment methods you accept and provide the details clients need. For bank transfer, include your account number and routing number (or IBAN for international clients). For online payments, include your PayPal email or Stripe payment link.",
      "## Milestone Billing Terms",
      "For large projects, use milestone-based terms: '50% ($2,500) due upon signing. 50% ($2,500) due upon project completion.' Include this language in both your contract and your invoice so there is no ambiguity.",
    ],
  },
  "invoice-number-format-best-practices": {
    title: "Invoice Number Format Best Practices for Small Businesses",
    description:
      "Learn the best invoice number formats for freelancers and small businesses. Includes sequential, date-based, and client-code formats.",
    keywords:
      "invoice number format, how to number invoices, invoice numbering system, sequential invoice numbers",
    body: [
      "A consistent invoice numbering system is essential for bookkeeping, tax filing, and audit readiness. Yet many freelancers start with random numbers or reset their count every January, creating confusion and potential legal problems.",
      "## The Three Most Common Invoice Number Formats",
      "Sequential (INV-001, INV-002): simple and universal. Date-based (2026-001, 2026-002): keeps invoices organized by year. Client-code (ACME-001, ACME-002): makes it easy to filter invoices by client but requires more setup.",
      "## Rules Every Invoice Number System Must Follow",
      "Never reuse an invoice number. Never leave gaps without explanation (tax authorities may ask). Always increment in order. Store a record of every number issued. InvoiceQuick automatically assigns sequential invoice numbers so you never have to manage this manually.",
      "## Why You Should Never Reset Your Counter",
      "Resetting your invoice counter every year (INV-001 in 2025, then INV-001 again in 2026) creates duplicate numbers that are impossible to distinguish without checking the year. Use date prefixes instead: 2025-001 and 2026-001 are clearly different.",
      "## Customizing Your Prefix",
      "Many businesses use a prefix that matches their brand or project type. Examples: DESIGN-001 for a design agency, DEV-001 for a developer, PHOTO-001 for a photographer. InvoiceQuick Pro lets you set a custom prefix so every invoice number reflects your business.",
      "## Invoice Numbers and Tax Filing",
      "During tax season, sequential invoice numbers make it easy to verify that all income is accounted for. Auditors and accountants specifically look for gaps or duplicates in invoice numbering sequences, so a clean system protects you.",
    ],
  },
  "how-to-send-invoice-via-email": {
    title: "How to Send an Invoice via Email (Step-by-Step)",
    description:
      "Learn exactly how to send a professional invoice via email. Includes subject line templates, body copy, and tips for getting paid faster.",
    keywords:
      "how to send invoice via email, invoice email template, email invoice to client, send invoice professionally",
    body: [
      "Email is the most common way freelancers send invoices, but there is a right way and a wrong way to do it. A poorly written invoice email can get buried in a client's inbox, flagged as spam, or simply ignored.",
      "## Step 1: Create and Export Your Invoice as PDF",
      "Always send invoices as PDF files — the standard format that preserves formatting, cannot be accidentally edited by your client, and opens on any device. In InvoiceQuick, just click Download PDF after filling in your details.",
      "## Step 2: Write a Clear Subject Line",
      "Use a subject line that includes the invoice number, your business name, and the amount due. Example: 'Invoice #1042 from Alex Design Studio — $1,800 due March 15.' This makes it easy for your client to search for and find the invoice later.",
      "## Step 3: Write a Short, Professional Email Body",
      "Keep the body brief. Reference the project or service, state the total and due date, and mention your preferred payment method. Example: 'Hi Sarah, Attached is Invoice #1042 for the homepage redesign project. Total: $1,800, due March 15. You can pay via bank transfer (details below) or via the Stripe link on the invoice. Let me know if you have any questions.'",
      "## Step 4: Attach the PDF and Double-Check",
      "Before hitting send, confirm the attachment actually uploaded. Many late payments happen simply because the freelancer forgot to attach the file and the client did not mention it.",
      "## Step 5: Follow Up Professionally",
      "If you haven't received payment within a few days of the due date, send a polite reminder: 'Hi Sarah, I wanted to follow up on Invoice #1042 ($1,800), which was due March 15. Please let me know if you need anything from my end to process this.' Keep the tone friendly — most late payments are oversights, not intentional.",
      "## Pro Tips for Faster Payment",
      "Always CC yourself so you have a sent record. Use a professional email address (not a personal Gmail). Consider including a payment link directly in your email to remove friction. InvoiceQuick Pro lets you share payment links alongside your PDF invoice.",
    ],
  },
  "self-employed-invoice-example": {
    title: "Self-Employed Invoice Example: What to Include and Why",
    description:
      "See a complete self-employed invoice example with every required field explained. Includes tips for recordkeeping and tax compliance.",
    keywords:
      "self employed invoice example, sole trader invoice, how to invoice as self employed, independent contractor invoice",
    body: [
      "When you are self-employed, every invoice you send is a reflection of your business. A sloppy or incomplete invoice can delay payment, confuse your client, and create problems at tax time.",
      "## A Complete Self-Employed Invoice Example",
      "Here is what a complete invoice for a self-employed web developer might look like:",
      "From: Alex Rivera, Web Developer | alex@alexdev.com | Portland, OR 97201",
      "To: Acme Corp | Billing Dept | 123 Business Ave, New York, NY 10001",
      "Invoice #: DEV-2026-042 | Date: April 1, 2026 | Due: April 30, 2026",
      "Line items: Homepage Design & Development — 20 hrs × $95/hr = $1,900 | Responsive Testing — 4 hrs × $95/hr = $380 | SEO Setup — Flat rate = $250",
      "Subtotal: $2,530 | Sales Tax (0%): $0 | Total Due: $2,530",
      "Payment terms: Net 30. Payment via bank transfer or PayPal to alex@alexdev.com. A 1.5% monthly late fee applies after April 30, 2026.",
      "## Why Every Field Matters",
      "Your contact info ensures clients can reach you with questions. The unique invoice number makes it easy to reference in communications and required for tax filing. Itemized line items justify your total and reduce disputes. Payment terms set expectations so clients know exactly when and how to pay.",
      "## Self-Employed Tax Recordkeeping",
      "Unlike employees, self-employed workers are responsible for tracking all income. Keep copies of every invoice you send, organized by year and client, for at least seven years. Each invoice is a tax record — losing one could mean understating income or being unable to prove a legitimate business expense.",
      "## When to Include a Tax ID",
      "If you are VAT-registered or operate in a jurisdiction that requires a tax identification number on invoices (such as the EU, UK, or Canada), include it prominently on every invoice. Clients may be required by law to collect this information for their own tax filings.",
    ],
  },
  "free-invoice-template-for-freelancers": {
    title: "Free Invoice Template for Freelancers (2026)",
    description:
      "Get a free professional invoice template for freelancers in 2026. Learn what to include, common mistakes to avoid, and how to invoice in seconds.",
    keywords:
      "free invoice template freelancers 2026, freelancer invoice template, professional invoice template free",
    body: [
      "Finding the right invoice template can feel overwhelming when you are just starting out as a freelancer. You need something that looks professional, includes all the legally required fields, and does not take twenty minutes to fill out every time a project wraps up.",
      "## What a Good Freelance Invoice Template Includes",
      "Your business name and contact details. The client's information. A unique invoice number. An itemized list of services with rates and quantities. Applicable taxes. The total amount due. Clear payment terms including due date and accepted payment methods.",
      "## Common Invoice Mistakes Freelancers Make",
      "Forgetting to include a unique invoice number. Using vague service descriptions that invite disputes. Not specifying a due date (just saying 'payment due upon receipt' is not specific enough). Sending the invoice as a Word document that the client can accidentally edit. Leaving out late fee terms.",
      "## Word and Excel Templates vs. InvoiceQuick",
      "Many freelancers start with a Word or Excel template. These work, but come with friction: manual math errors, formatting inconsistencies, and the hassle of naming and saving each file. InvoiceQuick gives you a professional template that auto-calculates totals, produces a polished watermark-free PDF, and stores your invoice history — all for free, with no sign-up required.",
      "## How to Create Your First Invoice in Under 60 Seconds",
      "Go to InvoiceQuick. Enter your name and contact info. Enter your client's details. Add your line items with descriptions and rates. Set your payment terms and due date. Preview and download as PDF. Done.",
      "## Scaling Your Invoice Process",
      "As your freelance business grows, look for tools that save your client database, auto-number invoices, and support recurring billing. InvoiceQuick Pro ($9/month) covers all of these without the complexity of full accounting software.",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | InvoiceQuick Blog`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `https://invoicequick.vercel.app/blog/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 pt-16 pb-20">
        <div className="mb-4">
          <Link href="/blog" className="text-indigo-600 text-sm hover:text-indigo-700 transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">{article.title}</h1>
        <div className="prose prose-lg max-w-none">
          {article.body.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article CTA */}
        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to create your invoice?</h3>
          <p className="text-gray-600 mb-5">Build a professional invoice in under 60 seconds. Free forever, no sign-up required.</p>
          <Link href="/create" className="btn-primary inline-block">
            Create Free Invoice &rarr;
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} InvoiceQuick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
