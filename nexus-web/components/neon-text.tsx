"use client"

import { useEffect, useState } from "react"

interface NeonTextProps {
  text: string
  className?: string
  primaryColor?: string
  secondaryColor?: string
  glowStrength?: number
}

export default function NeonText({
  text,
  className = "",
  primaryColor = "#a855f7",
  secondaryColor = "#ec4899",
  glowStrength = 5,
}: NeonTextProps) {
  const [flicker, setFlicker] = useState(false)

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlicker(true)
      setTimeout(() => setFlicker(false), 100)
    }, 5000)

    return () => clearInterval(flickerInterval)
  }, [])

  const textShadow = `
    0 0 ${glowStrength}px ${primaryColor},
    0 0 ${glowStrength * 2}px ${primaryColor},
    0 0 ${glowStrength * 3}px ${secondaryColor}
  `

  return (
    <span
      className={`${className} transition-all duration-100`}
      style={{
        color: "white",
        textShadow: flicker ? "none" : textShadow,
        opacity: flicker ? 0.8 : 1,
      }}
    >
      {text}
    </span>
  )
}
