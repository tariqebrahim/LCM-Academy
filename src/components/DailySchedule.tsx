import React, { useState } from 'react';
import {
  Sun,
  Sparkles,
  BookOpen,
  Moon,
  Apple,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { DAILY_SCHEDULE } from '../data/daycareData';

export const DailySchedule: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'learning' | 'activity' | 'meal' | 'rest' | 'routine'>('all');
  const [openTiles, setOpenTiles] = useState<Record<string, boolean>>({});

  const toggleTile = (key: string) => {
    setOpenTiles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredItems = DAILY_SCHEDULE.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'learning':
        return {
          icon: <BookOpen className="w-5 h-5 text-blue-700" />,
          iconBg: 'bg-blue-100 text-blue-700',
          border: 'border-blue-200 hover:border-blue-300',
          badgeBg: 'bg-blue-100/80 text-blue-800',
          label: 'Learning & Play',
        };
      case 'activity':
        return {
          icon: <Sparkles className="w-5 h-5 text-rose-700" />,
          iconBg: 'bg-rose-100 text-rose-700',
          border: 'border-rose-200 hover:border-rose-300',
          badgeBg: 'bg-rose-100/80 text-rose-800',
          label: 'Physical & Karate',
        };
      case 'meal':
        return {
          icon: <Apple className="w-5 h-5 text-amber-700" />,
          iconBg: 'bg-amber-100 text-amber-700',
          border: 'border-amber-200 hover:border-amber-300',
          badgeBg: 'bg-amber-100/80 text-amber-900',
          label: 'Meals & Snacks',
        };
      case 'rest':
        return {
          icon: <Moon className="w-5 h-5 text-purple-700" />,
          iconBg: 'bg-purple-100 text-purple-700',
          border: 'border-purple-200 hover:border-purple-300',
          badgeBg: 'bg-purple-100/80 text-purple-800',
          label: 'Rest & Nap Time',
        };
      case 'routine':
      default:
        return {
          icon: <Sun className="w-5 h-5 text-emerald-700" />,
          iconBg: 'bg-emerald-100 text-emerald-700',
          border: 'border-emerald-200 hover:border-emerald-300',
          badgeBg: 'bg-emerald-100/80 text-emerald-800',
          label: 'Daily Routine',
        };
    }
  };

  return (
    <section id="daily-programme" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            <span>Enriching Daily Experience</span>
            <span aria-hidden="true">·</span>
            <span>Available Throughout the Day</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Programmes Available Throughout the Day
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-base">
            Work cycle, circle time, sensory play, outside play, story time, music and movement, nap time and snack time. Click any tile below to drop down full programme details.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-100">
          <span className="text-xs font-semibold text-slate-500 mr-2">Filter by focus:</span>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Programmes ({DAILY_SCHEDULE.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('learning')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'learning'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Work Cycle & Learning
          </button>
          <button
            type="button"
            onClick={() => setFilter('activity')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'activity'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Karate & Physical Play
          </button>
          <button
            type="button"
            onClick={() => setFilter('meal')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'meal'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Meals & Nutrition
          </button>
          <button
            type="button"
            onClick={() => setFilter('routine')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'routine'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Routines & Circle Time
          </button>
          <button
            type="button"
            onClick={() => setFilter('rest')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filter === 'rest'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Rest & Stories
          </button>
        </div>

        {/* Simplified Dropdown Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const theme = getCategoryTheme(item.category);
            const isOpen = !!openTiles[item.title];

            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs ${
                  isOpen
                    ? 'border-blue-400 ring-2 ring-blue-500/10'
                    : item.highlight
                    ? 'border-blue-200 hover:border-blue-300'
                    : theme.border
                }`}
              >
                {/* Simplified Tile Heading Bar (Click to drop down) */}
                <button
                  type="button"
                  onClick={() => toggleTile(item.title)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl shrink-0 ${theme.iconBg}`}>
                      {theme.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-400 block font-medium mt-0.5">
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
                  <div className="px-5 pb-6 pt-3 sm:px-6 sm:pb-6 border-t border-slate-100 bg-slate-50/40 space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${theme.badgeBg}`}>
                        {theme.label}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                          {item.badge}
                        </span>
                      )}
                      {item.highlight && (
                        <span className="font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 text-[11px]">
                          Core Feature
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Included in Daily Experience</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
