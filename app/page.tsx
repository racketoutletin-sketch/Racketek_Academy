import { ModernNavigation } from "@/components/modern-navigation"
import { ModernHero } from "@/components/modern-hero"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ModernFooter } from "@/components/modern-footer"
import { VideoSection } from "@/components/video-section"
// import { BlogSection } from "@/components/blog-section"
import { CentersSection } from "@/components/centers";
import dynamic from "next/dynamic";

const WhatsAppChat = dynamic(() => import("@/components/WhatsAppChat"), {
  ssr: false,
});

const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ModernNavigation />
      <ModernHero />
      <ServicesSection />
            <section id="cta">
      <CTASection />
</section>

      <section id="whyChooseUs">
      <VideoSection/>
</section>
      <CentersSection />


      {/* <BlogSection /> */}
      <TestimonialsSection />
      <ModernFooter />
          <WhatsAppChat />
          <BackToTop />
    </main>


  )
}
