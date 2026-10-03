import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ChevronRight, Layers, AlertCircle, RefreshCw, Cpu, Database } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function TheProblem() {
  const [selectedFriction, setSelectedFriction] = useState(siteData.theProblem.frictionPoints[0].id);

  const activePoint = siteData.theProblem.frictionPoints.find(p => p.id === selectedFriction) || siteData.theProblem.frictionPoints[0];

  return (
    <section 
      id="solutions" 
      className="py-24 bg-white border-b border-surface-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with bidirectional scroll reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="font-mono text-xs font-bold tracking-widest text-brand-700 uppercase">
                {siteData.theProblem.eyebrow}
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                TECHNOLOGY SHOULD SIMPLIFY WORK, <br className="hidden sm:block" />
                <span className="text-brand-600">NOT ADD COMPLEXITY.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {siteData.theProblem.description}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Architecture Flow Diagram with bidirectional scroll reveal */}
        <ScrollReveal direction="up" delay={150}>
          <div className="bg-[#f8faf9] rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Architecture Canvas Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-100/70 text-[11px] font-mono font-semibold tracking-wider text-slate-600 uppercase px-6 py-3">
            <div className="md:col-span-4">ORGANIZATIONAL COMPLEXITY (FRICTION)</div>
            <div className="md:col-span-4 text-center hidden md:block">TECHNOLOGY INTERVENTION</div>
            <div className="md:col-span-4 text-right hidden md:block">SIMPLER WORKFLOW (OUTCOME)</div>
          </div>

          {/* Interactive Three-Column Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 lg:p-10 gap-8 items-stretch">
            
            {/* Column 1: Friction Nodes (Interactive) */}
            <div className="lg:col-span-4 space-y-3.5 flex flex-col justify-center">
              <div className="text-xs font-mono text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Select Friction Point to Inspect:
              </div>

              {siteData.theProblem.frictionPoints.map((point) => {
                const isSelected = point.id === selectedFriction;
                return (
                  <button
                    key={point.id}
                    onClick={() => setSelectedFriction(point.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20 translate-x-1'
                        : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        {point.label}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                        isSelected ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {point.delay}
                      </span>
                    </div>
                    <div className="font-sans text-sm font-bold text-slate-900">
                      {point.title}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-normal line-clamp-2">
                      {point.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Column 2: Central Clarivens Intervention Engine */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center relative py-4 lg:py-0">
              
              {/* Desktop connecting lines */}
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-slate-300 via-brand-500 to-emerald-400 -z-0"></div>

              {/* Central Engine Card */}
              <div className="relative z-10 w-full max-w-sm bg-petrol-900 text-white rounded-2xl p-6 border border-petrol-700 shadow-2xl text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-petrol-800 border border-brand-400/30 flex items-center justify-center font-bold text-brand-400 text-lg">
                    C
                  </div>
                  <span className="font-mono text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Purpose-Built
                  </span>
                </div>

                <div className="font-mono text-xs tracking-wider text-brand-400 uppercase font-semibold">
                  CLARIVENS
                </div>
                <div className="font-sans text-base font-bold text-white mt-0.5">
                  Technology applied with purpose
                </div>

                {/* Dynamic Resolution based on Selected Friction */}
                <div className="mt-4 pt-4 border-t border-petrol-800 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Intervention on: {activePoint.title}
                  </div>
                  <div className="text-xs text-brand-200 leading-relaxed bg-petrol-800/80 p-3 rounded-lg border border-petrol-700">
                    Replaces manual handoffs with event-driven data pipes and unified storage.
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Transformation:</span>
                  <span className="text-emerald-400 font-semibold">Instant & Structured</span>
                </div>
              </div>

            </div>

            {/* Column 3: Simpler Workflow Outcome */}
            <div className="lg:col-span-4 space-y-3.5 flex flex-col justify-center">
              <div className="text-xs font-mono text-emerald-800 font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                SIMPLER WORKFLOW (CONNECTED PATH):
              </div>

              <div className="space-y-2.5">
                {siteData.theProblem.outcomes.map((outcome, idx) => (
                  <div
                    key={outcome.id}
                    className="p-3.5 rounded-xl border border-emerald-200/90 bg-white shadow-xs hover:border-emerald-300 transition-all flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                      <Check className="w-3 h-3" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs font-bold text-slate-900">
                          {outcome.title}
                        </span>
                        <span className="font-mono text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded uppercase">
                          {outcome.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {outcome.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-emerald-100/60 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Continuous data pipeline with zero manual duplication</span>
              </div>
            </div>

          </div>

          {/* Bottom Footnote Bar */}
          <div className="px-8 py-3.5 bg-slate-100/90 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Outcome: Connected process • Clear information • Fewer unnecessary steps • Easier operation</span>
            </div>
            <span className="text-slate-400">Operational Baseline Architecture</span>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
