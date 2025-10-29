import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Trophy } from "lucide-react"
import Image from "next/image"
import { ExploreButton } from "@/components/ui/ExploreButton"

export function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/badminton-player-in-action-shot-with-racket.jpg"
          alt="Professional badminton player in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-4 animate-fade-in pl-8">
          <Badge variant="secondary" className="w-fit">
            🏆 Bangalore's Leading Badminton Center - Racketek Academy
          </Badge>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Master Your
              <span className="text-primary block">Badminton Game</span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Experience top-class badminton coaching at Racketek Academy in Bangalore.
              Transform your potential into performance with our expert trainers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="/contact">
              <Button size="lg" className="text-xl px-10 py-6 w-fit">
                Join Racketek Now
              </Button>
            </a>
            <ExploreButton />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 pt-3">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold text-white">400+</span>
              </div>
              <p className="text-base text-gray-300">Players Coached</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold text-white">4.8</span>
              </div>
              <p className="text-base text-gray-300">Player Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold text-white">10+</span>
              </div>
              <p className="text-base text-gray-300">Certified Coaches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
