import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Shield, Wallet, Ghost, Boxes, Bot, ChevronRight, Sparkles, Layers, Lock } from 'lucide-react';

interface FeaturedProjectsProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI & Cybersecurity',
    'AI & Desktop Automation',
    'Women Safety & Android System',
    'Full-Stack Web App',
    '3D Game Development',
    'Enterprise Software'
  ];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ai-secure-patch':
        return <Lock className="w-4 h-4 text-emerald-400" />;
      case 'jarvis-ai':
        return <Bot className="w-4 h-4 text-cyan-400" />;
      case 'safe-shield':
        return <Shield className="w-4 h-4 text-red-400" />;
      case 'student-money':
        return <Wallet className="w-4 h-4 text-amber-400" />;
      case 'night-after-9':
        return <Ghost className="w-4 h-4 text-purple-400" />;
      case 'hybrid-inventory':
        return <Boxes className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-white"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70">
                Showcase // ⭐
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans uppercase">
              Featured <span className="text-white">Projects</span>
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm max-w-md uppercase tracking-wider leading-relaxed">
            Click any project card to view complete architectural blueprints, problem/solution statements, features, and source code.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto gap-2 mb-8 pb-4 border-b border-white/10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-3.5 py-1.5 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-white text-black font-bold border border-white'
                  : 'bg-black/30 backdrop-blur-xs text-white/80 border border-white/20 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact, High-Density Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="border border-white/20 hover:border-white bg-black/20 backdrop-blur-sm hover:bg-black/40 p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative"
            >
              <div>
                {/* Header Row: Category Badge & Status */}
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-white/60 mb-3 pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5 truncate">
                    {getProjectIcon(project.id)}
                    <span className="text-white/90 truncate">{project.category}</span>
                  </div>
                  <span className="px-2 py-0.5 border border-white/20 bg-white/5 text-white/70 text-[9px] shrink-0">
                    {project.status}
                  </span>
                </div>

                {/* Thumbnail Image Banner */}
                <div className="relative aspect-[16/9] bg-black overflow-hidden border border-white/15 mb-4 group-hover:border-white/50 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 border border-white bg-black/90 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm border border-white/20 text-[10px] font-mono text-white/90">
                    {project.emoji} Click to Expand
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#ff5e3a] transition-colors mb-1">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-white/60 text-xs font-light line-clamp-2 leading-relaxed mb-3">
                  {project.tagline}
                </p>
              </div>

              {/* Technologies & Click Indicator Footer */}
              <div className="pt-3 border-t border-white/10 space-y-2.5">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-black border border-white/20 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono bg-black text-white/40 border border-white/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#ff5e3a] group-hover:text-white transition-colors">
                  <span>View Project Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Direct GitHub Banner */}
        <div className="p-6 border border-white/20 bg-black/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight mb-1">
              Explore Complete Source Code Repositories on GitHub
            </h4>
            <p className="text-xs text-white/60 uppercase tracking-wider">
              Review codebases, commits, and releases for JARVIS AI, Safe Shield Women Safety, and web tools.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/sanaktekawade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white bg-white hover:bg-black hover:text-white text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
