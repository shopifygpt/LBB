/**
 * Launch Big Brands - Main JavaScript
 * Handles FAQ accordion and stats counter animations
 */

// ==========================================================================
// FAQ Accordion
// ==========================================================================
(function initFAQ() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;

    function closeAllFAQs() {
        faqContainer.querySelectorAll('.faq-item.open').forEach(function(item) {
            item.classList.remove('open');
            const q = item.querySelector('.faq-q');
            if (q) q.setAttribute('aria-expanded', 'false');
        });
    }

    // Event delegation for FAQ clicks
    faqContainer.addEventListener('click', function(e) {
        const q = e.target.closest('.faq-q');
        if (!q || !faqContainer.contains(q)) return;
        
        const item = q.parentElement;
        const isOpen = item.classList.contains('open');
        
        closeAllFAQs();
        
        if (!isOpen) {
            item.classList.add('open');
            q.setAttribute('aria-expanded', 'true');
        }
    });
})();

// ==========================================================================
// Stats Counter Animation
// ==========================================================================
(function initStatsCounter() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const counters = Array.from(statsSection.querySelectorAll('.count'));
    let hasAnimated = false;

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    function animateCount(el, target, duration) {
        const start = 0;
        const startTime = performance.now();
        
        function frame(currentTime) {
            const progress = Math.min(1, (currentTime - startTime) / duration);
            const eased = easeOutQuad(progress);
            const value = Math.round(start + (target - start) * eased);
            el.textContent = value.toString();
            
            if (progress < 1) {
                requestAnimationFrame(frame);
            }
        }
        
        requestAnimationFrame(frame);
    }

    function startAnimation() {
        if (hasAnimated) return;
        hasAnimated = true;
        
        counters.forEach(function(el) {
            const target = parseInt(el.getAttribute('data-value'), 10);
            if (!isNaN(target)) {
                animateCount(el, target, 1200);
            }
        });
    }

    // Use Intersection Observer if available, otherwise start immediately
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.25 });
        
        observer.observe(statsSection);
    } else {
        // Fallback: start immediately
        startAnimation();
    }
})();

// ==========================================================================
// Smooth Scroll for Anchor Links
// ==========================================================================
(function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();

// ==========================================================================
// Add loading animation (optional)
// ==========================================================================
(function() {
    // Fade in elements on page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
})();
