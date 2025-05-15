let currentNewsSlide = 0;

// Displays which news slide the user's in depending on the index
function showNewsSlide(index) {
    // For the news item
    const slides = document.querySelectorAll('.news-slide');
    // For the dots to let user know which slide of the news section they are in
    const dots = document.querySelectorAll('.container2-dots .dot');
    
    // Loops back to the last slide if the index is less than 0
    if (index < 0) index = slides.length - 1;
    // Loops back to the first slide if the index is higher
    if (index >= slides.length) index = 0;

    // Loops through the slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Loops through the dots and will only activate if it matches the slide or index in this case
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Updates depending on which slide you're in
    currentNewsSlide = index;
}

// To show next slide
function nextNews() {
    showNewsSlide(currentNewsSlide + 1);
}

// To show previous slide
function prevNews() {
    showNewsSlide(currentNewsSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    // Shows the first slide by default
    showNewsSlide(0);
});