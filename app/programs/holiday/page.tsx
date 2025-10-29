"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star, Sun, Umbrella, Gift } from "lucide-react"
import Image from "next/image"
import {ModernFooter} from "@/components/modern-footer"

const holidayBenefits = [
  {
    title: "Fun-Filled Sessions",
    description: "Engaging activities and games that make learning badminton exciting during the holidays.",
    icon: Sun,
  },
  {
    title: "All Ages Welcome",
    description: "Programs tailored to suit children, teens, and adults — perfect for families or individuals.",
    icon: Umbrella,
  },
  {
    title: "Special Holiday Events",
    description: "Unique tournaments, challenges, and surprises exclusive to the holiday program.",
    icon: Gift,
  },
]

const testimonials = [
  {
    name: "Meera Joshi",
    program: "Holiday Program",
    content:
      "My kids loved the holiday camp! The coaches made learning badminton so much fun, and they can't wait for the next camp.",
    rating: 5,
    image: "/women_placeholder.png",
  },
  {
    name: "Vikram Rao",
    program: "Holiday Program",
    content:
      "A fantastic holiday experience for the whole family. We learned, played, and made new friends. Highly recommended!",
    rating: 5,
    image: "/men_placeholder.png",
  },
]

export default function HolidayPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            🎉 Make Holidays Memorable!
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-balance">
            Badminton
            <span className="text-primary block">Holiday Program</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join our specially designed holiday badminton program for a season filled with fun, learning, and excitement!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Holiday Program?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the joy of badminton in a festive and friendly environment — perfect for making memories and new
              friends during the holidays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {holidayBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Details</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the highlights of our holiday program, designed for maximum enjoyment and learning.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Holiday Program Highlights</CardTitle>
              <CardDescription>
                Unique, activity-rich sessions that ensure everyone has a blast this holiday season!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 2 weeks (over major holidays)</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Ages 6+ (Kids, Teens, Adults, Families)</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Fun games, group activities, mini-tournaments</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: Daily sessions, special weekend events</span>
              </div>
              <div className="flex items-center gap-4">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Improved skills, new friends, unforgettable memories!</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Holiday Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what families and players are saying about their experiences in our holiday program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
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

                  <p className="text-foreground text-lg leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="py-16 text-center bg-primary text-white rounded-t-3xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready for a Holiday to Remember?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
           Reserve your spot in our holiday badminton program and make your break truly special!.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold" asChild>
            <a href="/contact#contact-form">Reserve Now</a>
          </Button>
        </div>
      </section>
      <ModernFooter />
    </div>
  )
}
