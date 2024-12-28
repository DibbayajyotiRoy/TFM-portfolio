//Using timeline
var tl = gsap.timeline();

//nav
tl.from(".animate-nav",{
    y: -10,
    opacity: 0,
    duration: 1,
})
tl.from(".img",{
    x: -70,
    opacity: 0,
    duration: 0.5,
})
tl.from(".hamburger",{
    x: 70,
    opacity: 0,
    duration: 0.5,
})
tl.from(".brandName",{
    y:20,
    opacity: 0,
    duration: 1,
    scale: 0.2,
    color:"black"
})

//about
gsap.from(".animate-about-strong",{
    opacity:0,
    scale: 0,
    duration: 0.3,
    x:70,
    scrollTrigger: {
        trigger: ".animate-about-strong",
        scroller: "body",
        markers: false,
        start:"top 180%",
        scrub: 2
    }
})
gsap.from(".animate-about",{
    opacity:0,
    scale: 0,
    duration: 0.1,
    x: 400,
    scrollTrigger: {
        trigger: ".animate-about",
        scroller: "body",
        markers: false,
        start:"top 180%",
        scrub: 2
    }
})
gsap.from(".animate-para",{
    opacity:0,
    scale: 0,
    duration: 0.2,
    x: -40,
    scrollTrigger: {
        trigger: ".animate-para",
        scroller: "body",
        markers: false,
        start:"top 180%",
        scrub: 2
    }
})

//Skill and experience

gsap.from(".big-experience",{
    opacity:0,
    scale: 0,
    duration: 0.1,
    // x: -40,
    scrollTrigger: {
        trigger: ".big-experience",
        scroller: "body",
        markers: false,
        start:"top 190%",
        scrub: 2
    }
})
gsap.from(".info-content",{
    opacity:0,
    // scale: 0,
    duration: 0.1,
    x: 100,
    scrollTrigger: {
        trigger: ".info-content",
        scroller: "body",
        markers: false,
        start:"top 100%",
        scrub: 2
    }
})

tl.from(".skill-box-animate",{
    opacity: 0,
    duration: 0.1,
    y: -40,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".skill-box-animate",
        scroller:"body",
        markers: false,
        start: "top 100%",
        scrub: 2
    }
})

