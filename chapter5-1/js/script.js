const menu = document.querySelector('#menu');
// menu.textContent = content;

const lists = [
  {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
  },
  {
    name: 'ライム',
    img: 'lime.jpg',
    price: 400,
  },
  {
    name: 'マンゴー',
    img: 'mango.jpg',
    price: 500,
  },
  {
    name: 'レモン',
    img: 'lemon.jpg',
    price: 400,
  },
  {
    name: 'イチジク',
    img: 'fig.jpg',
    price: 500,
  },
  {
    name: 'リンゴ',
    img: 'apple.jpg',
    price: 400,
  },
];

// console.log(lists[0].name);

// console.log(lists.length);
for(let i = 0; i < lists.length; i++) {
  const {name, img, price} = lists[i];
  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`
  //要素内部の最後の子要素の後に挿入
  menu.insertAdjacentHTML('beforeend', content);
}

