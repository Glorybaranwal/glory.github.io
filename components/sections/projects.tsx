"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 py-8 overflow-y-auto max-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent development work and technical achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={activeProject === index}
              setActive={() => setActiveProject(index)}
              clearActive={() => setActiveProject(null)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isActive,
  setActive,
  clearActive,
}: {
  project: {
    title: string
    description: string
    details: string
    image: string
    techStack: string[]
    liveLink?: string
    githubLink?: string
  }
  index: number
  isActive: boolean
  setActive: () => void
  clearActive: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={setActive}
      onHoverEnd={clearActive}
      className="h-full"
    >
      <div className="h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 overflow-hidden flex flex-col">
        <div className="relative overflow-hidden">
          <div className="aspect-video">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <div className="flex gap-2">
              {project.liveLink && (
                <Button size="sm" className="rounded-full" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> View Live
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button size="sm" variant="outline" className="rounded-full" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

