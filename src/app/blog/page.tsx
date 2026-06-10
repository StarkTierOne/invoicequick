import type { Metadata } from "next";
import Link from "next/link";
import { publishedAt } from "@/lib/blog-published-at";

export const metadata: Metadata = {
  title: "Invoice Tips & Guides | InvoiceQuick Blog",
  description: "Learn how to create professional invoices, get paid faster, and manage your freelance finances. Free guides, templates, and best practices.",
  alternates: { canonical: "https://invoicequick-phi.vercel.app/blog" },
  keywords: "invoice tips, how to create invoice, invoice template, freelance invoicing, invoice best practices, late fees, invoice vs receipt, free invoice template freelancers, payment terms on invoice, invoice number format, send invoice via email, self employed invoice example, how to invoice international clients, international invoice currency, freelance invoice tips, get paid faster freelancing, small business invoicing, small business invoice guide, invoice template for consultants, consulting invoice template, how to invoice consulting services, how to invoice as a freelancer, how to reference a contract on a freelance invoice, contract reference on invoice, statement of work invoice, change order invoice, recurring invoices for freelancers, retainer billing, monthly retainer invoice, hours-bank retainer, milestone retainer, retainer invoice template, freelance retainer model, convert project client to retainer, retainer pitch email, project to retainer pitch, freelance retainer conversion, trial retainer freelancer, deposit invoice, how to invoice for a deposit, upfront payment invoice, advance payment invoice, how to ask for a deposit freelance, 50 percent upfront invoice, purchase order vs invoice, po vs invoice, po number on invoice, three way match, corporate AP invoice, purchase order process, credit note vs invoice, credit memo, credit note example, refund invoice, cancel invoice freelance, correct invoice after sending, invoice template download, tax invoice vs commercial invoice, what is a tax invoice, what is a commercial invoice, GST tax invoice, VAT tax invoice, commercial invoice for customs, reverse charge VAT, cross border invoice, quote vs invoice, estimate vs invoice, quote vs estimate, is a quote legally binding, when to send a quote, freelance quote template, quote to invoice workflow, how to invoice for hourly work, hourly invoice, invoice for hours worked, time tracking for invoicing, hourly rate invoice, rounding time on invoices, blended hourly rate, not to exceed invoice, proforma invoice vs invoice, pro forma invoice, what is a proforma invoice, when to use a proforma invoice, can you pay a proforma invoice, proforma vs commercial invoice, is a proforma invoice legally binding, partial payment invoice, how to handle a partial payment on an invoice, balance due invoice, how to record a partial payment, installment invoice, accept partial payments, remaining balance invoice, common invoicing mistakes, invoice mistakes that delay payment, why invoices get rejected, invoice rejected by accounts payable, get invoices paid faster, invoicing mistakes to avoid, how to get invoice approved by accounts payable, invoice approval process, accounts payable invoice requirements, three way match, AP invoice approval, send invoice to accounts payable, vendor setup invoice, invoice approved first time, ssn or ein on invoice, do i put my ssn on an invoice, ein vs ssn invoice, do i need an ein to invoice, tax id on invoice, freelancer tax id invoice, ein for freelancers, w9 vs invoice tax id",
};

const articles = [
  {
    slug: "progress-invoicing-milestone-billing",
    title: "Progress Invoicing & Milestone Billing for Freelancers (2026 Guide)",
    excerpt:
      "Billing a long, expensive project in one lump sum at the end means financing the client's project out of your own pocket — and being exposed for the full amount if it goes sideways. Progress invoicing fixes that by splitting one engagement into staged invoices that flow in as the work gets done. This guide covers when to stage payments, how to build a milestone schedule (trigger, amount, date), the deposit → milestone → final pattern, how to itemize a progress invoice so the numbers reconcile instead of appearing to double-count the total, fixed-milestone vs percent-complete billing, and the work-stops contract clause that keeps staged projects on track.",
  },
  {
    slug: "ssn-or-ein-on-invoice",
    title: "Do You Put Your SSN or EIN on an Invoice? (What Tax ID Freelancers Should Use)",
    excerpt:
      "Most freelance invoices need no tax ID at all — and the ones that do should almost never carry your Social Security number. An SSN on an invoice is an exposed identity key: invoices get emailed, forwarded, printed, and filed, and you can't control how carefully anyone down the chain stores them. This guide covers when an invoice actually needs a tax ID, why an EIN is the safe number to share (and how to get one free from the IRS in minutes), why the W-9 — not the invoice — is the right place for sensitive numbers, and exactly what to do when a client asks for your tax ID.",
  },
  {
    slug: "what-to-include-on-invoice",
    title: "What to Include on an Invoice to Get Paid Faster (2026 Checklist)",
    excerpt:
      "Flip the usual invoicing advice around: instead of everything that goes wrong, here's exactly what to put on an invoice so it gets paid faster. The required fields every invoice needs (the word \"Invoice,\" matching party details, a unique number, an issue date and a literal due date, itemized line items, a clear total in a stated currency, payment instructions) and the payment-speeding extras most people leave off — a stated late-fee or interest line (invoices carrying one are paid at a far higher rate), and the two polite words that measurably raise the share of invoices paid within a week. Ends with a copy-and-keep checklist.",
  },
  {
    slug: "get-invoice-approved-by-accounts-payable",
    title: "How to Get an Invoice Approved by Accounts Payable the First Time",
    excerpt:
      "Invoicing a company with an accounts-payable department is nothing like invoicing a person: the invoice has to clear a process — capture, validation, matching, coding, approval — not just reach an inbox, and it can die silently at any stage while you assume it's in a queue. This guide breaks down the seven things AP actually checks before it approves you (a valid PO number, a matching vendor record, a clean three-way match, line items it can code to a budget, correct totals and currency, a unique invoice number, and delivery to the right AP channel), the onboarding questions to ask before you send the first invoice, and exactly what to do when one gets rejected — so your invoice clears on the first pass instead of bouncing back weeks later.",
  },
  {
    slug: "common-invoicing-mistakes",
    title: "Common Invoicing Mistakes That Delay Payment (and How to Fix Each One)",
    excerpt:
      "Most late payments are not caused by clients who refuse to pay — they are caused by invoices that quietly give the client a reason to wait. A vague line item gets queued for a question; a missing PO number gets the whole invoice auto-rejected by accounts payable before a human sees it; an invoice with no due date sits in a pile with no urgency. This guide walks through the nine mistakes that most reliably delay payment — vague descriptions, missing or unclear terms, no invoice number, a missing PO number, no payment instructions, sending late, math and tax errors, no late-fee policy, and no follow-up — with the specific fix for each, plus a 60-second pre-send checklist that turns an invoice that bounces back into one that clears on the first pass.",
  },
  {
    slug: "partial-payment-invoice",
    title: "How to Handle a Partial Payment on an Invoice (2026 Guide)",
    excerpt:
      "A client paid part of an invoice — now what? The mistake most people make is raising a second invoice for the balance, which double-counts the sale and confuses the client about the true total. This guide shows the correct way to handle it: keep the original invoice as the single record, show Amount Paid and a clearly dated Balance Due, keep the invoice number, and confirm each payment in writing. Plus how planned installments differ from an unexpected part-payment, when accepting partial payment actually helps your cash flow, and when a trickle of token payments is really a collection problem in disguise.",
  },
  {
    slug: "net-30-payment-terms",
    title: "What Are Net 30 Payment Terms? (Net 15, Net 60 & Due on Receipt Explained)",
    excerpt:
      "\"Net 30\" is the most common phrase on a business invoice — and one of the most misunderstood. It does not mean \"pay within 30 business days\" and it does not start counting when the client opens your email. This guide explains exactly what Net 30 means, how the clock actually starts, and how it compares to Net 15, Net 60, Net 90, Due on Receipt, and EOM terms. You will learn when each term helps or hurts your cash flow, how big clients really treat Net 30, how to use early-payment discounts like 2/10 Net 30 to get paid sooner, and the exact wording to put on your invoice so there is never an argument about the due date.",
  },
  {
    slug: "proforma-invoice-vs-invoice",
    title: "Proforma Invoice vs Invoice: What's the Difference and When to Send Each (2026)",
    excerpt:
      "A proforma invoice and a real invoice look almost identical, but they do completely different jobs: one previews a sale that has not happened yet, the other demands payment on a sale that has. This guide explains what a proforma invoice is, how it differs from a final invoice, whether a client can pay against one, why it never goes in your books, and the exact moments a proforma is the right document to send — internal cost approval, financing or letters of credit, customs and import permits, or confirming a deal in writing before you start. Plus the labeling and numbering that keep the two from ever being confused.",
  },
  {
    slug: "invoice-payment-reminder-email-templates",
    title: "Invoice Payment Reminder Email Templates (Polite to Firm)",
    excerpt:
      "A late invoice is rarely a sign that a client refuses to pay — most of the time it is simply buried in a busy inbox. The fix is a calm, well-timed reminder sequence that escalates politely without burning the relationship. This guide gives you five copy-paste payment reminder email templates: a friendly pre-due-date nudge, a gentle day-one reminder, a firmer two-week follow-up, a final notice referencing your late-fee policy, and a short-and-direct version for clients you know well. You will also learn the ideal cadence for sending them, the subject lines that actually get opened, and the small wording changes that get you paid without awkwardness.",
  },
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
    title: "Free Invoice Template for Freelancers (2026)",
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
    slug: "how-to-invoice-clients",
    title: "How to Invoice Clients: The Complete Guide for Freelancers (2026)",
    excerpt:
      "Invoicing clients is one of the most important — and most often mishandled — parts of running a freelance business. This guide covers everything: what to put on a client invoice, when to send it, how to follow up on late payments, and how to get paid faster. From writing clear line item descriptions to setting a late fee policy that clients actually respect, these are the steps that separate freelancers who chase payments from those who get paid on time, every time.",
  },
  {
    slug: "how-to-invoice-international-clients",
    title: "How to Invoice International Clients: Currency, Tax & Payment Tips",
    excerpt:
      "Invoicing international clients opens your business to global opportunities — but it also introduces complexity around currency selection, VAT and GST rules, payment methods, and exchange rate risk. This guide covers every aspect of cross-border invoicing: which currency to use, how to handle EU VAT and reverse-charge rules, what extra fields your invoice needs (SWIFT, IBAN, VAT number), which payment methods minimize fees, and how to protect yourself when exchange rates move. Whether you're invoicing a client in London, Berlin, or Sydney, these steps will help you get paid correctly and on time.",
  },
  {
    slug: "invoice-for-services-rendered",
    title: "Invoice for Services Rendered: What to Include and How to Word It",
    excerpt:
      "An invoice for services rendered is the document you send to a client after completing work — requesting payment for the professional services you delivered. Whether you are a freelance designer, consultant, contractor, or any other service provider, you need a clear, professional invoice that describes what you did and what you are owed. This guide covers every required field, how to write compelling service descriptions that speed up payment, example line items for common service types, and how to word your payment terms so clients pay on time.",
  },
  {
    slug: "freelance-invoice-tips",
    title: "10 Freelance Invoice Tips to Get Paid Faster in 2026",
    excerpt:
      "Late payments are the #1 cash-flow killer for freelancers — and most of them are preventable. These 10 freelance invoice tips cover the specific, actionable habits that separate freelancers who get paid on time from those who spend weeks chasing overdue payments. From the optimal moment to send your invoice (hint: same day as delivery) to how to write line items that eliminate disputes, set late fee policies that actually work, and build a follow-up system that feels professional rather than awkward. Whether you have been freelancing for years or just sent your first invoice, at least a few of these tips will immediately improve your payment speed.",
  },
  {
    slug: "self-employed-invoice-example",
    title: "Self-Employed Invoice Example: What to Include and Why",
    excerpt:
      "When you are self-employed, every invoice you send is a reflection of your business. A sloppy or incomplete invoice can delay payment, confuse your client, and create problems at tax time. A proper self-employed invoice should include your full legal name or business name, your address and contact information, the client's name and address, a unique invoice number, the invoice date and due date, a detailed description of each service provided along with the rate and quantity, subtotal, any applicable taxes, the total amount due, and your payment instructions. For example, a freelance web developer might list line items like \"Homepage Design — 8 hours at $95/hour\" and \"Responsive Testing — 3 hours at $95/hour\" with a subtotal of $1,045, sales tax where applicable, and a grand total. Unlike employees, self-employed workers are responsible for tracking and reporting all income, so every invoice becomes a financial record. Keep copies of every invoice you send, organized by year and client, for at least seven years. If you are VAT-registered or operate in a jurisdiction that requires tax IDs on invoices, make sure to include those as well. InvoiceQuick is built specifically for self-employed professionals: fill in your details once, create invoices in seconds, and download polished PDFs that include every field you need for clean recordkeeping.",
  },
  {
    slug: "invoice-without-a-business",
    title: "Can I Send an Invoice Without a Business? (Yes — Here's How)",
    excerpt:
      "Yes — you can send an invoice without a registered business, LLC, or company. Millions of freelancers, sole traders, and self-employed individuals invoice clients every day as private individuals. You do not need a business license or business bank account to get paid professionally. This guide covers exactly what to put on your invoice as an individual, whether you need a tax ID, when it makes sense to register a business, and how to create a polished invoice in under a minute — no sign-up required.",
  },
  {
    slug: "invoice-for-side-hustle",
    title: "How to Invoice as a Side Hustle: A Beginner's Guide (2026)",
    excerpt:
      "Running a side hustle — freelance design, tutoring, photography, handyman work — means you will eventually need to send invoices. This guide covers everything a side hustler needs to know: what to include on your invoice, which payment terms to use, how side hustle income is taxed, and how to stay organized without expensive accounting software. You do not need an LLC or a business registration to start billing clients professionally today.",
  },
  {
    slug: "small-business-invoicing",
    title: "Small Business Invoicing 101: The Complete Guide (2026)",
    excerpt:
      "Invoicing is one of the most important operational habits a small business can build — yet most owners either cobble it together with Word templates or overpay for accounting software they barely use. This guide covers everything a small business owner needs to know: what goes on a professional invoice, which payment terms to use, how to handle late payments without damaging client relationships, when to upgrade to invoicing software, and how to build a billing process that scales as your business grows.",
  },
  {
    slug: "client-wont-pay-invoice",
    title: "What to Do When a Client Won't Pay Your Invoice (Step-by-Step)",
    excerpt:
      "About 29% of freelance invoices go overdue at some point. When a client stops responding or refuses to pay, most freelancers don't know what to do next — and end up either letting it go or damaging the relationship trying to collect. This step-by-step guide covers the full escalation process: from a polite follow-up email (days 1–5 overdue) to a formal demand letter, small claims court, and how to prevent non-payment on future projects. Most unpaid invoices resolve at step one or two when you follow a clear, professional process.",
  },
  {
    slug: "invoice-template-consultants",
    title: "Invoice Template for Consultants: Free & Professional (2026)",
    excerpt:
      "Consulting invoices have unique requirements that generic templates miss: retainer billing, day rates, expense reimbursements, and milestone-based project fees. A poorly itemized consulting invoice can delay payment, trigger disputes over scope, or create confusion for clients running corporate accounts payable processes. This guide covers every field a professional consultant invoice needs, how to structure your line items whether you bill hourly, by the day, or per project, and how to handle expense reimbursements cleanly. Whether you are an independent management consultant, IT consultant, HR advisor, or business coach, these best practices will help you get paid faster.",
  },
  {
    slug: "invoice-template-graphic-designers",
    title: "Invoice Template for Graphic Designers: Free & Professional (2026)",
    excerpt:
      "A graphic designer invoice is different from a generic freelance invoice — and using a template that doesn't account for design-specific line items like concept rounds, revision fees, and usage licensing can create billing confusion and slow down payment. This guide covers exactly what to include on your graphic designer invoice, how to price and itemize design work clearly, how to handle revisions without scope creep, and the fastest way to create a professional invoice your clients will approve the first time.",
  },
  {
    slug: "invoice-template-photographers",
    title: "Invoice Template for Photographers: Free & Professional (2026)",
    excerpt:
      "A photography invoice is not a generic freelance invoice — photographers bill across creative fees, usage licensing, retainers, deliverables, and travel, and a generic template that doesn't surface those line items separately is the single biggest cause of payment disputes and slow client approvals. This guide covers exactly what to include on your photography invoice, how to itemize creative work and licensing cleanly for weddings, portraits, and commercial shoots, and the fastest way to send a professional PDF your clients will pay without a follow-up email.",
  },
  {
    slug: "how-to-invoice-as-a-freelancer",
    title: "How to Invoice as a Freelancer (Complete 2026 Guide)",
    excerpt:
      "Complete 2026 guide to freelance invoicing. Covers when to send the invoice, every field that has to appear, how to choose payment terms (Due on Receipt vs Net 14 vs Net 30 vs 50/50 milestone), how to handle late payments through a clear day-1 / day-7 / day-14 / day-30 escalation, how to calculate and enforce 1.5%/month late fees, how to split larger projects into multiple invoices, and how to keep your books clean enough that taxes are not a nightmare in April. Everything you need to invoice clients and get paid on time, with practical wording and copy-paste templates.",
  },
  {
    slug: "how-to-reference-contract-on-invoice",
    title: "How to Reference a Contract on a Freelance Invoice (and Why It Matters)",
    excerpt:
      "Most late freelance payments are not bad faith — they are AP departments unable to match a vague invoice against an approved scope of work. This guide covers the exact wording (\"Per agreement dated…\", \"Per Statement of Work…\", \"Per Change Order #…\", \"Per PO #…\"), where to place the reference on the invoice, when it is especially important (change orders, retainers, milestone billing, corporate AP), what to do when you do not have a formal contract, and a copy-paste line-item block. A 10-second addition that removes the most common source of payment delays and gives you legal standing if you ever need it.",
  },
  {
    slug: "recurring-invoices-for-freelancers",
    title: "Recurring Invoices for Freelancers: The Complete Guide to Retainer Billing (2026)",
    excerpt:
      "Recurring revenue is the single biggest cash-flow upgrade most freelancers ever make — but the invoicing pattern that worked for one-off projects actively breaks under retainer billing. This guide covers the optimal billing cadence (and why the 1st of the month wins), three retainer models with copy-paste line-item templates (fixed-hours, hours-bank, milestone), how to handle overages without killing the relationship, automatic-renewal mechanics, the retainer-specific failure mode of payment drift, the rate-raise email template that lands a 10–20% raise without a renegotiation (anniversary timing, 60-day notice, value-delivered framing), and the right way to price a retainer (hint: not your hourly rate × reserved hours). Everything you need to run a retainer book that bills itself.",
  },
  {
    slug: "convert-project-client-to-retainer",
    title: "How to Convert a Project Client into a Retainer Client (2026 Playbook)",
    excerpt:
      "The single highest-leverage move in a freelance business is converting a project client you have already delivered for into a monthly retainer — the trust is built, the scope is calibrated, the invoice address is on file. But most freelancers never make the pitch because they miss the one moment when it lands or default to a vague \"let me know if you need anything\" sign-off. This guide covers exactly when to pitch (the offboarding email — not a week later), three copy-paste pitch-email templates matched to project shape (maintenance, content, advisory), the trial-retainer pattern for hesitant clients, how to handle the \"let me think about it\" reply at 7/30/60 days, and the first-invoice mechanics that lock the conversion in. The conversion sequence that makes 3 retainer clients at $2,500/mo realistic from your existing project book.",
  },
  {
    slug: "best-free-invoicing-software-small-business",
    title: "Best Free Invoicing Software for Small Business (2026 Comparison)",
    excerpt:
      "\"Free\" invoicing software is one of the most over-promised categories in small business tools. This 2026 comparison breaks down the three kinds of \"free\" (genuinely free, payment-fee-funded, and trial-disguised), then ranks InvoiceQuick, Wave, Zoho Invoice, PayPal, Square, FreshBooks, and QuickBooks on what each one actually gives away — sign-up friction, hidden costs (watermarks, export limits, data lock-in), and which size of business each one fits. Plus the three questions that decide it without reading 18 more reviews.",
  },
  {
    slug: "deposit-invoice-upfront-payment",
    title: "How to Invoice for a Deposit or Upfront Payment (2026 Guide)",
    excerpt:
      "Asking for money before you start the work is the single most effective protection a freelancer has against non-payment — and the one most beginners are too nervous to use. This guide covers exactly how to invoice for a deposit: how much to ask for (and when 50% is the wrong number), how to word the request without sounding distrustful, how to structure the deposit and balance invoices so the math is transparent, refundable vs non-refundable terms that hold up in a dispute, the tax timing most freelancers miss, and the four deposit mistakes that scare clients off or leave you exposed.",
  },
  {
    slug: "purchase-order-vs-invoice",
    title: "Purchase Order vs Invoice: Differences and How They Work Together (2026)",
    excerpt:
      "If you have ever sent a clean invoice to a corporate client and watched it sit unpaid for six weeks, the cause is almost always the same: there was a purchase order on their end and your invoice did not reference it. This guide breaks down what a PO actually is, how it differs from an invoice, who issues which, the three-way-match flow corporate AP teams use to gate every payment, the one field that gets corporate invoices paid on time, when to ask for a PO upfront, and what to do when there is not one.",
  },
  {
    slug: "credit-note-vs-invoice",
    title: "Credit Note vs Invoice: When to Issue One and How to Write It (2026)",
    excerpt:
      "You sent an invoice — and then realized the amount was wrong, or the scope changed, or the client is owed a refund. The instinct most freelancers reach for (delete the invoice and re-send a corrected one) is the worst possible move. The correct answer is to issue a credit note. This guide covers what a credit note is, the five scenarios where you must use one instead of editing the original, exactly what fields to include, how to number them with a separate CN-prefix sequence, the tax-cycle pitfall most freelancers miss, and a practical credit-note example you can copy.",
  },
  {
    slug: "invoice-template-download",
    title: "Invoice Template Download: Free PDF, Word, Excel & Google Docs (2026)",
    excerpt:
      "Searching for an \"invoice template download\" is the first move most freelancers make — and most options on the web produce invoices that look like 2008. This guide compares the four template formats (PDF, Word, Excel, Google Docs), shows which one wins for which use case, lists the fields a usable invoice template must include, and breaks down the five hidden costs of the template path (the 10-minute-a-month tax, number collisions, math errors, the look-cheap tax, format mismatches). Then it shows when a generator is the better answer.",
  },
  {
    slug: "tax-invoice-vs-commercial-invoice",
    title: "Tax Invoice vs Commercial Invoice: What's the Difference? (2026)",
    excerpt:
      "A tax invoice proves a taxable sale for VAT/GST reporting; a commercial invoice supports a customs declaration when physical goods cross a border. They are different documents for different audiences — but one well-formed PDF can serve both purposes when you are a VAT-registered exporter. This guide covers the required fields for each, when one document can do both jobs, what freelancers selling services across borders actually need (hint: not a commercial invoice), and the reverse-charge note that gets intra-EU invoices through AP without a follow-up email.",
  },
  {
    slug: "quote-vs-invoice",
    title: "Quote vs Invoice vs Estimate: What's the Difference and When to Send Each (2026)",
    excerpt:
      "A client asks for a \"quote,\" you do the work, then you send an invoice — two pieces of paper doing completely different jobs that freelancers routinely conflate. A quote is a fixed price offered before work starts; an estimate is an approximate guess; an invoice is a demand for payment after delivery. This guide covers which one is legally binding, the order you send them in (estimate → quote → invoice), and the one mistake — skipping the quote and going straight to the invoice — that lets a client argue your price down after the work is already done.",
  },
  {
    slug: "how-to-invoice-for-hourly-work",
    title: "How to Invoice for Hourly Work: Tracking, Rounding, and Itemizing Hours (2026)",
    excerpt:
      "Billing by the hour is the model most likely to trigger an awkward client conversation, because they are paying for time they did not watch you spend. A vague \"40 hours — $4,000\" line invites the question you never want: \"40 hours doing what?\" This guide makes the number defensible — tracking time against specific tasks, choosing and disclosing a rounding increment, itemizing each line as hours × rate, handling blended rates and partial hours, and the right move when actual hours blow past your estimate (flag it before the invoice, never in it).",
  },
];

export default function BlogPage() {
  const blogUrl = "https://invoicequick-phi.vercel.app/blog";
  return (
    <div className="min-h-screen">
      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "InvoiceQuick Blog — Invoice Tips & Guides",
            description:
              "Practical guides for freelancers and small business owners on creating professional invoices and getting paid faster.",
            url: blogUrl,
            inLanguage: "en-US",
            publisher: {
              "@type": "Organization",
              name: "InvoiceQuick",
              url: "https://invoicequick-phi.vercel.app",
            },
            blogPost: articles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              url: `https://invoicequick-phi.vercel.app/blog/${a.slug}`,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://invoicequick-phi.vercel.app/blog/${a.slug}`,
              },
              datePublished: publishedAt[a.slug],
              dateModified: publishedAt[a.slug],
            })),
          }),
        }}
      />

      {/* ItemList Schema (helps surface the post list in SERPs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "InvoiceQuick Blog Posts",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            numberOfItems: articles.length,
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://invoicequick-phi.vercel.app/blog/${a.slug}`,
              name: a.title,
              datePublished: publishedAt[a.slug],
            })),
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://invoicequick-phi.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
            ],
          }),
        }}
      />

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
          <p className="mt-4 text-xs text-indigo-200">No sign-up &middot; No credit card &middot; Free forever</p>
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
