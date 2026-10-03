import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function EngagementModel() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <section 
      id="how-we-work" 
      className="py-24 bg-petrol-900 text-white relative overflow-hidden border-b border-petrol-800"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <div className="font-mono text-xs font-bold tracking-widest text-brand-400 uppercase">
              {siteData.howWeWork.eyebrow}
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A CLEAR, PRACTICAL ENGAGEMENT <br className="hidden sm:block" />
              <span className="text-brand-400">FROM CONTEXT TO CONTINUITY.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Predictable outcomes require structured methodology. We walk alongside your leadership from day one to post-deployment continuity.
            </p>
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
                    <span className="font-mono text-xs font-bold text-brand-400 uppercase tracking-wider">
                      {phase.title}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {phase.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-petrol-800 space-y-2">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">
                    Deliverables:
                  </div>
                  {phase.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-1.5 text-xs text-brand-200">
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
          <div className="p-5 rounded-xl bg-petrol-800/50 border border-petrol-700/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>TRANSPARENT SPRINT REVIEWS & DEMOS EVERY 2 WEEKS</span>
            </div>
            <span className="text-brand-300 font-semibold">100% INTELLECTUAL PROPERTY TRANSFERRED</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
