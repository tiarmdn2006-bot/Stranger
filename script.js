// Efek confetti ulang tahun 🎊
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function Confetti(x, y, size, speed, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.color = color;
}

function drawConfetti(confetti) {
  ctx.beginPath();
  ctx.rect(confetti.x, confetti.y, confetti.size, confetti.size);
  ctx.fillStyle = confetti.color;
  ctx.fill();
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach((confetti, i) => {
    confetti.y += confetti.speed;
    if (confetti.y > canvas.height) {
      confettis.splice(i, 1);
    } else {
      drawConfetti(confetti);
    }
  });
}

function createConfetti() {
  let x = Math.random() * canvas.width;
  let y = -10;
  let size = Math.random() * 8 + 5;
  let speed = Math.random() * 3 + 2;
  let colors = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffff4d", "#ff66ff"];
  let color = colors[Math.floor(Math.random() * colors.length)];
  confettis.push(new Confetti(x, y, size, speed, color));
}

setInterval(createConfetti, 100);
setInterval(updateConfetti, 20);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
