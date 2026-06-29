import { Phone, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-max-width mx-margin-desktop h-20">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="https://unimaisveiculos.com.br/wp-content/uploads/2025/02/Group.svg" alt="Unimais Veículos" className="h-8 w-auto" />
          </Link>
        </div>
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
          <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Início</Link>
          <Link to="/financiamento" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Financiamento</Link>
          <Link to="/encontrar-veiculo" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Encontrar Veículo</Link>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="/#lojas">Nossas Lojas</a>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openWhatsAppModal'))} className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg bg-transparent border-none p-0 cursor-pointer">Contato</button>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-action-orange transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-label-lg text-label-lg">(19) 3727-1000</span>
          </button>
          <a className="hidden md:inline-flex bg-action-orange text-white px-6 py-2 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-sm" href="/#como-funciona">Avaliar Grátis</a>
          <button className="lg:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
