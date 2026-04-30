'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[];

    const getColors = () => {
      if (resolvedTheme === 'dark') {
        return {
          // Gold-tinted particles for dark mode (Skylink gold #D4AF37)
          particleColor: 'hsl(43 74% 49%)',
        };
      } else {
        return {
          // Subtle platinum particles for light mode
          particleColor: 'hsl(213 27% 74%)',
        };
      }
    };
    
    let colors = getColors();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > window.innerHeight || this.y < 0) {
          this.speedY *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = colors.particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    
    const init = () => {
      particles = [];
      // Fewer particles for a more refined, premium look
      const numberOfParticles = (canvas.width * canvas.height) / 35000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
      colors = getColors();
    };

    const connect = () => {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = (1 - (distance / 100)) * 0.3;
            // Use gold for dark mode, platinum for light mode
            const colorHsl = resolvedTheme === 'dark' ? '43, 74%, 49%' : '213, 27%, 74%';
            ctx.strokeStyle = `hsla(${colorHsl}, ${opacityValue})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initial setup
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -10, width: '100vw', height: '100vh', pointerEvents: 'none' }} />;
};

export default InteractiveBackground;
