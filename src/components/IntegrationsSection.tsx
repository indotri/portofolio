'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Code, GitFork, Cpu, Shield, Globe } from 'lucide-react';
import { TabId } from '@/app/page';

interface IntegrationsSectionProps {
  onNavigate?: (tab: TabId) => void;
}

export default function IntegrationsSection({ onNavigate }: IntegrationsSectionProps) {
  const mainIntegrations = [
    { name: 'Next.js', category: 'Web Framework', isFeatured: true, desc: 'App Router, Server Components, SSR/SSG, dan perancangan UI interaktif modern.' },
    { name: 'Fiber Optic Splicing', category: 'Infrastruktur', isFeatured: true, desc: 'Penggunaan Fusion Splicer, pengupasan core optik, & pengujian loss daya OTDR.' },
    { name: 'React.js', category: 'Frontend', desc: 'Pengembangan komponen UI modular & manajemen state interaktif.' },
    { name: 'Node.js & Express', category: 'Backend', desc: 'Pembuatan REST API scalable dengan async I/O & autentikasi.' },
    { name: 'Laravel & PHP', category: 'Backend', desc: 'Arsitektur MVC, Eloquent ORM, & API endpoints untuk sistem informasi.' },
    { name: 'Tailwind CSS', category: 'Design System', desc: 'Penerapan token warna, tata letak responsif, & efek glassmorphism.' },
    { name: 'Linux OS Server', category: 'SysAdmin', desc: 'Server Ubuntu/Debian, SSH remote management, & konfigurasi firewall.' },
    { name: 'IoT Pressure Sensors', category: 'Telemetry', desc: 'Instalasi sensor analog/digital & kalibrasi data telemetry PDAM.' },
    { name: 'IP CCTV & Network', category: 'Jaringan', desc: 'Pengkabelan FO/UTP, Managed Switch PoE, & integrasi NVR Telkom.' },
    { name: 'Vercel Deployment', category: 'DevOps', desc: 'CI/CD otomatis & live preview hosting untuk aplikasi Next.js.' },
    { name: 'MySQL & Supabase', category: 'Database', desc: 'Perancangan skema relasional, indeks query, & manajemen database.' },
    { name: 'Git & GitHub', category: 'Version Control', desc: 'Manajemen versi kode, branch workflow, & kolaborasi repositori.' },
  ];

  const preinstalledApps = [
    'Next.js', 'React.js', 'Node.js', 'Laravel', 'TypeScript',
    'Tailwind CSS', 'Fusion Splicer', 'OTDR Tester', 'Linux Ubuntu Server',
    'Mikrotik Router', 'Managed Switch PoE', 'Vercel', 'GitHub', 'Figma'
  ];

  return (
    <div id="integrations" className="w-full flex flex-col gap-20 py-8">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative text-center flex flex-col items-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>TECH STACK & PERALATAN KERJA</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f3f7f6] mb-4">
          Tech Stack & Tools
        </h1>

        <p className="text-[#8f9b9d] text-base leading-relaxed mb-8">
          Ekosistem teknologi web modern dan perangkat keras jaringan yang digunakan Pratindo Tri Akta untuk eksekusi projek.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate && onNavigate('projects')}
            className="btn-ice text-xs"
          >
            <span>JELAJAHI PROJEK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="btn-outline-gitbook text-xs"
          >
            <span>KONTAK PRATINDO</span>
          </button>
        </div>

        {/* Hovering Icons Row */}
        <div className="mt-12 flex items-center justify-center gap-6 opacity-75">
          <div className="w-10 h-10 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#9fe6e0] hover:scale-110 transition-transform">
            <GitFork className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#79dce0] hover:scale-110 transition-transform">
            <Code className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#b597ff] hover:scale-110 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#e8a7c7] hover:scale-110 transition-transform">
            <Shield className="w-5 h-5" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#3caeb1]/15 blur-[90px] -z-10 pointer-events-none" />
      </section>

      {/* ========================================================================= */}
      {/* 2. BUILD SOMETHING BRILLIANT SECTION */}
      {/* ========================================================================= */}
      <section className="bg-[#11191c] rounded-2xl p-8 sm:p-12 border border-[rgba(220,245,242,0.12)] text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f7f6]">
          Solusi Terintegrasi & Performa Tinggi
        </h2>
        <p className="text-[#8f9b9d] text-sm sm:text-base max-w-xl">
          Menghubungkan aplikasi web intuitif dengan infrastruktur server & jaringan fiber optik yang handal.
        </p>

        <button
          onClick={() => onNavigate && onNavigate('contact')}
          className="btn-ice text-xs"
        >
          <span>DISKUSIKAN KEBUTUHAN ANDA</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-xs font-mono text-[#8f9b9d] uppercase tracking-wider">
          <span>FO SPLICING</span>
          <span>•</span>
          <span>FULLSTACK WEB</span>
          <span>•</span>
          <span>SERVER MAINTENANCE</span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTEGRATION GALLERY GRID */}
      {/* ========================================================================= */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#8f9b9d]">
            Perangkat lunak & alat kerja lapangan yang dikuasai dan digunakan dalam eksekusi proyek instansi dan industri.
          </p>
        </div>

        {/* Featured 2-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainIntegrations.filter(i => i.isFeatured).map(item => (
            <div key={item.name} className="card-gitbook p-6 rounded-xl border border-[rgba(220,245,242,0.20)] flex flex-col gap-4 relative overflow-hidden bg-[#151e21]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1b2528] text-[#9fe6e0] border border-[rgba(220,245,242,0.12)]">
                  UTAMA
                </span>
                <span className="text-xs text-[#8f9b9d] font-mono">{item.category}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f3f7f6]">{item.name}</h3>
              <p className="text-xs text-[#8f9b9d] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 4-Column Grid for Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainIntegrations.filter(i => !i.isFeatured).map(item => (
            <div
              key={item.name}
              className="card-gitbook p-4 rounded-lg border border-[rgba(220,245,242,0.12)] flex flex-col gap-2 hover:border-[#9fe6e0] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded bg-[#151e21] border border-[rgba(220,245,242,0.10)] flex items-center justify-center text-[#9fe6e0]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-[#8f9b9d]">{item.category}</span>
              </div>
              <h4 className="text-sm font-semibold text-[#f3f7f6] mt-1">{item.name}</h4>
              <p className="text-[11px] text-[#8f9b9d] line-clamp-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRE-INSTALLED APPS ROW */}
      {/* ========================================================================= */}
      <section className="flex flex-col gap-6 border-t border-[rgba(220,245,242,0.10)] pt-12">
        <h3 className="text-lg font-semibold text-[#f3f7f6] text-center">
          Daftar Stack Teruji & Terintegrasi
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {preinstalledApps.map(app => (
            <div
              key={app}
              className="px-3 py-1.5 rounded bg-[#151e21] border border-[rgba(220,245,242,0.10)] text-xs text-[#d5dddd] font-mono hover:border-[#9fe6e0] transition-colors"
            >
              {app}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
