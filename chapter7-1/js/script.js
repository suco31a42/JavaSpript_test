/*ローディングから画面遷移
======================================================================= */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');
window.addEventListener('load', () => {
  // ローディング中(グレースクリーン)
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  // ローディング中(薄緑スクリーン)
  loadingAreaGreen.animate(
    )
  
})