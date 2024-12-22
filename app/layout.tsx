import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2024 Code Wrapped",
  description: "Generate cool stats for your 2024 season of code",
  openGraph: {
    title: "2024 Code Wrapped",
    description: "Generate cool stats for your 2024 season of code",
    images: [
      {
        url: "https://res.cloudinary.com/dejzy9q65/image/upload/v1734882716/og_nhu4fu.png",
        width: 1200,
        height: 630,
        alt: "2024 Code Wrapped",
      },
    ],
    siteName: "2024 Code Wrapped",
  },
  twitter: {
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H28DTPC65E"
      ></Script>
      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H28DTPC65E');`}
      </Script>
      <Script
        src="https://kit.fontawesome.com/2b7a7f7f40.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      ></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
