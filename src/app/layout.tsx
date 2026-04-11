import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvoiceQuick — Free Invoice Generator | Create Professional Invoices in Seconds",
  description: "Create beautiful, professional invoices in seconds. Free forever. No sign-up required. Download as PDF instantly. Perfect for freelancers, small businesses, and contractors.",
  keywords: "invoice generator, free invoice, invoice maker, invoice template, create invoice, professional invoice, PDF invoice, freelance invoice",
  openGraph: {
    title: "InvoiceQuick — Free Invoice Generator",
    description: "Create professional invoices in seconds. Free forever. No sign-up required.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
