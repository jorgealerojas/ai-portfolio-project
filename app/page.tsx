"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ServicesSection from "./components/services-section"
import CertificationCarousel from "./components/certification-carousel"
import SchedulingSection from "./components/scheduling-section"
import { useLanguage } from "./context/language-context"
import LanguageToggle from "./components/language-toggle"

export default function Page() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] gradient-blob" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] gradient-blob" />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">CloudArchitect.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                {t("nav.about")}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                {t("nav.projects")}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <LanguageToggle />
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              {t("nav.resume")}
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 relative">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {t("hero.title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">{t("hero.subtitle")}</p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("projects.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t("projects.items").map((project: any, index: number) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("techStack.title")}
            </h2>
            <TechStack />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("certifications.title")}
            </h2>
            <CertificationCarousel />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">
                {t("contact.title")}
              </h2>
              <p className="text-xl text-foreground/80 text-center mb-12">{t("contact.subtitle")}</p>
              <SchedulingSection />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-foreground/60">© 2024 CloudArchitect.dev. {t("footer.rights")}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-primary" href="#">
              {t("footer.terms")}
            </Link>
            <Link className="text-xs hover:text-primary" href="#">
              {t("footer.privacy")}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

