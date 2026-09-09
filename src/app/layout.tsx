import type { Metadata } from "next";
import { inter, plusJakartaSans } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mdbackoffice.in"),
  title: {
    default: "MD backoffice | Chartered Accountants & Financial Advisory",
    template: "%s | MD backoffice CA",
  },
  description:
    "MD Backoffice is an Indore-based Chartered Accountancy firm serving clients across Madhya Pradesh offering ITR filing, GST compliance, company incorporation, audit, bookkeeping, and NRI tax services.",
  keywords: [
    "chartered accountant indore",
    "CA firm madhya pradesh",
    "CA firm india",
    "ITR filing indore",
    "GST registration indore",
    "company incorporation",
    "NRI taxation",
    "tax advisory",
    "audit services",
    "MD backoffice",
  ],
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MD backoffice",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
