const slide = document.querySelector('.slide');

// window.addEventListener('scroll', scrollReveal);

// function scrollReveal () {
//     const hikePos = hikeExp.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight  / 1.8


//     if(hikePos < 0) {
//         hikeExp.style.color = "red";
//     }
// }

// let options = {
//     threshold: 0.5
// };

// let observer = new IntersectionObserver (slideAnim, options);

// function slideAnim(entries){
//     entries.forEach(entry => {
//         console.log(entry)

//     });

// }

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.scene({
    triggerElement: "hike-exp",
    triggerHook: 0.5
})
.addIndicators({colorsTart: "white", colorTrigger: "white"})
.addTo(controller);