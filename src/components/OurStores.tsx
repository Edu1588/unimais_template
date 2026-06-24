import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function OurStores() {
  const stores = [
    {
      name: "Loja 1 – Amoreiras",
      address: "Avenida das Amoreiras, 3247\nJardim do Lago – Campinas – SP",
      mapLink: "https://maps.app.goo.gl/4Q36u347f5H6eT3d6",
      phone: "(19) 3727-1000",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEv2M2opTvwVzlbDXR6_ztKoZe-GlrdEf2PnQr4bLZFTVGAAxAS-Bw6GKFTYy5nppOtL8k0XA1ccwmF9qaWWgM7UKONVzypYmy3WkePMRk9sFZ-mr8mKjwKwjfR_6BvVIZFQVK2=s680-w680-h510"
    },
    {
      name: "Loja 2 – Castelo",
      address: "Avenida Francisco José de Camargo Andrade, 520\nJardim Chapadão – Campinas – SP",
      mapLink: "https://maps.app.goo.gl/8n9n6n9n6n9n6n9n6",
      phone: "(19) 3727-1000",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEHsEkatt5BvnAPaWvepD0i9WjrLR4SwZeL8G_Z5zET6vLp1QgDevys3gfZasWGSbBlhahXvdZcY7by_V4jX1cxDo81J5adzrXkzsjO_0tH89fLoyRNZL52Zm9YaYqVYNHCTQjb1w=s680-w680-h510"
    },
    {
      name: "Loja 3 – Domício",
      address: "Rua Domício Pachêco e Silva, 726\nJardim Novo Campos Eliseos – Campinas – SP",
      mapLink: "https://maps.app.goo.gl/7n9n6n9n6n9n6n9n6",
      phone: "(19) 3727-1000",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEAIeXUtEJov1Vpcoa3kCG2qP_gh7JroeNLcl5M5iw2OrBNFi04a50ND6nHX83fOp6zcqHKqIWf1CccFbEB1OTZQU22RG61_PXVlRmoZuRuqw8g2q9lhXh8zhtBBTCiuFkIMAQ=s680-w680-h510"
    },
    {
      name: "Loja 4 – Hortolândia",
      address: "Av. Olivio Franceschini, 2071\nPq São Miguel – Hortolândia – SP",
      mapLink: "https://maps.app.goo.gl/6n9n6n9n6n9n6n9n6",
      phone: "(19) 3727-1000",
      image: "https://lh3.googleusercontent.com/grass-cs/ANxoTn1oEaYYoXmMi0XnVr2BVBsLhCa1SKEgy5qRyya4V7cxtLTfZqgr4hYFesfwebr9V02T13TbsMcFh870TAP3YpL1lVd1PmmnbNmcsIhtjFaphYrat5wvpqayZ_dYX-7_9vU_7wkDTCRaTehZ=s680-w680-h510"
    }
  ];

  return (
    <section id="lojas" className="py-16 md:py-24 bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Nossas Lojas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="bg-primary rounded-xl shadow-md overflow-hidden flex flex-col border border-primary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-white">
                <h3 className="font-bold text-lg text-white mb-4">{store.name}</h3>
                
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 mb-4 text-white/90 hover:text-white flex-grow group transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 text-action-orange mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm whitespace-pre-line leading-relaxed">{store.address}</p>
                </a>
                
                <div className="flex items-center gap-3 text-white/90 font-medium">
                  <Phone className="w-5 h-5 shrink-0 text-action-orange" />
                  <p>{store.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
