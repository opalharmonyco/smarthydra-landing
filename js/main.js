// SmartHydra Landing Page - Main JavaScript
// Handles navigation, animations, and user interactions

(function() {
    'use strict';

    // ===== GLOBAL VARIABLES =====
    let isScrolling = false;
    let mobileMenuOpen = false;

    // ===== DOM ELEMENTS =====
    const nav = document.getElementById('nav');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    // ===== INITIALIZATION =====
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializeScrollAnimations();
        initializeSmoothScrolling();
        initializeMobileMenu();
        initializePerformanceOptimizations();
        
        // Add loading class removal
        document.body.classList.remove('loading');
    });

    // ===== NAVIGATION =====
    function initializeNavigation() {
        // Handle scroll-based navigation styling
        window.addEventListener('scroll', throttle(handleScroll, 16));
        
        // Handle navigation link clicks
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    }

    function handleScroll() {
        if (isScrolling) return;
        
        isScrolling = true;
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            
            // Add scrolled class to nav
            if (scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            isScrolling = false;
        });
    }

    function handleNavClick(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenuOpen) {
                closeMobileMenuHandler();
            }
        }
    }

    // ===== MOBILE MENU =====
    function initializeMobileMenu() {
        if (mobileMenuToggle && mobileMenu && closeMobileMenu) {
            mobileMenuToggle.addEventListener('click', openMobileMenuHandler);
            closeMobileMenu.addEventListener('click', closeMobileMenuHandler);
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (mobileMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                    closeMobileMenuHandler();
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenuOpen) {
                    closeMobileMenuHandler();
                }
            });
        }
    }

    function openMobileMenuHandler() {
        mobileMenuOpen = true;
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMobileMenuHandler() {
        mobileMenuOpen = false;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }

    // ===== SCROLL ANIMATIONS =====
    function initializeScrollAnimations() {
        // Create intersection observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.animate-fade-in-up, .animate-fade-in, .animate-scale-in').forEach(el => {
            observer.observe(el);
        });

        // Add animation classes to elements that should animate
        addAnimationClasses();
    }

    function addAnimationClasses() {
        // Hero section elements
        const heroElements = document.querySelectorAll('.hero .logo, .hero .title, .hero .subtitle, .hero .cta-buttons');
        heroElements.forEach((el, index) => {
            el.classList.add('animate-fade-in-up');
            el.style.animationDelay = `${index * 100}ms`;
        });

        // Feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((el, index) => {
            el.classList.add('animate-fade-in-up');
            el.style.animationDelay = `${index * 100}ms`;
        });

        // Pricing cards
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach((el, index) => {
            el.classList.add('animate-scale-in');
            el.style.animationDelay = `${index * 200}ms`;
        });

        // Testimonials
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials.forEach((el, index) => {
            el.classList.add('animate-fade-in-up');
            el.style.animationDelay = `${index * 150}ms`;
        });
    }

    // ===== SMOOTH SCROLLING =====
    function initializeSmoothScrolling() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    function initializePerformanceOptimizations() {
        // Lazy load images when they come into view
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Preload critical resources
        preloadCriticalResources();
    }

    function preloadCriticalResources() {
        // Preload fonts
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    // ===== UTILITY FUNCTIONS =====
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // ===== ANALYTICS & TRACKING =====
    function trackEvent(category, action, label) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }

        // Console log for development
        console.log(`Analytics: ${category} - ${action} - ${label}`);
    }

    // Track button clicks
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn, .app-store-btn')) {
            const buttonText = e.target.textContent.trim();
            trackEvent('Button Click', 'Download CTA', buttonText);
        }
    });

    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.id || entry.target.className;
                trackEvent('Section View', 'Page Section', sectionName);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // ===== ACCESSIBILITY IMPROVEMENTS =====
    function initializeAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            // Skip to main content
            if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
                const mainContent = document.querySelector('main') || document.querySelector('.hero');
                if (mainContent) {
                    mainContent.focus();
                    e.preventDefault();
                }
            }
        });

        // Improve focus management for mobile menu
        if (mobileMenu) {
            mobileMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    const focusableElements = mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }
    }

    // Initialize accessibility features
    initializeAccessibility();

    // ===== ERROR HANDLING =====
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        // Could send to error tracking service here
    });

    // ===== EXPORT FOR TESTING =====
    window.SmartHydraLanding = {
        trackEvent,
        openMobileMenu: openMobileMenuHandler,
        closeMobileMenu: closeMobileMenuHandler
    };

})();
