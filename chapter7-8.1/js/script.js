const images = document.querySelectorAll('.gallery img');
const text = document.querySelector('.text');

images.forEach((image)=>{
  image.addEventListener('mouseover', (event) => {
    text.textContent = event.target.alt;
    event.target.animate({opacity: [0, 1]}, 500);
  });
});