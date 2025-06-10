// src/components/layout/NavDropdown.tsx
"use client"; // Deze regel is essentieel om het een Client Component te maken

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Hetzelfde 'Service' type als in de Header
// Let op: 'Name' en 'Slug' zitten binnen 'attributes'
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
      {/* De knop om de dropdown te openen/sluiten */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-blue-500 flex items-center"
      >
        Diensten
        {/* Pijltje naast de tekst */}
        <svg className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {/* De daadwerkelijke dropdown, wordt getoond als 'isOpen' true is */}
      {isOpen && (
        <ul className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-md z-10 py-1">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/diensten/${service.Slug}`}
                onClick={() => setIsOpen(false)} // Sluit menu na klikken
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {service.Name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}