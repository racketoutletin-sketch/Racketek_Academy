import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Trophy } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Master Your <span className="text-primary">Badminton</span> Game
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Expert coaching in Melbourne with online membership, group sessions, and personalized training.
                Transform your technique with proven methods.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Book Free 15-Min Chat
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Download Footwork Guide
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 from 200+ students</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8">
              <img
                src="/badminton-player-in-action-shot-with-racket.jpg"
                alt="Professional badminton player in action"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Floating stats cards */}
            <Card className="absolute -top-4 -left-4 bg-card/95 backdrop-blur">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">500+</p>
                    <p className="text-sm text-muted-foreground">Students Trained</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
