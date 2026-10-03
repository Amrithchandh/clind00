import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import Approach from './components/Approach';
import PrioritySectors from './components/PrioritySectors';
import AttendanceSolution from './components/AttendanceSolution';
import WorkflowTransformation from './components/WorkflowTransformation';
import Services from './components/Services';
import EngagementModel from './components/EngagementModel';
import AboutClarivens from './components/AboutClarivens';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');

  const handleOpenContact = (serviceName = '') => {
    setModalService(serviceName);
    setModalOpen(true);
  };

  const handleCloseContact = () => {
    setModalOpen(false);
    setModalService('');
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Interactive Workflow Widget */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 01 / The Problem: Friction vs Clarivens Architecture */}
        <TheProblem />

        {/* 02 / The Clarivens Approach: 3-Pillar Methodology */}
        <Approach />

        {/* 03 / Priority Sectors: Institutions Matrix & Automobile Pipeline */}
        <PrioritySectors />

        {/* 04 / Featured Solution: Live Attendance SaaS Dashboard */}
        <AttendanceSolution onOpenContact={() => handleOpenContact('Attendance System')} />

        {/* 05 / Workflow Transformation: Before vs Clarivens One Flow */}
        <WorkflowTransformation />

        {/* 06 / Services: Expandable Technical Capabilities */}
        <Services onOpenContact={(srv) => handleOpenContact(srv)} />

        {/* 07 / How We Work: 4-Phase Engagement Lifecycle */}
        <EngagementModel />

        {/* 08 / About Clarivens: High Precision Engineering Architecture */}
        <AboutClarivens />

        {/* 09 / Start a Conversation: Interactive Inquiry Experience */}
        <ContactSection onOpenModal={() => handleOpenContact()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Consultation Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={handleCloseContact} 
        preselectedService={modalService} 
      />
    </div>
  );
}
