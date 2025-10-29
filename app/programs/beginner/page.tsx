"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  Trophy,
  Clock,
  Target,
  Star,
  BookOpen,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import {ModernFooter} from "@/components/modern-footer"

const beginnerBenefits = [
  {
    title: "Structured Learning Path",
    description:
      "Follow a clear, step-by-step curriculum designed to build a strong foundation.",
    icon: BookOpen,
  },
  {
    title: "Fundamental Skill Development",
    description:
      "Master the essential techniques and movements to gain confidence on court.",
    icon: Lightbulb,
  },
  {
    title: "Rapid Progress",
    description:
      "Accelerate your learning through focused drills and personalized guidance.",
    icon: Rocket,
  },
]

const testimonials = [
   {
    name: "Gaurav Kulshreshtha",
    program: "Begginer",
    content:
      "My 10-year-old son Avyan began his badminton journey at Racketek two years ago, and the transformation has been incredible. He's grown from a complete beginner into a confident player — all thanks to Ram Sir’s dedication and structured coaching.",
    rating: 5,
    image: "/men_placeholder.png",
  },
  {
    name: "Shilpa Bandekar",
    program: "Begginer",
    content:
      "My child is being coached by Ram Sir at Racketek Badminton Academy. The beginner training approach is excellent — patient, fun, and focused on building the right foundation.",
    rating: 5,
    image: "/women_placeholder.png",
  },
]

export default function BeginnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-24 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Badge variant="secondary" className="mb-2 text-sm">
            🚀 Kickstart Your Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Badminton
            <span className="text-primary block mt-1">Beginner Program</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn the fundamentals of badminton with expert coaching and a structured learning path.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Beginner Program?</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Designed by certified coaches, our program ensures rapid, enjoyable learning and long-term growth.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {beginnerBenefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8 space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Program Details</h2>
          <p className="text-muted-foreground text-lg">
            A structured, 8-week journey into the sport, guided by our professional coaching team.
          </p>

          <Card className="border-none shadow-md bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Beginner Program Highlights</CardTitle>
              <CardDescription>Everything you need to start confidently.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-left md:text-center">
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 8 Weeks</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Users className="h-5 w-5 text-primary" />
                <span>For Ages: 7 & Above</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Strokes, Footwork & Game Rules</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: 2 Sessions / Week</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Play a Complete Game with Confidence</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Hear what our students say after completing the beginner program.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 text-left border-none shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Badminton Journey?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our beginner program today and take the first step toward mastering the game.
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
