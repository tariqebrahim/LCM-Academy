import React from 'react';
import { Phone, Mail, Heart, ShieldCheck, Award, ArrowUp, MapPin, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';
import { ActivePage } from '../types';
import { WhatsAppIcon } from './SocialLinks';

interface FooterProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenBookTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  activePage,
  setActivePage,
  onOpenBookTour,
}) => {
  const scrollToSection = (id: string) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block max-w-[260px]">
              <img
                src={ACADEMY_INFO.logoUrl}
                alt="LCM Academy - Little Creative Minds"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Founded in 2016 by Tasneem. A home-based daycare where children from 5 months to 5 years are loved as family, learn through play, practice Kiddies Karate, and build confident foundations for school.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
                <Award className="w-4 h-4" />
                10+ Years ECD Experience
              </span>
              <span className="text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                First-Aid Certified
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Connect With Us On Socials
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={ACADEMY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold border border-[#25D366]/30 transition"
                  aria-label="Connect on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={ACADEMY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 text-xs font-semibold border border-pink-500/30 transition"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href={ACADEMY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-semibold border border-blue-500/30 transition"
                  aria-label="Find us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore Academy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('who-we-are')}
                  className="hover:text-white transition"
                >
                  Who We Are (Our Story)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('what-we-offer')}
                  className="hover:text-white transition"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-white transition"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('daily-programme')}
                  className="hover:text-white transition"
                >
                  Daily Programme
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('why-choose-us')}
                  className="hover:text-white transition"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('why-our-clients-choose-us')}
                  className="hover:text-white transition"
                >
                  Why Our Clients Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white transition"
                >
                  Fees & Enrolment Plans
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Supporting Pages & Admissions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Supporting Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('terms')}
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('privacy')}
                  className="hover:text-white transition"
                >
                  Privacy Policy (POPIA)
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBookTour}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Book an Academy Tour →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Inquiries
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-white transition">
                  {ACADEMY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-white transition break-all">
                  {ACADEMY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 block">{ACADEMY_INFO.address}</span>
                  <a
                    href={ACADEMY_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Get directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {ACADEMY_INFO.fullName} (LCM Academy). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => navigateTo('privacy')}
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => navigateTo('terms')}
              className="hover:text-slate-300 transition"
            >
              Terms of Enrolment
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition text-slate-400"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
