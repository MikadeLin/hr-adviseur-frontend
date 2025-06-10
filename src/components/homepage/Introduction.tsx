import { BlocksRenderer } from '@strapi/blocks-react-renderer'; // LET OP: @strapi/ is toegevoegd

interface IntroductionProps {
  title: string;
  text: any; // De 'text' prop is de array met blocks uit Strapi
}

export function Introduction({ title, text }: IntroductionProps) {
  // Als er geen tekst is, toon de sectie niet
  if (!text) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="prose lg:prose-xl mx-auto text-gray-700 text-left">
          <BlocksRenderer content={text} />
        </div>
      </div>
    </section>
  );
}