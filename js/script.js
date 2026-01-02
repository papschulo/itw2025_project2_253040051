const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const swiper2 = new Swiper(".swiper2", {
    slidesPerView:1,
    spacebetween:3,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable:true,
    },
});

// HAMBURGER
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});


// NAVBAR FIXED
window.onscroll = function() {
  const nav = document.querySelector('header');
  const fixedNav = nav.offsetTop;

  if(window.pageYOffset > fixedNav) {
    nav.classList.add('navbar-fixed');
  } else {
    nav.classList.remove('navbar-fixed');
  }
}