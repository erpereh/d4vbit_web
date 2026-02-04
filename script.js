// Inicializar AOS (Animar al hacer Scroll)
AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    offset: 0,
    delay: 0,
    anchorPlacement: 'top-bottom',
    disable: false
});

// Alternar Menú Móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
    });

    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            icon.textContent = 'menu';
        });
    });
}

// Resaltado de Enlace de Navegación Activo
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

// Función Throttle para rendimiento
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

// Añadir event listener de scroll con throttling
window.addEventListener('scroll', throttle(highlightActiveSection, 100));

// Scroll suave para enlaces ancla (fallback para navegadores antiguos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // No prevenir default para hash vacío
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80; // Tener en cuenta la barra de navegación fija

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Añadir efecto hover a las insignias de habilidades
const skillBadges = document.querySelectorAll('[class*="px-3 py-1.5"]');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    badge.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Añadir animación de carga
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Refrescar AOS después de cargar
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

// Intersection Observer para animaciones adicionales
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

// Observar todas las tarjetas
const cards = document.querySelectorAll('.bg-surface');
cards.forEach(card => {
    observer.observe(card);
});

// Añadir clase CSS para animación
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

// Mensaje de consola para reclutadores
console.log('%c👋 ¡Hola, reclutador!', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en mi trabajo? Contáctame:', 'color: #9CA3AF; font-size: 14px;');
console.log('%c📧 david.perez.glesias2004@gmail.com', 'color: #3B82F6; font-size: 12px;');
console.log('%c🔗 https://github.com/erpereh', 'color: #3B82F6; font-size: 12px;');
console.log('%c💼 https://www.linkedin.com/in/david-peerez-iglesias/', 'color: #3B82F6; font-size: 12px;');
