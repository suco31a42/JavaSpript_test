const role_heading = document.querySelector('#role_heading');
const role_keyframes = {
  opacity: [0, 1],//色の濃さ
  rotate: ['x 360deg', 'x 0deg'],//回転
};
const role_options = {
  duration: 1000,//1秒遅らせる
  easing: 'ease',//アニメーションが変化の操作、緩やかに変化
};
// アニメーションの内容、アニメーションの再生時間
role_heading.animate(role_keyframes, role_options);

const color_heading = document.querySelector('#color_heading');
const color_keyframes = {
  // カラー四色
  color: ['#f66', '#fc2', '#0c6', '#0bd']
};

const color_options = {
  duration: 8000,
  directions: 'alternate',// 終了地点に来たら開始地点に戻す指定
  iterations: Infinity,//ずっと繰り返す
};

color_heading.animate(color_keyframes, color_options);

const float_heading = document.querySelector('#float_heading');
const float_keyframes = {
  // 文字色を透明から白に
  color: ['transparent', '#fff'],
  // 背景の位置を動かして伸びたように見せる
  backgroundPosition: ['100% 0', '0 0'],
};
const float_options = {
  duration: 1000,
  easing: 'ease',
};

float_heading.animate(float_keyframes, float_options);

const unyo_heading = document.querySelector('#unyo_heading');

const unyo_keyframes = {
  borderRadius: [
      '20% 50% 50% 70%/50% 50% 70% 50%',
      '50% 20% 50% 50%/40% 40% 60% 60%',
      '50% 40% 20% 40%/40% 50% 50% 80%',
      '50% 50% 50% 20%/40% 40% 60% 60%',
    ],
};
const unyo_options = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};

unyo_heading.animate(unyo_keyframes, unyo_options);



