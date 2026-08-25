import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Terminal, Sparkles, FolderGit2, User, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection = 'about' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#footer', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-[3px] border-b border-white/15 px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-none border border-white bg-black flex items-center justify-center text-white font-bold text-xs tracking-tighter group-hover:bg-white group-hover:text-black transition-colors font-mono">
            ST
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-white tracking-widest uppercase font-sans">
              SANAK TEKAWADE
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 hidden sm:block">
              AI & Data Science · DYPCOEI Pune
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase font-medium tracking-[0.18em]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Quick Explorer Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              onBlur={() => setTimeout(() => setPagesDropdownOpen(false), 200)}
              className="flex items-center gap-1.5 text-white/70 hover:text-white uppercase tracking-[0.18em] transition-colors focus:outline-none cursor-pointer"
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-white' : ''}`} />
            </button>

            {pagesDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-black border border-white/20 shadow-2xl py-2 z-50 text-xs uppercase tracking-widest animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#projects"
                  onClick={() => scrollTo('#projects')}
                  className="flex items-center gap-2 px-4 py-2.5 text-white/80 hover:bg-white hover:text-black transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Featured Projects</span>
                </a>
                <a
                  href="#about-details"
                  onClick={() => scrollTo('#about-details')}
                  className="flex items-center gap-2 px-4 py-2.5 text-white/80 hover:bg-white hover:text-black transition-colors border-t border-white/10"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>About Bio</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 border border-white bg-white hover:bg-black hover:text-white text-black font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white border border-white/20 hover:border-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/15 flex flex-col gap-3 text-xs uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="py-2 px-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 border border-white bg-white text-black font-semibold uppercase tracking-widest text-center cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
