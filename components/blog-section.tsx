import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Badminton Techniques Every Beginner Should Master",
      excerpt:
        "Learn the fundamental techniques that will set you up for success on the badminton court. From proper grip to footwork basics.",
      image: "/blog-techniques.jpg",
      author: "Coach David",
      date: "2024-01-15",
      category: "Techniques",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Mental Game: Building Confidence in Competitive Play",
      excerpt:
        "Discover strategies to overcome nerves and maintain focus during important matches. Mental preparation is key to peak performance.",
      image: "/blog-mental-game.jpg",
      author: "Coach Sarah",
      date: "2024-01-10",
      category: "Mental Training",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Equipment Guide: Choosing the Right Racket for Your Playing Style",
      excerpt:
        "Not all rackets are created equal. Learn how to select equipment that complements your strengths and improves your game.",
      image: "/blog-equipment.jpg",
      author: "Coach David",
      date: "2024-01-05",
      category: "Equipment",
      readTime: "6 min read",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Latest Insights
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            From Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, training insights, and badminton knowledge to help you improve your game
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary p-0">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
