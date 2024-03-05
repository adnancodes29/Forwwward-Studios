function slider() {
    const slides = document.querySelectorAll('.hero__slide');
    const prevSlideBtn = document.querySelector('.hero__prev');
    const nextSlideBtn = document.querySelector('.hero__next');
    const dragg = document.querySelector('.dragg');
    const draggWidth = 100 / slides.length;
    const lineEl = document.querySelectorAll('.lineEl');

    function goToSlide(slide) {
        slides.forEach((sl, index) => {
            sl.style.transform = `translateX(${100 * (index - slide)}%)`;
        });
    };

    goToSlide(0);

    let currentSlide = 0;
    const maxSlides = slides.length;

    nextSlideBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentSlide === maxSlides - 1) {
            currentSlide = 0;
            dragg.style.left = '0%';
        } else {
            currentSlide++;
            // Move Slide line to right
            dragg.style.left = `${currentSlide * draggWidth}%`;
        }
        goToSlide(currentSlide);
    });

    prevSlideBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentSlide === 0) {
            currentSlide = maxSlides - 1;
            dragg.style.left = `${(lineEl.length - 1) * draggWidth}%`;
        } else {
            currentSlide--;
            dragg.style.left = `${currentSlide * draggWidth}%`
            dragg.style.left -= `${draggWidth}%`;
        }
        goToSlide(currentSlide);
    });

    lineEl.forEach((line, index) => {
        line.addEventListener('click', function () {
            dragg.style.left = `${draggWidth * index}%`;
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });
};

export default slider;