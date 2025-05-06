document.addEventListener("DOMContentLoaded", () => {
  console.log("Particles script initialized")

  // Create canvas for hero section if it exists
  const heroSection = document.getElementById("hero")
  if (heroSection) {
    try {
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
      heroSection.insertBefore(canvas, heroSection.firstChild)

      // Initialize particles
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
        const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 50)

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

      // Draw particles
      function drawParticles() {
        if (!ctx) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)

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
    } catch (e) {
      console.error("Error initializing particles:", e)
    }
  }
})
