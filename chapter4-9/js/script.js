const text = document.querySelector('#text');
const count = document.querySelector('#count');

// テキストエリアに入力された文字を数えて反映する
text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  
  if (text.value.length > 100) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  }
});