gsap.to("#page h1", {
   
    transform: "translatex(-110%)",

    scrollTrigger: {
        trigger: "#page",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom 90%",
        scrub: 2,
        pin: true,

    }
})