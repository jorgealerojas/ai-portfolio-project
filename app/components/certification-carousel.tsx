"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    image: "/placeholder.svg?height=200&width=200",
    issueDate: "2023",
    verificationUrl: "https://www.credly.com/badges/your-badge-id",
  },
  {
    title: "AWS Certified DevOps Engineer - Professional",
    image: "/placeholder.svg?height=200&width=200",
    issueDate: "2023",
    verificationUrl: "https://www.credly.com/badges/your-badge-id",
  },
  {
    title: "AWS Certified Security - Specialty",
    image: "/placeholder.svg?height=200&width=200",
    issueDate: "2022",
    verificationUrl: "https://www.credly.com/badges/your-badge-id",
  },
]

export default function CertificationCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {certifications.map((cert, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="relative w-40 h-40 mb-4">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Issued {cert.issueDate}</p>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Verify Certificate
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

