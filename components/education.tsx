"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2">
            Qualifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and notable accomplishments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle>Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Master of Science (M.Sc.)</h3>
                  <CardDescription>Expected Nov 2025</CardDescription>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle>Achievements & Profiles</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" asChild>
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
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
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

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" asChild>
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
                    <h3 className="text-lg font-semibold">LeetCode</h3>
                    <p className="text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Frontend Architecture",
                  "UI Debugging",
                  "Clean Code",
                  "Swimming",
                  "Badminton",
                  "Continuous Learning",
                ].map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

