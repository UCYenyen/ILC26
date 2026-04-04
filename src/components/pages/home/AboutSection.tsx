'use client'

import Link from 'next/link';
import { ArrowRight, Mic2 } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/ui/card';

const keynoteData = [
  {
    id: "01",
    day: "Day 2 Seminar",
    name: "Yeo Lay",
    role: "Dean of Student Success Centre",
  },
  {
    id: "02",
    day: "Day 3 Seminar",
    name: "Edy Sulistyo",
    role: "CEO of everywhere.id",
  },
];

export default function AboutSection() {
  return (
    <section className="relative z-10 py-24 w-full bg-background/80 backdrop-blur-3xl border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN: About Content */}
          <div className="flex flex-col gap-8 justify-between animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            
            {/* Tag / Label */}
            <div className="flex items-center gap-4">
               <span className="h-px w-12 bg-primary/60"></span>
               <span className="text-sm font-mono tracking-widest text-primary/80 uppercase">
                  About The Conference
               </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-primary leading-[1.1]">
              Shaping the Future of <br className="hidden lg:block" />
              <span className="text-foreground">Global Leadership.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                In an increasingly complex and dynamic educational landscape, student organizations play a pivotal role in fostering the personal and professional development of students within Higher Education Institutions (HEIs).
              </p>
              <p>
                ILC 2026 seeks to gather scholars, administrators, practitioners, and students to exchange insights, present research findings, and share best practices in the effective management of student organizations within the context of HEIs.
              </p>
            </div>

            {/* Theme Quote */}
            <div className="mt-2 border-l-2 border-primary/60 pl-6 py-2">
              <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-2">Theme</p>
              <p className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90 leading-snug">
                &ldquo;Empowering Global Leaders: Inspiring Change, Driving Impact&rdquo;
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
                <Button size="lg" className="rounded-full px-8 text-base font-semibold group" asChild>
                    <Link href="/activity">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Speaker Highlights */}
          <div className="relative flex flex-col">
             {/* Decorative Blur behind cards */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

             <div className="flex flex-col gap-6 relative z-10 flex-1 justify-between">
                {/* Section Label */}
                <div className="flex items-center gap-4 mb-2">
                   <span className="h-px w-12 bg-primary/60"></span>
                   <span className="text-sm font-mono tracking-widest text-primary/80 uppercase">
                      Keynote Speakers
                   </span>
                </div>

                {keynoteData.map((speaker, index) => (
                    <Card
                        key={index}
                        className="group relative h-full min-h-[200px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Large faint background number */}
                        <span className="absolute -top-4 -right-4 text-9xl font-bold z-0 select-none text-primary/10 transition-colors duration-300">
                            {speaker.id}
                        </span>

                        <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary transition-colors duration-500">
                                    <Mic2 className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={2} />
                                </div>
                                <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-widest">
                                    {speaker.day}
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 mb-8">
                                <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight text-primary transition-colors duration-300">
                                    {speaker.name}
                                </CardTitle>
                                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                                    {speaker.role}
                                </CardDescription>
                            </div>

                            <div className="mt-auto">
                                <div className="w-12 h-0.5 bg-border group-hover:w-full group-hover:bg-primary transition-all duration-500 ease-out" />
                            </div>
                        </div>
                    </Card>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}