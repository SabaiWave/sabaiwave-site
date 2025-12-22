import "./globals.css";
import { BackgroundWaves } from "@/components/BackgroundWaves";
import { flags } from "@/lib/flags";
import { siteDetails } from "@/data/siteDetails";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    locale: siteDetails.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <BackgroundWaves enableAnimations={flags.ENABLE_ANIMATIONS} />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
