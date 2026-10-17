import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import CustomButton from './ui/CustomButton';

export default function CaseStudies({ onOpenContact }) {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const activeCase = siteData.caseStudies[selectedCaseIndex];

  return (
    <section 
      id="case-studies" 
      className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden font-sans"
    >
      <div className="site-container">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-brand-800 font-sans text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                Real-World Projects
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                REAL PROJECTS. <br className="hidden sm:inline" />
                <span className="text-brand-600">REAL BUSINESS RESULTS.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                See how we have helped institutions and businesses eliminate paperwork, save hours of manual spreadsheet work, and run their day-to-day operations more smoothly.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-3 font-sans">
          {siteData.caseStudies.map((cs, idx) => {
            const isSelected = selectedCaseIndex === idx;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-left flex items-center gap-2 ${
                  isSelected
                    ? 'bg-petrol-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand-400' : 'bg-slate-400'}`}></span>
                <span className="font-heading font-bold">{cs.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Panel */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-left">
            
            {/* Top Bar */}
            <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 font-sans">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  {activeCase.industry}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-300 font-medium">{activeCase.client}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-950/80 border border-brand-800 text-[11px] font-semibold text-brand-300 uppercase tracking-wider">
                <Activity className="w-3 h-3 text-brand-400" />
                <span>{activeCase.badge}</span>
              </div>
            </div>

            {/* Content Body Grid */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left 7 Columns: Challenge & Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      {activeCase.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                      {activeCase.summary}
                    </p>
                  </div>

                  {/* Challenge Box */}
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                    <div className="font-sans text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                      The Problem They Faced
                    </div>
                    <p className="font-sans text-xs text-amber-950 leading-relaxed">
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* What We Built */}
                  <div>
                    <div className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      What We Built &amp; Delivered
                    </div>
                    <div className="space-y-2.5">
                      {activeCase.architecture.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-3">
                    <CustomButton
                      variant="primary"
                      size="md"
                      onClick={() => onOpenContact(activeCase.title)}
                      icon={ArrowRight}
                      className="px-6 py-3 font-heading font-semibold"
                    >
                      Ask About a Similar Solution
                    </CustomButton>
                  </div>
                </div>

                {/* Right 5 Columns: Measurable Metrics & Assurance */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  {/* Metric Cards Grid */}
                  <div className="space-y-3 font-sans">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Measurable Results
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCase.metrics.map((metric) => (
                        <div key={metric.label} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70">
                          <div className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-petrol-900">
                            {metric.value}
                          </div>
                          <div className="font-sans text-xs font-bold text-slate-800 mt-1">
                            {metric.label}
                          </div>
                          <div className="font-sans text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Guarantee Callout */}
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3 font-sans">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="font-heading font-bold">Full Ownership &amp; Friendly Support</span>
                    </div>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      You own your software and business data completely. We provide full setup, comprehensive staff training, and dependable ongoing support whenever you need assistance.
                    </p>
                    <div className="pt-1 text-[11px] font-semibold text-brand-700 uppercase tracking-wider">
                      Complete Software Ownership • Staff Training • Ongoing Support
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
