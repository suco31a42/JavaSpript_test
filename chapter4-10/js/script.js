const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
// チェックボックスにチェックが入っているなら
  btn.disabled = !isAgreed.checked;
});