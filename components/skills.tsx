"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            My Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge variant="secondary" className="py-1.5">
        {name}
      </Badge>
    </motion.div>
  )
}

