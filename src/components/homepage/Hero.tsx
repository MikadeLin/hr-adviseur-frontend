import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <Link 
          href={ctaLink}
          className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}