import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: PortfolioData;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const email = data?.email || 'sanaktekwade135@gmail.com';
  const phone = data?.phone || '9096117716';
  const instagram = data?.instagram || 'sanaktekawade';
  const linkedin = data?.linkedin || 'https://www.linkedin.com/in/sanak-tekawade-36491b397?utm_source=share_via&utm_content=profile&utm_medium=member_android';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-black border border-white w-full max-w-lg p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="py-12 text-center flex flex-col items-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Transmission Received</h3>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest">
              Sanak Tekawade ({email}) has received your dispatch.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-white/15">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[1px] bg-white"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/70">Contact & Direct Channels</span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Initiate Dialogue</h3>
            </div>

            {/* Direct Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs font-mono">
              <a
                href={`tel:${phone}`}
                className="p-2.5 bg-zinc-950 border border-white/20 hover:border-white flex items-center gap-2.5 text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">+91 {phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="p-2.5 bg-zinc-950 border border-white/20 hover:border-white flex items-center gap-2.5 text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff5e3a] shrink-0" />
                <span className="truncate">{email}</span>
              </a>

              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-950 border border-white/20 hover:border-white flex items-center gap-2.5 text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span className="truncate">@{instagram}</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-950 border border-white/20 hover:border-white flex items-center gap-2.5 text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">LinkedIn Profile</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1.5 block">Your Name / Organization</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="E.G. PROF. SHARMA / TECH RECRUITER"
                  className="w-full bg-black border border-white/30 px-4 py-2.5 text-xs uppercase tracking-wider text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1.5 block">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="RECRUITER@COMPANY.COM"
                  className="w-full bg-black border border-white/30 px-4 py-2.5 text-xs uppercase tracking-wider text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1.5 block">Project Scope / Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="DISCUSS OPPORTUNITY, HACKATHON COLLABORATION, OR CODE INQUIRY..."
                  className="w-full bg-black border border-white/30 px-4 py-2.5 text-xs uppercase tracking-wider text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full py-3.5 border border-white bg-white hover:bg-black hover:text-white text-black font-medium text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <span>Send Dispatch Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
