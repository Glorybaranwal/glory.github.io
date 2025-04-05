"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Briefcase, Users } from "lucide-react"

export default function About() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-transparent" />
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
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">My Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Versatile and results-driven Frontend Developer with 4+ years of professional experience, specializing in
            React.js and TypeScript.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <FeatureCard
            icon={<Code className="h-8 w-8 text-primary" />}
            title="Technical Expertise"
            description="Adept at shipping high-traffic applications using React.js, Next.js, and TypeScript with a focus on UI performance and testing."
            delay={0.1}
          />
          <FeatureCard
            icon={<Briefcase className="h-8 w-8 text-primary" />}
            title="Business Acumen"
            description="Skilled at transforming business requirements into scalable technical solutions and collaborating with cross-functional teams."
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Team Leadership"
            description="Experience leading cross-functional teams, improving sprint velocity, and mentoring junior developers to achieve project goals."
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border shadow-lg"
        >
          <p className="text-lg leading-relaxed">
            I am a passionate Frontend Developer with a strong foundation in React.js and TypeScript. My journey in web
            development has equipped me with the skills to build scalable, high-performance applications while
            maintaining clean, maintainable code. I thrive in collaborative environments where I can contribute my
            technical expertise and leadership skills to deliver exceptional user experiences.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I&apos;m not coding, you can find me swimming, playing badminton, or expanding my knowledge through
            continuous learning.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-primary/10 mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

