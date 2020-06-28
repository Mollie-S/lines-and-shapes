const mouse = {
  x: undefined,
  y: undefined,
};

let isDrawing = false;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

function draw(event) {
  if (!isDrawing) return;

  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
  context.lineTo(event.x, event.y);
  context.stroke();

  mouse.x = event.x;
  mouse.y = event.y;

  console.log(event);
}

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mousedown", () => {
  isDrawing = true;
  mouse.x = event.x;
  mouse.y = event.y;
});
