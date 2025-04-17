"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-400">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={closeMenu} className="text-gray-400">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
              <Link href="#about" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#projects" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#skills" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                Skills
              </Link>
              <Link href="#contact" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
                Contact
              </Link>

              <div className="flex items-center gap-6 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
