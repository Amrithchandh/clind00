import React, { useState } from 'react';
import { Activity, CheckCircle2, Clock, Users, Search, ShieldCheck } from 'lucide-react';
import logoMarkImg from '../assets/logo-mark.png';

export default function HeroDashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  const sampleEvents = [
    { id: 'EV-1048', time: '08:42 AM', title: 'Main Terminal Sync', dept: 'Facilities', status: 'Synchronized', type: 'success' },
    { id: 'EV-1047', time: '08:38 AM', title: 'Shift Roster Roll Call', dept: 'Operations', status: 'Verified', type: 'success' },
    { id: 'EV-1046', time: '08:25 AM', title: 'Supervisor Override Logged', dept: 'Engineering', status: 'Approved', type: 'info' },
    { id: 'EV-1045', time: '08:14 AM', title: 'Automated Exception Rule', dept: 'Supply Chain', status: 'Resolved', type: 'success' }
  ];

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden text-left">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center">
            <img src={logoMarkImg} alt="Clarivens Mark" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <span className="font-heading text-xs font-bold tracking-wide text-slate-100">
              Clarivens OpsPortal
            </span>
            <span className="hidden sm:inline-block text-[10px] text-brand-400 font-medium ml-2 px-1.5 py-0.5 rounded bg-brand-950/80 border border-brand-800/60">
              Live Production Suite
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 signal-live"></span>
          <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">12 Terminals Connected</span>
        </div>
      </div>

      {/* Internal Navigation / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-200 gap-2.5">
        <div className="flex items-center gap-1.5 bg-slate-200/70 p-0.5 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Telemetry Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === 'events'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Audit Log Stream
          </button>
        </div>

        <div className="relative text-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Live data filter..."
            value="Active Campus Hub • Shift 01"
            className="w-full sm:w-56 pl-8 pr-2.5 py-1 text-[11px] rounded-md border border-slate-200 bg-white text-slate-600 cursor-default focus:outline-none"
          />
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide">Active Roster</span>
              <Users className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-heading text-xl font-extrabold text-slate-900">
              486 / 512
            </div>
            <div className="text-[10px] text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>94.9% On-Site Validation</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/30">
            <div className="flex items-center justify-between text-emerald-800 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide">Pipeline Sync</span>
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="font-heading text-xl font-extrabold text-emerald-950">
              99.98%
            </div>
            <div className="text-[10px] text-emerald-800 font-medium mt-0.5">
              18ms Hardware Latency
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide">Audits &amp; Rules</span>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-heading text-xl font-extrabold text-slate-900">
              Verified
            </div>
            <div className="text-[10px] text-slate-600 font-medium mt-0.5">
              Zero Open Exceptions
            </div>
          </div>
        </div>

        {/* Tab Content 1: Overview Stream */}
        {activeTab === 'overview' ? (
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wide">
              <span>Synchronized Operations Modules</span>
              <span className="text-emerald-700 font-medium">Status: Optimal</span>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {[
                { name: 'Timecard & Roll Call Engine', stack: 'PostgreSQL • WebSockets', latency: 'Real-time', active: true },
                { name: 'Multi-Tier Supervisor Sign-Offs', stack: 'RBAC Authorization', latency: 'Zero-Lag', active: true },
                { name: 'Automated CSV/PDF Compliance Export', stack: 'Background Queue Workers', latency: 'On-Demand', active: true }
              ].map((module) => (
                <div key={module.name} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{module.name}</div>
                      <div className="text-[11px] text-slate-500">{module.stack}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {module.latency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Tab Content 2: Audit Event Stream */
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-600 uppercase tracking-wide">
              <span>Recent Operational Audit Stream</span>
              <span className="text-slate-500 font-medium">Last 60 minutes</span>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {sampleEvents.map((ev) => (
                <div key={ev.id} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{ev.title}</div>
                      <div className="text-[11px] text-slate-500">{ev.dept} • {ev.time}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                    {ev.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverable Specifications Bar */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="font-semibold text-slate-800">Architecture:</span>
            <span>React • Node.js • PostgreSQL • Docker</span>
          </div>
          <span className="text-brand-700 font-semibold text-[11px]">100% Client Source Code Transfer</span>
        </div>
      </div>
    </div>
  );
}
