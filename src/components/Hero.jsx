import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import HeroDashboardPreview from './HeroDashboardPreview';
import CustomButton from './ui/CustomButton';

export default function Hero({ onOpenContact }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 bg-[#F8FAFC] overflow-hidden border-b border-slate-200/80"
    >
      {/* Subtle architectural backdrop */}
      <div 
        className={`absolute inset-0 bg-tech-grid pointer-events-none transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-30' : 'opacity-0'
        }`}
      ></div>

      {/* Gentle ambient gradient */}
      <div 
        className={`absolute top-1/4 -left-32 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute top-1/3 -right-32 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="relative site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Scope */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 text-left">
            
            {/* Eyebrow badge */}
            <div 
              className={`transform-gpu transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-brand-800 text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                {siteData.hero.eyebrow}
              </div>
            </div>

            {/* Main Headline */}
            <div 
              className={`space-y-1 transform-gpu transition-all duration-500 ease-out delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                {siteData.hero.headlineLine1}
              </h1>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-extrabold tracking-tight text-brand-600 leading-[1.08]">
                {siteData.hero.headlineLine2}
              </h1>
            </div>

            {/* Supporting Copy */}
            <p 
              className={`text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl transform-gpu transition-all duration-500 ease-out delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {siteData.hero.description}
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap items-center gap-3.5 pt-1 transform-gpu transition-all duration-500 ease-out delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <CustomButton
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('case-studies');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
                className="group px-7 py-3.5 font-heading font-bold shadow-sm"
              >
                {siteData.hero.ctaPrimary}
              </CustomButton>

              <CustomButton
                variant="secondary"
                size="lg"
                onClick={onOpenContact}
                icon={ArrowUpRight}
                className="group px-6 py-3.5 font-heading font-semibold"
              >
                {siteData.hero.ctaSecondary}
              </CustomButton>
            </div>

            {/* Authentic Enterprise Capability Indicators */}
            <div 
              className={`pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 transform-gpu transition-all duration-500 ease-out delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-petrol-900">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Client Code Ownership</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-petrol-900">Direct</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Senior Dev Access</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-600">Modern</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">React, Node &amp; SQL</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-petrol-900">2-Week</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Sprint Demos</div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Application Preview */}
          <div 
            className={`lg:col-span-6 xl:col-span-6 transform-gpu transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.99]'
            }`}
          >
            <HeroDashboardPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
