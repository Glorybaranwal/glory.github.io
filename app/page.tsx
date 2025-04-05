import type { Metadata } from "next"
import HorizontalSlider from "@/components/horizontal-slider"
import { ThemeToggle } from "@/components/ui-components/theme-toggle"

export const metadata: Metadata = {
  title: "Glory Baranwal | Frontend Developer",
  description:
    "Professional portfolio of Glory Baranwal, a Frontend Developer specializing in React.js and TypeScript with 4+ years of experience.",
}

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>
      <HorizontalSlider />
    </main>
  )
}

