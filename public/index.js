

const menuButton = document.querySelector('.menu-button')
const burger = menuButton.querySelector('.burger-button')
const cancel = menuButton.querySelector('.cancel-button')
const menu = document.querySelector('.menu-desktop')
const logoMobile = document.querySelector('.logo-mobile')


menuButton.addEventListener('click', () => {
  navListToggle()
})

function navListToggle() {
  
  
  burger.classList.toggle('hidden')
  menu.classList.toggle('hidden')
  logoMobile.classList.toggle('hidden')
  cancel.classList.toggle('hidden')
}