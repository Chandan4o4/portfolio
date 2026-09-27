import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";

/**
 * Centralized site config. Used by the root layout's metadata, the
 * navbar/footer, and the structured-data JSON-LD block.
 */
export const siteConfig = {
  name: profile.name,
  shortName: "Chandan Kumar",
  role: profile.role,
  description: profile.summary,
  tagline: profile.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chandanknl.vercel.app",
  ogImage: "/og.png",
  locale: "en-IN",
  themeColor: "#0a0a0f",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "Chandan Kumar",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Karnal",
    "India",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    creator: "@chandanknl",
  },
  robots: {
    index: true,
    follow: true,
  },
};
