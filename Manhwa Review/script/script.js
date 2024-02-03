let darkmodeToggle = document.querySelector('.darkmode');

darkmodeToggle.addEventListener('click', () => {
    document.body.classList.toggle('lightmode');
});

const slider = document.querySelector('.slider');
const crausal = document.querySelector('.crausal');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let direction;

prev.addEventListener('click', () => {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    slider.style.transform = 'translate(20%)';
    crausal.style.justifyContent = 'flex-end';
});

next.addEventListener('click', () => {
    direction = -1;
    slider.style.transform = 'translate(-20%)';
    crausal.style.justifyContent = 'flex-start';
});

slider.addEventListener('transitionend', () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';

    setTimeout( () => {
        slider.style.transition = 'all 0.5s';
    })
    
})