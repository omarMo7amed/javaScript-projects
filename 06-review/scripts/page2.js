// 'use strict';

// //Global varables

// //AllSection
// const sections = document.querySelectorAll('section');

// //Modal
// const modalNewselter = document.querySelector('.modal');
// const overlayNewselter = document.querySelector('.overlay');
// const btnClose = document.querySelector('.close');
// const btnOpen = document.querySelector('.Open-modal');

// //Section Question
// const question = document.querySelector('.Question .inner');

// //Section Workflow
// const images = document.querySelectorAll('.Workflow .image');

// //////////////////////////////////////////////////////////////////////////////////////////////
// //Global functions
// //Modal
// const closeModal = function () {
//     modalNewselter.classList.add('hidden');
//     overlayNewselter.classList.add('hidden');
//     modalNewselter.style.opacity = '0';
//     modalNewselter.style.transform = 'translate(-50% ,-80%)';
//     modalNewselter.style.zIndex = '-1';
// };

// const openModal = function () {
//     modalNewselter.classList.remove('hidden');
//     overlayNewselter.classList.remove('hidden');
//     modalNewselter.style.opacity = '1';
//     modalNewselter.style.transform = 'translate(-50% ,-50%)';
//     modalNewselter.style.zIndex = '150';
// };

// //Workflow

// //////////////////////////////////////////////////////////////////////////////////////////////

// //section modal
// // open modal
// btnOpen.addEventListener('click', function (e) {
//     e.preventDefault();
//     openModal();
// });

// //close modal
// btnClose.addEventListener('click', closeModal);
// overlayNewselter.addEventListener('click', closeModal);
// addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modalNewselter.classList.contains('hidden')) {
//         closeModal();
//     }
// });

// //////////////////////////////////////////////////////////////////////////////////////////////

// //Realiving Elements
// //hidden element
// const removeHidden = function (entry, el, numberOfHidden) {
//     const boxes = entry.querySelectorAll(`${el}`);
//     boxes.forEach(el =>
//         el.classList.remove(`opacity-hidden-${numberOfHidden}`)
//     );
// };

// //////////////////////////////////////////////////////////////////////////////////////////////

// //section question
// //open and close question
// question.addEventListener('click', function (e) {
//     const clicked = e.target.closest('.question');
//     let more = clicked.querySelector('.more');
//     //Select before and after
//     // const clickedMoreBefore = window.getComputedStyle(more, '::before');
//     // const clickedMoreAfter = window.getComputedStyle(more, '::after');
//     if (!clicked) return;
//     const contentClicked = document.querySelector(
//         `.content--${clicked.dataset.tab}`
//     );
//     contentClicked.classList.toggle('hidden-content');

//     //set transform
//     clicked.style.setProperty('--afterTrans', '90deg');
//     clicked.style.setProperty('--beforeTrans', '180deg');
//     if (contentClicked.classList.contains('hidden-content')) {
//         clicked.style.removeProperty('--afterTrans');
//         clicked.style.removeProperty('--beforeTrans');
//     }
// });

// //////////////////////////////////////////////////////////////////////////////////////////////

// //section Workflow
// //loading image and content
// const imgLoad = function (entries, observer) {
//     const [entry] = entries;
//     //get info for image from parent box
//     const contentImg = entry.target.closest('.box').querySelector('.info');
//     if (!entry.isIntersecting) return;

//     contentImg.classList.remove('opacity-hidden-1');
//     entry.target.classList.remove('img-lazy');
//     observer.unobserve(contentImg);
//     observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(imgLoad, {
//     root: null,
//     threshold: 0.2,
// });
// images.forEach(img => imgObserver.observe(img));

// //////////////////////////////////////////////////////////////////////////////////////////////

// //Realiving elements
// const contentLoad = function (entries, observer) {
//     const [entry] = entries;
//     if (entry.target.className === 'testimonial') {
//         const client = entry.target.querySelector('.clients');
//         client.classList.remove('opacity-hidden-1');
//         removeHidden(entry.target, '.box', 1);
//     }
//     if (entry.target.className === 'know-us') {
//         removeHidden(entry.target, '.card', 1);
//     }
//     observer.unobserve(entry.target);
// };
// const contentObserve = new IntersectionObserver(contentLoad, {
//     root: null,
//     threshold: 0.3,
// });

// sections.forEach(sec => contentObserve.observe(sec));

'use strict';

// Global variables
const sections = document.querySelectorAll('section');
const modalNewsletter = document.querySelector('.modal');
const overlayNewsletter = document.querySelector('.overlay');
const btnClose = document.querySelector('.close');
const btnOpen = document.querySelector('.Open-modal');
const question = document.querySelector('.Question .inner');
const images = document.querySelectorAll('.Workflow .image');

// Constants
const HIDDEN_CLASS = 'hidden';
const OPACITY_HIDDEN_CLASS = 'opacity-hidden';
const OPACITY_HIDDEN_INDEX = 1;

// Functions
const toggleModal = show => {
    modalNewsletter.classList.toggle(HIDDEN_CLASS, !show);
    overlayNewsletter.classList.toggle(HIDDEN_CLASS, !show);
    modalNewsletter.style.opacity = show ? '1' : '0';
    modalNewsletter.style.transform = show
        ? 'translate(-50%, -50%)'
        : 'translate(-50%, -80%)';
    modalNewsletter.style.zIndex = show ? '150' : '-1';
};

const addEventListeners = (elements, event, handler) => {
    elements.forEach(element => element.addEventListener(event, handler));
};

const removeHidden = (entry, el) => {
    const boxes = entry.querySelectorAll(el);
    boxes.forEach(box =>
        box.classList.remove(`${OPACITY_HIDDEN_CLASS}-${OPACITY_HIDDEN_INDEX}`)
    );
};

// Event listeners
addEventListeners([btnOpen], 'click', e => {
    e.preventDefault();
    toggleModal(true);
});

addEventListeners([btnClose, overlayNewsletter], 'click', () => {
    toggleModal(false);
});

addEventListener('keydown', e => {
    if (
        e.key === 'Escape' &&
        !modalNewsletter.classList.contains(HIDDEN_CLASS)
    ) {
        toggleModal(false);
    }
});

question.addEventListener('click', e => {
    const clicked = e.target.closest('.question');
    if (!clicked) return;
    const contentClicked = document.querySelector(
        `.content--${clicked.dataset.tab}`
    );
    contentClicked.classList.toggle('hidden-content');

    clicked.style.setProperty('--afterTrans', '90deg');
    clicked.style.setProperty('--beforeTrans', '180deg');
    if (contentClicked.classList.contains('hidden-content')) {
        clicked.style.removeProperty('--afterTrans');
        clicked.style.removeProperty('--beforeTrans');
    }
});

// Observer callbacks
const imgLoad = (entries, observer) => {
    const [entry] = entries;
    const contentImg = entry.target.closest('.box').querySelector('.info');
    if (!entry.isIntersecting) return;
    contentImg.classList.remove('opacity-hidden-1');
    entry.target.classList.remove('img-lazy');
    observer.unobserve(contentImg);
    observer.unobserve(entry.target);
};

const contentLoad = (entries, observer) => {
    const [entry] = entries;
    if (entry.target.className === 'testimonial') {
        const client = entry.target.querySelector('.clients');
        client.classList.remove('opacity-hidden-1');
        removeHidden(entry.target, '.box');
    }
    if (entry.target.className === 'know-us') {
        removeHidden(entry.target, '.card');
    }
    observer.unobserve(entry.target);
};

// Observers
const imgObserver = new IntersectionObserver(imgLoad, {
    root: null,
    threshold: 0.2,
});
images.forEach(img => imgObserver.observe(img));

const contentObserve = new IntersectionObserver(contentLoad, {
    root: null,
    threshold: 0.3,
});
sections.forEach(sec => contentObserve.observe(sec));
