"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import CyberButton from "./cyber-button"

interface NexusHeaderProps {
  activeSection: string
}

export default function NexusHeader({ activeSection }: NexusHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "tech", label: "Technologies" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white">
          NEXUS<span className="text-purple-500">WEB</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? "text-purple-500" : "text-gray-300 hover:text-white"
              }`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}

          <CyberButton size="sm">Démarrer un projet</CyberButton>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium py-2 transition-colors duration-300 ${
                  activeSection === item.id ? "text-purple-500" : "text-gray-300 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            ))}

            <CyberButton size="sm" className="mt-4">
              Démarrer un projet
            </CyberButton>
          </div>
        </motion.div>
      )}
    </header>
  )
}
