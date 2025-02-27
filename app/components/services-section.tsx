"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, DollarSign, Shield, Settings, RefreshCw, LineChart } from "lucide-react"
import { useLanguage } from "../context/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()
  const services = t("services.items")

  const icons = {
    "Cloud Architecture Design": Cloud,
    "Diseño de Arquitectura Cloud": Cloud,
    "Cost Optimization": DollarSign,
    "Optimización de Costos": DollarSign,
    "Security & Compliance": Shield,
    "Seguridad y Cumplimiento": Shield,
    "Infrastructure as Code": Settings,
    "Infraestructura como Código": Settings,
    "Cloud Migration": RefreshCw,
    "Migración a la Nube": RefreshCw,
    "FinOps Consulting": LineChart,
    "Consultoría FinOps": LineChart,
  }

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          {t("services.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => {
            const Icon = icons[service.title as keyof typeof icons]
            return (
              <Card key={service.title} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

