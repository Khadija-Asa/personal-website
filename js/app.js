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

//Gsap animation

// let tl = gsap.timeline();

// tl.from('.brand, .button' ,{
//     duration: 1,
//     opacity: 0
// });

// tl.from('.brand',{
//     duration: .75,
//     x: '-100%'
// });