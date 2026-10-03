import React, { useState } from 'react';
import { 
  ArrowRight, Search, Users, CheckCircle, Clock, AlertCircle, 
  Filter, MoreHorizontal, Calendar, ArrowUpRight, Check, X, SlidersHorizontal
} from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import CustomButton from './ui/CustomButton';

export default function AttendanceSolution({ onOpenContact }) {
  const [records, setRecords] = useState(siteData.featuredSolution.initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'PRESENT' | 'ABSENT'
  const [activeTab, setActiveTab] = useState('overview');

  // Interactive toggle record status
  const toggleStatus = (id) => {
    setRecords((prev) =>
      prev.map((rec) => {
        if (rec.id === id) {
          const newStatus = rec.status === 'PRESENT' ? 'ABSENT' : 'PRESENT';
          const newTime = newStatus === 'PRESENT' ? '08:30' : '—';
          return { ...rec, status: newStatus, time: newTime };
        }
        return rec;
      })
    );
  };

  // Filtered records
  const filteredRecords = records.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'ALL' || r.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const presentCount = records.filter(r => r.status === 'PRESENT').length;
  const totalCount = records.length;
  const presentPct = Math.round((presentCount / totalCount) * 100);
  const reviewCount = records.filter(r => r.status === 'ABSENT').length;

  return (
    <section 
      id="attendance-solution" 
      className="py-24 bg-white border-b border-surface-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-left">
            <div className="max-w-3xl space-y-4">
              <div className="font-mono text-xs font-bold tracking-widest text-brand-700 uppercase">
                {siteData.featuredSolution.eyebrow}
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                ATTENDANCE, <br className="hidden sm:block" />
                <span className="text-brand-600">MADE SIMPLER.</span>
              </h2>
            </div>
            <div className="max-w-md space-y-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {siteData.featuredSolution.description}
              </p>
              <div>
                <CustomButton
                  variant="primary"
                  size="md"
                  onClick={onOpenContact}
                  icon={ArrowRight}
                  className="px-6 py-3 tracking-wider"
                >
                  {siteData.featuredSolution.cta}
                </CustomButton>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dashboard Concept Container */}
        <ScrollReveal direction="up" delay={150}>
          <div className="rounded-2xl border border-slate-200/90 shadow-xl bg-white overflow-hidden text-left">
          
          {/* Dashboard Chrome Window Bar */}
          <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-brand-500 text-petrol-950 font-bold font-mono text-xs flex items-center justify-center">
                C
              </div>
              <span className="font-mono text-xs font-bold tracking-wider text-slate-200">
                CLARIVENS ATTENDANCE SYSTEM
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase hidden sm:inline-block">
                LIVE INTERACTIVE APPLICATION
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            
            {/* Sidebar Navigation */}
            <div className="md:col-span-3 border-r border-slate-200/90 bg-slate-50/70 p-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-3">
                    WORKSPACE
                  </div>
                  <nav className="space-y-1">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'attendance', label: 'Live Attendance' },
                      { id: 'records', label: 'Student & Staff Records' },
                      { id: 'reports', label: 'Export Reports' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-petrol-900 text-white font-semibold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-3">
                    SYSTEM
                  </div>
                  <button className="w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60">
                    Configuration & Devices
                  </button>
                </div>
              </div>

              {/* Sidebar bottom indicator */}
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Bio-scanner connected</span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-9 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                
                {/* Dashboard Top Title & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-brand-700 font-semibold tracking-wider uppercase">
                      ATTENDANCE / OVERVIEW
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 mt-0.5">
                      Today's Real-time Record
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-mono text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>03 OCT 2026</span>
                  </div>
                </div>

                {/* Key Metrics Cards (From Figma specs: 28 of 32, 87.5%, 04 open records) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  
                  {/* Metric 1: Recorded */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">
                      RECORDED
                    </div>
                    <div className="font-mono text-3xl font-bold text-slate-900 mt-1">
                      {presentCount}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      of {totalCount} monitored individuals
                    </div>
                  </div>

                  {/* Metric 2: Present % */}
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                    <div className="text-[11px] font-mono text-emerald-800 uppercase tracking-wide">
                      PRESENT RATE
                    </div>
                    <div className="font-mono text-3xl font-bold text-emerald-700 mt-1">
                      {presentPct}%
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${presentPct}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Metric 3: Requires Review */}
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                    <div className="text-[11px] font-mono text-amber-800 uppercase tracking-wide">
                      REQUIRES REVIEW
                    </div>
                    <div className="font-mono text-3xl font-bold text-amber-700 mt-1">
                      0{reviewCount}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      unverified / absent records
                    </div>
                  </div>

                </div>

                {/* Table Control Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search ID or Name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 w-full sm:w-auto">
                    {['ALL', 'PRESENT', 'ABSENT'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setStatusFilter(filter)}
                        className={`px-3 py-1 text-[11px] font-mono rounded-md transition-all ${
                          statusFilter === filter
                            ? 'bg-petrol-900 text-white font-semibold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table of Records */}
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] font-mono text-slate-500 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-2.5 px-4">ID</th>
                        <th className="py-2.5 px-4">RECORD</th>
                        <th className="py-2.5 px-4">DEPARTMENT</th>
                        <th className="py-2.5 px-4">STATUS</th>
                        <th className="py-2.5 px-4">TIME</th>
                        <th className="py-2.5 px-4 text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredRecords.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono font-medium text-slate-500">
                            {row.id}
                          </td>
                          <td className="py-3 px-4 font-sans font-bold text-slate-900">
                            {row.name}
                          </td>
                          <td className="py-3 px-4 font-sans text-slate-600">
                            {row.department}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              row.status === 'PRESENT'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-700'
                            }`}>
                              {row.status === 'PRESENT' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                              {row.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-600">
                            {row.time}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => toggleStatus(row.id)}
                              className="text-[10px] font-mono text-brand-700 hover:text-brand-900 hover:underline px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                            >
                              Toggle
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Interactive Help Hint */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Tip: Click 'Toggle' to test live metrics recalculation.</span>
                <span className="text-brand-600 font-semibold">Ready for deployment</span>
              </div>
            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
