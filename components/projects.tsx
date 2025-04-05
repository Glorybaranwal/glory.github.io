"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Threat Intelligence",
    description: "A real-time analytics platform to trace threats, decode malware, and monitor propagation patterns.",
    details:
      "Built a dynamic dashboard to stream and filter millions of records based on user queries, with email alerts triggered by selected events. Optimized high-volume data rendering using React best practices and WebSocket-based live updates.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: [
      "Next.js",
      "SaaS",
      "Authentication & Authorization",
      "WebSocket",
      "GraphQL",
      "Postgres",
      "Jenkins (CI/CD)",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "B2B SAAS Leads",
    description: "B2B SAAS leads hub for business growth and connections.",
    details:
      "Developed a comprehensive platform for B2B lead generation and management, featuring user authentication, lead tracking, and analytics dashboards.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React.js", "TailwindCSS", "Firebase Authentication", "GraphQL", "MongoDB", "AWS"],
    liveLink: "https://b2bsaasleads.com/",
    githubLink: "#",
  },
  {
    title: "Money Management",
    description: "Custom finance tracker enabling users to log expenses, set alerts, and monitor savings progress.",
    details:
      "Created an intuitive financial management application with features for expense tracking, budget setting, and savings goals visualization.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "TypeScript", "Context API", "TailwindCSS", "Vercel"],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent development work and technical achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                      activeProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-2">
                      {project.liveLink && (
                        <Button size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" /> View Live
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" /> Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{project.details}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

