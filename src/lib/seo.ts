import type { Metadata } from "next";

export function baseMetadata(): Metadata {
  return {
    title: "Gravity Group RSA — 24/7 Roadside Assistance",
    description:
      "Gravity Group RSA provides fast and reliable towing, locksmith, fuel delivery, battery jumpstart, tyre change and roadside assistance across South Africa.",
    keywords: [
      "towing south africa",
      "locksmith services",
      "roadside assistance",
      "battery jumpstart",
      "flat tyre help",
      "fuel delivery",
      "tow truck",
      "emergency towing"
    ],
    openGraph: {
      title: "Gravity Group RSA — 24/7 Roadside Assistance",
      description:
        "Fast and professional roadside assistance anywhere in South Africa.",
      url: "https://gravitygrouprsa.co.za",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Gravity Group RSA"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Gravity Group RSA",
      description: "24/7 towing & roadside assistance",
      images: ["/og-image.png"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
