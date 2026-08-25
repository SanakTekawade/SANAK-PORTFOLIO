import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, Clock, Github, Linkedin, Instagram, Twitter, GraduationCap } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
  onSubscribe: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubscribe(email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-black/40 backdrop-blur-[3px] border-t border-white/15 text-white/60 pt-20 pb-12 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#about" className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white bg-black flex items-center justify-center text-white font-bold text-xs font-mono">
                ST
              </div>
              <span className="text-lg font-bold text-white tracking-widest uppercase">
                SANAK TEKAWADE
              </span>
            </a>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              AI & Data Science Engineering Student at {data.college}. Building AI-powered applications, responsive websites, and interactive 3D digital experiences.
            </p>
            <div className="flex gap-8 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-white/40">Academic Base</span>
                <span className="text-xs font-medium text-white uppercase">{data.collegeShort}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-white/40">Status</span>
                <span className="text-xs font-medium text-emerald-400 uppercase">OPEN FOR COLLABORATIONS</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Index */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-1">
              Index
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-wider">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="text-white/30 group-hover:text-white">/</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Verified Contact Coordinates */}
          <div className="lg:col-span-3 flex flex-col gap-3 text-xs">
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-1">
              Direct Coordinates
            </h4>
            <ul className="flex flex-col gap-3 text-white/70">
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`mailto:${data.email}`} className="hover:text-white transition-colors break-all">
                  {data.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={`tel:${data.phone}`} className="hover:text-white transition-colors">
                  +91 {data.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @{data.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <span>{data.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <GraduationCap className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <span>{data.college}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Project Connect */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-1">
              Social Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/20 hover:border-white bg-black/30 backdrop-blur-sm flex items-center justify-between text-xs text-white uppercase tracking-wider transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#ff5e3a]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>

              <a
                href={data.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/20 hover:border-white bg-black/30 backdrop-blur-sm flex items-center justify-between text-xs text-white uppercase tracking-wider transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (@{data.instagram})</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>

              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/20 hover:border-white bg-black/30 backdrop-blur-sm flex items-center justify-between text-xs text-white uppercase tracking-wider transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} SANAK TEKAWADE · ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-6">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
