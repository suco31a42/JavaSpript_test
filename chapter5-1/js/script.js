const menu = document.querySelector('#menu');
// menu.textContent = content;
const lists = [
  'strawberry.jpg',
  'lime.jpg',
  'mango.jpg',
  'lemon.jpg',
  'fig.jpg',
  'apple.jpg',
];

// console.log(lists.length);
for(let i = 0; i < lists.length; i++) {
  const content = `<div><img src="images/${lists[i]}" alt=""></div>`
  //要素内部の最後の子要素の後に挿入
  menu.insertAdjacentHTML('beforeend', content);
}

