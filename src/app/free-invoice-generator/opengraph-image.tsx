import { ImageResponse } from "next/og";

// Route-specific Open Graph card for /free-invoice-generator. Without this the
// page fell back to the generic homepage card, so every share of the highest-
// intent landing page previewed as something other than the offer it lands on.
// Self-contained (no external asset), matching the homepage card's brand system.
export const runtime = "edge";
export const alt =
  "Free Invoice Generator — create a professional PDF invoice in under 60 seconds. No sign-up, no watermark.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            IQ
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: "#111827" }}>InvoiceQuick</div>
          <div
            style={{
              marginLeft: "auto",
              background: "#ecfdf5",
              color: "#047857",
              fontSize: 24,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid #a7f3d0",
            }}
          >
            No sign-up
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 80, fontWeight: 800, color: "#111827", lineHeight: 1.05 }}>
            Free Invoice
          </div>
          <div style={{ fontSize: 80, fontWeight: 800, color: "#4f46e5", lineHeight: 1.05 }}>
            Generator
          </div>
          <div style={{ fontSize: 34, color: "#4b5563", marginTop: 8 }}>
            Add your details, add your line items, download a polished PDF — in
            under 60 seconds, without creating an account.
          </div>
        </div>

        {/* Trust row — inline SVG icons (next/og's default font lacks ✓ glyphs) */}
        <div style={{ display: "flex", alignItems: "center", gap: 36, fontSize: 28, color: "#374151" }}>
          {["Unlimited invoices", "No watermark", "50+ currencies", "Auto tax math"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#dcfce7" />
                <path
                  d="M7 12.5l3 3 7-7"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
