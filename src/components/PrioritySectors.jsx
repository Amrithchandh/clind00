import React from 'react';
import { Building2, Car, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function PrioritySectors({ onOpenContact }) {
  const sectorIcons = [Building2, Car, Truck];

  return (
    <section 
      id="solutions" 
      className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                {siteData.prioritySectors.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                TAILORED SOLUTIONS FOR <br className="hidden sm:inline" />
                <span className="text-brand-600">OPERATIONALLY INTENSIVE SECTORS.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {siteData.prioritySectors.description}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Priority Sectors Grid: 3 Clean Architectural Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.prioritySectors.sectors.map((sector, idx) => {
            const Icon = sectorIcons[idx % sectorIcons.length];

            return (
              <ScrollReveal key={sector.id} direction="up" delay={idx * 80} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-7 flex flex-col justify-between text-left h-full hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Sector 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                      {sector.subtitle}
                    </p>

                    {/* Core Capabilities */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 mb-6">
                      {sector.capabilities.map((cap) => (
                        <div key={cap.title} className="text-xs">
                          <div className="font-semibold text-slate-900 flex items-center gap-1.5 mb-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                            <span>{cap.title}</span>
                          </div>
                          <p className="text-slate-500 pl-5 leading-relaxed text-[11px]">
                            {cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-4">
                      {sector.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <button
                      onClick={() => onOpenContact(sector.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors"
                    >
                      <span>Discuss sector requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
