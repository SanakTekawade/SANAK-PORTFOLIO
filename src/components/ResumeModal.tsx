import React from 'react';
import { X, Download, Briefcase, Award, GraduationCap, Code, Sparkles, FolderGit2, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `SANAK TEKAWADE - CURRICULUM VITAE // DOSSIER\n` +
      `===========================================\n` +
      `Discipline: ${data.tagline}\n` +
      `Academics: ${data.year} - ${data.branch}\n` +
      `Institute: ${data.college}\n` +
      `Dispatch Email: ${data.email}\n` +
      `Telephone / Phone: +91 ${data.phone}\n` +
      `Instagram: @${data.instagram} (${data.instagramUrl})\n` +
      `LinkedIn: ${data.linkedin}\n` +
      `GitHub: ${data.github}\n` +
      `Location: ${data.location}\n\n` +
      `EXECUTIVE STATEMENT:\n` +
      `${data.description}\n\n` +
      `CORE COMPETENCIES & CALIBRATIONS:\n` +
      data.skills.map(s => `- [${s.category}] ${s.name}: ${s.percentage}% (${s.level})`).join('\n') + `\n\n` +
      `FEATURED PROJECTS & SYSTEMS ARCHITECTURE:\n` +
      data.projects.map(p => `- ${p.title} (${p.category}): ${p.tagline}\n  Stack: ${p.technologies.join(', ')}`).join('\n\n') + `\n\n` +
      `ACADEMIC FORMATION & DEGREE:\n` +
      `- Bachelor of Technology in Artificial Intelligence & Data Science (AIDS)\n` +
      `  D.Y. Patil College of Engineering and Innovation, Talegaon, Pune (2024 - 2028)\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Sanak_Tekawade_AI_DS_CV.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-black border border-white w-full max-w-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/15">
          <div className="w-12 h-12 border border-white bg-black flex items-center justify-center text-white font-bold text-base font-mono">
            ST
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{data.name}</h3>
            <p className="text-white/60 text-xs uppercase tracking-widest">{data.tagline}</p>
            <p className="text-[#ff5e3a] text-[10px] font-mono uppercase tracking-wider">{data.collegeShort}</p>
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs font-mono">
          <div className="p-3 bg-zinc-950 border border-white/20 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 {data.phone}</span>
          </div>
          <div className="p-3 bg-zinc-950 border border-white/20 flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 text-[#ff5e3a]" />
            <span className="truncate">{data.email}</span>
          </div>
          <div className="p-3 bg-zinc-950 border border-white/20 flex items-center gap-2 truncate">
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@{data.instagram}</span>
          </div>
          <div className="p-3 bg-zinc-950 border border-white/20 flex items-center gap-2 truncate">
            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="space-y-5 text-sm text-white/80">
          
          {/* Education Block */}
          <div className="p-5 border border-white/20 bg-black">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-white" /> Academic Accreditation
            </h4>
            <p className="text-white text-xs font-semibold">
              B.Tech in Artificial Intelligence & Data Science (AIDS) — 2nd Year
            </p>
            <p className="text-white/60 text-xs font-mono mt-0.5">
              {data.college}
            </p>
          </div>

          {/* Core Projects Block */}
          <div className="p-5 border border-white/20 bg-black">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5 text-white" /> Featured Key Systems
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white font-medium">🔒 AI-Secure-patch-generator</span>
                <span className="text-emerald-400 font-mono text-[10px]">Cybersecurity & AI Patching</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white font-medium">🤖 JARVIS AI Assistant</span>
                <span className="text-cyan-400 font-mono text-[10px]">App Launcher & Message Dispatch</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white font-medium">🛡️ SAFE SHIELD</span>
                <span className="text-red-400 font-mono text-[10px]">Women Safety SOS & GPS Tracking</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white font-medium">💰 Student Money Manager</span>
                <span className="text-white/50 font-mono text-[10px]">React & Firebase Platform</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white font-medium">👻 Night After 9</span>
                <span className="text-white/50 font-mono text-[10px]">Unreal Engine 3D Horror</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white font-medium">📦 Hybrid Inventory Manager</span>
                <span className="text-white/50 font-mono text-[10px]">Cloud Logistics Suite</span>
              </div>
            </div>
          </div>

          {/* Calibrated Proficiencies */}
          <div className="p-5 border border-white/20 bg-black">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-white" /> Technical Calibrations
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="text-[10px] uppercase font-mono px-2.5 py-1 bg-zinc-950 text-white border border-white/30">
                  {s.name} [{s.percentage}%]
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 py-4 border border-white bg-white hover:bg-black hover:text-white text-black font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume / CV</span>
          </button>
          <button
            onClick={onClose}
            className="px-8 py-4 border border-white/30 hover:border-white text-white font-medium text-xs uppercase tracking-[0.2em] transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
