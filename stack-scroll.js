const nav = document.querySelector(".nav-bar")
const bounce = document.querySelector(".bounce-bottom")
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
        nav.classList.add("nav-scroll")
    } else {
        nav.classList.remove("nav-scroll")
    }
    if (scrollHeight > 2000) {
        bounce.classList.add("show-box")
    } else {
        bounce.classList.remove("show-box")
    }
})

//for the date
const date = document.querySelector(".stacker")
const fullYear = new Date().getFullYear()
date.innerHTML = fullYear
