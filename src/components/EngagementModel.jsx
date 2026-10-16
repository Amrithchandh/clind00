import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function EngagementModel() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <section 
      id="how-we-work" 
      className="py-14 sm:py-16 lg:py-20 bg-[#0d2226] text-white relative overflow-hidden border-b border-petrol-800"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none"></div>

      <div className="relative site-container">
        
        {/* Section Header: Proportional 12-Column Grid */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-400 uppercase">
                {siteData.howWeWork.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                A STRUCTURED ROADMAP FROM <br className="hidden sm:inline" />
                <span className="text-brand-400">DISCOVERY TO HANDOVER.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Predictable systems delivery requires disciplined engineering. We manage the entire lifecycle from requirements discovery and database architecture to production launch and team enablement.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Step Interactive Engagement Grid */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {siteData.howWeWork.phases.map((phase, idx) => {
            const isSelected = selectedPhase === idx;

            return (
              <div
                key={phase.title}
                onClick={() => setSelectedPhase(idx)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-petrol-800 border-brand-400 shadow-xl ring-1 ring-brand-400/40 translate-y-[-2px]'
                    : 'bg-petrol-950/70 border-petrol-800/80 hover:bg-petrol-800/40 hover:border-petrol-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-bold text-brand-400 uppercase tracking-wider">
                      Stage 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {phase.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-petrol-800 space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {phase.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-brand-200">
                      <span className="text-brand-400 font-bold">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Accountability Banner */}
        <ScrollReveal direction="up" delay={250}>
          <div className="p-5 rounded-xl bg-petrol-800/50 border border-petrol-700/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Transparent sprint reviews and progress demos every two weeks</span>
            </div>
            <span className="text-brand-300 font-bold">100% Intellectual Property Transferred</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
