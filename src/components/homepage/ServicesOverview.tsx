import Link from 'next/link';

interface Service {
  id: number;
  Name: string;
  Slug: string;
  ShortDescription: string;
}

interface ServicesOverviewProps {
  title: string;
  introText: string;
  services: Service[];
}

// Service icons mapping - je kunt deze later aanpassen of uitbreiden
const serviceIcons = [
  '⚡', '📋', '🆘', '🔧', '🏢', '📈', 
  '👥', '💼', '🎯', '🚀', '⭐', '🔥'
];

export function ServicesOverview({ title, introText, services }: ServicesOverviewProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/15 to-yellow-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">
              Onze Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed opacity-90">
            {introText}
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              href={`/diensten/${service.Slug}`}
              key={service.id} 
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                
                {/* Service Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-500/25">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                    {service.Name}
                  </h3>
                  
                  <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.ShortDescription}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-6 flex items-center text-orange-300 font-semibold text-sm group-hover:text-orange-200 transition-colors duration-300">
                  <span>Meer informatie</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/0 to-yellow-400/0 group-hover:from-orange-400/5 group-hover:to-yellow-400/5 transition-all duration-500 pointer-events-none"></div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-20 transition-all duration-500 rounded-full"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Geen Perfect Passende Dienst Gevonden?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Geen probleem! We denken graag mee aan een maatoplossing voor jouw specifieke HR-uitdaging.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1 flex items-center"
            >
              Bespreek Jouw Situatie
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
            
            <div className="text-sm text-blue-200">
              ⚡ Direct contact · 🤖 AI-powered · ✅ Maatwerk mogelijk
            </div>
          </div>
        </div>
      </div>

      {/* Zachte overgang naar CTA sectie */}
      <div className="absolute bottom-0 left-0 w-full h-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-slate-900"></div>
      </div>
    </section>
  );
}