"use client"

import { Card } from "@/components/ui/card"
import { InlineWidget } from "react-calendly"

export default function SchedulingSection() {
  return (
    <Card className="p-6">
      <div className="mb-6 text-center">
        <p className="text-muted-foreground">
          Schedule a consultation to discuss your cloud architecture needs. I'll help you optimize your infrastructure
          and reduce costs.
        </p>
      </div>
      <div className="calendly-inline-widget min-h-[650px]">
        <InlineWidget
          url="https://calendly.com/your-username"
          styles={{
            height: "650px",
            width: "100%",
          }}
        />
      </div>
    </Card>
  )
}

