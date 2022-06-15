if (document.querySelector('.map__slider')) {
    let mapSlider = new Swiper(".map__slider", {
        spaceBetween: 30,
        effect: "fade",
        allowTouchMove: false,
    
        pagination: {
            el: ".map__navigation-fraction",
            type: "fraction",
        },
    
        navigation: {
            nextEl: ".map__navigation-arrow--next",
            prevEl: ".map__navigation-arrow--prev",
        },
    });
    
    function changingTitle() {
        const allTitles = document.querySelectorAll('.title');
        allTitles.forEach(function(title) {
            if(title.getAttribute('data-swiper-position') === document.querySelector('.swiper-slide-active').getAttribute('data-swiper-position')) {
                allTitles.forEach(function(t) {
                    t.classList.add('none');
                    t.querySelectorAll('span').forEach(function(char) {char.classList.remove('show')});
                });
                title.classList.remove('none');
            }
        });
    }
    
    mapSlider.on('slidePrevTransitionStart', function() {
        changingTitle();
    });
    
    mapSlider.on('slideNextTransitionStart', function() {
        changingTitle();
    });
}