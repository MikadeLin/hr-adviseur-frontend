// src/components/layout/Header.tsx
import Link from "next/link";
import { fetchApi } from "@/lib/strapi";
import NavDropdown from "./NavDropdown"; // Importeer het nieuwe component

// Definieer de types, let op de 'attributes' nesting
interface Service {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
  };
}

interface GlobalData {
  data: {
    siteName: string;
  };
}

interface ServicesData {
  data: Service[];
}

export async function Header() {
  // Data ophalen blijft hetzelfde
  const [globalData, servicesData] = await Promise.all([
    fetchApi<GlobalData>("/global"),
    fetchApi<ServicesData>("/services"),
  ]);

  const { siteName } = globalData.data;
  const services = servicesData.data;

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {siteName}
        </Link>
        {/* Pas de navigatielijst aan */}
        <ul className="flex items-center space-x-6">
          {/* Plaats hier de nieuwe dropdown component */}
          <li>
            <NavDropdown services={services} />
          </li>
          {/* Voeg hier andere statische links toe */}
          <li>
            <Link href="/over-ons" className="hover:text-blue-500">Over ons</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}