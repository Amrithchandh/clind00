import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import CustomButton from './ui/CustomButton';

export const LogoMark = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Clarivens Logo"
  >
    <rect width="40" height="40" rx="4" fill="#082226" />
    <path 
      d="M29 11H13C11.8954 11 11 11.8954 11 13V27C11 28.1046 11.8954 29 13 29H29V24.5H17.5V15.5H29V11Z" 
      fill="#2ebd7f" 
    />
    <rect x="20" y="18.5" width="8" height="3" fill="#ecfdf5" rx="1" />
  </svg>
);

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'solutions', 'attendance-solution', 'services', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border/80' 
            : 'py-3 bg-white/80 backdrop-blur-sm border-b border-surface-border/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a 
              href="#hero" 
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1"
            >
              <LogoMark className="w-9 h-9 transition-transform group-hover:scale-105" />
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-lg tracking-wider text-slate-900 group-hover:text-petrol-800 transition-colors">
                  {siteData.brand.name}
                </span>
                <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-brand-700 uppercase -mt-0.5">
                  {siteData.brand.subtitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/70">
              {siteData.navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? 'bg-petrol-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action / Let's Talk CTA */}
            <div className="hidden md:flex items-center gap-3">
              <CustomButton
                variant="primary"
                size="sm"
                onClick={onOpenContact}
                icon={ArrowUpRight}
                className="group px-4 py-2 font-mono text-[11px] tracking-wider"
              >
                Let's Talk
              </CustomButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="grid gap-1">
              {siteData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100">
              <CustomButton
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                icon={ArrowUpRight}
                className="w-full py-3"
              >
                Let's Talk
              </CustomButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
