import PageData from "@/models/page.interface";
import SettingsData from "@/models/settings.interface";
import { notFound } from "next/navigation";

const performFetch = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error(
      `Could not fetch data for URL: ${url} - response status was: ${response.status}`
    );
  }

  return await response.json();
};

interface FetchAllContentOptions {
  noCache?: boolean;
  revalidate?: number;
  headerOptions?: Record<string, string>;
}

export const fetchAllContent = async (
  query: string,
  options: FetchAllContentOptions = {}
) => {
  const { noCache, revalidate, headerOptions } = options;
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "Start-Item": "c749f139-dde9-4015-b242-04131fd6d7e6",
  };

  if (headerOptions) {
    Object.assign(headers, headerOptions);
  }
  const revalidateAfter = revalidate || 60;
  const url = `${process.env.UMBRACO_DELIVERY_URL}${query}`;

  return await performFetch(url, {
    method: "GET",
    headers,
    ...(noCache
      ? { cache: "no-store" }
      : { next: { revalidate: revalidateAfter } }),
  });
};

export const getContentByType = async (
  contentType: string,
  options?: {
    take?: number;
  }
): Promise<PageData[] | SettingsData[]> => {
  const { take } = options || {};
  const query = `/content?filter=contentType%3A${contentType}${
    take ? `&take=${take}` : ""
  }`;
  const json = await fetchAllContent(query);
  return json.items;
};

export const getContentByPath = async (
  path: string,
  noCache?: boolean
): Promise<PageData> => {
  const json = await fetchAllContent(`/content/item/${path}`, {
    noCache: noCache,
  });
  return json;
};
