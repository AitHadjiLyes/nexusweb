// Error handling script to ensure the website loads properly even if some resources fail to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Error handler initialized")

  // Force hide loading screen after a timeout
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen && loadingScreen.style.opacity !== "0") {
      console.log("Forcing loading screen to hide due to timeout")
      loadingScreen.style.opacity = "0"
      setTimeout(() => {
        loadingScreen.style.display = "none"
        document.body.classList.remove("loading")
      }, 1000)
    }
  }, 5000) // Force hide after 5 seconds

  // Handle missing images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.onerror = function () {
      console.log(`Image failed to load: ${this.src}`)
      this.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect fill='%23ddd' width='300' height='150'/%3E%3Ctext fill='%23555' font-family='sans-serif' font-size='30' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E"
      this.alt = "Image not available"
      this.style.backgroundColor = "#f0f0f0"
    }
  })

  // Check if CSS files loaded correctly and create fallback styles if needed
  const cssFiles = [
    { href: "/assets/css/style.css", isLoaded: false },
    { href: "/assets/css/animations.css", isLoaded: false },
    { href: "/assets/css/components.css", isLoaded: false },
    { href: "/assets/css/utilities.css", isLoaded: false },
  ]

  // Check if CSS files are loaded
  const styleSheets = document.styleSheets
  for (let i = 0; i < styleSheets.length; i++) {
    try {
      const href = styleSheets[i].href
      if (href) {
        cssFiles.forEach((file) => {
          if (href.includes(file.href)) {
            file.isLoaded = true
          }
        })
      }
    } catch (e) {
      console.error("Error checking stylesheets:", e)
    }
  }

  // Add fallback styles for missing CSS files
  cssFiles.forEach((file) => {
    if (!file.isLoaded) {
      console.warn(`CSS file ${file.href} not loaded. Adding fallback styles.`)
      const style = document.createElement("style")
      style.textContent = `
        /* Fallback styles */
        body { font-family: sans-serif; color: #fff; background-color: #000; }
        .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        section { padding: 50px 0; }
        h1, h2, h3 { margin-bottom: 20px; }
        .cyber-button { display: inline-block; padding: 10px 20px; background: linear-gradient(to right, #a855f7, #ec4899); color: white; text-decoration: none; border-radius: 4px; margin: 10px 0; }
        .holographic-card { background-color: rgba(0, 0, 0, 0.5); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 8px; padding: 20px; margin-bottom: 20px; }
      `
      document.head.appendChild(style)
    }
  })

  // Handle audio loading errors
  const audioElement = document.getElementById("background-audio")
  if (audioElement) {
    audioElement.onerror = () => {
      console.warn("Audio file failed to load. Disabling audio functionality.")
      const audioToggle = document.getElementById("audio-toggle")
      if (audioToggle) {
        audioToggle.style.display = "none"
      }
    }
  }

  // Check if JavaScript files loaded correctly
  const requiredScripts = [
    "/assets/js/main.js",
    "/assets/js/particles.js",
    "/assets/js/cyber-effects.js",
    "/assets/js/animations.js",
  ]

  requiredScripts.forEach((scriptSrc) => {
    const scriptElement = document.querySelector(`script[src="${scriptSrc}"]`)
    if (!scriptElement) {
      console.warn(`Required script ${scriptSrc} not found in the document. Adding it now.`)
      const newScript = document.createElement("script")
      newScript.src = scriptSrc
      newScript.onerror = () => {
        console.error(`Failed to load script: ${scriptSrc}`)
      }
      document.body.appendChild(newScript)
    }
  })

  // Global error handler
  window.addEventListener("error", (event) => {
    console.error("Global error caught:", event.message, "at", event.filename, ":", event.lineno)
    return false
  })

  console.log("Error handler setup complete")
})
