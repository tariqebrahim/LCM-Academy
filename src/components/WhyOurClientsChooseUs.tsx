import React from 'react';
import { Star, Quote, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  highlight: string;
  paragraphs: string[];
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Zainab Siddique',
    rating: 5,
    tag: 'Parent of 2 (Attended from 1 yr & 5 months)',
    highlight: '“Choosing Little Creative Minds Academy was the best decision I ever made for my family.”',
    paragraphs: [
      'Choosing Little Creative Minds Academy was the best decision I ever made for my family. They have practically raised my children. My son started here when he was just one year old and is now 10 and my daughter started at 5 months old and is now 4.',
      'As a parent I never have to worry. They provided my children with a truly great educational foundation. My boy is consistently at the top of his class, and my daughter already knows how to write at just 4 years old – she is showing how intelligent she is thanks to their early guidance.',
      'It is a thoroughly safe, neat, and tidy environment. Every day when my husband fetches our daughter she is clean and well-looking. I absolutely love their app, which keeps parents updated throughout the day on all their activities and meals. The teachers are incredibly caring and dedicated.',
      'I cannot recommend Little Creative Minds Academy enough to any parent looking for a safe, loving space for their little ones.',
    ],
  },
  {
    name: 'Moenieba Toyer',
    rating: 5,
    tag: 'Parent of Daughter at LCM Academy',
    highlight: '“It gives me peace of mind knowing that she is in a safe and caring environment where she can learn and grow.”',
    paragraphs: [
      'My daughter has learnt a lot since the time she has been there. The teachers are caring, patient and dedicated to the children. I appreciate the love, care and attention they give to my daughter.',
      'It gives me peace of mind knowing that she is in a safe and caring environment where she can learn and grow. Definitely recommend LCM Academy to all parents. Thank you to all the teachers for the wonderful work you do!',
    ],
  },
  {
    name: 'Meagan Leukes',
    rating: 5,
    tag: 'Parent of 2 LCM Alumni',
    highlight: '“Teacher Neemi embraced my children as their own, giving me complete peace of mind.”',
    paragraphs: [
      'Choosing Little Creative Minds Academy was one of the best decisions I made for my family. My daughter attended from the age of one, and my son was also cared for by Teacher Neemi.',
      'From day one, my children were welcomed into a safe, loving, and nurturing environment that truly felt like a home away from home. Teacher Neemi embraced my children as their own, giving me complete peace of mind while they were in her care.',
      'Even years later, my children still speak fondly of Teacher Neemi and the happy memories they made at Little Creative Minds Academy. The love, care, and strong foundation they received during their early years have left a lasting impact on our family.',
      'I highly recommend Little Creative Minds Academy to any parent looking for a caring, family-orientated daycare where children are loved, supported, and encouraged to thrive.',
    ],
  },
];

export const WhyOurClientsChooseUs: React.FC = () => {
  return (
    <section
      id="why-our-clients-choose-us"
      className="py-20 bg-white scroll-mt-20 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Parent Testimonials & Real Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Our Clients Choose Us
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-base">
            Heartfelt words from parents who entrusted their babies and toddlers to Teacher Neemi and our dedicated educators.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating and Quote Badge */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-extrabold text-slate-900">
                      5.0
                    </span>
                  </div>
                  <span className="p-1.5 rounded-full bg-amber-100/70 text-amber-700">
                    <Quote className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Parent Information */}
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="text-xs text-blue-700 font-semibold block mt-0.5">
                    {item.tag}
                  </span>
                </div>

                {/* Testimonial Paragraphs */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {item.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Verified Parent Trust Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200/70 flex items-center gap-2 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified LCM Parent Experience</span>
              </div>
            </div>
          ))}
        </div>

        {/* Below the Testimonials: Karate Dojo Image & Announcement */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-6 sm:p-10 shadow-xl overflow-hidden border border-slate-800">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Looking Ahead · Our Growth Journey</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Karate Dojo Coming in 2027
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Discipline Today · A Brighter Tomorrow. Expanding our martial arts roots and youth development into a dedicated community dojo.
            </p>
          </div>

          {/* Attached Image Display */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
            <img
              src="/assets/aistudio/Designer__4__0cecfd4a.png"
              alt="Karate Dojo Coming in 2027 - Discipline Today, A Brighter Tomorrow"
              className="w-full h-auto object-contain block mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
