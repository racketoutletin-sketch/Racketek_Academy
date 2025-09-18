import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Star, Target, Heart, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, value: "300+", label: "Students Trained" },
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
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden md:ml-10 border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-6 ">
            <Badge variant="secondary" className="w-fit mx-auto">
                🏆 Bangalore's Premier Academy
              </Badge>
        </div>
            
          <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-7xl font-bold text-balance">
                Our Story &<span className="text-primary block">Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                For over 10 years, we've been dedicated to nurturing badminton talent and cultivating a passion for
                the sport in Bangalore. From beginners to champions, we're committed to supporting your badminton
                aspirations.
              </p>
              <Button size="lg" className="w-fit">
                Join Our Community
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/about-hero-image.jpg"
                  alt="Racketek Academy Bangalore coaching session"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These values guide everything we do and shape the culture of our badminton community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0 space-y-4">
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
      <section className="py-10 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From modest beginnings to a prominent badminton academy in Bangalore - here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/founder-ram.jpg"
                  alt="Ram G, Founder of Racketek Academy Bangalore"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Meet Ram G</h2>
                <p className="text-primary font-medium text-lg">Founder & Head Coach</p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ram G's passion for badminton ignited at an early age, leading to a journey of dedication
                  and expertise in the sport.
                </p>
                <p>
                  With over 10 years of coaching experience, Ram G has honed a comprehensive training
                  approach that emphasizes both technical skills and strategic thinking.
                </p>
                <p>
                  "[Quote about their coaching philosophy and goals for the academy]"
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Achievements:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Former [Relevant Badminton Achievement]</li>
                  <li>• Certified [Relevant Coaching Certification] Coach</li>
                  <li>• [Number]+ tournament wins by students</li>
                  <li>• Featured in [Local Sports Publication (if applicable)]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 text-center bg-primary/85 text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Badminton Game Today!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of dedicated badminton players and experience the impact of expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Book Your First Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
            {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights
          reserved.
        </div>
      </footer>
    </div>
  )
}
