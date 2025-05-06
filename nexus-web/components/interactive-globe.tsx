"use client"

import { useEffect, useRef } from "react"

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let points: Point[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    interface Point {
      x: number
      y: number
      z: number
      size: number
      color: string
    }

    const initPoints = () => {
      points = []
      const numPoints = 200
      const radius = Math.min(canvas.width, canvas.height) * 0.4

      for (let i = 0; i < numPoints; i++) {
        // Generate points on a sphere
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        points.push({
          x,
          y,
          z,
          size: Math.random() * 2 + 1,
          color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.5})`,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const time = Date.now() * 0.0005

      // Sort points by z-index for proper rendering
      points.sort((a, b) => b.z - a.z)

      // Draw connections
      ctx.strokeStyle = "rgba(168, 85, 247, 0.1)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < points.length; i++) {
        // Rotate points
        const x = points[i].x
        const y = points[i].y
        const z = points[i].z

        // Rotate around Y axis
        const newX = x * Math.cos(time) + z * Math.sin(time)
        const newZ = -x * Math.sin(time) + z * Math.cos(time)

        // Project 3D point to 2D space
        const scale = 400 / (400 + newZ)
        const projectedX = centerX + newX * scale
        const projectedY = centerY + y * scale

        // Draw point
        ctx.fillStyle = points[i].color
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, points[i].size * scale, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby points
        for (let j = i + 1; j < points.length; j++) {
          const x2 = points[j].x * Math.cos(time) + points[j].z * Math.sin(time)
          const z2 = -points[j].x * Math.sin(time) + points[j].z * Math.cos(time)

          const scale2 = 400 / (400 + z2)
          const projectedX2 = centerX + x2 * scale2
          const projectedY2 = centerY + points[j].y * scale2

          const dx = projectedX - projectedX2
          const dy = projectedY - projectedY2
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 50) {
            ctx.globalAlpha = 1 - distance / 50
            ctx.beginPath()
            ctx.moveTo(projectedX, projectedY)
            ctx.lineTo(projectedX2, projectedY2)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
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
