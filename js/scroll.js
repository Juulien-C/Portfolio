const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".header__banner__text--hide--txt", {y: "0%", duration: 1.5, stagger: 0.25});





gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills", {scrollTrigger:{
    trigger:".skills",
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

gsap.from(".trait", {scrollTrigger:{
    trigger: ".trait",
    markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
},
x: -150, 
duration: 5, 
ease: "none",});