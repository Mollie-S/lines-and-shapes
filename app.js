const lastPosition = {};

let isDrawing = false;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

function draw(event) {
  if (!isDrawing) return;

  context.beginPath();
  context.moveTo(lastPosition.x, lastPosition.y);
  context.lineTo(event.x, event.y);
  context.stroke();

  lastPosition.x = event.x;
  lastPosition.y = event.y;

  console.log(event);
}

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mousedown", () => {
  isDrawing = true;
  lastPosition.x = event.x;
  lastPosition.y = event.y;
});
