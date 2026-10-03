import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Database, Check } from 'lucide-react';
import { siteData } from '../data/siteData';
import HeroWorkflowWidget from './HeroWorkflowWidget';
import CustomButton from './ui/CustomButton';

export default function Hero({ onOpenContact }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger opening transition smoothly on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen lg:h-screen flex flex-col justify-center pt-16 pb-6 sm:pt-20 sm:pb-8 bg-[#f7faf8] overflow-hidden border-b border-surface-border"
    >
      {/* Background Architectural Grid with fade-in */}
      <div 
        className={`absolute inset-0 bg-tech-grid pointer-events-none transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-60' : 'opacity-0'
        }`}
      ></div>

      {/* Subtle ambient lighting gradients */}
      <div 
        className={`absolute top-1/4 -left-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 delay-150 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute top-1/3 -right-40 w-96 h-96 bg-petrol-100/50 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 delay-200 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div 
              className={`transform-gpu transition-all duration-600 ease-out delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-brand-800 text-xs font-mono font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                {siteData.hero.eyebrow}
              </div>
            </div>

            {/* Main Headline - Bold & Emphasized */}
            <div 
              className={`space-y-1 transform-gpu transition-all duration-700 ease-out delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-extrabold tracking-tight text-slate-900 leading-[1.04]">
                {siteData.hero.headlineLine1}
              </h1>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-extrabold tracking-tight text-brand-600 leading-[1.04]">
                {siteData.hero.headlineLine2}
              </h1>
            </div>

            {/* Supporting Copy */}
            <p 
              className={`text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl transform-gpu transition-all duration-700 ease-out delay-350 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {siteData.hero.description}
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap items-center gap-4 pt-1 transform-gpu transition-all duration-700 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <CustomButton
                variant="primary"
                size="lg"
                onClick={onOpenContact}
                icon={ArrowRight}
                className="group px-7 py-3"
              >
                {siteData.hero.ctaPrimary}
              </CustomButton>

              <CustomButton
                variant="secondary"
                size="lg"
                onClick={onOpenContact}
                icon={ArrowUpRight}
                className="group px-6 py-3"
              >
                {siteData.hero.ctaSecondary}
              </CustomButton>
            </div>

            {/* Key Value Proposition Badges */}
            <div 
              className={`pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-4 transform-gpu transition-all duration-700 ease-out delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-petrol-900">99.8%</div>
                <div className="text-xs font-mono text-slate-500 mt-1">Reliability SLA</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-petrol-900">-65%</div>
                <div className="text-xs font-mono text-slate-500 mt-1">Manual Latency</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-brand-600">Zero</div>
                <div className="text-xs font-mono text-slate-500 mt-1">Vendor Lock-in</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hero Visualization */}
          <div 
            className={`lg:col-span-6 xl:col-span-6 transform-gpu transition-all duration-800 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
            }`}
          >
            <HeroWorkflowWidget />
          </div>

        </div>
      </div>
    </section>
  );
}
