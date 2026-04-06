import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PillNav from "@/components/layouts/PillNav";
import Footer from "@/components/layouts/Footer";

const sloopScript = localFont({
  src: "../../public/fonts/Sloop Script Regular.ttf",
  variable: "--font-sloop",
});

const timesNewRomanItalic = localFont({
  src: "../../public/fonts/Times New Roman Italic.ttf",
  variable: "--font-times-italic",
});

const helvetica = localFont({
  src: "../../public/fonts/Helvetica.ttf",
  variable: "--font-helvetica",
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
        className={`${sloopScript.variable} ${timesNewRomanItalic.variable} ${helvetica.variable} antialiased font-helvetica`}
      >
        <PillNav
          logo="/next.svg"
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Activity', href: '/activity' },
          ]}
          className=""
          ease="power2.easeOut"
          baseColor="#fe5900"
          pillColor="#f8f0ec"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#8E3C12"
          initialLoadAnimation={true}
        />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
