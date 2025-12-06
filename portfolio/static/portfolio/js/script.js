document.addEventListener('DOMContentLoaded', () => {

    // 1. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Exclude .hero-section from being hidden initially so it's always visible on load
    document.querySelectorAll('.section:not(.hero-section)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add visible class styling dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // 2. Glitch Effect Randomizer for Hero Title
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.classList.add('active');
            setTimeout(() => {
                glitchElement.classList.remove('active');
            }, 200);
        }, 3000);
    }

    // 3. Typing Effect for Subtitle
    const text = "BSIT GRADUATE // FULL STACK DEV";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;

    if (typingElement) {
        typingElement.textContent = '';
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Speed of typing
            }
        }
        setTimeout(typeWriter, 500);
    }

    // 4. Scroll-linked Gradient Animation for H1 AND Background Fade
    // 4. Scroll-linked Gradient Animation - REMOVED per user request
    /*
    const heroTitle = document.querySelector('.hero-title');
    const heroBg = document.querySelector('.hero-background');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (heroTitle) {
            heroTitle.style.backgroundPosition = `${scrollPos * 1.5}px center`;
        }

        if (heroBg) {
            const opacity = 1 - (scrollPos / window.innerHeight);
            heroBg.style.opacity = Math.min(Math.max(opacity, 0), 1);
        }
    });
document.addEventListener('DOMContentLoaded', () => {

    // 1. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Exclude .hero-section from being hidden initially so it's always visible on load
    document.querySelectorAll('.section:not(.hero-section)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add visible class styling dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // 2. Glitch Effect Randomizer for Hero Title
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.classList.add('active');
            setTimeout(() => {
                glitchElement.classList.remove('active');
            }, 200);
        }, 3000);
    }

    // 3. Typing Effect for Subtitle
    const text = "BSIT GRADUATE // FULL STACK DEV";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;

    if (typingElement) {
        typingElement.textContent = '';
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Speed of typing
            }
        }
        setTimeout(typeWriter, 500);
    }

    // 4. Scroll-linked Gradient Animation for H1 AND Background Fade
    // 4. Scroll-linked Gradient Animation - REMOVED per user request
    /*
    const heroTitle = document.querySelector('.hero-title');
    const heroBg = document.querySelector('.hero-background');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (heroTitle) {
            heroTitle.style.backgroundPosition = `${scrollPos * 1.5}px center`;
        }

        if (heroBg) {
            const opacity = 1 - (scrollPos / window.innerHeight);
            heroBg.style.opacity = Math.min(Math.max(opacity, 0), 1);
        }
    });
    */

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});
