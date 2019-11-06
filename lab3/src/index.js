import anime from 'animejs/lib/anime.es.js';
import './scss/style.scss';

anime({
    targets: ['.svg .rectangle'],
    points: '100 180 200 100 300 180 270 300 130 300',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});