const loadingArea = document.querySelector('#loading');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中(ぼかし画面)
  loadingArea.animate(
    {
      // ゆっくり画面を表す
      backdropFilter: ['blur(10px)', 'blur(0)'],
      // ぼやけ画面
      background: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
      // ぼかし画面が消えると同時に文字が消える
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      eading: 'ease',
      fill: 'forwards',
    }
  );
  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8
      },
      {
        opacity: 0,
        offset: 1
      },
    ],
  );
});
