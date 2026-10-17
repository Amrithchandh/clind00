import React from 'react';
import { CheckCircle2, FileText, Users, Clock } from 'lucide-react';
import logoMarkImg from '../assets/logo-mark.png';

export default function HeroDashboardPreview() {
  return (
    <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden text-left font-sans">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center">
            <img src={logoMarkImg} alt="Clarivens Mark" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <span className="font-heading text-sm font-bold tracking-tight text-white">
              Clarivens Business Portal
            </span>
            <span className="block font-sans text-[11px] text-slate-400">
              One clean dashboard for your daily business
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 signal-live"></span>
          <span className="font-sans text-xs text-slate-300 font-medium">Ready to Use</span>
        </div>
      </div>

      {/* Main Clean Preview Content */}
      <div className="p-6 sm:p-7 space-y-4">
        
        {/* Solution 1: Attendance & Staff */}
        <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-slate-900">
                  Staff &amp; Student Attendance
                </div>
                <p className="font-sans text-xs text-slate-600 mt-0.5">
                  Check-in records and leave requests verified with zero paper registers.
                </p>
              </div>
            </div>
            <span className="font-sans text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
              No Paper Binders
            </span>
          </div>
        </div>

        {/* Solution 2: Work Tracking & Job Cards */}
        <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-slate-900">
                  Daily Work &amp; Job Tracking
                </div>
                <p className="font-sans text-xs text-slate-600 mt-0.5">
                  See what is in progress, who is working on it, and what is finished today.
                </p>
              </div>
            </div>
            <span className="font-sans text-[11px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 whitespace-nowrap">
              Live Overview
            </span>
          </div>
        </div>

        {/* Solution 3: Invoicing & Reports */}
        <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-slate-900">
                  1-Click Reports &amp; Invoices
                </div>
                <p className="font-sans text-xs text-slate-600 mt-0.5">
                  Download clean Excel summaries and PDF documents in just one click.
                </p>
              </div>
            </div>
            <span className="font-sans text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 whitespace-nowrap">
              Instant Export
            </span>
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between text-xs font-sans text-emerald-950">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span className="font-medium">
              Replaces messy spreadsheets with one private, easy-to-use link.
            </span>
          </div>
          <span className="font-heading font-bold text-brand-700 uppercase tracking-wider text-[11px] hidden sm:inline">
            100% Owned By You
          </span>
        </div>

      </div>
    </div>
  );
}
