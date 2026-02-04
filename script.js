// Snow
function initSnow() {
    const container = document.getElementById('snow');
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'flake';
        flake.textContent = '•';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (Math.random() * 15 + 10) + 's';
        flake.style.animationDelay = -Math.random() * 15 + 's';
        flake.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(flake);
    }
}

// Copy CA
function copyCA() {
    const ca = document.getElementById('ca').textContent;
    const btn = document.querySelector('.ca-btn');

    if (ca !== 'coming soon...') {
        navigator.clipboard.writeText(ca);
        btn.textContent = 'COPIED!';
        btn.style.background = 'var(--gold)';
        btn.style.color = 'var(--bg)';
        setTimeout(() => {
            btn.textContent = 'COPY';
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    }
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .lore-card, .eq-item, .token-stat, .vibe-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.5s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .lore-card:nth-child(1) { transition-delay: 0s; }
    .lore-card:nth-child(2) { transition-delay: 0.1s; }
    .lore-card:nth-child(3) { transition-delay: 0.2s; }
    .lore-card:nth-child(4) { transition-delay: 0.3s; }
    
    .token-stat:nth-child(1) { transition-delay: 0s; }
    .token-stat:nth-child(2) { transition-delay: 0.1s; }
    .token-stat:nth-child(3) { transition-delay: 0.2s; }
    .token-stat:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Init
document.addEventListener('DOMContentLoaded', () => {
    initSnow();

    // Observe elements
    document.querySelectorAll('.lore-card, .eq-item, .token-stat, .vibe-card').forEach(el => {
        observer.observe(el);
    });

    // Hero animation
    const heroImg = document.querySelector('.hero-img-wrap');
    const heroContent = document.querySelector('.hero-content');

    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'translateY(30px)';
        heroImg.style.transition = 'all 0.8s ease';
        setTimeout(() => {
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'translateY(0)';
        }, 200);
    }

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 0.8s ease 0.3s';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Console easter egg
console.log('%c$NITZCH', 'font-size: 32px; font-weight: bold; color: #f0c850; text-shadow: 2px 2px 0 #000;');
console.log('%c🏔️ Toward the mountains, always.', 'font-size: 14px; color: #7dd3fc;');
