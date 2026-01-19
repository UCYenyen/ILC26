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
        <main className="w-screen overflow-x-hidden relative bg-linear-to-b from-background/50 to-[#647DD3]/25">
          <PillNav
            logo="/next.svg"
            logoAlt="Company Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Register', href: '/register' }
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
        </main>
      </body>
    </html>
  );
}
