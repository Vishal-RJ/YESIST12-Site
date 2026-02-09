document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Carousel Logic
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, 5000);
    }

    // 2. Intersection Observer for Fade-in Animations
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

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3. Simple Speaker Carousel logic (simplified version of the target site)
    const track = document.getElementById('speaker-track');
    if (track) {
        // Logic to move track left/right
        let scrollAmount = 0;
        setInterval(() => {
            scrollAmount += 1;
            if (scrollAmount > track.scrollWidth / 2) {
                scrollAmount = 0;
            }
            track.scrollLeft = scrollAmount;
        }, 30);
    }
});
