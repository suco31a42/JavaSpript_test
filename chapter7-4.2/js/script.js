const loadingArealeft = document.querySelector('#loading-left');
const loadingArearight = document.querySelector('#loading-right');
const keyframes = {
  transform: ['scaleX(1)', 'scaleX(0)'],
};
const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards',
};

window.addEventListener('load', () => {
  // ローディング中(左側)
  loadingArealeft.animate(keyframes, options);
  // ローディング中(右側)
  loadingArearight.animate(keyframes, options);
});