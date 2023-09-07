const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
  // ローディングが終わったら隠すクラスを追加する
  loading.classList.add('loaded');
});