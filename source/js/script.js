const openButton = document.querySelector('.header__nav-toggle-burger');
const closeButton = document.querySelector('.site-menu__nav-toggle-cross');
const closeFeedbackButton = document.querySelector('.feedback__button-cross');
const closeCallButton = document.querySelector('.call__button-cross');
const contactButtons = document.querySelectorAll('.contact-list__link--message');
const callButtons = document.querySelectorAll('.contact-list__link--phone');
const header = document.querySelector('.header');
const main = document.querySelector('.main__content-wrapper');
const siteMenu = document.querySelector('.site-menu');
const feedback = document.querySelector('.feedback');
const call = document.querySelector('.call');
const navigationLinks = document.querySelectorAll('.navigation__link');
const pageNavigationLinks = document.querySelectorAll('.page-navigation__link');
const aboutMoreButton = document.querySelector('.about-us__more-button');
const brandMoreButton = document.querySelector('.equipment-brand__more-button');
const typeMoreButton = document.querySelector('.equipment-type__more-button');
const textContainer = document.querySelector('.about-us__text-container');
const brandContainer = document.querySelector('.equipment-brand__brand-list');
const typeContainer = document.querySelector('.equipment-type__list');
const overlay = document.querySelector('.overlay');



openButton.addEventListener('click', () => {
  openButton.classList.add('header__nav-toggle-burger--open');
  siteMenu.classList.add('site-menu--open');
  overlay.classList.add('overlay--active');
});

closeButton.addEventListener('click', () => {
  openButton.classList.remove('header__nav-toggle-burger--open');
  siteMenu.classList.remove('site-menu--open');
  overlay.classList.remove('overlay--active');
});

closeFeedbackButton.addEventListener('click', () => {
  feedback.classList.remove('feedback--open');
  closeFeedbackButton.classList.remove('feedback__button-cross--open');
  /*overlay.classList.remove('overlay--active');*/
});

contactButtons.forEach(item => {
  item.addEventListener('click', () => {
    feedback.classList.add('feedback--open');
    closeFeedbackButton.classList.add('feedback__button-cross--open');
    /*overlay.classList.add('overlay--active');*/
  });
});

closeCallButton.addEventListener('click', () => {
  call.classList.remove('call--open');
  closeCallButton.classList.remove('call__button-cross--open');
  /*overlay.classList.remove('overlay--active');*/
});

callButtons.forEach(item => {
  item.addEventListener('click', () => {
    call.classList.add('call--open');
    closeCallButton.classList.add('call__button-cross--open');
    /*overlay.classList.add('overlay--active');*/
  });
});


document.addEventListener('click', (evt) => {
  const target = evt.target;
  const isMenuClicked = target == siteMenu || siteMenu.contains(target);
  const isOpenButtonClicked = target == openButton;


  if (!isOpenButtonClicked && (!isMenuClicked)) {
    overlay.classList.remove('overlay--active');
    openButton.classList.remove('header__nav-toggle-burger--open');
    siteMenu.classList.remove('site-menu--open');
  }

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

aboutMoreButton.addEventListener('click', () => {
  if (aboutMoreButton.innerText === 'Читать далее') {
    aboutMoreButton.innerText = 'Скрыть';
    aboutMoreButton.classList.add('more-button--less');
    textContainer.classList.add('about-us__text-container--full');
  } else {
    aboutMoreButton.innerText = 'Читать далее';
    aboutMoreButton.classList.remove('more-button--less');
    textContainer.classList.remove('about-us__text-container--full');
  }
})

brandMoreButton.addEventListener('click', () => {
  if (brandMoreButton.innerText === 'Показать все') {
    brandMoreButton.innerText = 'Скрыть';
    brandMoreButton.classList.add('more-button--less');
    brandContainer.classList.add('equipment-brand__brand-list--full');
  } else {
    brandMoreButton.innerText = 'Показать все';
    brandMoreButton.classList.remove('more-button--less');
    brandContainer.classList.remove('equipment-brand__brand-list--full');
  }
});

typeMoreButton.addEventListener('click', () => {
  if (typeMoreButton.innerText === 'Показать все') {
    typeMoreButton.innerText = 'Скрыть';
    typeMoreButton.classList.add('more-button--less');
    typeContainer.classList.add('equipment-type__list--full');
  } else {
    typeMoreButton.innerText = 'Показать все';
    typeMoreButton.classList.remove('more-button--less');
    typeContainer.classList.remove('equipment-type__list--full');
  }
});
