import HeroBanner from "@/components/HeroBanner";
import ServiceGrid from "@/components/ServiceGrid";
import services from "@/data/services.json";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function LandingPage() {
  return (
    <>
      <WhatsAppButton />

      {/* HERO */}
      <HeroBanner />

      {/* Trust Badges */}
      <section className="py-10 bg-white dark:bg-gray-900/40 border-b">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Trusted by over 10,000+ drivers</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Fully licensed & insured</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">24/7 Nationwide Coverage</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fast, Reliable Roadside Assistance
          </h2>
          <ServiceGrid items={services} />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Gravity Group RSA?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">24/7 Immediate Dispatch</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our team responds within minutes. No delays, no excuses. Day or night, we’re there.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Affordable Transparent Pricing</h3>
            <p className="text-gray-700 dark:text-gray-300">
              No hidden charges — ever. You get clear upfront pricing and honest service.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Skilled Operators & Modern Equipment</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our technicians are trained, vetted, and equipped with professional-grade tools.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map / Service Region */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6">Service Coverage Across South Africa</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
            No matter where you are — highways, metro areas, or rural towns — our towing and roadside teams are ready.
          </p>
          <img
            src="/images/coverage-map.png"
            alt="Service Coverage Map"
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Professional Fleet & Equipment
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="/images/fleet/tow-truck.png" className="rounded mb-4" />
            <h3 className="font-semibold text-xl mb-2">Tow Trucks</h3>
            <p className="text-gray-600 dark:text-gray-300">Flatbeds · Rollbacks · Heavy-duty rigs</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="/images/fleet/tools.png" className="rounded mb-4" />
            <h3 className="font-semibold text-xl mb-2">Locksmith Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">Non-destructive lockout equipment</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="/images/fleet/roadkit.png" className="rounded mb-4" />
            <h3 className="font-semibold text-xl mb-2">Road Kits</h3>
            <p className="text-gray-600 dark:text-gray-300">Tyre jacks · Jump packs · Fuel cans</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow">
              <p className="italic mb-4">“Arrived in under 15 mins! Best towing service I’ve ever used.”</p>
              <p className="font-bold">— Lungelo M.</p>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow">
              <p className="italic mb-4">“Super professional and friendly. They saved my road trip.”</p>
              <p className="font-bold">— Candice R.</p>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow">
              <p className="italic mb-4">“Affordable, fast, and reliable. Highly recommended.”</p>
              <p className="font-bold">— Zunaid P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <details className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <summary className="font-semibold text-lg cursor-pointer">How quickly can you arrive?</summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Our average response time is 15–25 minutes depending on your location.
            </p>
          </details>

          <details className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <summary className="font-semibold text-lg cursor-pointer">Are your prices fixed?</summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Yes — we offer transparent upfront pricing before dispatch.
            </p>
          </details>

          <details className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <summary className="font-semibold text-lg cursor-pointer">Do you operate 24/7?</summary>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Absolutely. Holidays, weekends, late nights — we cover it all.
            </p>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Stuck Right Now?</h2>
        <p className="text-lg opacity-90 mb-8">
          Call us immediately. Our nearest operator will be dispatched right away.
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
