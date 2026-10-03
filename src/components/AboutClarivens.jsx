import React from 'react';
import { ShieldCheck, Target, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function AboutClarivens() {
  return (
    <section 
      id="about" 
      className="py-24 bg-white border-b border-surface-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Core Engineering Graphic */}
          <ScrollReveal direction="up" delay={100} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-[#f8faf9] rounded-3xl border border-slate-200/90 p-8 flex items-center justify-center overflow-hidden shadow-sm">
              
              {/* Concentric Architectural Framing */}
              <div className="absolute inset-8 border border-slate-200 rounded-2xl pointer-events-none"></div>
              <div className="absolute inset-16 border border-slate-200/60 rounded-xl pointer-events-none"></div>
              
              {/* Crosshair Lines */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200/80"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200/80"></div>

              {/* Corner Coordinates */}
              <span className="absolute top-4 left-4 font-mono text-[9px] text-slate-400">CORE // LATENCY_ZERO</span>
              <span className="absolute top-4 right-4 font-mono text-[9px] text-slate-400">ENGINE // V2.4</span>
              <span className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-400">SECURITY // STRICT</span>
              <span className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-600 font-bold">STATUS // OPTIMAL</span>

              {/* Central Branded Node */}
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-petrol-900 border-2 border-brand-500/30 flex flex-col items-center justify-center text-white shadow-2xl group hover:scale-105 transition-transform">
                <span className="text-4xl font-extrabold text-brand-400 font-sans">
                  C
                </span>
                <span className="font-mono text-[8px] font-bold text-slate-300 tracking-widest mt-1">
                  CLARIVENS
                </span>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Narrative, Mission & Principles */}
          <ScrollReveal direction="up" delay={200} className="lg:col-span-7 text-left space-y-8">
            
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold tracking-widest text-brand-700 uppercase">
                {siteData.about.eyebrow}
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                TECHNOLOGY WITH <br />
                <span className="text-brand-600">A PRACTICAL PURPOSE.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                {siteData.about.copy}
              </p>
            </div>

            {/* Core Operational Principles */}
            <div className="space-y-3.5 pt-2">
              {siteData.about.principles.map((p) => (
                <div key={p.title} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="font-sans text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              {siteData.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl font-extrabold text-petrol-900">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
