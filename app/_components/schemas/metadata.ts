import type { Metadata } from "next";
import { getUrl, getBaseUrl, URLS } from "./url";
import { metadata as siteMetadata } from "./constants";
import { getHeaders } from "./header";

type OpenGraphArticle = {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  section?: string | null;
  ogUrl?: string;
};

type RobotsConfig =
  | {
      index?: boolean;
      follow?: boolean;
      "max-video-preview"?: number;
      "max-image-preview"?: "none" | "standard" | "large";
      "max-snippet"?: number;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        "max-video-preview"?: number;
        "max-image-preview"?: "none" | "standard" | "large";
        "max-snippet"?: number;
      };
    }
  | string;

type Props = {
  title?: string;
  description?: string;
  imageUrl?: string | null;
  tags?: string[];
  urlData?: string;
  canonicalUrl?: string;
  openGraphArticle?: OpenGraphArticle;
  robots?: RobotsConfig;
};

const FALLBACK_URL = "https://www.auroratriprussia.com";

/**
 * Safely construct a URL object. Returns a fallback URL if parsing fails.
 */
const safeUrl = (input: string): URL => {
  try {
    return new URL(input);
  } catch {
    console.warn(
      `[metadata] Invalid URL: "${input}". Falling back to ${FALLBACK_URL}`
    );
    return new URL(FALLBACK_URL);
  }
};

/**
 * Default OG image array (used when no custom image is provided).
 */
export const getMetadataImage = (title: string) => [
  {
    url: URLS.ogImage,
    type: "image/png",
    width: 1200,
    height: 630,
    alt: title,
  },
];

/**
 * Build Next.js Metadata object for the current page.
 * All args are optional — falls back to site-wide defaults from constants.
 */
export const getMetadata = async ({
  title,
  description,
  imageUrl,
  urlData,
  openGraphArticle,
  tags,
  canonicalUrl,
  robots,
}: Props = {}): Promise<Metadata> => {
  // --- Title & description (fallback to site defaults) ---
  const modifiedTitle = title || siteMetadata.title;
  const modifiedDescription = description || siteMetadata.description;

  // --- Resolve current URL ---
  const { path } = await getHeaders();
  const rawUrl = urlData ? urlData : getUrl({ path });

  // Ensure URL is valid — if not, fall back to production URL
  const safeFullUrl = safeUrl(rawUrl).toString();

  // metadataBase must be origin only (protocol + host), not full URL with path
  const baseUrlString = getBaseUrl();
  const metadataBaseUrl = safeUrl(baseUrlString);

  // --- Resolve OG image URL ---
  const resolvedImageUrl = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : getUrl({ path: imageUrl })
    : URLS.ogImage;

  const images = [
    {
      url: resolvedImageUrl,
      alt: modifiedTitle,
      type: "image/png",
      width: 1200,
      height: 630,
    },
  ];

  // --- OpenGraph article metadata (timestamps) ---
  const openGraphData: OpenGraphArticle = {
    ...openGraphArticle,
    publishedTime:
      openGraphArticle?.publishedTime || new Date().toISOString(),
    modifiedTime:
      openGraphArticle?.modifiedTime ||
      openGraphArticle?.publishedTime ||
      new Date().toISOString(),
  };

  // --- Robots config ---
  const defaultRobots = {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  };

  const robotsConfig = robots || defaultRobots;

  // --- Return final Metadata object ---
  return {
    generator: siteMetadata.siteName,
    applicationName: siteMetadata.siteName,
    creator: siteMetadata.siteName,
    publisher: siteMetadata.siteName,
    category: "business.trading",
    referrer: "origin-when-cross-origin",
    authors: [{ name: siteMetadata.siteName, url: safeFullUrl }],
    metadataBase: metadataBaseUrl,
    title: {
      default: modifiedTitle,
      template: `%s | ${siteMetadata.siteName}`,
    },
    keywords: tags?.length ? tags : [...siteMetadata.keywords],
    description: modifiedDescription,
    alternates: {
      canonical: canonicalUrl || safeFullUrl,
    },
    openGraph: {
      title: {
        default: modifiedTitle,
        template: `%s | ${siteMetadata.siteName}`,
      },
      description: modifiedDescription,
      url: safeFullUrl,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      images,
      ...openGraphData,
    },
    twitter: {
      card: "summary_large_image",
      title: {
        default: modifiedTitle,
        template: `%s | ${siteMetadata.siteName}`,
      },
      description: modifiedDescription,
      images,
    },
    robots: robotsConfig,
    appleWebApp: {
      capable: true,
      title: siteMetadata.siteName,
      statusBarStyle: "default",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
};