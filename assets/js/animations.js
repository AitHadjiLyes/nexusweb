document.addEventListener("DOMContentLoaded", () => {
  console.log("Animations script initialized")

  try {
    // Animate elements when they come into view
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

    // Add animation for holographic cards on hover
    document.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".holographic-card")
      if (card) {
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
    }

    function handleCardMouseLeave() {
      this.style.transform = ""
    }
  } catch (e) {
    console.error("Error initializing animations:", e)
  }
})
