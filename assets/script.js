const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats en boutique et en ligne"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format pour vos bureaux et events"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs de CMJN aux pantones"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants avec découpe laser sur mesure"
  }
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0;

function showSlide(index) {
  bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;

  currentSlideIndex = index;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  dots[index].classList.add('active');
}

function showPreviousSlide() {
  let previousSlideIndex = currentSlideIndex - 1;
  if (previousSlideIndex < 0) {
    previousSlideIndex = slides.length - 1;
  }
  showSlide(previousSlideIndex);
}

function showNextSlide() {
  let nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex >= slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex);
}

leftArrow.addEventListener('click', () => {
  showPreviousSlide();
});

rightArrow.addEventListener('click', () => {
  showNextSlide();
});