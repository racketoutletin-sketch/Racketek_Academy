import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Image from "next/image"

const featuredPost = {
  title: "5 Essential Badminton Techniques Every Beginner Should Master",
  excerpt:
    "Starting your badminton journey? These fundamental techniques will set you up for success and help you progress faster than you ever thought possible.",
  author: "David Chen",
  date: "December 15, 2024",
  readTime: "8 min read",
  image: "/blog-featured.jpg",
  category: "Beginner Tips",
}

const blogPosts = [
  {
    title: "How to Choose the Right Badminton Racket",
    excerpt:
      "A comprehensive guide to selecting the perfect racket based on your playing style, skill level, and budget.",
    author: "Sarah Williams",
    date: "December 12, 2024",
    readTime: "6 min read",
    image: "/blog-racket-guide.jpg",
    category: "Equipment",
  },
  {
    title: "Mental Preparation for Badminton Competitions",
    excerpt:
      "Discover the psychological strategies that separate good players from great ones in competitive badminton.",
    author: "David Chen",
    date: "December 10, 2024",
    readTime: "10 min read",
    image: "/blog-mental-game.jpg",
    category: "Competition",
  },
  {
    title: "Common Badminton Injuries and How to Prevent Them",
    excerpt: "Stay injury-free with these expert tips on proper warm-up, technique, and recovery strategies.",
    author: "Dr. Michael Thompson",
    date: "December 8, 2024",
    readTime: "7 min read",
    image: "/blog-injury-prevention.jpg",
    category: "Health & Fitness",
  },
  {
    title: "The Evolution of Badminton: From Ancient Game to Olympic Sport",
    excerpt:
      "Explore the fascinating history of badminton and how it became one of the world's most popular racket sports.",
    author: "Emma Rodriguez",
    date: "December 5, 2024",
    readTime: "12 min read",
    image: "/blog-history.jpg",
    category: "History",
  },
  {
    title: "Footwork Fundamentals: Moving Like a Pro",
    excerpt: "Master the art of badminton footwork with these essential movement patterns and training exercises.",
    author: "David Chen",
    date: "December 3, 2024",
    readTime: "9 min read",
    image: "/blog-footwork.jpg",
    category: "Technique",
  },
  {
    title: "Nutrition for Badminton Players: Fuel Your Performance",
    excerpt: "Optimize your on-court performance with proper nutrition strategies before, during, and after matches.",
    author: "Lisa Chang",
    date: "December 1, 2024",
    readTime: "8 min read",
    image: "/blog-nutrition.jpg",
    category: "Health & Fitness",
  },
]

const categories = [
  "All Posts",
  "Beginner Tips",
  "Technique",
  "Equipment",
  "Competition",
  "Health & Fitness",
  "History",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden md:ml-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              📚 Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance">
              Badminton
              <span className="text-primary block">Blog & Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Expert insights, training tips, and everything you need to know about badminton. From beginner guides to
              advanced techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="text-sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            <p className="text-muted-foreground text-lg">
              Our latest and most popular content to help improve your game.
            </p>
          </div>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video md:aspect-square relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="space-y-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>

                  <h3 className="text-2xl font-bold text-balance">{featuredPost.title}</h3>

                  <p className="text-muted-foreground text-pretty">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-10 bg-muted/30 md:ml-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest tips, techniques, and badminton insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>

                    <h3 className="text-lg font-semibold text-balance group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm text-pretty line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="ghost" className="w-full justify-between p-0 h-auto text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5 md:ml-10">
        <div className="container">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <CardContent className="p-0 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
                <p className="text-muted-foreground">
                  Get the latest badminton tips, training insights, and exclusive content delivered to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button>Subscribe</Button>
              </div>

              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center bg-primary/85 text-white rounded-xl mx-4 md:mx-8 lg:mx-12 ">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Put Knowledge into Practice?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reading about badminton is great, but nothing beats hands-on coaching. Book a session and start applying
            what you've learned!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 m-auto">
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" m-auto px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Join Online Membership
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
