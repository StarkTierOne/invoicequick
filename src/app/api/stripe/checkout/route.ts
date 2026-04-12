import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const PLANS = {
  pro: { name: "Pro", price: 900 },
  business: { name: "Business", price: 2900 },
};

export async function POST(req: Request) {
  try {
    const { plan, userId, email } = await req.json();

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const selectedPlan = PLANS[plan as keyof typeof PLANS];

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      metadata: {
        userId,
        plan,
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `InvoiceQuick ${selectedPlan.name}`,
              description: `${selectedPlan.name} plan - monthly subscription`,
            },
            unit_amount: selectedPlan.price,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/dashboard?upgraded=true`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
