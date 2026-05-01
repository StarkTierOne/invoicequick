"use client";

import Link from "next/link";

const faqs = [
  {
    question: "Is InvoiceQuick really free?",
    answer: "Yes. InvoiceQuick's free tier is genuinely free — no credit card required, no watermarks, no invoice limits. You can create and download unlimited professional PDF invoices at no cost, forever. We also offer Pro ($9/mo) and Business ($29/mo) plans with advanced features like recurring invoices, client database, and custom branding.",
  },
  {
    question: "Do I need to sign up or create an account?",
    answer: "No. You can create and download invoices without signing up or providing any personal information. Just go to the invoice creator and start filling in your details. Creating a free account unlocks invoice history and saved templates, but it is entirely optional.",
  },
  {
    question: "What format does InvoiceQuick export to?",
    answer: "InvoiceQuick exports your invoice as a clean, professional PDF — the standard format accepted by clients and accountants worldwide. PDFs preserve formatting across all devices, cannot be accidentally edited by your client, and are easy to attach to an email.",
  },
  {
    question: "What currencies does InvoiceQuick support?",
    answer: "InvoiceQuick supports 50+ currencies including USD, EUR, GBP, CAD, AUD, JPY, CHF, and many more. You can select your preferred currency from the invoice creator and it will appear correctly on your PDF.",
  },
  {
    question: "What payment terms should I put on my invoice?",
    answer: "The most common payment terms for freelancers are Net 15 (payment due within 15 days) and Net 30 (payment due within 30 days). For new clients or large projects, consider requiring 50% upfront. You can also add a late fee policy, such as 1.5% per month on overdue balances. InvoiceQuick lets you add custom payment terms to every invoice.",
  },
  {
    question: "Can I add my logo and customize the invoice design?",
    answer: "Yes. Free users can add business name and contact details. Pro users can upload a custom logo, choose accent colors, and apply custom branding to match their business identity. All plans produce clean, professional invoices that make a strong impression on clients.",
  },
  {
    question: "What should I do if a client doesn't pay my invoice?",
    answer: "Start with a polite follow-up email referencing the invoice number and due date — most late payments are oversights, not intentional. If there is no response after 3–5 days, send a firmer reminder that mentions your late fee policy. After two weeks, consider a phone call or direct message. For invoices over $5,000 or those ignored for 30+ days, a formal demand letter is appropriate. If a client refuses to pay, small claims court (typically for amounts under $10,000–$20,000 depending on your state) is a viable option that does not require a lawyer. Always keep all communication in writing.",
  },
  {
    question: "Is an invoice a legally binding document?",
    answer: "An invoice alone is not a contract — it is a payment request. The legally binding part is your underlying agreement with the client, whether that is a signed contract, a written proposal they accepted, or an email confirming the scope and price. However, a detailed invoice is strong evidence of the agreed-upon work and amount owed, and courts routinely accept invoices as proof of debt in small claims cases. For any project over $1,000, always have a signed contract in addition to your invoice.",
  },
];

const features = [
  { icon: "\u26A1", title: "Instant Creation", desc: "Fill in your details and generate a professional invoice in under 60 seconds." },
  { icon: "\uD83D\uDCC4", title: "PDF Download", desc: "Download your invoice as a clean, print-ready PDF. No watermarks on free tier." },
  { icon: "\uD83D\uDD04", title: "Save & Reuse", desc: "Pro users can save templates, client details, and auto-number invoices." },
  { icon: "\uD83D\uDCB0", title: "Track Payments", desc: "Mark invoices as paid, pending, or overdue. Know where your money is." },
  { icon: "\uD83C\uDF0D", title: "Multi-Currency", desc: "Support for USD, EUR, GBP, CAD, AUD, and 50+ currencies worldwide." },
  { icon: "\uD83D\uDD12", title: "No Sign-Up Required", desc: "Start creating invoices immediately. No email, no password, no friction." },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Designer",
    quote: "InvoiceQuick cut my invoicing time from 30 minutes to under 2. I send more invoices now and get paid faster.",
    avatar: "SK",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Web Developer",
    quote: "I used to dread invoicing at the end of each project. Now I generate a professional PDF in seconds and move on to the next gig.",
    avatar: "MT",
    stars: 5,
  },
  {
    name: "Lisa R.",
    role: "Consultant",
    quote: "The free tier is genuinely generous. I upgraded to Pro for recurring invoices and it paid for itself on day one.",
    avatar: "LR",
    stars: 5,
  },
];

const howItWorks = [
  { step: "1", title: "Fill In Details", desc: "Enter your business info, client details, and line items. Our smart form auto-calculates totals and tax." },
  { step: "2", title: "Preview Your Invoice", desc: "See a real-time preview of your professional invoice. Pick a template, adjust colors, add your logo." },
  { step: "3", title: "Download & Send", desc: "Download as a polished PDF or share a payment link. Track when your client views and pays." },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Unlimited invoices", "PDF download", "Multi-currency", "No watermarks", "Basic templates"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    features: ["Everything in Free", "Save & reuse templates", "Auto-numbering", "Payment tracking", "Custom branding/logo", "Client database", "Recurring invoices", "Priority support"],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    features: ["Everything in Pro", "Team access (5 users)", "API access", "Zapier integration", "Custom domain invoices", "Advanced reporting", "Dedicated support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-xl">InvoiceQuick</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 hidden sm:block">Pricing</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden sm:block">How It Works</a>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 hidden sm:block">Blog</Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Sign In</Link>
            <Link href="/signup" className="btn-primary text-sm !py-2 !px-4">Sign Up Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-block bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          100% Free — No Sign-Up Required
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
          Create Professional Invoices<br />
          <span className="text-indigo-600">In Seconds</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          The fastest way to create, download, and send beautiful invoices.
          No sign-up. No credit card. Just invoices that get you paid.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create" className="btn-primary text-lg !px-8 !py-4">
            Create Your First Invoice Free &rarr;
          </Link>
          <a href="#how-it-works" className="btn-secondary text-lg !px-8 !py-4">
            See How It Works &darr;
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> No sign-up required</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> No credit card</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> Free forever</span>
          <span className="flex items-center gap-1"><span className="text-green-500 font-bold">&#10003;</span> Trusted by 10,000+ users</span>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span><strong className="text-gray-700">47 freelancers</strong> are creating invoices right now</span>
        </div>
      </section>

      {/* Social Proof Bar */}
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
            <div className="text-3xl font-extrabold text-gray-900">30 sec</div>
            <div className="text-sm text-gray-500">Avg. Time to Invoice</div>
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

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Three simple steps to a professional invoice. No learning curve.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {howItWorks.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 bg-indigo-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/create" className="btn-primary text-base !px-6 !py-3">
            Try It Now — Free &rarr;
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Everything You Need to Get Paid</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Simple, powerful invoicing tools designed for freelancers, contractors, and small business owners.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Built for People Who Work for Themselves</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">No matter what you do, InvoiceQuick makes billing simple. No accountant required.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎨", title: "Freelance Designers", desc: "Bill for logo design, branding, UI work, and revisions with clean itemized PDFs your clients will trust." },
              { icon: "💻", title: "Web Developers", desc: "Invoice per project, per milestone, or hourly. Track which builds are paid and which need a follow-up." },
              { icon: "📸", title: "Photographers & Videographers", desc: "Send a polished invoice after every shoot, event, or edit — in under a minute, from any device." },
              { icon: "📝", title: "Writers & Editors", desc: "Bill per article, per word, or per hour. Add your byline, link to the published work, and get paid." },
              { icon: "🔧", title: "Contractors & Tradespeople", desc: "Create itemized invoices for labor and materials. Add your license number and payment terms in seconds." },
              { icon: "💼", title: "Consultants & Coaches", desc: "Invoice for sessions, retainers, or project-based work. Look professional from day one, no bookkeeper needed." },
            ].map((item) => (
              <div key={item.title} className="card bg-white hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/create" className="btn-primary text-base !px-6 !py-3">
              Create Your Free Invoice &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">How InvoiceQuick Compares</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">See why thousands of freelancers choose InvoiceQuick over paid alternatives.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-5 py-4 font-semibold rounded-tl-xl">Feature</th>
                <th className="px-5 py-4 font-semibold text-indigo-300">InvoiceQuick</th>
                <th className="px-5 py-4 font-semibold text-gray-300">FreshBooks</th>
                <th className="px-5 py-4 font-semibold text-gray-300">Wave</th>
                <th className="px-5 py-4 font-semibold text-gray-300 rounded-tr-xl">PayPal Invoicing</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "Free forever", "$17–$55/mo", "Free (fees on payments)", "Free + 2.99%/invoice"],
                ["Sign-up required", "No", "Yes", "Yes", "Yes"],
                ["Unlimited invoices", "✓", "✓", "✓", "✓"],
                ["No watermarks", "✓", "✓", "✓", "✓"],
                ["PDF download", "✓", "✓", "✓", "—"],
                ["Multi-currency", "✓ (50+)", "✓", "✓", "Limited"],
                ["Custom branding / logo", "Pro only", "✓", "✓", "—"],
                ["Recurring invoices", "Pro only", "✓", "✓", "—"],
                ["Time tracking", "—", "✓", "—", "—"],
                ["Time to first invoice", "< 60 seconds", "~10 minutes", "~10 minutes", "~5 minutes"],
              ].map(([feature, iq, fb, wave, pp], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 font-medium text-gray-800 border-b border-gray-100">{feature}</td>
                  <td className="px-5 py-3 text-center border-b border-gray-100">
                    <span className={`font-semibold ${iq === "✓" ? "text-green-600" : iq === "—" ? "text-gray-400" : "text-indigo-700"}`}>{iq}</span>
                  </td>
                  <td className="px-5 py-3 text-center text-gray-500 border-b border-gray-100">{fb}</td>
                  <td className="px-5 py-3 text-center text-gray-500 border-b border-gray-100">{wave}</td>
                  <td className="px-5 py-3 text-center text-gray-500 border-b border-gray-100">{pp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">Pricing as of April 2026. Free features verified by ToolsRated.</p>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Loved by Freelancers Everywhere</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">See why thousands of professionals choose InvoiceQuick.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-base leading-none">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 text-center mb-12">Start free. Upgrade when you need more power.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <div key={plan.name} className={`card flex flex-col ${plan.highlighted ? "ring-2 ring-indigo-600 relative" : ""}`}>
              {plan.highlighted && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-md mb-3 text-center">
                    Limited: First 100 Pro users get 50% off
                  </div>
                </>
              )}
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">{"\u2713"}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/create"
                className={plan.highlighted ? "btn-primary text-center" : "btn-secondary text-center"}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Everything you need to know about InvoiceQuick.</p>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="card">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InvoiceQuick",
            url: "https://invoicequick.vercel.app",
            description: "Free invoice generator for freelancers and small businesses. Create professional PDF invoices in seconds. No sign-up required.",
            foundingDate: "2024",
            slogan: "Create Professional Invoices In Seconds",
            sameAs: [
              "https://toolsrated.vercel.app/reviews/best-invoicing-software"
            ],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free invoice generator — unlimited invoices, PDF download, no watermarks, no sign-up required."
            }
          }),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "InvoiceQuick",
            url: "https://invoicequick.vercel.app",
            description: "Free invoice generator for freelancers and small businesses.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://invoicequick.vercel.app/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "InvoiceQuick",
            url: "https://invoicequick.vercel.app",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "InvoiceManagement",
            description: "Free invoice generator for freelancers and small businesses. Create professional PDF invoices in seconds. No sign-up required.",
            featureList: [
              "Unlimited PDF invoice generation",
              "50+ currency support",
              "Custom payment terms",
              "Automatic tax calculation",
              "Client management",
              "Recurring invoices",
              "Custom branding and logo",
              "Invoice payment tracking"
            ],
            offers: [
              {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description: "Unlimited invoices, PDF download, multi-currency, no watermarks, no sign-up required."
              },
              {
                "@type": "Offer",
                name: "Pro",
                price: "9",
                priceCurrency: "USD",
                description: "Recurring invoices, client database, custom branding, auto-numbering, and priority support."
              },
              {
                "@type": "Offer",
                name: "Business",
                price: "29",
                priceCurrency: "USD",
                description: "Everything in Pro plus team access for 5 users, API access, Zapier integration, and advanced reporting."
              }
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "10000",
              bestRating: "5",
              worstRating: "1"
            }
          }),
        }}
      />

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Paid Faster?</h2>
          <p className="text-indigo-100 mb-8 text-lg">Join thousands of freelancers who create professional invoices in seconds.</p>
          <Link href="/create" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-indigo-50 transition-colors inline-block">
            Create Your First Invoice Free &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">IQ</div>
                <span className="text-white font-semibold">InvoiceQuick</span>
              </div>
              <p className="text-sm">The fastest free invoice generator for freelancers and small businesses.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/create" className="hover:text-white transition-colors">Create Invoice</Link></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://toolsrated.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Read Our Blog</a></li>
                <li><a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Get Our Templates</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} InvoiceQuick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
