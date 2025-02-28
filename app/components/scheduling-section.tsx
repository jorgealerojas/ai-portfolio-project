"use client"

import { type FC } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import dynamic from 'next/dynamic'

const openPopupWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.openPopupWidget),
  { ssr: false }
)

const CALENDLY_URL = "https://calendly.com/your-username"

const SchedulingSection: FC = () => {
  const handleScheduleClick = () => {
    if (typeof window !== 'undefined') {
      openPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <Card className="p-6">
      <div className="mb-6 text-center">
        <p className="text-muted-foreground">
          Schedule a consultation to discuss your cloud architecture needs. I'll help you optimize your infrastructure
          and reduce costs.
        </p>
      </div>
      <div className="flex justify-center">
        <Button 
          className="flex items-center gap-2" 
          size="lg"
          onClick={handleScheduleClick}
        >
          <Calendar className="h-4 w-4" />
          Schedule a Consultation
        </Button>
      </div>
    </Card>
  )
}

export default SchedulingSection

