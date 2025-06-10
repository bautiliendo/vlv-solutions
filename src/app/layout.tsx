import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavBar";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'], // Example weights
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', // For smooth transitions
});

export const metadata: Metadata = {
  title: "VLV Solutions - Desarrollo Web y Software",
  description: "Especialistas en páginas web, landing pages, e-commerce y sistemas de software personalizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased m-0 p-0`}
      >
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
