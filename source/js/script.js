const header = document.querySelector('.header');
const openButton = document.querySelector('.header__nav-toggle-burger');
const closeButton = document.querySelector('.header__nav-toggle-cross');
const searchButton = document.querySelector('.header__search-button');
const serviceList = document.querySelector('.header__service-list');
const contactList = document.querySelector('.header__contact-list');
const navButtonsWrapper = document.querySelector('.header__nav-buttons-wrapper');
const navButtonsCentric = document.querySelector('.header__nav-buttons-centric');
const navigation = document.querySelector('.header__navigation');
const activeLinks = navigation.querySelectorAll('.site-list__link')

openButton.addEventListener('click', () => {
  header.classList.add('header--open');
  openButton.classList.add('header__nav-toggle-burger--open');
  closeButton.classList.add('header__nav-toggle-cross--open');
  searchButton.classList.add('header__search-button--open');
  navButtonsWrapper.classList.add('header__nav-buttons-wrapper--open');
  navButtonsCentric.classList.add('header__nav-buttons-centric--open');
  serviceList.classList.add('header__service-list--open');
  contactList.classList.add('header__contact-list--open');
  navigation.classList.add('header__navigation--open');
});

closeButton.addEventListener('click', () => {
  header.classList.remove('header--open');
  openButton.classList.remove('header__nav-toggle-burger--open');
  closeButton.classList.remove('header__nav-toggle-cross--open');
  searchButton.classList.remove('header__search-button--open');
  serviceList.classList.remove('header__service-list--open');
  contactList.classList.remove('header__contact-list--open');
  navButtonsWrapper.classList.remove('header__nav-buttons-wrapper--open');
  navButtonsCentric.classList.remove('header__nav-buttons-centric--open');
  navigation.classList.remove('header__navigation--open');
});


window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1336px)').matches) {
    header.classList.remove('header--open');
    openButton.classList.remove('header__nav-toggle-burger--open');
    closeButton.classList.remove('header__nav-toggle-cross--open');
    searchButton.classList.remove('header__search-button--open');
    serviceList.classList.remove('header__service-list--open');
    contactList.classList.remove('header__contact-list--open');
    navButtonsWrapper.classList.remove('header__nav-buttons-wrapper--open');
    navButtonsCentric.classList.remove('header__nav-buttons-centric--open');
    navigation.classList.remove('header__navigation--open');
  }
});

activeLinks.forEach(link => {
  link.addEventListener('click', () => {
    activeLinks.forEach(link => {
      if (link.classList.contains('site-list__link--active')) {
        link.classList.remove('site-list__link--active');
      }
    });

    link.classList.add('site-list__link--active');
  });
});
