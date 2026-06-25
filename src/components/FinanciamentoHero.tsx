import { useState } from 'react';
import { Car, Bike, ChevronDown } from 'lucide-react';

export default function FinanciamentoHero() {
  const [vehicleType, setVehicleType] = useState<'car' | 'motorcycle'>('car');

  return (
    <section className="relative py-16 md:py-24 overflow-hidden min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djw0tqmiw/image/upload/v1782400627/vy0p3i1tghxmptwzwocs.png')` }}
      ></div>
      <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0"></div>
      
      <div className="max-w-max-width mx-margin-desktop px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left side: Hero Text */}
        <div className="max-w-xl text-white">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
            Seu carro novo mais perto com <span className="text-action-orange">parcelas que cabem no seu bolso</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-lg">
            Taxas imperdíveis, aprovação ágil e condições flexíveis. Faça uma simulação rápida e dê o primeiro passo para sua próxima conquista.
          </p>
        </div>

        {/* Right side: Form with Car/Moto choice */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20 h-fit max-w-md mx-auto w-full">
          <h3 className="font-bold text-xl text-white mb-6 text-center">Qual veículo você quer financiar?</h3>
          
          <div className="flex gap-4 mb-8 justify-center">
            <button 
              onClick={() => setVehicleType('car')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all w-32 h-32 ${vehicleType === 'car' ? 'border-action-orange bg-white text-primary' : 'border-white/30 bg-white/5 text-white hover:bg-white/10'}`}
              type="button"
            >
              <Car className="w-12 h-12 mb-2" />
              <span className="font-bold">Carro</span>
            </button>
            <button 
              onClick={() => setVehicleType('motorcycle')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all w-32 h-32 ${vehicleType === 'motorcycle' ? 'border-action-orange bg-white text-primary' : 'border-white/30 bg-white/5 text-white hover:bg-white/10'}`}
              type="button"
            >
              <Bike className="w-12 h-12 mb-2" />
              <span className="font-bold">Moto</span>
            </button>
          </div>

          <form className="flex flex-col gap-3">
            <div className="relative">
              <select className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white appearance-none cursor-pointer text-on-surface">
                <option value="">Marca</option>
                <option value="fiat">Fiat</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="honda">Honda</option>
                <option value="yamaha">Yamaha</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
            <div className="relative">
              <select disabled className="w-full border border-outline-variant rounded-lg p-3 outline-none transition-colors bg-gray-50 text-gray-400 appearance-none cursor-not-allowed">
                <option value="">Modelo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-300">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
            <div className="relative">
              <select disabled className="w-full border border-outline-variant rounded-lg p-3 outline-none transition-colors bg-gray-50 text-gray-400 appearance-none cursor-not-allowed">
                <option value="">Ano</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-300">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
            <div className="relative">
              <input type="text" placeholder="Valor desejado" className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
            </div>
            
            <button className="w-full bg-action-orange text-white py-3 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-md flex justify-center items-center gap-2 mt-2" type="button">
              Simular Financiamento
            </button>
            <p className="text-xs text-center text-white/70 mt-2">Ao continuar, você concorda com nossa Política de Privacidade.</p>
          </form>
        </div>

      </div>
    </section>
  );
}
