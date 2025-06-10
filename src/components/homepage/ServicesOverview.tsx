import Link from 'next/link';

interface Service {
  id: number;
  Name: string;
  Slug: string;
  ShortDescription: string;
}

interface ServicesOverviewProps {
  title: string;
  introText: string;
  services: Service[];
}

// LET OP: Het woord 'export' is hier essentieel.
export function ServicesOverview({ title, introText, services }: ServicesOverviewProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{introText}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              href={`/diensten/${service.Slug}`}
              key={service.id} 
              className="block p-8 border rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{service.Name}</h3>
              <p className="text-gray-600">{service.ShortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}