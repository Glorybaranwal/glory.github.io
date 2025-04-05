"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Lead React.js Developer | Full Stack Developer",
    company: "Ramognee Technology",
    location: "Gurugram",
    period: "July 2022 – Present",
    description: [
      "Spearheaded the development of high-traffic web applications using React.js, Next.js, and TypeScript, with a focus on performance tuning and UI scalability.",
      "Led a team of 6 developers, improving sprint velocity by 45% after introducing better Agile practices and component-based development workflows.",
      "Played a pivotal role in transforming abstract business goals into actionable engineering plans—collaborating closely with cross-functional teams including product managers and engineers.",
      "Developed custom cron jobs in Next.js, streamlining scheduling tasks.",
      "Documented complete product manual and component hierarchy—cutting onboarding time for new devs from ~2 weeks to 3–4 days.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digilakshya",
    location: "Gurugram",
    period: "Dec 2020 - June 2022",
    description: [
      "Interacted directly with clients to gather requirements, discuss UI enhancements, and implement feedback.",
      "Introduced structured documentation standards for frontend components and APIs, which streamlined onboarding and improved cross-team clarity.",
      "Contributed to workflow improvements that enhanced productivity and reduced bottlenecks in delivery pipelines.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Work History
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <CardTitle>{exp.title}</CardTitle>
                      </div>
                      <CardDescription className="mt-1.5">
                        {exp.company} • {exp.location} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

