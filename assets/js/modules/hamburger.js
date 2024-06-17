export function hamburger (a , b , c) {
  
const box = document.getElementsByClassName(a)[0];
const boxActive = document.getElementsByClassName(b)[0];
const title = document.querySelector('h1');
const nav = document.querySelector('nav');
const logo = document.getElementsByClassName('logo')[0];

const hamburgerMenu = () => {
  box.classList.toggle(c);
  boxActive.classList.toggle(c);
  title.classList.toggle(c);
  nav.classList.toggle(c);
  logo.classList.toggle(c);
}
box.addEventListener('click', hamburgerMenu);

}
