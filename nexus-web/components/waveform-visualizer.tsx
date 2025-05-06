"use client"

import { useEffect, useRef } from "react"

export default function WaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 300
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerY = canvas.height / 2
      const time = Date.now() * 0.001

      // Draw main waveform
      ctx.beginPath()
      ctx.moveTo(0, centerY)

      for (let x = 0; x < canvas.width; x++) {
        const frequency1 = 0.005
        const frequency2 = 0.01
        const amplitude1 = 30
        const amplitude2 = 15

        const y =
          centerY + Math.sin(x * frequency1 + time) * amplitude1 + Math.sin(x * frequency2 + time * 2) * amplitude2

        ctx.lineTo(x, y)
      }

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "rgba(168, 85, 247, 0.5)")
      gradient.addColorStop(0.5, "rgba(236, 72, 153, 0.5)")
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.5)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw secondary waveform
      ctx.beginPath()
      ctx.moveTo(0, centerY)

      for (let x = 0; x < canvas.width; x++) {
        const frequency1 = 0.01
        const frequency2 = 0.02
        const amplitude1 = 20
        const amplitude2 = 10

        const y =
          centerY +
          Math.sin(x * frequency1 - time * 1.5) * amplitude1 +
          Math.sin(x * frequency2 - time * 3) * amplitude2

        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = "rgba(236, 72, 153, 0.3)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw horizontal center line
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(canvas.width, centerY)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1
      ctx.stroke()

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
