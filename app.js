// window.addEventListener("DOMContentLoaded", init);

// function init() {
let canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const domRect = canvas.getBoundingClientRect();
canvas.width = domRect.width;
canvas.height = domRect.height;

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mousedown", () => {
  isDrawing = true;
  lastPosition.x = event.offsetX;
  lastPosition.y = event.offsetY;
});

canvas.addEventListener(
  "touchstart",
  (event) => drawOnTouch(event, domRect),
  false
);
canvas.addEventListener(
  "touchmove",
  (event) => drawOnTouch(event, domRect),
  false
);
// }

const lastPosition = {};

let isDrawing = false;

function createCircles() {
  context.beginPath();

  let randomColor = Math.floor(Math.random() * 16277216).toString(16);
  context.arc(lastPosition.x, lastPosition.y, 10, 0, Math.PI * 2, true);
  context.fill();
  context.fillStyle = `#${randomColor}`;
}

function draw(event) {
  if (!isDrawing) return;
  createCircles();
  lastPosition.x = Math.random() * 10 + event.offsetX;
  lastPosition.y = Math.random() * 10 + event.offsetY;

  console.log(event);
}

function getTouchPosition(event, domRect) {
  if (event.touches) {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      touchX = touch.clientX - domRect.x;
      touchY = touch.clientY - domRect.y;
    }
  }
}

function drawOnTouch(event, domRect) {
  getTouchPosition(event, domRect);
  createCircles();
  lastPosition.x = Math.random() * 10 + touchX;
  lastPosition.y = Math.random() * 10 + touchY;

  event.preventDefault();
}
