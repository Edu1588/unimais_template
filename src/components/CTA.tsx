import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-gutter text-center">
        <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
          <h2 className="font-headline-md text-headline-md text-white mb-6 relative z-10">Pronto para vender seu carro?</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8 relative z-10">Fale com nossos especialistas agora mesmo e garanta o melhor negócio.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a className="bg-whatsapp-green text-white px-8 py-4 rounded-xl font-label-lg text-label-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center gap-2" href="https://api.whatsapp.com/send?phone=551937271000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
            <a className="bg-white text-primary px-8 py-4 rounded-xl font-label-lg text-label-lg hover:bg-surface-gray transition-colors border border-outline-variant flex items-center justify-center gap-2" href="tel:1937271000">
              <Phone className="w-6 h-6" />
              Ligar (19) 3727-1000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
