import { Metadata } from "next";
import services from "@/data/services.json";

export function serviceMetadata(slug: string): Metadata {
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} – Gravity Group RSA`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      images: [service.icon]
    }
  };
}
