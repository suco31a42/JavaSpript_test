/*ローディングから画面遷移
======================================================================= */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中(グレースクリーン)
  // 動かす内容
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    // 動きの詳細
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  // ローディング中(薄緑スクリーン)
  loadingAreaGreen.animate(
    {
      /*
      横方向は基準値のまま、縦方向は画面外の下側に配置→
      画面いっぱいに広がる→
      横は同じ位置、縦は画面外の上側
      */
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  // ローディング中テキスト
  loadingText.animate(
    [
      {
        // 80%までは変化しない
        opacity: 1,
        offset: .8 //80%
      },
     
      {
        opacity: 0,
        offset: 1 //100%
      }
    ],
  
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
画像ギャラリー
==============================================================
*/
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails')

thumbImages.forEach((thumbImages) => {
  thumbImages.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500)
  });
});

