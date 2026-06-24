import { PlayCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-section-mobile md:py-section-desktop bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center md:text-left">
          Como funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1: Video */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Video thumbnail" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-14 h-14 text-action-orange drop-shadow-lg" fill="currentColor" />
              </div>
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-primary leading-tight">Vídeo - Jornada Completa</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Nossa plataforma garante a melhor negociação. Em poucas etapas você vende seu veículo com a melhor oferta e pagamento à vista.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
              <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600" alt="Avaliação" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-primary leading-tight">1. Avaliação Gratuita</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <strong className="font-bold text-primary">Agende online</strong> com um especialista qualificado, que irá avaliar as <strong className="font-bold text-primary">condições do seu veículo</strong>, em uma de nossas lojas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600" alt="App" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-primary leading-tight">2. Acompanhamento</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pelo nosso atendimento exclusivo é possível acompanhar todas as etapas da jornada e manter contato direto com o especialista.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" alt="Oferta" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-primary leading-tight">3. Oferta em 24 Horas</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Avaliamos seu carro e garantimos as melhores condições do mercado. Te enviamos a <strong className="font-bold text-primary">melhor proposta</strong>.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://images.unsplash.com/photo-1580519542036-ed47f3e42214?auto=format&fit=crop&q=80&w=600" alt="Pagamento" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-primary leading-tight">4. Pagamento à Vista</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Via <strong className="font-bold text-primary">transferência bancária ou Pix, antes mesmo da retirada do veículo</strong>, de forma segura.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
