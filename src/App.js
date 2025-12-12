import React from 'react';

// Funnel Components
import StickyHeader from './components/funnel/StickyHeader';
import HeroSection from './components/funnel/HeroSection';
import TrustStats from './components/funnel/TrustStats';
import ProductsShowcase from './components/funnel/ProductsShowcase';
import BenefitsSection from './components/funnel/BenefitsSection';
import SocialProof from './components/funnel/SocialProof';
import ProcessSection from './components/funnel/ProcessSection';
import ContactForm from './components/funnel/ContactForm';
import FunnelFooter from './components/funnel/FunnelFooter';

function App() {
  // Scroll to contact/quote section
  const scrollToQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Sticky Header with CTA */}
      <StickyHeader scrollToQuote={scrollToQuote} />

      {/* Main Content - Single Page Funnel Structure */}
      <main>
        {/* Hero - First impression with strong CTA */}
        <HeroSection scrollToQuote={scrollToQuote} />

        {/* Trust Stats - Build credibility immediately */}
        <TrustStats />

        {/* Products - Show what you offer */}
        <ProductsShowcase scrollToQuote={scrollToQuote} />

        {/* Benefits - Why choose Untalan */}
        <BenefitsSection scrollToQuote={scrollToQuote} />

        {/* Social Proof - Testimonials and clients */}
        <SocialProof scrollToQuote={scrollToQuote} />

        {/* Process - How it works */}
        <ProcessSection scrollToQuote={scrollToQuote} />

        {/* Contact Form - Main conversion point */}
        <ContactForm />
      </main>

      {/* Footer with final CTA */}
      <FunnelFooter scrollToQuote={scrollToQuote} />
    </div>
  );
}

export default App;
