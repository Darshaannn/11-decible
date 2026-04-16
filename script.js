// Navbar scroll behavior
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('uil-bars');
        icon.classList.add('uil-times');
    } else {
        icon.classList.remove('uil-times');
        icon.classList.add('uil-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('uil-times');
        icon.classList.add('uil-bars');
    });
});

// Vanilla JS Intersection Observer for Scroll Animations
const observeElements = () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add active class when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
};

// Trigger animations after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Little delay for initial hero animations
    setTimeout(() => {
        observeElements();
    }, 100);
});
