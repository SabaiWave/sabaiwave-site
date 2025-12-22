/**
 * Parses string env values ("true"/"false") into booleans.
 */
const parseBool = (
  value: string | undefined,
  defaultValue: boolean
): boolean => {
  if (value === undefined) return defaultValue;
  return /^(1|true|yes|on)$/i.test(value);
};

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT ?? "development";

export const IS_DEV = ENVIRONMENT === "development";
export const IS_PREVIEW = ENVIRONMENT === "preview";
export const IS_PROD = ENVIRONMENT === "production";

export const flags = {
  // Motion/FX
  ENABLE_ANIMATIONS: parseBool(
    process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS,
    false
  ),

  // Nav + sections
  SHOW_ABOUT: parseBool(process.env.NEXT_PUBLIC_SHOW_ABOUT, true),
  SHOW_CONTACT: parseBool(process.env.NEXT_PUBLIC_SHOW_CONTACT, true),

  // CTA
  SHOW_TRIAL_BADGE: parseBool(process.env.NEXT_PUBLIC_SHOW_TRIAL_BADGE, false),

  // Optional
  SHOW_HERO_IMAGE: parseBool(process.env.NEXT_PUBLIC_SHOW_HERO_IMAGE, true),
} as const;
