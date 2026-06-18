import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "3S Cam İnş. San. ve Tic. Ltd. Şti | Kocaeli, İzmit Cam, İnşaat ve Doğrama",
    template: "%s | 3S Cam"
  },
  description: "Kocaeli, İzmit ve Kartepe bölgesinde premium cam işleme, alüminyum doğrama, pvc doğrama ve inşaat projeleri için 3S Cam.",
  keywords: ["cam", "inşaat", "doğrama", "Kocaeli camcı", "İzmit doğrama", "Kartepe cam", "cam işleme", "alüminyum doğrama", "pvc doğrama"],
  openGraph: {
    title: "3S Cam İnş. San. ve Tic. Ltd. Şti | Kocaeli Cam, İnşaat ve Doğrama",
    description: "Kocaeli bölgesinde premium cam işleme, doğrama ve inşaat hizmetleri.",
    url: "https://www.3scam.com.tr",
    siteName: "3S Cam",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "3S Cam İnş. San. ve Tic. Ltd. Şti",
    "image": "https://www.3scam.com.tr/logo.jpeg",
    "url": "https://www.3scam.com.tr",
    "telephone": "+902623252217",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rahmiye Mahallesi, İzmit Cad. No: 14",
      "addressLocality": "Kartepe",
      "addressRegion": "Kocaeli",
      "postalCode": "41180",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7381, 
      "longitude": 30.0165
    },
    "sameAs": [
      "https://www.instagram.com/3s_cam/"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    }
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 350px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
