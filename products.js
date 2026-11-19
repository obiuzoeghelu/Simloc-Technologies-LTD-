// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        nav?.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && !hamburger.contains(e.target) && nav && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Product filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        const filter = btn.dataset.filter;
        productCards.forEach(card => {
            const brand = card.dataset.brand;
            if (filter === 'all' || brand === filter) {
                card.style.display = '';
                setTimeout(() => card.classList.add('reveal'), 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('reveal');
            }
        });
    });
});

// Product slider functionality
const slider = document.getElementById('productSlider');
if (slider) {
    const track = slider.querySelector('.slider__track');
    const slides = slider.querySelectorAll('.slider__slide');
    const prevBtn = slider.querySelector('.slider__btn--prev');
    const nextBtn = slider.querySelector('.slider__btn--next');
    const dotsContainer = slider.querySelector('.slider__dots');

    let currentIndex = 0;
    const slideWidth = slides.length > 0 ? 100 / slides.length : 100;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `slider__dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentIndex = index;
        if (track) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.slider__dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slider every 5 seconds
    setInterval(nextSlide, 5000);
}

// Reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});