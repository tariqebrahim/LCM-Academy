import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Send,
  User,
  Calendar,
  Clock,
  Baby,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Mail,
} from 'lucide-react';
import {
  ACADEMY_INFO,
  TOUR_OPTIONS,
  TOUR_TIME_SLOTS,
  getUpcomingSaturdays,
} from '../data/daycareData';
import { submitFormToAcademyEmail } from '../utils/formSubmission';

export interface ChildEnquiry {
  firstName: string;
  sex: string;
  ageYears: string;
  ageMonths: string;
}

export interface EnquiryFormData {
  parentFullName: string;
  cellNumber: string;
  emailAddress: string;
  suburb: string;
  secondParentName: string;
  numberOfChildren: number;
  children: ChildEnquiry[];
  preferredStartDate: string;
  typeOfCare: string;
  interests: {
    daycarePlaces: boolean;
    academyDojoWaitlist: boolean;
  };
  hearAboutUs: string;
  questionsOrComments: string;
  bookAcademyTour: boolean;
  tourOption: string;
  tourDate: string;
  tourTimeSlot: string;
  consentPopia: boolean;
  consentConfidentialPack: boolean;
}

const defaultChild: ChildEnquiry = {
  firstName: '',
  sex: '',
  ageYears: '1',
  ageMonths: '0',
};

export interface EnquiryFormProps {
  onSuccessCallback?: () => void;
  isTourBooking?: boolean;
  initialTourOption?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSuccessCallback,
  isTourBooking = false,
  initialTourOption = TOUR_OPTIONS[0],
}) => {
  const upcomingSaturdays = useMemo(() => getUpcomingSaturdays(12), []);

  const [formData, setFormData] = useState<EnquiryFormData>({
    parentFullName: '',
    cellNumber: '',
    emailAddress: '',
    suburb: '',
    secondParentName: '',
    numberOfChildren: 1,
    children: [{ ...defaultChild }],
    preferredStartDate: '',
    typeOfCare: '',
    interests: {
      daycarePlaces: true,
      academyDojoWaitlist: false,
    },
    hearAboutUs: '',
    questionsOrComments: '',
    bookAcademyTour: isTourBooking,
    tourOption: initialTourOption,
    tourDate: upcomingSaturdays[0]?.value ?? '',
    tourTimeSlot: '',
    consentPopia: false,
    consentConfidentialPack: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [formError, setFormError] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [emailDelivered, setEmailDelivered] = useState(false);

  const handleNumChildrenChange = (count: number) => {
    const safeCount = Math.max(1, Math.min(count, 6));
    const currentChildren = [...formData.children];
    if (safeCount > currentChildren.length) {
      for (let i = currentChildren.length; i < safeCount; i++) {
        currentChildren.push({ ...defaultChild });
      }
    } else if (safeCount < currentChildren.length) {
      currentChildren.splice(safeCount);
    }
    setFormData({
      ...formData,
      numberOfChildren: safeCount,
      children: currentChildren,
    });
  };

  const updateChild = (index: number, field: keyof ChildEnquiry, value: string) => {
    const updated = [...formData.children];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setFormData({ ...formData, children: updated });
  };

  const selectedSaturdayLabel =
    upcomingSaturdays.find((s) => s.value === formData.tourDate)?.label ?? formData.tourDate;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (formData.bookAcademyTour) {
      const validSaturday = upcomingSaturdays.some((sat) => sat.value === formData.tourDate);
      const validSlot = (TOUR_TIME_SLOTS as readonly string[]).includes(formData.tourTimeSlot);
      if (!validSaturday) {
        setFormError('Please select an available Saturday for your academy tour.');
        return;
      }
      if (!validSlot) {
        setFormError('Please select a 30-minute tour session between 10:00 AM and 12:00 PM.');
        return;
      }
    }

    if (!formData.consentPopia || !formData.consentConfidentialPack) {
      setFormError('Please accept both consent checkboxes to proceed.');
      return;
    }

    const prefix = formData.bookAcademyTour ? 'LCM-TOUR' : 'LCM-ENQ';
    const ref = `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    const childrenSummary = formData.children
      .map(
        (c, idx) =>
          `Child ${idx + 1}: ${c.firstName || 'N/A'}${c.sex ? ` (${c.sex})` : ''}, ${c.ageYears} yr(s) ${c.ageMonths} mo(s)`
      )
      .join(' | ');

    const interestsList = [
      formData.interests.daycarePlaces ? 'Daycare places' : '',
      formData.interests.academyDojoWaitlist ? 'Academy Dojo (2027) waitlist' : '',
    ]
      .filter(Boolean)
      .join(', ');

    const fields: Record<string, string> = {
      Reference: ref,
      'Form Type': formData.bookAcademyTour ? 'Saturday Academy Tour Booking' : 'Parent Enquiry Form',
      ...(formData.bookAcademyTour
        ? {
            'Tour Option': formData.tourOption,
            'Tour Date (Saturday)': selectedSaturdayLabel,
            '30-Minute Session': formData.tourTimeSlot,
          }
        : {}),
      'Parent / Guardian Name': formData.parentFullName,
      'Cell Number': formData.cellNumber,
      'Email Address': formData.emailAddress,
      Suburb: formData.suburb || 'Not provided',
      'Second Parent / Guardian': formData.secondParentName || 'Not provided',
      'Number of Children': String(formData.numberOfChildren),
      'Children Details': childrenSummary,
      'Preferred Start Date': formData.preferredStartDate || 'Not specified',
      'Type of Care': formData.typeOfCare || 'Not specified',
      Interests: interestsList || 'None selected',
      'How Did You Hear About Us': formData.hearAboutUs || 'Not provided',
      'Questions or Comments': formData.questionsOrComments || 'None',
      'POPIA Consent': 'Confirmed',
      'Confidential Pack Consent': 'Confirmed',
    };

    const subject = formData.bookAcademyTour
      ? `Academy Tour Booking (${formData.tourOption}) - ${formData.parentFullName} [${ref}]`
      : `New Daycare Enquiry - ${formData.parentFullName} [${ref}]`;

    setIsSubmitting(true);
    const result = await submitFormToAcademyEmail({
      subject,
      replyTo: formData.emailAddress,
      fields,
    });
    setIsSubmitting(false);

    setReferenceCode(ref);
    setMailtoUrl(result.mailtoUrl);
    setEmailDelivered(result.delivered);

    if (!result.delivered) {
      setFormError(
        result.errorMessage ||
          `Unable to reach the automated email relay right now. Please click "Send via Email App" below to send your submission directly to ${ACADEMY_INFO.email}.`
      );
      return;
    }

    setSubmitted(true);
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  const resetForm = () => {
    setFormData({
      parentFullName: '',
      cellNumber: '',
      emailAddress: '',
      suburb: '',
      secondParentName: '',
      numberOfChildren: 1,
      children: [{ ...defaultChild }],
      preferredStartDate: '',
      typeOfCare: '',
      interests: {
        daycarePlaces: true,
        academyDojoWaitlist: false,
      },
      hearAboutUs: '',
      questionsOrComments: '',
      bookAcademyTour: isTourBooking,
      tourOption: initialTourOption,
      tourDate: upcomingSaturdays[0]?.value ?? '',
      tourTimeSlot: '',
      consentPopia: false,
      consentConfidentialPack: false,
    });
    setFormError('');
    setMailtoUrl('');
    setEmailDelivered(false);
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 transition-all">
      {submitted ? (
        <div className="py-10 text-center space-y-6 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {formData.bookAcademyTour ? 'Saturday Academy Tour Booked' : 'Enquiry Received'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Thank You, {formData.parentFullName}!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your {formData.bookAcademyTour ? 'academy tour booking' : 'enquiry'} for{' '}
              <strong className="text-slate-900">
                {formData.children.map((c) => c.firstName || 'your child').join(', ')}
              </strong>{' '}
              has been sent to{' '}
              <strong className="text-blue-700">{ACADEMY_INFO.email}</strong>. Tasneem will contact you at{' '}
              <strong className="text-slate-900">{formData.cellNumber}</strong> shortly with confirmation and our Parent Information Pack.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 text-slate-700">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-medium">Reference:</span>
              <span className="font-mono font-bold text-blue-700">{referenceCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Sent To:</span>
              <span className="font-semibold text-emerald-700">
                {ACADEMY_INFO.email} {emailDelivered ? '(Delivered)' : ''}
              </span>
            </div>
            {formData.bookAcademyTour && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Tour Option:</span>
                  <span className="font-semibold text-slate-800">{formData.tourOption}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Tour Date:</span>
                  <span className="font-semibold text-slate-800">{selectedSaturdayLabel}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">30-Min Session:</span>
                  <span className="font-bold text-blue-700">{formData.tourTimeSlot}</span>
                </div>
              </>
            )}
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Children:</span>
              <span className="font-semibold text-slate-800">
                {formData.numberOfChildren} {formData.numberOfChildren === 1 ? 'child' : 'children'}
              </span>
            </div>
            {formData.typeOfCare && (
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Type of Care:</span>
                <span className="font-semibold text-slate-800">{formData.typeOfCare}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">POPIA Consent:</span>
              <span className="text-emerald-700 font-bold">Confirmed</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
            >
              {isTourBooking ? 'Book Another Tour' : 'Submit Another Enquiry'}
            </button>
            {mailtoUrl && (
              <a
                href={mailtoUrl}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Copy via Email App</span>
              </a>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header Banner */}
          <div className="border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isTourBooking ? 'Academy Tour Booking' : 'Admissions & Daycare Places'}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {isTourBooking ? 'Book an Academy Tour' : 'Parent Enquiry Form'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isTourBooking
                ? 'Tours take place strictly on Saturdays between 10:00 AM and 12:00 PM in 30-minute sessions.'
                : 'Please complete the details below. We review every enquiry personally to ensure class compatibility and availability.'}
            </p>
          </div>

          {/* Tour Scheduling Section (Mandatory in Tour Modal, Optional in General Enquiry) */}
          <div className="space-y-4">
            {!isTourBooking && (
              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border transition cursor-pointer ${
                  formData.bookAcademyTour
                    ? 'border-blue-400 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.bookAcademyTour}
                  onChange={(e) => {
                    setFormError('');
                    setFormData({
                      ...formData,
                      bookAcademyTour: e.target.checked,
                    });
                  }}
                  className="mt-0.5 rounded text-blue-600 w-4 h-4 shrink-0"
                />
                <span className="text-xs leading-snug">
                  <strong className="text-slate-900 block text-sm">
                    Schedule an Academy Tour
                  </strong>
                  <span className="text-slate-600 block mt-0.5">
                    Available on <strong>Saturdays only, 10:00 AM – 12:00 PM (30-minute sessions)</strong>.
                  </span>
                </span>
              </label>
            )}

            {formData.bookAcademyTour && (
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/80 pb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    <span>Saturday Tour Schedule</span>
                  </h4>
                  <span className="text-[11px] font-bold text-blue-800 bg-white px-2.5 py-1 rounded-md border border-blue-200">
                    Saturdays Only · 10:00 AM – 12:00 PM · 30-Min Sessions
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="tourOptionSelect"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Tour option <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="tourOptionSelect"
                      required={formData.bookAcademyTour}
                      value={formData.tourOption}
                      onChange={(e) =>
                        setFormData({ ...formData, tourOption: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {TOUR_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="tourSaturdaySelect"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Saturday date <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="tourSaturdaySelect"
                      required={formData.bookAcademyTour}
                      value={formData.tourDate}
                      onChange={(e) => {
                        setFormError('');
                        setFormData({ ...formData, tourDate: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {upcomingSaturdays.map((sat) => (
                        <option key={sat.value} value={sat.value}>
                          {sat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-slate-800 mb-2">
                    Select a 30-minute session (10:00 AM – 12:00 PM){' '}
                    <span className="text-rose-600">*</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {TOUR_TIME_SLOTS.map((slot) => {
                      const isSelected = formData.tourTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setFormError('');
                            setFormData({ ...formData, tourTimeSlot: slot });
                          }}
                          aria-pressed={isSelected}
                          className={`p-2.5 rounded-xl border text-center transition ${
                            isSelected
                              ? 'bg-blue-700 border-blue-700 text-white shadow-xs'
                              : 'bg-white border-slate-300 text-slate-800 hover:border-blue-400 hover:bg-blue-50/40'
                          }`}
                        >
                          <span className="flex items-center justify-center gap-1 text-xs font-bold">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{slot}</span>
                          </span>
                          <span
                            className={`block text-[10px] mt-0.5 ${
                              isSelected ? 'text-blue-100' : 'text-slate-500'
                            }`}
                          >
                            30 min · Saturday
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 1: Parent & Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>Parent / Guardian Information</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Parent or guardian full name <span className="text-rose-600">*</span>
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
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Cell number <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.cellNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cellNumber: e.target.value })
                  }
                  placeholder="e.g. +27 72 123 4567 or 072 123 4567"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Email address <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, emailAddress: e.target.value })
                  }
                  placeholder="parent@example.co.za"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Suburb or area <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.suburb}
                  onChange={(e) =>
                    setFormData({ ...formData, suburb: e.target.value })
                  }
                  placeholder="e.g. Rondebosch / Claremont / Athlone"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Second parent or guardian (name) <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.secondParentName}
                onChange={(e) =>
                  setFormData({ ...formData, secondParentName: e.target.value })
                }
                placeholder="e.g. Tariq Parker"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Section 2: Children Information (Dynamic repeat) */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Baby className="w-3.5 h-3.5 text-rose-500" />
                <span>Children Information</span>
              </h4>

              <div className="flex items-center gap-2">
                <label htmlFor="numChildrenSelect" className="text-xs font-bold text-slate-700 whitespace-nowrap">
                  How many children? <span className="text-rose-600">*</span>
                </label>
                <select
                  id="numChildrenSelect"
                  value={formData.numberOfChildren}
                  onChange={(e) => handleNumChildrenChange(parseInt(e.target.value, 10))}
                  className="px-3 py-1.5 text-xs font-bold bg-blue-50 border border-blue-200 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value={1}>1 child</option>
                  <option value={2}>2 children</option>
                  <option value={3}>3 children</option>
                  <option value={4}>4 children</option>
                  <option value={5}>5 children</option>
                  <option value={6}>6 or more children</option>
                </select>
              </div>
            </div>

            {/* Repeated Child Cards */}
            <div className="space-y-4">
              {formData.children.map((child, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1 border-b border-slate-200">
                    <span className="flex items-center gap-1.5 text-blue-700">
                      <Baby className="w-3.5 h-3.5" />
                      Child #{idx + 1}
                    </span>
                    <span className="text-slate-400 font-normal">Ages 5 months to 5 years</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    {/* First Name */}
                    <div className="sm:col-span-5">
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        First name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={child.firstName}
                        onChange={(e) => updateChild(idx, 'firstName', e.target.value)}
                        placeholder="Child's first name"
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    {/* Sex */}
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Sex <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <select
                        value={child.sex}
                        onChange={(e) => updateChild(idx, 'sex', e.target.value)}
                        className="w-full px-2.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select (optional)</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>

                    {/* Age: Two dropdowns (0 to 5 years; 0 to 11 months) */}
                    <div className="sm:col-span-4">
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Age (years & months) <span className="text-rose-600">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={child.ageYears}
                          onChange={(e) => updateChild(idx, 'ageYears', e.target.value)}
                          className="w-full px-2 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="0">0 years</option>
                          <option value="1">1 year</option>
                          <option value="2">2 years</option>
                          <option value="3">3 years</option>
                          <option value="4">4 years</option>
                          <option value="5">5 years</option>
                        </select>

                        <select
                          value={child.ageMonths}
                          onChange={(e) => updateChild(idx, 'ageMonths', e.target.value)}
                          className="w-full px-2 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          {Array.from({ length: 12 }, (_, m) => (
                            <option key={m} value={m.toString()}>
                              {m} {m === 1 ? 'month' : 'months'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Care Preferences & Interests */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Care Requirements & Interests</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Preferred start date <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredStartDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredStartDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Type of care <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <select
                  value={formData.typeOfCare}
                  onChange={(e) =>
                    setFormData({ ...formData, typeOfCare: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                >
                  <option value="">Select type of care...</option>
                  <option value="Full day">Full day (Mon–Thurs: 07:30 – 17:30, Fri: 07:30 – 17:00, meals included)</option>
                  <option value="Half day">Half day (07:30 – 13:00, meals included)</option>
                  <option value="Aftercare and extra murals">Aftercare and extra murals</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Interest checkboxes */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Interest <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200 cursor-pointer hover:border-amber-400 transition">
                  <input
                    type="checkbox"
                    checked={formData.interests.daycarePlaces}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        interests: {
                          ...formData.interests,
                          daycarePlaces: e.target.checked,
                        },
                      })
                    }
                    className="rounded text-blue-600 w-4 h-4"
                  />
                  <span className="font-semibold text-slate-800">Daycare places</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200 cursor-pointer hover:border-amber-400 transition">
                  <input
                    type="checkbox"
                    checked={formData.interests.academyDojoWaitlist}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        interests: {
                          ...formData.interests,
                          academyDojoWaitlist: e.target.checked,
                        },
                      })
                    }
                    className="rounded text-blue-600 w-4 h-4"
                  />
                  <span className="font-semibold text-slate-800">
                    Academy Dojo (2027) waitlist
                  </span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  How did you hear about us? <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.hearAboutUs}
                  onChange={(e) =>
                    setFormData({ ...formData, hearAboutUs: e.target.value })
                  }
                  placeholder="e.g. Word of mouth, neighbor, social media, karate club..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Questions or comments <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.questionsOrComments}
                  onChange={(e) =>
                    setFormData({ ...formData, questionsOrComments: e.target.value })
                  }
                  placeholder="Tell us about special requests, dietary restrictions, potty training, or questions for Tasneem..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Required Consents (Exact wording from specification image) */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>Consents & Acknowledgements (Required)</span>
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition cursor-pointer ${
                  formData.consentPopia
                    ? 'border-blue-400 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  required
                  checked={formData.consentPopia}
                  onChange={(e) =>
                    setFormData({ ...formData, consentPopia: e.target.checked })
                  }
                  className="mt-0.5 rounded text-blue-600 w-4 h-4 shrink-0"
                />
                <span className="leading-snug">
                  <strong className="text-slate-900">
                    Consent: contact me and store my details (POPIA)
                  </strong>{' '}
                  <span className="text-rose-600 font-bold">*</span>
                  <span className="block text-slate-500 text-[11px] mt-0.5">
                    I authorise Little Creative Minds Academy to store and process my information in accordance with South Africa's POPI Act to respond to this enquiry.
                  </span>
                </span>
              </label>

              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition cursor-pointer ${
                  formData.consentConfidentialPack
                    ? 'border-blue-400 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  required
                  checked={formData.consentConfidentialPack}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consentConfidentialPack: e.target.checked,
                    })
                  }
                  className="mt-0.5 rounded text-blue-600 w-4 h-4 shrink-0"
                />
                <span className="leading-snug">
                  <strong className="text-slate-900">
                    Consent: Parent Information Pack is confidential and for my personal use
                  </strong>{' '}
                  <span className="text-rose-600 font-bold">*</span>
                  <span className="block text-slate-500 text-[11px] mt-0.5">
                    I agree that any proprietary academy schedule, fee details, and handbook material shared is confidential.
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Inline validation / delivery feedback */}
          {formError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800 space-y-2.5">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
              {mailtoUrl && (
                <a
                  href={mailtoUrl}
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-lg transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Directly via Email App to {ACADEMY_INFO.email}</span>
                </a>
              )}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.consentPopia ||
                !formData.consentConfidentialPack ||
                (formData.bookAcademyTour && (!formData.tourDate || !formData.tourTimeSlot))
              }
              className={`w-full py-3.5 px-6 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 ${
                !isSubmitting &&
                formData.consentPopia &&
                formData.consentConfidentialPack &&
                (!formData.bookAcademyTour || (formData.tourDate && formData.tourTimeSlot))
                  ? 'bg-blue-700 hover:bg-blue-800 text-white active:scale-99'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>
                {isSubmitting
                  ? `Sending to ${ACADEMY_INFO.email}...`
                  : formData.bookAcademyTour
                  ? 'Confirm Saturday Academy Tour'
                  : 'Submit Daycare Enquiry'}
              </span>
            </button>

            <p className="text-[11px] text-slate-500 text-center mt-2">
              Submissions are sent directly to {ACADEMY_INFO.email} and kept strictly confidential under POPIA.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
