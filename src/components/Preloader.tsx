'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Network, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    { text: 'Menginisialisasi konfigurasi modul sistem...', icon: Cpu },
    { text: 'Memuat arsitektur & topologi jaringan fiber optik...', icon: Network },
    { text: 'Sinkronisasi proyek & dokumen rekayasa perangkat lunak...', icon: Terminal },
    { text: 'Menghubungkan antarmuka interaktif & integrasi...', icon: ShieldCheck },
    { text: 'Sistem siap. Selamat datang!', icon: CheckCircle2 },
  ];

  const handleFinish = useCallback(() => {
    setProgress(100);
    setStatusIndex(4);
    setTimeout(() => {
      onComplete();
    }, 250);
  }, [onComplete]);

  useEffect(() => {
    // Lock body scrolling while loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Organic progressive timer (~1.8 seconds total)
    let current = 0;
    const interval = setInterval(() => {
      const remaining = 100 - current;
      const step = Math.max(1, Math.min(Math.floor(Math.random() * 7) + 3, Math.ceil(remaining * 0.15)));
      current = Math.min(100, current + step);
      setProgress(current);

      if (current < 25) {
        setStatusIndex(0);
      } else if (current < 55) {
        setStatusIndex(1);
      } else if (current < 80) {
        setStatusIndex(2);
      } else if (current < 99) {
        setStatusIndex(3);
      } else {
        setStatusIndex(4);
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        clearInterval(interval);
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleFinish, onComplete]);

  const CurrentIcon = statusMessages[statusIndex]?.icon || Terminal;

  return (
    <motion.div
      key="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        filter: 'blur(8px)',
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070c0e] text-[#d5dddd] select-none overflow-hidden"
    >
      {/* Background Ambient Lighting & Grid */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
      
      {/* Central Vivid Ambient Glows */}
      <div className="absolute w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(60,174,177,0.25)_0%,rgba(10,15,17,0)_70%)] blur-3xl pointer-events-none -translate-y-10" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(159,230,224,0.2)_0%,rgba(10,15,17,0)_75%)] blur-2xl pointer-events-none translate-y-16" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-lg px-6 w-full text-center">
        
        {/* Animated Cybernetic Crest / Emblem */}
        <div className="relative mb-6">
          {/* Outer Rotating Dotted Ring */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-[#79dce0]/40 animate-[spin_12s_linear_infinite]" />
          
          {/* Inner Glowing Hex / Ring */}
          <div className="absolute inset-1 rounded-full border border-[rgba(220,245,242,0.25)] bg-[#111c1f] backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(60,174,177,0.35)]">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <Network className="w-8 h-8 sm:w-9 sm:h-9 text-[#9fe6e0] drop-shadow-[0_0_12px_#79dce0]" />
            </motion.div>
          </div>

          {/* Orbiting Satellite Light */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#9fe6e0] shadow-[0_0_12px_#9fe6e0] -top-1 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>

        {/* System Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(220,245,242,0.20)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#9fe6e0] animate-pulse" />
          <span>INFORMATICS & NETWORK ARCHITECTURE</span>
        </div>

        {/* User Name - High Contrast White & Mint */}
        <div className="mb-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6] leading-tight">
            Pratindo <span className="text-[#9fe6e0]">Tri Akta</span>
          </h1>
        </div>

        {/* Subtitle / Role */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm tracking-wide text-[#8f9b9d] mb-8">
          <span className="text-[#9fe6e0] font-medium">Network Engineer</span>
          <span className="text-[#3caeb1]">•</span>
          <span className="text-[#d5dddd]">Fullstack Web Developer</span>
        </div>

        {/* Futuristic Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#8f9b9d] flex items-center gap-1.5 text-xs font-medium">
              <CurrentIcon className="w-3.5 h-3.5 text-[#9fe6e0] animate-pulse" />
              <span className="text-[#d5dddd]">{progress === 100 ? 'Sistem Siap' : 'Memuat data...'}</span>
            </span>
            <span className="text-[#9fe6e0] font-bold text-sm tracking-wider tabular-nums drop-shadow-[0_0_8px_rgba(159,230,224,0.5)]">
              {progress}%
            </span>
          </div>

          {/* Progress Track */}
          <div className="w-full h-2 bg-[#121c20] rounded-full overflow-hidden p-[1px] border border-[rgba(220,245,242,0.20)] relative shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2dd4bf] via-[#79dce0] to-[#e9f7f5] relative transition-all duration-75"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing leading head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#9fe6e0]" />
            </div>
          </div>

          {/* Live Step Status Message */}
          <div className="h-6 flex items-center justify-center mt-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={statusIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.15 }}
                className="text-xs text-[#8f9b9d] font-mono text-center truncate max-w-full px-2"
              >
                {statusMessages[statusIndex]?.text}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Skip button for user convenience */}
        <div className="mt-7">
          <button
            type="button"
            onClick={handleFinish}
            className="text-xs font-mono text-[#8f9b9d] hover:text-[#9fe6e0] transition-colors py-1.5 px-3.5 rounded-full hover:bg-[rgba(220,245,242,0.06)] border border-transparent hover:border-[rgba(220,245,242,0.15)] flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Lewati loading</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
