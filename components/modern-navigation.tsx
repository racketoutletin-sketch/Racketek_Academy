"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    children: [
      { name: "Beginner Program", href: "/programs/beginner" },
      { name: "Amateur", href: "/programs/amateur" },
      { name: "Intermediate Program", href: "/programs/intermediate" },
      { name: "Advanced Program", href: "/programs/advanced" },

    ],
  },
  { name: "Centers", href: "/centers" },
  {
    name: "Coaches",
    children: [
      { name: "Our Coaches", href: "/coaches" },
      { name: "Apply as Coach", href: "/coaches/hire" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Adjust the scroll threshold as needed
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300`}
      style={{
        height: isScrolled ? "56px" : "80px", // shrink header height
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-12 transition-all duration-300">
        <Link href="/" className="flex items-center space-x-2">
          <div
            className="flex items-center justify-center transition-all duration-300"
            style={{
              width: isScrolled ? "50px" : "72px",
              height: isScrolled ? "40px" : "72px",
            }}
          >
            <img src="/logo.png" alt="Racketek Academy Logo" className="w-full h-full object-contain" />
          </div>
          <span
            className={`font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-600 transition-all duration-300`}
            style={{ fontSize: isScrolled ? "1rem" : "1.25rem" }}
          >
            Racketek Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>799 699 25 99</span>
          </div>
          <Button>Book Now</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-10 w-10" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] ml-4 overflow-y-auto">
            <div className="flex flex-col space-y-4 mt-6 px-4">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center text-lg font-semibold w-full"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 flex flex-col space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="text-md text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span>799 699 25 99</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Mail className="h-4 w-4" />
                  <span>racketoutlet.in@gmail.com</span>
                </div>
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
