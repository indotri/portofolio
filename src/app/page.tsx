'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechGridBackground from '@/components/TechGridBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EngineeringDocsSection from '@/components/EngineeringDocsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import InternshipSection from '@/components/InternshipSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import Preloader from '@/components/Preloader';

export type TabId = 'hero' | 'docs' | 'integrations' | 'internship' | 'skills' | 'projects' | 'contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabId;
      if (['hero', 'docs', 'integrations', 'internship', 'skills', 'projects', 'contact'].includes(hash)) {
        setActiveTab(hash);
      } else if (!window.location.hash) {
        setActiveTab('hero');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeTab = (tab: TabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="portfolio-preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className="relative min-h-screen bg-[#0a0f11] text-[#d5dddd] selection:bg-[#9fe6e0] selection:text-[#0d1719] flex flex-col justify-between overflow-x-hidden font-sans">
      {/* GitBook Technical Grid & Ambient Lighting Background */}
      <TechGridBackground />

      {/* Slim Fixed Header Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={changeTab} />

      {/* Main Content Container (1120px max-width from design.md) */}
      <div className="flex-1 pt-24 sm:pt-28 pb-16 relative z-10 w-[min(calc(100%-48px),1120px)] mx-auto flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full flex-1 flex flex-col justify-center"
          >
            {activeTab === 'hero' && <HeroSection onNavigate={changeTab} />}
            {activeTab === 'docs' && <EngineeringDocsSection onNavigate={changeTab} />}
            {activeTab === 'integrations' && <IntegrationsSection onNavigate={changeTab} />}
            {activeTab === 'internship' && <InternshipSection />}
            {activeTab === 'skills' && <SkillsSection />}
            {activeTab === 'projects' && <ProjectsSection onNavigate={changeTab} />}
            {activeTab === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* GitBook Light Footer */}
      <Footer onNavigate={changeTab} />
    </main>
  </>
);
}
