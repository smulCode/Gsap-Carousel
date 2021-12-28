// import {example} from "./modules/example.js"
const carousel = document.querySelector(".carousel-container")
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",

  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];


// console.log(slides);
const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";

};

slides.forEach(setSlidePosition)
slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${images[index]})`;
 

})




let sizeX = 0;
dotsNav.addEventListener("click", function (e) {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  let carouselBg = carousel.style.backgroundImage = `url(${images[targetIndex]})`;
  
  const slideX = parseInt(targetSlide.style.left);
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