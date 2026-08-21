import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/constants";
import SmoothScroll from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Jual Beli Mobil Bekas di Bondowoso`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "jual beli mobil bekas",
    "mobil bekas Bondowoso",
    "mobil bekas Prajekan",
    "showroom mobil Bondowoso",
    "mobil bekas murah Bondowoso",
    "Rian Mobil Bondowoso",
    "mobil bekas Jawa Timur",
    "jual mobil bekas",
    "beli mobil bekas",
    "mobil second Bondowoso",
    "mobil bekas berkualitas",
    "kredit mobil bekas",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Jual Beli Mobil Bekas di Bondowoso`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Jual Beli Mobil Bekas di Bondowoso`,
    description: SITE_CONFIG.description,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              telephone: `+${SITE_CONFIG.phoneInternational}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE_CONFIG.location.city,
                addressRegion: SITE_CONFIG.location.province,
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.8833,
                longitude: 113.8167,
              },
              sameAs: [SITE_CONFIG.tiktokUrl],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
