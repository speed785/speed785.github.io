/* ═══════════════════════════════════════════════════════════
   speed785.github.io — Particles + Scroll Animations
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Intersection Observer: fade-in on scroll ─────── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

  /* ─── Matrix-style particle background ─────────────── */
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, particles, columns;
  const FONT_SIZE = 14;
  const CHARS = '01アイウエオカキクケコサシスセソ>_|/\\{}[]';
  const GREEN = 'rgba(0, 255, 136, ';
  const CYAN = 'rgba(0, 212, 255, ';

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / FONT_SIZE);

    if (!particles || particles.length !== columns) {
      const oldParticles = particles || [];
      particles = new Array(columns);
      for (let i = 0; i < columns; i++) {
        particles[i] = oldParticles[i] || {
          y: Math.random() * height,
          speed: 0.3 + Math.random() * 0.8,
          opacity: 0.02 + Math.random() * 0.06,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          isCyan: Math.random() < 0.15,
          tickCounter: 0,
          charSwapRate: 5 + Math.floor(Math.random() * 20),
        };
      }
    }
  }

  function draw() {
    // Subtle fade — creates trailing effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.12)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = FONT_SIZE + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < columns; i++) {
      const p = particles[i];
      const color = p.isCyan ? CYAN : GREEN;

      ctx.fillStyle = color + p.opacity + ')';
      ctx.fillText(p.char, i * FONT_SIZE, p.y);

      // Occasional brighter "head" character
      if (Math.random() < 0.005) {
        ctx.fillStyle = color + (p.opacity * 4) + ')';
        ctx.fillText(p.char, i * FONT_SIZE, p.y);
      }

      p.y += p.speed;
      p.tickCounter++;

      // Swap character periodically
      if (p.tickCounter >= p.charSwapRate) {
        p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        p.tickCounter = 0;
      }

      // Reset when off screen
      if (p.y > height + FONT_SIZE) {
        p.y = -FONT_SIZE;
        p.speed = 0.3 + Math.random() * 0.8;
        p.opacity = 0.02 + Math.random() * 0.06;
        p.isCyan = Math.random() < 0.15;
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);

  /* ─── Smooth scroll for anchor links ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
