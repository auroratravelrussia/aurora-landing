import type { ReadonlyURLSearchParams } from "next/navigation";

const IS_CLIENT = typeof window !== "undefined";

const isExternalLink = (href: string) => href.startsWith("http");

/**
 * Get the base URL (origin only, no path).
 * Resolution order:
 * 1. Client-side → window.location.origin
 * 2. Vercel production → hardcoded production URL
 * 3. Vercel preview → VERCEL_URL env var
 * 4. Explicit override → NEXT_PUBLIC_BASE_URL
 * 5. Local dev → localhost with PORT
 */
const getBaseUrl = (): string => {
  // Client-side: use current origin
  if (IS_CLIENT) return window.location.origin;

  // // Vercel production deployment
  // if (process.env.VERCEL_ENV === "production") {
  //   return "https://silver-route-landing.vercel.app";
  // }

  // // Vercel preview deployment (PR previews, etc.)
  // if (process.env.VERCEL_URL) {
  //   return `https://${process.env.VERCEL_URL}`;
  // }

  // Explicit override via env variable
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    const envUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
    // Auto-prepend https:// if protocol is missing
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }

  // Local development fallback
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

/**
 * Build a full URL from a path, or return an override if provided.
 */
const getUrl = ({
  path,
  fullUrl,
}: {
  path: string;
  fullUrl?: string;
}): string => {
  if (fullUrl) return fullUrl;

  // If path is already a full URL, return as-is
  if (path.startsWith("http")) return path;

  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${getBaseUrl()}${normalizedPath}`;
};

/**
 * Append search params to a path.
 */
const createUrl = (
  path: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${path}${queryString}`;
};

const BASE_URL = {
  development: getBaseUrl(),
  production: getBaseUrl(),
};

const ENDPOINTS = {
  ogImage: "/logo.jpeg",
  sitemap: "/sitemap.xml",
} as const;

const HEADERS = {
  path: "x-pathname",
} as const;

const PATHS = {
  main: "/",
  about: "/#about",
  commodities: "/#commodities",
  markets: "/#markets",
  leadership: "/#leadership",
  contact: "/#contact",
} as const;

const ALL_PATHS = Object.values(PATHS).flat();

const URLS = {
  ogImage: getUrl({ path: ENDPOINTS.ogImage }),
  sitemap: getUrl({ path: ENDPOINTS.sitemap }),
};

export {
  getUrl,
  getBaseUrl,
  isExternalLink,
  createUrl,
  URLS,
  BASE_URL,
  ENDPOINTS,
  HEADERS,
  ALL_PATHS,
  PATHS,
  IS_CLIENT,
};