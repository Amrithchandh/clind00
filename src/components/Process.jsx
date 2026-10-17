import React, { useState } from 'react';
import { Search, Layout, Code2, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function Process() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const phaseIcons = [Search, Layout, Code2, Rocket];

  return (
    <section 
      id="process" 
      className="py-14 sm:py-16 lg:py-20 bg-[#0d2226] text-white relative overflow-hidden border-b border-petrol-800 font-sans"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none"></div>

      <div className="relative site-container">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="font-sans text-xs font-semibold tracking-wider text-brand-400 uppercase">
                {siteData.process.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                A STRUCTURED ROADMAP FROM <br className="hidden sm:inline" />
                <span className="text-brand-400">SCOPING TO HANDOVER.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                {siteData.process.description}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Step Interactive Engagement Grid */}
        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {siteData.process.phases.map((phase, idx) => {
              const Icon = phaseIcons[idx];
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
                      <span className="font-sans text-xs font-bold text-brand-400 uppercase tracking-wider">
                        Phase {phase.step}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-brand-500 text-petrol-950' : 'bg-petrol-900 text-brand-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                      {phase.title}
                    </h3>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                      {phase.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-petrol-800 space-y-2">
                    <div className="font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {phase.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-brand-200 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Accountability & Guarantee Banner */}
        <ScrollReveal direction="up" delay={250}>
          <div className="p-6 rounded-2xl bg-petrol-800/50 border border-petrol-700/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-left font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-bold text-white block">Strict Code Sovereignty Guarantee</span>
                <span className="text-slate-300 font-sans">Bi-weekly sprint reviews, complete IP transfer, and documented deployment upon completion.</span>
              </div>
            </div>
            <span className="text-brand-300 font-bold whitespace-nowrap uppercase tracking-wider">100% Client Intellectual Property</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
