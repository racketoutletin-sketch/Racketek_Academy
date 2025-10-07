import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star, Puzzle, Heart, Shield } from "lucide-react"
import Image from "next/image"

const amateurBenefits = [
  {
    title: "Skill Enhancement",
    description: "Improve your badminton skills and techniques to enhance your overall game.",
    icon: Puzzle,
  },
  {
    title: "Fitness Improvement",
    description: "Increase your physical fitness and stamina through targeted exercises and drills.",
    icon: Heart,
  },
  {
    title: "Competitive Edge",
    description: "Gain a competitive advantage by learning advanced strategies and tactics.",
    icon: Shield,
  },
]

const testimonials = [
  {
    name: "Rahul Patel",
    program: "Amateur Program",
    content: "This program helped me enhance my skills and improve my overall game. The coaches are very knowledgeable!",
    rating: 5,
    image: "/testimonial-mike.jpg",
  },
  {
    name: "Sneha Reddy",
    program: "Amateur Program",
    content: "I've noticed a significant improvement in my fitness and stamina since joining this program. Highly recommended!",
    rating: 5,
    image: "/testimonial-lisa.jpg",
  },
]

export default function AmateurPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden md:ml-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              🚀 Elevate Your Game
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance">
              Badminton
              <span className="text-primary block">Amateur Program</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A program designed to enhance your badminton skills, improve your fitness, and give you a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Amateur Program?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our program is designed with proven methodologies and delivered by experienced coaches to help you elevate your game and achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {amateurBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold mb-4">Program Details</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a detailed overview of what our amateur program offers and how it can benefit you.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Amateur Program Highlights</CardTitle>
              <CardDescription>A structured approach to enhancing your badminton skills and fitness.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-primary" />
                <span>Duration: 8 weeks</span>
                    </div>
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-primary" />
                <span>Suitable for: Ages 18+</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-5 w-5 text-primary" />
                <span>Focus: Skill Enhancement, Fitness Improvement, and Competitive Edge</span>
                    </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Schedule: 2 sessions per week</span>
              </div>
              <div className="flex items-center gap-4">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Outcome: Improved badminton skills, enhanced fitness, and a competitive edge</span>
                  </div>
                </CardContent>
              </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our students who have successfully completed the amateur program and achieved their goals.
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

      {/* CTA Section */}
      <section className="py-12 text-center bg-primary/85 text-white rounded-xl mx-4 md:mx-8 lg:mx-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Badminton Game?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Enroll in our amateur program and take the next step towards becoming a skilled badminton player.
          </p>
          <Button size="lg" variant="secondary" className="px-6 m-auto">
            Enroll Now
          </Button>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights
          reserved.
        </div>
      </footer>
    </div>
  )
}