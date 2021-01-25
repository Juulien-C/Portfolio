const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl
    .to(".header__banner__text--hide--txt", {y: "0%", duration: 1.5, stagger: 0.25})
    .fromTo(".header__banner__text--btn", {opacity: "0%", duration: 1, y:"-30px"},{opacity: "100%", y:"0px"});





gsap.registerPlugin(ScrollTrigger);

gsap.from(".about__title", {scrollTrigger:{
    trigger:".about__title",
    markers: true,
    start: "-450px center",
    end: "bottom 250px",
    scrub: true,
    toggleActions : "restart pause reverse pause"
}, 
    x: 2000, 
    // duration: 5,
    ease: "none",
});

gsap.from(".about__line", {scrollTrigger:{
    trigger: ".about__line",
    markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
},
x: -100, 
duration: 5, 
ease: "none",});


gsap.from(".projets__title", {scrollTrigger:{
    trigger:".projets__title",
    markers: true,
    start: "-450px center",
    end: "bottom 250px",
    scrub: true,
    toggleActions : "restart pause reverse pause"
}, 
    x: 2000,
    ease: "none",
});

gsap.from(".projets__line", {scrollTrigger:{
    trigger: ".projets__line",
    markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
},
x: -100, 
duration: 5, 
ease: "none",});

gsap.from(".contact__title", {scrollTrigger:{
    trigger:".contact__title",
    markers: true,
    start: "-450px center",
    end: "bottom 250px",
    scrub: true,
    toggleActions : "restart pause reverse pause"
}, 
    x: 2000,
    ease: "none",
});

gsap.from(".contact__line", {scrollTrigger:{
    trigger: ".contact__line",
    markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
},
x: -100, 
duration: 5, 
ease: "none",});