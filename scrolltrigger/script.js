gsap.to("#box1", {
   
    x: 1000,
    duration: 1,
    delay: 1,
    scrollTrigger: {

        trigger: "#page1 #box1",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end : "bottom 20%",
        scrub: true,

    }
})

gsap.from("#box2", {
   
    scale: 0,
    duration: 1,
    delay: 1,
    rotation: 360,
    scrollTrigger: {

        trigger: "#page2 #box2",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end : "bottom 20%",
        scrub: true,
        pin : true,

    }
})


gsap.from("#box3", {
   
    scale: 0,
    duration: 1,
    delay: 1,
    rotation: 360,
    scrollTrigger: {

        trigger: "#page3 #box3",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end : "bottom 20%",
        scrub: true,

    }
})

