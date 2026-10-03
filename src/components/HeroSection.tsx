'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Server, ShieldCheck, Cpu, Terminal, GitBranch, Layers, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { TabId } from '@/app/page';

interface HeroSectionProps {
  onNavigate?: (tab: TabId) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNav = (tab: TabId) => {
    if (onNavigate) onNavigate(tab);
  };

  return (
    <div id="hero" className="w-full flex flex-col gap-24 pt-6 sm:pt-12 pb-16">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        
        {/* Outlined Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(220,245,242,0.20)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono tracking-widest uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#9fe6e0] animate-pulse"></span>
          <span>INFORMATICS ENGINEERING & NETWORK ENGINEER</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f3f7f6] leading-[1.02] mb-6"
        >
          Pratindo Tri Akta. <br />
          <span className="text-[#9fe6e0]">Network & Fullstack Engineer.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8f9b9d] text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
        >
          Mahasiswa aktif Teknik Informatika yang ahli dalam instalasi fiber optik, pemeliharaan server data center, sensor IoT, serta pembuatan aplikasi web modern (Next.js, React, Node.js, Laravel).
        </motion.p>

        {/* Circular / Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNav('projects')}
            className="group flex items-center gap-3 bg-[#151e21] hover:bg-[#1b2528] border border-[rgba(220,245,242,0.20)] hover:border-[#9fe6e0] rounded-full pl-2 pr-5 py-1.5 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[#e9f7f5] text-[#0d1719] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 fill-[#0d1719] ml-0.5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#f3f7f6]">PORTOFOLIO PROJEK</span>
          </button>

          <button
            onClick={() => handleNav('contact')}
            className="btn-ice text-xs"
          >
            <span>Hubungi Pratindo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Hero Atmospheric Glow with Soft White Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.24)_0%,rgba(121,220,224,0.18)_35%,rgba(60,174,177,0.10)_60%,transparent_80%)] blur-[85px] -z-10 pointer-events-none" />
      </section>

      {/* ========================================================================= */}
      {/* 2. KNOWLEDGE & CAPABILITY SECTION */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-10">
        
        {/* Header & 3-Column Feature Eyebrow */}
        <div className="flex flex-col gap-6">
          <div className="text-xs uppercase font-mono tracking-widest text-[#9fe6e0]">
            PORTOFOLIO & EKSEKUSI TEKNIS BERPENGALAMAN
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5 border-l border-[rgba(220,245,242,0.12)] pl-4">
              <span className="text-xs font-mono text-[#8f9b9d] uppercase">01. INFRASTRUKTUR & FO</span>
              <h4 className="text-sm font-semibold text-[#f3f7f6]">Jaringan Fiber Optik & Server</h4>
              <p className="text-xs text-[#8f9b9d] leading-relaxed">Splicing core optik, instalasi IP CCTV Telkom, & maintenance server Dishub Sidoarjo.</p>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-[rgba(220,245,242,0.12)] pl-4">
              <span className="text-xs font-mono text-[#8f9b9d] uppercase">02. APLIKASI WEB MODERN</span>
              <h4 className="text-sm font-semibold text-[#f3f7f6]">Fullstack Web Development</h4>
              <p className="text-xs text-[#8f9b9d] leading-relaxed">Web Pengaduan Dishub Mojokerto, SIM LAB inventaris, dan platform Iron Garage.</p>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-[rgba(220,245,242,0.12)] pl-4">
              <span className="text-xs font-mono text-[#8f9b9d] uppercase">03. TELEMETRI IOT</span>
              <h4 className="text-sm font-semibold text-[#f3f7f6]">Sensor Tekanan Pipa PDAM</h4>
              <p className="text-xs text-[#8f9b9d] leading-relaxed">Pengkabelan modul sensor IoT & kalibrasi data tekanan air distribusi PDAM Surabaya.</p>
            </div>
          </div>
        </div>

        {/* Large Product Screenshot Visual Mockup Frame */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[rgba(220,245,242,0.15)] bg-[#11191c] shadow-2xl p-4 sm:p-6">
          {/* Screenshot Top Bar */}
          <div className="flex items-center justify-between border-b border-[rgba(220,245,242,0.10)] pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e8a7c7]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#79dce0]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#9fe6e0]/40"></div>
              <span className="text-xs font-mono text-[#8f9b9d] ml-2">pta-system / profile-dashboard</span>
            </div>
            <div className="text-xs font-mono text-[#9fe6e0] bg-[#151e21] px-2.5 py-0.5 rounded border border-[rgba(220,245,242,0.12)]">
              AVAILABLE FOR HIRE
            </div>
          </div>

          {/* Screenshot Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3 flex flex-col gap-3 font-mono text-xs text-[#8f9b9d] border-r border-[rgba(220,245,242,0.08)] pr-4">
              <div className="text-white font-semibold flex items-center gap-2 pb-2 border-b border-[rgba(220,245,242,0.08)]">
                <Terminal className="w-4 h-4 text-[#9fe6e0]" />
                <span>NAVIGASI</span>
              </div>
              <div className="text-[#9fe6e0] bg-[#1b2528] p-2 rounded flex items-center justify-between">
                <span>📁 Web Dishub Mojokerto</span>
                <span className="text-[10px]">Live</span>
              </div>
              <div className="p-2 hover:bg-[#151e21] rounded cursor-pointer transition-colors">
                <span>📁 SIM LAB System</span>
              </div>
              <div className="p-2 hover:bg-[#151e21] rounded cursor-pointer transition-colors">
                <span>📁 Iron Garage POS</span>
              </div>
              <div className="p-2 hover:bg-[#151e21] rounded cursor-pointer transition-colors">
                <span>🌐 Fiber Optik FO</span>
              </div>
            </div>

            {/* Main Visual Content */}
            <div className="lg:col-span-9 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#151e21] p-4 rounded-lg border border-[rgba(220,245,242,0.10)]">
                  <div className="text-xs font-mono text-[#8f9b9d]">MAGANG LAPANGAN</div>
                  <div className="text-xl font-bold text-white mt-1">CV BKN</div>
                  <div className="text-xs text-[#9fe6e0] mt-1">Dishub, PDAM, Telkom</div>
                </div>
                <div className="bg-[#151e21] p-4 rounded-lg border border-[rgba(220,245,242,0.10)]">
                  <div className="text-xs font-mono text-[#8f9b9d]">APLIKASI UTAMA</div>
                  <div className="text-xl font-bold text-white mt-1">6+ Web Apps</div>
                  <div className="text-xs text-[#9fe6e0] mt-1">Next.js & Fullstack</div>
                </div>
                <div className="bg-[#151e21] p-4 rounded-lg border border-[rgba(220,245,242,0.10)]">
                  <div className="text-xs font-mono text-[#8f9b9d]">JARINGAN</div>
                  <div className="text-xl font-bold text-[#9fe6e0] mt-1">FO & Server</div>
                  <div className="text-xs text-[#8f9b9d] mt-1">Splicing & Config</div>
                </div>
              </div>

              {/* Code snippet panel */}
              <div className="bg-[#0a0f11] p-4 rounded-lg border border-[rgba(220,245,242,0.08)] font-mono text-xs text-[#d5dddd]">
                <p className="text-[#8f9b9d]">// Pratindo System Profile Configuration</p>
                <p className="mt-1"><span className="text-[#b597ff]">const</span> <span className="text-[#9fe6e0]">engineer</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-[#79dce0]">'Pratindo Tri Akta'</span>,</p>
                <p className="pl-4">role: <span className="text-[#79dce0]">'Network & Fullstack Engineer'</span>,</p>
                <p className="pl-4">status: <span className="text-[#9fe6e0]">'Available for Hiring & Collaboration'</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

          {/* Underneath Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#3caeb1]/20 blur-[70px] pointer-events-none -z-10" />
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. MONITORING & INSIGHTS SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#11191c] rounded-2xl p-8 sm:p-12 border border-[rgba(220,245,242,0.12)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="w-8 h-8 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#9fe6e0]">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f7f6]">
            Monitoring & Integrasi Sistem Terjadwal
          </h2>
          <p className="text-[#8f9b9d] text-sm sm:text-base leading-relaxed">
            Pengalaman teruji dalam pemeliharaan server data center, pengujian ketersediaan jaringan, dan dokumentasi repositori proyek yang selalu aktif.
          </p>
        </div>

        <div className="relative w-full md:w-80 h-48 rounded-xl bg-[#151e21] border border-[rgba(220,245,242,0.12)] flex items-center justify-center p-6 shadow-xl">
          <div className="absolute inset-0 bg-radial from-[#9fe6e0]/15 to-transparent blur-2xl pointer-events-none" />
          <div className="flex flex-col gap-3 w-full relative z-10 font-mono text-xs">
            <div className="flex items-center justify-between bg-[#1b2528] p-2.5 rounded border border-[rgba(220,245,242,0.10)]">
              <span className="text-[#f3f7f6] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9fe6e0]" />
                Auto Sync GitHub
              </span>
              <span className="text-[10px] text-[#9fe6e0]">Verified</span>
            </div>
            <div className="flex items-center justify-between bg-[#1b2528] p-2.5 rounded border border-[rgba(220,245,242,0.10)]">
              <span className="text-[#f3f7f6] flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#79dce0]" />
                Network Monitoring
              </span>
              <span className="text-[10px] text-[#8f9b9d]">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COLLABORATION & VERIFIED WORKFLOW */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-[#11191c] rounded-xl p-6 border border-[rgba(220,245,242,0.12)]">
          <h3 className="text-xl font-semibold text-[#f3f7f6] mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#9fe6e0]" />
            Alur Kerja Profesional & Eksekusi Lapangan
          </h3>
          <div className="bg-[#0a0f11] rounded-lg p-4 font-mono text-xs text-[#8f9b9d] space-y-2 border border-[rgba(220,245,242,0.08)]">
            <div className="flex items-center justify-between text-[#f3f7f6]">
              <span># Magang CV BKN: Pemasangan Sensor & Server Data Center</span>
              <span className="text-[#9fe6e0] bg-[#151e21] px-2 py-0.5 rounded text-[10px]">Verified</span>
            </div>
            <p className="text-[#d5dddd]">&gt; Penanganan teknis lapangan untuk Dishub Sidoarjo, PDAM Surabaya, & Telkom.</p>
            <div className="pt-2 border-t border-[rgba(220,245,242,0.08)] text-[11px] text-[#8f9b9d]">
              Lokasi: <span className="text-[#9fe6e0]">Surabaya & Sidoarjo, Jawa Timur</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#11191c] p-5 rounded-xl border border-[rgba(220,245,242,0.12)]">
            <h4 className="text-sm font-semibold text-[#f3f7f6] mb-1">Pengalaman Industri</h4>
            <p className="text-xs text-[#8f9b9d]">Terbiasa berkoordinasi dengan tim teknis instansi pemerintah dan BUMN.</p>
          </div>
          <div className="bg-[#11191c] p-5 rounded-xl border border-[rgba(220,245,242,0.12)]">
            <h4 className="text-sm font-semibold text-[#f3f7f6] mb-1">Standar Kualitas Teknis</h4>
            <p className="text-xs text-[#8f9b9d]">Menjaga akurasi splicing FO, ketahanan perangkat IP67, & struktur kode bersih.</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SCALE SECTION & LIGHT PROMO BANNER */}
      {/* ========================================================================= */}
      <section className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] flex flex-col gap-2">
            <ShieldCheck className="w-5 h-5 text-[#9fe6e0]" />
            <h4 className="text-sm font-semibold text-[#f3f7f6]">Jaringan & FO Expert</h4>
            <p className="text-xs text-[#8f9b9d]">Pengoperasian Fusion Splicer, pengujian OTDR, & jaringan IP CCTV.</p>
          </div>
          <div className="bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] flex flex-col gap-2">
            <Sliders className="w-5 h-5 text-[#79dce0]" />
            <h4 className="text-sm font-semibold text-[#f3f7f6]">Fullstack Web Engineer</h4>
            <p className="text-xs text-[#8f9b9d]">Next.js, React, Node.js, Laravel, & arsitektur REST API modern.</p>
          </div>
          <div className="bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] flex flex-col gap-2">
            <Layers className="w-5 h-5 text-[#b597ff]" />
            <h4 className="text-sm font-semibold text-[#f3f7f6]">Server Maintenance</h4>
            <p className="text-xs text-[#8f9b9d]">Instalasi Linux OS Server, rack mounting, & konfigurasi firewall/IP.</p>
          </div>
        </div>

        {/* Light Promotional Banner with Enhanced Ambient Light Glow */}
        <div className="promo-ice relative overflow-hidden p-8 sm:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl group">
          {/* Ambient Internal Light Flares */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/80 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-white" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#79dce0]/50 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-[#9fe6e0]/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0%,transparent_70%)] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3 max-w-lg">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d1719] leading-tight">
              Siap Berkolaborasi & Membawa Dampak Nyata Pada Projek Anda.
            </h3>
            <p className="text-[#334155] text-sm leading-relaxed font-medium">
              Jelajahi seluruh portofolio projek, keahlian teknis, dan riwayat magang Pratindo Tri Akta.
            </p>
          </div>

          {/* Action Button with Glow */}
          <button
            onClick={() => handleNav('contact')}
            className="relative z-10 bg-[#0d1719] hover:bg-[#152327] text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 transition-all shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(159,230,224,0.5)] hover:scale-105 active:scale-95 group/btn"
          >
            <span>Hubungi Sekarang</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </section>

    </div>
  );
}
