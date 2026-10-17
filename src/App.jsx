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

        {/* 01 / What We Do: 4 Everyday Software Solutions */}
        <Services onOpenContact={(srv) => handleOpenContact(srv)} />

        {/* 02 / Who We Help: Tailored Industry Solutions */}
        <PrioritySectors onOpenContact={(sector) => handleOpenContact(sector)} />

        {/* 03 / Our Work: Real-World Case Studies */}
        <CaseStudies onOpenContact={(study) => handleOpenContact(study)} />

        {/* 04 / How We Work: Simple 3-Step Collaboration */}
        <Process />

        {/* 05 / About Clarivens: Company Story & Principles */}
        <AboutClarivens />

        {/* 06 / Tell Us About Your Project: Free Consultation & Inquiry */}
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
