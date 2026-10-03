'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Search, Cpu, Terminal, ArrowRight, Shield, Network, Server, Layers, FileCode } from 'lucide-react';
import { TabId } from '@/app/page';

interface EngineeringDocsSectionProps {
  onNavigate?: (tab: TabId) => void;
}

export default function EngineeringDocsSection({ onNavigate }: EngineeringDocsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const codeSnippets = [
    {
      id: 'pdam',
      label: 'PDAM Surabaya',
      filename: 'pdam_pressure_telemetry.ts',
      version: 'v1.4.0',
      badge: 'PDAM Surya Sembada',
      code: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-[#8f9b9d]">// PDAM Surya Sembada Surabaya - Sensor Tekanan Air Pipa</p>
          <p><span className="text-[#b597ff]">export interface</span> <span className="text-[#9fe6e0]">WaterPressureSensor</span> &#123;</p>
          <p className="pl-4">sensorId: <span className="text-[#79dce0]">'PDAM-SURABAYA-SENS-04'</span>;</p>
          <p className="pl-4">location: <span className="text-[#79dce0]">'Pipa Utama Distribusi Air Surabaya'</span>;</p>
          <p className="pl-4">pressureBar: <span className="text-[#79dce0]">4.2</span>; <span className="text-[#8f9b9d]">// Telemetry Real-time</span></p>
          <p className="pl-4">protectionGrade: <span className="text-[#79dce0]">'IP67 Waterproof Outdoor'</span>;</p>
          <p className="pl-4">telemetryIntervalMs: <span className="text-[#79dce0]">5000</span>;</p>
          <p>&#125;</p>
        </div>
      ),
    },
    {
      id: 'telkom',
      label: 'Telkom Surabaya',
      filename: 'telkom_cctv_fo_config.ts',
      version: 'v2.1.0',
      badge: 'Telkom Indonesia',
      code: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-[#8f9b9d]">// PT Telkom Surabaya - CCTV & Fiber Optic Network</p>
          <p><span className="text-[#b597ff]">export interface</span> <span className="text-[#9fe6e0]">FiberOpticCctvNode</span> &#123;</p>
          <p className="pl-4">nodeId: <span className="text-[#79dce0]">'TELKOM-SUB-CCTV-08'</span>;</p>
          <p className="pl-4">location: <span className="text-[#79dce0]">'Tiang Monitoring CCTV Kota Surabaya'</span>;</p>
          <p className="pl-4">spliceLossDb: <span className="text-[#79dce0]">0.03</span>; <span className="text-[#8f9b9d]">// OTDR Passed (&lt; 0.1 dB)</span></p>
          <p className="pl-4">cableType: <span className="text-[#79dce0]">'Fiber Optic Single-Mode Core'</span>;</p>
          <p className="pl-4">streamProtocol: <span className="text-[#79dce0]">'RTSP / Managed Switch PoE'</span>;</p>
          <p>&#125;</p>
        </div>
      ),
    },
    {
      id: 'dishub',
      label: 'Dishub Sidoarjo',
      filename: 'dishub_server_rack_specs.ts',
      version: 'v3.0.0',
      badge: 'Dishub Sidoarjo',
      code: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-[#8f9b9d]">// Dishub Sidoarjo - Server Rack & Network Config</p>
          <p><span className="text-[#b597ff]">export interface</span> <span className="text-[#9fe6e0]">DataCenterServerConfig</span> &#123;</p>
          <p className="pl-4">serverId: <span className="text-[#79dce0]">'DISHUB-SDA-SRV-01'</span>;</p>
          <p className="pl-4">rackLocation: <span className="text-[#79dce0]">'Data Center Dishub Sidoarjo'</span>;</p>
          <p className="pl-4">osSystem: <span className="text-[#79dce0]">'Linux Ubuntu Server 22.04 LTS'</span>;</p>
          <p className="pl-4">ipAddress: <span className="text-[#79dce0]">'192.168.10.2'</span>;</p>
          <p className="pl-4">firewallStatus: <span className="text-[#79dce0]">'ACTIVE (UFW Firewall)'</span>;</p>
          <p className="pl-4">targetUptime: <span className="text-[#79dce0]">'99.9%'</span>;</p>
          <p>&#125;</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSnippetIdx((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, codeSnippets.length]);

  const docArticles = [
    { id: 'fo-splicing', title: 'Fiber Optik Splicing & Topology Map', category: 'Infrastruktur', time: '5 min read' },
    { id: 'pdam-sensors', title: 'PDAM Sensor Telemetry API Specs', category: 'Backend & IoT', time: '8 min read' },
    { id: 'dishub-mojokerto', title: 'Web Pengaduan Dishub System Architecture', category: 'Fullstack Next.js', time: '10 min read' },
    { id: 'sim-lab', title: 'SIM LAB Inventory & Database Schema', category: 'React & Database', time: '6 min read' },
  ];

  const filteredDocs = docArticles.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="docs" className="w-full flex flex-col gap-24 py-8">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left-aligned Hero Content */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#79dce0] text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>ARSITEKTUR & CATATAN TEKNIS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f3f7f6] leading-[1.02]">
            Arsitektur & <br />
            Spesifikasi. <br />
            <span className="text-[#79dce0]">Standar Teknis Berpengalaman.</span>
          </h1>

          <p className="text-[#8f9b9d] text-base leading-relaxed max-w-xl">
            Catatan arsitektur dan spesifikasi proyek Pratindo Tri Akta. Dari peta topologi fiber optik hingga instruksi deployment web aplikasi modern.
          </p>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="btn-ice text-xs"
          >
            <span>Diskusi Projek</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right side: Interactive Auto-Rotating Code Window */}
        <div 
          className="lg:col-span-6 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -inset-4 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.25)_0%,rgba(121,220,224,0.20)_45%,transparent_80%)] blur-[75px] rounded-full pointer-events-none -z-10" />

          <div className="relative space-y-3">
            {/* Tab Selectors for PDAM, Telkom, Dishub Sidoarjo */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {codeSnippets.map((snippet, idx) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveSnippetIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeSnippetIdx === idx
                      ? 'bg-[#1b2528] text-[#9fe6e0] border border-[rgba(220,245,242,0.25)] font-bold shadow-md'
                      : 'bg-[#11191c]/70 text-[#8f9b9d] hover:text-[#d5dddd] border border-[rgba(220,245,242,0.08)]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeSnippetIdx === idx ? 'bg-[#9fe6e0] animate-pulse' : 'bg-[#8f9b9d]/40'}`} />
                  {snippet.label}
                </button>
              ))}
            </div>

            {/* Code Window with AnimatePresence */}
            <div className="relative bg-[#11191c] rounded-xl border border-[rgba(220,245,242,0.18)] shadow-2xl p-5 font-mono text-xs text-[#d5dddd] min-h-[220px] flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={codeSnippets[activeSnippetIdx].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(220,245,242,0.10)]">
                    <div className="flex items-center gap-2 text-[#9fe6e0] font-mono text-xs">
                      <FileCode className="w-4 h-4" />
                      <span>{codeSnippets[activeSnippetIdx].filename}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151e21] text-[#79dce0] border border-[rgba(220,245,242,0.12)]">
                        {codeSnippets[activeSnippetIdx].badge}
                      </span>
                      <span className="text-[10px] text-[#8f9b9d] font-mono">{codeSnippets[activeSnippetIdx].version}</span>
                    </div>
                  </div>

                  {codeSnippets[activeSnippetIdx].code}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SOCIAL-PROOF LOGO ROW */}
      {/* ========================================================================= */}
      <section className="w-full border-y border-[rgba(220,245,242,0.10)] py-8 flex flex-col gap-4 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-[#8f9b9d]">
          PENGALAMAN DENGAN BERBAGAI INSTANSI & ORGANISASI
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-sm text-[#d5dddd]">
            <Server className="w-4 h-4 text-[#9fe6e0]" /> CV BKN Sidoarjo
          </div>
          <div className="flex items-center gap-2 font-bold text-sm text-[#d5dddd]">
            <Shield className="w-4 h-4 text-[#79dce0]" /> Dishub Sidoarjo
          </div>
          <div className="flex items-center gap-2 font-bold text-sm text-[#d5dddd]">
            <Network className="w-4 h-4 text-[#b597ff]" /> PDAM Surabaya
          </div>
          <div className="flex items-center gap-2 font-bold text-sm text-[#d5dddd]">
            <Cpu className="w-4 h-4 text-[#9fe6e0]" /> Telkom Surabaya
          </div>
          <div className="flex items-center gap-2 font-bold text-sm text-[#d5dddd]">
            <Terminal className="w-4 h-4 text-[#e8a7c7]" /> Dishub Mojokerto
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT CAPABILITY CARDS */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-gitbook p-6 flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9fe6e0]/10 blur-2xl rounded-full pointer-events-none" />
          <div className="flex flex-col gap-3">
            <span className="w-fit text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1b2528] text-[#9fe6e0] border border-[rgba(220,245,242,0.12)]">
              INFRASTRUKTUR
            </span>
            <h3 className="text-lg font-semibold text-[#f3f7f6]">FO Cable Splicing & Maintenance</h3>
            <p className="text-xs text-[#8f9b9d] leading-relaxed">
              Pengoperasian fusion splicer, pengupasan core, VFL & OTDR Loss testing.
            </p>
          </div>
          <div className="p-3 bg-[#0a0f11] rounded border border-[rgba(220,245,242,0.08)] font-mono text-[11px] text-[#9fe6e0]">
            OTDR Test: 0.18 dB/km PASS
          </div>
        </div>

        <div className="card-gitbook p-6 flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#79dce0]/10 blur-2xl rounded-full pointer-events-none" />
          <div className="flex flex-col gap-3">
            <span className="w-fit text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1b2528] text-[#79dce0] border border-[rgba(220,245,242,0.12)]">
              FULLSTACK API
            </span>
            <h3 className="text-lg font-semibold text-[#f3f7f6]">Next.js & REST API Architecture</h3>
            <p className="text-xs text-[#8f9b9d] leading-relaxed">
              Arsitektur aplikasi terintegrasi Vercel, Supabase, MySQL, dan TailwindCSS untuk layanan masyarakat.
            </p>
          </div>
          <div className="p-3 bg-[#0a0f11] rounded border border-[rgba(220,245,242,0.08)] font-mono text-[11px] text-[#79dce0]">
            POST /api/v1/pengaduan 201 Created
          </div>
        </div>

        <div className="card-gitbook p-6 flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b597ff]/10 blur-2xl rounded-full pointer-events-none" />
          <div className="flex flex-col gap-3">
            <span className="w-fit text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1b2528] text-[#b597ff] border border-[rgba(220,245,242,0.12)]">
              SYSTEM MONITORING
            </span>
            <h3 className="text-lg font-semibold text-[#f3f7f6]">Network & Server Telemetry</h3>
            <p className="text-xs text-[#8f9b9d] leading-relaxed">
              Monitoring ketersediaan jaringan server Dishub & PDAM dengan alert sistem otomatis.
            </p>
          </div>
          <div className="p-3 bg-[#0a0f11] rounded border border-[rgba(220,245,242,0.08)] font-mono text-[11px] text-[#b597ff]">
            System Uptime: 99.98%
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CODE & SPECS SYNC BANNER */}
      {/* ========================================================================= */}
      <section className="relative bg-[#11191c] rounded-2xl p-8 sm:p-12 border border-[rgba(220,245,242,0.15)] text-center flex flex-col items-center gap-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#79dce0]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-[#9fe6e0]" />
          <Layers className="w-5 h-5 text-[#79dce0]" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6] max-w-2xl">
          Integrasi Kode & Dokumentasi Arsitektur
        </h2>

        <p className="text-[#8f9b9d] text-sm sm:text-base max-w-xl">
          Setiap perbaikan kode dan pembaruan arsitektur jaringan secara langsung terdokumentasi dan terverifikasi.
        </p>

        <button
          onClick={() => onNavigate && onNavigate('projects')}
          className="btn-ice text-xs"
        >
          <span>LIHAT PROJEK UTAMA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEARCH SECTION */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f7f6]">
            Temukan Spesifikasi Teknis. <br />
            <span className="text-[#9fe6e0]">Dengan Cepat.</span>
          </h2>
          <p className="text-sm text-[#8f9b9d] leading-relaxed">
            Cari dokumentasi proyek, file konfigurasi, dan catatan teknis melalui pencarian interaktif real-time.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.15)] space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#8f9b9d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dokumentasi (misal: Splicing, PDAM, Next.js)..."
              className="w-full bg-[#0a0f11] border border-[rgba(220,245,242,0.15)] rounded-lg pl-10 pr-4 py-2 text-xs text-[#f3f7f6] placeholder-[#657174] focus:outline-none focus:border-[#9fe6e0]"
            />
          </div>

          <div className="space-y-2">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="p-3 bg-[#151e21] rounded-lg border border-[rgba(220,245,242,0.08)] flex items-center justify-between hover:border-[#9fe6e0] transition-colors cursor-pointer">
                <div>
                  <h4 className="text-xs font-semibold text-[#f3f7f6]">{doc.title}</h4>
                  <span className="text-[10px] text-[#8f9b9d]">{doc.category}</span>
                </div>
                <span className="text-[10px] font-mono text-[#9fe6e0]">{doc.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
