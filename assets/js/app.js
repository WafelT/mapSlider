
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
function addClassOnEyeContact(elements, timeout) {
    if (elements) {        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout);
                }
            });
        });
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        } else { observer.observe(elements) }
    }
}

function titleAnimation(allTitles) {
    if (allTitles) {
        allTitles.forEach(function(title, index) {
            const template = title.getAttribute('data-title').split('').map( (l,i) => `<span class="char${i + 1}">${l == ' ' ? '&nbsp;' : l}</span>` ).join('');
            title.innerHTML = '';
            title.innerHTML += template;
    
            title.querySelectorAll('span').forEach(function(char, index) {
                char.classList.remove('show');
                addClassOnEyeContact(char, 100 * (index + 0.5));
            });
        });
    }
}

titleAnimation(document.querySelectorAll('.map__info h1'));