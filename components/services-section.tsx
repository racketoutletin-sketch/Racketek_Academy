import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Users, User, Calendar, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Online Coaching Membership",
      description: "Virtual coaching with video analysis, technique guides, and personalized feedback",
      price: "₹7,999/month",
      features: ["Video analysis", "Technique guides", "Live Q&A sessions", "Progress tracking"],
      badge: "Most Popular",
      href: "/online-membership",
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Local in-person group training with structured skill development",
      price: "₹3,500 per session",
      features: ["Small groups (max 8)", "All skill levels", "Equipment provided", "Flexible scheduling"],
      badge: "Local Favorite",
      href: "/coaching",
    },
    {
      icon: User,
      title: "Private Coaching",
      description: "One-on-one personalized training tailored to your specific needs",
      price: "From ₹6,500/hour",
      features: ["Customized training", "Flexible locations", "Racket & shuttles included", "Progress reports"],
      badge: null,
      href: "/coaching",
    },
    {
      icon: Calendar,
      title: "Holiday Programs",
      description: "5-day intensive camps during school holidays for rapid improvement",
      price: "₹22,000 per camp",
      features: ["5 full days", "All skill levels", "Daily progress tracking", "Certificate included"],
      badge: "Limited Spots",
      href: "/programs",
    },
    {
      icon: GraduationCap,
      title: "Skill Clinics",
      description: "Specialized 3.5-hour workshops focusing on specific techniques",
      price: "₹15,000 per clinic",
      features: ["Video analysis", "Small groups", "Technique filming", "Real-time feedback"],
      badge: null,
      href: "/programs",
    },
    {
      icon: BookOpen,
      title: "Free Resources",
      description: "Access our blog, technique guides, and training tips",
      price: "Free",
      features: ["Weekly blog posts", "Technique videos", "Training schedules", "Equipment guides"],
      badge: "Free",
      href: "/blog",
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
                <div className="pt-2">
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </div>
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
