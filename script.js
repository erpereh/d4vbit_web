// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    offset: 0,
    delay: 0,
    anchorPlacement: 'top-bottom',
    disable: false
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            icon.textContent = 'menu';
        });
    });
}

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-white', 'border-b-2', 'border-primary');
        link.classList.add('text-gray-400');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-400');
            link.classList.add('text-white');
        }
    });
}

// Throttle function for performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll event listener with throttling
window.addEventListener('scroll', throttle(highlightActiveSection, 100));

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to skill badges
const skillBadges = document.querySelectorAll('[class*="px-3 py-1.5"]');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    badge.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger AOS refresh after load
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

// Intersection Observer for additional animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.bg-surface');
cards.forEach(card => {
    observer.observe(card);
});

// Add CSS class for animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.loaded {
        animation: fadeIn 0.3s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Console message for recruiters
console.log('%c👋 ¡Hola, reclutador!', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en mi trabajo? Contáctame:', 'color: #9CA3AF; font-size: 14px;');
console.log('%c📧 david.perez.glesias2004@gmail.com', 'color: #3B82F6; font-size: 12px;');
console.log('%c🔗 https://github.com/erpereh', 'color: #3B82F6; font-size: 12px;');
console.log('%c💼 https://www.linkedin.com/in/david-peerez-iglesias/', 'color: #3B82F6; font-size: 12px;');
