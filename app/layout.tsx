import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hmj-portfolio.vercel.app";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Harsh Jain | REM Portfolio",
  description:
    "Vercel-ready portfolio showcasing Harsh Jain's projects, GitHub repositories, AI builds, and cloud-focused work.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Harsh Jain | REM Portfolio",
    description:
      "Vercel-ready portfolio showcasing Harsh Jain's projects, GitHub repositories, AI builds, and cloud-focused work.",
    type: "website",
    url: siteUrl,
    siteName: "Harsh Jain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Jain | REM Portfolio",
    description:
      "Vercel-ready portfolio showcasing projects, GitHub repositories, AI builds, and cloud-focused work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
