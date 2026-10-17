import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrioritySectors from './components/PrioritySectors';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Process from './components/Process';
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Realistic Operations Dashboard Preview */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 01 / Priority Sectors: Tailored Solutions for Operationally Intensive Sectors */}
        <PrioritySectors onOpenContact={(sector) => handleOpenContact(sector)} />

        {/* 02 / Featured Case Studies: Enterprise Workforce Portal & Automotive Bay Dispatch */}
        <CaseStudies onOpenContact={(study) => handleOpenContact(study)} />

        {/* 03 / Services: End-to-End Technical Capabilities */}
        <Services onOpenContact={(srv) => handleOpenContact(srv)} />

        {/* 04 / Our Delivery Model: 4-Phase Structured Engineering Roadmap */}
        <Process />

        {/* 05 / About Clarivens: Agency Philosophy & Code Sovereignty */}
        <AboutClarivens />

        {/* 06 / Start a Conversation: Project Inquiry & Scope Consultation */}
        <ContactSection />
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
