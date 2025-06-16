// src/lib/strapi.ts
import qs from "qs";

const STRAPI_API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchApi<T>(
  path: string,
  urlParamsObject: object = {},
  options: RequestInit = {}
): Promise<T> {
  try {
    if (!STRAPI_TOKEN) {
      throw new Error(
        "STRAPI_API_TOKEN is not set in your environment variables."
      );
    }

    const mergedOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${STRAPI_TOKEN}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });

    const requestUrl = `${STRAPI_API_URL}/api${path}${queryString ? `?${queryString}` : ""}`;

    console.log("Requesting URL:", requestUrl);
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error("Error fetching from Strapi:", response.statusText);
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data as T;

  } catch (error) {
    // Controleer of de 'error' een standaard Error object is
    if (error instanceof Error) {
      // Als dat zo is, mogen we error.message veilig gebruiken
      throw new Error(`Failed to fetch API: ${error.message}`);
    }
    // Zo niet, gooi een algemene foutmelding
    throw new Error(`An unknown error occurred while fetching the API`);
  }
}