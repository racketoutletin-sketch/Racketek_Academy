import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Intermediate Player",
      content:
        "Racketek's coaching has elevated my game. The personalized drills targeting my backhand have shown incredible results!",
      rating: 5,
      image: "/asian-woman-smiling.png",
    },
    {
      name: "Arjun Patel",
      role: "Beginner",
      content:
        "Started badminton with Racketek, and now I'm confident enough to compete in local matches. The academy's atmosphere is so encouraging!",
      rating: 5,
      image: "/hispanic-man-smiling.jpg",
    },
    {
      name: "Anika Verma",
      role: "Advanced Player",
      content:
        "The masterclass sessions at Racketek are unparalleled. My coach pinpointed areas for improvement that even I hadn't noticed.",
      rating: 5,
      image: "/caucasian-woman-smiling.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Parent",
      content: "My son attended the summer camp at Racketek and absolutely loved it! His skills improved significantly.",
      rating: 5,
      image: "/asian-man-smiling.png",
    },
    {
      name: "Neha Kapoor",
      role: "Club Player",
      content:
        "The footwork training sessions at Racketek are top-notch. My agility on the court has improved dramatically.",
      rating: 5,
      image: "/smiling-woman-short-hair.png",
    },
    {
      name: "Rajesh Kumar",
      role: "Returning Player",
      content:
        "After a long break, Racketek's customized program helped me regain my form quickly. The coaches are extremely supportive.",
      rating: 5,
      image: "/middle-aged-man-smiling.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Students Say About Racketek Academy</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Hear from our satisfied students who have transformed their badminton game with Racketek Academy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
