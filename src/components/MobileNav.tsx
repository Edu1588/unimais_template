import { Home, Tag, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface shadow-lg border-t border-outline-variant rounded-t-xl">
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md" href="#">
        <Home className="w-6 h-6 mb-1" />
        Início
      </a>
      <a className="flex flex-col items-center justify-center text-action-orange font-bold active:bg-surface-container-high scale-[0.95] transition-transform font-label-md" href="#como-funciona">
        <Tag className="w-6 h-6 mb-1" />
        Vender
      </a>
      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('openWhatsAppModal'))}
        className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md bg-transparent border-none p-0"
      >
        <WhatsAppIcon className="w-6 h-6 mb-1 text-whatsapp-green" />
        WhatsApp
      </button>
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md" href="tel:1937271000">
        <Phone className="w-6 h-6 mb-1" />
        Ligar
      </a>
    </nav>
  );
}
