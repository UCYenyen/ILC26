import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/ui/card';
import { Lightbulb, Sparkles, Rocket, Mic2 } from 'lucide-react';

const themeData = [
  {
    id: "01",
    title: "Inspiring Change",
    description: "Cultivating visionary thinking and empowering students to become catalysts for meaningful transformation within their communities and institutions.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Driving Impact",
    description: "Equipping future leaders with the skills, knowledge, and networks to create sustainable impact through effective student organization management in HEIs.",
    icon: Rocket,
  },
  {
    id: "03",
    title: "Global Collaboration",
    description: "Bringing together scholars, administrators, practitioners, and students from around the world to exchange insights and share best practices in leadership.",
    icon: Sparkles,
  },
];

const keynoteData = [
  {
    day: "Day 2 Seminar",
    name: "Yeo Lay",
    role: "Dean of Student Success Centre",
  },
  {
    day: "Day 3 Seminar",
    name: "Edy Sulistyo",
    role: "CEO of everywhere.id",
  },
];

export default function ThemeSection() {
    return (
        <section className="relative z-10 pb-24 w-full bg-background/80 backdrop-blur-3xl border-border/40">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-24 flex justify-between items-end gap-6 border-b border-border/40 pb-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            Theme
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/60 font-medium tracking-tight max-w-2xl">
                            &ldquo;Empowering Global Leaders: Inspiring Change, Driving Impact&rdquo;
                        </p>
                    </div>
                    <div className="block pb-2">
                        <span className="text-xs font-mono text-foreground/70 border border-border px-3 py-1 rounded-full">
                            ILC 2026
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {themeData.map((theme, index) => (
                        <Card
                            key={index}
                            className="group relative h-full min-h-[320px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="absolute -top-4 -right-4 text-9xl font-bold z-0 select-none text-primary/10 transition-colors duration-300">
                                {theme.id}
                            </span>

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary transition-colors duration-500">
                                        <theme.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={2} />
                                    </div>

                                    <CardTitle className="text-2xl font-bold tracking-tight text-primary transition-colors duration-300">
                                        {theme.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {theme.description}
                                    </CardDescription>

                                    <div className="mt-8 w-12 h-0.5 bg-border group-hover:w-full group-hover:bg-primary transition-all duration-500 ease-out" />
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Keynote Speakers */}
                <div className="mt-24">
                    <div className="mb-12 flex items-end gap-6 border-b border-border/40 pb-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                                Keynote Speakers
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {keynoteData.map((speaker, index) => (
                            <Card
                                key={index}
                                className="group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary transition-colors duration-500">
                                                <Mic2 className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-500" strokeWidth={2} />
                                            </div>
                                            <span className="text-xs font-mono text-foreground/60 border border-border px-3 py-1 rounded-full uppercase tracking-widest">
                                                {speaker.day}
                                            </span>
                                        </div>

                                        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-primary transition-colors duration-300">
                                            {speaker.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {speaker.role}
                                        </CardDescription>

                                        <div className="mt-8 w-12 h-0.5 bg-border group-hover:w-full group-hover:bg-primary transition-all duration-500 ease-out" />
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
