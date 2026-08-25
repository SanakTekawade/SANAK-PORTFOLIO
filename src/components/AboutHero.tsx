import React from 'react';
import { Download, Mail, ArrowDown, Sparkles, GraduationCap, Cpu, Code2, Target, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutHeroProps {
  data: PortfolioData;
  onOpenContact: () => void;
  onOpenResume: () => void;
  onUpdateAvatar?: (url: string) => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  data,
  onOpenContact,
  onOpenResume,
  onUpdateAvatar,
}) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateAvatar) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && onUpdateAvatar) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getAboutIcon = (icon: string) => {
    switch (icon) {
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-white" />;
      case 'target':
        return <Target className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-transparent relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HERO SECTION: FIRST IMPRESSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          
          {/* Left Column: Stylized Circular Portrait with Coral Accent Animations */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[360px] md:w-[400px] aspect-square flex items-center justify-center">
              
              {/* Decorative Accent Circle - Top Left */}
              <div 
                className="absolute top-2 left-2 sm:top-4 sm:left-4 w-20 sm:w-28 md:w-32 aspect-square rounded-full bg-[#ff5e3a] -z-0 shadow-lg shadow-[#ff5e3a]/30 animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              {/* Decorative Accent Circle - Bottom Right */}
              <div 
                className="absolute bottom-6 right-2 sm:bottom-10 sm:right-4 w-12 sm:w-16 md:w-20 aspect-square rounded-full bg-[#f97316] z-20 shadow-md shadow-orange-500/30"
              />

              {/* Main Glowing Ring Container */}
              <div className="relative z-10 w-[240px] sm:w-[310px] md:w-[350px] aspect-square rounded-full p-[5px] sm:p-[6px] bg-gradient-to-tr from-[#ff5e3a] via-[#ff7854] to-[#ff5e3a] shadow-[0_0_50px_rgba(255,94,58,0.35)]">
                
                {/* Inner Image Mask Circle */}
                <label
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`w-full h-full rounded-full overflow-hidden bg-zinc-900 border-4 border-black relative group block cursor-pointer transition-all duration-300 ${
                    isDragging ? 'ring-4 ring-white scale-105' : ''
                  }`}
                >
                  <img
                    src={data.avatarUrl}
                    alt={data.name}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />

                  {/* Hover indicator overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-200 text-center p-3">
                    <Sparkles className="w-5 h-5 text-white mb-1" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">Change Photo</span>
                    <span className="text-[8px] font-mono text-white/70 uppercase">Click, Drop or Ctrl+V</span>
                  </div>

                  {onUpdateAvatar && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      title="Upload custom photo"
                    />
                  )}
                </label>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Typography, Intro & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Top Micro-Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-white/5 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/90">
                {data.year} · {data.branch}
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans mb-3">
              Hi, I'm <span className="text-white underline decoration-1 underline-offset-8 decoration-white/40">{data.name}</span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 uppercase tracking-[0.15em] mb-4">
              {data.tagline}
            </p>

            {/* University Tag */}
            <p className="text-xs sm:text-sm font-mono text-white/60 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white shrink-0" />
              <span>{data.college}</span>
            </p>

            {/* Hero Core Pitch */}
            <div className="border-l-2 border-white pl-4 py-1 mb-8">
              <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed">
                "{data.heroIntro}"
              </p>
            </div>

            {/* 3 Primary Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 sm:px-7 py-3 sm:py-3.5 border border-white bg-white hover:bg-black hover:text-white text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/10"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 sm:px-7 py-3 sm:py-3.5 border border-white/40 hover:border-white text-white font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-6 sm:px-7 py-3 sm:py-3.5 border border-white/20 hover:border-white/80 hover:bg-white/5 text-white/90 font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </button>
            </div>

          </div>

        </div>

        {/* SECTION 2: ABOUT ME (4 SHORT STRUCTURED CARDS) */}
        <div id="about-details" className="pt-12 border-t border-white/15">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[1px] bg-white"></div>
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70">
                  Engineering Profile // Overview
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                About <span className="text-white">Me</span>
              </h2>
            </div>
            <p className="text-white/60 text-xs sm:text-sm max-w-md uppercase tracking-wider leading-relaxed">
              Synthesizing deep computational rigor in artificial intelligence with scalable, user-centric software architecture.
            </p>
          </div>

          {/* 4 Clean Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.aboutCards.map((card, idx) => (
              <div
                key={card.id}
                className="border border-white/20 hover:border-white bg-black/20 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-white/40 group-hover:text-white">
                      0{idx + 1}
                    </span>
                    <div className="p-2 border border-white/20 bg-white/5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
                      {getAboutIcon(card.icon)}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base tracking-tight uppercase mb-1">
                    {card.title}
                  </h3>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#ff5e3a] mb-3">
                    {card.subtitle}
                  </span>

                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/40">
                  <span>DYPCOEI PUNE</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">DETAILS →</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
