"use client";

import { useState } from "react";
import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface AcademyCardProps {
  name: string;
  description: string;
  address: string;
  courts: number;
  coaches: number;
  contactNumber: string;
  images?: string[]; // multiple images
}

function AcademyCard({
  name,
  description,
  address,
  courts,
  coaches,
  contactNumber,
  images = ["/badminton-center.jpg"],
}: AcademyCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="grid lg:grid-cols-1">
        {/* Carousel Image */}
        <div className="relative h-72 w-full lg:h-122 lg:col-span-1 bg-amber-200">
          <Image
            src={images[currentIndex]}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="object-cover"
            priority
          />
          {/* Left & Right buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                onClick={() => goToImage(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === currentIndex ? "bg-primary" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:col-span-2 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit text-sm md:text-base">
              🏸 Featured Academy
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm md:text-base mt-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>{coaches} Coaches</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span>{courts} Courts</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>{contactNumber}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="text-lg w-full sm:w-fit">
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg w-full sm:w-fit border-white/30 text-primary hover:bg-primary/10"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// CenterInfo wrapper
const CenterInfo = (props: AcademyCardProps) => <AcademyCard {...props} />;

export default function CentersPage() {
  const centers = [
    {
      name: "Bengaluru Badminton Academy",
      address: "10 MG Road, Bengaluru, Karnataka, India",
      description:
        "A premier badminton academy in the heart of Bengaluru...",
      courts: 6,
      coaches: 4,
      contactNumber: "+91-9876543210",
      images: [
        "/image_5.jpg",
        "/image_2.jpg",
        "/image_3.jpg",
      ],
    },
    {
      name: "Karnataka Sports Center",
      address: "25 Jayanagar, Bengaluru, Karnataka, India",
      description: "A state-of-the-art sports center in Jayanagar...",
      courts: 10,
      coaches: 7,
      contactNumber: "+91-8012345678",
      images: [
        "/image_2.jpg",
        "/image_5.jpg",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <ModernNavigation />
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-12 text-center">Our <span className="text-primary">Centers</span></h1>
          <div className="mx-8">
            {centers.map((center, index) => (
              <CenterInfo key={index} {...center} />
            ))}
          </div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}
