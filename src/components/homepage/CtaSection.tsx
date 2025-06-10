import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export function CtaSection({ title, text, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{text}</p>
        <Link
          href={buttonLink}
          className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}