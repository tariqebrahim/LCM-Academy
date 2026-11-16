import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Utensils,
  ShieldCheck,
  FileText,
  User,
  Heart,
  Baby,
  Clock,
  Sparkles,
  Download,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { ACADEMY_INFO, AGE_GROUPS } from '../data/daycareData';
import { EnrolmentFormData } from '../types';

interface EnrolmentPageProps {
  onBackToHome: () => void;
}

export const EnrolmentPage: React.FC<EnrolmentPageProps> = ({ onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const [formData, setFormData] = useState<EnrolmentFormData>({
    childFullName: '',
    childDob: '',
    childGender: 'Prefer not to say',
    ageGroup: '1-2 years',
    pottyTrained: 'in_progress',
    allergiesOrDietary: '',
    medicationConsentNeeded: false,
    medicationDetails: '',
    parentFullName: '',
    relationship: 'Mother',
    parentEmail: '',
    parentPhone: '',
    parentAltPhone: '',
    homeAddress: '',
    scheduleType: 'full_day',
    needsAftercare: true,
    extraMuralsInterest: ['Self-defence (Karate-inclined)'],
    intendedStartDate: '',
    specialNotes: '',
    acceptedTerms: false,
  });

  const toggleExtraMural = (mural: string) => {
    if (formData.extraMuralsInterest.includes(mural)) {
      setFormData({
        ...formData,
        extraMuralsInterest: formData.extraMuralsInterest.filter((m) => m !== mural),
      });
    } else {
      setFormData({
        ...formData,
        extraMuralsInterest: [...formData.extraMuralsInterest, mural],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `LCM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Page Header / Breadcrumb */}
      <div className="bg-white border-b border-slate-200/90 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
                <span>Admissions & Enrolment</span>
                <span aria-hidden="true">·</span>
                <span>Ages 5 Months – 5 Years</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Enrolment & Admissions
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Join our Little Creative Minds family. Complete our online enrolment application to reserve your child's spot.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl px-4 py-2.5 text-xs text-emerald-900 flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Small classes ensure high caregiver attention</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Step Guide Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-blue-700">Step 1</span>
            <h3 className="font-bold text-slate-900 text-sm">Online Application</h3>
            <p className="text-xs text-slate-500">
              Fill out the 4-step registration form with child, parent, and health details.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-blue-700">Step 2</span>
            <h3 className="font-bold text-slate-900 text-sm">Tour & Family Meeting</h3>
            <p className="text-xs text-slate-500">
              Visit our home-based daycare, meet Tasneem, and let your child explore.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-blue-700">Step 3</span>
            <h3 className="font-bold text-slate-900 text-sm">Documentation</h3>
            <p className="text-xs text-slate-500">
              Provide clinic/immunisation card copy, birth certificate, and parent IDs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold text-blue-700">Step 4</span>
            <h3 className="font-bold text-slate-900 text-sm">Welcome & Settling-in</h3>
            <p className="text-xs text-slate-500">
              Gentle transition days to help your little one feel completely safe and loved.
            </p>
          </div>
        </div>

        {/* Main Application Container */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Application Received Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Welcome to Little Creative Minds Academy!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.parentFullName}</strong>. We have received your enrolment application for <strong className="text-slate-900">{formData.childFullName}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Reference Number</span>
                <span className="font-mono font-bold text-blue-700">{refNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Child's Stage</span>
                <span>{formData.ageGroup}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Schedule</span>
                <span className="capitalize">{formData.scheduleType.replace('_', ' ')} (Breakfast & Lunch included)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Parent Contact</span>
                <span>{formData.parentPhone}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 text-left">
              <strong>Next Step:</strong> Tasneem will contact you within 24 to 48 hours to schedule your consultation visit and verify class capacity.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBackToHome}
                className="px-6 py-2.5 bg-blue-700 text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition"
              >
                Return to Home
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
              >
                Submit for Another Child
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Step navigation tabs */}
            <div className="grid grid-cols-4 border-b border-slate-200 text-center bg-slate-50/50">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`py-3.5 px-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  currentStep === 1
                    ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Baby className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">1. Child Details</span>
                <span className="sm:hidden">1. Child</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className={`py-3.5 px-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  currentStep === 2
                    ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">2. Parent / Guardian</span>
                <span className="sm:hidden">2. Parent</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className={`py-3.5 px-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  currentStep === 3
                    ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">3. Programme & Schedule</span>
                <span className="sm:hidden">3. Schedule</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className={`py-3.5 px-2 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  currentStep === 4
                    ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">4. Health & Consent</span>
                <span className="sm:hidden">4. Health</span>
              </button>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* STEP 1: Child Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Child Information
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      We care for children from 5 months up to 5 years.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Child's Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.childFullName}
                        onChange={(e) =>
                          setFormData({ ...formData, childFullName: e.target.value })
                        }
                        placeholder="e.g. Liam Parker"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.childDob}
                        onChange={(e) =>
                          setFormData({ ...formData, childDob: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Age Group Target *
                      </label>
                      <select
                        value={formData.ageGroup}
                        onChange={(e) =>
                          setFormData({ ...formData, ageGroup: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="5-12 months">5 – 12 Months (Little Seedlings nursery)</option>
                        <option value="1-2 years">1 – 2 Years (Tiny Explorers)</option>
                        <option value="2-3 years">2 – 3 Years (Creative Sprouts)</option>
                        <option value="3-4 years">3 – 4 Years (Junior Achievers)</option>
                        <option value="4-5 years">4 – 5 Years (Grade R Pioneers)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Potty Training Status *
                      </label>
                      <select
                        value={formData.pottyTrained}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            pottyTrained: e.target.value as any,
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="in_progress">In Progress (We work with you to reinforce)</option>
                        <option value="yes">Fully Potty Trained</option>
                        <option value="no">Not Yet (Nappies / Diapers)</option>
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1">
                        We partner with you to reinforce potty training at home and at daycare.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Food Allergies or Special Dietary Notes (Breakfast & lunch included)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.allergiesOrDietary}
                      onChange={(e) =>
                        setFormData({ ...formData, allergiesOrDietary: e.target.value })
                      }
                      placeholder="e.g. Dairy intolerance, egg allergy, vegetarian, Halal only..."
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-2.5 bg-blue-700 text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition"
                    >
                      Next: Parent Details →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Parent / Guardian */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Parent / Guardian Information
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Primary contact details for daily updates, notifications, and emergency contact.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Parent / Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentFullName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentFullName: e.target.value })
                        }
                        placeholder="e.g. Fatima Parker"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Relationship to Child *
                      </label>
                      <select
                        value={formData.relationship}
                        onChange={(e) =>
                          setFormData({ ...formData, relationship: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Legal Guardian">Legal Guardian</option>
                        <option value="Grandparent">Grandparent</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.parentPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentPhone: e.target.value })
                        }
                        placeholder="e.g. 072 123 4567"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.parentEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, parentEmail: e.target.value })
                        }
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Alternate Emergency Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.parentAltPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentAltPhone: e.target.value })
                        }
                        placeholder="e.g. Partner, grandparent or aunt"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Residential Home Suburb / Address
                      </label>
                      <input
                        type="text"
                        value={formData.homeAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, homeAddress: e.target.value })
                        }
                        placeholder="e.g. Southern Suburbs, Cape Town"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-2.5 bg-blue-700 text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition"
                    >
                      Next: Programme Options →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Programme Options */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Programme Selection & Inclusions
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Wholesome breakfast and hot cooked lunch are included in your standard academy fees.
                    </p>
                  </div>

                  {/* Schedule radio cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label
                      className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                        formData.scheduleType === 'full_day'
                          ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="schedule"
                        value="full_day"
                        checked={formData.scheduleType === 'full_day'}
                        onChange={() => setFormData({ ...formData, scheduleType: 'full_day' })}
                        className="mt-1"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">Full Day Programme</span>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                            Most Popular
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          Mon – Thurs: 07:30 – 17:30 | Fri: 07:30 – 17:00 · Includes breakfast, hot cooked lunch, afternoon snack, nap time & supervised free play.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                        formData.scheduleType === 'half_day'
                          ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="schedule"
                        value="half_day"
                        checked={formData.scheduleType === 'half_day'}
                        onChange={() => setFormData({ ...formData, scheduleType: 'half_day' })}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-bold text-slate-900 text-sm">Half Day Programme</span>
                        <p className="text-xs text-slate-600 mt-1">
                          07:30 – 13:00 · Includes morning breakfast, circle time, NCF work cycle, and full hot lunch before pickup.
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Provisional Pricing Reference Card */}
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs">
                        Provisional Monthly Fees (Breakfast & Hot Lunch Included):
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                        Launch Promotional Specials
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div className="p-2.5 rounded-xl bg-white border border-blue-100">
                        <span className="font-bold block text-slate-900">Full Day, Single Child:</span>
                        <span className="text-blue-700 font-extrabold text-sm">R1 500 / month</span>
                        <span className="text-[11px] text-slate-400 line-through ml-1.5">R2 800</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Applies for first 3 months of enrolment</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-blue-100">
                        <span className="font-bold block text-slate-900">Full Day, Siblings:</span>
                        <span className="text-blue-700 font-extrabold text-sm">R3 000 / month</span>
                        <span className="text-[11px] text-slate-400 line-through ml-1.5">R4 500</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Applies for first 3 months of enrolment</span>
                      </div>
                    </div>
                  </div>

                  {/* Extra murals interest */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Extra Murals & Electives (Runs with 5+ Enrolments)
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Daily Kiddies Karate is already included in your routine! In the afternoons, we also offer specialized extra murals:
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.extraMuralsInterest.includes('Self-defence (Karate-inclined)')}
                          onChange={() => toggleExtraMural('Self-defence (Karate-inclined)')}
                          className="mt-0.5 rounded text-blue-600"
                        />
                        <div>
                          <span className="font-semibold text-slate-900">
                            Self-Defence Extra Mural (Karate-inclined)
                          </span>
                          <p className="text-slate-500">
                            Taught by our qualified 3rd Dan black belt instructor with nearly 20 years karate experience. (Requires min 5 enrollees).
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.extraMuralsInterest.includes('Creative Art & Sensory Club')}
                          onChange={() => toggleExtraMural('Creative Art & Sensory Club')}
                          className="mt-0.5 rounded text-blue-600"
                        />
                        <div>
                          <span className="font-semibold text-slate-900">
                            Creative Art & Sensory Exploration Club
                          </span>
                          <p className="text-slate-500">
                            Extended clay modeling, canvas painting, and tactile sensory experiences.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Intended Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.intendedStartDate}
                        onChange={(e) =>
                          setFormData({ ...formData, intendedStartDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Any Special Notes or Transition Needs
                      </label>
                      <input
                        type="text"
                        value={formData.specialNotes}
                        onChange={(e) =>
                          setFormData({ ...formData, specialNotes: e.target.value })
                        }
                        placeholder="e.g. First time attending daycare, nap routine tips"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-2.5 bg-blue-700 text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition"
                    >
                      Next: Health & Consent →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Health & Medical Consent Policy */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Medical Care Policy & Consent
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our educators are first-aid qualified. Please review our strict medication protocol.
                    </p>
                  </div>

                  {/* Confirmed Medical Care Box */}
                  <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300/80 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                      <div className="text-xs text-amber-950 space-y-1.5">
                        <h4 className="font-bold text-sm text-slate-900">
                          Academy Medical Protocol:
                        </h4>
                        <p className="font-medium">
                          "Prescription medication is given only with written parent consent, for example an asthma pump. Our staff do not give any other medication."
                        </p>
                        <p className="text-slate-600">
                          All educators and assistants are First-Aid Qualified. In an emergency, emergency services and parents are notified immediately.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.medicationConsentNeeded}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            medicationConsentNeeded: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded text-blue-600"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          My child requires prescription medication during school hours (e.g. Asthma pump / Epipen)
                        </span>
                        <span className="text-slate-500">
                          If checked, you will supply written prescription dosage details and sign the medication register.
                        </span>
                      </div>
                    </label>

                    {formData.medicationConsentNeeded && (
                      <div className="pl-6">
                        <label className="block font-bold text-slate-700 mb-1">
                          Specify Prescription Medication & Dosage details:
                        </label>
                        <input
                          type="text"
                          value={formData.medicationDetails}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              medicationDetails: e.target.value,
                            })
                          }
                          placeholder="e.g. Ventolin inhaler 2 puffs when wheezing"
                          className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs"
                        />
                      </div>
                    )}

                    <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptedTerms}
                        onChange={(e) =>
                          setFormData({ ...formData, acceptedTerms: e.target.checked })
                        }
                        className="mt-0.5 rounded text-blue-600"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          I agree to the Academy Terms, Medical Consent, and Enrolment Policy *
                        </span>
                        <span className="text-slate-500">
                          I confirm that the details provided are accurate and that I understand the academy rules regarding medication, small class sizes, and fee inclusions.
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.acceptedTerms}
                      className={`px-8 py-3 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2 ${
                        formData.acceptedTerms
                          ? 'bg-blue-700 hover:bg-blue-800 text-white'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Submit Enrolment Application</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Day One Checklist & Required Documents */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-700" />
              <h3 className="text-base font-bold text-slate-900">
                Documents Required Upon Acceptance
              </h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Copy of Child's Birth Certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Copy of Child's Clinic Card / Immunisation Record</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Certified copy of Parent(s) or Guardian(s) South African ID or Passport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Signed Medical Consent Form (if prescription medication required)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="text-base font-bold text-slate-900">
                What to Pack in Your Child's Daycare Bag
              </h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>2 changes of labelled weather-appropriate clothing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Labelled water bottle or sippy cup (replenished fresh throughout the day)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Nappies / wet wipes and barrier cream (if not yet fully potty trained)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Sun hat for outdoor garden play and small cot blanket for nap time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
