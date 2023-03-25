const navtoggle = document.querySelector(".navToggle")
const navMenu = document.querySelector(".encabezado__menu")

navtoggle.addEventListener("click",() => {
  navMenu.classList.toggle("encabezado__menu_visible")
})