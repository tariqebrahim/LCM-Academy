import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeOffer } from './components/WhatWeOffer';
import { GallerySection } from './components/GallerySection';
import { DailySchedule } from './components/DailySchedule';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhyOurClientsChooseUs } from './components/WhyOurClientsChooseUs';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookTourModal } from './components/BookTourModal';
import { FloatingWhatsAppButton } from './components/SocialLinks';
import { EnrolmentPage } from './pages/EnrolmentPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  // Sync hash routing so external links / browser buttons work smoothly
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'enrolment' || hash === 'enrol') {
        setActivePage('enrolment');
      } else if (hash === 'privacy') {
        setActivePage('privacy');
      } else if (hash === 'terms') {
        setActivePage('terms');
      } else if (hash === '' || hash === 'home') {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${page}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Global Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBookTour={() => setIsBookTourOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        {activePage === 'home' && (
          <>
            <Hero
              setActivePage={handlePageChange}
              onOpenBookTour={() => setIsBookTourOpen(true)}
            />
            <WhoWeAre />
            <WhatWeOffer />
            <GallerySection />
            <DailySchedule />
            <WhyChooseUs />
            <WhyOurClientsChooseUs />
            <PricingSection
              setActivePage={handlePageChange}
              onOpenBookTour={() => setIsBookTourOpen(true)}
            />
            <ContactSection />
          </>
        )}

        {activePage === 'enrolment' && (
          <EnrolmentPage onBackToHome={() => handlePageChange('home')} />
        )}

        {activePage === 'privacy' && (
          <PrivacyPage onBackToHome={() => handlePageChange('home')} />
        )}

        {activePage === 'terms' && (
          <TermsPage onBackToHome={() => handlePageChange('home')} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBookTour={() => setIsBookTourOpen(true)}
      />

      {/* Fast Tour Booking Modal */}
      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />

      {/* Floating Direct WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
