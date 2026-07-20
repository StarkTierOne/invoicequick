import { ImageResponse } from "next/og";
import { articleOgTitles } from "@/lib/blog-articles";

// Per-post Open Graph card. Every blog post previously fell through to the
// root homepage card, so all 60+ guides shared one generic "Create Professional
// Invoices" image — a share of the painting guide looked identical to a share
// of the 1099 guide, wasting the headline that earns the click. This renders the
// post's own title instead.
//
// Node runtime (not edge): these are generated at build time, and the title map
// is imported from the route module, which is heavier than an edge bundle wants.
export const alt = "InvoiceQuick — free invoice generator and invoicing guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(articleOgTitles).map((slug) => ({ slug }));
}

// Long headlines must stay inside the card's two-to-three line budget, so the
// type scale steps down as the title grows instead of overflowing.
function titleFontSize(title: string): number {
  if (title.length > 68) return 52;
  if (title.length > 48) return 60;
  return 70;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = articleOgTitles[slug] ?? "Invoicing Guides for Freelancers & Trades";

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
          padding: "68px 76px",
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
          <div style={{ fontSize: 36, fontWeight: 800, color: "#111827" }}>InvoiceQuick</div>
          <div
            style={{
              marginLeft: "auto",
              background: "#eef2ff",
              color: "#4338ca",
              fontSize: 22,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid #c7d2fe",
            }}
          >
            Invoicing Guide
          </div>
        </div>

        {/* Post headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 88,
              height: 7,
              borderRadius: 999,
              background: "#4f46e5",
            }}
          />
          <div
            style={{
              fontSize: titleFontSize(title),
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.12,
            }}
          >
            {title}
          </div>
        </div>

        {/* Trust row — inline SVG icons (next/og's default font lacks ✓ glyphs) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontSize: 26,
            color: "#374151",
          }}
        >
          {["Free invoice generator", "No sign-up", "No watermark"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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
