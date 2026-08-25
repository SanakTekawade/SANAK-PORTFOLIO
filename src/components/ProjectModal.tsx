import React, { useEffect } from 'react';
import { X, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black border border-white w-full max-w-3xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
          title="Close Dialog (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Metadata */}
        <div className="mb-6 pb-4 border-b border-white/15">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{project.emoji}</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff5e3a]">
              {project.category} · {project.status}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {project.title}
          </h2>
          <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider font-light mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Hero Image */}
        <div className="border border-white/20 overflow-hidden mb-6 bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 sm:h-72 object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Full Overview Description */}
        <div className="p-5 border border-white/20 bg-zinc-950 mb-6">
          <h4 className="text-xs font-bold font-mono text-white/60 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            Executive Synopsis
          </h4>
          <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem vs Solution Comparison Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 border border-red-500/30 bg-red-950/15">
            <h4 className="text-xs font-bold font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Problem Statement
            </h4>
            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 border border-emerald-500/30 bg-emerald-950/15">
            <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The Engineered Solution
            </h4>
            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Architectural Features */}
        <div className="p-6 border border-white/20 bg-zinc-950 mb-6">
          <h4 className="text-xs font-bold uppercase text-white font-mono tracking-widest mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Core Implementation & Architectural Capabilities
          </h4>
          <div className="space-y-3">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                <span className="font-mono text-xs text-white/40 shrink-0 mt-0.5">0{idx + 1}.</span>
                <span className="font-light">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase text-white/50 tracking-widest mb-3">
            Technology Stack & Libraries Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-zinc-950 border border-white/30 text-white text-xs font-mono uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/15">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 border border-white bg-white hover:bg-black hover:text-white text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Code</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="flex-1 py-3.5 border border-white/30 hover:border-white text-white hover:bg-white hover:text-black font-medium text-xs uppercase tracking-[0.2em] transition-all cursor-pointer text-center"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
