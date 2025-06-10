// src/components/layout/Header.tsx
import Link from "next/link";
import { fetchApi } from "@/lib/strapi";

// Definieer de types voor de data die je verwacht
interface Service {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
  };
}

interface GlobalData {
  data: {
    attributes: {
      siteName: string;
    };
  };
}

interface ServicesData {
    data: Service[];
}

export async function Header() {
  // Haal de globale site data en de services parallel op
  const [globalData, servicesData] = await Promise.all([
    fetchApi<GlobalData>("/global"),
    fetchApi<ServicesData>("/services")
  ]);

  const { siteName } = globalData.data.attributes;
  const services = servicesData.data;

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {siteName}
        </Link>
        <ul className="flex space-x-4">
          {services.map((service) => (
            <li key={service.id}>
              <Link href={`/diensten/${service.attributes.Slug}`} className="hover:text-blue-500">
                {service.attributes.Name}
              </Link>
            </li>
          ))}
          {/* Voeg hier andere links toe zoals 'Over Ons' of 'Contact' */}
        </ul>
      </nav>
    </header>
  );
}