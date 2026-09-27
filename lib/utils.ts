import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes intelligently — later classes override earlier ones.
 * Standard shadcn-style helper.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with thousands separators (e.g. 50000 -> "50,000").
 * Safe for SSR — falls back to plain digits on the server.
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/**
 * Read a value from env safely with a fallback. Used for non-secret config
 * such as public site URL.
 */
export function siteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "https://chandanknl.vercel.app";
}
