

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideCount = slides.length;
const slideWidth = slides[1].getBoundingClientRect().width;

let currentIndex = 1;

function moveToSlide(index, transition = true) {
  if (!transition) {
      track.style.transition = 'none';
  } else {
      track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
  }
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
  });
}

function autoSlide() {
  currentIndex += 1;
  moveToSlide(currentIndex);

  if (currentIndex === slideCount - 1) {
      setTimeout(() => {
          track.style.transition = 'none';
          currentIndex = 1;
          moveToSlide(currentIndex, false);

          setTimeout(() => {
              currentIndex += 1;
              moveToSlide(currentIndex);
          }, 500);
      }, 800);
  }
}

moveToSlide(currentIndex);

const intervalId = setInterval(autoSlide, 3000);

window.addEventListener('resize', () => {
  track.style.transition = 'none';
  moveToSlide(currentIndex);
});
