import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <Script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" strategy='lazyOnload' />
        <Script src="/js/jquery.min.js" strategy='beforeInteractive' />
        <Script src="/js/browser.min.js" strategy='lazyOnload' />
        <Script src="/js/util.js" strategy='lazyOnload' />
        <Script src="/js/main.js" strategy='lazyOnload' />
        <Script src="/js/breakpoints.min.js" strategy='lazyOnload' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
