import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Trophy } from "lucide-react"

export function CTASection() {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Free 15-minute consultation",
    },
    {
      icon: Clock,
      text: "Flexible scheduling options",
    },
    {
      icon: Users,
      text: "Expert coaching team",
    },
    {
      icon: Trophy,
      text: "Proven improvement methods",
    },
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Elevate Your Game?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Book your free consultation today and discover how our expert coaching can transform your badminton skills
              in just weeks.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Book Your Free 15 Min Call
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Download Free Guide
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">No commitment required • Response within 24 hours</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
