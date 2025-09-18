import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Online Coaching", href: "#online" },
    { name: "Group Sessions", href: "#group" },
    { name: "Private Coaching", href: "#private" },
    { name: "Holiday Programs", href: "#holiday" },
    { name: "Skill Clinics", href: "#clinics" },
    { name: "Blog", href: "#blog" },
  ]

  const locations = [
    "Melbourne Sports Centre",
    "Richmond Recreation Centre",
    "Hawthorn Community Centre",
    "Glen Waverley Sports Hub",
  ]

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary">The Badminton Hub</h3>
              <p className="text-sm text-muted-foreground">Melbourne</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert badminton coaching in Melbourne with online membership, group sessions, and personalized training
              programs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(03) 9123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@badmintonhubmelb.com.au</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold">Training Locations</h4>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Get weekly tips, training schedules, and exclusive offers.</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="text-sm" />
              <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 The Badminton Hub Melbourne. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
