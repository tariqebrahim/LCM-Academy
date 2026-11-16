import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';

interface PrivacyPageProps {
  onBackToHome: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBackToHome }) => {
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
            <span>POPIA & Child Data Protection</span>
            <span aria-hidden="true">·</span>
            <span>Last Updated 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            How Little Creative Minds Academy protects and respects your family’s privacy and your child’s sensitive data.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-700" />
              1. Commitment to Child & Family Privacy
            </h2>
            <p>
              At <strong>{ACADEMY_INFO.fullName}</strong> ("LCM Academy", "we", "us", or "our"), safeguarding the safety, wellbeing, and privacy of the children in our care and their families is our absolute priority. This Privacy Policy details our practices regarding the collection, use, disclosure, and protection of personal and special personal information in compliance with South Africa’s Protection of Personal Information Act (POPIA) and applicable early childhood development regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-700" />
              2. Information We Collect
            </h2>
            <p>During enrolment and throughout your child’s care at our academy, we collect only necessary information, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Child Information:</strong> Full legal name, date of birth, gender, home language, developmental milestones, potty training status, and clinic/immunisation records.
              </li>
              <li>
                <strong>Parent / Guardian Information:</strong> Full names, residential addresses, employment contacts, telephone/WhatsApp numbers, email addresses, and verified identity documents.
              </li>
              <li>
                <strong>Special Personal Information (Health & Medical):</strong> Dietary restrictions, allergies, and emergency medical contact numbers. <em>Prescription medication instructions are collected solely with explicit written parent consent.</em>
              </li>
              <li>
                <strong>Authorised Pick-up Persons:</strong> Names, photographs, and contact numbers of any relatives or drivers authorised to collect your child.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-700" />
              3. Purpose of Processing & Security Measures
            </h2>
            <p>Your information is processed strictly for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Delivering loving, individualised care aligned with the National Curriculum Framework (NCF).</li>
              <li>Ensuring immediate emergency medical responsiveness and dietary safety.</li>
              <li>Administering prescription medication (such as an asthma pump) under written parental directive.</li>
              <li>Maintaining clear daily communication with parents regarding feeding, nap times, and milestones.</li>
              <li>Complying with statutory Early Childhood Development and health department record-keeping.</li>
            </ul>
            <p className="pt-2">
              All physical records are stored in secure, locked administrative filing units at our home-based daycare. Digital communication is conducted through end-to-end encrypted messaging channels and secure cloud backups.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-700" />
              4. Photography & Social Media Consent Policy
            </h2>
            <p>
              We maintain a strict and protective policy regarding photography and videography. Photographs taken during daily activities, Kiddies Karate, and special events are shared <strong>privately with the respective child’s parents only</strong>.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
              <strong>Strict Consent:</strong> No photos or identifiable media of any child are published on social media, public marketing materials, or our website without prior, separate, written consent from the parents or legal guardians.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Third Parties & Non-Disclosure
            </h2>
            <p>
              We never sell, rent, or commercialise personal information. Information is disclosed to third parties only in cases of:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Immediate medical emergencies requiring paramedics, hospitals, or doctors.</li>
              <li>Qualified extra-mural instructors (e.g. self-defence instructors) for registered participants, limited strictly to safety notes and names.</li>
              <li>Mandatory statutory reporting required by South African law.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Parent Rights & Information Officer
            </h2>
            <p>
              Under POPIA, parents retain the right to inspect, update, correct, or request the deletion of their child's records upon graduation or formal withdrawal from LCM Academy.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <p><strong>Information Officer:</strong> Tasneem (Founder & Head ECD Practitioner)</p>
              <p><strong>Email:</strong> {ACADEMY_INFO.email}</p>
              <p><strong>Phone:</strong> {ACADEMY_INFO.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
