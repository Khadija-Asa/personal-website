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
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
  });

TweenMax.to(".second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
  });

TweenMax.to(".third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
  });

// Landing animation
let tl = gsap.timeline();

tl.from(".line", {
  delay: 3,
  duration: 1,
  width: "0px",
});

tl.from(".parallelogram", {
  duration: 1,
  width: "0px",
});

tl.from(".para-1", {
  duration: .5,
  opacity: 0,
});

tl.from(".para-2", {
  duration: .5,
  opacity: 0,
});

tl.from(".para-3", {
  duration: .5,
  opacity: 0,
});

tl.from(".para-4", {
  duration: .5,
  y: -60,
  opacity: 0,
});