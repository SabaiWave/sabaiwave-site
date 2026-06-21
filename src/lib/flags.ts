const parseBool = (value: string | undefined, defaultValue: boolean): boolean => {
  if (value === undefined) return defaultValue;
  return /^(1|true|yes|on)$/i.test(value);
};

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT ?? "development";

export const IS_DEV = ENVIRONMENT === "development";
export const IS_PREVIEW = ENVIRONMENT === "preview";
export const IS_PROD = ENVIRONMENT === "production";

export const flags = {
  ENABLE_ANIMATIONS: parseBool(process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS, false),
} as const;
