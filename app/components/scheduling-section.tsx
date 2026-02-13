"use client"

import { type FC } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { openPopupWidget } from "react-calendly"
import { useLanguage } from "../context/language-context"

const CALENDLY_URL = "https://calendly.com/your-username"

const SchedulingSection: FC = () => {
  const { t } = useLanguage()

  const handleScheduleClick = () => {
    if (typeof window !== 'undefined') {
      openPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <Card className="h-full min-h-[260px] p-6">
      <div className="flex h-full flex-col items-center text-center">
        <p className="mb-6 text-muted-foreground">{t("contact.subtitle")}</p>
        <div className="mt-auto flex w-full justify-center">
        <Button 
          className="flex items-center gap-2" 
          size="lg"
          onClick={handleScheduleClick}
        >
          <Calendar className="h-4 w-4" />
          {t("contact.title")}
        </Button>
        </div>
      </div>
    </Card>
  )
}

export default SchedulingSection
