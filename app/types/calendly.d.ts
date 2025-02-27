import type React from "react"
declare module "react-calendly" {
  export interface CalendlyProps {
    url: string
    styles?: {
      height?: string | number
      width?: string | number
      [key: string]: string | number | undefined
    }
    prefill?: {
      email?: string
      firstName?: string
      lastName?: string
      name?: string
      [key: string]: string | undefined
    }
    pageSettings?: {
      backgroundColor?: string
      hideEventTypeDetails?: boolean
      hideLandingPageDetails?: boolean
      primaryColor?: string
      textColor?: string
      [key: string]: string | boolean | undefined
    }
    utm?: {
      utmCampaign?: string
      utmContent?: string
      utmMedium?: string
      utmSource?: string
      utmTerm?: string
      [key: string]: string | undefined
    }
  }

  export const InlineWidget: React.FC<CalendlyProps>
  export const PopupWidget: React.FC<CalendlyProps>
  export const openPopupWidget: (options: CalendlyProps) => void
}

