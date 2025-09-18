import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const navigation = {
  services: [
    { name: "Online Membership", href: "/online-membership" },
    { name: "Group Sessions", href: "/coaching" },
    { name: "Private Coaching", href: "/coaching" },
    { name: "Holiday Programs", href: "/programs" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Coaches", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Book a Session", href: "/contact" },
    { name: "FAQ", href: "/contact" },
    { name: "Locations", href: "/contact" },
    { name: "Pricing", href: "/coaching" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
]

export function ModernFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest badminton tips, training insights, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center space-x-2 ml-8">
                <div className="h-18 w-18 rounded-4xl flex items-center justify-center space-x-2 ">
                  <img src="/logo.png" alt="Racketek Academy Logo" />
                </div>
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-red-500 to-gray-600 text-transparent bg-clip-text">Racketek Academy</span>
              </Link>
              <p className="text-muted-foreground max-w-md">
                Bengaluru's Racketek Academy, dedicated to developing players of all levels through expert
                coaching and innovative training methods.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>799 699 25 99</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>racketoutlet.in@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Multiple locations across Bengaluru</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Racketek Academy. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
