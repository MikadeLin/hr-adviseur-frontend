// app/diensten/page.tsx (Server Component)

import { fetchApi } from "@/lib/strapi"; // Importeer je fetchApi helper
import Link from "next/link"; // Voor het navigeren naar de detailpagina's
import Image from "next/image"; // Voor het optimaliseren van afbeeldingen (indien van toepassing)

// Definieer de types voor de data die je verwacht van Strapi
interface Service {
  id: number;
  documentId: string;
  Name: string;
  Slug: string;
  ShortDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Icon?: { // Optioneel, als je een icoon toevoegt in Strapi
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

interface ServicesData {
  data: Service[];
}

// Dit is de hoofdcomponent voor je diensten overzichtspagina
export default async function ServicesOverviewPage() {
  try {
    // Haal alle diensten op uit Strapi. Gebruik populate als je iconen wilt ophalen.
    const servicesData = await fetchApi<ServicesData>("/services?populate=Icon"); // Voeg populate=Icon toe als je iconen hebt

    // Toegang tot de array van diensten
    const services = servicesData?.data || [];

    if (services.length === 0) {
      return (
        <div className="container mx-auto py-8 px-4 text-center">
          <h1 className="text-4xl font-bold mb-10 text-gray-800">Ontdek Onze HR Diensten</h1>
          <p className="text-xl text-gray-600 mb-12">
            Er zijn momenteel geen diensten beschikbaar.
          </p>
        </div>
      );
    }

    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Ontdek Onze HR Diensten</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hier vind je een overzicht van al onze gespecialiseerde HR-adviesdiensten, ontworpen om uw organisatie snel en effectief te ondersteunen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                {/* Optioneel: Render het icoon als het aanwezig is */}
                {service.Icon?.data?.attributes?.url && (
                  <div className="mb-4 text-center">
                    <Image
                      src={service.Icon.data.attributes.url}
                      alt={service.Icon.data.attributes.alternativeText || service.Name}
                      width={64} // Pas de breedte aan naar behoefte
                      height={64} // Pas de hoogte aan naar behoefte
                      className="mx-auto"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{service.Name}</h2>
                <p className="text-gray-700 leading-relaxed text-center">{service.ShortDescription}</p>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                <Link
                  href={`/diensten/${service.Slug}`}
                  className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading services:", error);
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Er is een fout opgetreden
        </h1>
        <p className="text-xl text-gray-700">
          Excuses, er is een probleem opgetreden bij het laden van de diensten.
        </p>
      </div>
    );
  }
}