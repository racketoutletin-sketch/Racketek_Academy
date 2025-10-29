"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {ModernFooter} from "@/components/modern-footer"
import {
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  DollarSign,
  BadgeCheck,
  Star,
  Gift,
  ShieldCheck,
  Infinity as InfinityIcon,
} from "lucide-react"
import Image from "next/image"

const membershipBenefits = [
  {
    title: "Unlimited Court Access",
    description:
      "Book courts as often as you wish during open hours with priority member reservation.",
    icon: InfinityIcon,
  },
  {
    title: "Exclusive Member Events",
    description:
      "Participate in tournaments, masterclasses, and socials — just for Racketek members.",
    icon: Gift,
  },
  {
    title: "Discounted Coaching",
    description:
      "Save 15% on all group & 1:1 training fees, including workshops and clinics.",
    icon: DollarSign,
  },
  {
    title: "Gear and Pro Shop Discounts",
    description:
      "Get up to 20% off rackets, shoes, apparel, and stringing in our on-site store.",
    icon: BadgeCheck,
  },
  {
    title: "Early Booking Privileges",
    description:
      "Reserve court slots and coaching sessions before they open to the public.",
    icon: Calendar,
  },
  {
    title: "Personal Accident Insurance",
    description:
      "Feel secure on court with inclusive injury insurance for all members.",
    icon: ShieldCheck,
  },
]

const testimonials = [
  {
    name: "Sandeep Mathur",
    program: "Annual Member",
    content:
      "Becoming a Racketek member was the best decision for my game. I play more often, make new friends, and save on every session.",
    rating: 5,
    image: "/men_placeholder.png",
  },
  {
    name: "Isha Kapoor",
    program: "Family Membership",
    content:
      "The member events are exciting and the coaching discounts mean my kids get more time with the best trainers.",
    rating: 5,
    image: "/women_placeholder.png",
  },
]

const membershipPlans = [
  {
    title: "Monthly Membership",
    price: "₹1,999",
    billing: "/month",
    features: [
      "Unlimited court bookings",
      "Member event access",
      "10% Pro Shop discount",
      "Priority support",
    ],
    popular: false,
  },
  {
    title: "Annual Membership",
    price: "₹19,999",
    billing: "/year",
    features: [
      "Everything in Monthly, plus:",
      "15% coaching discount",
      "Free T-shirt & goodies",
      "Personal accident insurance",
      "2 free guest passes/month",
    ],
    popular: true,
  },
  {
    title: "Family Membership",
    price: "₹34,999",
    billing: "/year",
    features: [
      "2 adults + 2 kids included",
      "All Annual benefits for family",
      "Birthday booking privileges",
      "4 guest passes/month",
    ],
    popular: false,
  },
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container relative text-center">
          <Badge variant="secondary" className="mb-4">
            🏸 Become a Member
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Racketek <span className="text-primary">Membership</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Unlock unlimited courts, member-exclusive events, discounts, and a thriving badminton community — all with a single membership.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Why Join as a Member?</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Level up your badminton lifestyle — enjoy freedom, savings, security, and a welcoming club culture.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {membershipBenefits.map((benefit, index) => (
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

      {/* Plans Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Simple, flexible plans for every player and family.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative group border-none shadow-lg hover:shadow-2xl transition-shadow ${
                  plan.popular ? "ring-2 ring-primary scale-105 z-10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="outline" className="bg-primary text-white border-none px-4 py-1 text-xs font-bold shadow">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <div className="flex justify-center items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.billing}</span>
                  </div>
                  <CardDescription>
                    <ul className="text-left inline-block space-y-2 mt-4">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={plan.popular ? "default" : "secondary"}
                    size="lg"
                    className="w-full font-semibold mt-6"
                    asChild
                  >
                    <a href="/register/membership">Join Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Members Speak</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            See why passionate shuttlers love Racketek membership.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Join Racketek!</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Become a member, play more, and belong to our passionate badminton family.
          </p>
          <Button size="lg" variant="secondary" className="px-8 font-semibold" asChild>
            <a href="/contact#contact-form">Become a Member</a>
          </Button>
        </div>
      </section>
      <ModernFooter />
    </div>
  )
}