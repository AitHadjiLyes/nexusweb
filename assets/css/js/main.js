document.addEventListener("DOMContentLoaded", () => {
  // Loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 1000)
  }, 2500)

  // Initialize active section
  updateActiveSection()

  // Header scroll effect
  const header = document.querySelector(".site-header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Update active section
    updateActiveSection()

    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById("scroll-top")
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible")
    } else {
      scrollTopBtn.classList.remove("visible")
    }
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    // Toggle menu icon
    const toggleIcon = menuToggle.querySelector(".toggle-icon")
    if (mobileMenu.classList.contains("active")) {
      toggleIcon.style.background = "transparent"
      toggleIcon.style.transform = "rotate(45deg)"
      toggleIcon.style.before = "transform: rotate(90deg) translate(8px, 0)"
      toggleIcon.style.after = "transform: rotate(-90deg) translate(8px, 0)"
    } else {
      toggleIcon.style.background = ""
      toggleIcon.style.transform = ""
      toggleIcon.style.before = ""
      toggleIcon.style.after = ""
    }
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const offsetTop = targetElement.offsetTop
        window.scrollTo({
          top: offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and content
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      const tabContents = document.querySelectorAll(".tab-content")
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      const tabId = this.getAttribute("data-tab")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })

  // Initialize skill bars
  const skillBars = document.querySelectorAll(".skill-progress")
  skillBars.forEach((bar, index) => {
    const value = bar.parentElement.previousElementSibling.lastElementChild.textContent
    bar.style.setProperty("--width", value)
    bar.style.setProperty("--i", index)
  })

  // Audio toggle
  const audioToggle = document.getElementById("audio-toggle")
  const backgroundAudio = document.getElementById("background-audio")

  audioToggle.addEventListener("click", () => {
    if (backgroundAudio.paused) {
      backgroundAudio.play()
      audioToggle.classList.add("active")
    } else {
      backgroundAudio.pause()
      audioToggle.classList.remove("active")
    }
  })

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scroll-top")
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Mouse follower effect
  const mouseFollower = document.getElementById("mouse-follower")

  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
      // Only on desktop
      mouseFollower.style.display = "block"
      mouseFollower.style.left = e.clientX + "px"
      mouseFollower.style.top = e.clientY + "px"
    } else {
      mouseFollower.style.display = "none"
    }
  })

  // Glitch text effect
  const glitchTexts = document.querySelectorAll(".glitch-text")
  glitchTexts.forEach((text) => {
    text.setAttribute("data-text", text.textContent)

    // Random glitch effect
    setInterval(
      () => {
        text.classList.add("glitching")
        setTimeout(() => {
          text.classList.remove("glitching")
        }, 200)
      },
      3000 + Math.random() * 5000,
    )
  })

  // Initialize holographic cards
  initHolographicCards()

  // Terminal typing effect
  const terminalLines = document.querySelectorAll(".terminal-line")
  terminalLines.forEach((line, index) => {
    const text = line.textContent
    line.textContent = ""

    setTimeout(() => {
      typeText(line, text, 50)
    }, index * 1000)
  })

  // Contact form validation
  const contactForm = document.querySelector(".contact-form form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")

      let isValid = true

      if (!nameInput.value.trim()) {
        isValid = false
        nameInput.style.borderColor = "red"
      } else {
        nameInput.style.borderColor = ""
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false
        emailInput.style.borderColor = "red"
      } else {
        emailInput.style.borderColor = ""
      }

      if (!messageInput.value.trim()) {
        isValid = false
        messageInput.style.borderColor = "red"
      } else {
        messageInput.style.borderColor = ""
      }

      if (!isValid) {
        e.preventDefault()
        alert("Veuillez remplir tous les champs correctement.")
      }
    })
  }

  // Check for contact form success/error messages in URL
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get("contact") === "success") {
    alert("Votre message a été envoyé avec succès. Nous vous contacterons bientôt.")
  } else if (urlParams.get("contact") === "error") {
    const errors = urlParams.get("errors")
    if (errors) {
      alert("Erreur: " + errors.replace("|", "\n"))
    }
  }
})

// Helper functions
function updateActiveSection() {
  const sections = ["hero", "services", "tech", "projects", "contact"]
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        // Update nav links
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${section}`) {
            link.classList.add("active")
          }
        })

        // Update mobile nav links
        document.querySelectorAll(".mobile-nav-link").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${section}`) {
            link.classList.add("active")
          }
        })

        break
      }
    }
  }
}

function initHolographicCards() {
  const cards = document.querySelectorAll(".holographic-card")

  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
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

      this.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(168, 85, 247, 0.15), transparent 70%)`
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.background = ""
    })
  })
}

function typeText(element, text, speed) {
  let i = 0
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
    } else {
      clearInterval(interval)
    }
  }, speed)
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
