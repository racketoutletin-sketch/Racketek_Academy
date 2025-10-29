"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star, FlaskConical, Eye, Zap } from "lucide-react"
import Image from "next/image"
import {ModernFooter} from "@/components/modern-footer"

const demoBenefits = [
  {
    title: "Try Before You Commit",
    description:
      "Get a first-hand experience of our coaching methods and dynamic training atmosphere — completely free.",
    icon: FlaskConical,
  },
  {
    title: "Personalized Assessment",
    description:
      "Receive expert feedback on your skill level with clear next steps to accelerate your progress.",
    icon: Eye,
  },
  {
    title: "Motivational Kickstart",
    description:
      "Rediscover your passion for the sport through energetic, well-structured, and fun sessions.",
    icon: Zap,
  },
]

const testimonials = [
  {
    name: "Gaurav Kumar",
    program: "Intermediate Program",
    content:
      "The demo session helped me understand how structured and supportive Racketek’s coaching is. I instantly knew this was the right academy for me.",
    rating: 5,
    image: "/men_placeholder.png",
  },
  {
    name: "Priya Sharma",
    program: "Adults Evening Batch",
    content:
      "The demo showed how professional yet fun Racketek’s training is. Coaches genuinely care about improvement, not just routine practice.",
    rating: 5,
    image: "/women_placeholder.png",
  },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container relative text-center">
          <Badge variant="secondary" className="mb-4">
            🎯 Free Trial
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Experience Racketek with a{" "}
            <span className="text-primary">Free Demo Session</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Step onto the court, feel the energy, and discover how Racketek Academy helps you play smarter, stronger, and better.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Why Join a Demo Session?</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Take your first step toward becoming a confident player — our demo is designed to introduce you to the Racketek experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {demoBenefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Demo Session Highlights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Understand the structure, drills, and energy that define every Racketek session.
          </p>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">What’s Inside</CardTitle>
              <CardDescription>
                Discover, train, and get a personalized roadmap to your next level.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 1 hour</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Kids (7+) and Adults</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Skill Assessment, Rally Practice, Fun Drills</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: Weekly | Subject to slot availability</span>
              </div>
              <div className="flex items-center gap-4">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Tailored training plan + coach feedback</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">What Players Say</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Real experiences from players who began their Racketek journey with a free demo.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
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
                  <p className="text-foreground text-lg italic">“{t.content}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Book Your Free Demo Today!</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards your best game — join our demo and feel the Racketek difference.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold" asChild>
            <a href="/register/demo">Book Demo</a>
          </Button>
        </div>
      </section>
      <ModernFooter />
    </div>
  )
}
