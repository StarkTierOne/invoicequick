import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvoiceQuick — Free Invoice Generator | Create Professional Invoices in Seconds",
  description: "Create beautiful, professional invoices in seconds. Free invoice generator for freelancers, small businesses, and contractors. No sign-up required. Download as PDF instantly. Supports multi-currency, custom branding, and recurring invoices.",
  keywords: "invoice generator, free invoice, invoice maker, invoice template, create invoice, professional invoice, PDF invoice, freelance invoice, online invoice generator, small business invoice, invoice creator, billing software, receipt maker, estimate generator, freelancer tools, contractor invoice, self-employed invoice, invoice app, send invoice online, free invoice template",
  openGraph: {
    title: "InvoiceQuick — Free Invoice Generator",
    description: "Create professional invoices in seconds. Free forever. No sign-up required. Trusted by 10,000+ freelancers.",
    type: "website",
    siteName: "InvoiceQuick",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceQuick — Free Invoice Generator",
    description: "Create professional invoices in seconds. Free forever. No sign-up required.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://invoicequick.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
