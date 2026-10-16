import React, { useState } from 'react';
import { Search, Code2, Sparkles, FileCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const icons = [Search, Code2, Sparkles];

  return (
    <section 
      id="approach" 
      className="py-14 sm:py-16 lg:py-20 bg-[#0d2226] text-white relative overflow-hidden border-b border-petrol-800"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none"></div>

      <div className="relative site-container">
        
        {/* Section Header: Proportional 12-Column Grid */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-400 uppercase">
                {siteData.approach.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                HOW WE DESIGN, BUILD, <br className="hidden sm:inline" />
                <span className="text-brand-400">AND DEPLOY CUSTOM SOFTWARE.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We engineer custom operational web portals, ERP sync layers, and automated data pipelines. Every project follows a disciplined milestone roadmap from schema modeling to production launch.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Milestone Cards */}
        <ScrollReveal direction="up" delay={150}>
          <div className="relative mb-8 sm:mb-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {siteData.approach.pillars.map((pillar, index) => {
                const Icon = icons[index];
                const isActive = activeStep === index;

                return (
                  <div
                    key={pillar.title}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer rounded-2xl p-7 border transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-petrol-800/90 border-brand-400 shadow-xl ring-1 ring-brand-400/40 translate-y-[-2px]'
                        : 'bg-petrol-950/60 border-petrol-800/80 hover:bg-petrol-800/40 hover:border-petrol-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-xs font-bold text-brand-300 tracking-wider uppercase">
                        Phase 0{index + 1}
                      </span>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-brand-500 text-petrol-950 font-bold' : 'bg-petrol-900 text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-200 font-medium mb-3 leading-snug">
                      {pillar.description}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {pillar.details}
                    </p>

                    <div className="pt-4 border-t border-petrol-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Deliverable:</span>
                      <span className="text-brand-300 font-semibold">{pillar.deliverable}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Client Guarantee */}
        <ScrollReveal direction="up" delay={250}>
          <div className="rounded-xl bg-petrol-800/50 border border-petrol-700/60 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-9 h-9 rounded-lg bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-400 flex-shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">Full Source Code Ownership</div>
                <div className="text-xs text-slate-300">You retain 100% of the repository, intellectual property, and deployment configurations upon project delivery.</div>
              </div>
            </div>
            <div className="text-xs font-semibold text-brand-300 whitespace-nowrap">
              Bi-weekly Working Demos • Zero Lock-in
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
