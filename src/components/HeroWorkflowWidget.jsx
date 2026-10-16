import React, { useState } from 'react';
import { CheckCircle2, Layers, Database, FileSpreadsheet, Server } from 'lucide-react';

export default function HeroWorkflowWidget() {
  const [activeView, setActiveView] = useState('modern'); // 'legacy' | 'modern'

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden text-left">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="font-display text-xs font-bold tracking-wide text-slate-700">
            System Architecture Preview
          </span>
        </div>
        <div className="inline-flex p-1 rounded-lg bg-slate-200/70 text-xs font-semibold">
          <button
            onClick={() => setActiveView('legacy')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeView === 'legacy'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fragmented Tools
          </button>
          <button
            onClick={() => setActiveView('modern')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeView === 'modern'
                ? 'bg-petrol-900 text-brand-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Unified Web Portal
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 space-y-5 bg-white">
        
        {/* Context Narrative */}
        <div className={`p-4 rounded-xl border transition-all ${
          activeView === 'legacy'
            ? 'bg-amber-50/50 border-amber-200/80 text-amber-950'
            : 'bg-emerald-50/50 border-emerald-200/80 text-emerald-950'
        }`}>
          <div className="flex items-start gap-3">
            {activeView === 'legacy' ? (
              <FileSpreadsheet className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-display text-sm font-bold">
                {activeView === 'legacy' 
                  ? 'Manual Process: Spreadsheets & Email Handoffs' 
                  : 'Automated Process: Centralized Web Portal & Database'}
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {activeView === 'legacy'
                  ? 'Data is manually transcribed between desktop spreadsheets, leading to validation delays and missing records.'
                  : 'Role-based web intake writes directly to PostgreSQL with real-time audit logs and automated notifications.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Workflow Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {[
            {
              title: "1. Data Capture",
              desc: activeView === 'legacy' 
                ? "Multiple Excel files and physical paper logs" 
                : "Role-based responsive web intake & hardware timecard sync",
              icon: Database
            },
            {
              title: "2. Processing",
              desc: activeView === 'legacy' 
                ? "Manual formula checks and cross-referencing" 
                : "Automated business logic and exception rules",
              icon: Server
            },
            {
              title: "3. Reporting",
              desc: activeView === 'legacy' 
                ? "Delayed end-of-month manual reconciliation" 
                : "Live operational telemetry & automated PDF export",
              icon: Layers
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-4 rounded-xl border transition-all ${
                  activeView === 'modern'
                    ? 'border-emerald-200/70 bg-emerald-50/20'
                    : 'border-slate-200 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeView === 'modern' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display text-xs font-bold text-slate-900">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deliverable Specifications */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="font-semibold text-slate-800">Stack:</span>
            <span>React • Node.js • PostgreSQL • Tailwind CSS</span>
          </div>
          <span className="text-slate-500 font-medium">Deliverable: Full source code + Docker deployment</span>
        </div>

      </div>
    </div>
  );
}
