import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star, UserCog, Layers, Users2, Medal } from "lucide-react"
import Image from "next/image"
import {ModernFooter} from "@/components/modern-footer"

const personalBenefits = [
  {
    title: "1-on-1 Elite Coaching",
    description: "Train exclusively with a dedicated coach who tailors every session to your strengths, goals, and playing style.",
    icon: UserCog,
  },
  {
    title: "Custom Skill Development",
    description: "Work on targeted areas — from advanced footwork and shot precision to tactical gameplay and mental sharpness.",
    icon: Layers,
  },
  {
    title: "Accelerated Growth",
    description: "Experience faster results with personalized feedback, progressive drills, and detailed performance tracking.",
    icon: Medal,
  },
]

const testimonials = [
  {
    name: "Aditya Menon",
    program: "Personal Coaching",
    content:
      "The personalized sessions completely transformed my game. Every class was focused, intense, and built around my needs. Highly recommend it!",
    rating: 5,
    image: "/men_placeholder.png",
  },
  {
    name: "Sara Fernandes",
    program: "Personal Coaching",
    content:
      "My coach designed a plan just for me — not generic drills. I improved my consistency and confidence like never before.",
    rating: 5,
    image: "/women_placeholder.png",
  },
]

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden md:ml-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              🏸 One Player. One Coach. One Goal.
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance">
              Badminton
              <span className="text-primary block">Personal Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Experience the ultimate in focused training — designed around *you*, your pace, and your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Go Personal?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Precision-driven coaching for players who want to push boundaries, sharpen skills, and achieve measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personalBenefits.map((benefit, index) => (
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
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Snapshot</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get complete control over your training journey — flexible sessions, personalized plans, and measurable progress.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Personal Coaching Highlights</CardTitle>
              <CardDescription>
                A one-on-one experience designed to bring out your full badminton potential.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: Book hourly or as a custom package</span>
              </div>
              <div className="flex items-center gap-4">
                <Users2 className="h-5 w-5 text-primary" />
                <span>For: All ages and proficiency levels</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus Areas: Technique, strategy, strength, or match-readiness — your choice</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: Fully flexible and coach-aligned</span>
              </div>
              <div className="flex items-center gap-4">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Goal: Progress faster and perform smarter</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Players Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from athletes who turned personal coaching into their competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>

                  <p className="text-foreground text-lg">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  
{/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Your Personal Journey Starts Here!</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the next step — book a personal session and train with full focus, purpose, and guidance.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold" asChild>
            <a href="/contact#contact-form">Book Now</a>
          </Button>
        </div>
      </section>
      <ModernFooter />
    </div>
  )
}
