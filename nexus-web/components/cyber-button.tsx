"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-md font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
          "active:scale-95",
          {
            "bg-gradient-to-r from-purple-600 to-pink-600 text-white": variant === "default",
            "bg-transparent border border-purple-500 text-white hover:bg-purple-500/10": variant === "outline",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
          },
          className,
        )}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">{children}</span>

        <motion.span
          className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
          initial={{ opacity: 0, x: "-100%" }}
          whileHover={{ opacity: 0.2, x: "0%" }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>
    )
  },
)

CyberButton.displayName = "CyberButton"

export default CyberButton
