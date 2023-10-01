const animateScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: [0, '100%'],
        },
        {
          duration: 2000,
          pseudoElement: '::before',
          easing: 'ease',
          fill: 'forwards',
        }
      );
      
      obs.unobserve(entry.target);
    }
  });
};

const scrollObserver = new IntersectionObserver(animateScroll);

const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((scrollElement) => {
  scrollObserver.observe(scrollElement);
});