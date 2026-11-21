import React from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTourOption?: string;
}

export const BookTourModal: React.FC<BookTourModalProps> = ({
  isOpen,
  onClose,
  initialTourOption,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          <EnquiryForm
            key={initialTourOption ?? 'general'}
            isTourBooking
            initialTourOption={initialTourOption}
          />
        </div>
      </div>
    </div>
  );
};

