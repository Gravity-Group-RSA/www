import services from "@/data/services.json";
import { notFound } from "next/navigation";

interface ServiceParams {
  params: { service: string };
}

export default function ServicePage({ params }: ServiceParams) {
  const service = services.find((s) => s.slug === params.service);

  if (!service) return notFound();

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={service.icon}
          alt={service.name}
          className="h-28 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {service.description}
        </p>

        <a
          href="tel:+27826300543"
          className="inline-block bg-brand-primary text-white px-8 py-4 rounded-lg shadow-md hover:opacity-90"
        >
          Call Now: +27 82 630 0543
        </a>
      </div>
    </section>
  );
}
