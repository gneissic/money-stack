const btn = document.querySelector(".header-btn")
const about = document.querySelectorAll(".about-article")
const more = document.querySelectorAll(".more")
window.addEventListener("DOMContentLoaded", function() {
    btn.addEventListener("click", function() {
        btn.innerHTML = "downloading..."
    })
    about.forEach(function(abouts, index) {
        abouts.style.left = `${index * 100}% `
    })
    let counter = 0
    
    more.forEach(function(learn) {
        learn.addEventListener("click", function(e) {
            counter++
            allSLides()
        })
    })
    function allSLides() {
        about.forEach(function(abouts) {
            if (counter == about.length) {
                counter = 0
            }
            abouts.style.transform = `translateX(-${counter*100}%)`
        })
    }
})