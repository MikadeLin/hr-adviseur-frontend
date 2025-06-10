// src/lib/strapi.ts

import qs from "qs";

const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  // Je kunt hier extra opties definiëren indien nodig
}

export async function fetchApi<T>(
  path: string,
  urlParamsObject: object = {},
  options: FetchOptions = {}
): Promise<T> {
  try {
    if (!STRAPI_TOKEN) {
      throw new Error("STRAPI_API_TOKEN is not set in your environment variables.");
    }

    const mergedOptions: FetchOptions = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${STRAPI_TOKEN}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
    const requestUrl = `<span class="math-inline">\{STRAPI\_URL\}/api</span>{path}${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error("Error fetching from Strapi:", response.statusText);
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data as T;

  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch API: ${error.message}`);
  }
}