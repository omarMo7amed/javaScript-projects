'use strict';

///////////////////////////////////////

//Select Element
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('.section');
const allBtns = document.getElementsByTagName('button');
const message = document.createElement('div');
const header = document.querySelector('header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabcontainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const allLazyImage = document.querySelectorAll('.lazy-img');

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//message
message.classList.add('cookie-message');
message.innerHTML = `We use cookied for improved functionalityand analytics. <button class = "btn btn--close--cookie">Go It!</button>`;

//to appear message before header
//header.prepend(message);
//header.before(message);

//to appear message after header
//header.after(message);
header.append(message);

//to appeat message in before and after header
//header.append(message.cleanNode(true));

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

btnScrollTo.addEventListener('click', function () {
  //Modern method
  section1.scrollIntoView({ behavior: 'smooth' });

  //oldest method
  /*const sec1 = section1.getBoundingClientRect();
  window.scrollTo({
    left: sec1.left + window.pageXOffset,
    top: sec1.top + window.pageYOffset,
    behavior: 'smooth',
  });*/
});

//Page navigation
/*

//Not effecient
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component

tabcontainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //Remove Active Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //Active Tab
  clicked.classList.add('operations__tab--active');

  //Active Content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Animation nav

const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sib = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sib.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// bind return newFunction
nav.addEventListener('mouseover', handelHover.bind(0.5));

nav.addEventListener('mouseout', handelHover.bind(1));

//sticky navigation
/*

//bad way

const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

});*/

//Better way
const navHeight = nav.getBoundingClientRect().height;

const navSticky = function (entries) {
  const [entry] = entries;
  // isIntersecting دي ياعني بقوله هو انا لسه شايف السكشن ده؟
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

// IntersectionObserver Method is need to two argument:
// 1.argument -> callBack function
// 2.argument -> options
const observer = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

// here i tell him to observe this target->() if condtion is true then do it
observer.observe(header);

//Reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  //علشان متعملش كل شوية اجي عند السكشن ده ف كده وقفته
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//lazy loading images
const lazyImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('lazy-img');
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(lazyImage, {
  root: null,
  threshold: 0,
});

allLazyImage.forEach(img => imgObserver.observe(img));

//slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let curslide = 0;

const goToSlide = function (s) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - s) * 100}%)`;
  });
};

goToSlide(0);

const nextSlide = () => {
  curslide = curslide === slides.length - 1 ? 0 : curslide + 1;
  goToSlide(curslide);
  activeDot(curslide);
};

const prevSlide = () => {
  curslide = curslide === 0 ? slides.length - 1 : curslide - 1;
  goToSlide(curslide);
  activeDot(curslide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//arrow key
document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
  activeDot(curslide);
});

//Creat dots
const creatDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class ="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
creatDots();
activeDot(0);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;

    goToSlide(slide);
    activeDot(slide);
  }
});

// do you want close website?

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});
