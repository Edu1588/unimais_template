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
import DiagnosticSection from './components/DiagnosticSection';
import OurStores from './components/OurStores';
import WhatsAppModal from './components/WhatsAppModal';

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
        <DiagnosticSection />
        <OurStores />
        <FAQ />
        <CTA />
        <FullImageSection />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppButton />
      <WhatsAppModal />
    </div>
  );
}
