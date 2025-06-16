import { fetchApi } from "@/lib/strapi";
import Hero  from "@/components/homepage/Hero";
import { Introduction } from "@/components/homepage/Introduction";
import { UspSection } from "@/components/homepage/UspSection";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { CtaSection } from "@/components/homepage/CtaSection";
import type { Metadata } from 'next';

// --- TYPE DEFINITIES (blijven grotendeels hetzelfde) ---
interface Usp {
  id: number;
  Title: string;
  Description: string;
  Icon: any;
}

interface HomepageData {
  id: number;
  HeroTitle: string;
  HeroSubtitle: string;
  HeroCtaText: string;
  HeroCtaLink: string;
  IntroductionTitle: string;
  IntroductionText: any;
  UspSectionTitle: string;
  Usp: Usp[];
  ServicesSectionTitle: string;
  ServicesSectionIntroText: string;
  GeneralCtaTitle: string;
  GeneralCtaText: string;
  GeneralCtaButtonText: string;
  GeneralCtaButtonLink: string;
  SeoTitle: string;
  SeoDescription: string;
}

interface Service {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
    ShortDescription: string;
    Icon: any;
  };
}

// Definiëer het populate-object één keer voor hergebruik
const HOMEPAGE_POPULATE_QUERY = {
  populate: {
    // Populate de 'Usp' component en binnen die component het 'Icon' veld
    Usp: {
      populate: {
        Icon: true,
      },
    },
    // Populate de SEO componenten als die bestaan, bijvoorbeeld:
    // defaultSeo: {
    //   populate: {
    //     shareImage: true,
    //   },
    // },
  },
};

// --- SEO METADATA ---
export async function generateMetadata(): Promise<Metadata> {
  // Gebruik de specifieke populate query
  const homepageData = await fetchApi<{ data: HomepageData }>('/homepage', HOMEPAGE_POPULATE_QUERY);
  const seo = homepageData.data;

  return {
    title: seo.SeoTitle,
    description: seo.SeoDescription,
  };
}

// --- DE PAGINA COMPONENT ---
export default async function HomePage() {
  // Haal alle benodigde data voor de pagina op met Promise.all
  const [homepageRes, servicesRes] = await Promise.all([
    // Gebruik hier ook de specifieke populate query
    fetchApi<{ data: HomepageData }>('/homepage', HOMEPAGE_POPULATE_QUERY),
    fetchApi<{ data: Service[] }>('/services', { populate: 'Icon' }),
  ]);

  const page = homepageRes.data;
  const services = servicesRes.data;

  // Render de componenten zoals voorheen
  return (
    <main>
      <Hero
        title={page.HeroTitle}
        subtitle={page.HeroSubtitle}
        ctaText={page.HeroCtaText}
        ctaLink={page.HeroCtaLink}
      />
      <Introduction
        title={page.IntroductionTitle}
        text={page.IntroductionText}
      />
      <UspSection
        title={page.UspSectionTitle}
        usps={page.Usp}
      />
      <ServicesOverview
        title={page.ServicesSectionTitle}
        introText={page.ServicesSectionIntroText}
        services={services}
      />
      <CtaSection
        title={page.GeneralCtaTitle}
        text={page.GeneralCtaText}
        buttonText={page.GeneralCtaButtonText}
        buttonLink={page.GeneralCtaButtonLink}
      />
    </main>
  );
} 