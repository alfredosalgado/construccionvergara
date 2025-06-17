// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initScrollEffects();
    initTestimonialSlider();
    initContactForm();
    initBackToTop();
    initSmoothScrolling();
    initAnimationsOnScroll();
    initGallery();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Scroll Effects for Header
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
}

// Testimonial Slider
let currentTestimonial = 1;
const totalTestimonials = 6;

function initTestimonialSlider() {
    // Auto-play testimonials
    setInterval(function() {
        changeTestimonial(1);
    }, 5000);
}

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    // Hide current testimonial
    testimonials[currentTestimonial - 1].classList.remove('active');
    dots[currentTestimonial - 1].classList.remove('active');
    
    // Calculate next testimonial
    currentTestimonial += direction;
    
    if (currentTestimonial > totalTestimonials) {
        currentTestimonial = 1;
    } else if (currentTestimonial < 1) {
        currentTestimonial = totalTestimonials;
    }
    
    // Show new testimonial
    testimonials[currentTestimonial - 1].classList.add('active');
    dots[currentTestimonial - 1].classList.add('active');
}

function showTestimonial(n) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    // Hide current testimonial
    testimonials[currentTestimonial - 1].classList.remove('active');
    dots[currentTestimonial - 1].classList.remove('active');
    
    // Set new current
    currentTestimonial = n;
    
    // Show new testimonial
    testimonials[currentTestimonial - 1].classList.add('active');
    dots[currentTestimonial - 1].classList.add('active');
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !message || !service) {
                showNotification('Por favor completa todos los campos requeridos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor ingresa un correo válido', 'error');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Hola, mi nombre es ${name}.%0A%0A` +
                `Correo: ${email}%0A` +
                `${phone ? `Teléfono: ${phone}%0A` : ''}` +
                `Servicio de interés: ${service}%0A%0A` +
                `Mensaje: ${message}`;
            
            // Open WhatsApp
            const whatsappURL = `https://wa.me/56982677580?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Show success message
            showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations on Scroll
function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.service-card, .mvv-item, .value-item, .gallery-item, .contact-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Gallery functionality with carousel
    function initGallery() {
        // CONFIGURACIÓN: Cambia este número según la cantidad de imágenes en la carpeta galeria
        const TOTAL_IMAGES = 29; // Número total de imágenes en la carpeta galeria
        const AUTO_ADVANCE_INTERVAL = 4000; // Tiempo en milisegundos para avance automático (4 segundos)
        
        const galleryContainer = document.querySelector('.gallery-container');
        const modal = document.getElementById('galleryModal');
        const modalImg = document.getElementById('modalImage');
        const closeModal = document.querySelector('.modal-close');
        const prevModalBtn = document.querySelector('.modal-prev');
        const nextModalBtn = document.querySelector('.modal-next');
        const prevCarouselBtn = document.querySelector('.gallery-prev');
        const nextCarouselBtn = document.querySelector('.gallery-next');
        const indicators = document.querySelector('.gallery-indicators');
        
        let currentCarouselIndex = 0;
        let currentModalIndex = 0;
        let imagesPerView = getImagesPerView();
        let totalSlides = Math.ceil(TOTAL_IMAGES / imagesPerView);
        let autoAdvanceTimer = null;
        let isUserInteracting = false;
        
        // Función para obtener el número de imágenes por vista según el tamaño de pantalla
        function getImagesPerView() {
            const width = window.innerWidth;
            if (width >= 768) {
                return 4; // PC/Desktop - mostrar 4 imágenes
            } else {
                return 2; // Mobile - mostrar 2 imágenes
            }
        }
    
    // Generar las imágenes dinámicamente para el slide actual
    function generateGalleryImages() {
        galleryContainer.innerHTML = '';
        
        // Calcular qué imágenes mostrar en el slide actual
        const startIndex = currentCarouselIndex * imagesPerView;
        const endIndex = Math.min(startIndex + imagesPerView, TOTAL_IMAGES);
        
        for (let i = startIndex; i < endIndex; i++) {
            const imageNumber = i + 1;
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="./assets/img/galeria/${imageNumber}.jpg" alt="Proyecto ${imageNumber}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;
            
            // Agregar evento click para abrir modal
            galleryItem.addEventListener('click', () => {
                openModal(i);
            });
            
            galleryContainer.appendChild(galleryItem);
        }
    }
    
    // Generar indicadores del carrusel
        function generateIndicators() {
            if (!indicators) return;
            
            indicators.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('span');
                indicator.className = 'gallery-indicator';
                if (i === 0) indicator.classList.add('active');
                indicators.appendChild(indicator);
            }
            // Agregar event listeners después de crear los indicadores
            attachIndicatorListeners();
        }
    
    // Actualizar vista del carrusel
    function updateCarousel() {
        // Regenerar las imágenes para el slide actual
        generateGalleryImages();
        
        // Actualizar indicadores
        const allIndicators = document.querySelectorAll('.gallery-indicator');
        allIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentCarouselIndex);
        });
    }
    
    // Ir a slide específico
    function goToSlide(index) {
        currentCarouselIndex = index;
        updateCarousel();
    }
    
    // Funciones para el avance automático
        function startAutoAdvance() {
            if (autoAdvanceTimer) {
                clearInterval(autoAdvanceTimer);
            }
            autoAdvanceTimer = setInterval(() => {
                if (!isUserInteracting && totalSlides > 1) {
                    nextSlide();
                }
            }, AUTO_ADVANCE_INTERVAL);
        }
        
        function stopAutoAdvance() {
            if (autoAdvanceTimer) {
                clearInterval(autoAdvanceTimer);
                autoAdvanceTimer = null;
            }
        }
        
        function resetAutoAdvance() {
            stopAutoAdvance();
            setTimeout(() => {
                if (!isUserInteracting) {
                    startAutoAdvance();
                }
            }, 1000); // Espera 1 segundo antes de reanudar
        }
        
        // Navegación del carrusel
        function nextSlide() {
            currentCarouselIndex = (currentCarouselIndex + 1) % totalSlides;
            updateCarousel();
        }
        
        function prevSlide() {
            currentCarouselIndex = (currentCarouselIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Ir a un slide específico
        function goToSlide(index) {
            currentCarouselIndex = index;
            updateCarousel();
        }
    
    // Abrir modal
    function openModal(imageIndex) {
        currentModalIndex = imageIndex;
        modalImg.src = `./assets/img/galeria/${imageIndex + 1}.jpg`;
        modalImg.alt = `Proyecto ${imageIndex + 1}`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Navegación del modal
    function nextModalImage() {
        currentModalIndex = (currentModalIndex + 1) % TOTAL_IMAGES;
        modalImg.src = `./assets/img/galeria/${currentModalIndex + 1}.jpg`;
        modalImg.alt = `Proyecto ${currentModalIndex + 1}`;
    }
    
    function prevModalImage() {
        currentModalIndex = (currentModalIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
        modalImg.src = `./assets/img/galeria/${currentModalIndex + 1}.jpg`;
        modalImg.alt = `Proyecto ${currentModalIndex + 1}`;
    }
    
    // Event listeners para el carrusel con control de auto-avance
        if (nextCarouselBtn) {
            nextCarouselBtn.addEventListener('click', () => {
                isUserInteracting = true;
                nextSlide();
                resetAutoAdvance();
                setTimeout(() => { isUserInteracting = false; }, 500);
            });
        }
        
        if (prevCarouselBtn) {
            prevCarouselBtn.addEventListener('click', () => {
                isUserInteracting = true;
                prevSlide();
                resetAutoAdvance();
                setTimeout(() => { isUserInteracting = false; }, 500);
            });
        }
        
        // Event listeners para indicadores
        function attachIndicatorListeners() {
            const allIndicators = document.querySelectorAll('.gallery-indicator');
            allIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    isUserInteracting = true;
                    goToSlide(index);
                    resetAutoAdvance();
                    setTimeout(() => { isUserInteracting = false; }, 500);
                });
            });
        }
    
    // Event listeners para el modal
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    if (nextModalBtn) {
        nextModalBtn.addEventListener('click', nextModalImage);
    }
    
    if (prevModalBtn) {
        prevModalBtn.addEventListener('click', prevModalImage);
    }
    
    // Cerrar modal al hacer click fuera de la imagen
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModalFunc();
            } else if (e.key === 'ArrowRight') {
                nextModalImage();
            } else if (e.key === 'ArrowLeft') {
                prevModalImage();
            }
        }
    });
    
    // Manejar cambios de tamaño de ventana
    function handleResize() {
        const newImagesPerView = getImagesPerView();
        if (newImagesPerView !== imagesPerView) {
            imagesPerView = newImagesPerView;
            totalSlides = Math.ceil(TOTAL_IMAGES / imagesPerView);
            // Asegurar que el índice actual sea válido
            if (currentCarouselIndex >= totalSlides) {
                currentCarouselIndex = totalSlides - 1;
            }
            generateIndicators();
            updateCarousel();
        }
    }
    
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Event listeners para pausar auto-avance en hover
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', () => {
            isUserInteracting = true;
            stopAutoAdvance();
        });
        
        galleryContainer.addEventListener('mouseleave', () => {
            isUserInteracting = false;
            startAutoAdvance();
        });
    }
    
    // Inicializar galería
    generateIndicators();
    updateCarousel();
    
    // Iniciar auto-avance si hay más de una imagen
    if (totalSlides > 1) {
        startAutoAdvance();
    }
}

// Lightbox for Gallery
function openLightbox(src, alt) {
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="${alt}">
            <div class="lightbox-caption">${alt}</div>
        </div>
    `;
    
    // Lightbox styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    lightbox.querySelector('.lightbox-content').style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    lightbox.querySelector('.lightbox-close').style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        z-index: 10001;
    `;
    
    lightbox.querySelector('img').style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    `;
    
    lightbox.querySelector('.lightbox-caption').style.cssText = `
        color: white;
        text-align: center;
        margin-top: 1rem;
        font-size: 1.1rem;
    `;
    
    // Add to document
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Show lightbox
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close functionality
    function closeLightbox() {
        lightbox.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.parentNode.removeChild(lightbox);
            }
        }, 300);
    }
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Utility Functions
function debounce(func, wait) {
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

// Optimized scroll listener
const optimizedScrollHandler = debounce(function() {
    const scrolled = window.scrollY;
    const rate = scrolled * -0.5;
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration can be added here in the future
    });
}

// Performance monitoring
window.addEventListener('load', function() {
    // Page load time tracking
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page Load Time:', loadTime + 'ms');
});

// Form validation helpers
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Analytics and tracking helpers
function trackEvent(action, category, label) {
    // Google Analytics tracking can be added here
    console.log('Event tracked:', { action, category, label });
}

// Click tracking for service buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('service-btn')) {
        const serviceName = e.target.closest('.service-card').querySelector('h3').textContent;
        trackEvent('whatsapp_click', 'services', serviceName);
    }
    
    if (e.target.closest('.whatsapp-float')) {
        trackEvent('whatsapp_click', 'floating_button', 'main');
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with keyboard
    if (e.key === 'Tab' && e.shiftKey === false) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        // Add focus indicators
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #d4851a';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
initLazyLoading();

// Console log for debugging
console.log('Construcciones Vergara - Website loaded successfully');
console.log('All interactive features initialized');

// End of script