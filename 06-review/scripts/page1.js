// 'use strict';
// // Global variable

// const sections = document.querySelectorAll('section');

// // modal video
// const videoLanding = document.querySelector('.video');
// const modalVideo = document.querySelector('.modal');
// const overlayVideo = document.querySelector('.overlay');

// //feedback
// const operationTab = document.querySelector('.operation-tab');
// const tabs = document.querySelectorAll('.option');
// const content = document.querySelectorAll('.operation-content');

// //Landing
// const textLanding = document.querySelector('.landing .text');

// //roadmap
// const plansRoadmap = document.querySelectorAll('.plan-roadmap');

// //price
// const inputRange = document.querySelector('.range .range');
// const price = document.querySelector('.range .number');
// const plans = document.querySelectorAll('.pricing .plan-pricing');
// const planPrice = document.querySelectorAll('.pricing .plan-pricing .number');
// const dataPriceInput = {
//     0: '1000',
//     1: '1250',
//     2: '1500',
//     3: '2000',
//     4: '2500',
//     5: '3500',
//     6: '6000',
//     7: '15000',
//     8: '50000',
// };

// const newPricePlan = {
//     1: {
//         0: '10',
//         1: '12',
//         2: '15',
//         3: '20',
//         4: '25',
//         5: '35',
//         6: '60',
//         7: '150',
//         8: '500',
//     },
//     2: {
//         0: '16',
//         1: '27',
//         2: '40',
//         3: '60',
//         4: '80',
//         5: '120',
//         6: '140',
//         7: '1500',
//         8: '2500',
//     },
//     3: {
//         0: '20',
//         1: '40',
//         2: '60',
//         3: '80',
//         4: '120',
//         5: '150',
//         6: '190',
//         7: '2000',
//         8: '3000',
//     },
// };
// //to get length of Object.keys(dataPriceInput).length
// const lengthData = Object.keys(dataPriceInput).length - 1;
// //////////////////////////////////////////////////////////////////////////////////////////////

// // Global function

// const closeModal = function () {
//     modalVideo.classList.add('hidden');
//     overlayVideo.classList.add('hidden');
// };

// const openModal = function () {
//     modalVideo.classList.remove('hidden');
//     overlayVideo.classList.remove('hidden');
// };

// ///////////////////////////////////////////////

// const removeHidden = function (entry, el, numberOfHidden) {
//     const elements = entry.querySelectorAll(`${el}`);
//     elements.forEach(el =>
//         el.classList.remove(`opacity-hidden-${numberOfHidden}`)
//     );
// };

// //////////////////////////////////////////////////////////////////////////////////////////////

// //modal and video
// //Video will Appear
// videoLanding.addEventListener('click', openModal);

// //Video will hide
// overlayVideo.addEventListener('click', closeModal);

// //Escape press
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//         if (!videoLanding.classList.contains('hidden')) {
//             closeModal();
//         }
//     }
// });

// //////////////////////////////////////////////////////////////////////////////////////////////

// //Feedback section
// operationTab.addEventListener('click', function (option) {
//     // const clicked = option.target.parentElement;  we use closest because the parentelement select children but the parent not
//     const clicked = option.target.closest('.option');

//     if (!clicked) return;

//     //active tab
//     tabs.forEach(t => t.classList.remove('option-tab-active'));
//     clicked.classList.add('option-tab-active');

//     //active content
//     content.forEach(content =>
//         content.classList.remove('operation-content-active')
//     );
//     document
//         .querySelector(`.operation-content--${clicked.dataset.tab}`)
//         .classList.add('operation-content-active');
// });

// //////////////////////////////////////////////////////////////////////////////////////////////

// //Revealing Elements

// //loading elements
// const contentLoad = function (entries, observer) {
//     const [entry] = entries;
//     if (entry.target.className === 'landing') {
//         textLanding.classList.remove('opacity-hidden-1');
//         videoLanding.classList.remove('opacity-hidden-2');
//     } else if (entry.target.className === 'features') {
//         removeHidden(entry.target, '.box-features', 1);
//     } else if (entry.target.className === 'illustration') {
//         removeHidden(entry.target, '.box-illustration', 1);
//     } else if (entry.target.className === 'pricing') {
//         removeHidden(entry.target, '.plan-pricing', 1);
//     } else if (entry.target.className === 'features') {
//         removeHidden(entry.target, '.box-features', 1);
//     }
//     observer.unobserve(entry.target);
// };

// const secObserve = new IntersectionObserver(contentLoad, {
//     root: null,
//     threshold: 0.3,
// });
// sections.forEach(sec => secObserve.observe(sec));

// ///////////////////////////////////////////////

// //loading plans
// const plansLoad = function (entries, observer) {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove(
//         `opacity-hidden-${
//             entry.target.classList.contains('opacity-hidden-3') ? 3 : 4
//         }`
//     );
//     observer.unobserve(entry.target);
// };

// const elObserve = new IntersectionObserver(plansLoad, {
//     root: null,
//     threshold: 0.15,
// });
// plansRoadmap.forEach(el => elObserve.observe(el));

// //////////////////////////////////////////////////////////////////////////////////////////////

// // price for each plan

// // //to set object in html
// // inputRange.setAttribute('data-price-input', JSON.stringify(dataPriceInput));
// inputRange.setAttribute('min', 0);
// inputRange.setAttribute('value', lengthData / 2);
// inputRange.setAttribute('max', lengthData);

// inputRange.oninput = () => {
//     const value = inputRange.value;
//     inputRange.setAttribute('value', value);
//     price.textContent = dataPriceInput[value];
//     price.style.left = 12.5 * value + '%';
//     plans.forEach(plan => {
//         const number = plan.querySelector('.price .number');
//         number.textContent = newPricePlan[`${plan.dataset.tab}`][value];
//     });

//     // price.classList.add('show');
// };

'use strict';

// DOM Elements
const sections = document.querySelectorAll('section');
const videoLanding = document.querySelector('.video');
const modalVideo = document.querySelector('.modal');
const overlayVideo = document.querySelector('.overlay');
const operationTab = document.querySelector('.operation-tab');
const tabs = document.querySelectorAll('.option');
const content = document.querySelectorAll('.operation-content');
const textLanding = document.querySelector('.landing .text');
const plansRoadmap = document.querySelectorAll('.plan-roadmap');
const inputRange = document.querySelector('.range .range');
const price = document.querySelector('.range .number');
const plans = document.querySelectorAll('.pricing .plan-pricing');

// Data
const dataPriceInput = {
    0: '1000',
    1: '1250',
    2: '1500',
    3: '2000',
    4: '2500',
    5: '3500',
    6: '6000',
    7: '15000',
    8: '50000',
};
const newPricePlan = {
    1: {
        0: '10',
        1: '12',
        2: '15',
        3: '20',
        4: '25',
        5: '35',
        6: '60',
        7: '150',
        8: '500',
    },
    2: {
        0: '16',
        1: '27',
        2: '40',
        3: '60',
        4: '80',
        5: '120',
        6: '140',
        7: '1500',
        8: '2500',
    },
    3: {
        0: '20',
        1: '40',
        2: '60',
        3: '80',
        4: '120',
        5: '150',
        6: '190',
        7: '2000',
        8: '3000',
    },
};

// Constants
const lengthData = Object.keys(dataPriceInput).length - 1;

// Functions
const closeModal = () => {
    modalVideo.classList.add('hidden');
    overlayVideo.classList.add('hidden');
};

const openModal = () => {
    modalVideo.classList.remove('hidden');
    overlayVideo.classList.remove('hidden');
};

const removeHidden = (entry, el, numberOfHidden) => {
    const elements = entry.querySelectorAll(el);
    elements.forEach(el =>
        el.classList.remove(`opacity-hidden-${numberOfHidden}`)
    );
};

const contentLoad = (entries, observer) => {
    const [entry] = entries;
    switch (entry.target.className) {
        case 'landing':
            textLanding.classList.remove('opacity-hidden-1');
            videoLanding.classList.remove('opacity-hidden-2');
            break;
        case 'features':
            removeHidden(entry.target, '.box-features', 1);
            break;
        case 'illustration':
            removeHidden(entry.target, '.box-illustration', 1);
            break;
        case 'pricing':
            removeHidden(entry.target, '.plan-pricing', 1);
            break;
    }
    observer.unobserve(entry.target);
};

const plansLoad = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(
        `opacity-hidden-${
            entry.target.classList.contains('opacity-hidden-3') ? 3 : 4
        }`
    );
    observer.unobserve(entry.target);
};

// Event Listeners
videoLanding.addEventListener('click', openModal);
overlayVideo.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !videoLanding.classList.contains('hidden')) {
        closeModal();
    }
});

operationTab.addEventListener('click', option => {
    const clicked = option.target.closest('.option');
    if (!clicked) return;
    tabs.forEach(t => t.classList.remove('option-tab-active'));
    clicked.classList.add('option-tab-active');
    content.forEach(content =>
        content.classList.remove('operation-content-active')
    );
    document
        .querySelector(`.operation-content--${clicked.dataset.tab}`)
        .classList.add('operation-content-active');
});

const secObserve = new IntersectionObserver(contentLoad, {
    root: null,
    threshold: 0.3,
});
sections.forEach(sec => secObserve.observe(sec));

const elObserve = new IntersectionObserver(plansLoad, {
    root: null,
    threshold: 0.15,
});
plansRoadmap.forEach(el => elObserve.observe(el));

inputRange.setAttribute('min', 0);
inputRange.setAttribute('value', lengthData / 2);
inputRange.setAttribute('max', lengthData);

inputRange.oninput = () => {
    const value = inputRange.value;
    inputRange.setAttribute('value', value);
    price.textContent = dataPriceInput[value];
    price.style.left = `${12.5 * value}%`;
    plans.forEach(plan => {
        const number = plan.querySelector('.price .number');
        number.textContent = newPricePlan[plan.dataset.tab][value];
    });
};
