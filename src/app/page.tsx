import HeroBanner from "@/components/HeroBanner";
import ServiceGrid from "@/components/ServiceGrid";
import services from "@/data/services.json";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function LandingPage() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroBanner />

      {/* Service Highlights */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fast, Reliable Roadside Assistance
          </h2>

          <ServiceGrid items={services} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Gravity Group RSA?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Assistance any time of day or night — breakdowns don’t wait, and neither do we.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Rapid Response</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fast dispatch times ensure help arrives quickly when you need it most.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Skilled Technicians</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fully trained staff offering professional towing, locksmith, and emergency support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Need Emergency Assistance?</h2>
        <p className="text-lg opacity-90 mb-8">
          Our team is ready to help you get back on the road safely.
        </p>

        <a
          href="tel:+27826300543"
          className="bg-white text-blue-900 font-semibold px-10 py-5 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Call Now • +27 82 630 0543
        </a>
      </section>
    </>
  );
}
