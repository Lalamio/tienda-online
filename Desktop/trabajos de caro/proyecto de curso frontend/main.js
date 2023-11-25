const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.email');
menuEmail.addEventListener('click', activarDesktopMenu);


function activarDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}