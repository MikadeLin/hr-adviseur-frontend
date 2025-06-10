import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Interface voor een Strapi media object (afbeelding)
interface StrapiMedia {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

// De bijgewerkte Usp interface
interface Usp {
  id: number;
  Title: string;
  Description: any; // Rich Text is een array van objecten
  Icon: StrapiMedia; // Icon is een media object
}

interface UspSectionProps {
  title: string;
  usps: Usp[];
}

export function UspSection({ title, usps }: UspSectionProps) {
  // Als er geen usps zijn, toon de sectie niet
  if (!usps || usps.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {usps.map((usp) => (
            <div key={usp.id} className="p-6 flex flex-col items-center">
              
              {/* Controleer of een icoon bestaat en toon het */}
              {usp.Icon && usp.Icon.url && (
                <div className="relative h-16 w-16 mb-4">
                  <Image
                    src={usp.Icon.url}
                    alt={usp.Icon.alternativeText || 'Icoon voor USP'}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{usp.Title}</h3>

              {/* Gebruik de BlocksRenderer voor de Description */}
              <div className="text-gray-600">
                <BlocksRenderer content={usp.Description} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}