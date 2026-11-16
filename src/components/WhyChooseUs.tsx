import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  Heart,
  BookOpen,
  Users,
  Smile,
  Baby,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Smartphone,
} from 'lucide-react';
import { WHY_CHOOSE_US, AGE_GROUPS } from '../data/daycareData';

export const WhyChooseUs: React.FC = () => {
  // Track open state for each dropdown tile
  const [openTiles, setOpenTiles] = useState<Record<string, boolean>>({});

  const toggleTile = (id: string) => {
    setOpenTiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'Shield':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-600 fill-current" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-amber-600" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-rose-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50/70 scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            <span>Peace of Mind For Every Parent</span>
            <span aria-hidden="true">·</span>
            <span>Verified Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-base">
            We know entrusting your little one to someone is one of parenthood’s biggest decisions. Click each heading below to drop down our core commitments, safety policies, and educator qualifications.
          </p>
        </div>

        {/* Simplified Dropdown Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {WHY_CHOOSE_US.map((item) => {
            const isOpen = !!openTiles[item.id];

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs ${
                  isOpen
                    ? 'border-blue-400 ring-2 ring-blue-500/10'
                    : item.highlight
                    ? 'border-blue-200 hover:border-blue-300'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Simplified Tile Header (Click to drop down) */}
                <button
                  type="button"
                  onClick={() => toggleTile(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-3.5 transition-colors hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                      {getIcon(item.icon)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {item.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                        {isOpen ? 'Click to hide details' : 'Click to view details'}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Dropdown Content with full information */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/40 space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {item.description}
                    </p>

                    {/* Specific callout notices */}
                    {item.id === 'medical' && (
                      <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 text-xs font-medium">
                        <strong>Safety Assurance:</strong> Strict policy for the safety of every child. No over-the-counter medication is ever administered.
                      </div>
                    )}

                    {item.id === 'owners-background' && (
                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-medium">
                        <strong>Discipline & Warmth:</strong> Karate discipline meets gentle, nurturing home-based early childhood care.
                      </div>
                    )}

                    {item.id === 'exp' && (
                      <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs font-medium">
                        <strong>Trusted Care:</strong> Loving, family-centered early learning in Parow since 2016.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Age Groups & Developmental Journey */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              <span>Developmental Progression</span>
              <span aria-hidden="true">·</span>
              <span>Ages 5 Months to 5 Years</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Cared for From 5 Months to 5 Years
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Our mixed-age classroom brings children of every age together to learn and grow side by side. In our blended setting, older children naturally take on leadership roles, while younger ones gain confidence through play and friendship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {AGE_GROUPS.map((group, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-4.5 border ${group.color} flex flex-col justify-between space-y-3 transition`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide opacity-80">
                    Stage {idx + 1}
                  </span>
                  <h4 className="text-base font-bold mt-0.5">{group.title}</h4>
                  <p className="text-xs font-semibold mt-0.5 opacity-90">{group.range}</p>
                  <p className="text-xs mt-3 leading-relaxed opacity-95">
                    {group.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Daycare App Included Tile */}
          <div className="rounded-xl p-5 border border-blue-200 bg-blue-50/60 text-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900">
                    Daycare App Included
                  </h4>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Included in Fees
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Our daycare app is free for parents and included in your fees — keeping you connected with daily activity records, meal updates, photos, secure check-ins, and in-app teacher chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
