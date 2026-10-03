'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
  type: 'success' | 'amber' | 'info' | 'error';
}

export default function NetworkTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sysadmin --init',
      output: 'Network & System Diagnostic Terminal Initialized [PORT-8080 READY]. Type "help" to view available commands.',
      type: 'info',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let newOutput: React.ReactNode = '';
    let type: 'success' | 'amber' | 'info' | 'error' = 'success';

    switch (trimmed) {
      case 'help':
        newOutput = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-teal-300 font-bold">Perintah yang tersedia:</p>
            <p>• <span className="text-teal-200 font-bold">ping pdam-surabaya</span> - Cek status real-time telemetry sensor air PDAM</p>
            <p>• <span className="text-teal-200 font-bold">check-fo-signal</span> - Tes sinyal & attenuation kabel Fiber Optik Telkom</p>
            <p>• <span className="text-teal-200 font-bold">dishub-server-status</span> - Diagnosa server Dishub Sidoarjo Data Center</p>
            <p>• <span className="text-teal-200 font-bold">telkom-cctv-scan</span> - Scan IP kamera CCTV aktif se-Surabaya</p>
            <p>• <span className="text-teal-200 font-bold">whoami</span> - Detail profil mahasiswa Teknik Informatika</p>
            <p>• <span className="text-teal-200 font-bold">skills</span> - Tampilkan daftar lengkap keahlian</p>
            <p>• <span className="text-teal-200 font-bold">clear</span> - Bersihkan terminal</p>
          </div>
        );
        type = 'amber';
        break;

      case 'ping pdam-surabaya':
        newOutput = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-teal-300">PING pdam-telemetry.surabaya.go.id (192.168.42.10): 56 data bytes</p>
            <p>64 bytes from 192.168.42.10: icmp_seq=1 ttl=64 time=2.41 ms [Sensor Pipa Barat: 4.1 BAR]</p>
            <p>64 bytes from 192.168.42.10: icmp_seq=2 ttl=64 time=2.15 ms [Sensor Pipa Timur: 4.3 BAR]</p>
            <p>64 bytes from 192.168.42.10: icmp_seq=3 ttl=64 time=1.98 ms [Sensor Pipa Selatan: 3.9 BAR]</p>
            <p className="text-emerald-300 font-bold">--- pdam-surabaya ping statistics ---</p>
            <p>3 packets transmitted, 3 received, 0.0% packet loss, time 2004ms</p>
          </div>
        );
        type = 'success';
        break;

      case 'check-fo-signal':
        newOutput = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-teal-300 font-bold">[OTDR FIBER OPTIC DIAGNOSTIC TEST]</p>
            <p>Target Core: Core #1 (Telkom Surabaya Central to CCTV Node #42)</p>
            <p>Fiber Wavelength: 1310 nm / 1550 nm</p>
            <p className="text-emerald-300">Splice Loss: 0.03 dB (PERFECT SPLICE)</p>
            <p className="text-emerald-300">Optical Return Loss (ORL): {'>'} 52 dB</p>
            <p className="text-teal-300 font-bold font-mono">STATUS: OPTICAL LINK OK (FULL GIGABIT PASS)</p>
          </div>
        );
        type = 'success';
        break;

      case 'dishub-server-status':
        newOutput = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-teal-300 font-bold">[DISHUB SIDOARJO SERVER SYSTEM REPORT]</p>
            <p>OS: Ubuntu Server 24.04 LTS x86_64</p>
            <p>CPU Load: 12.4% | Memory Usage: 4.2 GB / 32 GB</p>
            <p>Active Network Interface: eth0 (1000Mbps Full Duplex)</p>
            <p>Firewall: UFW ACTIVE (Ports 22, 80, 443 OPEN)</p>
            <p className="text-emerald-300">Daily Automated Backup: SUCCESSFUL (03:00 AM)</p>
          </div>
        );
        type = 'amber';
        break;

      case 'telkom-cctv-scan':
        newOutput = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-teal-300 font-bold">Scanning CCTV Nodes Telkom Surabaya...</p>
            <p>[10.100.1.15] CCTV Simpang Pemuda: ONLINE (1080p 60fps Stream)</p>
            <p>[10.100.1.16] CCTV Bundaran Satelit: ONLINE (1080p 60fps Stream)</p>
            <p>[10.100.1.17] CCTV Stasiun Gubeng: ONLINE (1080p 60fps Stream)</p>
            <p className="text-emerald-300">Total Scanned: 3/3 Nodes Active - Latency 3ms</p>
          </div>
        );
        type = 'success';
        break;

      case 'whoami':
        newOutput = (
          <div className="text-xs font-mono text-teal-200">
            Mahasiswa Aktif Teknik Informatika | Network & Web Engineer
            <br />Ex-Magang CV Bintang Karya Nusantara (Projek: Dishub Sidoarjo, PDAM Surabaya, Telkom Surabaya).
          </div>
        );
        type = 'amber';
        break;

      case 'skills':
        newOutput = (
          <div className="text-xs font-mono text-teal-300 space-y-1">
            <p>• Jaringan & FO: Fiber Splicing, OTDR, Subnetting, CCTV IP, IoT Sensors, Server Maintenance</p>
            <p>• Web Dev: Next.js, React, Node.js, Laravel, PHP, JavaScript, HTML5, CSS3/Tailwind</p>
          </div>
        );
        type = 'info';
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newOutput = `Perintah "${trimmed}" tidak dikenali. Ketik "help" untuk panduan.`;
        type = 'error';
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: newOutput, type }]);
    setInput('');
  };

  return (
    <section id="terminal" className="relative py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-pill text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <TerminalIcon className="w-4 h-4 text-teal-400" />
            <span>Interactive CLI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terminal Diagnosa <span className="liquid-text-cyan font-black">Jaringan</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Uji interaktif perintah jaringan untuk melihat simulasi hasil integrasi sistem di PDAM, Telkom, dan Dishub Sidoarjo.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-teal-300/80 mr-2">Quick Commands:</span>
          {[
            'ping pdam-surabaya',
            'check-fo-signal',
            'dishub-server-status',
            'telkom-cctv-scan',
            'whoami',
            'skills'
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-xl bg-[#041620] border border-teal-500/30 text-xs font-mono text-teal-300 hover:bg-teal-400 hover:text-slate-950 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 text-teal-400 group-hover:text-slate-950" />
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* Terminal Screen Box */}
        <div className="glass-card rounded-3xl border-teal-500/30 bg-[#041219]/95 shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#03151f] border-b border-teal-950/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-teal-500/80"></div>
              <span className="ml-2 text-xs font-mono font-semibold text-teal-300">
                sysadmin@ti-portfolio:~ (interactive-cli)
              </span>
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="text-xs text-teal-400/70 hover:text-teal-300 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Console Output */}
          <div className="p-6 font-mono text-sm max-h-[380px] overflow-y-auto space-y-4 text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-teal-300">
                  <span className="text-teal-400">sysadmin@portfolio:~$</span>
                  <span className="font-bold">{item.command}</span>
                </div>
                <div
                  className={`pl-4 border-l-2 ${
                    item.type === 'amber'
                      ? 'border-teal-400 text-teal-200'
                      : item.type === 'error'
                      ? 'border-rose-500 text-rose-300'
                      : 'border-teal-500 text-slate-200'
                  }`}
                >
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="p-4 bg-[#03151f] border-t border-teal-950/80 flex items-center gap-3"
          >
            <span className="text-teal-400 font-mono font-bold text-sm">sysadmin@portfolio:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Ketik perintah (contoh: "help", "ping pdam-surabaya")...'
              className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-teal-500/50"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-teal-400 text-slate-950 hover:bg-teal-300 transition-colors"
              title="Kirim Perintah"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
