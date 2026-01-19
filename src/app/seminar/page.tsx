'use client'

import {
  CalendarDays,
  MapPin,
  Clock,
  Info
} from "lucide-react"; // Icon untuk mempercantik

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/shadcn/ui/card"

import { Button } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import Squares from "@/components/layouts/Squares";

export default function Home() {
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

      <section className="relative bg-linear-to-b from-primary/30 to-background/30 backdrop-blur-[1.5px] py-24 md:py-0 pointer-events-none z-10 min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        <Card className="w-[380px] shadow-lg">
          {/* Header dengan Icon */}
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Seminar 1</CardTitle>
                <CardDescription>Lorem lorem</CardDescription>
              </div>
            </div>
          </CardHeader>

          <Separator className="mb-4" />

          {/* Content: Informasi Detail */}
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="bg-muted p-3 rounded-md mt-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Notes:</span> Seminar is about leadership skills and personal development. Open for all students.
              </p>
            </div>
          </CardContent>

          {/* Footer: Tombol Aksi */}
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={() => alert("Terdaftar!")}>
              Register Now
            </Button>
            <Button variant="ghost" className="w-full text-muted-foreground">
              Learn More
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[380px] shadow-lg">
          {/* Header dengan Icon */}
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Seminar 1</CardTitle>
                <CardDescription>Lorem lorem</CardDescription>
              </div>
            </div>
          </CardHeader>

          <Separator className="mb-4" />

          {/* Content: Informasi Detail */}
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="bg-muted p-3 rounded-md mt-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Notes:</span> Seminar is about leadership skills and personal development. Open for all students.
              </p>
            </div>
          </CardContent>

          {/* Footer: Tombol Aksi */}
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={() => alert("Terdaftar!")}>
              Register Now
            </Button>
            <Button variant="ghost" className="w-full text-muted-foreground">
              Learn More
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[380px] shadow-lg">
          {/* Header dengan Icon */}
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Seminar 1</CardTitle>
                <CardDescription>Lorem lorem</CardDescription>
              </div>
            </div>
          </CardHeader>

          <Separator className="mb-4" />

          {/* Content: Informasi Detail */}
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>TBA</span>
            </div>

            <div className="bg-muted p-3 rounded-md mt-2">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Notes:</span> Seminar is about leadership skills and personal development. Open for all students.
              </p>
            </div>
          </CardContent>

          {/* Footer: Tombol Aksi */}
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={() => alert("Terdaftar!")}>
              Register Now
            </Button>
            <Button variant="ghost" className="w-full text-muted-foreground">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}