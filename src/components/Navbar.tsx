'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Code2, Layers, Network, Send, ArrowRight } from 'lucide-react';
import { TabId } from '@/app/page';

import { motion } from 'framer-motion';

interface NavbarProps {
  activeTab?: TabId;
  onSelectTab?: (tab: TabId) => void;
}

export default function Navbar({ activeTab = 'hero', onSelectTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: TabId; href: string; icon: React.ElementType }[] = [
    { name: 'Beranda', id: 'hero', href: '#hero', icon: Cpu },
    { name: 'Arsitektur & Skill', id: 'docs', href: '#docs', icon: Code2 },
    { name: 'Tech Stack', id: 'integrations', href: '#integrations', icon: Layers },
    { name: 'Pengalaman', id: 'internship', href: '#internship', icon: Network },
    { name: 'Projek', id: 'projects', href: '#projects', icon: Cpu },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: TabId) => {
    if (onSelectTab) {
      e.preventDefault();
      onSelectTab(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f11]/90 backdrop-blur-md border-b border-[rgba(220,245,242,0.12)] py-4 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-[min(calc(100%-48px),1120px)] mx-auto flex items-center justify-between">
        {/* Logo - Direct Text */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="font-bold text-base sm:text-lg tracking-tight text-[#f3f7f6] group-hover:text-[#9fe6e0] transition-colors">
            Pratindo Tri Akta
          </span>
        </a>

        {/* Desktop Navigation - Direct Text Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-sm font-medium transition-all relative py-1.5 px-1 ${
                  isActive
                    ? 'text-[#9fe6e0] font-semibold'
                    : 'text-[#8f9b9d] hover:text-[#f3f7f6]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbarActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9fe6e0] to-[#79dce0] rounded-full shadow-[0_0_8px_#9fe6e0]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA - Direct Text Link */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="text-xs sm:text-sm font-medium text-[#9fe6e0] hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <span>Hubungi Saya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#d5dddd] hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - Minimalist */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0d1416]/95 backdrop-blur-lg border-b border-[rgba(220,245,242,0.1)] px-6 py-4 flex flex-col gap-4 mt-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? 'text-[#9fe6e0] font-semibold'
                    : 'text-[#8f9b9d] hover:text-[#f3f7f6]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[rgba(220,245,242,0.1)]">
            <a
              href="#contact"
              onClick={(e) => {
                handleLinkClick(e, 'contact');
                setMobileMenuOpen(false);
              }}
              className="text-sm font-medium text-[#9fe6e0] py-1 flex items-center gap-1"
            >
              <span>Hubungi Saya →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

