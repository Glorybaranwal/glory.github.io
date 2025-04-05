"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

// Import all section components
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"

const sections = [
  { id: "home", component: Hero, label: "Home" },
  { id: "about", component: About, label: "About" },
  { id: "skills", component: Skills, label: "Skills" },
  { id: "experience", component: Experience, label: "Experience" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "education", component: Education, label: "Education" },
  { id: "contact", component: Contact, label: "Contact" },
]

export default function HorizontalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < sections.length - 1) {
        goToSlide(currentIndex + 1)
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        goToSlide(currentIndex - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  // Handle wheel events for horizontal scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!isAnimating) {
          setIsAnimating(true)

          if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            goToSlide(currentIndex + 1)
          } else if (e.deltaY < 0 && currentIndex > 0) {
            goToSlide(currentIndex - 1)
          } else {
            setIsAnimating(false)
          }
        }
      }
    }

    const sliderElement = sliderRef.current
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentIndex, isAnimating])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500) // Match this with animation duration
  }

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      goToSlide(currentIndex + 1)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1)
    }
  }

  return (
    <div ref={sliderRef} className="relative w-full h-screen overflow-hidden bg-background">
      {/* Main slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {sections.map((section, index) => (
            <div key={section.id} className={`absolute inset-0 ${index === currentIndex ? "block" : "hidden"}`}>
              <section.component />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className={`rounded-full ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-label="Previous section"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          disabled={currentIndex === sections.length - 1}
          className={`rounded-full ${currentIndex === sections.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-label="Next section"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Section label */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
          <span className="text-primary font-medium">{sections[currentIndex].label}</span>
        </div>
      </div>
    </div>
  )
}

