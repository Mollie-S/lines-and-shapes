const lastPosition = {};

let isDrawing = false;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

function draw(event) {
  if (!isDrawing) return;

  context.beginPath();

  let randomColor = Math.floor(Math.random() * 16277216).toString(16);
  context.arc(lastPosition.x, lastPosition.y, 10, 0, Math.PI * 2, true);
  context.fill();
  context.fillStyle = `#${randomColor}`;

  lastPosition.x = Math.random() * 10 + event.clientX;
  lastPosition.y = Math.random() * 10 + event.clientY;
}

function getTouchPosition(event) {
  if (event.touches) {
    if ((event.touches.length = 1)) {
      const touch = event.touches[0];
      touchX = touch.pageX - touch.target.offsetLeft;
      touchY = touch.pageY - touch.target.offsetTop;
    }
  }
}

function drawOnTouch(event) {
  getTouchPosition(event);

  context.beginPath();

  let randomColor = Math.floor(Math.random() * 16277216).toString(16);
  context.arc(lastPosition.x, lastPosition.y, 10, 0, Math.PI * 2, true);
  context.fill();
  context.fillStyle = `#${randomColor}`;

  lastPosition.x = Math.random() * 10 + touchX;
  lastPosition.y = Math.random() * 10 + touchY;

  console.log("hello");
  event.preventDefault();
}

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", () => (isDrawing = false));
window.addEventListener("mousedown", () => {
  isDrawing = true;
  lastPosition.x = event.clientX;
  lastPosition.y = event.clientY;
});

canvas.addEventListener("touchstart", drawOnTouch, false);
canvas.addEventListener("touchmove", drawOnTouch, false);
