"use client";
import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Star, Target, Heart, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, value: "400+", label: "Students Trained" },
  { icon: Trophy, value: "10+", label: "Years Experience" },
  { icon: Star, value: "4.8", label: "Average Rating" },
  { icon: Award, value: "30+", label: "Tournaments Won" },
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We emphasize precision in technique and strategy for optimal performance on the court.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "Our dedication to badminton fuels our commitment to developing skilled and passionate players.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We foster teamwork and collaboration, creating a supportive environment for collective growth.",
  },
]

const timeline = [
  {
    year: "2014",
    title: "The Inception",
    description: "Racketek Academy Bangalore was founded with the goal of providing world-class badminton training.",
  },
  {
    year: "2017",
    title: "Rising Stars",
    description: "Our students achieved significant milestones, earning recognition in state-level competitions.",
  },
  {
    year: "2020",
    title: "Expanding Horizons",
    description: "We introduced advanced training modules and expanded our coaching staff to cater to diverse skill levels.",
  },
  {
    year: "2023",
    title: "Digital Integration",
    description: "Launched an online platform to extend coaching services and connect with badminton enthusiasts globally.",
  },
  {
    year: "2024",
    title: "Present Day",
    description: "Racketek Academy Bangalore stands as a leading badminton institution with a growing community.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 text-center lg:text-left">
            <Badge variant="secondary" className="mx-auto lg:mx-0">
              🏆 Bangalore's Premier Academy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Story & <span className="text-primary block">Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              For over 10 years, we've been dedicated to nurturing badminton talent and cultivating a passion for
              the sport in Bangalore. From beginners to champions, we're committed to supporting your badminton
              aspirations.
            </p>
              <Button
                size="lg"
                className="mx-auto lg:mx-0"
                onClick={() =>
                  window.open(
                    "https://chat.whatsapp.com/XXXXXXXXXXXXXXX", // 🔹 Replace this with your actual WhatsApp community link
                    "_blank"
                  )
                }
              >
                Join Our Community
              </Button>

          </div>

          <div className="relative">
            <Image
              src="/about-hero-image.jpg"
              alt="Racketek Academy Bangalore coaching session"
              width={600}
              height={300}
              className="rounded-2xl object-cover w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-6">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            These values guide everything we do and shape the culture of our badminton community.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-muted/30 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground text-lg mb-12">
            From modest beginnings to a prominent badminton academy in Bangalore - here's our story.
          </p>

          <div className="space-y-8 text-left">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start flex-col sm:flex-row">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.year.slice(-2)}
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/founder-ram.jpg"
              alt="Ram, Founder of Racketek Academy Bangalore"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto shadow-lg"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2">Meet Ram</h2>
              <p className="text-primary font-medium text-lg">Founder & Head Coach</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Ram G's passion for badminton ignited at an early age, leading to a journey of dedication
                and expertise in the sport.
              </p>
              <p>
                With over 10 years of coaching experience, he has honed a comprehensive training
                approach that emphasizes both technical skills and strategic thinking.
              </p>
              <p>"A game is won not just by strength, but by smart play and consistency."</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Achievements:</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Former State-Level Champion</li>
                <li>• Bwf level 1 certified</li>
                <li>• 30+ tournament wins by students</li>
                <li>• Ananthapur District No 1 Champions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-primary text-white rounded-2xl mx-6 sm:mx-10 lg:mx-20 my-10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Badminton Game Today!</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community of dedicated badminton players and experience the impact of expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <a href="/contact#contact_form">Book Your First Session</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => (window.location.href = "tel:+919615961999")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Racketek Academy. All rights reserved.
      </footer>
    </div>
  )
}
