"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? "opacity-0" : "opacity-100"}>{text}</span>

      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 w-full text-purple-500"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translateX(-2px)",
            }}
            animate={{ x: [-2, 0, 2, 0] }}
            transition={{ duration: 0.2, times: [0, 0.3, 0.7, 1] }}
          >
            {text}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0 w-full text-pink-500"
            style={{
              clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
              transform: "translateX(2px)",
            }}
            animate={{ x: [2, 0, -2, 0] }}
            transition={{ duration: 0.2, times: [0, 0.3, 0.7, 1] }}
          >
            {text}
          </motion.span>
        </>
      )}
    </span>
  )
}
