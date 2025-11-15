export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-3">
          © {new Date().getFullYear()} Gravity Group RSA. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Roadside assistance • Towing • Locksmith • Tyre Change • Fuel Delivery
        </p>
      </div>
    </footer>
  );
}
