'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, Radio, Gauge, Shield, Wrench, Database, Sparkles } from 'lucide-react';
import { TabId } from '@/app/page';

interface ProjectsSectionProps {
  onNavigate?: (tab: TabId) => void;
}

export default function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'infrastructure' | 'web'>('all');

  const projects = [
    {
      id: 'dishub-mojokerto',
      title: 'Web Pengaduan Fasilitas Umum Dishub Mojokerto',
      category: 'web',
      client: 'Dishub Mojokerto',
      liveUrl: 'https://web-dishub-mojokerto.vercel.app/',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel Live'],
      desc: 'Web portal pengaduan masyarakat terhadap fasilitas umum lalu lintas Dinas Perhubungan Mojokerto yang interaktif dan responsif.',
      icon: Shield,
    },
    {
      id: 'iron-garage',
      title: 'Iron Garage (Platform Bengkel Digital)',
      category: 'web',
      client: 'Brand Iron Garage',
      liveUrl: '',
      tags: ['React', 'Node.js', 'JavaScript', 'Digital Workshop', 'Fullstack'],
      desc: 'Platform bengkel digital modern Iron Garage untuk manajemen reservasi servis kendaraan, estimasi biaya, & manajemen sparepart.',
      icon: Wrench,
    },
    {
      id: 'sim-lab',
      title: 'SIM LAB (Sistem Informasi Manajemen Laboratorium)',
      category: 'web',
      client: 'Academic & Lab Operational',
      liveUrl: '',
      tags: ['Laravel', 'PHP', 'MySQL', 'System Management'],
      desc: 'Aplikasi web sistem informasi manajemen laboratorium untuk pengelolaan inventaris perangkat, penjadwalan lab, & log peminjaman.',
      icon: Database,
    },
    {
      id: 'dishub-server',
      title: 'Server Data Center Dishub Sidoarjo',
      category: 'infrastructure',
      client: 'Dishub Sidoarjo (via CV BKN)',
      liveUrl: '',
      tags: ['Linux Server', 'Server Rack', 'Subnetting', 'Maintenance'],
      desc: 'Instalasi fisik server rack, OS Linux, routing interface, & maintenance berkala server Dishub Sidoarjo.',
      icon: Server,
    },
    {
      id: 'pdam-sensors',
      title: 'IoT Sensor Tekanan Air Pipa Surabaya',
      category: 'infrastructure',
      client: 'PDAM Surabaya (via CV BKN)',
      liveUrl: '',
      tags: ['IoT Sensor', 'Telemetry', 'Pipa Distribution', 'Kalibrasi'],
      desc: 'Pemasangan sensor tekanan air analog/digital di seluruh jalur pipa utama distribusi PDAM Surabaya.',
      icon: Gauge,
    },
    {
      id: 'telkom-cctv',
      title: 'Jaringan Fiber Optic CCTV Kota',
      category: 'infrastructure',
      client: 'Telkom Surabaya (via CV BKN)',
      liveUrl: '',
      tags: ['Fiber Optic', 'Fusion Splicing', 'IP CCTV', 'Managed Switch'],
      desc: 'Splicing FO, penarikan kabel, & instalasi kamera CCTV pemantauan kota terintegrasi NVR Telkom.',
      icon: Radio,
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div id="projects" className="w-full flex flex-col gap-12 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJEK & INFRASTRUKTUR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6]">
          Portofolio Projek & Infrastruktur
        </h2>
        <p className="text-[#8f9b9d] text-sm sm:text-base">
          Kumpulan proyek aplikasi web serta instalasi jaringan skala kota di Jawa Timur.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {(['all', 'web', 'infrastructure'] as const).map((cat) => (
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
                layoutId="activeProjectFilterBg"
                className="absolute inset-0 bg-[#1b2528] border border-[rgba(220,245,242,0.25)] rounded-full shadow-[0_0_12px_rgba(159,230,224,0.15)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {cat === 'all' ? `Semua (${projects.length})` : cat === 'web' ? 'Web Apps (3)' : 'Infrastruktur FO (3)'}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => {
          const Icon = proj.icon;
          return (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="card-gitbook p-6 flex flex-col justify-between gap-6 group hover:border-[#9fe6e0]/40 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-8.5 h-8.5 rounded-lg bg-[#151e21] border border-[rgba(220,245,242,0.12)] flex items-center justify-center text-[#9fe6e0] group-hover:bg-[#9fe6e0] group-hover:text-[#0d1719] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8f9b9d] px-2 py-0.5 rounded bg-[#151e21] border border-[rgba(220,245,242,0.08)]">
                    {proj.client}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#f3f7f6] leading-tight mb-2 group-hover:text-[#9fe6e0] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#8f9b9d] leading-relaxed">{proj.desc}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-[#79dce0] bg-[#151e21] px-2 py-0.5 rounded border border-[rgba(220,245,242,0.08)]">
                      #{t}
                    </span>
                  ))}
                </div>

                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ice text-xs w-full justify-center"
                  >
                    <span>Buka Live Web App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate && onNavigate('internship')}
                    className="btn-outline-gitbook text-xs w-full justify-center"
                  >
                    <span>Detail Integrasi</span>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
