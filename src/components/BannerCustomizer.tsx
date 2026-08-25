import React, { useState } from 'react';
import { Sliders, RotateCcw, Check, Sparkles, X } from 'lucide-react';
import { PortfolioData, initialPortfolioData } from '../data/portfolioData';

interface BannerCustomizerProps {
  data: PortfolioData;
  onChange: (newData: PortfolioData) => void;
}

export const BannerCustomizer: React.FC<BannerCustomizerProps> = ({ data, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resetDefaults = () => {
    onChange(initialPortfolioData);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 border border-white bg-black hover:bg-white hover:text-black text-white p-3.5 shadow-2xl flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Customize Profile Info & Photo"
      >
        <Sliders className="w-4 h-4" />
        <span className="hidden sm:inline">Edit Profile</span>
      </button>

      {/* Slide-over panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-black border-l border-white/20 h-full p-8 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <h3 className="font-bold text-white text-sm uppercase tracking-widest">Customize Profile</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white/50 hover:text-white border border-white/20 hover:border-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs uppercase">
                {/* Avatar Portrait Photo Upload & URL */}
                <div>
                  <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Portrait Photo / Asset</label>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 border border-white/40 overflow-hidden shrink-0 bg-zinc-900">
                      <img
                        src={data.avatarUrl}
                        alt="Preview"
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <label className="flex-1 cursor-pointer py-2 px-3 border border-white/40 hover:border-white hover:bg-white hover:text-black text-white text-[10px] tracking-widest text-center transition-colors">
                      <span>Upload New Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              if (event.target?.result) {
                                onChange({ ...data, avatarUrl: event.target.result as string });
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                  <input
                    type="text"
                    value={data.avatarUrl}
                    onChange={(e) => onChange({ ...data, avatarUrl: e.target.value })}
                    placeholder="IMAGE URL OR BASE64"
                    className="w-full bg-black border border-white/30 px-3 py-2 text-white text-[11px] font-mono tracking-wider focus:outline-none focus:border-white truncate"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Full Identity</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => onChange({ ...data, name: e.target.value })}
                    className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Primary Headline</label>
                  <textarea
                    rows={2}
                    value={data.headline}
                    onChange={(e) => onChange({ ...data, headline: e.target.value })}
                    className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Telephone / Phone</label>
                    <input
                      type="text"
                      value={data.phone}
                      onChange={(e) => onChange({ ...data, phone: e.target.value })}
                      className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Dispatch Email</label>
                    <input
                      type="text"
                      value={data.email}
                      onChange={(e) => onChange({ ...data, email: e.target.value })}
                      className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">Instagram Username</label>
                    <input
                      type="text"
                      value={data.instagram}
                      onChange={(e) => onChange({
                        ...data,
                        instagram: e.target.value,
                        instagramUrl: `https://www.instagram.com/${e.target.value}`
                      })}
                      className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">GitHub Handle</label>
                    <input
                      type="text"
                      value={data.github}
                      onChange={(e) => onChange({ ...data, github: e.target.value })}
                      className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.25em] text-white/50 mb-1.5 block">LinkedIn URL</label>
                  <input
                    type="text"
                    value={data.linkedin}
                    onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
                    className="w-full bg-black border border-white/30 px-3 py-2 text-white text-xs tracking-wider focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex gap-3 mt-6">
              <button
                onClick={resetDefaults}
                className="flex-1 py-3 px-4 border border-white/30 hover:border-white text-white text-[11px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 px-4 border border-white bg-white hover:bg-black hover:text-white text-black text-[11px] uppercase tracking-widest font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Confirm</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
