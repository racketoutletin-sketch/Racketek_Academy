"use client";

import { useState } from "react";
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
  images?: string[];
  mapLink?: string;
}

function AcademyCard({
  name,
  description,
  address,
  courts,
  coaches,
  contactNumber,
  images = ["/badminton-center.jpg"],
  mapLink = "https://goo.gl/maps/",
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
    <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur rounded-xl shadow-lg overflow-hidden mb-10 hover:shadow-2xl transition-shadow duration-300">
      <div className="grid lg:grid-cols-1">
        {/* Image Carousel */}
        <div className="relative h-72 w-full lg:h-122 bg-gray-100">
          <Image
            src={images[currentIndex]}
            alt={name}
            fill
            className="object-cover"
            priority
          />

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

          {/* Dots Navigation */}
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

        {/* Details */}
        <div className="p-6 flex flex-col space-y-5">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit text-sm md:text-base">
              🏸 Featured Academy
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {description}
            </p>
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
            <Button
              size="lg"
              className="text-lg w-full sm:w-fit"
              onClick={() => (window.location.href = `tel:${contactNumber}`)}
            >
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg w-full sm:w-fit border-white/30 text-primary hover:bg-primary/10"
              onClick={() => window.open(mapLink, "_blank")}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CentersSection() {
  const centers = [
    {
      name: "RACKETEK BADMINTON ACADEMY",
      description:
        "A top-rated badminton club (5.0⭐, 33 reviews) located in Olympic Sports Arena, Bengaluru. Offers professional coaching, advanced training, and a friendly environment for all levels.",
      address:
        "Olympic Sports Arena, Chikkabellandur Main Rd, Chikkabellandur, Bengaluru, Karnataka 560035",
      courts: 4,
      coaches: 10,
      contactNumber: "+91-9615961999",
      images: ["/image_5.jpg", "/image_2.jpg", "/image_3.jpg"],
      mapLink:
        "https://maps.app.goo.gl/wH8jWSKmoQVaThct8",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Our <span className="text-primary">Center</span>
        </h1>
        <div className="mx-8">
          {centers.map((center, index) => (
            <AcademyCard key={index} {...center} />
          ))}
        </div>
      </div>
    </section>
  );
}
