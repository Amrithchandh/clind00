import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import logoMarkImg from '../assets/logo-mark.png';

export default function WorkflowTransformation() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="workflow-transformation" 
      className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Header: Proportional 12-Column Grid */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                {siteData.workflowTransformation.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                REPLACING FRAGMENTED TOOLS <br className="hidden sm:inline" />
                <span className="text-brand-600">WITH A UNIFIED APPLICATION.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We analyze where your teams lose time across legacy documents, spreadsheets, and manual handoffs, replacing them with a single custom-engineered web portal.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Modernization Comparison */}
        <ScrollReveal direction="up" delay={150}>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Traditional Approach */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <span className="font-display text-xs font-bold tracking-wide text-slate-800 uppercase flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500" />
                  Legacy Fragmented Workflow
                </span>
                <span className="text-xs text-slate-500 font-medium">Traditional Setup</span>
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
                          ? 'border-slate-400 bg-white shadow-xs ring-1 ring-slate-300'
                          : 'border-slate-200/80 bg-white/70 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                          Stage 0{item.step}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Manual Handoff
                        </span>
                      </div>
                      <div className="font-display text-sm font-bold text-slate-800">
                        {item.before}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.beforeDetail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center Column: Engineering Transformation */}
            <div className="lg:col-span-2 bg-petrol-900 text-white p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden text-center">
              <div className="relative z-10 font-display text-xs tracking-wider text-brand-300 uppercase font-bold">
                ENGINEERING
              </div>

              <div className="relative z-10 py-6 my-auto">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md">
                  <img src={logoMarkImg} alt="Clarivens Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="font-display text-xs tracking-wider text-brand-400 font-bold mt-3">
                  CLARIVENS
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  Custom Platform
                </div>
              </div>

              <div className="relative z-10 font-display text-xs tracking-wider text-brand-300 uppercase font-bold">
                UNIFIED
              </div>
            </div>

            {/* Right Column: Delivered Modern Flow */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-emerald-50/20 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-200/60">
                <span className="font-display text-xs font-bold tracking-wide text-emerald-900 uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Clarivens Modernized Flow
                </span>
                <span className="text-xs text-emerald-700 font-semibold">Custom Web Portal</span>
              </div>

              <div className="space-y-4">
                {siteData.workflowTransformation.comparison.map((item, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={item.after}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-emerald-400 bg-white shadow-xs ring-1 ring-emerald-300'
                          : 'border-emerald-100 bg-white hover:border-emerald-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-emerald-700 uppercase tracking-wider font-bold">
                          Custom Solution
                        </span>
                        <span className="text-xs text-emerald-700 font-medium">
                          Automated
                        </span>
                      </div>
                      <div className="font-display text-sm font-bold text-slate-900">
                        {item.after}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.afterDetail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium px-8">
            <span>Hover each stage to cross-reference legacy manual steps with our modernized digital architecture</span>
            <span className="text-brand-700 font-bold">Production-Grade Maintainability</span>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
