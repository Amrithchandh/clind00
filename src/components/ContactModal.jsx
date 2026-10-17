import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CustomDialog from './ui/CustomDialog';
import CustomSelect from './ui/CustomSelect';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

const serviceOptions = [
  { value: "Custom Web Applications", label: "Custom Web Applications" },
  { value: "Internal Dashboards & Portals", label: "Internal Dashboards & Staff Portals" },
  { value: "Workflow & Data Automation", label: "Workflow & Data Automation" },
  { value: "Modernizing Legacy Systems", label: "Modernizing Legacy Software" },
  { value: "General Project Consultation", label: "General Project Consultation" },
];

const timelineOptions = [
  { value: "Immediate", label: "Immediate (< 2 weeks)" },
  { value: "1-2 Months", label: "1 - 2 Months" },
  { value: "Flexible / Planning", label: "Flexible / Planning Phase" },
];

export default function ContactModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Custom Web Applications',
    timeline: 'Immediate',
    notes: ''
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

  const [prevServiceProp, setPrevServiceProp] = useState(preselectedService);
  if (preselectedService && preselectedService !== prevServiceProp) {
    setPrevServiceProp(preselectedService);
    setFormData((prev) => ({ ...prev, service: preselectedService }));
  }

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
        if (isMountedRef.current) setLoading(false);
      });
  };

  const handleClose = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setSubmitted(false);
    onClose();
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      onClose={handleClose}
      title="Discuss Your Project"
      subtitle="Tell us about the operational challenge you're looking to solve. We'll review your requirements and get back within 24 business hours."
      maxWidth="max-w-lg"
    >
      {submitted ? (
        <div className="py-4 space-y-5 animate-in fade-in duration-200 font-sans">
          <CustomAlert
            type="success"
            title="Inquiry Received"
            className="text-left"
          >
            Thank you, <strong className="font-semibold text-emerald-950">{formData.name}</strong>. We have received your inquiry regarding <strong className="font-semibold text-emerald-950">{formData.service}</strong>. Our team will reply to <strong className="font-semibold text-emerald-950">{formData.email}</strong> within 24 business hours.
          </CustomAlert>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-2 text-xs font-sans">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
              Confirmed Details
            </span>
            <div className="grid grid-cols-2 gap-3 text-slate-700">
              <div>
                <span className="text-slate-500 block text-xs">Contact:</span>
                <span className="font-semibold text-slate-900">{formData.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Business / Organization:</span>
                <span className="font-semibold text-slate-900">{formData.company || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Service:</span>
                <span className="font-semibold text-slate-900">{formData.service}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Target Timeline:</span>
                <span className="font-semibold text-slate-900">{formData.timeline}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <CustomButton
              variant="primary"
              size="md"
              onClick={handleClose}
              className="font-heading font-semibold"
            >
              Close Window
            </CustomButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
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
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g., rajesh@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Business / Organization
              </label>
              <input
                type="text"
                placeholder="e.g., Apex Academy or City Motors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Service You Need
              </label>
              <CustomSelect
                value={formData.service}
                onChange={(val) => setFormData({ ...formData, service: val })}
                options={serviceOptions}
                size="sm"
                placeholder="Select service"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Desired Timeline
              </label>
              <CustomSelect
                value={formData.timeline}
                onChange={(val) => setFormData({ ...formData, timeline: val })}
                options={timelineOptions}
                size="sm"
                placeholder="Select timeline"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              What challenge can we help you solve? *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us about your daily operations, what takes too much manual time, or what software tool you need..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
            ></textarea>
          </div>

          <div className="pt-2">
            <CustomButton
              type="submit"
              variant="primary"
              size="md"
              loading={loading}
              disabled={loading}
              icon={ArrowUpRight}
              className="w-full py-3.5 font-heading font-bold text-xs tracking-wide"
            >
              Send Inquiry &amp; Discuss Project
            </CustomButton>
          </div>
        </form>
      )}
    </CustomDialog>
  );
}
