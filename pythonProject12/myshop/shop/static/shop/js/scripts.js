window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let background = document.querySelector('.background');
    background.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
