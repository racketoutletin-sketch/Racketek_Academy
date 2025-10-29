"use client";

import { ModernNavigation } from "@/components/modern-navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";


const coaches = [
  {
    name: "Ram",
    title: "Founder & Head Coach",
    experience: "10+ years",
    specialties: ["Advanced Techniques", "Competition Strategy", "Player Development"],
    image: "/placeholder.svg",
    bio: "Founder of Racketek Academy and national-level player dedicated to nurturing top-tier badminton talent.",
    whatsapp: "https://wa.me/919615961999?text=Hi%20Coach%20Ram%2C%20I%27m%20interested%20in%20booking%20a%20training%20session!",
  },
  {
    name: "Pradeep Pari",
    title: "S&C Coach",
    experience: "7+ years",
    specialties: ["Strength & Conditioning", "Agility Training", "Endurance Building"],
    image: "/placeholder.svg",
    bio: "Certified Strength and Conditioning coach focused on building athleticism and resilience in players.",
    whatsapp: "https://wa.me/919615961999?text=Hi%20Coach%20Pradeep%2C%20I%27d%20like%20to%20book%20a%20strength%20and%20conditioning%20session!",
  },
  {
    name: "Chaitanya Kandula",
    title: "Technical Coach",
    experience: "5+ years",
    specialties: ["Technical Skills", "Footwork Precision", "On-Court Strategy"],
    image: "/placeholder.svg",
    bio: "Dedicated coach specializing in refining player technique and game understanding for all levels.",
    whatsapp: "https://wa.me/919615961999?text=Hi%20Coach%20Chaitanya%2C%20I%27m%20interested%20in%20technical%20coaching%20sessions!",
  },
];

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <Badge variant="secondary" className="mb-4">
          Meet Our Coaches
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
          Expert <span className="text-primary block">Coaching Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn from the best. Our experienced coaches are dedicated to helping you improve your badminton skills
          and reach your goals.
        </p>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-muted/30 px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-video relative">
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{coach.name}</h3>
                    <p className="text-primary font-medium">{coach.title}</p>
                    <p className="text-sm text-muted-foreground">{coach.experience} experience</p>
                  </div>

                  <p className="text-muted-foreground">{coach.bio}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href={coach.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book with {coach.name.split(" ")[0]}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary text-white rounded-2xl mx-4 md:mx-12 my-10 px-4">
        <h2 className="text-3xl font-bold mb-4">Join Our Team of Expert Coaches</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Are you passionate about badminton and helping players improve? Apply now to become a coach at Racketek Academy
          and share your expertise with eager learners of all levels.
        </p>
<Button
  size="lg"
  variant="secondary"
  className="px-8 font-semibold"
  asChild
>
  <Link href="/coaches/hire">
    Join as Coach
  </Link>
</Button>

      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Racketek Academy. All rights reserved.
      </footer>
    </div>
  );
}
