import React from 'react';

interface PageHeaderProps {
  title?: string;
  currentPage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title = "Sanak Tekawade",
  currentPage = "AI & Data Science",
}) => {
  return (
    <section id="home" className="pt-28 pb-10 md:pt-32 md:pb-12 bg-transparent relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        
        {/* Left: Editorial Header & Category */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-white"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70 font-mono">
              Engineering Portfolio // 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white font-sans uppercase">
            {title}
          </h1>
        </div>

        {/* Right: Editorial Breadcrumb & Index Stamp */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/60 font-mono">
          <div className="flex items-center gap-2">
            <a href="#about" className="hover:text-white transition-colors">INDEX</a>
            <span className="text-white/30">/</span>
            <span className="text-white font-semibold">{currentPage}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#ff5e3a]">[ DYPCOEI PUNE ]</span>
        </div>

      </div>
    </section>
  );
};
