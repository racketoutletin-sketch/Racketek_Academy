"use client";

import { ModernNavigation } from "@/components/modern-navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

const coaches = [
  {
    name: "Priya Sharma",
    title: "Head Coach",
    experience: "10+ years",
    specialties: ["Advanced Techniques", "Competition Strategy", "Complete Fitness"],
    image: "/coach-sarah.jpg",
    bio: "National level player with a passion for developing badminton talent.",
  },
  {
    name: "Rahul Verma",
    title: "Youth Coach",
    experience: "5+ years",
    specialties: ["Beginner Programs", "Junior Development", "Fun Activities"],
    image: "/coach-david.jpg",
    bio: "Experienced in making badminton enjoyable and accessible for young players.",
  },
  {
    name: "Anika Patel",
    title: "Strategy Coach",
    experience: "7+ years",
    specialties: ["Match Analysis", "Mental Toughness", "Game Planning"],
    image: "/coach-sarah.jpg",
    bio: "Expert in developing winning strategies for competitive badminton.",
  },
]

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="py-20 text-center">
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

      {/* Meet Our Coaches */}
            <section className="py-20 bg-muted/30">
              <div className="container">
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {coaches.map((coach, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold">{coach.name}</h3>
                            <p className="text-primary font-medium">{coach.title}</p>
                            <p className="text-sm text-muted-foreground">{coach.experience} experience</p>
                          </div>
      
                          <p className="text-muted-foreground">{coach.bio}</p>
                          <div>
                            <h4 className="font-semibold mb-2">Specialties:</h4>
                            <div className="flex flex-wrap gap-2">
                              {coach.specialties.map((specialty, specialtyIndex) => (
                                <Badge key={specialtyIndex} variant="secondary">
                                  {specialty}
                                </Badge>
                              ))}
                          </div>
                  </div>
      
                          <Button variant="outline" className="w-full bg-transparent">
                            Book with {coach.name.split(" ")[0]}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

      {/* CTA Section */}
      <section className="py-12 text-center bg-primary/85 text-white rounded-xl mx-4 md:mx-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Team of Expert Coaches</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Are you passionate about badminton and helping players improve? Apply now to become a coach at Racketek Academy
          and share your expertise with eager learners of all levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8">
            Join as Coach
          </Button>
        </div>
      </section>


      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Racketek Academy. All rights reserved.
      </footer>
    </div>
  );
}
