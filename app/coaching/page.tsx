import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const coachingOptions = [
  {
    title: "Group Sessions",
    price: "₹800",
    duration: "60 minutes",
    maxPlayers: "4-6 players",
    description: "Develop your skills and enjoy social play in our group sessions.",
    features: ["Technique drills", "Match simulations", "Team play", "All levels"],
    popular: false,
  },
  {
    title: "Private Coaching",
    price: "₹1500",
    duration: "60 minutes",
    maxPlayers: "1-on-1",
    description: "Personalized coaching tailored to your individual goals and needs.",
    features: ["Customized plan", "Video feedback", "Form correction", "Performance tracking"],
    popular: true,
  },
  {
    title: "Semi-Private",
    price: "₹1000",
    duration: "60 minutes",
    maxPlayers: "2 players",
    description: "Benefit from focused attention in a small group setting.",
    features: ["Partner drills", "Tactical training", "Flexible timings", "Shared learning"],
    popular: false,
  },
]

const coaches = [
  {
    name: "Priya Sharma",
    title: "Head Coach",
    experience: "10+ years",
    specialties: ["Advanced Techniques", "Competition Strategy", "Complete Fitness"],
    image: "/coach-sarah.jpg",
    bio: "National level player with a passion for developing badminton talent.",
  },
  {
    name: "Rahul Verma",
    title: "Youth Coach",
    experience: "5+ years",
    specialties: ["Beginner Programs", "Junior Development", "Fun Activities"],
    image: "/coach-david.jpg",
    bio: "Experienced in making badminton enjoyable and accessible for young players.",
  },
  {
    name: "Anika Patel",
    title: "Strategy Coach",
    experience: "7+ years",
    specialties: ["Match Analysis", "Mental Toughness", "Game Planning"],
    image: "/coach-sarah.jpg",
    bio: "Expert in developing winning strategies for competitive badminton.",
  },
]

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

  <div className="container relative">
    <div className="items-center text-center mb-8">
            <Badge variant="secondary" className="mb-[-12px z-10">
          🎯 Expert Coaching
        </Badge>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Left */}
      <div className="flex flex-col items-center text-center">
        {/* Badge floating above */}


        {/* Text Box */}
        <div className="p-15 rounded-xl w-full max-w-3xl space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-black block">Professional</span>
            <span className="text-red-600 block">Badminton Coaching</span>
          </h1>
          <p className="text-xl text-gray-600">
                  Elevate your game at Racketek Academy in Bangalore. From beginners to advanced players, we provide
                  expert coaching for all levels.
          </p>
        </div>
      </div>

      {/* Image Right */}
      <div className="flex justify-center md:justify-center">
        <img
          src="/professional.jpg"
          alt="Professional Badminton Coaching"
          className="w-full max-w-lg object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


      {/* Coaching Options */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Coaching Style</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select from group sessions, private coaching, and semi-private options to match your preferences and
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coachingOptions.map((option, index) => (
              <Card key={index} className={`relative ${option.popular ? "ring-2 ring-primary" : ""}`}>
                {option.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{option.price}</div>
                    <div className="text-sm text-muted-foreground">per session</div>
                  </div>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{option.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{option.maxPlayers}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                  </div>
            ))}
          </div>

                  <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-red-500">Meet Our Expert Coaches</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn from experienced professionals dedicated to helping you achieve your badminton goals.
                </p>
              </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{coach.name}</h3>
                      <p className="text-primary font-medium">{coach.title}</p>
                      <p className="text-sm text-muted-foreground">{coach.experience} experience</p>
                    </div>

                    <p className="text-muted-foreground">{coach.bio}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                    </div>
            </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      Book with {coach.name.split(" ")[0]}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="py-20 md:ml-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Convenient Locations</h2>
                <p className="text-muted-foreground text-lg">
                  Racketek Academy offers coaching at multiple locations across Bangalore for your convenience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Racketek Academy - Koramangala</h3>
                    <p className="text-muted-foreground">123 1st Main, Koramangala, Bangalore 560034</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 7AM-9PM, Weekends: 8AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Racketek Academy - Whitefield</h3>
                    <p className="text-muted-foreground">456 ITPL Road, Whitefield, Bangalore 560066</p>
                    <p className="text-sm text-muted-foreground">Tue-Thu: 6PM-10PM, Weekends: 9AM-5PM</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                View Full Schedule
              </Button>
            </div>

            <div className="relative">
              <Card className="p-6">
                <div className=" rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/coaching-facility.jpg"
                    alt="Modern badminton coaching facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Train at our world-class facilities with top-notch equipment for optimal performance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Professional Courts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Quality Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Climate Controlled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Parking Available</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-center bg-primary/85 text-white rounded-2xl mx-2 md:mx-6 lg:mx-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Improve Your Game?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Start your journey with Racketek Academy and see significant improvements in your badminton skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Book First Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Contact Coach
            </Button>
          </div>
        </div>
      </section>

            <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights
          reserved.
        </div>
      </footer>
    </div>
  )
}
