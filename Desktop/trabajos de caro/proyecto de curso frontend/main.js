const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.email');
const mobileMenu = document.querySelector('.menu-mobile');
const burguerMenu = document.querySelector('.menu-hamburguesa')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}