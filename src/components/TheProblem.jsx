import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import logoMarkImg from '../assets/logo-mark.png';

export default function TheProblem() {
  const [selectedFriction, setSelectedFriction] = useState(siteData.theProblem.frictionPoints[0].id);

  const activePoint = siteData.theProblem.frictionPoints.find(p => p.id === selectedFriction) || siteData.theProblem.frictionPoints[0];

  return (
    <section 
      id="solutions" 
      className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Header: Proportional 12-Column Grid */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                {siteData.theProblem.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                SOFTWARE SHOULD ELIMINATE REPETITION, <br className="hidden sm:inline" />
                <span className="text-brand-600">NOT MULTIPLY IT.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {siteData.theProblem.description}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture Comparison Panel */}
        <ScrollReveal direction="up" delay={150}>
          <div className="bg-[#fafbf9] rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden text-left">
          
          {/* Header Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-100/70 text-xs font-bold tracking-wide text-slate-700 uppercase px-6 py-3.5">
            <div className="md:col-span-5">Common Operational Bottlenecks</div>
            <div className="md:col-span-3 text-center hidden md:block">Clarivens Solution</div>
            <div className="md:col-span-4 text-right hidden md:block">Delivered System Outcome</div>
          </div>

          {/* Three-Column Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 lg:p-10 gap-8 items-stretch">
            
            {/* Column 1: Friction Nodes */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
              <div className="text-xs text-slate-500 font-semibold mb-1">
                Select an operational bottleneck to review our technical solution:
              </div>

              {siteData.theProblem.frictionPoints.map((point) => {
                const isSelected = point.id === selectedFriction;
                return (
                  <button
                    key={point.id}
                    onClick={() => setSelectedFriction(point.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
                      isSelected
                        ? 'bg-white border-brand-500 shadow-sm ring-1 ring-brand-500/20 translate-x-1'
                        : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-sm font-bold text-slate-900">
                        {point.title}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {point.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Column 2: Central Solution Architecture */}
            <div className="lg:col-span-3 flex flex-col justify-center items-center relative py-4 lg:py-0">
              
              <div className="w-full bg-petrol-900 text-white rounded-2xl p-6 border border-petrol-700 shadow-md text-left">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs mb-4">
                  <img src={logoMarkImg} alt="Clarivens Logo" className="w-8 h-8 object-contain" />
                </div>

                <div className="font-display text-base font-bold text-white">
                  Targeted Engineering
                </div>
                <div className="text-xs text-brand-300 font-medium mt-0.5">
                  Custom Software Delivery
                </div>

                <div className="mt-4 pt-4 border-t border-petrol-800 space-y-2">
                  <div className="text-xs text-slate-300 font-semibold">
                    Addressing: {activePoint.title}
                  </div>
                  <div className="text-xs text-slate-200 leading-relaxed bg-petrol-800/80 p-3.5 rounded-xl border border-petrol-700">
                    We replace manual handoffs with structured digital workflows, role-based forms, and automated background sync.
                  </div>
                </div>
              </div>

            </div>

            {/* Column 3: Outcomes */}
            <div className="lg:col-span-4 space-y-3 flex flex-col justify-center">
              <div className="text-xs text-slate-700 font-bold uppercase tracking-wide mb-1">
                Delivered Architectural Results:
              </div>

              <div className="space-y-2.5">
                {siteData.theProblem.outcomes.map((outcome) => (
                  <div
                    key={outcome.id}
                    className="p-3.5 rounded-xl border border-emerald-200/80 bg-white shadow-xs flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-xs font-bold text-slate-900">
                        {outcome.title}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {outcome.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Footnote Bar */}
          <div className="px-8 py-3.5 bg-slate-100/90 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium">
            <span>Guaranteed deliverables: Tested source code, relational schemas, and administrative documentation</span>
            <span className="text-brand-700 font-semibold">100% Client Intellectual Property</span>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
