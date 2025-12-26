import ServiceGrid from "@/components/ServiceGrid";
import services from "@/data/services.json";

export default function ServicesPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <ServiceGrid items={services} />
    </section>
  );
}
