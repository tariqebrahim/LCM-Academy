import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  ChevronDown,
  Navigation,
  ExternalLink,
  Instagram,
  Facebook,
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';
import { EnquiryForm } from './EnquiryForm';
import { WhatsAppIcon } from './SocialLinks';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are meals really included in the standard fees?',
      a: 'Yes, absolutely! Wholesome breakfast and freshly cooked hot lunch are included in your monthly fees. You do not need to pack daily cooked lunches. We accommodate any allergies declared during enrolment.',
    },
    {
      q: 'How does Kiddies Karate fit into a toddler’s day?',
      a: 'Kiddies Karate is woven into our daily routine as playful gross-motor and balance exercises. Led by martial arts practitioners, it teaches focus, spatial awareness, and gentle discipline suited to ages 5 months to 5 years.',
    },
    {
      q: 'What is your strict policy on administering medicine?',
      a: 'For your child’s absolute safety, prescription medication is given only with explicit written parent consent (for example, an asthma pump or prescription antibiotic course). Our staff do not give any other over-the-counter medication.',
    },
    {
      q: 'How do extra murals work, such as Self-Defence?',
      a: 'Extra murals (including our karate-inclined self-defence taught by a qualified instructor) are available in the afternoon aftercare cycle. Extra murals commence as soon as at least 5 children enrol for the term.',
    },
    {
      q: 'How does potty training support work?',
      a: 'We work closely in partnership with parents. We follow your home routine, praise milestones, and assist patiently throughout the day with regular potty trips.',
    },
  ];


  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            <span>Get in Touch & Visit Us</span>
            <span aria-hidden="true">·</span>
            <span>Cape Town Daycare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Visit or Ask a Question
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-base">
            We’d love to welcome you and your little one to tour our home-based daycare, meet Tasneem and the team, and experience the warm family atmosphere in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Academy Direct Contacts
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:text-blue-700 transition group"
                >
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Phone Call</span>
                    <span className="font-bold text-slate-800 group-hover:text-blue-700">
                      {ACADEMY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={ACADEMY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/5 transition group"
                >
                  <div className="p-2 rounded-lg bg-[#25D366]/15 text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="grow">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium block">WhatsApp Messaging</span>
                      <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded">Fast Reply</span>
                    </div>
                    <span className="font-bold text-slate-900 group-hover:text-[#25D366] block">
                      Chat directly with Tasneem
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:text-blue-700 transition group"
                >
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Admissions</span>
                    <span className="font-bold text-slate-800 group-hover:text-blue-700">
                      {ACADEMY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Social media presence card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2.5">
                  <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Follow Our Socials
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={ACADEMY_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold transition"
                    >
                      <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                      <span className="truncate">@lcm_academy</span>
                    </a>
                    <a
                      href={ACADEMY_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition"
                    >
                      <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/80">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Academy Hours</span>
                    <span className="font-semibold text-slate-800 block text-xs sm:text-sm">
                      Mon – Thurs: 07:30 – 17:30
                    </span>
                    <span className="font-semibold text-slate-800 block text-xs sm:text-sm">
                      Fri: 07:30 – 17:00
                    </span>
                    <span className="text-xs font-semibold text-blue-700 block mt-1">
                      Academy Tours: Saturdays, 10:00 – 12:00 (30-min sessions)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2.5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="grow">
                      <span className="text-xs text-slate-500 font-medium block">Academy Address</span>
                      <span className="font-bold text-slate-900 block text-sm">
                        {ACADEMY_INFO.address}
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href={ACADEMY_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="p-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-blue-700" />
                  <span>Google Map Location</span>
                </div>
                <a
                  href={ACADEMY_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-64 bg-slate-100">
                <iframe
                  title="LCM Academy Google Map - 08 Couch Crescent, Parow, Cape Town 7500"
                  src={ACADEMY_INFO.mapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="truncate pr-2">08 Couch Crescent, Parow, Cape Town 7500</span>
                <a
                  href={ACADEMY_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:underline shrink-0"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Specification Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>

        {/* Common Parent Questions Accordion */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
              <span>Parent FAQ</span>
              <span aria-hidden="true">·</span>
              <span>Common Questions</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-blue-700 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4.5 pb-4.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-white pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
