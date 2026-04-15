import { useState, useRef } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import HeroSection from '../../components/HeroSection';
import SectionHeading from '../../components/SectionHeading';
import SocialIcons from '../../components/SocialIcons';
import './Contact.css';

const contactCards = [
  {
    icon: <FiPhone />,
    title: 'Call Us',
    lines: ['(555) 123-4567', 'Available 24/7'],
    action: { label: 'Call Now', href: 'tel:5551234567' },
    iconClassName: 'contact-card__icon--green',
  },
  {
    icon: <FiMail />,
    title: 'Email Us',
    lines: ['info@wctransitgroup.com', 'We reply within 24 hours'],
    action: { label: 'Send Email', href: 'mailto:info@wctransitgroup.com' },
  },
  {
    icon: <FiMapPin />,
    title: 'Service Area',
    lines: ['Metro & Suburban Areas', 'Serving 500+ communities'],
    action: null,
  },
  {
    icon: <FiClock />,
    title: 'Hours',
    lines: ['Mon–Fri: 6am – 10pm', 'Sat–Sun: 7am – 8pm'],
    action: null,
  },
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these heavily with your own EmailJS service, template, and public key
    // You can get them from https://dashboard.emailjs.com/
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-page">
      {/* ---- Hero ---- */}
      <HeroSection
        subtitle="Contact Us"
        title={<>Let&apos;s <span className="text-highlight">Connect</span></>}
        description="Have a question, need to schedule a ride, or want to learn more about our services? We'd love to hear from you."
      />

      {/* ---- Contact Cards ---- */}
      <section className="section contact-cards-section" id="contact-cards">
        <div className="container">
          <div className="contact-cards__grid">
            {contactCards.map((card, i) => (
              <div key={i} className="contact-card">
                <div className={`contact-card__icon ${card.iconClassName || ''}`}>{card.icon}</div>
                <h3 className="contact-card__title">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="contact-card__line">{line}</p>
                ))}
                {card.action && (
                  <a href={card.action.href} className="contact-card__action">
                    {card.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Contact Form + Info ---- */}
      <section className="section section--gray contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-form__grid">
            <div className="contact-form__left">
              <SectionHeading
                subtitle="Get In Touch"
                title="Send Us a Message"
                align="left"
              />
              <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form-element">
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="user_name">Full Name</label>
                    <input type="text" name="user_name" id="user_name" placeholder="Your full name" required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="user_phone">Phone Number</label>
                    <input type="tel" name="user_phone" id="user_phone" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="user_email">Email Address</label>
                  <input type="email" name="user_email" id="user_email" placeholder="your@email.com" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="subject">Subject</label>
                  <select name="subject" id="subject" required>
                    <option value="">Select a topic</option>
                    <option value="schedule">Schedule a Ride</option>
                    <option value="services">Service Inquiry</option>
                    <option value="partnership">Partnership / Facility Contract</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="5" placeholder="Tell us how we can help..." required />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="contact-form__success">
                    Thank you! Your message has been sent successfully. We will be in touch shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact-form__error">
                    Oops! Something went wrong. Please try again later or call us directly.
                  </div>
                )}

                <button type="submit" className="contact-form__submit" id="contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-form__right">
              <div className="contact-info-card">
                <h3>Connect With Us</h3>
                <p>
                  Follow us on social media for updates, community stories, 
                  and transportation tips.
                </p>
                <SocialIcons variant="default" />

                <div className="contact-info-card__divider" />

                <h4>Quick Contact</h4>
                <ul className="contact-info-card__list">
                  <li>
                    <FiPhone className="contact-info-card__icon" />
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:5551234567">(555) 123-4567</a>
                    </div>
                  </li>
                  <li>
                    <FiMail className="contact-info-card__icon" />
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:info@wctransitgroup.com">info@wctransitgroup.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
