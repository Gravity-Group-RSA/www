import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gravity Group RSA – Roadside Assistance",
  description:
    "Professional towing, locksmith, fuel delivery, tyre change, and jumpstart services across South Africa.",
  keywords: [
    "gravity group rsa",
    "roadside assistance",
    "towing",
    "locksmith",
    "jumpstart",
    "tyre change",
    "fuel delivery"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
