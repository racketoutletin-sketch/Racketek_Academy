import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Trophy } from "lucide-react"
import Image from "next/image"

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 animate-fade-in">
          <Badge variant="secondary" className="w-fit">
            🏆 Bangalore's Leading Badminton Center - Racketek Academy
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance">
              Master Your
              <span className="text-primary block">Badminton Game</span>
            </h1>
            <p className="text-xl text-gray-200 text-pretty max-w-lg">
              Experience world-class badminton coaching at Racketek Academy in Bangalore. Transform your potential into performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Join Racketek Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Our Academy
            </Button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-white">800+</span>
              </div>
              <p className="text-sm text-gray-300">Players Coached</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-white">4.8</span>
              </div>
              <p className="text-sm text-gray-300">Player Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <p className="text-sm text-gray-300">Certified Coaches</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
