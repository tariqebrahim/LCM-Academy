import React, { useState } from 'react';
import {
  Utensils,
  Sparkles,
  BookOpen,
  Award,
  Baby,
  Clock,
  Shield,
  Calendar,
  Check,
  ChevronDown,
  Smartphone,
  LogIn,
  ClipboardCheck,
  MessageSquare,
  Camera,
  ShieldCheck,
  CheckCircle2,
  Receipt,
} from 'lucide-react';
import { WHAT_WE_OFFER, PARENT_APP_INFO } from '../data/daycareData';
import { OfferingItem } from '../types';

export const WhatWeOffer: React.FC = () => {
  // Track open state for each tile dropdown independently
  const [openTiles, setOpenTiles] = useState<Record<string, boolean>>({
    'app-tile': true, // Keep the free app open by default or easily toggled
  });

  const toggleTile = (id: string) => {
    setOpenTiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderOfferingIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const renderAppBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'LogIn':
        return <LogIn className="w-4 h-4 text-emerald-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-4 h-4 text-blue-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-4 h-4 text-amber-600" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-purple-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      case 'Receipt':
        return <Receipt className="w-4 h-4 text-blue-600" />;
      case 'Smartphone':
      default:
        return <Smartphone className="w-4 h-4 text-sky-600" />;
    }
  };

  const getColorClasses = (color: OfferingItem['color']) => {
    switch (color) {
      case 'yellow':
        return {
          iconBg: 'bg-amber-100 text-amber-700',
          border: 'border-amber-200 hover:border-amber-300',
          badge: 'bg-amber-50 text-amber-800 border-amber-200',
        };
      case 'coral':
        return {
          iconBg: 'bg-rose-100 text-rose-700',
          border: 'border-rose-200 hover:border-rose-300',
          badge: 'bg-rose-50 text-rose-800 border-rose-200',
        };
      case 'green':
      case 'emerald':
        return {
          iconBg: 'bg-emerald-100 text-emerald-700',
          border: 'border-emerald-200 hover:border-emerald-300',
          badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        };
      case 'sky':
        return {
          iconBg: 'bg-sky-100 text-sky-700',
          border: 'border-sky-200 hover:border-sky-300',
          badge: 'bg-sky-50 text-sky-800 border-sky-200',
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-100 text-purple-700',
          border: 'border-purple-200 hover:border-purple-300',
          badge: 'bg-purple-50 text-purple-800 border-purple-200',
        };
      case 'blue':
      default:
        return {
          iconBg: 'bg-blue-100 text-blue-700',
          border: 'border-blue-200 hover:border-blue-300',
          badge: 'bg-blue-50 text-blue-800 border-blue-200',
        };
    }
  };

  return (
    <section id="what-we-offer" className="py-20 bg-slate-50/60 scroll-mt-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              <span>Comprehensive Care & Development</span>
              <span aria-hidden="true">·</span>
              <span>Holistic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Offer
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed text-base">
              Every detail at LCM Academy is tailored for safety, happiness, and growth. Click any tile below to drop down full information and inclusions.
            </p>
          </div>

          <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Standard Fee Inclusions
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              Extra Mural Options (Min 5)
            </span>
          </div>
        </div>

        {/* Simplified Tiles Grid with Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHAT_WE_OFFER.map((item) => {
            const isOpen = !!openTiles[item.id];
            const styles = getColorClasses(item.color);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs ${
                  isOpen ? 'border-blue-400 ring-2 ring-blue-500/10' : styles.border
                }`}
              >
                {/* Simplified Tile Heading Bar (Click to drop down) */}
                <button
                  type="button"
                  onClick={() => toggleTile(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl shrink-0 ${styles.iconBg}`}>
                      {renderOfferingIcon(item.icon)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-base sm:text-lg font-bold text-slate-900 truncate">
                          {item.title}
                        </span>
                        {item.includedInFees ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                            Included in Fees
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100 shrink-0">
                            Extra Mural
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 block font-medium">
                        {isOpen ? 'Click to hide details' : 'Click to view details'}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Dropdown Content with all information */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 border-t border-slate-100 bg-slate-50/40 space-y-3.5 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-slate-800 text-sm font-medium leading-relaxed">
                      {item.shortDesc}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.fullDesc}
                    </p>

                    {/* Specific notices for extra murals or potty training */}
                    {item.id === 'aftercare' || item.id === 'self-defence' ? (
                      <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-purple-900 text-xs">
                        <strong>Notice on Extra Murals:</strong> Elective extra mural activities run whenever at least <strong>5 children enrol</strong>. Invoiced separately from regular fees.
                      </div>
                    ) : null}

                    {item.id === 'potty-training' && (
                      <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs">
                        <strong>Home & Daycare Partnership:</strong> We communicate regularly with parents to align cues, timing, and positive reinforcement both at home and at daycare.
                      </div>
                    )}

                    {item.id === 'meals' && (
                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
                        <strong>Nutritious Daily Menu:</strong> Morning breakfast and fresh cooked lunch are always included. Dietary allergies strictly accommodated.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* New Free Parent App Tile (Simplified with dropdown & icon cards) */}
          <div
            className={`md:col-span-2 bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs ${
              openTiles['app-tile'] ? 'border-blue-400 ring-2 ring-blue-500/10' : 'border-blue-200 hover:border-blue-300'
            }`}
          >
            {/* App Tile Heading Bar (Click to drop down) */}
            <button
              type="button"
              onClick={() => toggleTile('app-tile')}
              aria-expanded={openTiles['app-tile']}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-blue-50/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-base sm:text-xl font-bold text-slate-900">
                      {PARENT_APP_INFO.heading}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                      Included in Fees
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {PARENT_APP_INFO.subtext}
                  </p>
                </div>
              </div>

              <div
                className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500 ${
                  openTiles['app-tile'] ? 'rotate-180 bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Dropdown Content: App benefits as icon cards */}
            {openTiles['app-tile'] && (
              <div className="px-5 pb-6 pt-2 sm:px-6 sm:pb-6 border-t border-slate-100 bg-gradient-to-br from-blue-50/30 via-slate-50/50 to-white space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 pb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    App Features & Parent Benefits
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-blue-100 shadow-2xs">
                    Free for all registered parents
                  </span>
                </div>

                {/* 8 Benefit Icon Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PARENT_APP_INFO.benefits.map((benefit) => (
                    <div
                      key={benefit.id}
                      className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0 mt-0.5">
                        {renderAppBenefitIcon(benefit.icon)}
                      </div>
                      <div className="text-xs text-slate-700 leading-snug">
                        {benefit.desc ? (
                          <>
                            <strong className="font-bold text-slate-900 block mb-0.5">
                              {benefit.title}:
                            </strong>
                            <span className="text-slate-600">{benefit.desc}</span>
                          </>
                        ) : (
                          <strong className="font-bold text-slate-900 block pt-1">
                            {benefit.fullText}
                          </strong>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
