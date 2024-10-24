/** js kodlar yazılacak */
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length;


    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = Math.ceil(totalSlides / 4) -1 ; // Son gruba git
    } else if (currentSlide >= Math.ceil(totalSlides / 4)) {
        currentSlide = 0; // İlk gruba dön
    }
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * (100 / 4)}%)`; // 4 kart gösterdiğimiz için
}
setInterval(() => {
    moveSlide(1);
}, 5000); // 5 saniyede bir otomatik kaydırma
