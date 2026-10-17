import React, { useState } from 'react';
import { ArrowUpRight, Code2, Globe, Database, Cpu, Cog, Layers } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

export default function Services({ onOpenContact }) {
  const [expandedService, setExpandedService] = useState(0);
  const icons = [Code2, Globe, Database, Cpu, Cog, Layers];

  return (
    <section 
      id="services" 
      className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Fixed / Sticky Information */}
          <ScrollReveal direction="up" delay={0} className="lg:col-span-5 text-left space-y-6">
            <div className="text-xs font-bold tracking-wider text-brand-700 uppercase">
              {siteData.services.eyebrow}
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              END-TO-END <br />
              <span className="text-brand-600">SOFTWARE ENGINEERING.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {siteData.services.description}
            </p>

            <div className="p-6 rounded-2xl bg-petrol-50/70 border border-petrol-100 text-left space-y-4">
              <div className="font-heading text-xs font-bold uppercase tracking-wider text-petrol-900">
                Core Engineering Standard
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every service is backed by disciplined engineering principles: predictable architectures, strict security standards, comprehensive documentation, and zero vendor lock-in.
              </p>
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-900 group"
              >
                <span>Request Scope Evaluation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column: Expandable Service List */}
          <ScrollReveal direction="up" delay={150} className="lg:col-span-7">
            <div className="divide-y divide-slate-200">
            {siteData.services.list.map((service, index) => {
              const isExpanded = expandedService === index;
              const IconComponent = icons[index % icons.length];

              return (
                <div 
                  key={service.id}
                  className="py-5 transition-colors group cursor-pointer"
                  onClick={() => setExpandedService(isExpanded ? -1 : index)}
                >
                  <div className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isExpanded ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                        isExpanded ? 'text-brand-600' : 'text-slate-900 group-hover:text-petrol-800'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isExpanded
                          ? 'bg-petrol-900 text-white border-petrol-900 rotate-45'
                          : 'border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-900'
                      }`}>
                        <ArrowUpRight className="w-4 h-4 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details Container */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-left space-y-4 animate-in fade-in duration-150">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-400 mr-1">Technologies:</span>
                          {service.tech.map((t) => (
                            <span 
                              key={t}
                              className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenContact(service.title);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-petrol-900 hover:text-brand-600"
                        >
                          <span>Inquire regarding this capability</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
