import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { LogoMark } from './Navbar';

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.84 6.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-petrol-950 text-white border-t border-petrol-900 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Upper Footer: Brand & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-petrol-800/80 items-start">
          
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <LogoMark className="w-8 h-8" />
              <div>
                <span className="font-sans font-extrabold text-lg tracking-wider text-white">
                  {siteData.brand.name}
                </span>
                <span className="block font-mono text-[9px] font-semibold tracking-[0.25em] text-brand-400 uppercase -mt-0.5">
                  {siteData.brand.subtitle}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {siteData.brand.mission}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 text-left sm:text-right">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                ENGINEERING HEADQUARTERS
              </div>
              <div className="text-sm font-sans text-slate-200 mt-1">
                Global Delivery & Implementation
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-petrol-900 border border-petrol-800 hover:border-brand-400 flex items-center justify-center text-brand-400 hover:text-white transition-all shadow-sm group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Middle Footer: Categorized Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-petrol-800/80 text-left">
          
          <div>
            <div className="font-mono text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-4">
              NAVIGATE
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              {siteData.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-4">
              SOLUTIONS
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <a href="#attendance-solution" className="hover:text-white transition-colors">
                  Attendance & Roll Call
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Institutional Portals
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Automotive Service Flow
                </a>
              </li>
              <li>
                <a href="#workflow-transformation" className="hover:text-white transition-colors">
                  Workflow Transformation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-4">
              CAPABILITIES
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Legacy Modernization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] font-bold tracking-widest text-brand-400 uppercase mb-4">
              CONNECT
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <a 
                  href="https://www.linkedin.com/company/clarivens-it-solutions/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/clarivens.itsolutions" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="inline-flex items-center gap-1.5 hover:text-brand-300 transition-colors text-left"
                >
                  <span>Inquire via Email ↗</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer: Copyright & Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {siteData.brand.name} {siteData.brand.subtitle}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 uppercase font-semibold">
              {siteData.brand.descriptor}
            </span>
            <span>•</span>
            <span className="text-brand-400">PRACTICAL TECHNOLOGY IMPLEMENTATION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
