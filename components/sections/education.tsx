"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Education() {
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
            Qualifications
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Education & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and notable accomplishments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Master of Science (M.Sc.)</h4>
                  <p className="text-muted-foreground">Expected Nov 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Achievements & Profiles</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                    <a
                      href="https://github.com/Glorybaranwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <div>
                    <h4 className="text-xl font-semibold">GitHub</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="https://github.com/Glorybaranwal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/Glorybaranwal
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
                    <a
                      href="https://leetcode.com/u/gloryb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LeetCode"
                    >
                      <Code className="h-5 w-5" />
                    </a>
                  </Button>
                  <div>
                    <h4 className="text-xl font-semibold">LeetCode</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="https://leetcode.com/u/gloryb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        leetcode.com/u/gloryb
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
            <h3 className="text-2xl font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Frontend Architecture",
                "UI Debugging",
                "Clean Code",
                "Swimming",
                "Badminton",
                "Continuous Learning",
              ].map((interest) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

