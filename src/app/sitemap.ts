import type { MetadataRoute } from "next";
import { news } from "@/data/content";
import { siteConfig } from "@/data/site";

const staticRoutes = ["", "/about", "/membership", "/education", "/events", "/publications", "/news", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...news.map((post) => ({
      url: `${siteConfig.url}/news/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
