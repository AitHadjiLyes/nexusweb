"use client"

import { useEffect, useRef } from "react"

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    interface Node {
      x: number
      y: number
      size: number
      speed: number
      connections: number[]
      active: boolean
      activationTime: number
    }

    const initNodes = () => {
      nodes = []
      const numNodes = 50

      for (let i = 0; i < numNodes; i++) {
        const node: Node = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 2,
          speed: Math.random() * 0.5 + 0.1,
          connections: [],
          active: false,
          activationTime: 0,
        }

        // Create connections to other nodes
        const numConnections = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * numNodes)
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex)
          }
        }

        nodes.push(node)
      }

      // Activate random nodes periodically
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * nodes.length)
        nodes[randomIndex].active = true
        nodes[randomIndex].activationTime = Date.now()

        // Propagate activation through connections
        setTimeout(() => {
          propagateActivation(randomIndex)
        }, 200)
      }, 1000)
    }

    const propagateActivation = (nodeIndex: number) => {
      const node = nodes[nodeIndex]

      node.connections.forEach((targetIndex) => {
        if (!nodes[targetIndex].active) {
          nodes[targetIndex].active = true
          nodes[targetIndex].activationTime = Date.now()

          // Continue propagation
          setTimeout(() => {
            propagateActivation(targetIndex)
          }, 200)
        }
      })

      // Deactivate after a while
      setTimeout(() => {
        node.active = false
      }, 1000)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 1

      nodes.forEach((node, index) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex]

          // Calculate activation state for connection
          const isActive = node.active || target.active
          const timeSinceActivation = Math.min(Date.now() - node.activationTime, Date.now() - target.activationTime)

          if (isActive) {
            // Gradient for active connections
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
            gradient.addColorStop(0, "rgba(168, 85, 247, 0.8)")
            gradient.addColorStop(1, "rgba(236, 72, 153, 0.8)")
            ctx.strokeStyle = gradient
          } else {
            ctx.strokeStyle = "rgba(168, 85, 247, 0.2)"
          }

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()

          // Draw pulse along connection if active
          if (isActive && timeSinceActivation < 1000) {
            const progress = Math.min(timeSinceActivation / 1000, 1)
            const pulseX = node.x + (target.x - node.x) * progress
            const pulseY = node.y + (target.y - node.y) * progress

            ctx.fillStyle = "rgba(236, 72, 153, 0.8)"
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
            ctx.fill()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        // Update position with slight movement
        const time = Date.now() * 0.001
        node.x += Math.sin(time * node.speed) * 0.2
        node.y += Math.cos(time * node.speed) * 0.2

        // Keep within bounds
        if (node.x < 0) node.x = 0
        if (node.x > canvas.width) node.x = canvas.width
        if (node.y < 0) node.y = 0
        if (node.y > canvas.height) node.y = canvas.height

        // Draw node
        if (node.active) {
          // Glowing effect for active nodes
          ctx.shadowBlur = 15
          ctx.shadowColor = "rgba(236, 72, 153, 0.8)"
          ctx.fillStyle = "rgba(236, 72, 153, 0.8)"
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = "rgba(168, 85, 247, 0.5)"
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()

        // Reset shadow
        ctx.shadowBlur = 0
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
