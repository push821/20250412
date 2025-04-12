const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// 設置畫布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 星星數量
const stars = [];
const numStars = 100;

// 初始化星星
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 15 + 5, // 星星的大小
    originalRadius: Math.random() * 15 + 5,
  });
}

// 繪製五角星
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = '#87CEFA'; // 淺藍色
  ctx.fill();
}

// 繪製背景和星星
function drawBackground() {
  // 奶黃色背景
  ctx.fillStyle = '#fff8dc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 繪製星星
  stars.forEach((star) => {
    drawStar(star.x, star.y, 5, star.radius, star.radius / 2);
  });
}

// 更新星星大小
function updateStars(mouseX) {
  const scaleFactor = mouseX / canvas.width;
  stars.forEach((star) => {
    star.radius = star.originalRadius * (1 + scaleFactor);
  });
}

// 監聽滑鼠移動
canvas.addEventListener('mousemove', (e) => {
  updateStars(e.clientX);
  drawBackground();
});

// 初始繪製
drawBackground();

// 監聽視窗大小改變，重新調整畫布
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawBackground();
});