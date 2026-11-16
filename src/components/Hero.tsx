import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';
import { ActivePage } from '../types';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  onOpenBookTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage, onOpenBookTour }) => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-amber-50/20 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Decorative gentle background ambient glows matching logo hues */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
              <span className="text-blue-700">Established 2016</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700">10+ Years ECD Experience</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-amber-700">Ages 5 Months – 5 Years</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Where little minds learn best through{' '}
              <span className="text-blue-700">
                safety, love
              </span>{' '}
              and freedom to create.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-slate-900 font-semibold">{ACADEMY_INFO.fullName}</strong>. A home-based daycare where children are treated as part of the family, laying solid foundations so every child enters formal school with unshakeable confidence.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenBookTour}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>Book an Academy Tour</span>
              </button>

              <a
                href="#who-we-are"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-colors"
              >
                <span>Explore Academy</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Hero Visual: Classroom & Nursery Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group bg-slate-100">
              <img
                src="/assets/aistudio/83761_b72d8b44.jpg"
                alt="Little Creative Minds Academy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
