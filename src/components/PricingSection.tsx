import React from 'react';
import {
  CheckCircle2,
  Utensils,
  Sparkles,
  Clock,
  Calendar,
} from 'lucide-react';
import { PRICING_PLANS } from '../data/daycareData';
import { ActivePage } from '../types';

interface PricingSectionProps {
  setActivePage: (page: ActivePage) => void;
  onOpenBookTour: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  setActivePage,
  onOpenBookTour,
}) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50/70 scroll-mt-20 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fees & Enrolment Plans
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-base">
            Honest, all-inclusive early education. Monthly fees include nutritious morning breakfast, freshly cooked hot lunch, and daily Kiddies Karate.
          </p>
        </div>

        {/* Registration Fees Upon Acceptance Grid */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Registration Fees Upon Acceptance
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-200 shadow-sm flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'border-blue-300 ring-2 ring-blue-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {plan.badge && (
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {plan.plan}
                </h4>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-100 my-4 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {plan.specialPrice}
                    </span>
                  </div>

                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-400 line-through font-medium">
                        {plan.originalPrice}
                      </span>
                      {plan.specialPeriod && (
                        <>
                          <span className="text-slate-300">·</span>
                          <span className="font-semibold text-blue-700">
                            {plan.specialPeriod}
                          </span>
                        </>
                      )}
                    </div>
                  )}

                  {plan.note && (
                    <p className="text-xs font-bold text-emerald-700 pt-1">
                      ✓ {plan.note}
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Book a Tour */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenBookTour}
                  className="w-full py-3.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Book a Tour for this Plan</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Information Underneath the Pricing Packages */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">
              Included With All Enrolments
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything your child needs for a healthy, balanced, and active day:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4.5 rounded-2xl bg-blue-50/70 border border-blue-100/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                Full Daycare
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                7:30 to 5:30 Mon to Thurs and Fri 7:30 to 5:00
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-100/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                Breakfast
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Wholesome breakfast included
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                Lunch
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Fresh hot cooked lunch included
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-rose-50/70 border border-rose-100/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-900 block">
                Kiddies Fitness
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Karate inclined movement & balance
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-900">Full daycare 7:30 to 5:30 Mon to Thurs and Fri 7:30 to 5:00</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-900">Breakfast</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-900">Lunch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-900">Kiddies fitness – karate inclined</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenBookTour}
              className="py-3 px-5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book an Academy Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
