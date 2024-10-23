
gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Hero section animations
gsap.from(".hero-text", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".hero-image", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
});

// About section animation
gsap.from(".about-content", {
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Jurusan cards stagger animation
gsap.from(".jurusan-card", {
    scrollTrigger: {
        trigger: ".jurusan-section",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Portfolio/Kegiatan images animation
gsap.from(".portfolio-item", {
    scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Footer animation
gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Add classes to elements that need animation
document.addEventListener('DOMContentLoaded', function() {
    // Add hero classes
    document.querySelector('.container.mx-auto.flex.px-2.py-24').classList.add('hero-text');
    document.querySelector('.lg\\:max-w-2xl').classList.add('hero-image');

    // Add about section class
    document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.items-center').classList.add('about-content');

    // Add jurusan section class
    document.querySelector('.py-24').classList.add('jurusan-section');
    const jurusanCards = document.querySelectorAll('.relative.w-full.h-auto');
    jurusanCards.forEach(card => card.classList.add('jurusan-card'));

    // Add portfolio section class
    document.querySelector('.py-24.relative').classList.add('portfolio-section');
    const portfolioItems = document.querySelectorAll('.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4 > div');
    portfolioItems.forEach(item => item.classList.add('portfolio-item'));
});
