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
        className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center"
      >
        Diensten
        <svg 
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 py-3 z-50">
          {/* Subtitel in dropdown */}
          <div className="px-4 py-2 mb-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              ONZE DIENSTEN
            </p>
          </div>
          
          {/* Service links */}
          <ul className="space-y-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/diensten/${service.Slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  {/* Icon voor elke dienst */}
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  
                  {/* Service naam */}
                  <span className="text-sm font-medium">
                    {service.Name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Call-to-action in dropdown */}
          <div className="mt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Direct Hulp Nodig?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}