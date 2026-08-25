import React from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ServiceModalProps {
  service: PortfolioData['services'][0] | null;
  onClose: () => void;
  onBook: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-black border border-white w-full max-w-xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white border border-white/20 hover:border-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 pb-4 border-b border-white/15">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[1px] bg-white"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/70">Specification // Archive</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">{service.title}</h3>
        </div>

        <div className="border border-white/20 overflow-hidden mb-6 bg-zinc-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover grayscale opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
          {service.description}
        </p>

        <div className="p-5 border border-white/20 bg-black mb-8">
          <p className="text-xs font-bold uppercase text-white tracking-widest mb-3">Service Deliverables & Protocol:</p>
          <div className="flex flex-col gap-2.5 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Full custom responsive design & prototyping</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Tailored visual assets & typography pairing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Performance and accessibility audit</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBook();
            }}
            className="flex-1 py-4 border border-white bg-white hover:bg-black hover:text-white text-black font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span>Commission Discipline</span>
            <ArrowUpRight className="w-4 h-4" />
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

