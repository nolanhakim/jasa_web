import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "./lib/site";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const body = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.brand} — Jasa pembuatan website untuk bisnis`,
  description: site.description,
  keywords: [
    "jasa pembuatan website",
    "buat website umkm",
    "jasa website klinik",
    "toko online",
    "nextcloudnul",
  ],
  authors: [{ name: site.brand }],
  openGraph: {
    title: `${site.brand} — Jasa pembuatan website untuk bisnis`,
    description: site.description,
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  description: site.description,
  telephone: `+${site.whatsapp}`,
  address: { "@type": "PostalAddress", addressCountry: "ID" },
  priceRange: "Rp 1.500.000 - Rp 5.000.000+",
  openingHours: "Mo-Sa 09:00-20:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
