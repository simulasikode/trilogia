import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer/Index";
import Header from "./_components/Header/Index";

import Analytics from "./_components/Analytics";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Festival - Trilogia",
  description: "festival seni cetak grafis: Trilogia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`antialiased`}>
        <GoogleTagManager gtmId="GT-5TQXPNDD" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
