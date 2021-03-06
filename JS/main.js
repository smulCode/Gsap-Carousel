// import {example} from "./modules/example.js"
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",

  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${images[index]})`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  const targetIndex = slides.findIndex((slide) => slide === targetSlide);
  const currentSlideIndex = slides.findIndex((slide) => slide === currentSlide);
  const slideX = parseInt(targetSlide.style.left);
  carousel.style.backgroundImage = `url(${images[targetIndex]})`;
  if (targetIndex < currentSlideIndex) {
    let tween = gsap.to(".carousel-slide", {
      x: -slideX,
      duration: 1.5,
      ease: "power3",
      stagger: -0.2,
    });
    tween.play();
    console.log("reverse");
  } else {
    let tween = gsap.to(".carousel-slide", {
      x: -slideX,
      duration: 1.5,
      ease: "power3",
      stagger: 0.2,
    });
    tween.play();
    console.log("play");
  }
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  console.log(targetIndex);

  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

//When i click left ,move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//When i click right ,move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

dotsNav.addEventListener("click", function (e) {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

const setCurrentSlide = (currentSlide, targetSlide) => {
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const MasterTimeline = gsap.timeline({ defaults: { duration: 1 } });
MasterTimeline.from([".main-container"], {
  y: "100%",
  x: 0,
  opacity: 0,
  ease: "power2.inOut",
  delay: 1,
}).from(".carousel-track", {
  opacity: 0,
  scale: 0.8,
  ease: "power1.out",
  delay: 1,
}).from(".carousel-nav", {
  opacity: 0,
  ease: "power1.out",
})
  

