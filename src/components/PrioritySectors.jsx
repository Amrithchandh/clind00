import React, { useState } from 'react';
import { Building2, Car, Check, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function PrioritySectors() {
  const [selectedInstModule, setSelectedInstModule] = useState(1); // 1 = RECORDS
  const [selectedAutoStage, setSelectedAutoStage] = useState(2); // 2 = Bay Dispatch

  const instData = siteData.prioritySectors.sectors[0];
  const autoData = siteData.prioritySectors.sectors[1];

  return (
    <section 
      id="sectors" 
      className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Header: Proportional 12-Column Grid */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                {siteData.prioritySectors.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                TAILORED SOLUTIONS FOR <br className="hidden sm:inline" />
                <span className="text-brand-600">OPERATIONALLY COMPLEX SECTORS.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Generic off-the-shelf software forces companies to distort their operations. We engineer custom portals shaped around your industry's exact rules, vocabulary, and team dynamics.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Priority Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-12">
          
          {/* Card 1: INSTITUTIONS */}
          <ScrollReveal direction="up" delay={100} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-7 sm:p-8 flex flex-col justify-between text-left h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  Academic & Training Institutions
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-100/50 px-2.5 py-0.5 rounded-full">
                  Specialized Scope
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {instData.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {instData.subtitle}
              </p>

              {/* Interactive Module Selector */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-3 px-1">
                  <span className="font-bold text-slate-700 uppercase tracking-wide">Delivered System Modules</span>
                  <span className="text-brand-700 font-semibold">Select to inspect details</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {instData.matrix.map((item, idx) => {
                    const isSelected = selectedInstModule === idx;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setSelectedInstModule(idx)}
                        className={`p-3 rounded-lg text-center transition-all ${
                          isSelected
                            ? 'bg-petrol-900 text-white shadow-xs font-bold'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 font-medium'
                        }`}
                      >
                        <div className="font-display text-xs uppercase tracking-wide">
                          {item.name}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Module Detail */}
                <div className="mt-3.5 pt-3 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between bg-white p-3 rounded-lg">
                  <span className="font-display font-bold text-slate-900">
                    {instData.matrix[selectedInstModule].name}:
                  </span>
                  <span className="text-slate-600 text-right text-xs">
                    {instData.matrix[selectedInstModule].desc}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {instData.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-700">
              <span>Includes administrative directory & roll call automation</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            </div>
          </ScrollReveal>

          {/* Card 2: AUTOMOBILE */}
          <ScrollReveal direction="up" delay={200} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-7 sm:p-8 flex flex-col justify-between text-left h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-petrol-50 text-petrol-800 border border-petrol-200">
                  <Car className="w-3.5 h-3.5 text-petrol-700" />
                  Automotive & Service Facilities
                </span>
                <span className="text-xs text-petrol-700 font-semibold bg-petrol-100/50 px-2.5 py-0.5 rounded-full">
                  Specialized Scope
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {autoData.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {autoData.subtitle}
              </p>

              {/* Interactive Service Flow Widget */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4 px-1">
                  <span className="font-bold text-slate-700 uppercase tracking-wide">Multi-Bay Service Flow</span>
                  <span className="text-brand-700 font-semibold">Workflow Stages</span>
                </div>

                {/* Progress Pipeline */}
                <div className="relative mb-5">
                  <div className="h-1 bg-slate-200 rounded-full w-full absolute top-3 -z-0"></div>
                  <div 
                    className="h-1 bg-brand-500 rounded-full absolute top-3 transition-all duration-300 -z-0"
                    style={{ width: `${(selectedAutoStage / (autoData.flowStages.length - 1)) * 100}%` }}
                  ></div>

                  <div className="grid grid-cols-5 gap-1 relative z-10">
                    {autoData.flowStages.map((stage, idx) => {
                      const isSelected = selectedAutoStage === idx;
                      const isPast = idx <= selectedAutoStage;
                      return (
                        <button
                          key={stage.label}
                          onClick={() => setSelectedAutoStage(idx)}
                          className="flex flex-col items-center group text-center focus:outline-none"
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-petrol-900 text-white ring-2 ring-brand-500 shadow-md scale-110'
                              : isPast
                              ? 'bg-brand-500 text-white'
                              : 'bg-white border border-slate-300 text-slate-400 group-hover:border-slate-400'
                          }`}>
                            {isPast ? <Check className="w-3 h-3 text-white" /> : <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>}
                          </div>
                          <span className={`text-[11px] mt-2 truncate w-full ${
                            isSelected ? 'font-bold text-slate-900' : 'text-slate-500 font-medium'
                          }`}>
                            {stage.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Stage Detail */}
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between bg-white p-3 rounded-lg">
                  <span className="font-display font-bold text-slate-900">
                    Active Stage: {autoData.flowStages[selectedAutoStage].label}
                  </span>
                  <span className="text-slate-600 text-right text-xs">
                    {autoData.flowStages[selectedAutoStage].status}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {autoData.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-700">
              <span>Technician bay assignment & customer updates</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Cross-Industry Banner */}
        <ScrollReveal direction="up" delay={250}>
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="max-w-xl space-y-2">
            <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
              {siteData.prioritySectors.beyondBanner.eyebrow}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {siteData.prioritySectors.beyondBanner.text}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {siteData.prioritySectors.beyondBanner.industries.map((ind) => (
              <span
                key={ind}
                className="text-xs font-semibold text-petrol-900 bg-petrol-50 border border-petrol-100 px-3.5 py-1.5 rounded-lg shadow-2xs hover:bg-petrol-100 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
