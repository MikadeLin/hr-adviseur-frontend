// src/components/layout/NavDropdown.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Service = {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
  };
};

type NavDropdownProps = {
  services: Service[];
};

export default function NavDropdown({ services }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Zorgt ervoor dat het menu sluit als je ergens anders klikt
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-100 hover:text-orange-300 font-medium transition-all duration-300 flex items-center group relative"
      >
        Diensten
        <svg 
          className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
      </button>

      {/* Dropdown menu met prachtige animatie */}
      {isOpen && (
        <div className="absolute top-full mt-3 w-72 bg-slate-800/95 backdrop-blur-md shadow-2xl rounded-2xl border border-white/10 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
          {/* Subtitel in dropdown */}
          <div className="px-4 py-2 border-b border-white/10">
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
              Onze Diensten
            </p>
          </div>
          
          {/* Service links */}
          <ul className="py-1">
            {services.map((service, index) => (
              <li key={service.id}>
                <Link
                  href={`/diensten/${service.Slug}`}
                  onClick={() => setIsOpen(false)}
                  className="group block px-4 py-3 text-blue-100 hover:text-orange-300 hover:bg-white/10 transition-all duration-200 relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center">
                    {/* Icon voor elke dienst */}
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-lg flex items-center justify-center mr-3 group-hover:from-orange-400/30 group-hover:to-yellow-400/30 transition-all duration-200">
                      <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-sm"></div>
                    </div>
                    
                    {/* Service naam */}
                    <span className="font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      {service.Name}
                    </span>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top rounded-r"></div>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Call-to-action in dropdown */}
          <div className="border-t border-white/10 mt-2 pt-3 px-4 pb-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              ⚡ Direct Hulp Nodig?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}