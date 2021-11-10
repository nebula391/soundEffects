//blank javascript file
var canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext('2d');

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const player = new Player(centerX, centerY, 30, 'blue');

player.draw();

const projectiles = [];

function animate() {
  requestAnimationFrame(animate);
  projectiles.forEach((Projectile) => {
    Projectile.update();
  });
}
animate();

window.addEventListener('click', (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );
  console.log(angle);
  projectiles.push(
    new Projectile(canvas.width / 2, canvas.height / 2, 5, 'red', angle)
  );
});
