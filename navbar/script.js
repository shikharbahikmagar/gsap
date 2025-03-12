var verticalNav = document.querySelector('#full');

var menu = document.querySelector('#menu');

var close = document.querySelector('#close');

var overlay = document.querySelector('#overlay');

var tl = gsap.timeline();

tl.to(verticalNav, {
    duration: 0.8,

    x: 0,
})

tl.from("#full h1", {

    opacity: 0,
    x: 150,
    duration: 0.4,
    stagger: 0.2,
})

tl.from(close, {

    opacity: 0,
    x: 150,
    duration: 0.3,
})



tl.pause();


menu.addEventListener('click', function() {

    tl.play();
})

close.addEventListener('click', function() {
    
        tl.reverse();
})

overlay.addEventListener('click', function() {
    tl.reverse();
})



