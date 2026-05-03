'use client';

import Image from 'next/image';
import React from 'react';

export interface Address {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
}

interface OrganizationMicrodataProps {
  organizationName: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  address: Address;
  sameAs?: string[];
  children: React.ReactNode;
  className?: string;
}

export const OrganizationMicrodata = ({
  organizationName,
  url,
  logo,
  description,
  telephone,
  address,
  sameAs = [],
  children,
  className = ""
}: OrganizationMicrodataProps) => {
  return (
    <div
      itemScope
      itemType="https://schema.org/Organization"
      className={`organization-wrapper ${className}`}
    >
      {/* Hidden microdata for organization */}
      <div style={{ display: 'none' }}>
        <span itemProp="name">{organizationName}</span>
        <span itemProp="url">{url}</span>
        <Image itemProp="logo" src={logo} alt={organizationName} />
        <span itemProp="description">{description}</span>
        <span itemProp="telephone">{telephone}</span>

        {/* Address microdata */}
        <div itemScope itemType="https://schema.org/PostalAddress" itemProp="address">
          <span itemProp="streetAddress">{address.streetAddress}</span>
          <span itemProp="addressLocality">{address.addressLocality}</span>
          <span itemProp="postalCode">{address.postalCode}</span>
          <span itemProp="addressCountry">{address.addressCountry}</span>
        </div>

        {/* Social media links */}
        {sameAs.map((link, index) => (
          <a key={index} itemProp="sameAs" href={link} style={{ display: 'none' }}>
            {link}
          </a>
        ))}
      </div>

      {children}
    </div>
  );
};