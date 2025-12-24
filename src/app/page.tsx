import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative bg-hero-gradient text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            24/7 Roadside Assistance<br />Across South Africa
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Fast, reliable towing, locksmith, tyre change, battery jumpstart,
            fuel delivery & courier services — whenever you need help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27826300543"
              className="bg-brand-secondary text-black font-semibold px-8 py-4 rounded-lg shadow hover:scale-105 transition"
            >
              Call Now: +27 82 630 0543
            </a>

            <a
              href="https://wa.me/27826300543"
              target="_blank"
              className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-lg shadow hover:scale-105 transition"
            >
              WhatsApp Assistance
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="page-section container mx-auto container-padding">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Emergency Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Towing",
            "Vehicle Locksmith",
            "Tyre Change",
            "Battery Jumpstart",
            "Fuel Delivery",
            "Courier Services",
          ].map((service) => (
            <div
              key={service}
              className="rounded-xl p-8 bg-gray-50 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Rapid-response, professional service delivered by experienced
                roadside technicians.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto container-padding grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-brand-primary">24/7</p>
            <p className="text-gray-600">Always Available</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-primary">Nationwide</p>
            <p className="text-gray-600">South Africa Coverage</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-primary">Fast</p>
            <p className="text-gray-600">Emergency Response</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stranded? We’ve Got You.
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-600">
          One call connects you to immediate roadside help — no delays, no stress.
        </p>

        <a
          href="tel:+27826300543"
          className="inline-block bg-brand-primary text-white px-10 py-4 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          Get Help Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-gray-300 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Gravity Group RSA</p>
        <p>24/7 Roadside Assistance · South Africa</p>
      </footer>
    </main>
  );
}
