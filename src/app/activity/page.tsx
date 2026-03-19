'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import Squares from "@/components/layouts/Squares";
import { activities } from "@/lib/activities_data";

export default function ActivityPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const current = activities[currentIndex];

  const navigate = (direction: "prev" | "next") => {
    setIsTransitioning(true);
    setShowDetails(false);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") return (prev + 1) % activities.length;
        return (prev - 1 + activities.length) % activities.length;
      });
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <>
      {/* Animated grid background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Squares
          speed={0.2}
          squareSize={80}
          direction="diagonal"
          borderColor="#e5e7eb"
          hoverFillColor="#647DD3"
        />
      </div>

      <section className="relative bg-linear-to-b from-primary/30 to-background/30 backdrop-blur-[1.5px] z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24 md:py-0">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Section Header — styled like ThemeSection */}
          <div className="mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-border/40 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              Activities
            </h1>
            <span className="text-xs font-mono text-foreground/70 border border-border px-3 py-1 rounded-full">
              ILC 2026
            </span>
          </div>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-4 md:gap-8">

            {/* Left Arrow */}
            <button
              onClick={() => navigate("prev")}
              className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-border/60 bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
              aria-label="Previous day"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Card */}
            <div
              className={`w-full max-w-xl transition-all duration-300 ease-in-out ${
                isTransitioning
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              <Card className="shadow-lg border-border/60 bg-card/95 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-2">
                  {/* Day indicator dots */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {activities.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (i !== currentIndex) {
                            setIsTransitioning(true);
                            setShowDetails(false);
                            setTimeout(() => {
                              setCurrentIndex(i);
                              setIsTransitioning(false);
                            }, 250);
                          }
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === currentIndex
                            ? "bg-primary scale-125"
                            : "bg-border hover:bg-primary/50"
                        }`}
                        aria-label={`Go to Day ${i + 1}`}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-mono tracking-widest text-primary/80 uppercase">
                    Day {current.day}
                  </span>
                  <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-card-foreground mt-1">
                    {current.title}
                  </CardTitle>
                </CardHeader>

                <div className="px-6">
                  <Separator />
                </div>

                <CardContent className="pt-6 grid gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    <span className="font-medium">{current.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {current.description}
                  </p>

                  {/* Expandable Details */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      showDetails ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-muted/60 p-4 rounded-lg border border-border/40">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Description
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {current.details}
                      </p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="ghost"
                    className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10 cursor-pointer"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    {showDetails ? "Hide Information" : "More Information"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => navigate("next")}
              className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-border/60 bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
              aria-label="Next day"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
