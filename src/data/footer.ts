export interface SocialLink {
  label: string;
  href: string;
}

export const footerConfig = {
  email: "info@sabaiwave.com",
  social: [] as SocialLink[],
  copyright: `© ${new Date().getFullYear()} Sabai Wave`,
};
