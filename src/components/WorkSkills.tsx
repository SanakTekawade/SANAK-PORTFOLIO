import React, { useState } from 'react';
import { PortfolioData, SkillItem } from '../data/portfolioData';
import { Sparkles, Terminal, Database, Code2, Wrench } from 'lucide-react';

interface WorkSkillsProps {
  skills: PortfolioData['skills'];
}

type SkillCategory = 'All' | 'Languages' | 'AI / Data' | 'Development' | 'Tools';

export const WorkSkills: React.FC<WorkSkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const categories: { label: SkillCategory; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Languages', icon: <Terminal className="w-3.5 h-3.5" /> },
    { label: 'AI / Data', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'Development', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const renderSkillIcon = (icon: string) => {
    switch (icon) {
      case 'python':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-yellow-400 font-mono text-sm border border-yellow-500/40 bg-yellow-500/10">
            Py
          </div>
        );
      case 'cpp':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-blue-400 font-mono text-xs border border-blue-500/40 bg-blue-500/10">
            C++
          </div>
        );
      case 'java':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-orange-400 font-mono text-xs border border-orange-500/40 bg-orange-500/10">
            ☕
          </div>
        );
      case 'javascript':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-amber-300 font-mono text-xs border border-amber-400/40 bg-amber-400/10">
            JS
          </div>
        );
      case 'ml':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-emerald-400 font-mono text-xs border border-emerald-500/40 bg-emerald-500/10">
            ML
          </div>
        );
      case 'datascience':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-cyan-400 font-mono text-xs border border-cyan-500/40 bg-cyan-500/10">
            DS
          </div>
        );
      case 'genai':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-purple-400 font-mono text-xs border border-purple-500/40 bg-purple-500/10">
            AI✦
          </div>
        );
      case 'api':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-indigo-400 font-mono text-xs border border-indigo-500/40 bg-indigo-500/10">
            API
          </div>
        );
      case 'html':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-orange-500 font-mono text-xs border border-orange-500/40 bg-orange-500/10">
            &lt;/&gt;
          </div>
        );
      case 'react':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-cyan-400 font-mono text-xs border border-cyan-400/40 bg-cyan-400/10">
            ⚛
          </div>
        );
      case 'android':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-green-400 font-mono text-xs border border-green-500/40 bg-green-500/10">
            🤖
          </div>
        );
      case 'firebase':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-amber-500 font-mono text-xs border border-amber-500/40 bg-amber-500/10">
            🔥
          </div>
        );
      case 'git':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-red-400 font-mono text-xs border border-red-500/40 bg-red-500/10">
            Git
          </div>
        );
      case 'vscode':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-blue-400 font-mono text-xs border border-blue-500/40 bg-blue-500/10">
            VS
          </div>
        );
      case 'figma':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-pink-400 font-mono text-xs border border-pink-500/40 bg-pink-500/10">
            Fg
          </div>
        );
      case 'androidstudio':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-emerald-400 font-mono text-xs border border-emerald-500/40 bg-emerald-500/10">
            AS
          </div>
        );
      case 'unity':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-white font-mono text-xs border border-white/40 bg-white/10">
            U3D
          </div>
        );
      case 'unreal':
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-purple-300 font-mono text-xs border border-purple-400/40 bg-purple-400/10">
            UE5
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center font-bold text-white font-mono text-xs border border-white/40">
            ✦
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-white"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70">
                Technical Calibrations // 🧠
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans uppercase">
              Skills & <span className="text-white">Expertise</span>
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm max-w-md uppercase tracking-wider leading-relaxed">
            Multi-disciplinary technical proficiencies spanning computational intelligence, data frameworks, full-stack systems, and game engines.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto gap-2.5 mb-10 pb-4 border-b border-white/10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center shrink-0 gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-[0.18em] font-mono transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-white text-black font-bold border border-white'
                    : 'bg-black/30 backdrop-blur-xs text-white/80 border border-white/20 hover:border-white hover:text-white'
                  }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`text-[10px] ml-1 px-1.5 py-0.5 rounded-none font-mono ${isActive ? 'bg-black text-white' : 'bg-white/10 text-white/60'}`}>
                  {cat.label === 'All' ? skills.length : skills.filter(s => s.category === cat.label).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="border border-white/20 hover:border-white bg-black/20 backdrop-blur-sm p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* Top Row: Category Tag & Icon */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    {skill.category}
                  </span>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {renderSkillIcon(skill.icon)}
                  </div>
                </div>

                <h3 className="text-white font-bold text-base tracking-wide uppercase mb-1">
                  {skill.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5e3a]">
                    [{skill.level}]
                  </span>
                </div>

                {skill.description && (
                  <p className="text-white/60 text-xs font-light leading-relaxed mb-4">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Linear Calibration Bar */}
              <div className="w-full pt-3 border-t border-white/10">
                <div className="flex justify-between text-xs font-mono mb-1.5 text-white/80">
                  <span className="uppercase tracking-widest text-[9px] text-white/40">PROFICIENCY</span>
                  <span className="font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-[2px] bg-white/15 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-white group-hover:bg-[#ff5e3a] transition-all duration-700"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
