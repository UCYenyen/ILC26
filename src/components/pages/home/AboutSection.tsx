'use client'

import { ArrowRight, CheckCircle2, Trophy, Users, Globe, Target } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
import { Card, CardContent } from '@/components/shadcn/ui/card';

export default function AboutSection() {
  return (
    <section className="relative z-10 py-24 w-full bg-background/80 backdrop-blur-3xl border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Typography & Content */}
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                    "Consectetur adipiscing elit",
                    "Sed do eiusmod tempor",
                    "Magna aliqua ut enim",
                    "Quis nostrud exercitation"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
                <Button size="lg" className="rounded-full px-8 text-base font-semibold group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats / Cards Visual */}
          <div className="relative">
             {/* Decorative Blur behind cards */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

             <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Card 1 */}
                <Card className="col-span-1 bg-background/50 border-border/60 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-8 flex flex-col gap-4 items-start">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Trophy size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-4xl text-primary font-bold tracking-tighter">10+</h3>
                            <p className="text-sm text-muted-foreground mt-1">Lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 2 (Offset down slightly on large screens for aesthetics) */}
                <Card className="col-span-1 lg:mt-12 bg-background/50 border-border/60 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-8 flex flex-col gap-4 items-start">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Users size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-4xl text-primary font-bold tracking-tighter">5K+</h3>
                            <p className="text-sm text-muted-foreground mt-1">Lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="col-span-1 bg-background/50 border-border/60 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-8 flex flex-col gap-4 items-start">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Globe size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-primary tracking-tighter">20+</h3>
                            <p className="text-sm text-muted-foreground mt-1">Countries</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="col-span-1 lg:mt-12 bg-background/50 border-border/60 hover:border-primary/50 transition-colors duration-300">
                     <CardContent className="p-8 flex flex-col gap-4 items-start">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-primary tracking-tighter">100%</h3>
                            <p className="text-sm text-muted-foreground mt-1">Lorem ipsum</p>
                        </div>
                    </CardContent>
                </Card>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}