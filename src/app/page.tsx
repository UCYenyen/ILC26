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

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      
      <Card className="w-[380px] shadow-lg">
        {/* Header dengan Icon */}
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle>Web Development Workshop</CardTitle>
              <CardDescription>Master Next.js & Shadcn UI</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <Separator className="mb-4" />

        {/* Content: Informasi Detail */}
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span>Senin, 25 Oktober 2026</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>09:00 AM - 15:00 PM</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Grand City Convention, Surabaya</span>
          </div>

          <div className="bg-muted p-3 rounded-md mt-2">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-primary">Note:</span> Bawa laptop dan pastikan sudah install Node.js versi terbaru.
            </p>
          </div>
        </CardContent>

        {/* Footer: Tombol Aksi */}
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={() => alert("Terdaftar!")}>
            Register Now
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground">
            Lihat Detail Acara
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}