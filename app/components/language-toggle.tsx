"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../context/language-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-2"
    >
      <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}

