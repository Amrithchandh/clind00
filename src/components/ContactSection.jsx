import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import CustomSelect from './ui/CustomSelect';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

const industryOptions = [
  { value: "Institutions", label: "Institutions / Education" },
  { value: "Automobile", label: "Automobile & Dealerships" },
  { value: "Healthcare", label: "Healthcare Operations" },
  { value: "Supply Chain", label: "Logistics & Supply Chain" },
  { value: "Enterprise", label: "Enterprise Administration" },
  { value: "Other", label: "Other Specialized Sector" }
];

export default function ContactSection({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'Institutions',
    service: 'Attendance & Workflow Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#2ebd7f', '#10b981', '#34d399', '#ffffff']
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-petrol-900 text-white relative overflow-hidden border-b border-petrol-800"
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <ScrollReveal direction="up" delay={0} className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold tracking-widest text-brand-400 uppercase">
                {siteData.ctaSection.eyebrow}
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                HAVE A WORKFLOW <br />
                THAT COULD <br />
                <span className="text-brand-400">WORK BETTER?</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                {siteData.ctaSection.description}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-petrol-950/70 border border-petrol-800 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                Direct Contact & SLA
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
                    {siteData.brand.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <span>{siteData.brand.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>{siteData.brand.location}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-petrol-800 text-[11px] font-mono text-slate-400">
                Response guarantee: Initial scoping review within 24 business hours.
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Working Interactive Inquiry Form */}
          <ScrollReveal direction="up" delay={150} className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-200 text-left">
            {submitted ? (
              <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <CustomAlert 
                  type="success"
                  title="Consultation Request Received"
                  className="mb-4 text-left"
                >
                  Thank you, <strong className="font-semibold text-emerald-950">{formData.name}</strong>. An engineering partner from Clarivens will review your workflow challenges and reply to <strong className="font-semibold text-emerald-950">{formData.email}</strong> within 24 hours.
                </CustomAlert>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-left space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Recorded Scope Parameters
                  </span>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block">Organization:</span>
                      <span className="font-medium text-slate-800">{formData.organization || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Industry Sector:</span>
                      <span className="font-medium text-slate-800">{formData.industry}</span>
                    </div>
                  </div>
                  {formData.message && (
                    <div className="pt-2 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-500 block mb-1">Challenge Summary:</span>
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
                        industry: 'Institutions',
                        service: 'Attendance & Workflow Solutions',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </CustomButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-sans text-xl font-bold text-slate-900">
                    Tell us what you are trying to simplify
                  </h3>
                  <span className="font-mono text-[10px] text-brand-700 font-semibold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    No Obligation
                  </span>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Academy / Delta Motors"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Primary Industry
                    </label>
                    <CustomSelect
                      value={formData.industry}
                      onChange={(val) => setFormData({ ...formData, industry: val })}
                      options={industryOptions}
                      placeholder="Select primary industry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                    What operational friction do you want to resolve? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current manual steps, spreadsheet challenges, or software integration needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  ></textarea>
                </div>

                <CustomButton
                  type="submit"
                  disabled={loading}
                  loading={loading}
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  className="w-full py-3.5 tracking-widest text-xs"
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
