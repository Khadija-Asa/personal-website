// Menu burger
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");  
}

// Gsap animation

// Overlay
TweenMax.to(".first", 1.5, {
    delay: .4,
    top: "-100%",
    ease: Expo.easeInOut
  });

TweenMax.to(".second", 1.5, {
    delay: .6,
    top: "-100%",
    ease: Expo.easeInOut
  });

TweenMax.to(".third", 1.5, {
    delay: .8,
    top: "-100%",
    ease: Expo.easeInOut
  });

// Landing animation
let tl = gsap.timeline();


// clear the form after submission
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}