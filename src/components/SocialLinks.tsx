import React from 'react';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import { ACADEMY_INFO } from '../data/daycareData';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.93-2.241-.245-.59-.494-.51-.678-.519-.176-.009-.377-.01-.578-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.163-1.303A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167a8.136 8.136 0 01-4.328-1.237l-.31-.184-3.067.774.818-2.983-.203-.324A8.139 8.139 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167s8.167 3.664 8.167 8.167-3.664 8.167-8.167 8.167z" />
  </svg>
);

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={ACADEMY_INFO.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with LCM Academy on WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden font-semibold">WhatsApp</span>
    </a>
  );
};
