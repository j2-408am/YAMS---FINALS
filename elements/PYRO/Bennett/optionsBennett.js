let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.team-slide');
    const dots = document.querySelectorAll('.dot');

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
        dots[i].classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

function nextTeam() {
    showSlide(currentSlide + 1);
}

function prevTeam() {
    showSlide(currentSlide - 1);
}

// Initialize first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});