import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import WhatsAppButton from './components/WhatsAppButton';

import FullImageSection from './components/FullImageSection';

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen relative">
      <Header />
      <main className="pt-20 pb-24 md:pb-0">
        <Hero />
        <Testimonials />
        <HowItWorks />
        <WhyChooseUs />
        <SocialProof />
        <FAQ />
        <CTA />
        <FullImageSection />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppButton />
    </div>
  );
}
