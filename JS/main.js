// import {example} from "./modules/example.js"
Draggable.create("#slide");



Draggable.create("#slide", {
    type:"x",
    bounds: document.getElementById("carousel-container"),
    inertia: true,
    onClick: function() {
        console.log("clicked");
    },
    onDragEnd: function() {
        console.log("drag ended");
    }
});


//Eelke
// Draggble.create(invisibleDragElement, {
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