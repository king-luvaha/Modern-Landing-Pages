gsap.from(".header > div, .main-title > div, .divider, .hero-image, .hero-title > div, .btns > div, .hero-copy > div", 2, {
    y: "200",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1,
    stagger: 0.08,
});

gsap.from(".arrow-img img", 1, {
    scale: 0,
    ease: Elastic.easeOut,
    delay: 4,
});