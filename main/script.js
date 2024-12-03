let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    moveSlide(1);
}
setInterval(autoSlide, 3000);

let contCurrentSlide = 0;

function contentmoveSlide(contdirection) {
    const contentslides = document.querySelector('.content-slides');
    const contentTotalSlides = contentslides.children.length;
    contCurrentSlide = (contCurrentSlide + contdirection + contentTotalSlides) % contentTotalSlides;
    contentslides.style.transform = `translateX(-${contCurrentSlide * 100}%)`;
}

