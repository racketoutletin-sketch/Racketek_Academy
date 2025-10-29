"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {ModernFooter} from "@/components/modern-footer"
import {
  Calendar,
  Users,
  Trophy,
  Clock,
  Target,
  Star,
  Flame,
  Brain,
  Award,
  Zap,
  Rocket,
  Dumbbell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ---------------------------------------------
// INTERMEDIATE PROGRAM DATA
// ---------------------------------------------
const intermediateBenefits = [
  {
    title: "Technique Refinement",
    description: "Master advanced strokes, shot precision, and game control.",
    icon: Zap,
  },
  {
    title: "Strength & Agility",
    description: "Improve speed, reflexes, and endurance with structured training.",
    icon: Dumbbell,
  },
  {
    title: "Game IQ Development",
    description: "Learn to read the game better and respond strategically to opponents.",
    icon: Brain,
  },
]

const intermediateTestimonials = [
  {
    name: "Neha Gupta",
    program: "Intermediate Program",
    content:
      "The training sessions are challenging yet motivating. My consistency and confidence have grown immensely thanks to Ram Sir.",
    rating: 5,
    image: "/women_placeholder.png",
  },
  {
    name: "Vasu Janardhan",
    program: "Intermediate Program",
    content:
      "Amazing experience! The focus on both fitness and strategy has helped me perform better in every match I play.",
    rating: 5,
    image: "/men_placeholder.png",
  },
]

// ---------------------------------------------
// ADVANCED PROGRAM DATA
// ---------------------------------------------
const advancedBenefits = [
  {
    title: "Strategic Game Planning",
    description:
      "Develop advanced strategies and tactics to outsmart opponents and control the game.",
    icon: Brain,
  },
  {
    title: "High-Intensity Training",
    description:
      "Push your limits with rigorous training sessions to enhance speed, power, and endurance.",
    icon: Flame,
  },
  {
    title: "Competitive Edge",
    description:
      "Gain a competitive advantage through personalized coaching and performance analysis.",
    icon: Award,
  },
]

const advancedTestimonials = [
  {
    name: "Aisha Khan",
    program: "Advanced Program",
    content:
      "The advanced program helped me refine my technique and elevate my game to a competitive level. The coaching is top-notch!",
    rating: 5,
    image: "/women_placeholder.png",
  },
  {
    name: "Rohit Patel",
    program: "Advanced Program",
    content:
      "The program is intense but rewarding. I've seen a significant improvement in my match performance and overall skill level.",
    rating: 5,
    image: "/men_placeholder.png",
  },
]

// ---------------------------------------------
// MAIN PAGE COMPONENT
// ---------------------------------------------
export default function IntermediateAdvancedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background text-foreground">
      <ModernNavigation />

      {/* HERO SECTION */}
      <section className="relative py-20 text-center px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            🎯 Level Up Your Game
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Badminton <span className="text-primary block">Intermediate & Advanced Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for ambitious players aiming to refine their technique, boost endurance, and
            achieve a competitive edge through structured, modern coaching.
          </p>
        </div>
      </section>

      {/* INTERMEDIATE SECTION */}
      <section className="py-20 bg-muted/30 text-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-3" variant="outline">
              🏸 Intermediate Program
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Sharpen Your Skills, Strengthen Your Game</h2>
            <p className="text-muted-foreground text-lg">
              The Intermediate Program focuses on refining skills, improving technique, and preparing
              players for advanced competition through tactical drills and physical conditioning.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {intermediateBenefits.map((benefit, index) => (
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

          {/* Program Details */}
          <Card className="max-w-3xl mx-auto mt-16 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">
                Intermediate Program Highlights
              </CardTitle>
              <CardDescription>
                A perfect balance between technique, tactics, and physical fitness.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 10 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Ages 14+ with basic experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Shot precision, speed, and match control</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: 3 sessions per week</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Improved consistency, strength, and tactical play</span>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-6">Success Stories</h3>
            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {intermediateTestimonials.map((t, index) => (
                <Card
                  key={index}
                  className="p-6 text-left hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.program}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">“{t.content}”</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED SECTION */}
      <section className="py-20 px-6 md:px-12 text-center bg-muted/20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-3" variant="outline">
              🚀 Advanced Program
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Push Beyond Your Limits</h2>
            <p className="text-muted-foreground text-lg">
              Designed for serious players aiming to compete at a higher level. Focused on advanced
              strategy, conditioning, and high-performance training.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advancedBenefits.map((benefit, index) => (
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

          {/* Program Details */}
          <Card className="max-w-3xl mx-auto mt-16 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Advanced Program Highlights</CardTitle>
              <CardDescription>Comprehensive mastery for competitive-level players.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 12 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Experienced players (16+ years)</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Tactical play, endurance, and advanced match strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: 3 sessions per week</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Competitive readiness and match-winning confidence</span>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-6">Success Stories</h3>
            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advancedTestimonials.map((t, index) => (
                <Card
                  key={index}
                  className="p-6 text-left hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.program}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">“{t.content}”</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
           Enroll in our Intermediate or Advanced program and unlock your full potential on the
            court.
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
