document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevControl = document.querySelector('.carousel-control.prev');
    const nextControl = document.querySelector('.carousel-control.next');

    let currentIndex = 0;
    let startX, endX;

    function showSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function handleDragStart(e) {
        startX = e.clientX || e.touches[0].clientX;
    }

    function handleDragMove(e) {
        endX = e.clientX || e.touches[0].clientX;
    }

    function handleDragEnd() {
        if (startX > endX) {
            showSlide(currentIndex + 1);
        } else if (startX < endX) {
            showSlide(currentIndex - 1);
        }
    }

    prevControl.addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });

    nextControl.addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    
    carouselInner.addEventListener('mousedown', handleDragStart);
    carouselInner.addEventListener('mousemove', handleDragMove);
    carouselInner.addEventListener('mouseup', handleDragEnd);
    carouselInner.addEventListener('touchstart', handleDragStart);
    carouselInner.addEventListener('touchmove', handleDragMove);
    carouselInner.addEventListener('touchend', handleDragEnd);
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
});
