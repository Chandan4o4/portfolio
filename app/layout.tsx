import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { baseMetadata, siteConfig } from "@/lib/constants";
import { profile } from "@/lib/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  authors: [{ name: profile.name, url: siteConfig.url }],
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white dark:focus:bg-white dark:focus:text-zinc-900"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        {/* JSON-LD structured data — helps Google understand your portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              url: siteConfig.url,
              jobTitle: profile.role,
              description: profile.summary,
              email: profile.email,
              telephone: profile.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karnal",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Chandan4o4",
                "https://www.linkedin.com/in/chandanknl",
                "https://twitter.com/chandanknl",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "React Native",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
