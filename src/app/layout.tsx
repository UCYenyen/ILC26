import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PillNav from "@/components/layouts/PillNav";
import Footer from "@/components/layouts/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILC",
  description: "International Leadership Conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PillNav
          logo="/next.svg"
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Seminar', href: '/seminar' },
          ]}
          className=""
          ease="power2.easeOut"
          baseColor="#fe5900"
          pillColor="#f8f0ec"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#b10d00"
          initialLoadAnimation={true}
        />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
