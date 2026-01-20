document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("star-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  // Mouse state
  const mouse = { x: null, y: null, radius: 150 };

  // Resize handling
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
  }

  function initParticles() {
    particles = [];
    // Density: 1 particle per 9000px^2
    const numberOfParticles = (width * height) / 9000;

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, // Velocity x
        vy: (Math.random() - 0.5) * 0.5, // Velocity y
        size: Math.random() * 3 + 1, // Increased size
        baseAlpha: Math.random() * 0.5 + 0.1, // Random base opacity
      });
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Boundary check - bounce
      if (p.x < 0 || p.x > width) p.vx = -p.vx;
      if (p.y < 0 || p.y > height) p.vy = -p.vy;

      // Mouse Interaction
      let dx = mouse.x - p.x;
      let dy = mouse.y - p.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (mouse.x != null && distance < mouse.radius) {
        // Opacity increases as it gets closer to mouse
        let opacity = 1 - distance / mouse.radius;

        // Draw connecting line to mouse (The "Constellation" effect)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(40, 233, 140, ${opacity})`; // Primary green
        ctx.lineWidth = 1;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();

        // Draw particle brighter and slightly larger
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity + 0.3})`;
        ctx.fill();
      } else {
        // Normal star state
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.baseAlpha})`;
        ctx.fill();
      }
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  animate();
});
