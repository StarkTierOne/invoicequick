import { ImageResponse } from "next/og";

// Route-specific Open Graph card for /pricing. The page itself is a client
// component so it can't export metadata, but an opengraph-image route module
// works independently — which is the only way this page gets a card of its own
// instead of falling back to the generic homepage one. The card leads with the
// $0 tier because "free forever, no credit card" is the actual conversion hook.
export const runtime = "edge";
export const alt =
  "InvoiceQuick pricing — Free forever ($0), Pro ($9/mo), Business ($29/mo). No credit card required.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tiers = [
  { name: "Free", price: "$0", period: "forever", hook: "Unlimited invoices", highlighted: false },
  { name: "Pro", price: "$9", period: "/month", hook: "Templates & tracking", highlighted: true },
  { name: "Business", price: "$29", period: "/month", hook: "Team, API & reporting", highlighted: false },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 55%, #fef3c7 100%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            IQ
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, color: "#111827" }}>InvoiceQuick</div>
          <div
            style={{
              marginLeft: "auto",
              background: "#ecfdf5",
              color: "#047857",
              fontSize: 22,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid #a7f3d0",
            }}
          >
            No credit card
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#111827", lineHeight: 1.05 }}>
            Simple, honest pricing
          </div>
          <div style={{ fontSize: 30, color: "#4b5563" }}>
            The free plan is genuinely free — unlimited invoices, no watermark, no
            trial timer. Upgrade only when manual work starts costing you more.
          </div>
        </div>

        {/* Tier row */}
        <div style={{ display: "flex", gap: 24 }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: "26px 28px",
                borderRadius: 20,
                background: tier.highlighted ? "#4f46e5" : "#ffffff",
                border: tier.highlighted ? "3px solid #4f46e5" : "3px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: tier.highlighted ? "#c7d2fe" : "#6b7280",
                }}
              >
                {tier.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 800,
                    color: tier.highlighted ? "#ffffff" : "#111827",
                  }}
                >
                  {tier.price}
                </div>
                <div
                  style={{
                    fontSize: 24,
                    color: tier.highlighted ? "#c7d2fe" : "#6b7280",
                  }}
                >
                  {tier.period}
                </div>
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: tier.highlighted ? "#e0e7ff" : "#4b5563",
                }}
              >
                {tier.hook}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
