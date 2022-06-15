if (document.querySelector('.map__container')) {
    const mapSlider = document.querySelector('.map__container');
    mapSlider.addEventListener('scroll', function() {
        if (Math.round(mapSlider.clientWidth / 3) <= mapSlider.scrollLeft) {
            document.querySelector('.map__slider').classList.add('map__slider--left');
        } else {
            document.querySelector('.map__slider').classList.remove('map__slider--left');
        }
    });
}