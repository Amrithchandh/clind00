import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const { signal } = controller;

    setLoading(true);

    new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (signal.aborted) {
          reject(new DOMException('Aborted', 'AbortError'));
        } else {
          resolve({ success: true });
        }
      }, 500);

      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    })
      .then(() => {
        if (!isMountedRef.current || signal.aborted) return;
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        if (isMountedRef.current) {
          setLoading(false);
        }
      });
  };

  return (
    <section 
      id="contact" 
      className="py-14 sm:py-16 lg:py-20 bg-[#0d2226] text-white relative overflow-hidden border-b border-petrol-800 font-sans"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none"></div>

      <div className="relative site-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Direct Reach */}
          <ScrollReveal direction="up" delay={0} className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <div className="font-sans text-xs font-semibold tracking-wider text-brand-400 uppercase">
                {siteData.ctaSection.eyebrow}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                READY TO REPLACE <br />
                PAPERWORK &amp; <br />
                <span className="text-brand-400">SPREADSHEETS?</span>
              </h2>
              <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                {siteData.ctaSection.description}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-petrol-950/70 border border-petrol-800 space-y-4">
              <div className="font-heading text-xs font-bold uppercase tracking-wider text-brand-400">
                Direct Contact
              </div>

              <div className="space-y-3 font-sans text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
                    {siteData.brand.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <a href={`tel:${siteData.brand.phoneRaw}`} className="hover:text-white transition-colors">
                    {siteData.brand.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>{siteData.brand.location}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-petrol-800 font-sans text-xs text-slate-400">
                Response commitment: Direct reply from our team within 24 business hours.
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Working Consultation Form */}
          <ScrollReveal direction="up" delay={150} className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-200 text-left">
            {submitted ? (
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-200 font-sans">
                <CustomAlert 
                  type="success"
                  title="Message Received"
                  className="mb-4 text-left"
                >
                  Thank you, <strong className="font-semibold text-emerald-950">{formData.name}</strong>. Our team will review your note and reply within 24 business hours.
                </CustomAlert>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-left space-y-3 font-sans">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                    Your Message Summary
                  </span>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block">Name:</span>
                      <span className="font-semibold text-slate-800">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Business:</span>
                      <span className="font-semibold text-slate-800">{formData.organization || 'Not specified'}</span>
                    </div>
                  </div>
                  {formData.message && (
                    <div className="pt-2 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-500 block mb-1">Challenge:</span>
                      <p className="text-slate-700 italic">"{formData.message}"</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-center">
                  <CustomButton
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        industry: 'General Inquiry',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </CustomButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900">
                    Get in Touch
                  </h3>
                  <span className="font-sans text-xs text-brand-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider">
                    Free Consultation
                  </span>
                </div>

                {/* Form fields: Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 font-sans text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Business / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Apex Academy or City Motors"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 font-sans text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                {/* Email or Phone */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., rajesh@company.com or +91 98765 43210"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 font-sans text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
                  />
                </div>

                {/* What challenge are you looking to solve? */}
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    What challenge are you looking to solve? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about what's currently slowing your team down or what software tool you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 font-sans text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
                  ></textarea>
                </div>

                <CustomButton
                  type="submit"
                  disabled={loading}
                  loading={loading}
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  className="w-full py-3.5 font-heading font-bold text-xs tracking-wide"
                >
                  {siteData.ctaSection.buttonText}
                </CustomButton>
              </form>
            )}
          </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
