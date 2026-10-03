'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#9fe6e0', '#79dce0', '#3caeb1', '#ffffff', '#e9f7f5'],
    });

    const subject = encodeURIComponent(formData.subject || `Pesan Portofolio dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Pratindo Tri Akta,\n\nNama Pengirim: ${formData.name}\nEmail Pengirim: ${formData.email || '-'}\n\nPesan:\n${formData.message}\n\nSalam,\n${formData.name}`
    );

    window.location.href = `mailto:tkjpratindotriakta@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div id="contact" className="w-full flex flex-col gap-12 py-8">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(220,245,242,0.18)] bg-[#151e21] text-[#9fe6e0] text-xs font-mono uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>HUBUNGI PRATINDO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f6]">
          Mari Bicara & Bekerjasama
        </h2>
        <p className="text-[#8f9b9d] text-sm sm:text-base">
          Diskusi seputar Jaringan, Fiber Optik, atau pengembangan Web Application.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="card-gitbook p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#f3f7f6] mb-1">Informasi Kontak</h3>
              <p className="text-xs text-[#8f9b9d]">
                Mahasiswa Teknik Informatika siap untuk posisi Network/Web Engineer & Freelance.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-3 p-3 rounded bg-[#151e21] border border-[rgba(220,245,242,0.08)]">
                <Mail className="w-4 h-4 text-[#9fe6e0] shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-[#8f9b9d]">Email Utama</div>
                  <a href="mailto:tkjpratindotriakta@gmail.com" className="text-xs font-semibold text-[#f3f7f6] hover:text-[#9fe6e0] truncate block">
                    tkjpratindotriakta@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded bg-[#151e21] border border-[rgba(220,245,242,0.08)]">
                <Phone className="w-4 h-4 text-[#79dce0] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#8f9b9d]">WhatsApp</div>
                  <a href="https://wa.me/6281334158775" target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#f3f7f6] hover:text-[#79dce0]">
                    081334158775
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded bg-[#151e21] border border-[rgba(220,245,242,0.08)]">
                <MapPin className="w-4 h-4 text-[#b597ff] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#8f9b9d]">Lokasi</div>
                  <div className="text-xs font-semibold text-[#f3f7f6]">Surabaya & Sidoarjo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="card-gitbook p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#9fe6e0]" />
                <h3 className="text-xl font-bold text-[#f3f7f6]">Membuka Email Client...</h3>
                <p className="text-xs text-[#8f9b9d]">Pesan telah dikirim ke tkjpratindotriakta@gmail.com.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-ice text-xs mt-4"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-semibold text-[#f3f7f6] mb-2">Kirim Pesan Langsung</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#8f9b9d] mb-1">Nama *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full bg-[#0a0f11] border border-[rgba(220,245,242,0.12)] rounded px-3 py-2 text-xs text-[#f3f7f6] focus:outline-none focus:border-[#9fe6e0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8f9b9d] mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full bg-[#0a0f11] border border-[rgba(220,245,242,0.12)] rounded px-3 py-2 text-xs text-[#f3f7f6] focus:outline-none focus:border-[#9fe6e0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8f9b9d] mb-1">Subjek</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Topik pesan..."
                    className="w-full bg-[#0a0f11] border border-[rgba(220,245,242,0.12)] rounded px-3 py-2 text-xs text-[#f3f7f6] focus:outline-none focus:border-[#9fe6e0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8f9b9d] mb-1">Pesan *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ketik pesan Anda..."
                    className="w-full bg-[#0a0f11] border border-[rgba(220,245,242,0.12)] rounded px-3 py-2 text-xs text-[#f3f7f6] resize-none focus:outline-none focus:border-[#9fe6e0]"
                  ></textarea>
                </div>

                <button type="submit" className="btn-ice text-xs w-full justify-center py-2.5">
                  <span>Kirim Email</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
