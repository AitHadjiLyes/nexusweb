document.addEventListener("DOMContentLoaded", () => {
  // Create canvas for hero section
  createParticleCanvas("hero")

  // Create canvas for data visualization
  createDataVisualization()
})

function createParticleCanvas(sectionId) {
  const section = document.getElementById(sectionId)
  if (!section) return

  // Create canvas element
  const canvas = document.createElement("canvas")
  canvas.className = "particle-canvas"
  canvas.style.position = "absolute"
  canvas.style.top = "0"
  canvas.style.left = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.zIndex = "0"

  // Insert canvas as first child of section
  section.insertBefore(canvas, section.firstChild)

  // Initialize particles
  initParticles(canvas)
}

function initParticles(canvas) {
  const ctx = canvas.getContext("2d")
  let particles = []
  let animationFrameId

  // Resize canvas to match parent size
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    initParticleArray()
  }

  // Create particle array
  function initParticleArray() {
    particles = []
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.2})`,
      })
    }
  }

  // Draw particles and connections
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    ctx.strokeStyle = "rgba(168, 85, 247, 0.1)"
    ctx.lineWidth = 0.5

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    // Draw particles
    particles.forEach((particle) => {
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()

      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1
      }
    })

    animationFrameId = requestAnimationFrame(drawParticles)
  }

  // Initialize
  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)
  drawParticles()

  // Cleanup function
  return function cleanup() {
    window.removeEventListener("resize", resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  }
}

function createDataVisualization() {
  const canvas = document.getElementById("data-canvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  let animationFrameId

  // Resize canvas to match parent size
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  // Draw data visualization
  function drawDataVisualization() {
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
        centerY + Math.sin(x * frequency1 - time * 1.5) * amplitude1 + Math.sin(x * frequency2 - time * 3) * amplitude2

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

    animationFrameId = requestAnimationFrame(drawDataVisualization)
  }

  // Initialize
  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)

  // Hide loading after a delay
  setTimeout(() => {
    const loadingElement = document.querySelector(".data-loading")
    if (loadingElement) {
      loadingElement.style.display = "none"
    }
    drawDataVisualization()
  }, 2000)

  // Cleanup function
  return function cleanup() {
    window.removeEventListener("resize", resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  }
}
