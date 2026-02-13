"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowUpRight,
  Cloud,
  DollarSign,
  Github,
  Globe,
  Landmark,
  Linkedin,
  Mail,
  Shield,
  Sparkles,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import CertificationCarousel from "./components/certification-carousel"
import LanguageToggle from "./components/language-toggle"
import SchedulingSection from "./components/scheduling-section"
import { useLanguage } from "./context/language-context"
import { ThemeToggle } from "@/components/theme-toggle"

type Service = {
  title: string
  description: string
}

type Project = {
  title: string
  description: string
  tags: string[]
}

const serviceIcons: Record<string, typeof Cloud> = {
  "Cloud Architecture Design": Cloud,
  "Diseño de Arquitectura Cloud": Cloud,
  "Cost Optimization": DollarSign,
  "Optimización de Costos": DollarSign,
  "Security & Compliance": Shield,
  "Seguridad y Cumplimiento": Shield,
}

const techStacks = [
  {
    labelKey: "home.techCloudPlatforms",
    items: ["AWS", "Azure", "Google Cloud"],
  },
  {
    labelKey: "home.techIaC",
    items: ["Terraform", "CloudFormation", "AWS CDK"],
  },
  {
    labelKey: "home.techDevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
  },
  {
    labelKey: "home.techGovernance",
    items: ["FinOps", "AWS Budgets", "Cost Explorer", "AWS Organizations"],
  },
]

export default function Page() {
  const { t } = useLanguage()
  const services = t("services.items") as unknown as Service[]
  const projects = t("projects.items") as unknown as Project[]

  return (
    <div className="consultant-bg min-h-screen text-foreground">
      <div className="mesh-overlay" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2" href="#about">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
              CA
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">CloudArchitect.dev</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#about" className="text-foreground/80 transition hover:text-foreground">
              {t("nav.about")}
            </Link>
            <Link href="#projects" className="text-foreground/80 transition hover:text-foreground">
              {t("nav.projects")}
            </Link>
            <Link href="#contact" className="text-foreground/80 transition hover:text-foreground">
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button size="sm" className="hidden sm:inline-flex">
              {t("nav.resume")}
            </Button>
          </div>
        </div>
      </header>

      <main className="container relative z-10 px-4 pb-24 md:px-6">
        <section id="about" className="grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs tracking-wide">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {t("home.badge")}
            </Badge>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-xl">{t("hero.subtitle")}</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="#contact">
                <Button size="lg" className="rounded-full px-6">
                  {t("home.ctaPrimary")}
                </Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline" size="lg" className="rounded-full px-6">
                  {t("home.ctaSecondary")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <SocialPill href="https://github.com" label="GitHub" icon={<Github className="h-4 w-4" />} />
              <SocialPill href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
              <SocialPill href="https://twitter.com" label="Twitter" icon={<Twitter className="h-4 w-4" />} />
              <SocialPill href="mailto:awsjara@gmail.com" label="Email" icon={<Mail className="h-4 w-4" />} />
            </div>
          </div>

          <Card className="overflow-hidden border-primary/30 bg-card/70 backdrop-blur-sm">
            <CardContent className="space-y-5 p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">{t("home.focusTitle")}</p>
              <div className="space-y-4">
                <Highlight
                  icon={<Cloud className="h-4 w-4" />}
                  title={t("home.focusArchitectureTitle")}
                  text={t("home.focusArchitectureText")}
                />
                <Highlight
                  icon={<Landmark className="h-4 w-4" />}
                  title={t("home.focusFinopsTitle")}
                  text={t("home.focusFinopsText")}
                />
                <Highlight
                  icon={<Shield className="h-4 w-4" />}
                  title={t("home.focusSecurityTitle")}
                  text={t("home.focusSecurityText")}
                />
                <Highlight
                  icon={<Globe className="h-4 w-4" />}
                  title={t("home.focusMulticloudTitle")}
                  text={t("home.focusMulticloudText")}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="py-8 md:py-16">
          <SectionHeading title={t("services.title")} subtitle={t("home.servicesSubtitle")} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] ?? Cloud
              return (
                <Card key={service.title} className="group border-border/70 bg-card/75 transition hover:-translate-y-1 hover:border-primary/40">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/75">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="projects" className="py-8 md:py-16">
          <SectionHeading title={t("projects.title")} subtitle={t("home.projectsSubtitle")} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden border-border/70 bg-card/70">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-foreground/50 transition group-hover:text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/75">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 md:py-16">
          <SectionHeading title={t("techStack.title")} subtitle={t("home.techSubtitle")} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {techStacks.map((group) => (
              <Card key={group.labelKey} className="border-border/70 bg-card/75">
                <CardContent className="p-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70">{t(group.labelKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 md:py-16">
          <SectionHeading title={t("certifications.title")} subtitle={t("home.certSubtitle")} />
          <div className="mt-8 rounded-2xl border border-border/70 bg-card/65 p-4 md:p-6">
            <CertificationCarousel />
          </div>
        </section>

        <section id="contact" className="py-8 md:py-16">
          <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <SchedulingSection />
            <Card className="h-full border-border/70 bg-card/75">
              <CardContent className="flex h-full flex-col space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70">{t("home.directContactTitle")}</p>
                <h3 className="text-2xl font-semibold">{t("home.asyncTitle")}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{t("home.asyncText")}</p>
                <Link
                  href="mailto:awsjara@gmail.com"
                  className="mt-auto inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition hover:border-primary/50 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  awsjara@gmail.com
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background/70">
        <div className="container flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-foreground/70 md:flex-row md:px-6">
          <p>© 2026 CloudArchitect.dev. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <Link className="transition hover:text-foreground" href="#">
              {t("footer.terms")}
            </Link>
            <Link className="transition hover:text-foreground" href="#">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-3 text-sm text-foreground/75 md:text-base">{subtitle}</p>
    </div>
  )
}

function Highlight({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/60 p-3">
      <div className="mt-0.5 text-primary">{icon}</div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-foreground/70">{text}</p>
      </div>
    </div>
  )
}

function SocialPill({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground/80 transition hover:border-primary/50 hover:text-foreground"
    >
      {icon}
      {label}
    </Link>
  )
}
