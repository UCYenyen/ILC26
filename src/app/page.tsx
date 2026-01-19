import { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";
import ThemeSection from "@/components/pages/home/ThemeSection";
import AboutSection from "@/components/pages/home/AboutSection";

export const metadata: Metadata = {
  title: "ILC - Home",
  description: "International Leadership Conference Home Page",
};

export default function Home() {
  return (
    <main className="relative w-full bg-background text-foreground selection:bg-[#647DD3]/20">
      <HeroSection />
      <AboutSection />
      <ThemeSection />
    </main>
  );
}