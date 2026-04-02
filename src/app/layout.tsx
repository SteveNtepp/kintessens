import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KINTESSENS — La quintessence de la création contemporaine africaine",
    template: "%s | KINTESSENS",
  },
  description:
    "KINTESSENS est une plateforme artistique et audiovisuelle dédiée à la mise en valeur de la création contemporaine africaine. Musique live, poésie, arts visuels, performance et expériences immersives.",
  keywords: [
    "KINTESSENS",
    "musique africaine",
    "création contemporaine",
    "festival culturel",
    "arts africains",
    "Dakar",
    "live music",
    "poésie",
    "arts visuels",
    "performance",
  ],
  authors: [{ name: "KINTESSENS" }],
  creator: "KINTESSENS",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://kintessens.com",
    siteName: "KINTESSENS",
    title: "KINTESSENS — La quintessence de la création contemporaine africaine",
    description:
      "Plateforme artistique et audiovisuelle dédiée à la création contemporaine africaine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINTESSENS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KINTESSENS",
    description: "La quintessence de la création contemporaine africaine.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
