"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExploreButtonProps {
  size?: string
  variant?: string
  className?: string
}

export function ExploreButton({
  size = "lg",
  variant = "outline",
  className = "",
}: ExploreButtonProps) {
  const handleScroll = () => {
    const section = document.getElementById("whyChooseUs")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      size={size as any}
      variant={variant as any}
        className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 w-fit"
      onClick={handleScroll}
    >
      <Play className="mr-2 h-5 w-5" />
      Explore Our Academy
    </Button>
  )
}
