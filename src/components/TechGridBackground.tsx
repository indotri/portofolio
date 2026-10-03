'use client';

import React, { useEffect, useState } from 'react';

export default function TechGridBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          setMousePos({ x: Math.round(x), y: Math.round(y) });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0f11]">
      {/* 1. Technical Grid Overlay with subtle fade */}
      <div 
        className="absolute inset-0 tech-grid opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 90%)',
        }}
      />

      {/* 2. Interactive Mouse Follow Ambient Light Glow (60fps optimized) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 transition-transform duration-700 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(159, 230, 224, 0.35) 0%, rgba(121, 220, 224, 0.15) 45%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* 3. Soft White Core Spotlight Glow (Top Center Highlight) */}
      <div 
        className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full pointer-events-none opacity-35 animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.22) 0%, rgba(220, 245, 242, 0.12) 35%, rgba(10, 15, 17, 0) 75%)',
          filter: 'blur(75px)',
          willChange: 'opacity',
        }}
      />

      {/* 4. Primary Diffused Cool Teal/Aqua Ambient Glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1050px] h-[680px] rounded-full pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.15) 0%, rgba(95, 183, 180, 0.25) 30%, rgba(60, 174, 177, 0.15) 55%, rgba(13, 20, 22, 0) 75%)',
          filter: 'blur(95px)',
        }}
      />

      {/* 5. Fine Grain Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.018] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

