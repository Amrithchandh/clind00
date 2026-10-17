import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CustomDialog from './ui/CustomDialog';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
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
      title="Get in Touch"
      subtitle="Tell us about the challenge you're looking to solve. We'll listen and get back within 24 business hours."
      maxWidth="max-w-lg"
    >
      {submitted ? (
        <div className="py-4 space-y-5 animate-in fade-in duration-200 font-sans">
          <CustomAlert
            type="success"
            title="Message Received"
            className="text-left"
          >
            Thank you, <strong className="font-semibold text-emerald-950">{formData.name}</strong>. Our team will review your message and reply within 24 business hours.
          </CustomAlert>

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

          <div>
            <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Business / Organization Name
            </label>
            <input
              type="text"
              placeholder="e.g., Apex Academy or City Motors"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Email Address or Phone Number *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., rajesh@company.com or +91 98765 43210"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 font-sans focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              What challenge are you looking to solve? *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us about what's currently slowing your team down or what software tool you need..."
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
              Get in Touch
            </CustomButton>
          </div>
        </form>
      )}
    </CustomDialog>
  );
}
