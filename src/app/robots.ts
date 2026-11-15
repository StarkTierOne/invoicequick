import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://invoicequick-phi.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/dashboard", "/settings", "/invoices/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
