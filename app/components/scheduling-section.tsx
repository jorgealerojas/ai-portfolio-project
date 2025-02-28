"use client"

import { type FC } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import dynamic from 'next/dynamic'

interface CalendlyPopupWidget {
  url: string;
  text?: string;
  color?: string;
  textColor?: string;
  rootElement?: HTMLElement;
}

// Dynamically import Calendly to avoid SSR issues
const PopupWidget = dynamic<FC<CalendlyPopupWidget>>(
  () => import('react-calendly').then((mod) => mod.PopupWidget),
  { ssr: false }
)

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const SchedulingSection: FC = () => {
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
          onClick={() => {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/your-username'
            });
          }}
        >
          <Calendar className="h-4 w-4" />
          Schedule a Consultation
        </Button>
      </div>
      <PopupWidget
        url="https://calendly.com/your-username"
        rootElement={document.getElementById("__next") as HTMLElement}
        text="Schedule a Consultation"
        textColor="#ffffff"
        color="#0f172a"
      />
    </Card>
  )
}

export default SchedulingSection

