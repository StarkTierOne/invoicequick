import { MetadataRoute } from "next";

// Keep in sync with the article keys in src/app/blog/[slug]/page.tsx
const blogSlugs = [
  "how-to-invoice-for-plumbing-services",
  "how-to-invoice-for-electrical-work",
  "how-to-invoice-for-hvac-service",
  "how-to-invoice-for-handyman-services",
  "how-to-invoice-for-auto-repair",
  "how-to-charge-a-rush-fee",
  "how-to-invoice-for-lawn-care-and-landscaping",
  "invoice-when-paid-through-paypal-venmo-zelle",
  "how-to-invoice-for-cleaning-services",
  "home-address-on-invoice",
  "how-to-invoice-as-an-independent-contractor",
  "how-to-invoice-for-expenses-and-reimbursements",
  "how-to-track-freelance-income-and-expenses",
  "freelance-tax-deductions-youre-missing",
  "business-bank-account-for-freelancers",
  "how-to-accept-payment-as-a-freelancer",
  "do-i-get-a-1099-as-a-freelancer",
  "quarterly-estimated-taxes-freelancers",
  "do-you-need-an-llc-to-freelance",
  "sales-tax-on-invoices",
  "progress-invoicing-milestone-billing",
  "ssn-or-ein-on-invoice",
  "what-to-include-on-invoice",
  "get-invoice-approved-by-accounts-payable",
  "common-invoicing-mistakes",
  "net-30-payment-terms",
  "invoice-payment-reminder-email-templates",
  "how-to-create-professional-invoice",
  "free-invoice-template-freelancers",
  "when-to-send-invoice",
  "how-to-calculate-late-fees",
  "invoice-vs-receipt",
  "how-to-write-payment-terms-on-invoice",
  "invoice-number-format-best-practices",
  "how-to-send-invoice-via-email",
  "self-employed-invoice-example",
  "free-invoice-template-for-freelancers",
  "how-to-invoice-clients",
  "how-to-invoice-international-clients",
  "freelance-invoice-tips",
  "invoice-for-services-rendered",
  "invoice-without-a-business",
  "invoice-for-side-hustle",
  "client-wont-pay-invoice",
  "small-business-invoicing",
  "invoice-template-consultants",
  "invoice-template-graphic-designers",
  "invoice-template-photographers",
  "how-to-invoice-as-a-freelancer",
  "how-to-reference-contract-on-invoice",
  "recurring-invoices-for-freelancers",
  "best-free-invoicing-software-small-business",
  "convert-project-client-to-retainer",
  "deposit-invoice-upfront-payment",
  "purchase-order-vs-invoice",
  "credit-note-vs-invoice",
  "invoice-template-download",
  "tax-invoice-vs-commercial-invoice",
  "quote-vs-invoice",
  "how-to-invoice-for-hourly-work",
  "proforma-invoice-vs-invoice",
  "partial-payment-invoice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invoicequick-phi.vercel.app";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/create`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-invoice-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invoice-template`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
