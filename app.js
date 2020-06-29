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

    let randomColor = Math.floor(Math.random() * 16277216).toString(16);
    context.arc(lastPosition.x, lastPosition.y, 10, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = `#${randomColor}`;

    lastPosition.x = Math.random() * 20 + event.clientX;
    lastPosition.y = Math.random() * 20 + event.clientY;

    console.log(lastPosition.x);
    console.log(event);
  }
}

window.addEventListener("pointermove", draw);
window.addEventListener("pointerup", () => (isDrawing = false));
window.addEventListener("pointerdown", () => {
  isDrawing = true;
  lastPosition.x = event.clientX;
  lastPosition.y = event.clientY;
});
