"use strict";

// -----------------------------------------------------------------------------
function hideLoader() {
  const loader = document.getElementById("loader");
  const contents = document.querySelectorAll(".hidden-content");

  setTimeout(() => {
    loader.classList.add("hidden");
    contents.forEach((el) => el.classList.add("show"));
  }, 1);
}

// -----------------------------------------------------------------------------

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercent}%`;
  });
}

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
  updateScrollProgressBar();
});

// -----------------------------------------------------------------------------

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function updateSlides() {
  let cardsPerSlide;
  if (window.innerWidth <= 480) {
    cardsPerSlide = 1;
  } else if (window.innerWidth <= 768) {
    cardsPerSlide = 2;
  } else {
    cardsPerSlide = 3;
  }

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const slideWidth = 100 / cardsPerSlide;
  const offset = -(currentSlide * 100);
  track.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  currentSlide--;
  updateSlides();
});

nextBtn.addEventListener("click", () => {
  currentSlide++;
  updateSlides();
});

window.addEventListener("resize", updateSlides);
updateSlides();
