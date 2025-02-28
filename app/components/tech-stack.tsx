import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Google Cloud", "Azure"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "CloudFormation", "AWS CDK"],
  },
  {
    category: "AWS Services",
    skills: ["ECS", "EKS", "EC2", "Lambda", "DynamoDB", "Bedrock", "RDS", "CloudFront", "S3", "IAM"],
  },
  {
    category: "DevOps & Tools",
    skills: ["CI/CD", "Docker", "Kubernetes", "Git", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Monitoring & Security",
    skills: ["CloudWatch", "AWS Config", "GuardDuty", "Security Hub", "WAF", "Cloudtrail",
  },
  {
    category: "Cost Management",
    skills: ["AWS Cost Explorer", "AWS Budgets", "FinOps", "Cost Optimization", "AWS Organizations"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

