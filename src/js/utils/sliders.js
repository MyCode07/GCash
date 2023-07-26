import { Swiper, Lazy, Pagination, Navigation } from "swiper";

const sliderSection = document.querySelector('.slider');

if (sliderSection) {

    const slider = sliderSection.querySelector('.swiper');
    const sliderSlides = slider.querySelectorAll('.swiper .swiper-slide');

    if (sliderSlides.length) {
        const prevArrow = sliderSection.querySelector('.slider__arrows-prev');
        const nextArrow = sliderSection.querySelector('.slider__arrows-next');
        const pagination = sliderSection.querySelector('.slider__pagination');

        new Swiper(slider, {
            modules: [
                Pagination, Navigation
            ],
            loop: true,

            navigation: {
                prevEl: prevArrow,
                nextEl: nextArrow,
            },

            pagination: {
                el: pagination,
                clickable: true
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                769: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                }
            }
        })
    }
}