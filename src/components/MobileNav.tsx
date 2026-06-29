import { Home, Tag, Phone, Car, Search } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 md:hidden bg-surface shadow-lg border-t border-outline-variant rounded-t-xl">
      <Link to="/" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
        <Home className="w-5 h-5 mb-1" />
        <span className="text-[10px]">Início</span>
      </Link>
      <Link to="/financiamento" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
        <Car className="w-5 h-5 mb-1" />
        <span className="text-[10px]">Financiar</span>
      </Link>
      <Link to="/encontrar-veiculo" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
        <Search className="w-5 h-5 mb-1" />
        <span className="text-[10px]">Encontrar</span>
      </Link>
      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('openWhatsAppModal'))}
        className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md bg-transparent border-none p-0"
      >
        <WhatsAppIcon className="w-5 h-5 mb-1 text-whatsapp-green" />
        <span className="text-[10px]">WhatsApp</span>
      </button>
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md" href="tel:1937271000">
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[10px]">Ligar</span>
      </a>
    </nav>
  );
}
