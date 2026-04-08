import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Aurora Trip – Private & Corporate Travel Specialist in Russia",
  description:
    "Premium travel agency specializing in Private, Corporate, VIP, and Educational tours across Russia. Inspiring, safe, and unforgettable journeys.",
  openGraph: {
    title: "Aurora Trip – Premium Travel Across Russia",
    description:
      "Private, Corporate, VIP, and Education tours. Strong local networks, experienced management, 24/7 support.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Aurora Trip",
  alternateName: "Aurora Tour & Travel",
  description:
    "Professional travel agency specializing in Private, Corporate, VIP, and Educational tours in Russia.",
  telephone: "+79817639692",
  email: "tripaurora5@gmail.com",
  areaServed: "Russia",
  sameAs: ["https://instagram.com/auroratriprussia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
