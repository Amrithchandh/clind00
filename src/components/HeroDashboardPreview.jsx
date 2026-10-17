import React, { useState } from 'react';
import { CheckCircle2, Clock, Users, Search, ShieldCheck } from 'lucide-react';
import logoMarkImg from '../assets/logo-mark.png';

export default function HeroDashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  const sampleEvents = [
    { id: 'EV-1048', time: '08:42 AM', title: 'Morning staff roll-call verified', dept: 'Facilities', status: 'Completed' },
    { id: 'EV-1047', time: '08:35 AM', title: 'Leave request approved by Supervisor', dept: 'Operations', status: 'Approved' },
    { id: 'EV-1046', time: '08:15 AM', title: 'Daily attendance summary exported to PDF', dept: 'Administration', status: 'Downloaded' },
    { id: 'EV-1045', time: '08:00 AM', title: 'New staff profile added to directory', dept: 'HR & Accounts', status: 'Active' }
  ];

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden text-left font-sans">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center">
            <img src={logoMarkImg} alt="Clarivens Mark" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <span className="font-heading text-xs font-bold tracking-wide text-slate-100">
              Clarivens Staff &amp; Operations Portal
            </span>
            <span className="hidden sm:inline-block font-sans text-[10px] text-brand-400 font-semibold uppercase tracking-wider ml-2 px-1.5 py-0.5 rounded bg-brand-950/80 border border-brand-800/60">
              Live System Preview
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 signal-live"></span>
          <span className="font-sans text-[11px] text-slate-300 font-medium hidden sm:inline">Active &amp; Connected</span>
        </div>
      </div>

      {/* Internal Navigation / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-200 gap-2.5">
        <div className="flex items-center gap-1.5 bg-slate-200/70 p-0.5 rounded-lg text-xs font-semibold font-sans">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Daily Operations
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === 'events'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Recent Activity
          </button>
        </div>

        <div className="relative text-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search records or staff..."
            value="Main Campus • Today's Shift"
            className="w-full sm:w-56 pl-8 pr-2.5 py-1 text-[11px] rounded-md border border-slate-200 bg-white text-slate-600 font-sans cursor-default focus:outline-none"
          />
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider">Staff On Duty</span>
              <Users className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-heading text-xl font-extrabold tracking-tight text-slate-900">
              48 / 52 Present
            </div>
            <div className="font-sans text-[10px] text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>92% Attendance Today</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/30">
            <div className="flex items-center justify-between text-emerald-800 mb-1">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider">Pending Requests</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="font-heading text-xl font-extrabold tracking-tight text-emerald-950">
              3 Pending
            </div>
            <div className="font-sans text-[10px] text-emerald-800 font-medium mt-0.5">
              Ready for Manager Review
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider">System Status</span>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-heading text-xl font-extrabold tracking-tight text-slate-900">
              All Good
            </div>
            <div className="font-sans text-[10px] text-slate-600 font-medium mt-0.5">
              Zero Unresolved Errors
            </div>
          </div>
        </div>

        {/* Tab Content 1: Overview Stream */}
        {activeTab === 'overview' ? (
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between font-sans text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <span>Today's Active Operational Modules</span>
              <span className="text-emerald-700 font-medium">Status: Active</span>
            </div>
            <div className="divide-y divide-slate-100 text-xs font-sans">
              {[
                { name: 'Staff Attendance & Biometric Roll-Call', desc: 'Syncs automatically with on-site clock-in devices', status: 'Live' },
                { name: 'Leave & Absence Approvals', desc: 'Managers can approve or flag requests with one click', status: '3 Pending' },
                { name: 'One-Click Payroll Summary Export', desc: 'Instant PDF and Excel spreadsheet downloads', status: 'Ready' }
              ].map((module) => (
                <div key={module.name} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-slate-900">{module.name}</div>
                      <div className="font-sans text-[11px] text-slate-500">{module.desc}</div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-brand-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {module.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Tab Content 2: Audit Event Stream */
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between font-sans text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <span>Today's Activity Log</span>
              <span className="text-slate-500 font-medium">Real-Time Updates</span>
            </div>
            <div className="divide-y divide-slate-100 text-xs font-sans">
              {sampleEvents.map((ev) => (
                <div key={ev.id} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-slate-900">{ev.title}</div>
                      <div className="font-sans text-[11px] text-slate-500">{ev.dept} • {ev.time}</div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                    {ev.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverable Specifications Bar */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="font-semibold text-slate-800">What we deliver:</span>
            <span>Simple, custom web software • Hands-on staff training • Full code ownership</span>
          </div>
          <span className="text-brand-700 font-semibold text-[11px] uppercase tracking-wider">Zero Recurring Vendor Lock-In</span>
        </div>
      </div>
    </div>
  );
}
