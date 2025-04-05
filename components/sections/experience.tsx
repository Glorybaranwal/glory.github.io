"use client"

import { motion } from "framer-motion"
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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-primary/5 to-background" />
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
            Work History
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: {
    title: string
    company: string
    location: string
    period: string
    description: string[]
  }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">{experience.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          {experience.company} • {experience.location} • {experience.period}
        </p>
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

