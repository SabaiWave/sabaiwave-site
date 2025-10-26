/**
 * Parses string env values ("true"/"false") into booleans.
 * Defaults to true for visibility flags.
 */
const parseBool = (value: string | undefined, defaultValue = true): boolean => {
  if (value === undefined) return defaultValue;
  return /^(1|true|yes|on)$/i.test(value);
};

// Read environment type (dev, preview, prod)
export const ENVIRONMENT =
  process.env.NEXT_PUBLIC_ENVIRONMENT ?? "development";

export const IS_DEV = ENVIRONMENT === "development";
export const IS_PREVIEW = ENVIRONMENT === "preview";
export const IS_PROD = ENVIRONMENT === "production";

// Feature flags (control visibility of landing page sections)
export const flags = {
  SHOW_HEADER: parseBool(process.env.NEXT_PUBLIC_SHOW_HEADER),
  SHOW_HERO: parseBool(process.env.NEXT_PUBLIC_SHOW_HERO),
  SHOW_BENEFITS: parseBool(process.env.NEXT_PUBLIC_SHOW_BENEFITS),
  SHOW_PRICING: parseBool(process.env.NEXT_PUBLIC_SHOW_PRICING),
  SHOW_STATS: parseBool(process.env.NEXT_PUBLIC_SHOW_STATS),
  SHOW_FAQ: parseBool(process.env.NEXT_PUBLIC_SHOW_FAQ),
  SHOW_CTA: parseBool(process.env.NEXT_PUBLIC_SHOW_CTA),
  SHOW_LOGOS: parseBool(process.env.NEXT_PUBLIC_SHOW_LOGOS),
  SHOW_FOOTER: parseBool(process.env.NEXT_PUBLIC_SHOW_FOOTER),
  SHOW_STORE_BUTTONS: parseBool(process.env.NEXT_PUBLIC_SHOW_STORE_BUTTONS),
  SHOW_TESTIMONIALS: parseBool(process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS),
} as const;
