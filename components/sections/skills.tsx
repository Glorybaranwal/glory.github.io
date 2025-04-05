"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Braces, Layout, Server, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Braces className="h-5 w-5" />,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "GraphQL", "Node.js"],
  },
  {
    title: "UI/UX",
    icon: <Layout className="h-5 w-5" />,
    skills: ["TailwindCSS", "CSS3", "HTML5", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Firebase", "MongoDB", "REST APIs", "WebSocket", "Strapi"],
  },
  {
    title: "Testing",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Unit Testing", "Playwrite", "Debugging", "CI/CD"],
  },
  {
    title: "Tools & Platforms",
    icon: <Database className="h-5 w-5" />,
    skills: ["AWS (EC2, S3)", "Git", "Vercel", "GitHub"],
  },
  {
    title: "Collaboration",
    icon: <Users className="h-5 w-5" />,
    skills: ["Agile (JIRA)", "API Integration", "Technical Documentation", "Product Documentation", "Mentorship"],
  },
]

export default function Skills() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl" />
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
            My Expertise
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCard({
  category,
  index,
}: {
  category: {
    title: string
    icon: React.ReactNode
    skills: string[]
  }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-full bg-primary/10">{category.icon}</div>
          <h3 className="text-xl font-semibold">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{name}</span>
    </motion.div>
  )
}

