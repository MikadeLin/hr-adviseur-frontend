// src/components/layout/Header.tsx
import Link from "next/link";
import { fetchApi } from "@/lib/strapi";
import NavDropdown from "./NavDropdown";

// Updated Service interface - no attributes wrapper (matching your actual API)
interface Service {
  id: number;
  documentId: string;
  Name: string;
  Slug: string;
  ShortDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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
    <header className="w-full bg-gray-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200"
          >
            {siteName}
          </Link>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <li>
              <NavDropdown services={services} />
            </li>
            
            {/* Andere navigatie links */}
            <li>
              <Link 
                href="/over-ons" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Over ons
              </Link>
            </li>
            
            <li>
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
              >
                Direct Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}