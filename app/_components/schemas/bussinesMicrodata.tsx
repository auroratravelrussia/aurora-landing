'use client';

import React from 'react';
import Image from 'next/image';

interface Address {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
}

interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface BusinessMicrodataProps {
  organizationName: string;
  url: string;
  logo: string;
  description: string;
  // address: Address | undefined;
  sameAs?: string[];
  priceRange?: string;
  openingHours?: string[];
  geo?: GeoCoordinates;
  children: React.ReactNode;
}

export const BusinessMicrodata = ({ 
  organizationName,
  url,
  logo,
  description,
  sameAs = [],
  priceRange,
  openingHours = [],
  geo,
  children
}: BusinessMicrodataProps) => {
  return (
    <>
      {/* Website microdata wrapper */}
      <div itemScope itemType="https://schema.org/WebSite" style={{ display: 'none' }}>
        <span itemProp="name">{organizationName}</span>
        <span itemProp="url">{url}</span>
      </div>

      {/* Organization microdata wrapper */}
      <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
        <span itemProp="name">{organizationName}</span>
        <span itemProp="url">{url}</span>
        {/* Use Next.js Image with minimal dimensions for hidden microdata */}
        <Image 
          itemProp="logo" 
          src={logo} 
          alt={organizationName}
          width={1}
          height={1}
          style={{ display: 'none' }}
          priority={false}
          unoptimized={true}
        />
        <span itemProp="description">{description}</span>
        
        {/* Address */}
        {/* <div itemScope itemType="https://schema.org/PostalAddress" itemProp="address">
          <span itemProp="streetAddress">{address.streetAddress}</span>
          <span itemProp="addressLocality">{address.addressLocality}</span>
          <span itemProp="postalCode">{address.postalCode}</span>
          <span itemProp="addressCountry">{address.addressCountry}</span>
        </div> */}
        
        {/* Social links */}
        {sameAs.map((link, index) => (
          <a key={index} itemProp="sameAs" href={link} style={{ display: 'none' }}>
            {link}
          </a>
        ))}
      </div>

      {/* LocalBusiness microdata wrapper */}
      <div itemScope itemType="https://schema.org/LocalBusiness" style={{ display: 'none' }}>
        <span itemProp="name">{organizationName}</span>
        <span itemProp="url">{url}</span>
        {/* Use meta tag for logo */}
        <meta itemProp="logo" content={logo} />
        <span itemProp="description">{description}</span>
        {priceRange && <span itemProp="priceRange">{priceRange}</span>}
        
        {/* Address */}
        {/* <div itemScope itemType="https://schema.org/PostalAddress" itemProp="address">
          <span itemProp="streetAddress">{address.streetAddress}</span>
          <span itemProp="addressLocality">{address.addressLocality}</span>
          <span itemProp="postalCode">{address.postalCode}</span>
          <span itemProp="addressCountry">{address.addressCountry}</span>
        </div> */}
        
        {/* Opening hours */}
        {openingHours.map((hours, index) => (
          <time key={index} itemProp="openingHours">{hours}</time>
        ))}
        
        {/* Geo coordinates */}
        {geo && (
          <div itemScope itemType="https://schema.org/GeoCoordinates" itemProp="geo">
            <meta itemProp="latitude" content={geo.latitude.toString()} />
            <meta itemProp="longitude" content={geo.longitude.toString()} />
          </div>
        )}
      </div>

      {/* Main content */}
      {children}
    </>
  );
};