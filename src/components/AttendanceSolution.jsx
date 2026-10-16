import React, { useState } from 'react';
import { ArrowRight, Search, Calendar, Check, X, FileText, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import CustomButton from './ui/CustomButton';
import logoMarkImg from '../assets/logo-mark.png';

export default function AttendanceSolution({ onOpenContact }) {
  const [records, setRecords] = useState(siteData.featuredSolution.initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'PRESENT' | 'ABSENT'
  const [activeTab, setActiveTab] = useState('overview');

  // Pure immutable status toggle
  const toggleStatus = (id) => {
    setRecords((prevRecords) =>
      prevRecords.map((rec) => {
        if (rec.id !== id) return rec;
        const isPresent = rec.status === 'PRESENT';
        return {
          ...rec,
          status: isPresent ? 'ABSENT' : 'PRESENT',
          time: isPresent ? '—' : '08:30 AM',
        };
      })
    );
  };

  // Pure search & filter calculation
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredRecords = records.filter((r) => {
    const matchesSearch = 
      !normalizedSearch ||
      r.name.toLowerCase().includes(normalizedSearch) || 
      r.id.toLowerCase().includes(normalizedSearch) ||
      r.department.toLowerCase().includes(normalizedSearch);

    const matchesFilter = statusFilter === 'ALL' || r.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const presentCount = records.filter((r) => r.status === 'PRESENT').length;
  const totalCount = records.length;
  const presentPct = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;
  const reviewCount = records.filter((r) => r.status === 'ABSENT').length;

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('ALL');
  };

  return (
    <section 
      id="attendance-solution" 
      className="py-14 sm:py-16 lg:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Case Study Section Header: Proportional 12-Column Grid (7:5) */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10 text-left">
            
            {/* Left 7 Columns: Authoritative Headline */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-brand-800 text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                Client Production Case Study
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                ENTERPRISE WORKFORCE TRACKING &amp; <br className="hidden sm:inline" />
                <span className="text-brand-600">OPERATIONS MANAGEMENT SUITE.</span>
              </h2>
            </div>

            {/* Right 5 Columns: Executive Summary & Primary CTA */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Custom-engineered for multi-facility operations managing 500+ on-site personnel. Consolidates hardware timecard sync, automated roll-call validation, supervisory exception approvals, and compliance audit logs into a single authoritative web system.
              </p>
              <div className="pt-1">
                <CustomButton
                  variant="primary"
                  size="md"
                  onClick={onOpenContact}
                  icon={ArrowRight}
                  className="px-6 py-3 font-heading font-semibold"
                >
                  Review Architecture Scope
                </CustomButton>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Structured Case Study Context Cards: 3 Pillars */}
        <ScrollReveal direction="up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 text-left">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  01 / Operational Challenge
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Decentralized Terminal Logs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-facility campus relied on manual spreadsheets and disconnected hardware clocks, causing hours of reconciliation lag every pay cycle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 block">
                  02 / Delivered Architecture
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Real-Time Telemetry Pipeline
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unified Node.js and PostgreSQL sync engine validates check-ins instantly with automatic absence escalation and supervisor sign-offs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  03 / Enterprise Governance
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Audit-Ready Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Immutable timestamp records, supervisor approval trails, and exportable regulatory reporting with 100% client code sovereignty.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Full-Width Interactive Case Study Application Container */}
        <ScrollReveal direction="up" delay={150}>
          <div className="w-full rounded-2xl border border-slate-200/90 shadow-sm bg-white overflow-hidden text-left">
          
          {/* Window Chrome Header */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center shadow-xs">
                <img src={logoMarkImg} alt="Clarivens Logo" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <span className="font-heading text-sm font-bold tracking-wide text-slate-100">
                  Staff Operations Portal
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400 ml-2">
                  • Production Case Study
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Activity className="w-3.5 h-3.5 text-brand-400" />
              <span>Real-Time Telemetry Active</span>
            </div>
          </div>

          {/* Body Layout: 3:9 Proportional Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            
            {/* Sidebar Navigation (3 of 12 columns) */}
            <div className="lg:col-span-3 border-r border-slate-200/80 bg-slate-50/60 p-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                    Portal Modules
                  </div>
                  <nav className="space-y-1">
                    {[
                      { id: 'overview', label: 'Daily Roll Call' },
                      { id: 'attendance', label: 'Timecard Records' },
                      { id: 'records', label: 'Personnel Directory' },
                      { id: 'reports', label: 'Export Audit Logs' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          activeTab === tab.id
                            ? 'bg-petrol-900 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="font-heading font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-brand-600" />
                    <span>Facility Specification</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Custom internal portal engineered for multi-facility operations to unify shift rosters, automated timecard tracking, and supervisory sign-offs.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Facility Hubs: 12 Terminals Synchronized</span>
              </div>
            </div>

            {/* Main Operational Telemetry Area (9 of 12 columns) */}
            <div className="lg:col-span-9 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                
                {/* Title & Description */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                      Live Facility Roster
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Daily verification log with automatic check-in calculation
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Day Shift: 08:00 AM – 05:00 PM</span>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Present Staff
                    </div>
                    <div className="font-heading text-3xl font-extrabold text-slate-900 mt-1">
                      {presentCount}
                    </div>
                    <div className="text-xs font-medium text-slate-500 mt-1">
                      of {totalCount} scheduled personnel
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/30">
                    <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                      Attendance Rate
                    </div>
                    <div className="font-heading text-3xl font-extrabold text-emerald-700 mt-1">
                      {presentPct}%
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full mt-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                        style={{ width: `${presentPct}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/30">
                    <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                      Unverified / Absent
                    </div>
                    <div className="font-heading text-3xl font-extrabold text-amber-700 mt-1">
                      {reviewCount}
                    </div>
                    <div className="text-xs font-medium text-slate-500 mt-1">
                      Awaiting supervisor sign-off
                    </div>
                  </div>

                </div>

                {/* Search & Filter Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Filter by name, ID, or dept..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 w-full sm:w-auto">
                    {['ALL', 'PRESENT', 'ABSENT'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setStatusFilter(filter)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                          statusFilter === filter
                            ? 'bg-petrol-900 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data Table with Robust Empty State Boundary */}
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                  {filteredRecords.length > 0 ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                          <th className="py-3 px-4">Staff ID</th>
                          <th className="py-3 px-4">Name</th>
                          <th className="py-3 px-4">Department</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4">Check-in Time</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-medium">
                        {filteredRecords.map((row) => (
                          <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-slate-500">
                              {row.id}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-slate-900">
                              {row.name}
                            </td>
                            <td className="py-3.5 px-4 text-slate-600">
                              {row.department}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                                row.status === 'PRESENT'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-700'
                              }`}>
                                {row.status === 'PRESENT' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                                {row.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600">
                              {row.time}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => toggleStatus(row.id)}
                                className="text-xs font-semibold text-brand-700 hover:text-brand-900 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                              >
                                Toggle Status
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="py-12 px-6 text-center space-y-3">
                      <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Search className="w-5 h-5" />
                      </div>
                      <div className="font-heading text-sm font-bold text-slate-900">
                        No records match your criteria
                      </div>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        No personnel entries were found matching "{searchTerm}". Try clearing your search keyword or switching the status filter.
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 underline pt-1"
                      >
                        Reset Search &amp; Filters
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Footer Note */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                <span>Interactive case study: Click "Toggle Status" to test optimistic state synchronization and live roster telemetry.</span>
                <span className="text-brand-700 font-semibold whitespace-nowrap">Enterprise Architecture: PostgreSQL &amp; Hardware Sync</span>
              </div>
            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
