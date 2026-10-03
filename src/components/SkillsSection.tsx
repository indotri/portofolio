'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Network, Cpu, Zap, Radio, Server, Layers, Terminal, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const [filter, setFilter] = useState<'all' | 'network' | 'web'>('all');

  const skills = [
    { name: 'Fiber Optic Splicing', category: 'network', icon: Network, level: 'Expert', desc: 'Fusion Splicer, core stripping, VFL & OTDR loss testing' },
    { name: 'Instalasi Jaringan CCTV IP', category: 'network', icon: Radio, level: 'Advanced', desc: 'Pengkabelan FO/UTP, IP Addressing, PoE Switch & NVR' },
    { name: 'Server Admin & Maintenance', category: 'network', icon: Server, level: 'Advanced', desc: 'Server Rack Mounting, Linux (Ubuntu/Debian), SSH & Uptime' },
    { name: 'IoT Pressure Sensors', category: 'network', icon: Cpu, level: 'Intermediate', desc: 'Instalasi sensor telemetry air/industri & kalibrasi data' },
    { name: 'Subnetting & VLAN Config', category: 'network', icon: Terminal, level: 'Advanced', desc: 'Routing, IP Subnetting, Mikrotik/Cisco basic' },

    { name: 'Next.js & React', category: 'web', icon: Code2, level: 'Expert', desc: 'App Router, Server Components, SSR/SSG, API Routes' },
    { name: 'Node.js & Express', category: 'web', icon: Terminal, level: 'Advanced', desc: 'Backend REST API, Async I/O, Package Management' },
    { name: 'Laravel & PHP', category: 'web', icon: Layers, level: 'Advanced', desc: 'MVC Architecture, Eloquent ORM, Blade Templates' },
    { name: 'JavaScript & TypeScript', category: 'web', icon: Code2, level: 'Expert', desc: 'Async/Await, Types, DOM Manipulation, Modern ES6+' },
    { name: 'Tailwind CSS & UI', category: 'web', icon: Zap, level: 'Expert', desc: 'Responsive Design, GitBook Design System, Micro-animations' },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  return (
    <div id="skills" className="w-full flex flex-col gap-12 py-8">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>TECH STACK & KEAHLIAN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6]">
          Keahlian Jaringan & Pemrograman
        </h2>
        <p className="text-[#8f9b9d] text-sm sm:text-base">
          Kombinasi keahlian lapangan di bidang Fiber Optik & Server serta Fullstack Modern Web Development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {(['all', 'network', 'web'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all ${
              filter === cat
                ? 'text-[#f3f7f6] font-semibold'
                : 'text-[#8f9b9d] hover:text-[#d5dddd]'
            }`}
          >
            {filter === cat && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-[#1b2528] border border-[rgba(220,245,242,0.25)] rounded-full shadow-[0_0_12px_rgba(159,230,224,0.15)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {cat === 'all' ? `Semua (${skills.length})` : cat === 'network' ? 'Jaringan & FO (5)' : 'Web & Software (5)'}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="card-gitbook p-6 flex flex-col justify-between gap-4 group hover:border-[#9fe6e0]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8.5 h-8.5 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.12)] flex items-center justify-center text-[#9fe6e0] group-hover:bg-[#9fe6e0] group-hover:text-[#0d1719] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#9fe6e0] px-2 py-0.5 rounded bg-[#151e21] border border-[rgba(220,245,242,0.10)]">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-[#f3f7f6] text-base mb-1 group-hover:text-[#9fe6e0] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[#8f9b9d] leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] text-center">
        <h4 className="text-xs font-mono text-[#8f9b9d] uppercase tracking-widest mb-4">
          Daftar Lengkap Tech Stack & Tools:
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'Next.js', 'React.js', 'Node.js', 'Laravel', 'PHP', 'TypeScript', 
            'Tailwind CSS', 'Fiber Optic Splicing', 'OTDR Testing', 
            'Linux Server', 'IP CCTV Networks', 'IoT Water Sensors', 'Mikrotik', 'Git & GitHub'
          ].map((item) => (
            <div
              key={item}
              className="px-3 py-1 rounded bg-[#151e21] border border-[rgba(220,245,242,0.10)] text-xs text-[#d5dddd] font-mono flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-[#9fe6e0]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
