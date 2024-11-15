// Get all important classes
let icon = document.querySelector(".header .links .icon")
let list = document.querySelector(".header .links ul")
let list_links = document.querySelectorAll(".header .links ul li")

// Show and Unshow list on click event
icon.onclick = () => list.classList.toggle("none")

// Scroll to Services section
list_links[0].addEventListener("click", () => window.scrollTo(0, 1125))
// Scroll to Portfolio section
list_links[1].addEventListener("click", () => window.scrollTo(0, 1875))
// Scroll to About section
list_links[2].addEventListener("click", () => window.scrollTo(0, 2594))
// Scroll to Contact section
list_links[3].addEventListener("click", () => window.scrollTo(0, 3218))