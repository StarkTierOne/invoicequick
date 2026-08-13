import { MetadataRoute } from "next";
import { articles } from "@/lib/blog-articles";
import { tradeTemplateSlugs } from "@/lib/invoice-template-trades";

// Derived from the article map rather than hand-listed: this list used to be a
// second copy of the slugs with a "keep in sync" comment on it, and a post added
// to blog-articles.ts but not here would render, get linked, and still never
// reach the sitemap. Importing the single source of truth removes that whole
// class of silent SEO loss.
const blogSlugs = Object.keys(articles);

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

  // Same rule as the blog slugs above: derived from the trade map rather than
  // hand-listed, so publishing a trade cannot leave it out of the sitemap.
  const tradeTemplatePages: MetadataRoute.Sitemap = tradeTemplateSlugs.map((slug) => ({
    url: `${baseUrl}/invoice-template/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tradeTemplatePages, ...blogPages];
}
