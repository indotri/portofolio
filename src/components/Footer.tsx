'use client';

import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { TabId } from '@/app/page';

interface FooterProps {
  onNavigate?: (tab: TabId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: TabId) => {
    if (onNavigate) onNavigate(tab);
    scrollToTop();
  };

  return (
    <footer className="w-full bg-[#0d1416] text-[#d5dddd] py-16 px-4 sm:px-8 border-t border-[rgba(220,245,242,0.12)] relative z-20">
      <div className="w-[min(calc(100%-32px),1120px)] mx-auto flex flex-col gap-12">
        
        {/* Top 4-Column Structure */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Logo & Brand */}
          <div className="col-span-2 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#1b2528] border border-[rgba(220,245,242,0.15)] text-[#9fe6e0] flex items-center justify-center font-mono font-bold text-xs">
                PTA
              </div>
              <span className="font-bold text-base tracking-tight text-[#f3f7f6]">Pratindo Tri Akta</span>
            </div>
            <p className="text-xs text-[#8f9b9d] max-w-xs leading-relaxed">
              Portofolio personal & rekam jejak teknis. Mahasiswa Teknik Informatika, Ahli Jaringan & Fiber Optik, serta Fullstack Web Engineer.
            </p>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="font-bold text-[11px] text-[#9fe6e0] uppercase tracking-wider">NAVIGASI</span>
            <button onClick={() => handleNav('hero')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Beranda</button>
            <button onClick={() => handleNav('docs')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Arsitektur & Skill</button>
            <button onClick={() => handleNav('integrations')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Tech Stack</button>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="font-bold text-[11px] text-[#9fe6e0] uppercase tracking-wider">PENGALAMAN</span>
            <button onClick={() => handleNav('internship')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Magang CV BKN</button>
            <button onClick={() => handleNav('internship')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Server Dishub Sidoarjo</button>
            <button onClick={() => handleNav('projects')} className="text-left text-[#8f9b9d] hover:text-[#f3f7f6]">Sensor PDAM & Telkom</button>
          </div>

          {/* Links 3 */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="font-bold text-[11px] text-[#9fe6e0] uppercase tracking-wider">KONTAK</span>
            <a href="mailto:tkjpratindotriakta@gmail.com" className="text-[#8f9b9d] hover:text-[#f3f7f6]">Email Direct</a>
            <a href="https://wa.me/6281334158775" target="_blank" rel="noreferrer" className="text-[#8f9b9d] hover:text-[#f3f7f6]">WhatsApp</a>
            <a href="https://www.instagram.com/pratindo_tri/" target="_blank" rel="noreferrer" className="text-[#8f9b9d] hover:text-[#f3f7f6]">Instagram</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(220,245,242,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f9b9d]">
          <div>
            © {new Date().getFullYear()} Pratindo Tri Akta. Hak Cipta Dilindungi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1b2528] text-[#f3f7f6] text-xs font-medium hover:border-[#9fe6e0] border border-[rgba(220,245,242,0.12)] transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9fe6e0]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
