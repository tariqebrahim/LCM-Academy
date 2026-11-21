import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, ShieldAlert, Clock, Utensils } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';

interface TermsPageProps {
  onBackToHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/90 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
            <span>Academy Guidelines & Parent Partnership</span>
            <span aria-hidden="true">·</span>
            <span>Policy Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions of Enrolment
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Clear standards, health policies, fee terms, and expectations for families at Little Creative Minds Academy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          {/* Medical Protocol Section */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-700" />
              1. Medical Care & Medication Administration Policy
            </h2>
            <p className="text-slate-600">
              In accordance with this policy:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                Staff will <strong>never</strong> administer over-the-counter paracetamol, cough syrups, antihistamines, or vitamins without an authentic prescription and a signed medical consent form.
              </li>
              <li>
                All prescription medication must be delivered in its original container, clearly labeled by the pharmacy with the child’s name, dosage, and administering doctor’s directions.
              </li>
              <li>
                Parents must sign the daily medicine register upon morning drop-off, noting exact timings and dosage.
              </li>
              <li>
                Both educators and assistants are certified First-Aid Qualified to handle minor scrapes, CPR, and basic life support while contacting emergency services and parents.
              </li>
            </ul>
          </section>

          {/* Meals & Fee Inclusions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-emerald-700" />
              2. Fees, Meals, & Extra Murals
            </h2>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1 text-xs">
              <p className="font-bold text-sm">Meals Included in Regular Monthly Fees:</p>
              <p>
                Breakfast and freshly cooked lunch are included in your standard tuition fees. Parents do not need to pack cooked food.
              </p>
            </div>

            {/* Provisional Pricing Table */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden text-xs">
              <div className="bg-slate-100 px-4 py-2.5 font-bold text-slate-800">
                <span>Provisional Fee Schedule & Special Rates</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                    <tr>
                      <th className="p-3">Plan</th>
                      <th className="p-3">Original Price</th>
                      <th className="p-3">Special Promotional Price</th>
                      <th className="p-3">Special Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Full day, single child</td>
                      <td className="p-3 line-through text-slate-400">R2 800 per month</td>
                      <td className="p-3 font-bold text-blue-700">R1 500 per month</td>
                      <td className="p-3">First 3 months of enrolment</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Full day, siblings</td>
                      <td className="p-3 line-through text-slate-400">R4 500 per month</td>
                      <td className="p-3 font-bold text-blue-700">R3 000 per month</td>
                      <td className="p-3">First 3 months of enrolment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 bg-amber-50 text-amber-950 text-[11px] border-t border-amber-200">
                <strong>IMPORTANT:</strong> The figures above are provisional. The academy will send an updated fee document. Final prices will be provided in writing upon application.
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Fee Payment Schedule:</strong> Daycare tuition fees are payable strictly in advance on or before the 1st of every calendar month.
              </li>
              <li>
                <strong>Extra Murals Minimum Cohort:</strong> Aftercare and elective extra murals (such as karate-inclined self-defence) run when at least <strong>5 children enrol</strong>. Extra murals are invoiced separately.
              </li>
              <li>
                <strong>Kiddies Karate:</strong> Foundational Kiddies Karate lessons are integrated directly into our daily routine as part of gross-motor development at no extra cost.
              </li>
            </ul>
          </section>

          {/* Operating Hours & Attendance */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-700" />
              3. Operating Hours, Drop-Off & Collection
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Academy Hours:</strong> Monday to Thursday: 07:30 to 17:30, Friday: 07:30 to 17:00. Closed on recognized South African Public Holidays and annual December closure.
              </li>
              <li>
                <strong>Full-Day Collection:</strong> By 17:30 latest (Monday to Thursday) and by 17:00 latest (Friday). Prompt pickup respects our educators and staff. Late collection fees may be levied for recurring delays.
              </li>
              <li>
                <strong>Security & Child Handover:</strong> Children are released strictly to authorized parents, legal guardians, or pre-registered emergency contacts with verified identification.
              </li>
            </ul>
          </section>

          {/* Sick Child Protocol */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              4. Sick Child & Infectious Illness Policy
            </h2>
            <p>
              To safeguard the health of babies, toddlers, and our educators, children who exhibit symptoms of contagious illness (fever over 38°C, vomiting, diarrhoea, unexplained rashes, or eye infections) must be kept at home until they have been fever-free and symptom-free for at least 24 hours without medication.
            </p>
            <p>
              If a child falls ill during academy hours, the parent or emergency contact will be phoned immediately for collection within 60 minutes.
            </p>
          </section>

          {/* Class Size & Individual Attention */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Small Classes & Child-Centered Environment
            </h2>
            <p>
              We maintain intentional small class sizes to give every child one-on-one attention from 5 months through 5 years. Educators are qualified in Early Childhood Development (ECD), bringing evidence-based teaching and emotional warmth.
            </p>
          </section>

          {/* Notice Period & Termination */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Notice Period for Withdrawal
            </h2>
            <p>
              One full calendar month’s written notice (given on or before the 1st of the month) is required prior to withdrawing a child from Little Creative Minds Academy, or one month’s fees in lieu of notice.
            </p>
          </section>

          {/* Contact Confirmation */}
          <section className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span>Have questions about our terms? Reach out anytime at </span>
              <a href={`mailto:${ACADEMY_INFO.email}`} className="text-blue-700 font-bold hover:underline">
                {ACADEMY_INFO.email}
              </a>
            </div>
            <button
              type="button"
              onClick={onBackToHome}
              className="text-xs font-bold text-slate-700 hover:text-blue-700 underline"
            >
              Back to LCM Academy Home
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
