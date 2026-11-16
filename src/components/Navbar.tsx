import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Instagram, Facebook } from 'lucide-react';
import { ActivePage } from '../types';
import { ACADEMY_INFO } from '../data/daycareData';
import { WhatsAppIcon } from './SocialLinks';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenBookTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenBookTour,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top emergency / quick contact info bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBookTour}
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Tour</span>
            </button>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">
              Ages 5 Months – 5 Years
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <span className="hidden lg:inline text-slate-400">Mon–Thurs: 07:30 – 17:30 | Fri: 07:30 – 17:00</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <a
                href={ACADEMY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#42f584] transition"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href={ACADEMY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition"
                title="Follow on Instagram"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={ACADEMY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
                title="Visit our Facebook"
                aria-label="Visit our Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 transition group"
            aria-label="Little Creative Minds Academy Home"
          >
            <img
              src={ACADEMY_INFO.logoUrl}
              alt="LCM Academy - Little Creative Minds"
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('who-we-are')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Who We Are
            </button>
            <button
              onClick={() => handleNavClick('what-we-offer')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              What We Offer
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('daily-programme')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Daily Programme
            </button>
            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('why-our-clients-choose-us')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Parent Reviews
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Fees & Plans
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBookTour}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all transform active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book a Tour</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBookTour}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-blue-700 rounded-lg inline-flex items-center gap-1 shadow-2xs"
            >
              <Calendar className="w-3 h-3 text-amber-300" />
              <span>Book Tour</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => navigateTo('home')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                activePage === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('who-we-are')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Who We Are
            </button>
            <button
              onClick={() => handleNavClick('what-we-offer')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              What We Offer
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('daily-programme')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Daily Programme
            </button>
            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('why-our-clients-choose-us')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Why Our Clients Choose Us
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Fees & Enrolment Plans
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookTour();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-700 text-white text-sm font-bold shadow-sm"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book a Daycare Tour</span>
            </button>
          </div>

          {/* Socials quick links row in mobile drawer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-xs font-semibold text-slate-600">
            <a
              href={ACADEMY_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg text-[#25D366] hover:bg-slate-50 transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
            <a
              href={ACADEMY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg text-pink-600 hover:bg-slate-50 transition"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={ACADEMY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg text-blue-600 hover:bg-slate-50 transition"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
