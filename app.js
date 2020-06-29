const lastPosition = {};

let isDrawing = false;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

function draw(event) {
  if (!isDrawing) return;

  for (i = 0; i < 1; i++) {
    context.beginPath();
    //   context.moveTo(lastPosition.x, lastPosition.y);
    //   context.lineTo(event.x, event.y);

    context.arc(lastPosition.x, lastPosition.y, 10, 0, Math.PI * 2, true);
    context.fill();

    lastPosition.x = Math.random() * event.x;
    lastPosition.y = Math.random() * event.y;

    console.log(lastPosition.x);
    console.log(event.x);
  }
}

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mousedown", () => {
  isDrawing = true;
  lastPosition.x = event.x;
  lastPosition.y = event.y;
});
