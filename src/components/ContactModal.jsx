import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight } from 'lucide-react';
import CustomDialog from './ui/CustomDialog';
import CustomSelect from './ui/CustomSelect';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

const serviceOptions = [
  { value: "Custom Web Applications", label: "Custom Web Application Development" },
  { value: "Internal Tools & Portals", label: "Internal Tools & Operations Portals" },
  { value: "Staff Attendance System", label: "Staff Operations & Attendance Portal" },
  { value: "Automobile Service Flow", label: "Automotive Multi-Bay Dispatch System" },
  { value: "System & ERP Integration", label: "System & ERP Integrations" },
  { value: "Workflow Automation", label: "Workflow & Process Automation" },
];

const timelineOptions = [
  { value: "Immediate", label: "Immediate (< 2 weeks)" },
  { value: "1-2 Months", label: "1 - 2 Months" },
  { value: "Quarterly Planning", label: "Quarterly Planning" },
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

  // Sync preselectedService when prop changes without cascading effect renders
  const [prevServiceProp, setPrevServiceProp] = useState(preselectedService);
  if (preselectedService && preselectedService !== prevServiceProp) {
    setPrevServiceProp(preselectedService);
    setFormData((prev) => ({ ...prev, service: preselectedService }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cancel any previous in-flight request
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
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#2ebd7f', '#10b981', '#34d399', '#ffffff']
          });
        } catch {}
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
      title="Schedule Architecture Consultation"
      subtitle="Discuss your operational requirements and technical scope directly with our engineering team."
      maxWidth="max-w-lg"
    >
      {submitted ? (
        <div className="py-4 space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <CustomAlert
            type="success"
            title="Consultation Request Confirmed"
            className="text-left"
          >
            We have received your technical inquiry regarding <strong className="font-semibold text-emerald-950">{formData.service}</strong>. An engineering partner will reply to <strong className="font-semibold text-emerald-950">{formData.email}</strong> within 24 business hours.
          </CustomAlert>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">
              Confirmed Session Parameters
            </span>
            <div className="grid grid-cols-2 gap-3 text-slate-700">
              <div>
                <span className="text-slate-500 block text-xs">Client Contact:</span>
                <span className="font-semibold text-slate-900">{formData.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Organization:</span>
                <span className="font-semibold text-slate-900">{formData.company || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Focus Area:</span>
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
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Organization
              </label>
              <input
                type="text"
                placeholder="Company / Institution"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Capability Area
              </label>
              <CustomSelect
                value={formData.service}
                onChange={(val) => setFormData({ ...formData, service: val })}
                options={serviceOptions}
                size="sm"
                placeholder="Select focus"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Target Timeline
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
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Describe your project or systems requirements
            </label>
            <textarea
              rows={3}
              placeholder="Describe your project scope, integration needs, or custom internal tool requirements..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
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
              Submit Scope for Review
            </CustomButton>
          </div>
        </form>
      )}
    </CustomDialog>
  );
}
