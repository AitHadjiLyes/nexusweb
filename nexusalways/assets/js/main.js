document.addEventListener("DOMContentLoaded", () => {
  console.log("Main script initialized")

  // Loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.style.opacity = "0"
      setTimeout(() => {
        loadingScreen.style.display = "none"
        document.body.classList.remove("loading")
      }, 1000)
    }
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
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible")
      } else {
        scrollTopBtn.classList.remove("visible")
      }
    }
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active")
      }
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
      const tabContent = document.getElementById(`${tabId}-tab`)
      if (tabContent) {
        tabContent.classList.add("active")
      }
    })
  })

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scroll-top")
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme")

      if (document.body.classList.contains("light-theme")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      }
    })
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
