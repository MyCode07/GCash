import { isMobile } from './isMobile.js'

const dragSiders = document.querySelectorAll('.slides__flex');
if (dragSiders.length) {
    dragSiders.forEach(slider => {
        const sliderItems = slider.querySelectorAll('.slides__flex-item');

        if (sliderItems.length >= 5 && !isMobile.any()) {
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                let rect = slider.getBoundingClientRect();
                isDown = true;
                slider.classList.add('_active');
                // Get initial mouse position
                startX = e.pageX - rect.left;
                // Get initial scroll position in pixels from left
                scrollLeft = slider.scrollLeft;
                console.log(startX, scrollLeft);
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.dataset.dragging = false;
                slider.classList.remove('_active');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.dataset.dragging = false;
                slider.classList.remove('_active');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                let rect = slider.getBoundingClientRect();
                e.preventDefault();
                slider.dataset.dragging = true;
                // Get new mouse position
                const x = e.pageX - rect.left;
                // Get distance mouse has moved (new mouse position minus initial mouse position)
                const walk = (x - startX);
                // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
                slider.scrollLeft = scrollLeft - walk;
                console.log(x, walk, slider.scrollLeft);
            });
        }
    })
}


