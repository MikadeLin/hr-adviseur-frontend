import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export function CtaSection({ title, text, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m40 40 20-20v40l-20-20zm0 0-20-20v40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-orange-400/25 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Urgency Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-orange-500/25 backdrop-blur-sm rounded-full border border-orange-300/40">
          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-ping"></div>
          <span className="text-sm font-semibold text-orange-200 tracking-wide">
            ⚡ DIRECT BESCHIKBAAR VOOR ACUTE HR-UITDAGINGEN
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            {title.split(' ').slice(-2).join(' ')}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
          {text}
        </p>

        {/* Value Props Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span className="text-sm font-medium">Binnen 24u contact</span>
          </div>
          <div className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-sm font-medium">AI-powered advies</span>
          </div>
          <div className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
            <span className="text-sm font-medium">Ervaren HR-experts</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* Primary CTA */}
          <Link
            href={buttonLink}
            className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center"
          >
            {buttonText}
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/diensten"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            Bekijk Alle Diensten
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-300">24u</div>
              <div className="text-sm text-blue-100">Reactietijd</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-300">AI+👥</div>
              <div className="text-sm text-blue-100">Hybride Aanpak</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-300">💯</div>
              <div className="text-sm text-blue-100">Maatwerk Oplossingen</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote (optioneel) */}
        <div className="mt-12 max-w-3xl mx-auto">
          <blockquote className="text-lg italic opacity-80 border-l-4 border-orange-400 pl-6 text-left">
            "Eindelijk een HR-partner die de snelheid van onze tech-startup begrijpt. 
            Ze combineren slimme AI-tools met echte HR-expertise."
          </blockquote>
          <div className="mt-4 text-sm text-orange-200">
            — Startup CEO, Amsterdam
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}