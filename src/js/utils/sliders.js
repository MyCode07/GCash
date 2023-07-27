import { Swiper, Pagination } from "swiper";

const slidersDrag = document.querySelectorAll('.slides__flex-swiper');

if (slidersDrag) {

    slidersDrag.forEach(sliderDrag => {
        const slider = sliderDrag.querySelector('.swiper');
        const sliderSlides = sliderDrag.querySelectorAll('.swiper-slide');

        if (sliderSlides.length) {
            new Swiper(slider, {
                slidesPerView: 'auto',
                grabCursor: true,
                spaceBetween: 30
            })
        }
    });
}



const sliderSections = document.querySelectorAll('.slider');
if (sliderSections.length) {

    sliderSections.forEach(sliderSection => {
        const slider = sliderSection.querySelector('.swiper');
        const sliderSlides = sliderSection.querySelectorAll('.swiper-slide');

        if (sliderSlides.length) {
            const pagination = sliderSection.querySelector('.slider__pagination');

            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                loop: true,

                pagination: {
                    el: pagination,
                    clickable: true
                },
                spaceBetween: 20,

                breakpoints: {
                    300: {
                        slidesPerView: 'auto',
                    },
                    769: {
                        slidesPerView: 3,
                    },
                    1025: {
                        slidesPerView: 4,
                    }
                }
            })
        }
    });
}