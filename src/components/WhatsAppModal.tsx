import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function WhatsAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openWhatsAppModal', handleOpen);
    return () => window.removeEventListener('openWhatsAppModal', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the lead data to a backend or CRM
    console.log('Lead Data:', formData);
    
    // Construct WhatsApp message
    const message = `Olá, meu nome é ${formData.name}. Gostaria de atendimento comercial.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=551937271000&text=${encodeURIComponent(message)}`;
    
    // Close modal and open WhatsApp
    setIsOpen(false);
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden z-10 animate-in fade-in zoom-in duration-200">
        <div className="bg-primary p-6 text-white text-center relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <WhatsAppIcon className="w-12 h-12 mx-auto mb-3 text-action-orange" />
          <h3 className="font-headline-sm text-2xl font-bold mb-2">Fale Conosco</h3>
          <p className="text-sm text-white/80">Preencha seus dados para iniciar o atendimento no WhatsApp.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-on-surface mb-1">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Digite seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-on-surface mb-1">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-on-surface mb-1">Telefone / WhatsApp</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#00a81f] text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-md mt-2 flex justify-center items-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Iniciar Conversa
          </button>
          
          <p className="text-xs text-center text-on-surface-variant mt-2">
            Seus dados estão seguros. Ao continuar, você aceita nossa política de privacidade.
          </p>
        </form>
      </div>
    </div>
  );
}
