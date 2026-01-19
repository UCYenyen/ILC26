'use client'

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full bg-[#051d49] border-t border-border/40 pt-20 pb-8 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* BAGIAN KIRI (1 Item) - Brand & Socials */}
                    {/* Mengambil 5 kolom, memberikan ruang lega di kiri */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-extrabold tracking-tighter text-primary">
                                ILC {currentYear}
                            </span>
                        </Link>
                        <p className="text-foreground/40 leading-relaxed max-w-sm">
                            Ciputra University International Leadership Conference. Empowering the next generation of global visionaries through innovation and integrity.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="p-2 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Instagram size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Twitter size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                <Facebook size={20} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    {/* BAGIAN KANAN (2 Item) */}

                    {/* Item 1: Navigation */}
                    {/* lg:col-start-7 memaksa item ini "lompat" ke sisi kanan (melewati kolom 6) */}
                    <div className="lg:col-span-2 lg:col-start-7 space-y-6">
                        <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-foreground">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'Seminar'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-foreground/40 hover:text-primary transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Item 2: Contact Us */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-foreground">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-foreground/40 group">
                                <MapPin className="w-5 h-5 mt-0.5 text-primary/60 group-hover:text-primary transition-colors" />
                                <span>
                                    CitraLand CBD Boulevard,<br />
                                    Surabaya, East Java 60219,<br />
                                    Indonesia
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-foreground/40 group">
                                <Mail className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                                <a href="mailto:info@ilc-ciputra.com" className="hover:text-primary transition-colors">
                                    info@ilc-ciputra.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/40">
                    <p className="text-sm text-foreground/40 text-center md:text-left">
                        &copy; {currentYear} Ciputra University. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-foreground/40">
                            DESIGNED FOR IMPACT
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}