import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Archi Tech - Engineering the Digital Legacy",
    template: "%s | Archi Tech"
  },
  description: "Premium software solutions by Archi Tech. Specializing in web, mobile, and desktop applications built with cutting-edge technology and precision engineering.",
  keywords: ["software development", "web applications", "mobile apps", "desktop software", "custom software", "tech solutions", "digital transformation"],
  authors: [{ name: "Archi Tech" }],
  creator: "Archi Tech",
  publisher: "Archi Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://archi-tech-eight.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Archi Tech - Engineering the Digital Legacy",
    description: "Premium software solutions by Archi Tech. Specializing in web, mobile, and desktop applications built with cutting-edge technology and precision engineering.",
    url: 'https://archi-tech-eight.vercel.app/',
    siteName: 'Archi Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Archi Tech - Engineering the Digital Legacy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Archi Tech - Engineering the Digital Legacy",
    description: "Premium software solutions by Archi Tech. Specializing in web, mobile, and desktop applications built with cutting-edge technology and precision engineering.",
    images: ['/twitter-image.jpg'],
    creator: '@architech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '00000000000000000000000000000000',
    yandex: '00000000000000000000000000000000',
    yahoo: '00000000000000000000000000000000',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
