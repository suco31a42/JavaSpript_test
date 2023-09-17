const items = document.querySelector('.img-class');
for (let i = 0; i < items.length; i++) {
  const keyframes = {
    opacity: [0, 1]
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}