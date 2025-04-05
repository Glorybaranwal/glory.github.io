import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              Glory<span className="text-primary">Baranwal</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Frontend Developer specializing in React.js and TypeScript
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Glorybaranwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/glory-baranwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:glorybaranwal0028@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-6">
          © {new Date().getFullYear()} Glory Baranwal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

