import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, Target, Star } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    title: "Holiday Intensive Camps",
    price: "₹24,150",
    duration: "5 days",
    ages: "8-16 years",
    description: "Comprehensive holiday program combining skill development, fitness, and fun activities.",
    features: [
      "Daily 4-hour training sessions",
      "Professional coaching staff",
      "Lunch and snacks included",
      "Equipment provided",
      "Certificate of completion",
      "End-of-camp tournament",
    ],
    image: "/holiday-camp.jpg",
    popular: true,
    nextDates: ["Dec 18-22, 2024", "Jan 8-12, 2025", "Apr 15-19, 2025"],
    location: "Racketek Academy, Bengaluru",
  },
  {
    title: "Skill Development Clinics",
    price: "₹15,770",
    duration: "Weekend",
    ages: "All ages",
    description: "Intensive weekend clinics focusing on specific skills and techniques.",
    features: [
      "2-day intensive training",
      "Small group sizes (max 8)",
      "Video analysis included",
      "Take-home practice guide",
      "Follow-up session included",
    ],
    image: "/skill-clinic.jpg",
    popular: false,
    nextDates: ["Jan 20-21, 2025", "Feb 17-18, 2025", "Mar 24-25, 2025"],
    location: "Racketek Academy, Bengaluru",
  },
  {
    title: "Competition Preparation",
    price: "₹29,050",
    duration: "4 weeks",
    ages: "12+ years",
    description: "Intensive program designed to prepare players for competitive tournaments.",
    features: [
      "8 training sessions",
      "Match simulation",
      "Mental preparation",
      "Nutrition guidance",
      "Tournament entry assistance",
      "Performance analysis",
    ],
    image: "/competition-prep.jpg",
    popular: false,
    nextDates: ["Feb 3-28, 2025", "May 5-30, 2025", "Aug 4-29, 2025"],
    location: "Racketek Academy, Bengaluru",
  },
]

const testimonials = [
  {
    name: "Emma Thompson",
    program: "Holiday Camp 2024",
    content: "My daughter loved every minute! She improved so much and made great friends. The coaches were fantastic.",
    rating: 5,
    image: "/testimonial-emma.jpg",
  },
  {
    name: "James Liu",
    program: "Competition Prep",
    content: "The competition preparation program gave me the confidence and skills to compete at state level.",
    rating: 5,
    image: "/testimonial-james.jpg",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden md:ml-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              🏆 Specialized Programs
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance">
              Badminton
              <span className="text-primary block">Programs & Camps</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Intensive programs designed to accelerate your badminton journey. From holiday camps to competition
              preparation, we have something for every player.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Specialized Programs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our range of intensive programs designed to take your game to the next level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`relative ${program.popular ? "ring-2 ring-primary" : ""}`}>
                {program.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}

                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{program.price}</div>
                    <Badge variant="outline">{program.ages}</Badge>
                  </div>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{program.ages}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Program Includes:</h4>
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Upcoming Dates:</h4>
                    {program.nextDates.map((date, dateIndex) => (
                      <div key={dateIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{date}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant={program.popular ? "default" : "outline"}>
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Programs?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our programs are designed with proven methodologies and delivered by experienced coaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="text-muted-foreground">
                Our structured programs have helped hundreds of players achieve their goals and reach new levels.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Focused Learning</h3>
              <p className="text-muted-foreground">
                Each program targets specific skills and aspects of the game for maximum improvement.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Coaching</h3>
              <p className="text-muted-foreground">
                Learn from qualified coaches with extensive experience in player development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from players who have experienced the transformation our programs provide.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Program?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Spaces fill up quickly! Register early to secure your spot in our next program.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="px-6">
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
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
