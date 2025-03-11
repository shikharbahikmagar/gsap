var main = document.querySelector("#main");

var cursor = document.querySelector("#cursor");

var image = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {

        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out",
    })

});

image.addEventListener("mouseenter", () => {

    cursor.innerHTML = "view more",

    gsap.to(cursor, {
      
        scale: 2,
        duration: 1,
        ease: "back.out",
        backgroundColor: "#ffffff5c",
    })

});

image.addEventListener("mouseleave", () => {

    cursor.innerHTML = " ",
    gsap.to(cursor, {
        scale: 1,
        duration: 1,
        ease: "back.out", 
        backgroundColor: "rgb(197, 185, 72)",

    });

});