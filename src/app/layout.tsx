import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pratindo Tri Akta | Network & Fullstack Web Engineer (Teknik Informatika)',
  description: 'Portofolio Pratindo Tri Akta - Mahasiswa Teknik Informatika dengan pengalaman magang di CV Bintang Karya Nusantara (Dishub Sidoarjo, PDAM Surabaya, Telkom Surabaya) & Pengembang Web Pengaduan Dishub Mojokerto, SIM LAB, Iron Garage.',
  keywords: [
    'Pratindo Tri Akta',
    'Teknik Informatika',
    'Portofolio Liquid Glass',
    'Fiber Optic Technician',
    'Network Engineer',
    'CV Bintang Karya Nusantara',
    'Web Dishub Mojokerto',
    'Iron Garage',
    'SIM LAB',
    'Next.js Developer',
    'Laravel PHP',
    'React Node.js',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-[#020408] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
