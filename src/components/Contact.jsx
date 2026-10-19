import React from 'react';

export default function Contact({ product, onProductChange }) {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">06 / Let’s build something dependable</p>
        <h2 id="contact-title">Your next project<br />starts here.</h2>
        <p>Tell us what you need. Our team can help you choose a tank, talk through specifications, or plan a custom order.</p>
        <a className="contact-phone" href="tel:+639176237040">0917 623 7040 <span aria-hidden="true">↗</span></a>
        <a className="contact-email" href="mailto:cbutanks@gmail.com">cbutanks@gmail.com</a>
        <div className="contact-address"><p className="eyebrow">Visit our workshop</p><address>7052 Legaspi ext., Duquit-Maisac<br />Mabalacat City, Pampanga, Philippines</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=CBU+Water+Tank+Manufacturing+Mabalacat" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div>
      </div>
      <form className="quote-form" action="https://submit-form.com/OWbcYrEsl" method="POST">
        <h3>Request a quote</h3><p>Share a few details to get the conversation started.</p>
        <div className="form-row"><div className="form-field"><label htmlFor="quote-name">Your name <span aria-hidden="true">*</span></label><input id="quote-name" name="name" autoComplete="name" required placeholder="Juan Dela Cruz" /></div><div className="form-field"><label htmlFor="quote-phone">Phone number</label><input id="quote-phone" name="phone" type="tel" autoComplete="tel" placeholder="0917 000 0000" /></div></div>
        <div className="form-field"><label htmlFor="quote-email">Email address <span aria-hidden="true">*</span></label><input id="quote-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></div>
        <div className="form-field"><label htmlFor="quote-product">I’m interested in</label><select id="quote-product" name="product" value={product} onChange={event => onProductChange(event.target.value)}><option value="">Help me choose</option><option>Pressurized tank</option><option>Storage tank</option><option>Steel gauge / thickness</option><option>Custom tank</option></select></div>
        <div className="form-field"><label htmlFor="quote-message">Tell us about your project <span aria-hidden="true">*</span></label><textarea id="quote-message" name="message" rows="4" required placeholder="Tank capacity, quantity, project location, or any questions…" /></div>
        <p className="form-note">Required fields are marked *. Please share only the contact and project details needed for your inquiry.</p>
        <button type="submit" className="button button-primary">Send your inquiry <span aria-hidden="true">↗</span></button>
      </form>
    </section>
  );
}
