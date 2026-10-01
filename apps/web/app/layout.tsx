import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/shared/footer";
import { FormatToggle } from "@/components/shared/format-toggle";
import { Header } from "@/components/shared/header";
import { cn } from "@/lib/cn";
import { providers } from "@/lib/data";
import { geistMono, geistSans } from "@/styles/font";
import "@/styles/globals.css";
import { Provider } from "./provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s — Autorply AI Hub",
    default: "Autorply AI Hub — AI Models Catalog",
  },
  description:
    "Browse, compare, and search 4000+ AI models across 30+ providers. Specs, pricing, capabilities, and a free API.",
  keywords: [
    "AI models",
    "LLM",
    "model comparison",
    "OpenAI",
    "Anthropic",
    "Google",
    "GPT",
    "Claude",
    "Gemini",
    "pricing",
  ],
  icons: { icon: "/autorply-logo.png", apple: "/apple-icon.png" },
  metadataBase: new URL("https://hub.autorply.sa"),
  openGraph: {
    type: "website",
    siteName: "Autorply AI Hub",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@autorply",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/changes/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const commandPaletteData = {
    providers: providers.map((p) => ({
      type: "provider" as const,
      id: `prov-${p.id}`,
      name: p.name,
      href: `/${p.id}`,
      sub: `${p.models.length} models`,
      icon: p.icon,
    })),
  };

  return (
    <html
      lang="en"
      className={cn(geistSans.className, geistMono.variable)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="bg-background text-foreground min-h-screen text-sm">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Autorply AI Hub",
              url: "https://hub.autorply.sa",
              description:
                "Open catalog of AI model data — specs, pricing, and capabilities across 30+ providers and 4000+ models.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://hub.autorply.sa/models?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Provider>
          <Header commandPaletteData={commandPaletteData} />
          <div className="via-border h-px bg-gradient-to-r from-transparent to-transparent" />
          <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col px-4 sm:px-6">
            <div className="flex-1 py-10">{children}</div>
            <Footer />
          </div>
          <FormatToggle />
        </Provider>
      </body>
    </html>
  );
}
