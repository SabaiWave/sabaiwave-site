// src/types/index.ts

export interface AboutSection {
  title: string;
  description: string;
  bullets?: string[];
}

export interface HeroDetails {
  heading: string;
  subheading: string;
  centerImageSrc: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface SiteDetails {
  siteName: string;
  siteUrl: string;
  metadata: {
    title: string;
    description: string;
  };
  language: string;
  locale: string;
  siteLogo: string;
  googleAnalyticsId: string;
}
