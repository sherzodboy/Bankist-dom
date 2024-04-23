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
