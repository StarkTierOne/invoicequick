"use client";

import Link from "next/link";

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
  },
  {
    name: "Marcus T.",
    role: "Web Developer",
    quote: "I used to dread invoicing at the end of each project. Now I generate a professional PDF in seconds and move on to the next gig.",
    avatar: "MT",
  },
  {
    name: "Lisa R.",
    role: "Consultant",
    quote: "The free tier is genuinely generous. I upgraded to Pro for recurring invoices and it paid for itself on day one.",
    avatar: "LR",
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
        <p className="mt-6 text-sm text-gray-500">Trusted by 10,000+ freelancers and small businesses</p>
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
