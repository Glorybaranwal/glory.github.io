"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Briefcase, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Versatile and results-driven Frontend Developer with 4+ years of professional experience, specializing in
            React.js and TypeScript.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                  <p className="text-muted-foreground">
                    Adept at shipping high-traffic applications using React.js, Next.js, and TypeScript with a focus on
                    UI performance and testing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Business Acumen</h3>
                  <p className="text-muted-foreground">
                    Skilled at transforming business requirements into scalable technical solutions and collaborating
                    with cross-functional teams.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
                  <p className="text-muted-foreground">
                    Experience leading cross-functional teams, improving sprint velocity, and mentoring junior
                    developers to achieve project goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-card rounded-lg p-6 border shadow-sm"
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
    </section>
  )
}

