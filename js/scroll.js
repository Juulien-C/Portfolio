const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".header__banner__text--hide--txt", {y: "0%", duration: 1.5, stagger: 0.25});
tl.fromTo(".header__banner__text--btn", {opacity: "0%", duration: 1, y:"-30px"},{opacity: "100%", y:"0px"});





gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills__title", {scrollTrigger:{
    trigger:".skills__title",
    markers: true,
    start: "-450px center",
    end: "bottom 100px",
    scrub: true,
    toggleActions : "restart pause reverse pause"
}, 
    x: 2000, 
    duration: 5,
    ease: "none",
});

gsap.from(".skills__line", {scrollTrigger:{
    trigger: ".skills__line",
    markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
},
x: -150, 
duration: 5, 
ease: "none",});