"use client"

import { type FC } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            if (typeof window !== 'undefined') {
              window.Calendly.initPopupWidget({
                url: 'https://calendly.com/your-username'
              });
            }
          }}
        >
          <Calendar className="h-4 w-4" />
          Schedule a Consultation
        </Button>
      </div>
      {mounted && (
        <PopupWidget
          url="https://calendly.com/your-username"
          rootElement={typeof window !== 'undefined' ? document.getElementById("__next") : undefined}
          text="Schedule a Consultation"
          textColor="#ffffff"
          color="#0f172a"
        />
      )}
    </Card>
  )
}

export default SchedulingSection

