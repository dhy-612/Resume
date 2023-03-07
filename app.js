let mobileMenu = document.querySelector('.mobile-menu');
let menuItems = document.querySelectorAll('.menuItem');
let hamburgerBtn = document.querySelector('.hambug-menu');
let closeIcon = document.querySelector('.closeIcon');
let menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (mobileMenu.classList.contains('showMenu')) {
    mobileMenu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    mobileMenu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}

hamburgerBtn.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
