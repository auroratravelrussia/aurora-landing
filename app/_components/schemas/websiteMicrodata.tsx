'use client';

import React from 'react';

interface WebsiteMicrodataProps {
  url: string | undefined;
  name: string;
  children: React.ReactNode;
  className?: string;
}

export const WebsiteMicrodata = ({ 
  url, 
  name, 
  children,
  className = ""
}: WebsiteMicrodataProps) => {
  return (
    <div 
      itemScope 
      itemType="https://schema.org/WebSite"
      className={`website-wrapper ${className}`}
    >
      {/* Hidden microdata for website */}
      <div style={{ display: 'none' }}>
        <span itemProp="name">{name}</span>
        <span itemProp="url">{url}</span>
      </div>
      
      {children}
    </div>
  );
};