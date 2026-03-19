'use client'

import { useState, useMemo } from "react";
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

  const groupedDays = useMemo(() => {
    return activities.reduce((acc, curr) => {
      const existingDay = acc.find((d) => d.day === curr.day);
      if (existingDay) {
        existingDay.events.push(curr);
      } else {
        acc.push({ day: curr.day, date: curr.date, events: [curr] });
      }
      return acc;
    }, [] as { day: number; date: string; events: typeof activities }[]);
  }, []);

  const currentDayInfo = groupedDays[currentIndex];

  const navigate = (direction: "prev" | "next") => {
    setIsTransitioning(true);
    setShowDetails(false);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") return (prev + 1) % groupedDays.length;
        return (prev - 1 + groupedDays.length) % groupedDays.length;
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

          {/* Section Header */}
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
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Added max height and flex-col to handle scrolling for longer days */}
              <Card className="shadow-lg border-border/60 bg-card/95 backdrop-blur-sm overflow-hidden flex flex-col h-[55vh]">
                <CardHeader className="pb-4 shrink-0">
                  {/* Day indicator dots - mapped to groupedDays instead of activities */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {groupedDays.map((_, i) => (
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

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono tracking-widest text-primary/80 uppercase">
                      Day {currentDayInfo.day}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      <span className="font-medium">{currentDayInfo.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <div className="px-6 shrink-0">
                  <Separator />
                </div>

                {/* 4. Map through the events for this specific day */}
                <CardContent className="pt-6 overflow-y-auto custom scrollbar">
                  <div className="flex flex-col gap-6">
                    {currentDayInfo.events.map((event, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-card-foreground">
                          {event.title}
                        </CardTitle>
                        
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>

                        {/* Expandable Details for each event - FIXED */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            showDetails ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-muted/60 p-4 rounded-lg border border-border/40 mt-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Info className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                Description
                              </span>
                            </div>
                            {/* whitespace-pre-wrap makes sure linebreaks in your data work properly */}
                            <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                              {event.details}
                            </p>
                          </div>
                        </div>

                        {/* Line separator if there are multiple events on this day */}
                        {index < currentDayInfo.events.length - 1 && (
                          <Separator className="my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* View Details Button Pinned to Bottom */}
                <div className="p-4 shrink-0">
                  <Button
                    variant="ghost"
                    className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10 cursor-pointer"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    {showDetails ? "Hide Information" : "More Information"}
                  </Button>
                </div>
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

  // <Button
  //                   variant="ghost"
  //                   className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10 cursor-pointer"
  //                   onClick={() => setShowDetails((prev) => !prev)}
  //                 >
  //                   {showDetails ? "Hide Information" : "More Information"}
  //                 </Button>
}
