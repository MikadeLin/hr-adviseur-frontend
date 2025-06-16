import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ 
  title = "Jouw HR Partner voor Groei & Succes", 
  subtitle = "Professioneel HR-advies op maat voor MKB-ondernemingen. Wij helpen jouw bedrijf groeien met de juiste mensen en processen.",
  ctaText = "Start Nu",
  ctaLink = "/contact" 
}: HeroProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              👑 #1 HR Partner • Bewezen Resultaten
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Jouw HR Partner voor
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-blue-600">Groei</span>{' '}
                <span className="text-gray-400">&</span>{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Succes
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center group">
                {ctaText}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              
              <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                Bekijk Ons Diensten
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Direct Bereikbaar
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                24u Response
              </div>
            </div>
          </div>

          {/* Right Column - HR Check Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Gratis HR Check
                </h3>
                <div className="text-2xl font-bold text-orange-500">
                  €0
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Volledige HR-analyse</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Persoonlijk adviesrapport</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Actieplan voor groei</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200">
                Claim Je Gratis Check
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}