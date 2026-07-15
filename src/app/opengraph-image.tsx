import { ImageResponse } from "next/og";

// Dynamic Open Graph card. Renders the preview image every social/Slack/iMessage
// share of the homepage shows. Previously missing → shared links rendered a blank
// card, suppressing click-through. Self-contained (no external asset).
export const runtime = "edge";
export const alt =
  "InvoiceQuick — Free invoice generator. Create professional PDF invoices in seconds. No sign-up.";
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
            100% Free
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#111827", lineHeight: 1.05 }}>
            Create Professional Invoices
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#4f46e5", lineHeight: 1.05 }}>
            In Seconds
          </div>
          <div style={{ fontSize: 34, color: "#4b5563", marginTop: 8 }}>
            Free invoice generator for freelancers &amp; small businesses. Download a
            clean PDF — no sign-up, no watermark.
          </div>
        </div>

        {/* Trust row — inline SVG icons (next/og's default font lacks ✓/★ glyphs) */}
        <div style={{ display: "flex", alignItems: "center", gap: 36, fontSize: 28, color: "#374151" }}>
          {["No sign-up", "No credit card", "0% payment fees"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#dcfce7" />
                <path d="M7 12.5l3 3 7-7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{label}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.2l1.4-6.8L2.2 9.7l6.9-.7z" />
            </svg>
            <span>4.9/5 rated</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
