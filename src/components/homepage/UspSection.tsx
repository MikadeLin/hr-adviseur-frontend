// 3. USP SECTION - Nog zachter dan Introduction
import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface StrapiMedia {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

interface Usp {
  id: number;
  Title: string;
  Description: any;
  Icon: StrapiMedia;
}

interface UspSectionProps {
  title: string;
  usps: Usp[];
}

export function UspSection({ title, usps }: UspSectionProps) {
  if (!usps || usps.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-600 via-blue-600 to-slate-500 overflow-hidden">
      {/* Zachte achtergronddecoratie */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">
              Waarom Kiezen Voor Ons
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <div 
              key={usp.id} 
              className="group relative bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/25 transition-all duration-500 group-hover:scale-110">
                  {usp.Icon && usp.Icon.url ? (
                    <div className="relative w-10 h-10">
                      <Image
                        src={usp.Icon.url}
                        alt={usp.Icon.alternativeText || 'Icoon voor USP'}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                  {usp.Title}
                </h3>

                <div className="text-blue-100 leading-relaxed prose prose-sm max-w-none">
                  <BlocksRenderer content={usp.Description} />
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-20 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1"
            >
              Ervaar Het Verschil - Neem Contact Op
            </a>
            <div className="text-sm text-blue-200">
              ⚡ Binnen 24u contact · 🤖 AI + Ervaring · ✅ Betrouwbaar
            </div>
          </div>
        </div>
      </div>

      {/* Zachte overgang naar Services sectie */}
      <div className="absolute bottom-0 left-0 w-full h-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-slate-800"></div>
      </div>
    </section>
  );
}