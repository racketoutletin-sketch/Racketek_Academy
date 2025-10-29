import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Users, User, Calendar, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
  {
    icon: GraduationCap,
    title: "Beginner Program",
    description:
      "Perfect for newcomers to badminton — learn the basics of grip, footwork, and rally consistency.",
    features: [
      "Fundamentals of strokes",
      "Basic footwork patterns",
      "Game awareness training",
      "Beginner-friendly drills",
    ],
    badge: "Start Here",
    href: "/programs/beginner",
  },
  {
    icon: Users,
    title: "Amateur Program",
    description:
      "Designed for players who understand the basics and want to improve gameplay consistency and endurance.",
    features: [
      "Match-based training",
      "Intermediate-level drills",
      "Physical conditioning",
      "Game analysis & feedback",
    ],
    badge: "Popular Choice",
    href: "/programs/amateur",
  },
  {
    icon: Monitor,
    title: "Intermediate / Advanced Program",
    description:
      "High-intensity sessions focused on competition readiness, advanced tactics, and skill refinement.",
    features: [
      "Advanced rally patterns",
      "Tactical play & positioning",
      "Endurance & speed training",
      "Tournament preparation",
    ],
    badge: "Pro Level",
    href: "/programs/advanced",
  },
  {
    icon: Calendar,
    title: "Holiday Program",
    description:
      "Short-term intensive camps during holidays to boost player performance and fitness.",
    features: [
      "5-day coaching camp",
      "Skill development focus",
      "Daily progress review",
      "Certificate of completion",
    ],
    badge: "Limited Spots",
    href: "/programs/holiday",
  },
  {
    icon: User,
    title: "Personal Coaching",
    description:
      "One-on-one personalized training sessions tailored to individual goals and skill gaps.",
    features: [
      "Custom session plans",
      "Private training slots",
      "Video analysis support",
      "Performance tracking",
    ],
    badge: "Premium",
    href: "/programs/personal",
  },
  {
    icon: BookOpen,
    title: "Demo Class",
    description:
      "Try a single session to experience our structured coaching and training environment.",
    features: [
      "Free trial session",
      "Coach assessment",
      "Skill level evaluation",
      "Feedback & recommendations",
    ],
    badge: "Free Trial",
    href: "/programs/demo",
  },
]


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Choose Your Training Path</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            From beginner to advanced, we have the perfect coaching solution for your badminton journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {service.badge && (
                <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">{service.badge}</Badge>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 group" asChild>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
