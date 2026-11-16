export type ActivePage = 'home' | 'enrolment' | 'privacy' | 'terms';

export interface ScheduleItem {
  time?: string;
  title: string;
  description: string;
  category: 'routine' | 'learning' | 'meal' | 'activity' | 'rest';
  badge?: string;
  highlight?: boolean;
}

export interface OfferingItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  color: 'blue' | 'yellow' | 'coral' | 'green' | 'sky' | 'purple' | 'emerald';
  icon: string;
  includedInFees: boolean;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
  icon: string;
}

export interface EnrolmentFormData {
  // Child details
  childFullName: string;
  childDob: string;
  childGender: string;
  ageGroup: string;
  pottyTrained: 'yes' | 'in_progress' | 'no' | '';
  allergiesOrDietary: string;
  medicationConsentNeeded: boolean;
  medicationDetails: string;

  // Parent / Guardian details
  parentFullName: string;
  relationship: string;
  parentEmail: string;
  parentPhone: string;
  parentAltPhone: string;
  homeAddress: string;

  // Programme options
  scheduleType: 'full_day' | 'half_day';
  needsAftercare: boolean;
  extraMuralsInterest: string[];
  intendedStartDate: string;
  specialNotes: string;
  acceptedTerms: boolean;
}
