import { Card, CardContent } from "@/components/ui/card"
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

export default function CertificationSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.title} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="relative w-32 h-32">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  )
}

