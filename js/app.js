 // Get DOM Elements
const nav = document.querySelector('#my-nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('.close');

// Events
navBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
window.addEventListener('click', outsideClick);
console.log(closeBtn);

// Open
function openNav() {
  nav.style.display = 'block';
}

// Close
function closeNav() {
  nav.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {

  if (e.target == nav) {
    nav.style.display = 'none';
  }

}