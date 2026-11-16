import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ChevronDown, Camera } from 'lucide-react';

export const GALLERY_IMAGES: string[] = [
  '/assets/aistudio/83761_b72d8b44.jpg',
  '/assets/aistudio/83758_1aa076d1.jpg',
  '/assets/aistudio/83769_bfaa272c.jpg',
  '/assets/aistudio/85483_0d3be1f2.jpg',
  '/assets/aistudio/85482_84ed3c51.jpg',
  '/assets/aistudio/85481_d01b57b4.jpg',
  '/assets/aistudio/83771_f84d2608.jpg',
  '/assets/aistudio/83774_38dc88b5.jpg',
  '/assets/aistudio/83775_7e0d0f1c.jpg',
  '/assets/aistudio/83772_3cea9896.jpg',
  '/assets/aistudio/83773_fd908a7e.jpg',
];

export const GallerySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Automatically expand if navigated directly to #gallery
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.toLowerCase() === '#gallery') {
        setIsOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-slate-50/70 scroll-mt-20 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dropdown Card */}
        <div
          className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs ${
            isOpen ? 'border-blue-400 ring-2 ring-blue-500/10' : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          {/* Dropdown Header Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 shrink-0">
                <Camera className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 truncate">
                  Gallery
                </h2>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-0.5">
                  {isOpen ? 'Click to collapse gallery' : 'Click to view photos'}
                </span>
              </div>
            </div>

            <div
              className={`w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500 ${
                isOpen ? 'rotate-180 bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50'
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </button>

          {/* Collapsible Photos Grid - Pure Photos, No Text */}
          {isOpen && (
            <div className="p-6 sm:p-8 pt-2 border-t border-slate-100 bg-slate-50/30 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
                {GALLERY_IMAGES.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 text-left cursor-pointer"
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="p-2.5 rounded-full bg-white/90 text-slate-800 shadow-sm backdrop-blur-xs">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveIdx(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) =>
                prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute left-3 sm:left-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) =>
                prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute right-3 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[activeIdx]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain select-none"
            />
            {/* Simple image counter */}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-xs">
              {activeIdx + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
