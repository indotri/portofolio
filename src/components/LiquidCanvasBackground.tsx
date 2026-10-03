'use client';

import React from 'react';

export default function LiquidCanvasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030b0e]">
      {/* 1. Primary Luminous Mint/White Top-Right Light Source (matching the user's image) */}
      <div 
        className="absolute -top-[10%] -right-[10%] w-[650px] sm:w-[900px] lg:w-[1100px] h-[550px] sm:h-[800px] rounded-full pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.85) 0%, rgba(204, 251, 241, 0.75) 12%, rgba(94, 234, 212, 0.55) 28%, rgba(20, 184, 166, 0.35) 48%, rgba(4, 47, 46, 0.15) 70%, transparent 85%)',
          filter: 'blur(75px)',
        }}
      />

      {/* 2. Wide Ethereal Emerald/Teal Ambient Atmosphere (upper right to center) */}
      <div 
        className="absolute top-0 right-0 w-[80%] sm:w-[65%] h-[85vh] pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(ellipse 90% 75% at 75% 25%, rgba(45, 212, 191, 0.28) 0%, rgba(13, 148, 136, 0.2) 35%, rgba(6, 78, 59, 0.12) 60%, transparent 85%)',
          filter: 'blur(90px)',
        }}
      />

      {/* 3. Subtle Deep Teal Ambient Tone across mid-viewport */}
      <div 
        className="absolute top-[25%] left-[20%] w-[60%] h-[50vh] pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(13, 148, 136, 0.15) 0%, rgba(4, 32, 38, 0.08) 55%, transparent 80%)',
          filter: 'blur(100px)',
        }}
      />

      {/* 4. Left & Bottom Dark Vignette / Midnight petrol depth */}
      <div 
        className="absolute bottom-0 left-0 w-[60%] h-[60vh] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle at 15% 85%, rgba(6, 40, 48, 0.22) 0%, rgba(3, 16, 22, 0.1) 50%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      {/* 5. Subtle Ultra-Fine Dithering Texture to prevent color banding */}
      <div 
        className="absolute inset-0 opacity-[0.022] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}




