function changeTheme() {
  const element = document.documentElement
  const theme = element.classList.contains("dark") ? "light" : "dark"

  const css = document.createElement("style")

  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`,
    ),
  )
  document.head.appendChild(css)

  if (theme === "dark") {
    element.classList.add("dark")
  } else {
    element.classList.remove("dark")
  }

  window.getComputedStyle(css).opacity
  document.head.removeChild(css)
  
  try {
    localStorage.theme = theme
  } catch (e) {
    console.warn("Failed to save theme to localStorage:", e)
  }
}

function preloadTheme() {
  let theme
  try {
    const userTheme = localStorage.theme

    if (userTheme === "light" || userTheme === "dark") {
      theme = userTheme
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  } catch (e) {
    console.warn("Failed to read theme from localStorage, using system preference:", e)
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  const element = document.documentElement

  if (theme === "dark") {
    element.classList.add("dark")
  } else {
    element.classList.remove("dark")
  }

  try {
    localStorage.theme = theme
  } catch (e) {
    console.warn("Failed to save theme to localStorage:", e)
  }
}

function initializeThemeButtons() {
  const headerThemeButton = document.getElementById("header-theme-button")
  const drawerThemeButton = document.getElementById("drawer-theme-button")
  headerThemeButton?.addEventListener("click", changeTheme)
  drawerThemeButton?.addEventListener("click", changeTheme)
}

// Wait for DOM to be fully loaded before initializing theme
document.addEventListener("DOMContentLoaded", () => {
  preloadTheme()
  initializeThemeButtons()
})

// Reinitialize on Astro page transitions
document.addEventListener("astro:after-swap", () => {
  preloadTheme()
  initializeThemeButtons()
})
