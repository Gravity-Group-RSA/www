export default function ContactPage() {
  return (
    <section className="py-20 container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Need help? Drop us a message or call us anytime.
      </p>

      <form className="grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
        />

        <button
          type="submit"
          className="bg-brand-primary text-white px-8 py-4 rounded-lg shadow hover:opacity-90"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10">
        <p>Phone: <a href="tel:+27826300543">+27 82 630 0543</a></p>
        <p>Email: info@gravitygrouprsa.co.za</p>
      </div>
    </section>
  );
}
