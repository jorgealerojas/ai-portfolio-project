export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      title: "AWS Cloud Architect",
      subtitle:
        "Specialized in cloud cost optimization, infrastructure design, and multi-cloud solutions. Helping businesses architect scalable, secure, and cost-effective cloud environments.",
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Cloud Architecture Design",
          description:
            "Design scalable, highly available, and secure cloud architectures tailored to your business needs.",
        },
        {
          title: "Cost Optimization",
          description:
            "Analyze and optimize cloud spending through right-sizing, reserved instances, and automated resource management.",
        },
        {
          title: "Security & Compliance",
          description:
            "Implement security best practices and ensure compliance with industry standards (HIPAA, SOC2, PCI).",
        },
        {
          title: "Infrastructure as Code",
          description:
            "Automate infrastructure deployment using Terraform and CloudFormation for consistent and repeatable environments.",
        },
        {
          title: "Cloud Migration",
          description: "Plan and execute seamless migrations to the cloud while minimizing business disruption.",
        },
        {
          title: "FinOps Consulting",
          description: "Establish FinOps practices and implement cost management strategies across your organization.",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Enterprise Cloud Migration",
          description:
            "Led a large-scale migration to AWS, reducing infrastructure costs by 40% through right-sizing and modernization strategies.",
          tags: ["AWS", "Migration", "Cost Optimization"],
        },
        {
          title: "Multi-Cloud Infrastructure",
          description:
            "Designed and implemented a hybrid cloud solution using AWS and Azure, with automated disaster recovery capabilities.",
          tags: ["AWS", "Azure", "Terraform", "DR"],
        },
        {
          title: "FinOps Implementation",
          description:
            "Developed a comprehensive FinOps strategy resulting in 35% cost reduction through automated resource scheduling and rightsizing.",
          tags: ["AWS Cost Explorer", "CloudWatch", "Terraform"],
        },
      ],
    },
    techStack: {
      title: "Tech Stack",
    },
    certifications: {
      title: "AWS Certifications",
      verify: "Verify Certificate",
      issued: "Issued",
    },
    contact: {
      title: "Schedule a Consultation",
      subtitle: "Let's discuss how I can help optimize your cloud infrastructure and reduce costs",
    },
    footer: {
      rights: "All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy",
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Currículum",
    },
    hero: {
      title: "Arquitecto Cloud AWS",
      subtitle:
        "Especializado en optimización de costos en la nube, diseño de infraestructura y soluciones multi-cloud. Ayudando a empresas a arquitectar entornos en la nube escalables, seguros y rentables.",
    },
    services: {
      title: "Servicios",
      items: [
        {
          title: "Diseño de Arquitectura Cloud",
          description:
            "Diseño de arquitecturas en la nube escalables, altamente disponibles y seguras adaptadas a las necesidades de su negocio.",
        },
        {
          title: "Optimización de Costos",
          description:
            "Análisis y optimización de gastos en la nube mediante el dimensionamiento adecuado, instancias reservadas y gestión automatizada de recursos.",
        },
        {
          title: "Seguridad y Cumplimiento",
          description:
            "Implementación de mejores prácticas de seguridad y garantía de cumplimiento con estándares de la industria (HIPAA, SOC2, PCI).",
        },
        {
          title: "Infraestructura como Código",
          description:
            "Automatización de despliegue de infraestructura usando Terraform y CloudFormation para entornos consistentes y repetibles.",
        },
        {
          title: "Migración a la Nube",
          description:
            "Planificación y ejecución de migraciones sin problemas a la nube minimizando la interrupción del negocio.",
        },
        {
          title: "Consultoría FinOps",
          description:
            "Establecimiento de prácticas FinOps e implementación de estrategias de gestión de costos en toda su organización.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Migración Empresarial a la Nube",
          description:
            "Dirigí una migración a gran escala a AWS, reduciendo los costos de infraestructura en un 40% mediante estrategias de redimensionamiento y modernización.",
          tags: ["AWS", "Migración", "Optimización de Costos"],
        },
        {
          title: "Infraestructura Multi-Cloud",
          description:
            "Diseñé e implementé una solución híbrida usando AWS y Azure, con capacidades automatizadas de recuperación ante desastres.",
          tags: ["AWS", "Azure", "Terraform", "DR"],
        },
        {
          title: "Implementación FinOps",
          description:
            "Desarrollé una estrategia integral de FinOps resultando en una reducción del 35% en costos mediante programación automatizada de recursos y redimensionamiento.",
          tags: ["AWS Cost Explorer", "CloudWatch", "Terraform"],
        },
      ],
    },
    techStack: {
      title: "Stack Tecnológico",
    },
    certifications: {
      title: "Certificaciones AWS",
      verify: "Verificar Certificado",
      issued: "Emitido",
    },
    contact: {
      title: "Agendar una Consulta",
      subtitle: "Hablemos sobre cómo puedo ayudarte a optimizar tu infraestructura en la nube y reducir costos",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      terms: "Términos de Servicio",
      privacy: "Privacidad",
    },
  },
}

export type Language = "en" | "es"
export type TranslationKey = keyof typeof translations.en

