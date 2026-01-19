'use client'
import Squares from '@/components/layouts/Squares';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <>
            <div className="fixed inset-0 z-0 opacity-40">
                <Squares
                    speed={0.2}
                    squareSize={80}
                    direction="diagonal"
                    borderColor="#e5e7eb"
                    hoverFillColor="#647DD3"
                />
            </div>

            <section className="relative bg-linear-to-b from-primary/30 to-background/30 backdrop-blur-[1.5px] pointer-events-none z-10 min-h-screen flex flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-sm md:text-base font-medium tracking-[0.2em] text-foreground uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        CIPUTRA UNIVERSITY
                    </span>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-primary/90 leading-[0.9] flex flex-col items-center">
                        <span className='animate-in fade-in slide-in-from-bottom-4 duration-1000'>INTERNATIONAL</span>
                        <span className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                            LEADERSHIP
                        </span>
                        <span className='animate-in fade-in slide-in-from-bottom-4 duration-1000'>CONFERENCE</span>
                    </h1>
                </div>

                <div className="absolute bottom-12 flex flex-col items-center gap-2 text-foreground animate-bounce">
                    <span className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="animate-in fade-in slide-in-from-bottom-4 duration-1000 w-4 h-4" />
                </div>
            </section>
        </>
    );
}