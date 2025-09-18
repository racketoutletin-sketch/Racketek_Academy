"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, Maximize } from "lucide-react"
import { Card } from "@/components/ui/card"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    const video = document.getElementById("academy-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Why Our Academy Stands Out
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes The Badminton Hub Melbourne the premier choice for badminton training in Australia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    id="academy-video"
                    className="w-full h-full object-cover"
                    poster="/video-thumbnail.jpg"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    controls={false}
                  >
                    <source src="/academy-intro-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/10 transition-colors">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-white shadow-2xl group-hover:scale-110 transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </Button>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handlePlayPause}
                      className="bg-black/50 hover:bg-black/70 text-white border-0"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <div className="flex-1"></div>
                    <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">World-Class Training Facility</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our state-of-the-art facility features professional-grade courts, advanced training equipment, and a
                  supportive environment designed to help players of all levels reach their potential.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">15+</span>
                  </div>
                  <h4 className="font-semibold">Years Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Over a decade of coaching excellence and player development
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                  <h4 className="font-semibold">Students Trained</h4>
                  <p className="text-sm text-muted-foreground">
                    Hundreds of players improved their game with our methods
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">24/7</span>
                  </div>
                  <h4 className="font-semibold">Online Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock access to training materials and support
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">95%</span>
                  </div>
                  <h4 className="font-semibold">Success Rate</h4>
                  <p className="text-sm text-muted-foreground">Students see measurable improvement within 3 months</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
