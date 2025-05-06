"use client"

import { useEffect, useRef } from "react"

export default function HexagonGrid() {
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

    const drawHexagon = (x: number, y: number, size: number, time: number) => {
      const sides = 6
      const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.2 + 0.8
      const adjustedSize = size * pulse

      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + Math.PI / 6
        const px = x + adjustedSize * Math.cos(angle)
        const py = y + adjustedSize * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()

      // Create gradient based on position
      const gradient = ctx.createLinearGradient(x - adjustedSize, y - adjustedSize, x + adjustedSize, y + adjustedSize)

      const alpha = 0.1 * pulse
      gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`)
      gradient.addColorStop(1, `rgba(236, 72, 153, ${alpha})`)

      ctx.fillStyle = gradient
      ctx.fill()

      ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 2})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const hexSize = 30
      const horizontalSpacing = hexSize * Math.sqrt(3)
      const verticalSpacing = hexSize * 1.5

      for (let row = -1; row < canvas.height / verticalSpacing + 1; row++) {
        const offset = row % 2 === 0 ? 0 : horizontalSpacing / 2

        for (let col = -1; col < canvas.width / horizontalSpacing + 1; col++) {
          const x = col * horizontalSpacing + offset
          const y = row * verticalSpacing

          drawHexagon(x, y, hexSize, time)
        }
      }

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
