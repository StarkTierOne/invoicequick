"use client";

import Link from "next/link";

const features = [
  { icon: "⚡", title: "Instant Creation", desc: "Fill in your details and generate a professional invoice in under 60 seconds." },
  { icon: "📄", title: "PDF Download", desc: "Download your invoice as a clean, print-ready PDF. No watermarks on free tier." },
  { icon: "🔄", title: "Save & Reuse", desc: "Pro users can save templates, client details, and auto-number invoices." },
  { icon: "💰", title: "Track Payments", desc: "Mark invoices as paid, pending, or overdue. Know where your money is." },
  { icon: "🌍", title: "Multi-Currency", desc: "Support for USD, EUR, GBP, CAD, AUD, and 50+ currencies worldwide." },
  { icon: "🔒", title: "No Sign-Up Required", desc: "Start creating invoices immediately. No email, no password, no friction." },
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
            Create Your First Invoice →
          </Link>
          <a href="#features" className="btn-secondary text-lg !px-8 !py-4">
            See How It Works
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">Trusted by 10,000+ freelancers and small businesses</p>
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

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 text-center mb-12">Start free. Upgrade when you need more power.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <div key={plan.name} className={`card flex flex-col ${plan.highlighted ? "ring-2 ring-indigo-600 relative" : ""}`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
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
            Create Free Invoice →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">IQ</div>
              <span className="text-white font-semibold">InvoiceQuick</span>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} InvoiceQuick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
