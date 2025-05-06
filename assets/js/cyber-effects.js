document.addEventListener("DOMContentLoaded", () => {
  console.log("Cyber effects script initialized")

  try {
    // Create cyber grid effect
    const canvas = document.createElement("canvas")
    canvas.className = "cyber-grid-canvas"
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.zIndex = "-1"
    canvas.style.pointerEvents = "none"
    canvas.style.opacity = "0.3"

    // Add canvas to body
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Resize canvas to match window size
    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Draw cyber grid
    function drawCyberGrid() {
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

      animationFrameId = requestAnimationFrame(drawCyberGrid)
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawCyberGrid()
  } catch (e) {
    console.error("Error initializing cyber effects:", e)
  }

  // Initialize 3D experience section
  init3DExperience()
})

function init3DExperience() {
  const experienceContainer = document.querySelector(".experience-container")
  if (!experienceContainer) return

  // Create canvas element
  const canvas = document.createElement("canvas")
  canvas.className = "3d-experience-canvas"
  canvas.style.position = "absolute"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"

  // Add canvas to container
  experienceContainer.appendChild(canvas)

  const ctx = canvas.getContext("2d")
  let animationFrameId
  let points = []

  // Resize canvas to match container size
  function resizeCanvas() {
    canvas.width = experienceContainer.offsetWidth
    canvas.height = experienceContainer.offsetHeight
    initPoints()
  }

  // Initialize 3D points
  function initPoints() {
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

  // Draw 3D experience
  function draw3DExperience() {
    if (!ctx) return

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

    animationFrameId = requestAnimationFrame(draw3DExperience)
  }

  // Initialize
  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)

  // Hide loading after a delay
  setTimeout(() => {
    const loadingElement = document.querySelector(".experience-loading")
    if (loadingElement) {
      loadingElement.style.display = "none"
    }
    draw3DExperience()
  }, 2000)

  // Cleanup function
  return function cleanup() {
    window.removeEventListener("resize", resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  }
}
