'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Terminal,
  GitBranch,
  Layers,
  CheckCircle2,
  Sparkles,
  Sliders,
  Check,
  Copy,
  Activity,
  Zap,
  Globe,
  Radio,
  Server,
  Code2,
} from 'lucide-react';
import { TabId } from '@/app/page';

interface HeroSectionProps {
  onNavigate?: (tab: TabId) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNav = (tab: TabId) => {
    if (onNavigate) onNavigate(tab);
  };

  // State for interactive System Console (Segment 2)
  const [activeConsoleIndex, setActiveConsoleIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  // State for interactive live ping/latency (Segment 3)
  const [livePing, setLivePing] = useState(14);
  const [activeMetricTab, setActiveMetricTab] = useState<'server' | 'git' | 'iot'>('server');

  // Simulated natural network heartbeat
  useEffect(() => {
    const pingTimer = setInterval(() => {
      setLivePing(Math.floor(Math.random() * 5) + 12); // Fluctuates between 12ms and 16ms
    }, 2800);
    return () => clearInterval(pingTimer);
  }, []);

  const consoleProjects = [
    {
      id: 'dishub-mojokerto',
      name: 'Web Dishub Mojokerto',
      category: 'Production Live Web',
      status: 'ONLINE & DEPLOYED',
      statusColor: 'text-[#9fe6e0]',
      metrics: [
        { label: 'INSTANSI', value: 'Dishub Mojokerto' },
        { label: 'FRAMEWORK', value: 'Next.js 16' },
        { label: 'STATUS', value: 'Production' },
      ],
      code: `// Pratindo System Architecture: Web Dishub Mojokerto
const dishubService = {
  project: 'Web Pengaduan Fasilitas Dishub',
  frontend: 'Next.js + TypeScript + Tailwind CSS',
  status: 'ONLINE (Vercel Global Edge)',
  features: ['Pengaduan Realtime', 'Admin Dispatcher', 'Geolokasi PJU'],
  uptime: '99.98%'
};`,
    },
    {
      id: 'sim-lab',
      name: 'SIM LAB System',
      category: 'Management System',
      status: 'OPERATIONAL',
      statusColor: 'text-[#79dce0]',
      metrics: [
        { label: 'LINGKUP', value: '3 Lab Komputer' },
        { label: 'BACKEND', value: 'Laravel & PHP' },
        { label: 'DATABASE', value: 'MySQL Relational' },
      ],
      code: `// Pratindo System Architecture: SIM LAB Management
namespace App\\Http\\Controllers;

class LabMonitoringController extends Controller {
    public function getLabStatus(): JsonResponse {
        return response()->json([
            'managed_pcs' => 150,
            'active_reservations' => 42,
            'operational_status' => 'OPTIMAL'
        ]);
    }
}`,
    },
    {
      id: 'iron-garage',
      name: 'Iron Garage POS',
      category: 'Fullstack Platform',
      status: 'STABLE READY',
      statusColor: 'text-[#b597ff]',
      metrics: [
        { label: 'INDUSTRI', value: 'Bengkel & Otomotif' },
        { label: 'STACK', value: 'React & Node.js' },
        { label: 'FITUR', value: 'Automated Billing' },
      ],
      code: `// Pratindo System Architecture: Iron Garage Workshop POS
const ironGarageApp = {
  platform: 'Automotive Workshop Management',
  tech: ['React.js', 'Node.js', 'Express', 'Tailwind'],
  capabilities: ['Digital Invoicing', 'Stock Sparepart', 'Customer History'],
  readyForDeploy: true
};`,
    },
    {
      id: 'fiber-optik',
      name: 'Fiber Optik FO & Server',
      category: 'Network Infrastructure',
      status: 'CARRIER GRADE',
      statusColor: 'text-[#9fe6e0]',
      metrics: [
        { label: 'MAGANG', value: 'CV Bintang Karya' },
        { label: 'LOSS FO', value: '0.02 dB Splice' },
        { label: 'CLIENT', value: 'Dishub, PDAM, Telkom' },
      ],
      code: `# OTDR Splice Quality & Core Verification (CV BKN)
$ otdr-trace --port fo0/1 --wavelength 1310nm
[PASS] Core 01 Splice Loss  : 0.02 dB (Standard <= 0.05 dB)
[PASS] Sidoarjo Server Link : 1000 Mbps Full Duplex
[PASS] PDAM Telemetry Cable : IP67 Watertight Sealed
[INFO] Deployment Status    : CERTIFIED_READY`,
    },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(consoleProjects[activeConsoleIndex].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div id="hero" className="w-full flex flex-col gap-28 pt-4 sm:pt-10 pb-20 overflow-visible">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dynamic Interactive Lights & Staggered Reveal) */}
      {/* ========================================================================= */}
      <section className="relative flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        
        {/* Outlined Eyebrow Pill with Live Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(220,245,242,0.22)] bg-[#151e21]/90 backdrop-blur-md text-[#9fe6e0] text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-default select-none"
        >
          <span className="w-2 h-2 rounded-full bg-[#9fe6e0] animate-ping" />
          <span>INFORMATICS ENGINEERING & NETWORK ARCHITECTURE</span>
        </motion.div>

        {/* Main Editorial Headline with Gradient Hover Light */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f3f7f6] leading-[1.02] mb-6 select-none"
        >
          Pratindo Tri Akta. <br />
          <span className="text-[#9fe6e0] bg-gradient-to-r from-[#9fe6e0] via-[#79dce0] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(121,220,224,0.35)]">
            Network & Fullstack Engineer.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8f9b9d] text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
        >
          Mahasiswa aktif Teknik Informatika dengan keahlian praktis instalasi fiber optik (FO), pemeliharaan server data center, sensor IoT, serta rekayasa aplikasi web modern berkinerja tinggi (Next.js, React, Node.js, Laravel).
        </motion.p>

        {/* Action Buttons with Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('projects')}
            className="group flex items-center gap-3 bg-[#151e21] hover:bg-[#1b2528] border border-[rgba(220,245,242,0.20)] hover:border-[#9fe6e0] rounded-full pl-2 pr-5 py-1.5 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(159,230,224,0.25)] cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#e9f7f5] text-[#0d1719] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
              <Play className="w-3.5 h-3.5 fill-[#0d1719] ml-0.5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#f3f7f6] group-hover:text-[#9fe6e0] transition-colors">
              Jelajahi Projek
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNav('contact')}
            className="btn-ice text-xs cursor-pointer"
          >
            <span>Hubungi Pratindo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

        {/* Hero Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22)_0%,rgba(121,220,224,0.16)_35%,rgba(60,174,177,0.08)_60%,transparent_80%)] blur-[85px] -z-10 pointer-events-none" />
      </section>

      {/* ========================================================================= */}
      {/* 2. KNOWLEDGE & CAPABILITY (Interactive System Console with Live Tabs) */}
      {/* ========================================================================= */}
      <section className="w-full flex flex-col gap-10">
        
        {/* Header & 3-Column Feature Cards with Staggered Scroll Entrance */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase font-mono tracking-widest text-[#9fe6e0] flex items-center gap-2"
          >
            <Zap className="w-3.5 h-3.5 text-[#9fe6e0]" />
            <span>PORTOFOLIO & EKSEKUSI TEKNIS BERPENGALAMAN</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                badge: 'INFRASTRUKTUR & FO',
                title: 'Jaringan Fiber Optik & Server',
                desc: 'Splicing core optik berpresisi tinggi (loss 0.02 dB), instalasi IP CCTV Telkom, & pemeliharaan server Dishub Sidoarjo.',
                icon: Radio,
              },
              {
                num: '02',
                badge: 'APLIKASI WEB MODERN',
                title: 'Fullstack Web Development',
                desc: 'Web Pengaduan Dishub Mojokerto terverifikasi live, SIM LAB manajemen inventaris, dan platform Iron Garage.',
                icon: Code2,
              },
              {
                num: '03',
                badge: 'TELEMETRI IOT',
                title: 'Sensor Tekanan Pipa PDAM',
                desc: 'Instalasi modul sensor IoT, kalibrasi analog-to-digital, & pemantauan distribusi tekanan air PDAM Surabaya.',
                icon: Activity,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-2 border-l-2 border-[rgba(220,245,242,0.14)] hover:border-[#9fe6e0] pl-4 transition-colors group cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8f9b9d] uppercase group-hover:text-[#9fe6e0] transition-colors">
                      {item.num}. {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-[#657174] group-hover:text-[#9fe6e0] transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#f3f7f6] group-hover:text-[#9fe6e0] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8f9b9d] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Large Interactive System Console Mockup Frame */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-xl overflow-hidden border border-[rgba(220,245,242,0.18)] bg-[#11191c]/95 backdrop-blur-xl shadow-2xl p-4 sm:p-6"
        >
          {/* Screenshot Top Bar with Status Pill */}
          <div className="flex items-center justify-between border-b border-[rgba(220,245,242,0.10)] pb-4 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e8a7c7]/60"></div>
              <div className="w-3 h-3 rounded-full bg-[#79dce0]/60"></div>
              <div className="w-3 h-3 rounded-full bg-[#9fe6e0]/60"></div>
              <span className="text-xs font-mono text-[#8f9b9d] ml-2 hidden sm:inline">
                pratindo-system / profile-telemetry-console
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9fe6e0] bg-[#151e21] px-2.5 py-0.5 rounded-full border border-[rgba(220,245,242,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9fe6e0] animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>
          </div>

          {/* Interactive Console Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Sidebar with Clickable Project Switcher */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-[rgba(220,245,242,0.08)] pb-4 lg:pb-0 lg:pr-5">
              <div className="text-white font-semibold flex items-center justify-between pb-2 border-b border-[rgba(220,245,242,0.08)] text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#9fe6e0]" />
                  <span>PILIH MODUL PROJEK</span>
                </div>
                <span className="text-[10px] text-[#657174]">Klik untuk ganti</span>
              </div>

              {consoleProjects.map((p, idx) => {
                const isSelected = activeConsoleIndex === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveConsoleIndex(idx)}
                    className={`p-2.5 rounded-lg text-left transition-all flex items-center justify-between group cursor-pointer border ${
                      isSelected
                        ? 'bg-[#1b2528] border-[rgba(45,212,191,0.35)] shadow-[0_0_12px_rgba(20,184,166,0.15)]'
                        : 'bg-transparent border-transparent hover:bg-[#151e21] hover:border-[rgba(220,245,242,0.08)]'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`font-medium ${isSelected ? 'text-[#9fe6e0]' : 'text-[#d5dddd] group-hover:text-white'}`}>
                        {p.name}
                      </span>
                      <span className="text-[10px] text-[#657174]">
                        {p.category}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-[#151e21] text-[#9fe6e0]' : 'text-[#657174]'
                    }`}>
                      {isSelected ? '● Aktif' : 'Pilih'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Visual & Dynamic Metrics Display */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConsoleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  {/* Dynamic 3 Mini Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {consoleProjects[activeConsoleIndex].metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-[#151e21] p-3.5 rounded-lg border border-[rgba(220,245,242,0.10)] flex flex-col justify-between"
                      >
                        <div className="text-[10px] font-mono text-[#8f9b9d] uppercase">
                          {m.label}
                        </div>
                        <div className="text-sm font-bold text-white mt-1">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Code Snippet Box with Copy Button */}
                  <div className="relative bg-[#0a0f11] p-4 rounded-lg border border-[rgba(220,245,242,0.08)] font-mono text-xs text-[#d5dddd] group">
                    <div className="flex items-center justify-between border-b border-[rgba(220,245,242,0.06)] pb-2 mb-3">
                      <span className="text-[11px] text-[#8f9b9d] flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#9fe6e0]" />
                        <span>Arsitektur Konfigurasi: {consoleProjects[activeConsoleIndex].name}</span>
                      </span>

                      <button
                        onClick={handleCopyCode}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#151e21] hover:bg-[#1f2c30] text-[#9fe6e0] text-[11px] transition-colors border border-[rgba(220,245,242,0.1)] cursor-pointer"
                        title="Salin kode"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-xs text-[#9fe6e0] overflow-x-auto leading-relaxed whitespace-pre-wrap font-mono">
                      {consoleProjects[activeConsoleIndex].code}
                    </pre>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Underneath Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#3caeb1]/20 blur-[75px] pointer-events-none -z-10" />
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* 3. MONITORING & INSIGHTS (Live Telemetry & Real-Time Ping Wave) */}
      {/* ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-[#11191c] rounded-2xl p-8 sm:p-12 border border-[rgba(220,245,242,0.14)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
      >
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="w-8 h-8 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.15)] flex items-center justify-center text-[#9fe6e0]">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3f7f6]">
            Monitoring & Integrasi Sistem Terjadwal
          </h2>
          <p className="text-[#8f9b9d] text-sm sm:text-base leading-relaxed">
            Pengalaman teruji dalam pemeliharaan server data center, pengujian ketersediaan jaringan telekomunikasi, dan dokumentasi repositori proyek yang selalu aktif dan terawat.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {(['server', 'git', 'iot'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveMetricTab(tab)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  activeMetricTab === tab
                    ? 'bg-[#151e21] text-[#9fe6e0] border-[#9fe6e0]/40 shadow-[0_0_10px_rgba(159,230,224,0.2)]'
                    : 'bg-transparent text-[#8f9b9d] border-[rgba(220,245,242,0.1)] hover:text-white'
                }`}
              >
                {tab === 'server' ? 'Server Data Center' : tab === 'git' ? 'GitHub Auto-Sync' : 'IoT PDAM Sensor'}
              </button>
            ))}
          </div>
        </div>

        {/* Real-Time Telemetry Monitor Widget */}
        <div className="relative w-full md:w-88 rounded-xl bg-[#151e21] border border-[rgba(220,245,242,0.14)] p-6 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#9fe6e0]/12 to-transparent blur-2xl pointer-events-none" />
          
          <div className="flex flex-col gap-3.5 w-full relative z-10 font-mono text-xs">
            
            {/* Live Ping Status Indicator */}
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(220,245,242,0.08)]">
              <span className="text-[#8f9b9d] flex items-center gap-1.5 text-[11px]">
                <Activity className="w-3.5 h-3.5 text-[#9fe6e0] animate-pulse" />
                <span>LATENSI PING JARIM</span>
              </span>
              <span className="text-[#9fe6e0] font-bold text-xs bg-[#11191c] px-2 py-0.5 rounded border border-[rgba(220,245,242,0.1)]">
                {livePing} ms • STABIL
              </span>
            </div>

            {/* Interactive Stat Items */}
            <div className="flex items-center justify-between bg-[#1b2528] p-2.5 rounded-lg border border-[rgba(220,245,242,0.10)] hover:border-[#9fe6e0]/30 transition-colors">
              <span className="text-[#f3f7f6] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9fe6e0]" />
                Auto Sync GitHub
              </span>
              <span className="text-[10px] text-[#9fe6e0] font-semibold bg-[#11191c] px-2 py-0.5 rounded">
                Aktif (Main)
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#1b2528] p-2.5 rounded-lg border border-[rgba(220,245,242,0.10)] hover:border-[#79dce0]/30 transition-colors">
              <span className="text-[#f3f7f6] flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#79dce0]" />
                Network Uptime
              </span>
              <span className="text-[10px] text-[#79dce0] font-semibold bg-[#11191c] px-2 py-0.5 rounded">
                99.98% High Uptime
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#1b2528] p-2.5 rounded-lg border border-[rgba(220,245,242,0.10)] hover:border-[#3caeb1]/30 transition-colors">
              <span className="text-[#f3f7f6] flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#3caeb1]" />
                Server Status
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold bg-[#11191c] px-2 py-0.5 rounded">
                HEALTHY
              </span>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 4. COLLABORATION & VERIFIED WORKFLOW (Timeline Flow) */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-[#11191c] rounded-xl p-6 border border-[rgba(220,245,242,0.14)] relative overflow-hidden"
        >
          <h3 className="text-xl font-semibold text-[#f3f7f6] mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#9fe6e0]" />
            Alur Kerja Profesional & Eksekusi Lapangan
          </h3>

          <div className="bg-[#0a0f11] rounded-lg p-5 font-mono text-xs text-[#8f9b9d] space-y-3 border border-[rgba(220,245,242,0.08)]">
            <div className="flex items-center justify-between text-[#f3f7f6]">
              <span className="font-semibold text-[#9fe6e0]">
                # Magang CV BKN: Pemasangan Sensor & Server Data Center
              </span>
              <span className="text-[#9fe6e0] bg-[#151e21] px-2 py-0.5 rounded text-[10px] border border-[rgba(220,245,242,0.1)]">
                Terverifikasi
              </span>
            </div>

            <p className="text-[#d5dddd] leading-relaxed">
              &gt; Penanganan teknis langsung di lapangan untuk Dinas Perhubungan Sidoarjo, PDAM Surya Sembada Surabaya, & Telkom Indonesia.
            </p>

            <div className="pt-3 border-t border-[rgba(220,245,242,0.08)] flex flex-wrap items-center justify-between text-[11px] text-[#8f9b9d] gap-2">
              <span>Lokasi Kerja: <strong className="text-[#9fe6e0]">Surabaya & Sidoarjo, Jawa Timur</strong></span>
              <button
                onClick={() => handleNav('internship')}
                className="text-[#9fe6e0] hover:text-white transition-colors underline cursor-pointer"
              >
                Lihat detail magang →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Feature Highlights with Staggered Entrance */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, borderColor: 'rgba(159,230,224,0.35)' }}
            className="bg-[#11191c] p-5 rounded-xl border border-[rgba(220,245,242,0.12)] transition-all cursor-default"
          >
            <h4 className="text-sm font-semibold text-[#f3f7f6] mb-1.5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#9fe6e0]" />
              Pengalaman Industri Nyata
            </h4>
            <p className="text-xs text-[#8f9b9d] leading-relaxed">
              Terbiasa berkoordinasi langsung dengan tim teknis instansi dinas pemerintah, data center BUMN, serta klien komersial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, borderColor: 'rgba(121,220,224,0.35)' }}
            className="bg-[#11191c] p-5 rounded-xl border border-[rgba(220,245,242,0.12)] transition-all cursor-default"
          >
            <h4 className="text-sm font-semibold text-[#f3f7f6] mb-1.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#79dce0]" />
              Standar Kualitas Teknis Tinggi
            </h4>
            <p className="text-xs text-[#8f9b9d] leading-relaxed">
              Memastikan akurasi presisi pada fusion splicing kabel optik, ketahanan rating IP67 outdoor, dan arsitektur kode web yang terstruktur rapi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SCALE SECTION & LIGHT PROMO BANNER (Liquid Hover & Shimmer) */}
      {/* ========================================================================= */}
      <section className="flex flex-col gap-10">
        
        {/* 3 Interactive Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Jaringan & FO Expert',
              desc: 'Pengoperasian Fusion Splicer, pengujian redaman OTDR, optical power meter, serta instalasi IP CCTV Telkom.',
              icon: ShieldCheck,
              accent: 'text-[#9fe6e0]',
              borderHover: 'hover:border-[#9fe6e0]/50',
            },
            {
              title: 'Fullstack Web Engineer',
              desc: 'Next.js 16, React, Node.js, Laravel, REST API, serta antarmuka Tailwind CSS yang dinamis dan berkelas.',
              icon: Sliders,
              accent: 'text-[#79dce0]',
              borderHover: 'hover:border-[#79dce0]/50',
            },
            {
              title: 'Server Maintenance',
              desc: 'Instalasi Linux Server, rack mounting data center Dishub, manajemen IP/subnetting, serta firewall security.',
              icon: Layers,
              accent: 'text-[#b597ff]',
              borderHover: 'hover:border-[#b597ff]/50',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-[#11191c] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] ${card.borderHover} flex flex-col gap-3 transition-all cursor-default shadow-lg group`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.12)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <h4 className="text-base font-semibold text-[#f3f7f6] group-hover:text-white transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-[#8f9b9d] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Light Promotional Banner with Glowing Shimmer Sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="promo-ice relative overflow-hidden p-8 sm:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl group"
        >
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
              Jelajahi seluruh portofolio projek rekayasa web, keahlian teknis jaringan fiber optik, dan riwayat magang Pratindo Tri Akta.
            </p>
          </div>

          {/* Action Button with Dynamic Micro-Pulse */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav('contact')}
            className="relative z-10 bg-[#0d1719] hover:bg-[#152327] text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 transition-all shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(159,230,224,0.5)] cursor-pointer group/btn"
          >
            <span>Hubungi Sekarang</span>
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}
