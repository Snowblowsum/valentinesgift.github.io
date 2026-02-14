const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Parametric functions (like your Python code)
function hearta(k) {
  return 15 * Math.sin(k) ** 3;
}

function heartb(k) {
  return 12 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k);
}

let i = 0;
const MAX_POINTS = 6000;

function draw() {
  if (i >= MAX_POINTS) return; // stop after all points are drawn

  // calculate position
  const x = hearta(i) * 20 + centerX;
  const y = -heartb(i) * 20 + centerY; // invert y like turtle

  // draw dot
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();

  i++;
  requestAnimationFrame(draw); // animate like Python loop
}

// start drawing
draw();

canvas.addEventListener("click", function(e){

  // mouse position
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  // heart bounds
  const heartWidth = 18 * scaleFactor * 18;
  const heartHeight = 18 * scaleFactor * 20;

  if(
    mx > cx - heartWidth &&
    mx < cx + heartWidth &&
    my > cy - heartHeight &&
    my < cy + heartHeight
  ){
    window.location.href = "page2.html"; // ← change to your page
  }

});