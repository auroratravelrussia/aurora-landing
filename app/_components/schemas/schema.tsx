'use client'

import Script from 'next/script';
import { useEffect, useState } from 'react';
// import { Organization, WebSite, WebPage, BreadcrumbList } from 'schema-dts';


// Base Schema interface
interface BaseSchemaProps {
  url?: string;
  strategy?: "afterInteractive" | "beforeInteractive" | "lazyOnload" | "worker";
}

// Organization Schema interface
interface OrganizationSchemaProps extends BaseSchemaProps {
  organizationName: string;
  logo?: string;
  description?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

// Website Schema interface
interface WebsiteSchemaProps extends BaseSchemaProps {
  name?: string;
}

// Product Schema interface
interface ProductSchemaProps extends BaseSchemaProps {
  name: string;
  image: string | string[];
  description: string;
  sku: string;
  brand: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    url?: string;
    priceValidUntil?: string;
  };
}

// Breadcrumb Schema interface
interface BreadcrumbSchemaProps extends BaseSchemaProps {
  items: {
    name: string;
    item: string;
  }[];
}

// WebPage Schema interface
interface WebPageSchemaProps extends BaseSchemaProps {
  title: string;
  description: string;
}

// Organization Schema Component
export const OrganizationSchema = ({
  organizationName,
  url,
  logo,
  description,
  telephone,
  address = {
    streetAddress: "Ключевая улица, д. 30, оф. 110",
    addressLocality: "Санкт-Петербург",
    postalCode: "195221",
    addressCountry: "RU"
  },
  sameAs,
  strategy = "beforeInteractive"
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': url ? `${url}#organization` : undefined,
    name: organizationName,
    url: url,
    logo: logo,
    description: description,
    telephone: telephone,
    address: address ? {
      '@type': 'PostalAddress',
      ...address
    } : undefined,
    sameAs: sameAs
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

// Website Schema Component
export const WebsiteSchema = ({
  url,
  name = "Клавка Групп",
  strategy = "beforeInteractive"
}: WebsiteSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': url ? `${url}#website` : undefined,
    url: url,
    name: name,
    publisher: url ? {
      '@id': `${url}#organization`
    } : undefined,
    potentialAction: url ? {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    } : undefined
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

// WebPage Schema Component
export const WebPageSchema = ({
  url,
  title,
  description,
  strategy = "beforeInteractive"
}: WebPageSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url ? `${url}#webpage` : undefined,
    url: url,
    name: title,
    description: description,
    isPartOf: url ? {
      '@id': `${url}#website`
    } : undefined
  };

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

// Product Schema Component
export const ProductSchema = ({
  name,
  image,
  description,
  sku,
  brand,
  offers,
  url,
  strategy = "beforeInteractive"
}: ProductSchemaProps) => {

  const [isMounted, setIsMounted] = useState<boolean>(false);


  const processedImage = Array.isArray(image)
    ? image.filter(img => img) // Filter out any null/undefined/empty images
    : (image || '');


  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': url ? `${url}#product` : undefined,
    name: name || '',
    image: processedImage,
    description: description || '',
    sku: sku || '',
    brand: {
      '@type': 'Brand',
      name: brand || ''
    },
    offers: {
      '@type': 'Offer',
      price: offers?.price || 0,
      priceCurrency: offers?.priceCurrency || 'RUB',
      availability: offers?.availability || 'https://schema.org/OutOfStock',
      url: offers?.url || url || '',
      priceValidUntil: offers?.priceValidUntil || undefined
    }
  };

  const schemaJson = JSON.stringify(schema);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }



  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: schemaJson
      }}
    />
  );
};

// Breadcrumb Schema Component
export const BreadcrumbSchema = ({
  items,
  url,
  strategy = "beforeInteractive"
}: BreadcrumbSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': url ? `${url}#breadcrumb` : undefined,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

// For Local Business (if needed)
interface LocalBusinessSchemaProps extends OrganizationSchemaProps {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export const LocalBusinessSchema = ({
  organizationName,
  url,
  logo,
  description,
  telephone,
  address,
  sameAs,
  priceRange,
  openingHours,
  geo,
  strategy = "beforeInteractive"
}: LocalBusinessSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url ? `${url}#localbusiness` : undefined,
    name: organizationName,
    url: url,
    logo: logo,
    description: description,
    telephone: telephone,
    address: address ? {
      '@type': 'PostalAddress',
      ...address
    } : undefined,
    sameAs: sameAs,
    priceRange: priceRange,
    openingHoursSpecification: openingHours?.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1]?.split('-')[0],
      closes: hours.split(' ')[1]?.split('-')[1]
    })),
    geo: geo ? {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    } : undefined
  };

  return (
    <Script
      id="localbusiness-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

// FAQ Schema
interface FAQSchemaProps extends BaseSchemaProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export const FAQSchema = ({
  questions,
  url,
  strategy = "beforeInteractive"
}: FAQSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': url ? `${url}#faq` : undefined,
    mainEntity: questions.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};