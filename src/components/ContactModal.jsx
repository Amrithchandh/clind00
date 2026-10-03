import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight } from 'lucide-react';
import CustomDialog from './ui/CustomDialog';
import CustomSelect from './ui/CustomSelect';
import CustomButton from './ui/CustomButton';
import CustomAlert from './ui/CustomAlert';

const serviceOptions = [
  { value: "Attendance System", label: "Attendance & Roll Call" },
  { value: "Workflow Solutions", label: "Workflow Solutions" },
  { value: "Automobile Operations", label: "Automobile Operations" },
  { value: "Software Development", label: "Software Development" },
  { value: "Process Automation", label: "Automation & System Sync" },
  { value: "Technology Implementation", label: "Technology Implementation" },
];

const timelineOptions = [
  { value: "Immediate", label: "Immediate (< 2 weeks)" },
  { value: "1-2 Months", label: "1 - 2 Months" },
  { value: "Q3/Q4 Planning", label: "Quarterly Planning" },
];

export default function ContactModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Technology Implementation',
    timeline: 'Immediate',
    notes: ''
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
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2ebd7f', '#10b981', '#34d399', '#ffffff']
        });
      } catch (err) {}
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      onClose={handleClose}
      title="Connect with Clarivens Engineers"
      subtitle="Discuss your operational bottlenecks directly with software architects."
      maxWidth="max-w-lg"
    >
      {submitted ? (
        <div className="py-4 space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <CustomAlert
            type="success"
            title="Session Scheduled"
            className="text-left"
          >
            We have received your requirements for <strong className="font-semibold text-emerald-950">{formData.service}</strong>. Our architecture team will contact you shortly at <strong className="font-semibold text-emerald-950">{formData.email}</strong>.
          </CustomAlert>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-left space-y-2 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
              Confirmed Session Details
            </span>
            <div className="grid grid-cols-2 gap-3 text-slate-700">
              <div>
                <span className="text-slate-500 block text-[11px]">Client Name:</span>
                <span className="font-medium text-slate-900">{formData.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Organization:</span>
                <span className="font-medium text-slate-900">{formData.company || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Focus Domain:</span>
                <span className="font-medium text-slate-900">{formData.service}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Target Timeline:</span>
                <span className="font-medium text-slate-900">{formData.timeline}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <CustomButton
              variant="primary"
              size="md"
              onClick={handleClose}
            >
              Close Window
            </CustomButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                Organization
              </label>
              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                Area of Focus
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
              <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
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
            <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
              Brief Workflow Problem
            </label>
            <textarea
              rows={3}
              placeholder="Outline your biggest operational bottleneck..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
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
              className="w-full py-3 tracking-widest text-xs"
            >
              Submit Architecture Request
            </CustomButton>
          </div>
        </form>
      )}
    </CustomDialog>
  );
}
