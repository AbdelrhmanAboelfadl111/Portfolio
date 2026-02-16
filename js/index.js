let lenis; // 👈 نخليه global
LenisStart();
blurBox('Education');
blurBox('Skills');
new WOW().init();
document.addEventListener('DOMContentLoaded', function () {
  
  // السكشن الأول
  new Splide('#section1', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '20px',
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    speed: 1000,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    breakpoints: {
      1400: { perPage: 3 },
      1200: { perPage: 3 },
      992:  { perPage: 2 },
      768:  { perPage: 2 },
      576:  { perPage: 1 },
      400:  { perPage: 1 },
    },
  }).mount();

  // السكشن الثاني
  new Splide('#section2', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '20px',
    autoplay: true,
    interval: 2000,

    pauseOnHover: true,
    speed: 1000,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    breakpoints: {
      1400: { perPage: 3 },
      1200: { perPage: 3 },
      992:  { perPage: 2 },
      768:  { perPage: 2 },
      576:  { perPage: 1 },
      400:  { perPage: 1 },
      },
    
  }).mount();

});
document.addEventListener("DOMContentLoaded", scrollSpyObserver);

const slider = document.querySelector('#verticalSlider');

slider.addEventListener('wheel', function (e) {
  e.stopPropagation();
}, { passive: false });

document.addEventListener('DOMContentLoaded', function () {

  new Splide('#verticalSlider', {
    type      : 'loop',
    direction : 'ttb',
    height    : '400px',
    perPage: 1,
    perMove: 1,
    gap       : '15px',
    speed     : 1000,
    wheel     : true,
    releaseWheel: false, // يمنع اسكرول الصفحة
    autoplay  : true,
    interval  : 2000,
    pauseOnHover: true,
  }).mount();

});
window.addEventListener('load', () => {
  const loadingDiv = document.querySelector('.Loading');
  loadingDiv.classList.add('unshow'); 
});
function initWOW() {
  if (window.innerWidth > 992) {
    new WOW().init();
  }
}

window.addEventListener('load', initWOW);
window.addEventListener('resize', initWOW);