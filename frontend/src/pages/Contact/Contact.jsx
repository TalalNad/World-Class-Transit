import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
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
                <div className="contact-card__icon">{card.icon}</div>
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
              <form className="contact-form" id="contact-form-element">
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" placeholder="Your full name" />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input type="tel" id="contact-phone" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input type="email" id="contact-email" placeholder="your@email.com" />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-subject">Subject</label>
                  <select id="contact-subject">
                    <option value="">Select a topic</option>
                    <option value="schedule">Schedule a Ride</option>
                    <option value="services">Service Inquiry</option>
                    <option value="partnership">Partnership / Facility Contract</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" rows="5" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="contact-form__submit" id="contact-submit">
                  Send Message
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
