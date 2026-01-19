import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Squares from "@/components/layouts/Squares";
import PillNav from "@/components/layouts/PillNav";
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
        <div className="fixed w-screen h-screen overflow-hidden">
          <Squares
            speed={0.25}
            squareSize={100}
            direction="down"
            borderColor="#000000"
            hoverFillColor="#b10d00"
          />
        </div>
        <PillNav
          logo="/next.svg"
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={false}
        />
        <main className="w-screen overflow-x-hidden relative bg-linear-to-b from-background/70 to-[#647DD3]/30">
          {children}
        </main>
      </body>
    </html>
  );
}
