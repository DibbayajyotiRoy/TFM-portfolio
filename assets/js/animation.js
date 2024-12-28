//Using timeline
var tl = gsap.timeline();

//nav
tl.from(".animate-nav",{
    y: -10,
    opacity: 0,
    duration: 1,
    // stagger: 1
})
tl.from(".img",{
    x: -70,
    opacity: 0,
    duration: 0.5,
    // delay: 0.5,
})
tl.from(".hamburger",{
    x: 70,
    opacity: 0,
    duration: 0.5,
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
        start:"top 100%",
        scrub: 2
    }
})
gsap.from(".animate-about",{
    opacity:0,
    scale: 0,
    duration: 0.3,
    x: 400,
    scrollTrigger: {
        trigger: ".animate-about",
        scroller: "body",
        markers: false,
        start:"top 100%",
        scrub: 2
    }
})

