const heading = document.querySelector('#heading');

const keyframes = {
  opacity: [0, 1],//色の濃さ
  translate: ['0 50px', 0],// 下から上がる
};
const options = {
  duration: 2000,//２秒遅らせる
  easing: 'ease',//アニメーションが変化の操作、緩やかに変化
};
// アニメーションの内容、アニメーションの再生時間　
heading.animate(keyframes, options);