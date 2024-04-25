'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// !Lecture
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const btns = document.getElementsByTagName('button');
// console.log(btns);
/*
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'hello world <button>click</button> ';
message.innerHTML =
  'hello world <button class="btn-click-me" style="margin-left: 20px">click</button> ';
// header.prepend(message);
header.append(message);

document.querySelector('.btn-click-me').addEventListener('click', () => {
  message.remove();
  //   message.parentElement.removeChild(message);
});

message.style.backgroundColor = 'red';
message.style.width = '100%';

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'hello world';

// Non-standart
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));

console.log(logo.dataset.versionNumber);
*/

/*
const h1 = document.querySelector('h1');

const logger1 = () => {
  alert('clicked 1');
};

h1.addEventListener('mouseenter', logger1);

setTimeout(() => {
  return h1.removeEventListener('mouseenter', logger1);
}, 5000);
*/

/*
// Dom traversing
const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'blue';

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'green';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
*/
