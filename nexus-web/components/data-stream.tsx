"use client"

import { useEffect, useRef } from "react"

export default function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let dataStreams: DataStream[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 300
      initDataStreams()
    }

    interface DataStream {
      x: number
      speed: number
      characters: string[]
      colors: string[]
    }

    const initDataStreams = () => {
      dataStreams = []
      const numStreams = Math.floor(canvas.width / 20)

      for (let i = 0; i < numStreams; i++) {
        const stream: DataStream = {
          x: i * 20 + 10,
          speed: Math.random() * 2 + 1,
          characters: [],
          colors: [],
        }

        const numChars = Math.floor(Math.random() * 20) + 5
        for (let j = 0; j < numChars; j++) {
          // Random binary, hex, or special character
          const charType = Math.floor(Math.random() * 3)
          let char = ""

          if (charType === 0) {
            char = Math.random() > 0.5 ? "0" : "1"
          } else if (charType === 1) {
            char = Math.floor(Math.random() * 16)
              .toString(16)
              .toUpperCase()
          } else {
            const specialChars = ["$", "#", "@", "*", "&", "%", "+", "-", "=", "<", ">", "?"]
            char = specialChars[Math.floor(Math.random() * specialChars.length)]
          }

          stream.characters.push(char)

          // Color gradient from purple to pink
          const ratio = j / numChars
          const r = Math.floor(168 + ratio * (236 - 168))
          const g = Math.floor(85 + ratio * (72 - 85))
          const b = Math.floor(247 + ratio * (153 - 247))
          const a = 1 - ratio * 0.8

          stream.colors.push(`rgba(${r}, ${g}, ${b}, ${a})`)
        }

        dataStreams.push(stream)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = "14px monospace"
      ctx.textAlign = "center"

      dataStreams.forEach((stream) => {
        const y = ((Date.now() / 100) * stream.speed) % canvas.height

        stream.characters.forEach((char, index) => {
          const charY = (y - index * 20) % canvas.height

          if (charY > 0 && charY < canvas.height) {
            ctx.fillStyle = stream.colors[index]
            ctx.fillText(char, stream.x, charY)
          }
        })
      })

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
