/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';
import { AboutHero } from './components/AboutHero';
import { WorkSkills } from './components/WorkSkills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { BannerCustomizer } from './components/BannerCustomizer';
import { ScrollCanvas } from './components/ScrollCanvas';
import { initialPortfolioData, PortfolioData, ProjectItem } from './data/portfolioData';

const STORAGE_KEY = 'sanak_portfolio_profile_data_v2';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialPortfolioData, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return initialPortfolioData;
  });

  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  // Global clipboard image paste support
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setData((prev) => ({ ...prev, avatarUrl: event.target.result as string }));
              }
            };
            reader.readAsDataURL(blob);
          }
          break;
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleSubscribe = (_email: string) => {
    // Subscription recorded
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black relative">
      {/* 3D Frame Scroll Animation Canvas */}
      <ScrollCanvas />

      {/* Floating Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Content Layout with Translucent Layering */}
      <main className="relative z-10">
        {/* Banner Title & Breadcrumb */}
        <PageHeader title={data.name} currentPage="AI & Data Science" />

        {/* 1. Hero Section & 2. About Me (4 Structured Cards) */}
        <AboutHero
          data={data}
          onOpenContact={() => setContactOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onUpdateAvatar={(avatarUrl) => setData((prev) => ({ ...prev, avatarUrl }))}
        />

        {/* 3. Skills (Interactive Categories) */}
        <WorkSkills skills={data.skills} />

        {/* 4. Featured Projects ⭐ (Includes JARVIS AI, Safe Shield & AI-Secure-patch-generator) */}
        <FeaturedProjects
          projects={data.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Footer Section */}
      <div className="relative z-10">
        <Footer data={data} onSubscribe={handleSubscribe} />
      </div>

      {/* Interactive Modals */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} data={data} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} data={data} />
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Real-time Dossier Customizer */}
      <BannerCustomizer data={data} onChange={setData} />
    </div>
  );
}
