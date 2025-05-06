document.addEventListener("DOMContentLoaded", () => {
  // Animate elements when they come into view
  animateOnScroll()

  // Initialize neon text flicker effect
  initNeonTextEffect()
})

function animateOnScroll() {
  const animatedElements = document.querySelectorAll(
    ".section-header, .holographic-card, .tech-item, .project-card, .skill-item",
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animatedElements.forEach((element) => {
    // Add base animation classes
    element.classList.add("animate-on-scroll")

    // Add animation delay based on index for grouped elements
    if (element.parentElement) {
      const siblings = Array.from(element.parentElement.children)
      const index = siblings.indexOf(element)
      element.style.setProperty("--animation-delay", `${index * 0.1}s`)
    }

    observer.observe(element)
  })

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            transition-delay: var(--animation-delay, 0s);
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
    `
  document.head.appendChild(style)
}

function initNeonTextEffect() {
  const neonElements = document.querySelectorAll(".neon-text")

  neonElements.forEach((element) => {
    // Random flicker effect
    setInterval(() => {
      if (Math.random() > 0.95) {
        element.style.textShadow = "none"
        element.style.opacity = "0.8"

        setTimeout(() => {
          element.style.textShadow = `
                        0 0 5px #a855f7,
                        0 0 10px #a855f7,
                        0 0 15px #a855f7,
                        0 0 20px #ec4899,
                        0 0 35px #ec4899,
                        0 0 40px #ec4899
                    `
          element.style.opacity = "1"
        }, 100)
      }
    }, 3000)
  })
}

// Add animation for holographic cards on hover
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".holographic-card")) {
    const card = e.target.closest(".holographic-card")

    card.addEventListener("mousemove", handleCardMouseMove)
    card.addEventListener("mouseleave", handleCardMouseLeave)
  }
})

function handleCardMouseMove(e) {
  
  const rect = this.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20

  this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  // Update gradient position
  const gradientX = (x / rect.width) * 100
  const gradientY = (y / rect.height) * 100

  this.style.backgroundImage = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(168, 85, 247, 0.15), transparent 70%)`
}

function handleCardMouseLeave() {
  this.style.transform = ""
  this.style.backgroundImage = ""
}
