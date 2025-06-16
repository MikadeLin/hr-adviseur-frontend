import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Zap, Users, CheckCircle, Clock } from 'lucide-react';

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
          
          {/* Nieuwe waardepropositie */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Snel en data-gedreven dankzij AI, betrouwbaar en praktisch dankzij ervaren HR-adviseurs
          </p>
        </div>

        {/* Nieuwe USP cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-orange-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-orange-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Snelle Reactie</h3>
            <p className="text-blue-100 text-sm">Binnen 24 uur contact bij acute HR-problemen</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-blue-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-blue-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI + Expertise</h3>
            <p className="text-blue-100 text-sm">Hybride aanpak combineert snelheid met ervaring</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-green-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-green-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Projectmatig</h3>
            <p className="text-blue-100 text-sm">Kortdurende ondersteuning voor specifieke uitdagingen</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="bg-purple-400/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">West-Fries</h3>
            <p className="text-blue-100 text-sm">Duidelijk, professioneel en zonder corporate blabla</p>
          </div>
        </div>

        {/* Hoofdcontent */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/20 border border-white/20">
            <div className="prose prose-lg md:prose-xl max-w-none text-blue-100 leading-relaxed">
              <BlocksRenderer content={text} />
            </div>
            
            {/* Nieuwe call-to-action sectie */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Direct hulp nodig bij een HR-project?
                </h3>
                <p className="text-blue-100 mb-6">
                  Of het nu gaat om snelle opschaling, tijdelijke capaciteit of acute HR-problemen - 
                  wij helpen u snel en effectief verder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Vraag een snelle scan aan
                  </a>
                  <a 
                    href="#diensten" 
                    className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Bekijk alle diensten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verbeterde overgang */}
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