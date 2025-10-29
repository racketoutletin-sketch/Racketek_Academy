"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
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
      { name: "Beginner", href: "/programs/beginner" },
      { name: "Amateur", href: "/programs/amateur" },
      { name: "Intermediate/Advanced", href: "/programs/advanced" },
      { name: "Holiday", href: "/programs/holiday" },
      { name: "Personal Coaching", href: "/programs/personal" },
      { name: "Demo Class", href: "/programs/demo" },
    ],
  },
        { name: "Membership", href: "/membership" },
  {
    name: "Coaches",
    children: [
      { name: "Our Coaches", href: "/coaches" },
      { name: "Apply as Coach", href: "/coaches/hire" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up")

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const diff = currentScrollY - lastScrollY

          // Add a scroll threshold (10px) to prevent flickering
          if (Math.abs(diff) > 30) {
            if (diff > 0 && scrollDir !== "down") {
              setScrollDir("down")
            } else if (diff < 0 && scrollDir !== "up") {
              setScrollDir("up")
            }
            lastScrollY = currentScrollY
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDir])

  const isShrunk = scrollDir === "down"

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-500 ease-in-out`}
      style={{
        height: isShrunk ? "56px" : "80px",
        boxShadow: isShrunk ? "0 2px 6px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-12 transition-all duration-300">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-2">
          <div
            className="flex items-center justify-center transition-all duration-500 ease-in-out"
            style={{
              width: isShrunk ? "50px" : "72px",
              height: isShrunk ? "40px" : "72px",
            }}
          >
            <img
              src="/logo.png"
              alt="Racketek Academy Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-600 transition-all duration-500 ease-in-out`}
            style={{ fontSize: isShrunk ? "1rem" : "1.25rem" }}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.racketoutlet.in/" target="_blank" rel="noopener noreferrer">
            <Button>Shop us</Button>
          </a>
          <a href="https://www.tournament365.in/" target="_blank" rel="noopener noreferrer">
            <Button>Events</Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-10 w-10" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] ml-4 overflow-y-auto"
          >
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

              {/* Mobile Buttons */}
              <div className="pt-4 border-t flex flex-col space-y-3">
                <a href="https://www.racketoutlet.in/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Shop us</Button>
                </a>
                <a href="https://www.tournament365.in/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Events</Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
