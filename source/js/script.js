const openButton = document.querySelector('.header__nav-toggle-burger');
const closeButton = document.querySelector('.site-menu__nav-toggle-cross');
const header = document.querySelector('.header');
const main = document.querySelector('.main__content-wrapper');
const siteMenu = document.querySelector('.site-menu');
const navigationLinks = document.querySelectorAll('.navigation__link');
const pageNavigationLinks = document.querySelectorAll('.page-navigation__link');



openButton.addEventListener('click', () => {
  openButton.classList.add('header__nav-toggle-burger--open');
  siteMenu.classList.add('site-menu--open');
  header.classList.add('overlay');
  main.classList.add('overlay');

});

closeButton.addEventListener('click', () => {
  openButton.classList.remove('header__nav-toggle-burger--open');
  siteMenu.classList.remove('site-menu--open');
  header.classList.remove('overlay');
  main.classList.remove('overlay');
});


window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1336px)').matches) {
    siteMenu.classList.remove('site-menu--open');
  }
});

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigationLinks.forEach(link => {
      if (link.classList.contains('navigation__link--active')) {
        link.classList.remove('navigation__link--active');
      }
    });

    link.classList.add('navigation__link--active');
  });
});

pageNavigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    pageNavigationLinks.forEach(link => {
      if (link.classList.contains('page-navigation__link--active')) {
        link.classList.remove('page-navigation__link--active');
      }
    });

    link.classList.add('page-navigation__link--active');
  });
});


