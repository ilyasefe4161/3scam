import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "3S CAM - Cam İşleme, Doğrama ve İnşaat",
  description: "3S CAM kurumsal web sitesi. Cam işleme, alüminyum ve PVC doğrama, inşaat işleri projelerimiz ve hizmetlerimiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
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
