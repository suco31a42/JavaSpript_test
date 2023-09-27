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

// for(let i = 0; i < thumbImages.length; i++) {
//   thumbImages[i].addEventListener('mouseover',(event) => {
//     // console.log(event.target.src);
//     mainImage.src = event.target.src;
//     mainImage.animate({opacity: [0, 1]}, 500)//フラッシュアニメ
//   });
thumbImages.forEach((thumbImages) => {
  thumbImages.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500)
  });
});

/* スライドメニュー
==================================================================*/
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li')
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  // console.log('メニューを開く');
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // リンクを１つずつ順に表示
  menuItems.forEach((menuItem, index) => {
    // console.log(`${index}番目`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});