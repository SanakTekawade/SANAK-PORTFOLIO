import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface MyServicesProps {
  services: PortfolioData['services'];
  onSelectService: (service: PortfolioData['services'][0]) => void;
}

export const MyServices: React.FC<MyServicesProps> = ({
  services,
  onSelectService,
}) => {
  const [, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading with Editorial Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-white"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70">
                Offerings // Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans uppercase">
              My <span className="text-white">Services</span>
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm max-w-md uppercase tracking-wider leading-relaxed">
            End-to-end digital craft tailored to elevate modern brands through refined aesthetics and architectural rigor.
          </p>
        </div>

        {/* 3 Services Cards Grid (Editorial Frame) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectService(service)}
              className="border border-white/20 hover:border-white bg-black transition-all duration-300 group cursor-pointer flex flex-col justify-between p-6 relative hover:-translate-y-1"
            >
              {/* Card Header Top Metadata */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4 pb-3 border-b border-white/10">
                  <span>SECTION A-0{idx + 1}</span>
                  <span>[ ARCHIVE ]</span>
                </div>

                <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight uppercase group-hover:text-[#ff5e3a] transition-colors mb-4">
                  {service.title}
                </h3>
              </div>

              {/* Mockup Visual with Editorial Border */}
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden border border-white/15 my-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Index Overlay */}
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 border border-white/20 text-[10px] font-mono text-white">
                  0{idx + 1}
                </div>

                {/* Bottom Right Floating Action Arrow Button */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="w-9 h-9 border border-white bg-black group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Bottom detail snippet */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
                <span>{service.tags.join(' • ')}</span>
                <span className="text-white font-medium group-hover:translate-x-1 transition-transform">
                  EXPLORE →
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button: Editorial Style */}
        <div className="flex justify-center">
          <button
            onClick={() => onSelectService(services[0])}
            className="inline-flex items-center gap-3 border border-white hover:bg-white hover:text-black text-white font-medium text-xs uppercase tracking-[0.25em] px-10 py-4 transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Disciplines</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

