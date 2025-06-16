import Link from 'next/link';
import Image from 'next/image';
import { fetchApi } from '@/lib/strapi';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

// Definitie voor de structuur van een media-object in Strapi
interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
    };
  };
}

// Uitgebreide interface voor een service, inclusief het icoon
interface Service {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
    ShortDescription: string;
    Icon: StrapiMedia;
    LongDescription?: BlocksContent; // Optioneel voor nu
  };
}

// Interface voor de props van het component
interface ServicesOverviewProps {
  title: string;
  introText: string;
}

// Een standaard fallback-icoon
const DefaultIcon = () => (
  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
  </svg>
);

export async function ServicesOverview({ title, introText }: ServicesOverviewProps) {
  // Data ophalen voor de services, eerst alleen Icon
  const servicesData = await fetchApi<{ data: Service[] }>('/services', { 
    populate: 'Icon'
  });
  const services = servicesData.data;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sectie Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 rounded-full">
            <span className="text-sm font-medium text-blue-700 tracking-wide">
              Onze Diensten
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {introText}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service) => {
            const iconUrl = service.Icon?.data?.url;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="flex-grow">
                  {/* Dynamisch Service Icoon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    {iconUrl ? (
                      <Image
                        src={iconUrl}
                        alt={service.Icon.data.alternativeText || `Icoon voor ${service.Name}`}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    ) : (
                      <DefaultIcon />
                    )}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                      {service.Name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.ShortDescription}
                    </p>

                    {/* Rich Text (LongDescription) renderen */}
                    {service.LongDescription && (
                      <div className="text-sm text-gray-600 prose prose-sm max-w-none prose-li:my-1 prose-ul:pl-2">
                         <BlocksRenderer content={service.LongDescription} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/diensten/${service.Slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
                  >
                    <span>Meer Informatie</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Geen Perfect Passende Dienst Gevonden?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Geen probleem! We denken graag mee aan een maatoplossing voor jouw specifieke HR-uitdaging.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
          >
            Bespreek Jouw Situatie
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}