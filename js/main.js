let themeBtn = document.getElementById("dark-theme")

themeBtn.onclick = () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light")
    themeBtn.src = "images/ChatGPT Image Apr 28, 2026, 01_56_15 PM.png"
  } else {
    document.body.classList.add("light")
    themeBtn.src = "images/ChatGPT Image Apr 26, 2026, 10_20_39 PM.png"
  }
}

let menuToggle = document.getElementById("menu-toggle")
let navMenu = document.getElementById("nav-menu")
let navLinks = document.querySelectorAll("#nav-menu ul li a")

menuToggle.onclick = () => {
  navMenu.classList.toggle("active")
}

navLinks.forEach((link) => {
  link.onclick = () => {
    navMenu.classList.remove("active")
  }
})

let scrollUpBtn = document.getElementById("scroll-up")

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = "flex"
  } else {
    scrollUpBtn.style.display = "none"
  }
}

scrollUpBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}