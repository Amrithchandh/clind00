import React, { useState } from 'react';
import { Search, Code2, Sparkles, Check, ArrowRight, Layers, FileCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Search, Code2, Sparkles];

  return (
    <section 
      id="approach" 
      className="py-24 bg-petrol-900 text-white relative overflow-hidden border-b border-petrol-800"
    >
      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="font-mono text-xs font-bold tracking-widest text-brand-400 uppercase">
              {siteData.approach.eyebrow}
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              FROM OPERATIONAL CHALLENGES <br className="hidden sm:block" />
              <span className="text-brand-400">TO PRACTICAL TECHNOLOGY.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
              We don't apply technology for the sake of novelty. We design pragmatic digital systems shaped around the real human operations of your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Progress Line & Timeline Cards */}
        <ScrollReveal direction="up" delay={150}>
          <div className="relative mb-12">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-petrol-800 -z-0">
              <div 
                className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${((activeStep + 1) / siteData.approach.pillars.length) * 100}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {siteData.approach.pillars.map((pillar, index) => {
                const Icon = icons[index];
                const isActive = activeStep === index;

                return (
                  <div
                    key={pillar.title}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer rounded-2xl p-7 border transition-all duration-300 text-left ${
                      isActive
                        ? 'bg-petrol-800/90 border-brand-400 shadow-xl ring-1 ring-brand-400/40 translate-y-[-4px]'
                        : 'bg-petrol-950/60 border-petrol-800/80 hover:bg-petrol-800/40 hover:border-petrol-700'
                    }`}
                  >
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md border ${
                        isActive
                          ? 'bg-brand-500/20 text-brand-300 border-brand-400/30'
                          : 'bg-petrol-900 text-slate-400 border-petrol-700'
                      }`}>
                        {pillar.title.toUpperCase()}
                      </span>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-brand-500 text-petrol-950 font-bold' : 'bg-petrol-900 text-slate-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Headline */}
                    <h3 className="font-sans text-2xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-300/90 font-medium mb-4 leading-normal">
                      {pillar.description}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {pillar.details}
                    </p>

                    {/* Deliverable Badge */}
                    <div className="pt-4 border-t border-petrol-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Deliverable:</span>
                      <span className="text-brand-300 font-semibold">{pillar.deliverable}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Operational Guarantee */}
        <ScrollReveal direction="up" delay={250}>
          <div className="rounded-xl bg-petrol-800/60 border border-petrol-700/60 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-400 flex-shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">The Clarivens Implementation Pledge</div>
                <div className="text-xs text-slate-300">Software built around your exact operations, zero unnecessary bloated features.</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-300">
              <span>METHODOLOGY: AGILE & PRAGMATIC</span>
              <span className="text-slate-500">•</span>
              <span>NO UNWANTED VENDOR DEPENDENCY</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
