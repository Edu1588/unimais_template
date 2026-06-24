import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openWhatsAppModal'));
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#00a81f] text-white rounded-full shadow-[0_4px_12px_rgba(0,168,31,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </button>
  );
}
