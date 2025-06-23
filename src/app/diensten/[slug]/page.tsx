// app/diensten/[slug]/page.tsx
import { fetchApi } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetail {
  id: number;
  documentId: string;
  Name: string;
  Slug: string;
  ShortDescription?: string;
  LongDescription: any;
  SeoTitle?: string | null;
  SeoDescription?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Icon?: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

interface ServiceDetailData {
  data: ServiceDetail[];
}

export async function generateStaticParams() {
  try {
    const servicesData = await fetchApi<ServiceDetailData>("/services");
    
    if (!servicesData?.data || !Array.isArray(servicesData.data)) {
      console.error("Geen diensten gevonden bij generateStaticParams.");
      return [];
    }

    return servicesData.data
      .filter(service => service?.Slug) // Filter out items without Slug
      .map((service: ServiceDetail) => ({
        slug: service.Slug,
      }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params; // Await params as required by Next.js 15+
    const servicesResponse = await fetchApi<ServiceDetailData>(
      `/services?filters[Slug][$eq]=${slug}`
    );

    const service = servicesResponse?.data?.[0];

    if (!service) {
      return {
        title: "Dienst niet gevonden - Hybride HR Advies",
        description: "De gevraagde HR-dienst kon niet worden gevonden.",
      };
    }

    return {
      title: service.SeoTitle || service.Name || "HR Dienst",
      description: service.SeoDescription || service.ShortDescription || "HR dienst beschrijving",
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {
      title: "Dienst niet gevonden - Hybride HR Advies",
      description: "De gevraagde HR-dienst kon niet worden gevonden.",
    };
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params; // Await params as required by Next.js 15+
    const servicesResponse = await fetchApi<ServiceDetailData>(
      `/services?filters[Slug][$eq]=${slug}&populate=Icon`
    );

    const service = servicesResponse?.data?.[0];

    if (!service) {
      return (
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Dienst niet gevonden
          </h1>
          <p className="text-xl text-gray-700">
            Excuses, de gevraagde HR-dienst is niet beschikbaar of bestaat niet meer.
          </p>
          <Link 
            href="/diensten" 
            className="mt-8 inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Bekijk alle diensten
          </Link>
        </div>
      );
    }

    return (
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-0 md:mr-4">
              {service.Name || "HR Dienst"}
            </h1>
            {service.Icon?.data?.attributes?.url && (
              <Image
                src={service.Icon.data.attributes.url}
                alt={service.Icon.data.attributes.alternativeText || service.Name || "Service icon"}
                width={80}
                height={80}
                className="flex-shrink-0"
              />
            )}
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-800 leading-relaxed">
            {service.LongDescription ? (
              <BlocksRenderer content={service.LongDescription} />
            ) : (
              <p className="text-gray-500 italic">
                Geen uitgebreide beschrijving beschikbaar voor deze dienst.
              </p>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Neem contact op over {service.Name || "deze dienst"}
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ServiceDetailPage:", error);
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Er is een fout opgetreden
        </h1>
        <p className="text-xl text-gray-700">
          Excuses, er is een probleem opgetreden bij het laden van deze dienst.
        </p>
        <Link 
          href="/diensten" 
          className="mt-8 inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Bekijk alle diensten
        </Link>
      </div>
    );
  }
}