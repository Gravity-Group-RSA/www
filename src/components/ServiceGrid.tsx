import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export default function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((service) => (
        <Link
          href={`/services/${service.slug}`}
          key={service.id}
          className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition duration-200"
        >
          <img
            src={service.icon}
            alt={service.name}
            className="h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">
            {service.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            {service.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
