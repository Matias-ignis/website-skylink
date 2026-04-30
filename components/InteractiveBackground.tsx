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
          particleColor: 'hsl(45 80% 60%)',
        };
      } else {
        return {
          particleColor: 'hsl(30 70% 35%)',
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
        this.size = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
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
      const numberOfParticles = (canvas.width * canvas.height) / 25000;
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

          if (distance < 120) {
            opacityValue = (1 - (distance / 120)) * 0.5; // Adjusted opacity
            const colorHsl = resolvedTheme === 'dark' ? '45, 80%, 60%' : '30, 70%, 35%';
            ctx.strokeStyle = `hsla(${colorHsl}, ${opacityValue})`;
            ctx.lineWidth = 1;
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
