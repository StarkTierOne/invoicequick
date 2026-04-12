"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useAuth } from "@/lib/useAuth";
import AppShell from "@/components/AppShell";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Unlimited invoices", "PDF download", "Multi-currency", "No watermarks", "Basic templates"],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    period: "/month",
    features: ["Everything in Free", "Save & reuse templates", "Auto-numbering", "Payment tracking", "Custom branding/logo", "Client database", "Recurring invoices", "Priority support"],
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$29",
    period: "/month",
    features: ["Everything in Pro", "Team access (5 users)", "API access", "Zapier integration", "Custom domain invoices", "Advanced reporting", "Dedicated support"],
    highlighted: false,
  },
];

export default function PricingPage() {
  const { user } = useAuth(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleUpgrade(planId: string) {
    if (!user) {
      window.location.href = "/signup";
      return;
    }
    if (planId === "free") return;

    setLoadingPlan(planId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, userId: user.id, email: user.email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoadingPlan(null);
  }

  const content = (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold mb-2">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Start free. Upgrade when you need more power.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`card flex flex-col ${plan.highlighted ? "ring-2 ring-indigo-600 relative" : ""}`}>
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
            <button
              onClick={() => handleUpgrade(plan.id)}
              disabled={loadingPlan === plan.id}
              className={`w-full text-center py-3 rounded-lg font-semibold transition ${
                plan.highlighted
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : plan.id === "free"
                  ? "bg-gray-100 text-gray-600 cursor-default"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
              } disabled:opacity-50`}
            >
              {loadingPlan === plan.id ? "Loading..." : plan.id === "free" ? "Current Plan" : `Upgrade to ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  if (user) {
    return <AppShell user={user}>{content}</AppShell>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IQ</div>
            <span className="font-bold text-xl">InvoiceQuick</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2">Sign In</Link>
            <Link href="/signup" className="btn-primary text-sm !py-2">Sign Up Free</Link>
          </div>
        </div>
      </nav>
      {content}
    </div>
  );
}
