import HeroBanner from "@/components/HeroBanner";
import ServiceGrid from "@/components/ServiceGrid";
import services from "@/data/services.json";

export default function Home() {
  return (
    <div>
      <HeroBanner />

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Services
        </h2>
        <ServiceGrid items={services} />
      </section>
    </div>
  );
}
