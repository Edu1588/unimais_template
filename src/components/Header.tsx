import { Phone, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-max-width mx-margin-desktop h-20">
        <div className="flex items-center gap-2">
          <img src="https://unimaisveiculos.com.br/wp-content/uploads/2025/02/Group.svg" alt="UniMais Veículos" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Comprar</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg opacity-80 transition-all" href="#">Vender</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Sobre Nós</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-action-orange transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-label-lg text-label-lg">(19) 3727-1000</span>
          </button>
          <a className="hidden md:inline-flex bg-action-orange text-white px-6 py-2 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-sm" href="#">Avaliar Grátis</a>
          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
