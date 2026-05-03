import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { getBaseUrl } from "./_components/schemas/url";
import { getMetadata } from "./_components/schemas/metadata";
import { LocalBusinessSchema, OrganizationSchema, WebPageSchema, WebsiteSchema } from "./_components/schemas/schema";
import { BusinessMicrodata } from "./_components/schemas/bussinesMicrodata";


export const generateMetadata = () => getMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const siteUrl = getBaseUrl();
const safeUrl: string = siteUrl || "https://www.auroratriprussia.com";

const businessData = {
  organizationName: "Aurora Trip",
  url: safeUrl,
  logo: `${safeUrl}/logo.jpeg`,
  description:
    "Aurora Trip is a premium travel agency specializing in private, corporate, VIP, and educational tours across Russia. We create safe, personalized, and unforgettable travel experiences.",
  email: "tripaurora5@gmail.com",
  telephone: "+79817639692",
  address: {
    addressCountry: "RU",
    addressLocality: "Saint Petersburg",
  },
  sameAs: [
    safeUrl,
    "https://instagram.com/auroratriprussia",
  ],
  openingHours: [
    "Monday 09:00-18:00",
    "Tuesday 09:00-18:00",
    "Wednesday 09:00-18:00",
    "Thursday 09:00-18:00",
    "Friday 09:00-18:00",
  ],
  geo: {
    latitude: 59.9343,
    longitude: 30.3351,
  },
  industry: "Travel & Tourism",
  foundingLocation: "Russia",
  areaServed: [
    "Russia",
    "Moscow",
    "Saint Petersburg",
  ],
  services: [
    "Private Tours",
    "Corporate Travel",
    "VIP Tours",
    "Educational Tours",
    "Custom Travel Planning",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Aurora Trip",
  alternateName: "Aurora Tour & Travel",
  url: safeUrl,
  logo: `${safeUrl}/logo-icon.png`,
  description:
    "Aurora Trip is a professional travel agency offering private, corporate, VIP, and educational tours across Russia.",
  telephone: "+79817639692",
  email: "tripaurora5@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint Petersburg",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "Country",
    name: "Russia",
  },
  sameAs: [
    "https://www.auroratriprussia.com",
    "https://instagram.com/auroratriprussia",
  ],
};

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Great+Vibes&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-ink overflow-x-hidden">
        <OrganizationSchema
          organizationName={businessData.organizationName}
          url={businessData.url}
          logo={businessData.logo}
          description={businessData.description}
          sameAs={businessData.sameAs}
          strategy="afterInteractive"
        />

        <WebsiteSchema
          url={safeUrl}
          name="Silver Route Limited"
          strategy="afterInteractive"
        />

        <WebPageSchema
          url={safeUrl}
          title="Silver Route Limited — Reliable Global Trading Solutions"
          description="International trading company based in Hong Kong specializing in the global trade of metals and industrial commodities. Connecting producers, distributors, and industrial partners across Asia."
          strategy="afterInteractive"
        />

        <LocalBusinessSchema
          organizationName={businessData.organizationName}
          url={businessData.url}
          logo={businessData.logo}
          description={businessData.description}
          openingHours={businessData.openingHours}
          geo={businessData.geo}
          strategy="afterInteractive"
        />
        <Navbar />
        <BusinessMicrodata {...businessData}>
          <main>{children}</main>
        </BusinessMicrodata>
        <Footer />
      </body>
    </html>
  );
}
