import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, ArrowDown, Activity, Sparkles, Layers, RefreshCw } from 'lucide-react';

export default function HeroWorkflowWidget() {
  const [activeMode, setActiveMode] = useState('clarivens'); // 'friction' | 'clarivens'
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden backdrop-blur-sm">
      {/* Top Header / Mode Switcher */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/90 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
            Interactive Operational Flow
          </span>
        </div>
        <div className="inline-flex p-0.5 rounded-lg bg-slate-200/80 text-[11px] font-medium font-mono">
          <button
            onClick={() => setActiveMode('friction')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeMode === 'friction'
                ? 'bg-white text-rose-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Friction State
          </button>
          <button
            onClick={() => setActiveMode('clarivens')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeMode === 'clarivens'
                ? 'bg-petrol-900 text-brand-300 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Clarivens Flow
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="p-4 sm:p-5 space-y-3 bg-radial-at-c from-slate-50 to-white">
        
        {/* Step 01: Complex / Fragmented Workflow */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-slate-400"></span>
              <span className="font-mono text-[11px] font-bold tracking-wider text-slate-700 uppercase">
                COMPLEX WORKFLOW
              </span>
            </div>
            <span className="font-mono text-[9px] text-slate-400">
              {activeMode === 'friction' ? '3 Disconnected Sources' : 'Synchronized Inputs'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { title: "Manual Entry", desc: "Local sheets", flag: "Desync", error: true },
              { title: "Paper Logs", desc: "Physical archives", flag: "Delayed", error: true },
              { title: "Separate Apps", desc: "Fragmented DBs", flag: "Siloed", error: true },
            ].map((node, i) => (
              <div
                key={node.title}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  activeMode === 'friction'
                    ? 'border-rose-200 bg-rose-50/40 text-slate-800'
                    : 'border-slate-200/80 bg-white shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className={`h-1.5 rounded-full ${activeMode === 'friction' ? 'w-6 bg-rose-400' : 'w-8 bg-brand-500'}`}></div>
                  {activeMode === 'friction' && (
                    <span className="text-[8px] font-mono font-medium text-rose-600 uppercase">
                      {node.flag}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-slate-200 rounded w-full"></div>
                  <div className="h-1 bg-slate-100 rounded w-2/3"></div>
                </div>
                <p className="mt-1.5 text-[9px] font-mono text-slate-500 truncate">
                  {node.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Connector 1 */}
        <div className="flex items-center justify-center py-0.5">
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="overflow-visible">
            <defs>
              <linearGradient id="connGrad1" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#082226" />
              </linearGradient>
            </defs>
            <line x1="10" y1="0" x2="10" y2="26" stroke="url(#connGrad1)" strokeWidth="1.5" />
            {activeMode === 'friction' ? (
              <circle cx="10" cy="13" r="3.5" fill="#f59e0b" className="transition-all duration-300" />
            ) : (
              <>
                <circle cx="10" cy="13" r="6" fill="#10b981" opacity="0.3" className="animate-ping origin-center" />
                <circle cx="10" cy="13" r="3.5" fill="#10b981" />
              </>
            )}
          </svg>
        </div>

        {/* Step 02: Central Intervention - CLARIVENS */}
        <div className="relative group">
          <div className="bg-petrol-900 text-white rounded-xl p-4 border border-petrol-700 shadow-md relative overflow-hidden">
            {/* Background subtle grid */}
            <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-petrol-800 border border-brand-500/30 flex items-center justify-center font-bold text-base text-brand-400 shadow-inner">
                  C
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-widest text-brand-400 uppercase font-semibold">
                    CLARIVENS
                  </div>
                  <div className="font-sans text-xs sm:text-sm font-bold text-white tracking-wide">
                    TECHNOLOGY IMPLEMENTATION
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono bg-petrol-800/90 text-brand-300 border border-brand-500/20">
                  <Activity className="w-2.5 h-2.5 text-brand-400" />
                  {activeMode === 'friction' ? 'Intervention Needed' : 'Unified Engine Active'}
                </span>
              </div>
            </div>

            {/* Live Progress Bar indicator */}
            <div className="mt-2.5 pt-2 border-t border-petrol-800 flex items-center justify-between text-[10px] font-mono text-slate-300">
              <span className="text-slate-400 text-[9px]">Data Normalization Pipeline</span>
              <span className="text-brand-300 text-[9px] font-semibold">
                {activeMode === 'friction' ? 'Manual Sync: 14%' : 'Automated Sync: 99.8%'}
              </span>
            </div>
          </div>
        </div>

        {/* Transition Connector 2 */}
        <div className="flex items-center justify-center py-0.5">
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="overflow-visible">
            <defs>
              <linearGradient id="connGrad2" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#082226" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <line x1="10" y1="0" x2="10" y2="26" stroke="url(#connGrad2)" strokeWidth="1.5" />
            <circle cx="10" cy="13" r="3.5" fill="#34d399" />
          </svg>
        </div>

        {/* Step 03: Simpler Workflow */}
        <div className="relative bg-emerald-50/50 rounded-xl p-3 sm:p-3.5 border border-emerald-200/70">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold tracking-wider text-slate-800 uppercase">
                SIMPLER WORKFLOW
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              READY
            </span>
          </div>

          <div className="bg-white rounded-lg p-2.5 border border-emerald-200 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-800 font-sans">
                One continuous, connected process
              </span>
            </div>
            <span className="text-[9px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              0 friction
            </span>
          </div>

          {/* Outcome micro-metrics */}
          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-emerald-200/50 text-[10px] font-mono text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Single source of truth</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Real-time visibility</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
