import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import CustomButton from './ui/CustomButton';
import logoMarkImg from '../assets/logo-mark.png';

export const LogoMark = ({ className = "w-8 h-8" }) => (
  <img 
    src={logoMarkImg} 
    alt="Clarivens Logo" 
    className={`object-contain ${className}`}
  />
);

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = window.requestAnimationFrame(() => {
        const isPastThreshold = window.scrollY > 20;
        setScrolled((prev) => (prev !== isPastThreshold ? isPastThreshold : prev));
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = ['hero', 'solutions', 'case-studies', 'services', 'process', 'about', 'contact'];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80' 
          : 'py-3.5 bg-white/80 backdrop-blur-sm border-b border-slate-200/40'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1"
          >
            <LogoMark className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-petrol-800 transition-colors">
                {siteData.brand.name}
              </span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-brand-700 uppercase -mt-0.5">
                {siteData.brand.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-50/90 p-1 rounded-full border border-slate-200/80">
            {siteData.navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-petrol-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <CustomButton
              variant="primary"
              size="sm"
              onClick={onOpenContact}
              icon={ArrowUpRight}
              className="group px-4 py-2 font-heading text-xs font-bold tracking-wide"
            >
              Get in Touch
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
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-600"
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
              Get in Touch
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
}
