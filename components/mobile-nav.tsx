"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Menu items
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="md:hidden relative z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300" onClick={closeMenu} />}

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[140pv] bg-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-items-end p-4 border-b border-gray-800/50">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center flex-1 gap-6 p-8 bg-black">
            <ul className="space-y-6 w-full">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full">
                  <a
                    href={item.href}
                   
                    className="flex items-center justify-center gap-2 w-1/2 "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
