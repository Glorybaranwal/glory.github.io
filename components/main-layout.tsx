"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/ui-components/navbar"
import CustomCursor from "@/components/ui-components/custom-cursor"
import { ThemeToggle } from "@/components/ui-components/theme-toggle"
import { useTheme } from "next-themes"

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // Handle intersection observer to determine active section
  useEffect(() => {
    setMounted(true)

    const sections = document.querySelectorAll("section[id]")

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <CustomCursor />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navbar activeSection={activeSection} />
      <main className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background dark:from-primary/20 dark:via-background dark:to-background"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <footer className="py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Glory Baranwal. All rights reserved.
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}

