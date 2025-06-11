import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
          <div className="text-2xl">🤖</div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse">
          <div className="text-3xl">⚡</div>
        </div>
        <div className="absolute bottom-1/3 left-1/6 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-ping">
          <div className="text-2xl">👥</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-sm font-semibold tracking-wide text-blue-200">
            🚀 AI + Ervaring = Snelle HR Oplossingen
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Jouw HR Partner voor</span>
          <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Groei & Succes
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          {subtitle}
        </p>

        {/* Value Proposition Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100">
            ✅ Binnen 24u contact
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100">
            ✅ Data-gedreven advies
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100">
            ✅ Ervaren HR-experts
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href={ctaLink}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center"
          >
            {ctaText}
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
          
          <Link 
            href="/diensten"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Bekijk Onze Diensten
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75 mb-4 text-blue-200">Direct hulp voor acute HR-uitdagingen:</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-blue-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Snelle Werving
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Acute Personeelsadvies
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              HR Documentatie
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Tijdelijke Capaciteit
            </div>
          </div>
        </div>
      </div>

      {/* NIEUWE: Zachte overgang naar volgende sectie */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-slate-800/50 to-slate-700"></div>
      </div>
    </section>
  );
}