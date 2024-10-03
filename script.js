document.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax-content');
    const intro = document.querySelector('.intro');
    let scrollPosition = window.pageYOffset;
    let viewportHeight = window.innerHeight;
    let sectionScrollProgress = scrollPosition / (viewportHeight * 0.5);


    intro.style.opacity = 1 - sectionScrollProgress;
    intro.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});



