import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InvoiceQuick Pricing — Free Forever, Pro $9/mo, Business $29/mo",
  description:
    "Genuinely free invoicing: unlimited invoices, PDF download, no watermarks, no credit card. Pro ($9/mo) adds recurring invoices, client database, and custom branding. Business ($29/mo) adds team access and API.",
  keywords:
    "invoicequick pricing, free invoice generator pricing, free invoice software, free vs paid invoice software, recurring invoice software price, invoice software for freelancers cost, invoicequick free vs pro, when to upgrade invoice software, invoice software 5 clients, invoice software unlimited free",
  alternates: {
    canonical: "https://invoicequick-phi.vercel.app/pricing",
  },
  openGraph: {
    title: "InvoiceQuick Pricing — Free Forever, Pro $9/mo, Business $29/mo",
    description:
      "Free forever for unlimited invoices. Upgrade only when you need recurring billing, client database, or custom branding.",
    url: "https://invoicequick-phi.vercel.app/pricing",
    siteName: "InvoiceQuick",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
