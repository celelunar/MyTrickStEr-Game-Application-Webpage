const slides = document.querySelectorAll('.video-slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
function changeSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove('active-slide');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[index].classList.add('active-slide');
    dots[index].classList.add('active');

    currentIndex = index;    
}

function autoSlide() {
    changeSlide((currentIndex + 1) % slides.length);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        console.log(index)
        changeSlide(index);
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(autoSlide, 10000);
    });
});

let autoSlideTimer = setInterval(autoSlide,10000);