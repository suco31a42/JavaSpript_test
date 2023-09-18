// 監視対象が範囲内に現れたら実行
const imgClass = (entries) =>  {
  const keyframs = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  };
  entries[0].target.animate(keyframs, 600);
};

// 監視ロボットの設定
const imgObserver = new IntersectionObserver(imgClass);

// 画像を監視するように指示
imgObserver.observe(document.querySelector('#img-class'));