import anime from 'animejs/lib/anime.es.js';
import './scss/style.scss';

anime({
    targets: ['.svg .rectangle'],
    points: '0 80 100 0 200 80 170 200 30 200',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});