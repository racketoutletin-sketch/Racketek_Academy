"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 961 5961 999",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: "racketoutlet.in@gmail.com",
    description: "Send us your questions anytime",
  },
  {
    icon: MapPin,
    title: "Locations",
    details: "Bengaluru",
    description: "Find a convenient location near you",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9AM-9PM, Weekends: 9AM-5PM",
    description: "We're here when you need us",
  },
]

const faq = [
  {
    question: "What should I bring to my first session?",
    answer:
      "Just comfortable sports clothing and indoor court shoes. We provide rackets and shuttlecocks for beginners.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Yes! We offer a discounted first session so you can experience our coaching style before committing.",
  },
  {
    question: "What age groups do you coach?",
    answer:
      "We coach all ages from 7 years old to adults. Our programs are tailored to different age groups and skill levels.",
  },
  {
    question: "How do I book a session?",
    answer: "You can book online through our website or call us directly for easy scheduling.",
  },
]

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            📞 Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Contact <span className="text-primary block">Racketek Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ready to start your badminton journey? Have questions about our programs? We're here to help and would love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-4 px-4 md:px-8">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 shadow-sm hover:shadow-md transition">
                <CardContent className="p-0 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-primary font-medium">{info.details}</p>
                    <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id ="contact_form" className="py-16 bg-muted/30 px-4 md:px-8">
        <div className="container grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="p-6 lg:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" placeholder="799 699 25 99" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">I'm Interested In</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                 <SelectContent className="space-y-2 p-2">
  {/* Kids Section */}
  <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
    👧 Kids’ Batches
  </div>
  <SelectItem value="kids-beginner1">🕓 Beginner 1 → 4:00 – 5:00 PM</SelectItem>
  <SelectItem value="kids-beginner2">🕔 Beginner 2 → 5:00 – 6:00 PM</SelectItem>
  <SelectItem value="kids-amateur">🎯 Amateur → 4:00 – 5:30 PM</SelectItem>
  <SelectItem value="kids-intermediate">💪 Intermediate → 5:00 – 7:00 PM</SelectItem>
  <SelectItem value="kids-weekend">📅 Sat & Sun → 11:00 AM – 12:00 PM</SelectItem>
  <SelectItem value="kids-special">👧 Kids (Special) → 3:00 – 4:30 PM</SelectItem>

  <div className="border-t border-muted my-2" />

  {/* Adults Section */}
  <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
    👨‍👩‍👧 Adults’ Classes
  </div>
  <SelectItem value="adults-morning1">🌅 Morning → 7:00 – 8:00 AM</SelectItem>
  <SelectItem value="adults-morning2">🌄 Morning → 8:00 – 9:00 AM</SelectItem>
  <SelectItem value="adults-evening">🌇 Evening → 7:00 – 8:00 PM</SelectItem>
  <SelectItem value="adults-weekend">📅 Sat & Sun → 11:00 AM – 12:30 PM (Adults)</SelectItem>
    <div className="border-t border-muted my-2" />
  <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
    👨‍👩‍👧 Membership
  </div>
<SelectItem value="Monthly Membership">📅 Monthly Membership</SelectItem>
<SelectItem value="Annual Membership">🏆 Annual Membership</SelectItem>
<SelectItem value="Family Membership">👨‍👩‍👧 Family Membership</SelectItem>

</SelectContent>

                </Select>
              </div>


              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your badminton experience and what you're looking to achieve..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6 lg:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
<div className="space-y-4">
  {/* Book a Session — scroll to contact form */}
  <Button
    className="w-full justify-start"
    size="lg"
  >
    <Calendar className="mr-3 h-5 w-5" />
    Book a Session
  </Button>

  {/* Call Now */}
  <Button
    variant="outline"
    className="w-full justify-start"
    size="lg"
    onClick={() => (window.location.href = "tel:+919615961999")}
  >
    <Phone className="mr-3 h-5 w-5" />
    Call Now: +91 96159 61999
  </Button>

  {/* Chat with Us (WhatsApp) */}
  <Button
    variant="outline"
    className="w-full justify-start"
    size="lg"
    onClick={() =>
      window.open("https://wa.me/919615961999?text=Hi!%20I'm%20interested%20in%20your%20badminton%20programs.", "_blank")
    }
  >
    <Mail className="mr-3 h-5 w-5" />
    Chat with Us
  </Button>
</div>

            </Card>

            <Card className="p-6 lg:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">Our Locations</CardTitle>
              </CardHeader>
              <p className="text-muted-foreground">
                Visit us at our primary facility in Racketek Badminton Academy, Bengaluru.
              </p>
            </Card>

            <Card className="p-6 lg:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">Response Times</CardTitle>
              </CardHeader>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email inquiries</span>
                  <Badge variant="secondary">Within 24 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Phone calls</span>
                  <Badge variant="secondary">Immediate</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Booking requests</span>
                  <Badge variant="secondary">Within 2 hours</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section id = "maps" className="px-4 md:px-8 bg-muted/30">
      {/* Google Map */}
            <div className="mt-6">
              <Card className="overflow-hidden shadow-md rounded-xl">
                <iframe
                  title="Racketek Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9864702541086!2d77.70922227484023!3d12.908590987401027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13df5874c4a5%3A0xcb87b2a620d26688!2sRACKETEK%20BADMINTON%20ACADEMY!5e0!3m2!1sen!2sin!4v1761714106879!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[450px] border-0"
                ></iframe>
              </Card>
            </div>
      </section>

      {/* FAQ Section */}
      {faq?.length > 0 && (
        <section id="faq" className="py-16 px-4 md:px-8 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick answers to common questions. Can't find what you're looking for? Contact us directly.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {faq.map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full text-left flex justify-between items-center px-6 font-medium text-gray-900 hover:bg-muted/40 transition-colors duration-200"
                    aria-expanded={openFAQ === i}
                  >
                    <span className="text-lg">{item.question}</span>
                    <span className="text-2xl text-muted-foreground">{openFAQ === i ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <CardContent className="px-6 pb-5 text-muted-foreground">
                          {item.answer}
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary/85 text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait — your badminton journey starts with a single step. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <a href="#contact_form">Book Your First Session</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
               onClick={() => (window.location.href = "tel:+919615961999")}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500 mt-8">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
