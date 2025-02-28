"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    image: "/aws-certified-solutions-architect-associate.svg",
    issueDate: "2024",
    verificationUrl: "https://www.credly.com/badges/c95a30ed-2e83-47df-a17d-eb5c594338a1/public_url",
  },
  {
    title: "AWS Certified AI Practitioner",
    image: "/aws-certified-ai-practitioner.svg",
    issueDate: "2024",
    verificationUrl: "https://www.credly.com/badges/3431bc77-8b49-4544-a874-54c3775cd096/public_url",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/aws-certified-cloud-practitioner.svg",
    issueDate: "2024",
    verificationUrl: "https://www.credly.com/badges/19ba2859-1465-49eb-9bc2-20628d3a9fab/public_url",
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
                    <Image src={cert.image} alt={cert.title} fill className="object-contain" priority />
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

