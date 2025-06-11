import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface IntroductionProps {
  title: string;
  text: any;
}

export function Introduction({ title, text }: IntroductionProps) {
  if (!text) {
    return null;
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-blue-700 overflow-hidden">
      {/* Zachte decoratie */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">
              Uw Betrouwbare HR Partner
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/20 border border-white/20">
            <div className="prose prose-lg md:prose-xl max-w-none text-blue-100 leading-relaxed">
              <BlocksRenderer content={text} />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
        </div>
      </div>

      {/* Zachte overgang naar volgende sectie */}
      <div className="absolute bottom-0 left-0 w-full h-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-slate-600"></div>
      </div>
    </section>
  );
}