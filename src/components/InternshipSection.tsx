'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Server, Gauge, Video, CheckCircle2, Cpu, MapPin } from 'lucide-react';

export default function InternshipSection() {
  const [activeProjectTab, setActiveProjectTab] = useState<'dishub' | 'pdam' | 'telkom'>('dishub');

  const projects = [
    {
      id: 'dishub',
      title: 'Instalasi & Maintenance Server Dishub Sidoarjo',
      client: 'Dinas Perhubungan (Dishub) Sidoarjo',
      location: 'Sidoarjo, Jawa Timur',
      icon: Server,
      badge: 'Server Infrastructure',
      summary: 'Perancangan, instalasi fisik server rack, serta maintenance rutin sistem operasi dan jaringan server Dishub Sidoarjo.',
      responsibilities: [
        'Perakitan dan instalasi fisik server rack di Data Center Dishub Sidoarjo.',
        'Konfigurasi OS Server (Linux Ubuntu/Debian), manajemen user, firewall & IP Static.',
        'Maintenance hardware rutin, monitoring temperature data center, dan kelancaran traffic server.',
        'Troubleshooting jaringan server lokal & setup backup data berkala.',
      ],
      techUsed: ['Linux Server', 'Rack Server Hardware', 'Subnetting & VLAN', 'SSH Remote', 'Network Monitoring'],
      metrics: [
        { label: 'Uptime Server', value: '99.9%' },
        { label: 'Lingkup Service', value: 'Data Center Dishub' },
        { label: 'Status', value: 'Berhasil Dideploy' },
      ],
    },
    {
      id: 'pdam',
      title: 'Instalasi Sensor Tekanan Air Pipa PDAM Surabaya',
      client: 'PDAM Surya Sembada Surabaya',
      location: 'Surabaya, Jawa Timur',
      icon: Gauge,
      badge: 'IoT & Sensor Telemetry',
      summary: 'Instalasi fisik dan integrasi modul sensor tekanan air pada pipa utama distribusi air PDAM di Surabaya.',
      responsibilities: [
        'Pemasangan fisik sensor tekanan air analog/digital pada katup pipa distribusi PDAM Surabaya.',
        'Pengkabelan data sensor ke modul telemetry IoT transmitter & battery enclosure.',
        'Kalibrasi pembacaan tekanan air (Bar/PSI) dan verifikasi pengiriman data real-time ke server pusat.',
        'Pengujian proteksi komponen terhadap kelembapan dan kondisi luar ruangan (IP67).',
      ],
      techUsed: ['IoT Pressure Sensors', 'Telemetry Modules', 'Analog-to-Digital Signal', 'Cable Wiring', 'Field Calibration'],
      metrics: [
        { label: 'Cakupan Area', value: 'Seluruh Surabaya' },
        { label: 'Akurasi Sensor', value: 'Real-time Telemetry' },
        { label: 'Ketahanan', value: 'IP67 Outdoor' },
      ],
    },
    {
      id: 'telkom',
      title: 'Instalasi Jaringan CCTV Kota Telkom Surabaya',
      client: 'PT Telkom Indonesia (Persero) Tbk - Surabaya',
      location: 'Surabaya, Jawa Timur',
      icon: Video,
      badge: 'Fiber Optic & CCTV Network',
      summary: 'Pengkabelan Fiber Optik, splicing core optik, serta instalasi dan konfigurasi IP CCTV jaringan pemantauan kota.',
      responsibilities: [
        'Penarikan kabel Fiber Optik (FO) dan pengkabelan UTP/PoE untuk kamera CCTV pemantauan kota.',
        'Proses Splicing core fiber optik menggunakan Fusion Splicer & pengujian loss daya kabel dengan OTDR.',
        'Instalasi IP Camera outdoor pada tiang lokasi strategis Telkom Surabaya.',
        'Konfigurasi Managed Switch PoE, IP Addressing kamera, dan integrasi stream video ke NVR / Control Room.',
      ],
      techUsed: ['Fiber Optic Cable', 'Fusion Splicing', 'OTDR Tester', 'IP CCTV Cameras', 'Managed PoE Switch'],
      metrics: [
        { label: 'Konektivitas', value: 'High-Speed FO Link' },
        { label: 'Loss Optik', value: '< 0.1 dB (Splice Quality)' },
        { label: 'Kamera Live', value: 'Integrated to NVR' },
      ],
    },
  ];

  const currentProject = projects.find((p) => p.id === activeProjectTab)!;

  return (
    <div id="internship" className="w-full flex flex-col gap-12 py-8">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>PENGALAMAN INDUSTRI</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6]">
          Magang di CV Bintang Karya Nusantara
        </h2>
        <p className="text-[#8f9b9d] text-sm sm:text-base">
          Terjun langsung menangani instalasi dan pemeliharaan infrastruktur jaringan instansi pemerintahan & BUMN.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj) => {
          const Icon = proj.icon;
          const isActive = activeProjectTab === proj.id;
          return (
            <motion.button
              key={proj.id}
              onClick={() => setActiveProjectTab(proj.id as 'dishub' | 'pdam' | 'telkom')}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`relative p-5 rounded-xl border text-left transition-all flex items-start gap-4 ${
                isActive
                  ? 'bg-[#151e21] border-[#9fe6e0] text-[#f3f7f6] shadow-[0_0_20px_rgba(159,230,224,0.15)]'
                  : 'bg-[#11191c] border-[rgba(220,245,242,0.10)] text-[#8f9b9d] hover:text-[#d5dddd] hover:border-[rgba(220,245,242,0.22)]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeInternshipTabIndicator"
                  className="absolute inset-0 border-2 border-[#9fe6e0] rounded-xl pointer-events-none"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <div className="w-8 h-8 rounded bg-[#1b2528] flex items-center justify-center text-[#9fe6e0] shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#9fe6e0] uppercase block">{proj.badge}</span>
                <h3 className="font-semibold text-sm text-[#f3f7f6]">{proj.client}</h3>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="card-gitbook p-6 sm:p-10 rounded-xl flex flex-col lg:flex-row gap-8 justify-between"
        >
          <div className="flex flex-col gap-6 lg:w-2/3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151e21] text-[#9fe6e0]">
                  {currentProject.badge}
                </span>
                <span className="text-xs text-[#8f9b9d] flex items-center gap-1 font-mono">
                  <MapPin className="w-3 h-3 text-[#9fe6e0]" />
                  {currentProject.location}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#f3f7f6]">{currentProject.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#8f9b9d] leading-relaxed">{currentProject.summary}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#9fe6e0] uppercase tracking-wider mb-3">
                Tanggung Jawab Lapangan:
              </h4>
              <ul className="space-y-2">
                {currentProject.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#d5dddd]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9fe6e0] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono text-[#8f9b9d] uppercase mb-2">Teknologi Terlibat:</h4>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.techUsed.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#151e21] text-[#79dce0] border border-[rgba(220,245,242,0.08)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 bg-[#151e21] p-6 rounded-xl border border-[rgba(220,245,242,0.12)] flex flex-col gap-4">
            <h4 className="text-xs font-mono text-[#9fe6e0] uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Metrik Hasil
            </h4>
            <div className="space-y-3 font-mono text-xs">
              {currentProject.metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[rgba(220,245,242,0.08)] pb-2">
                  <span className="text-[#8f9b9d]">{m.label}</span>
                  <span className="text-[#f3f7f6] font-semibold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
