import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InvoiceQuick Pricing — Free Forever, Pro $9/mo, Business $29/mo",
  description:
    "Genuinely free invoicing: unlimited invoices, PDF download, no watermarks, no credit card. Your logo on the PDF is free too. Pro ($9/mo) adds recurring invoices and a client database. Business ($29/mo) adds team access and API.",
  keywords:
    "invoicequick pricing, free invoice generator pricing, free invoice software, free vs paid invoice software, recurring invoice software price, invoice software for freelancers cost, invoicequick free vs pro, when to upgrade invoice software, invoice software 5 clients, invoice software unlimited free",
  alternates: {
    canonical: "https://invoicequick-phi.vercel.app/pricing",
  },
  openGraph: {
    title: "InvoiceQuick Pricing — Free Forever, Pro $9/mo, Business $29/mo",
    description:
      "Free forever for unlimited invoices, logo included. Upgrade only when you need recurring billing or a client database.",
    url: "https://invoicequick-phi.vercel.app/pricing",
    siteName: "InvoiceQuick",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
