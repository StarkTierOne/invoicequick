import { MetadataRoute } from "next";

// Keep in sync with the article keys in src/app/blog/[slug]/page.tsx
const blogSlugs = [
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
