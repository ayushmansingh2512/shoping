// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentIndex = 0;

// function showSlide(index) {
//   const totalSlides = slider.children.length;
//   if (index >= totalSlides) {
//     currentIndex = 0;
//   } else if (index < 0) {
//     currentIndex = totalSlides - 1;
//   } else {
//     currentIndex = index;
//   }
//   const offset = -currentIndex * 100;
//   slider.style.transform = `translateX(${offset}%)`;
// }

// prevButton.addEventListener('click', () => {
//   showSlide(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//   showSlide(currentIndex + 1);
// });
document.querySelectorAll('.slider-container').forEach((container, index) => {
  const slider = container.querySelector('.slider');
  const prevButton = container.querySelector('.prev');
  const nextButton = container.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    const totalSlides = slider.children.length;
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });
});
