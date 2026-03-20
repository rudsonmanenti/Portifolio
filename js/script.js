window.addEventListener("scroll", () => {
const header = document.querySelector(".header")
if(window.scrollY > 50){
header.style.background = "rgba(0,0,0,0.9)"
}
})
const toggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")
toggle.addEventListener("click", () => {
menu.classList.toggle("active")
})