import React from 'react';
import { Target, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import logoMarkImg from '../assets/logo-mark.png';

export default function AboutClarivens() {
  return (
    <section 
      id="about" 
      className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden font-sans"
    >
      <div className="site-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Agency Architecture Card */}
          <ScrollReveal direction="up" delay={100} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-3xl border border-slate-200/90 p-8 shadow-xs text-left">
              
              {/* Brand Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center p-1 shadow-xs">
                    <img src={logoMarkImg} alt="Clarivens Logo" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slate-900">CLARIVENS</h4>
                    <p className="font-sans text-xs font-semibold text-brand-700">IT Solutions</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Direct Access
                </span>
              </div>

              {/* Agency Principles */}
              <div className="py-6 space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-tight text-slate-900">Purpose-Built Architecture</div>
                    <div className="font-sans text-[11px] text-slate-500 mt-0.5">Custom schemas and responsive UIs built for your team's specific daily procedures.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-petrol-50 text-petrol-800 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-tight text-slate-900">Operator-Centered UX</div>
                    <div className="font-sans text-[11px] text-slate-500 mt-0.5">Ergonomic workflows that reduce onboarding time and operator training overhead.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-tight text-slate-900">Complete Code Sovereignty</div>
                    <div className="font-sans text-[11px] text-slate-500 mt-0.5">100% intellectual property rights, repository access, and deployment ownership.</div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-sans text-xs text-slate-500 font-medium">
                <span>Production Standards</span>
                <span className="text-brand-700 font-bold uppercase tracking-wider">Documented Handover</span>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Narrative, Mission & Principles */}
          <ScrollReveal direction="up" delay={200} className="lg:col-span-7 text-left space-y-8">
            
            <div className="space-y-3">
              <div className="font-sans text-xs font-semibold tracking-wider text-brand-700 uppercase">
                {siteData.about.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                ENGINEERING SOFTWARE <br />
                <span className="text-brand-600">FOR COMPLEX OPERATIONS.</span>
              </h2>
              <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                {siteData.about.copy}
              </p>
            </div>

            {/* Core Operational Principles */}
            <div className="space-y-3.5 pt-1">
              {siteData.about.principles.map((p) => (
                <div key={p.title} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                  <div className="font-heading text-sm font-bold tracking-tight text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed pl-6">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 font-sans">
              {siteData.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl font-extrabold tracking-tight text-petrol-900">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs font-medium text-slate-500 mt-1">
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
