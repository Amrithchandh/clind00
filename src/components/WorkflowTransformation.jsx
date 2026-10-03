import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Clock, Zap, ArrowDown, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function WorkflowTransformation() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="workflow-transformation" 
      className="py-24 bg-[#f8faf9] border-b border-surface-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <div className="font-mono text-xs font-bold tracking-widest text-brand-700 uppercase">
              {siteData.workflowTransformation.eyebrow}
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              TECHNOLOGY THAT REMOVES <br className="hidden sm:block" />
              <span className="text-brand-600">UNNECESSARY STEPS.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By analyzing where human operators hit friction, we convert disjointed legacy handoffs into a single, cohesive digital experience.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Before / Clarivens / After Architecture */}
        <ScrollReveal direction="up" delay={150}>
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: BEFORE (Friction) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <span className="font-mono text-xs font-bold tracking-widest text-rose-700 uppercase flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  BEFORE (FRAGMENTED STEPS)
                </span>
                <span className="font-mono text-[10px] text-slate-400">High friction</span>
              </div>

              <div className="space-y-4">
                {siteData.workflowTransformation.comparison.map((item, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={item.step}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-rose-300 bg-rose-50/70 shadow-xs'
                          : 'border-slate-200/70 bg-white/70 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                          Legacy Stage
                        </span>
                        <span className="font-mono text-[10px] text-rose-700 font-semibold uppercase bg-rose-100/60 px-2 py-0.5 rounded">
                          Friction
                        </span>
                      </div>
                      <div className="font-sans text-sm font-bold text-slate-800">
                        {item.before}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.beforeDetail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center Column: CLARIVENS INTERVENTION */}
            <div className="lg:col-span-2 bg-petrol-900 text-white p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none"></div>

              <div className="relative z-10 font-mono text-[11px] tracking-wider text-brand-300 uppercase font-semibold">
                PIPELINE
              </div>

              <div className="relative z-10 py-6 my-auto">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-petrol-800 border-2 border-brand-500/40 flex items-center justify-center font-bold text-2xl text-brand-400 shadow-xl group">
                  C
                </div>
                <div className="font-mono text-[10px] tracking-widest text-brand-400 font-bold mt-3">
                  CLARIVENS
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  CORE ENGINE
                </div>
              </div>

              <div className="relative z-10 font-mono text-[11px] tracking-wider text-brand-300 uppercase font-semibold">
                ONE FLOW
              </div>
            </div>

            {/* Right Column: AFTER (Simpler Workflow) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-emerald-50/30 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-200/60">
                <span className="font-mono text-xs font-bold tracking-widest text-emerald-800 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  AFTER (CLARIVENS UNIFIED FLOW)
                </span>
                <span className="font-mono text-[10px] text-emerald-700 font-semibold">Zero friction</span>
              </div>

              <div className="space-y-4">
                {siteData.workflowTransformation.comparison.map((item, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={item.before}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-emerald-400 bg-emerald-50/90 shadow-xs ring-1 ring-emerald-300'
                          : 'border-emerald-100 bg-white hover:border-emerald-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-wider font-semibold">
                          Clarivens Flow
                        </span>
                        <span className="font-mono text-[10px] text-emerald-700 font-semibold uppercase bg-emerald-100/60 px-2 py-0.5 rounded">
                          Continuous
                        </span>
                      </div>
                      <div className="font-sans text-sm font-bold text-slate-900">
                        {item.after}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {item.afterDetail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 px-8">
            <span>HOVER ANY STAGE TO CROSS-REFERENCE IMPACT</span>
            <span className="text-emerald-700 font-semibold">65% AVERAGE TURNAROUND ACCELERATION</span>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
