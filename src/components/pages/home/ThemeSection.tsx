import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/ui/card';
import { Lightbulb, ShieldCheck, Users } from 'lucide-react';

const themeData = [
  {
    id: "01",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Dolor Sit Amet",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Consectetur Adipiscing",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: Users,
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
                    </div>
                    <div className="block pb-2">
                        <span className="text-xs font-mono text-foreground/70 border border-border px-3 py-1 rounded-full">
                            LOREM IPSUM 2026
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

            </div>
        </section>
    )
}
