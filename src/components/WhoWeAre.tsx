import React from 'react';
import { Heart, Award, Shield, Sparkles, BookOpen } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            <span>Our Story & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A loving, family-centered foundation where every child is individually known, nurtured, and empowered to flourish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Tasneem's Story & Philosophy (Exact prompt wording) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/70">
              <p className="text-slate-800 text-lg sm:text-xl font-medium">
                Tasneem founded Little Creative Minds Academy in 2016 with one belief: every child learns best when they feel safe, loved, and free to create.
              </p>
            </div>

            <p>
              With ten years of experience as an Early Childhood Development practitioner, she built a home-based daycare where children are treated as part of the family.
            </p>

            <p>
              Tasneem is passionate about laying solid foundations before school, so that every child enters formal education with confidence. She believes these early years shape not only a child's success in school but also the kind of contribution they will make to society.
            </p>

            <p>
              Tasneem believes every day at Little Creative Minds is designed to help children explore, express themselves, and grow at their own pace, in a warm environment where they are known and valued.
            </p>

            {/* Core Values checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Safe & Loved First</h4>
                  <p className="text-xs text-slate-500">A child who feels emotionally secure learns with boundless curiosity.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Freedom to Create</h4>
                  <p className="text-xs text-slate-500">Unlocking imagination through sensory play and self-expression.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Solid School Foundations</h4>
                  <p className="text-xs text-slate-500">Full readiness for Grade R with confidence and cognitive grit.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-purple-100 text-purple-700 shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Discipline & Respect</h4>
                  <p className="text-xs text-slate-500">Martial arts principles of respect, body balance, and mindfulness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              {/* Founder Portrait */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-md bg-white">
                <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/aistudio/85476_d1e853f7.jpg"
                    alt="Tasneem - Founder and Head ECD Practitioner at LCM Academy"
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
              </div>

              {/* Founder Qualifications & Martial Arts Background */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Leadership Credentials
                </h4>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <Award className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">ECD-Qualified Practitioner:</span>
                      <p className="text-slate-600 mt-0.5">
                        10 years of specialized Early Childhood Development experience nurturing toddlers and young learners since 2016.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <Shield className="w-4 h-4 text-coral-600 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">3rd Dan Black Belt Instructor:</span>
                      <p className="text-slate-600 mt-0.5">
                        Nearly 20 years of karate experience, bringing structured martial discipline, self-defence fundamentals, and physical coordination to little ones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80">
                    <Heart className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Home-Based Care Model:</span>
                      <p className="text-slate-600 mt-0.5">
                        Treated as part of the family, not a number, ensuring your child experiences warmth, security, and individualized pacing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
