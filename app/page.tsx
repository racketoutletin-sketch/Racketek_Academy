import { ModernNavigation } from "@/components/modern-navigation"
import { ModernHero } from "@/components/modern-hero"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ModernFooter } from "@/components/modern-footer"
import { VideoSection } from "@/components/video-section"
import { BlogSection } from "@/components/blog-section"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ModernNavigation />
      <ModernHero />
      <ServicesSection />
      <CTASection />
      <VideoSection />
      <BlogSection />
      <TestimonialsSection />
      <ModernFooter />
    </main>
  )
}
