let currentTalentSlide = 0;

function showTalentSlide(index) {
    const slides = document.querySelectorAll('.talent-slide');
    const dots = document.querySelectorAll('.section2-dots .dot');

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    });

    currentTalentSlide = index;
}

function nextTalent() {
    showTalentSlide(currentTalentSlide + 1);
}

function prevTalent() {
    showTalentSlide(currentTalentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showTalentSlide(0);
});