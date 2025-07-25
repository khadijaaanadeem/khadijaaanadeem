// Theme & Navigation Script for Khadija Nadeem's Portfolio

const body = document.body;
const btnTheme = document.querySelector('.fa-moon, .fa-sun');
const btnHamburger = document.querySelector('.fa-bars, .fa-times');

// Apply saved theme
const savedTheme = localStorage.getItem('portfolio-theme');
const savedIcon = localStorage.getItem('portfolio-btn-theme');

if (savedTheme && savedIcon) {
  body.classList.add(savedTheme);
  btnTheme.classList.add(savedIcon);
}

// Determine if current theme is dark
const isDark = () => body.classList.contains('dark');

// Update theme and icon
const setTheme = (themeClass, iconClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  body.classList.add(themeClass);
  btnTheme.classList.add(iconClass);

  localStorage.setItem('portfolio-theme', themeClass);
  localStorage.setItem('portfolio-btn-theme', iconClass);
};

// Toggle between light and dark
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

// Mobile Navigation Toggle
const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  btnHamburger.classList.toggle('fa-bars');
  btnHamburger.classList.toggle('fa-times');
  navUl.classList.toggle('display-nav-list');
};

btnHamburger.addEventListener('click', displayList);

// Scroll-to-top Button Visibility
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  btnScrollTop.style.display = scrollPosition > 500 ? 'block' : 'none';
};

document.addEventListener('scroll', scrollUp);

