const header = document.querySelector('.header');
const openButton = document.querySelector('.header__nav-toggle--burger');
const closeButton = document.querySelector('.header__nav-toggle--cross');
const navigation = document.querySelector('.header__navigation');
const activeLinks = navigation.querySelectorAll('.site-list__link')

openButton.addEventListener('click', () => {
    header.classList.remove('header--nav-closed');
    header.classList.add('header--nav-open');
    navigation.classList.add('header__navigation--open')
});

closeButton.addEventListener('click', () => {
  header.classList.remove('header--nav-open');
  header.classList.add('header--nav-closed');
  navigation.classList.remove('header__navigation--open')
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
