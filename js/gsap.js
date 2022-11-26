// gsap animation

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
// let tl = gsap.timeline();

// tl.from('hr', {
//   duration: 2,
//   width: 0
// })


// Cards animation
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".box-card");

gsap.to(sections, {
  xPercent: -100 * (sections.length + 2),
  ease: "none",
  scrollTrigger: {
    trigger: ".box",
    pin: true,
    scrub: -2,
    end: () => "+=4000px" + document.querySelector(".box").offsetWidth
  }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 content: "#content",
 smooth: 3,
 effects: true
});

smoother.effects("img", { speed: "auto" });