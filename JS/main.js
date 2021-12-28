// import {example} from "./modules/example.js"
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
let slidesX = 0;
// console.log(slides);
const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";

};

slides.forEach(setSlidePosition)


// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = "translateX(-" + targetSlide.style.left + ")";

// console.log(track.style.transform);

//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");
// };
let sizeX = 0;
dotsNav.addEventListener("click", function (e) {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  console.log(parseInt(targetSlide.style.left));
  const slideX = parseInt(targetSlide.style.left);
  sizeX = slideX;
console.log(sizeX);
  // moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  console.log("click");
  

})



const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};


const tween = gsap.to(".carousel-slide", {
  x: -(slideWidth), 
  duration: 2, 
  ease: "expo",
  stagger:0.15, 
  paused: true,
 
});

const tween2 = gsap.to(".carousel-slide", {
  x: -(slideWidth * 2), 
  duration: 2, 
  ease: "expo",
  stagger:0.15, 
  paused: true,
 
});

// click handlers for controlling the tween instance...


dots[2].onclick = () => tween2.play();
dots[1].onclick = () => tween.play() && tween2.reverse();
dots[0].onclick = () =>  tween.reverse() && tween2.reverse();

// dots[0].onclick = () => tween2.reverse();
// dots[0].onclick = () => tween3.reverse();

// Draggable.create("#track");

// let x = gsap.getProperty("#track", "x", "px"); 

// console.log(x);


// Draggable.create("#track", {
//     type:"x",
//     bounds: document.getElementById("main-container"),
//     inertia: true,
  
//     onClick: function() {
//         console.log("clicked");
//         console.log(x);
        
//     },
//     onDragEnd: function() {
//         console.log("drag ended");
//         console.log(x);

//     }
// });



//Eelke
// Draggble.create(draggable-container, {
//     bounds: {minX: -20, ,maxX: 20 },
//     type: 'x',
//     onDragEnd: (value) => checkIfDraggedEnoughToUpdateActiveIndex(value)
//   })
  
//   checkIfDraggedEnoughToUpdateActiveIndex(value) {
//     if (dragging <15) {
//       activeIndex + 1;
//     }
  
//     positionAllSlides();
//   }