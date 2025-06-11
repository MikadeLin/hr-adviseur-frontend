// src/components/layout/Header.tsx
import Link from "next/link";
import { fetchApi } from "@/lib/strapi";
import NavDropdown from "./NavDropdown";

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
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 shadow-2xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent hover:from-orange-500 hover:to-yellow-500 transition-all duration-300"
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
                className="text-blue-100 hover:text-orange-300 font-medium transition-colors duration-300 relative group"
              >
                Over ons
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            
            <li>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Direct Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-blue-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}