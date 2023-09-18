const showkirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    // 画像を右から真ん中に移動させる
    translate: ['200px 0', 0],
  };
  // console.log(entries[0].target);
  // 画像を指定してアニメーションをつける
  entries[0].target.animate(keyframes, 600);
};

// 監視ロボットの設定
const kirinObserver = new IntersectionObserver(showkirin);

// 画像を監視するように指示
kirinObserver.observe(document.querySelector('#kirin'));