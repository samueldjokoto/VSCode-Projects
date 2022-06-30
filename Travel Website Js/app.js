// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//     triggerElement: ".hike-exp",
//     triggerHook: 0.5
// })
// .addIndicators({colorStart: "white", colorTrigger: "white"})
// .addTo(controller);

let controller;
let slideScene;
let pageScene;

function animateSlides(){
    //Init Controller
    controller = new ScrollMagic.Controller();
    //selectors
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');
    // loop over each slide
    sliders.forEach(slide=> {
        const revealImg = slide.querySelector(".reveal-img");
        const img = slide.querySelector('Img');
        const revealText = slide.querySelector('.reveal-text');
    //GSAP - animation
    const slideT1 = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
});

slideT1.fromTo(revealImg, { x: '0%'} , { x: '100%' });
slideT1.fromTo(img,{ scale: 2 }, { scale: 1 }, "-=1");
slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
slideT1.fromTo(nav, { y:'-100%' }, { y:'0%' }, '-=0.5');

    //Create Scene
    slideScene = new ScrollMagic.Scene({
        triggerElement: slide,
        triggerHook: 0.25,
        reverse:false
    })
    .setTween(slideT1)
    .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "slide"
    })
    .addTo(controller);
    //new animation
    const pageT1 = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    pageT1.fromTo(nextSlide, {y: "0%" }, {y: "50%"});
    pageT1.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0 });
    pageT1.fromTo(nextSlide, {y: "50%" }, {y: "0%"}, '- =0.5');

    //create new scene
    pageScene = new ScrollMagic.Scene({
        triggerElement: slide,
        duration: "100%",
        triggerHook: 0
    })
    .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "page",
        indent: 200
    })
    .setPin(slide, {pushFollowers: false})
    .setTween(pageT1)
    .addTo(controller);
});
}

animateSlides();