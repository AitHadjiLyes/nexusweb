"use client"

import { useEffect, useRef } from "react"

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      const gridSize = 50
      const time = Date.now() * 0.001

      ctx.strokeStyle = "rgba(168, 85, 247, 0.1)"
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Animated pulse effect
      const pulseSize = Math.sin(time) * 100 + 200
      ctx.strokeStyle = "rgba(168, 85, 247, 0.05)"
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, pulseSize, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, pulseSize * 0.7, 0, Math.PI * 2)
      ctx.stroke()

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}
