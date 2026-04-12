import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-03-25.dahlia",
});

export const PLANS = {
  pro: {
    name: "Pro",
    price: 900, // $9.00 in cents
    features: [
      "Everything in Free",
      "Save & reuse templates",
      "Auto-numbering",
      "Payment tracking",
      "Custom branding/logo",
      "Client database",
      "Recurring invoices",
      "Priority support",
    ],
  },
  business: {
    name: "Business",
    price: 2900, // $29.00 in cents
    features: [
      "Everything in Pro",
      "Team access (5 users)",
      "API access",
      "Zapier integration",
      "Custom domain invoices",
      "Advanced reporting",
      "Dedicated support",
    ],
  },
};
