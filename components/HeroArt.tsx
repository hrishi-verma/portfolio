'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HeroArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let resizeTimeout: NodeJS.Timeout;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setSize, 100);
    };
    window.addEventListener('resize', handleResize);

    // --- Configuration ---
    const STAR_COUNT = Math.floor(window.innerWidth * 0.15); // Adjust density

    // --- State Generation ---

    // 1. Stars
    interface Star {
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
      layer: number; // 0 (far), 1 (mid), 2 (near) for parallax
    }
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        baseOpacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.05 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 3)
      });
    }

    // 2. Clouds (Light Mode Only - Image Based)
    interface Cloud {
      x: number;
      y: number;
      speed: number;
      scale: number;
      opacity: number;
    }
    const clouds: Cloud[] = [];
    const CLOUD_COUNT = 4;

    // Create cloud objects
    for (let i = 0; i < CLOUD_COUNT; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.4),
        speed: 0.05 + Math.random() * 0.05,
        scale: 0.5 + Math.random() * 0.8, // Adjust scale for image
        opacity: 0.6 + Math.random() * 0.4
      });
    }

    // Load Cloud Image
    const cloudImage = new Image();
    cloudImage.src = '/images/cloud.png';

    // 3. Shooting Stars
    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      life: number; // Frames remaining
      maxLife: number;
    }
    let shootingStars: ShootingStar[] = [];
    let timeSinceLastShootingStar = 0;

    // --- Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      // Center-relative coordinates for parallax
      mouseX = (e.clientX - window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    let animationId: number;
    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Background Gradient
      // Dynamic sky based on theme
      // Dark: Very dark blue/black
      // Light: Pale Sky Blue
      // Light: Vivid Blue Sky for maximum contrast with white clouds
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (theme === 'dark') {
        skyGradient.addColorStop(0, '#020617'); // Slate 950
        skyGradient.addColorStop(1, '#1e1b4b'); // Indigo 950
      } else {
        skyGradient.addColorStop(0, '#38bdf8'); // Sky 400 (Vivid Blue)
        skyGradient.addColorStop(1, '#bae6fd'); // Sky 200 (Soft Blue)
      }
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      // 2. Draw Celestial Body (Sun/Moon)
      const centerX = canvas.width * 0.85; // Top rightish
      const centerY = canvas.height * 0.2;

      ctx.save();
      // Parallax for celestial body (moves very little)
      ctx.translate(mouseX * 0.01, mouseY * 0.01);

      if (theme === 'dark') {
        // Moon
        // Glow
        const moonGlow = ctx.createRadialGradient(centerX, centerY, 30, centerX, centerY, 150);
        moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        moonGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = moonGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
        ctx.fill();

        // Main Body
        ctx.fillStyle = '#f1f5f9'; // Slate 100
        ctx.shadowColor = '#cbd5e1';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
        ctx.fill();

        // Craters (subtle)
        ctx.fillStyle = 'rgba(148, 163, 184, 0.3)';
        ctx.shadowBlur = 0;
        ctx.beginPath(); ctx.arc(centerX - 12, centerY + 8, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(centerX + 15, centerY - 10, 8, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(centerX + 5, centerY + 20, 4, 0, Math.PI * 2); ctx.fill();
      } else {
        // Sun
        // Corona/Halo
        const sunGlow = ctx.createRadialGradient(centerX, centerY, 40, centerX, centerY, 300);
        sunGlow.addColorStop(0, 'rgba(253, 186, 116, 0.4)'); // Orange 300
        sunGlow.addColorStop(0.5, 'rgba(253, 186, 116, 0.1)');
        sunGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 300, 0, Math.PI * 2);
        ctx.fill();

        // Main Body
        ctx.fillStyle = '#ffedd5'; // Orange 100
        ctx.shadowColor = '#fb923c'; // Orange 400
        ctx.shadowBlur = 40;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();


      // 3. Draw Stars (Dark Mode Only)
      if (theme === 'dark') {
        ctx.fillStyle = '#ffffff';
        stars.forEach(star => {
          // Parallax calculation
          const parallaxX = mouseX * (0.02 + star.layer * 0.01);
          const parallaxY = mouseY * (0.02 + star.layer * 0.01);

          // Twinkle animation
          const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
          const opacity = star.baseOpacity + twinkle * 0.3;

          // Drift logic (very slow)
          star.x += 0.02 * (star.layer + 1);
          if (star.x > canvas.width) star.x = 0;

          ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
          ctx.beginPath();
          ctx.arc(
            star.x + parallaxX,
            star.y + parallaxY,
            star.size,
            0,
            Math.PI * 2
          );
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      }

      // 4. Draw Shooting Stars (Dark Mode Only)
      if (theme === 'dark') {
        timeSinceLastShootingStar++;
        // Spawn chance
        if (timeSinceLastShootingStar > 100 && Math.random() < 0.01) {
          shootingStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height * 0.7),
            vx: -4 - Math.random() * 4,
            vy: 2 + Math.random() * 2,
            length: 100 + Math.random() * 100,
            life: 60,
            maxLife: 60
          });
          timeSinceLastShootingStar = 0;
        }

        // Update & Draw
        ctx.strokeStyle = '#ffffff';
        ctx.lineCap = 'round';
        shootingStars.forEach((ss, idx) => {
          ss.x += ss.vx;
          ss.y += ss.vy;
          ss.life--;

          if (ss.life <= 0) {
            shootingStars.splice(idx, 1);
            return;
          }

          // Fade out
          const opacity = ss.life / ss.maxLife;
          const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.vx * 10, ss.y - ss.vy * 10);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.lineWidth = 2;
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(ss.x - ss.vx * 5, ss.y - ss.vy * 5); // Short tail visual
          ctx.stroke();
        });
      }

      // 5. Draw Clouds (Light Mode Only)
      if (theme === 'light' && cloudImage.complete) {
        clouds.forEach(cloud => {
          // Move cloud slowly to the right
          cloud.x += cloud.speed;

          // Image dimensions
          const imgW = cloudImage.width * cloud.scale;
          const imgH = cloudImage.height * cloud.scale;

          if (cloud.x > canvas.width + imgW) {
            cloud.x = -imgW;
          }

          // Parallax
          const parallaxX = mouseX * 0.02 * cloud.scale;
          const parallaxY = mouseY * 0.01 * cloud.scale;

          ctx.save();
          ctx.translate(cloud.x + parallaxX, cloud.y + parallaxY);
          ctx.globalAlpha = cloud.opacity;

          ctx.drawImage(cloudImage, 0, 0, imgW, imgH);

          ctx.restore();
        });
      }


      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
    };
  }, [theme]);

  return (
    <>
      {/* Semi-transparent blue overlay - visible in dark mode, hidden in light */}
      <div
        className={`fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
        }}
      />

      {/* Atmospheric Cloud Haze (CSS Gradients) */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Layer 1: Large soft drift */}
        <div
          className={`absolute top-[-20%] left-[-10%] w-[120%] h-[60%] blur-[60px] animate-drift-slow transition-colors duration-1000
                ${theme === 'dark' ? 'opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/5 to-transparent' : 'opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/40 to-transparent'}`}
        />

        {/* Layer 2: Lower mist */}
        <div
          className={`absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] blur-[50px] animate-drift-slow transition-colors duration-1000 delay-1000
                ${theme === 'dark' ? 'opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent' : 'opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/30 to-transparent'}`}
          style={{ animationDuration: '30s', animationDirection: 'reverse' }}
        />
      </div>

      {/* Canvas with particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
    </>
  );
}
