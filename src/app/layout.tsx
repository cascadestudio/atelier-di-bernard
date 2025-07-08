import type { Metadata } from "next";
import {
  haettenschweiler,
  helveticaNeueBdCn,
  helveticaNeueThCn,
} from "./fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "L'Atelier di Bernard - Atelier partagé",
    template: "%s | L'Atelier di Bernard",
  },
  description:
    "L'Atelier di Bernard est un espace collectif de création à Marseille.",
  keywords: [
    "atelier artistique",
    "création partagée",
    "Marseille",
    "art",
    "exposition",
    "vernissage",
    "atelier participatif",
    "espace culturel",
    "résidence artistique",
  ],
  authors: [{ name: "L'Atelier di Bernard" }],
  creator: "L'Atelier di Bernard",
  publisher: "L'Atelier di Bernard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph metadata for Facebook, LinkedIn, etc.
  openGraph: {
    title: "L'Atelier di Bernard - Atelier partagé",
    description:
      "L'Atelier di Bernard est un espace collectif de création à Marseille.",
    url: "https://www.atelierdibernard.fr",
    siteName: "L'Atelier di Bernard",
    images: [
      {
        url: "https://www.atelierdibernard.fr/images/hero-image-1.jpg",
        width: 1200,
        height: 630,
        alt: "L'Atelier di Bernard - Atelier partagé",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier di Bernard - Atelier partagé",
    description:
      "L'Atelier di Bernard est un espace collectif de création à Marseille.",
    images: ["https://www.atelierdibernard.fr/images/hero-image-1.jpg"],
  },

  // Additional metadata
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

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Verification (add these when you have them)
  verification: {
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Category for app stores
  category: "arts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ArtGallery",
              name: "L'Atelier di Bernard",
              description: "Atelier partagé à Marseille",
              address: {
                "@type": "PostalAddress",
                streetAddress: "97 rue Jean de Bernardy",
                addressLocality: "Marseille",
                postalCode: "13001",
                addressCountry: "FR",
              },
              url: "https://www.atelierdibernard.fr",
              image: "https://www.atelierdibernard.fr/images/hero-image-1.jpg",
              sameAs: [
                "https://www.instagram.com/atelierdibernard",
                "https://www.facebook.com/atelierdibernard",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${haettenschweiler.variable} ${helveticaNeueBdCn.variable} ${helveticaNeueThCn.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
