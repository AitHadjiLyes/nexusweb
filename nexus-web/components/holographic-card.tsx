"use client"

import type React from "react"

import { type ReactNode, useState, useRef } from "react"
import { motion } from "framer-motion"

interface HolographicCardProps {
  children: ReactNode
  className?: string
}

export default function HolographicCard({ children, className = "" }: HolographicCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * 10
    const rotateYValue = ((centerX - x) / centerX) * 10

    const glowXValue = (x / rect.width) * 100
    const glowYValue = (y / rect.height) * 100

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setGlowX(glowXValue)
    setGlowY(glowYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm border border-purple-500/30 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        backgroundImage: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(168, 85, 247, 0.15), transparent 70%)`,
        boxShadow: `0 0 20px rgba(168, 85, 247, 0.3), 
                    0 0 30px rgba(168, 85, 247, 0.1), 
                    0 0 40px rgba(168, 85, 247, 0.05)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">{children}</div>

      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), transparent),
            linear-gradient(to top left, rgba(236, 72, 153, 0.2), transparent)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: `${glowX}% ${glowY}%`,
        }}
      />
    </motion.div>
  )
}
