import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Play,
  Download,
  Users,
  Clock,
  Trophy,
  Monitor,
  Lightbulb,
  Award,
} from "lucide-react"
import Image from "next/image"
import { ShuttlecockIcon, ExploreIcon, WifiIcon } from "@/components/ui/icons"

const features = [
  "Weekly live coaching sessions",
  "Personalized training plans",
  "Video analysis & feedback",
  "Access to exclusive drills library",
  "Monthly progress assessments",
  "Community forum access",
  "Priority booking for workshops",
  "AI-powered performance analysis",
  "Exclusive webinars with top coaches",
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Intermediate Player",
    content:
      "The online membership transformed my game. The personalized feedback is incredible! My footwork has improved significantly!",
    rating: 5,
  },
  {
    name: "Arjun Verma",
    role: "Beginner",
    content:
      "Perfect for busy professionals. I can train on my schedule and still get expert guidance. The video analysis helped me identify key areas to improve.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Advanced Player",
    content:
      "The drills library is amazing. It's helped me refine my technique and improve my game strategy.",
    rating: 5,
  },
]

const onlineTrainingBenefits = [
  {
    title: "Personalized Feedback",
    description:
      "Receive detailed video analysis and feedback from expert coaches to improve your technique and strategy.",
    icon: Monitor,
  },
  {
    title: "Flexible Training Schedule",
    description:
      "Train at your own pace and on your own schedule with access to our mobile app and offline content.",
    icon: Clock,
  },
  {
    title: "Expert Guidance",
    description:
      "Learn from world-class badminton coaches with years of experience and a proven track record of success.",
    icon: Lightbulb,
  },
  {
    title: "Community Support",
    description:
      "Connect with other badminton players from around the world and share your progress and challenges in our community forum.",
    icon: Users,
  },
]

export default function OnlineMembershipPage() {
  return (
    <div className="min-h-screen">
      <div
        className="absolute inset-0 flex flex-wrap items-center justify-around pointer-events-none"
          aria-hidden="true"
      >
        <ShuttlecockIcon className="w-12 h-12 text-red-700 opacity-20 absolute top-0 left-0" />
        <ShuttlecockIcon className="w-12 h-12 text-red-700 opacity-20 absolute top-0 right-0" />
        <ShuttlecockIcon className="w-12 h-12 text-red-700 opacity-20 absolute bottom-0 left-0" />
        <ShuttlecockIcon className="w-12 h-12 text-red-700 opacity-20 absolute bottom-0 right-0" />
        <ShuttlecockIcon className="w-12 h-12 text-red-700 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <ShuttlecockIcon className="w-8 h-8 text-red-700 opacity-20 absolute top-1/4 left-1/4" />
        <ShuttlecockIcon className="w-8 h-8 text-red-700 opacity-20 absolute top-1/4 right-1/4" />
        <ShuttlecockIcon className="w-8 h-8 text-red-700 opacity-20 absolute bottom-1/4 left-1/4" />
        <ShuttlecockIcon className="w-8 h-8 text-red-700 opacity-20 absolute bottom-1/4 right-1/4" />
        <ShuttlecockIcon className="w-6 h-6 text-red-700 opacity-20 absolute top-1/3 left-1/3" />
        <ShuttlecockIcon className="w-6 h-6 text-red-700 opacity-20 absolute top-1/3 right-1/3" />
        <ShuttlecockIcon className="w-6 h-6 text-red-700 opacity-20 absolute bottom-1/3 left-1/3" />
        <ShuttlecockIcon className="w-6 h-6 text-red-700 opacity-20 absolute bottom-1/3 right-1/3" />
        <ShuttlecockIcon className="w-4 h-4 text-red-700 opacity-20 absolute top-1/5 left-1/5" />
        <ShuttlecockIcon className="w-4 h-4 text-red-700 opacity-20 absolute top-1/5 right-1/5" />
        <ShuttlecockIcon className="w-4 h-4 text-red-700 opacity-20 absolute bottom-1/5 left-1/5" />
        <ShuttlecockIcon className="w-4 h-4 text-red-700 opacity-20 absolute bottom-1/5 right-1/5" />
        <ShuttlecockIcon className="w-5 h-5 text-red-700 opacity-20 absolute top-2/5 left-2/5" />
        <ShuttlecockIcon className="w-5 h-5 text-red-700 opacity-20 absolute top-2/5 right-2/5" />
        <ShuttlecockIcon className="w-5 h-5 text-red-700 opacity-20 absolute bottom-2/5 left-2/5" />
        <ShuttlecockIcon className="w-5 h-5 text-red-700 opacity-20 absolute bottom-2/5 right-2/5" />
              </div>
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              🏆 Best Online Coaching
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Unlock Your Badminton Potential with{" "}
              <span className="text-primary block">
                Personalized Online Coaching
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Transform your game with expert guidance, customized training
              plans, and a supportive community. Start your journey to badminton
              mastery today!
            </p>
            <div className="flex items-center justify-center gap-4 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">₹7,999</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <Button size="lg" className="px-8">
                Join Now
              </Button>
        </div>
              </div>
            </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Online Badminton Coaching?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the benefits of personalized online training and how it
              can help you reach your badminton goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onlineTrainingBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 h-full flex flex-col justify-between"
              >
                <CardContent className="p-0 space-y-3">
                  <benefit.icon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
                  </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-muted/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features list */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Comprehensive Training, Expert Support
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our online membership provides a complete training solution,
                  combining professional coaching with a thriving community.
                </p>
              </div>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo video card */}
            <div className="relative">
              <Card className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                  <Image
                    src="/online-coaching-demo.jpg"
                    alt="Online coaching session demo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-full h-16 w-16"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">A Glimpse Inside</h3>
                <p className="text-muted-foreground mb-4">
                  Experience a preview of our coaching sessions and witness the
                  impact on our members.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Sample Session
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <span className="text-4xl font-bold">250+</span>
              </div>
              <h3 className="text-xl font-semibold">Active Members</h3>
              <p className="text-muted-foreground">
                A vibrant and growing badminton community
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <span className="text-4xl font-bold">75+</span>
              </div>
              <h3 className="text-xl font-semibold">Hours of Content</h3>
              <p className="text-muted-foreground">
                Extensive training library for all skill levels
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <h3 className="text-xl font-semibold">Member Satisfaction</h3>
              <p className="text-muted-foreground">
                Rated Excellent by our members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Real Results, Real Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our members and see how our online coaching has helped
              them elevate their game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Check key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 text-lg">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-primary/85 text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Elevate your skills with personalized coaching and a supportive
            community. Join now and experience the difference!
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Join Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights
          reserved.
        </div>
      </footer>
    </div>
  )
}
