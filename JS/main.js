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




dotsNav.addEventListener("click", function (e) {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  let carouselBg = carousel.style.backgroundImage = `url(${images[targetIndex]})`;
  
  const slideX = parseInt(targetSlide.style.left);
console.log(slideX);
  updateDots(currentDot, targetDot);
  console.log("click");

  const tween = gsap.to(".carousel-slide", {
    x: -(slideX), 
    duration: 1, 
    ease: "expo",
    stagger:0.25, 
    paused: true,
    
    
   
  });

tween.play();
})



const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};



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