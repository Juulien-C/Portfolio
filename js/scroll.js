const tl = gsap.timeline({defaults: {ease: "power1.out"}});
const tl2 = gsap.timeline({defaults: {ease: "power1.out"}});
const lineProjet = document.querySelectorAll('.projet__line');
const projet = document.querySelectorAll('.projet');


tl
    .fromTo(".header__banner__text p", {opacity: "0%", duration: 0.7, y:"-50px"},{opacity: "100%", duration: 1.5, y:"0px"})
    .to(".header__banner__text--hide--txt", {y: "0%", opacity: 1, duration: 1.2, stagger: 0.25}, "-=0.5")
    .fromTo(".header__banner__text--btn", {opacity: "0%", duration: 1, y:"-30px"},{opacity: "100%", y:"0px"})
    .fromTo(".header__banner .bloc_rs a", {opacity: "0%", duration: 1},{opacity: "100%", stagger: 0.25});

tl2
    .to("#bl1 .b1-line", {width: "140", delay: 1.5, duration: 1, stagger: 1})
    .to("#bl1 .b1-line-last", {width: "70", duration: 1, stagger: 1})
    .to("#bl2 .b2-line", {width: "140", duration: 1, stagger: 1}, "-=3")
    .to("#bl2 .b2-line-last", {width: "90", duration: 1});



gsap.registerPlugin(ScrollTrigger);

gsap.from(".about__title", {scrollTrigger:{
    trigger:".about__title",
    // markers: true,
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
    // markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
    },
    x: -100, 
    duration: 5, 
    ease: "none",
});

gsap.from(".about__intro__text", {scrollTrigger:{
    trigger: ".about__intro__text",
    // markers: true,
    start: "top center"
    },
    x: "100px",
    duration: 2,
    ease: "Power3.easeInOut" ,
    opacity: 0
});

gsap.from(".about__intro__img", {scrollTrigger:{
    trigger: ".about__intro__patterns",
    // markers: true,
    start: "top center"
    },
    x: "-100px",
    duration: 2,
    ease: "Power3.easeInOut" ,
    opacity: 0,
    stagger: 0.25,
});

gsap.from(".box", {scrollTrigger:{
    trigger: ".box",
    markers: true,
    start: "-200px center"
    },
    y: "-50px",
    duration: 2,
    ease: "Power3.easeInOut" ,
    opacity: 0,
    stagger: 0.25,
});


gsap.from(".projets__title", {scrollTrigger:{
    trigger:".projets__title",
    // markers: true,
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
    // markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
    },
    x: -100, 
    duration: 5, 
    ease: "none",
});

lineProjet.forEach(line =>{
    gsap.from(line, {scrollTrigger:{
        trigger: line,
        markers: true,
        start: "top center"
        },
        x: "-50px",
        duration: 2,
        ease: "Power3.easeInOut" ,
        opacity: 0
    });
})

gsap.from(".contact__title", {scrollTrigger:{
    trigger:".contact__title",
    // markers: true,
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
    // markers: true,
    toggleActions : "restart pause reverse pause",
    scrub: true,
    },
    x: -100, 
    duration: 5, 
    ease: "none",
});