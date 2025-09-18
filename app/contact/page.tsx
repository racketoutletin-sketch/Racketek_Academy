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
    details: "799 699 25 99",
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
    details: "Multiple venues across Bengaluru",
    description: "Find a convenient location near you",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9AM-9PM, Weekends: 9AM-5PM",
    description: "We're here when you need us",
  },
]

const faqs = [
  {
    question: "What should I bring to my first session?",
    answer:
      "Just comfortable sports clothing and indoor court shoes. We provide rackets and shuttlecocks for beginners.",
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Yes! We offer a discounted first session so you can experience our coaching style before committing.",
  },
  {
    question: "What age groups do you coach?",
    answer:
      "We coach all ages from 7 years old to adults. Our programs are tailored to different age groups and skill levels.",
  },
  {
    question: "How do I book a session?",
    answer: "You can book online through our website, call us directly for easy scheduling.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden md:ml-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance">
              Contact
              <span className="text-primary block">Racketek Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to start your badminton journey? Have questions about our programs? We're here to help and would
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 md:ml-10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6">
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

      {/* Contact Form & Map */}
      <section className="py-10 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6">
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
                  <Input id="phone" type="tel" placeholder="0423 207 794" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">I'm Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online-membership">Online Membership</SelectItem>
                      <SelectItem value="group-sessions">Group Sessions</SelectItem>
                      <SelectItem value="private-coaching">Private Coaching</SelectItem>
                      <SelectItem value="holiday-camps">Holiday Camps</SelectItem>
                      <SelectItem value="competition-prep">Competition Preparation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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

            {/* Quick Actions & Info */}
            <div className="space-y-6 md:ml-10">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <div className="space-y-4">
                  <Button className="w-full justify-start" size="lg">
                    <Calendar className="mr-3 h-5 w-5" />
                    Book a Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now: 799 699 25 99
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                    <Mail className="mr-3 h-5 w-5" />
                    Email Us
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Our Locations</CardTitle>
                </CardHeader>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-semibold">Racketek Academy - Koramangala</h3>
                            <p className="text-sm text-muted-foreground">123 1st Main, Koramangala, Bangalore 560034</p>
                            <p className="text-sm text-muted-foreground">Mon-Fri: 7AM-9PM, Weekends: 8AM-7PM</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                            <h3 className="font-semibold">Racketek Academy - Whitefield</h3>
                            <p className="text-sm text-muted-foreground">456 ITPL Road, Whitefield, Bangalore 560066</p>
                            <p className="text-sm text-muted-foreground">Tue-Thu: 6PM-10PM, Weekends: 9AM-5PM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-10 text-center bg-primary/85 text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - your badminton journey starts with a single step. Contact us today!
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
              Call Now
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
