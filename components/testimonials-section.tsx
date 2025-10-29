"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Gaurav Kulshreshtha",
      role: "Parent of Junior Player",
      content:
        "My 10-year-old son Avyan began his badminton journey at Racketek two years ago, and the transformation has been incredible. He's blossomed into an exceptional player thanks to Ram Sir’s dedication and guidance.",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "Shilpa Bandekar",
      role: "Parent",
      content:
        "My child is being coached by Ram Sir at Racketek Badminton Academy. The courts are well-maintained and the coaching is top-notch. Ram Sir knows exactly how to teach children and enhance their skills.",
      rating: 5,
      image: "/women_placeholder.png",
    },
    {
      name: "Mudit Arora",
      role: "Amateur Player",
      content:
        "Best academy in Bangalore! Ram is an experienced coach with immense passion for badminton. I’ve seen real improvement and would highly recommend Racketek to all levels.",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "lilmissdahiya (Ginni Dahiya)",
      role: "Adult Learner",
      content:
        "I've been learning badminton under Ram Sir for two months. He’s very patient and hardworking, understanding your strengths and weaknesses and keeping sessions fun and detail-oriented.",
      rating: 5,
      image: "/women_placeholder.png",
    },
    {
      name: "Palankeswara Rao N.V.",
      role: "Parent",
      content:
        "If your child is passionate about badminton, this is the place to go. The coach maintains discipline while encouraging excellence. Highly recommended for serious learners.",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "Neha Gupta",
      role: "Parent",
      content:
        "Ram Sir is deeply passionate about badminton and genuinely cares about the kids. My child’s confidence and game have improved tremendously under his coaching.",
      rating: 5,
      image: "/women_placeholder.png",
    },
    {
      name: "Sri Kamal Puvvada",
      role: "Parent",
      content:
        "I enrolled my 6-year-old in Racketek and he’s loving it from day one! The coaches are friendly, professional, and truly passionate about teaching kids.",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "Ashish Shukla",
      role: "Beginner Player",
      content:
        "Coaching is excellent — every player gets fair opportunities to play and improve. The positive environment helps bring out the best in everyone.",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "Deepa Nair",
      role: "Adult Player",
      content:
        "Super happy with the coaching and the personal attention given to each player. Thank you, Racketek, for such a great experience!",
      rating: 5,
      image: "/women_placeholder.png",
    },
    {
      name: "Shruthi Rao",
      role: "Parent",
      content:
        "Racketek Academy is a fantastic place for young talents. Ram Sir not only coaches kids physically but also motivates them mentally. Highly recommended for parents!",
      rating: 5,
      image: "/women_placeholder.png",
    },
    {
      name: "Vasu Janardhan",
      role: "Player",
      content:
        "Amazing coach with great technique and talent. Every class is enjoyable and productive!",
      rating: 5,
      image: "/men_placeholder.png",
    },
    {
      name: "Nikita Sinha",
      role: "Intermediate Player",
      content:
        "Training with Ram Sir has been outstanding. He focuses on both technical and fitness aspects and ensures consistent progress. Very motivating!",
      rating: 5,
      image: "/women_placeholder.png",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say About Racketek Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our students and parents who’ve seen incredible progress and joy through our badminton training.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !bg-red/40 !opacity-100 transition-all duration-300",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-primary !scale-110",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-[300px] sm:h-[320px] bg-card/80 backdrop-blur-md border border-border hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed italic line-clamp-5 overflow-hidden">
                        “{testimonial.content}”
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons OUTSIDE */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            type="button"
            aria-label="Previous"
            className="custom-prev w-12 h-12 rounded-full bg-white/80 hover:bg-primary hover:text-white text-primary shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            aria-label="Next"
            className="custom-next w-12 h-12 rounded-full bg-white/80 hover:bg-primary hover:text-white text-primary shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
