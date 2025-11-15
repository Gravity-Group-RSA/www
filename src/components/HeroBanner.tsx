export default function HeroBanner() {
  return (
    <section className="bg-hero-gradient text-white py-32 text-center animate-fade">
      <h1 className="text-5xl font-bold mb-4">
        Roadside Assistance You Can Trust
      </h1>
      <p className="text-lg max-w-2xl mx-auto">
        Fast, reliable, and professional roadside support across South Africa.
        From towing to locksmithing — we’re here when you need us.
      </p>

      <a
        href="tel:+27826300543"
        className="mt-8 inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-200"
      >
        Call Now: +27 82 630 0543
      </a>
    </section>
  );
}
