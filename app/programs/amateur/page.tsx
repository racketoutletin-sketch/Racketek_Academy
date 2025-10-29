"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star, Puzzle, Heart, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {ModernFooter} from "@/components/modern-footer"

const amateurBenefits = [
  {
    title: "Skill Enhancement",
    description: "Refine your strokes, footwork, and strategy to play like a pro.",
    icon: Puzzle,
  },
  {
    title: "Fitness Improvement",
    description: "Boost stamina and agility with focused training routines.",
    icon: Heart,
  },
  {
    title: "Competitive Edge",
    description: "Learn advanced game tactics to dominate your matches.",
    icon: Shield,
  },
]

const testimonials = [
  {
    name: "Mudit Arora",
    program: "Amateur Program",
    content:
      "Best academy in Bangalore! Ram is an experienced coach with immense passion for badminton. I’ve seen real improvement and would highly recommend Racketek to all levels.",
    rating: 5,
    image: "/men_placeholder.png",
  },
  {
    name: "Ashish Shukla",
    program: "Amateur Program",
    content:
      "Coaching is excellent — every player gets fair opportunities to play and improve. The positive environment helps bring out the best in everyone.",
    rating: 5,
    image: "/men_placeholder.png",
  },
]

export default function AmateurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background text-foreground">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 text-center px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            🚀 Elevate Your Game
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Badminton{" "}
            <span className="text-primary block">Amateur Program</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your badminton game with expert guidance, skill drills, and
            fitness sessions designed for adult learners and passionate players.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 text-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose This Program?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Designed to balance skill improvement, technique, and overall fitness
            — this program is ideal for those looking to advance their badminton journey.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {amateurBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm border border-border/40"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Program Details</h2>
          <p className="text-muted-foreground text-lg mb-10">
            A well-structured 8-week curriculum focused on technique, consistency,
            and fitness enhancement.
          </p>

          <Card className="p-6 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Amateur Program Highlights</CardTitle>
              <CardDescription>Key details about your journey at Racketek Academy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 8 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Ages 18+</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Skill Enhancement, Fitness & Competitive Play</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: 2 sessions per week</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Improved play performance & game confidence</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Real stories from our students who transformed their game through the Amateur Program.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 text-left hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">
                  “{testimonial.content}”
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Badminton Game?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
           Enroll in our amateur program and take the next step toward becoming a confident, competitive player.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold" asChild>
            <a href="/contact#contact-form">Enroll Now</a>
          </Button>
        </div>
      </section>
      <ModernFooter />
    </div>
  )
}
