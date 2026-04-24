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
    lines: ['Elgin, IL & Surrounding', '30-mile radius coverage'],
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
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Gather form data to build a professional ride-request email body
    const fd = new FormData(form.current);
    const passengerName = fd.get('passenger_name');
    const passengerPhone = fd.get('passenger_phone');
    const passengerEmail = fd.get('passenger_email');
    const pickupAddress = fd.get('pickup_address');
    const dropoffAddress = fd.get('dropoff_address');
    const pickupDate = fd.get('pickup_date');
    const pickupTime = fd.get('pickup_time');
    const rideType = fd.get('ride_type');
    const returnTrip = fd.get('return_trip');
    const returnTime = fd.get('return_time');
    const passengerCount = fd.get('passenger_count');
    const specialNeeds = fd.get('special_needs');

    // Format date for readability
    const formattedDate = pickupDate
      ? new Date(pickupDate + 'T00:00:00').toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'N/A';

    // Format time for readability
    const formatTime = (t) => {
      if (!t) return 'N/A';
      const [h, m] = t.split(':');
      const hour = parseInt(h, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const h12 = hour % 12 || 12;
      return `${h12}:${m} ${ampm}`;
    };

    // Build a professional email body using a hidden field
    const emailBody = `
══════════════════════════════════
   NEW RIDE REQUEST
   World Class Transit Group
══════════════════════════════════

PASSENGER INFORMATION
─────────────────────
  Name:          ${passengerName}
  Phone:         ${passengerPhone}
  Email:         ${passengerEmail}

RIDE DETAILS
─────────────────────
  Pickup Date:   ${formattedDate}
  Pickup Time:   ${formatTime(pickupTime)}
  Ride Type:     ${rideType}
  Passengers:    ${passengerCount || '1'}

LOCATIONS
─────────────────────
  Pickup:        ${pickupAddress}
  Drop-off:      ${dropoffAddress}

RETURN TRIP
─────────────────────
  Return Needed: ${returnTrip === 'yes' ? 'Yes' : 'No'}${returnTrip === 'yes' && returnTime ? `\n  Return Time:   ${formatTime(returnTime)}` : ''}

SPECIAL NEEDS / NOTES
─────────────────────
  ${specialNeeds || 'None specified'}

══════════════════════════════════
  Submitted via wctransitgroup.com
══════════════════════════════════
`.trim();

    // Set the hidden message field so EmailJS picks it up
    const hiddenMsg = form.current.querySelector('input[name="message"]');
    if (hiddenMsg) hiddenMsg.value = emailBody;

    // Also set a subject line
    const hiddenSubject = form.current.querySelector('input[name="subject"]');
    if (hiddenSubject) hiddenSubject.value = `🚐 Ride Request — ${passengerName} — ${formattedDate}`;

    // Set user_name and user_email for EmailJS template compatibility
    const hiddenName = form.current.querySelector('input[name="user_name"]');
    if (hiddenName) hiddenName.value = passengerName;
    const hiddenEmail = form.current.querySelector('input[name="user_email"]');
    if (hiddenEmail) hiddenEmail.value = passengerEmail;

    // Set reply_to so the email Reply-To header points to the user's email
    const hiddenReplyTo = form.current.querySelector('input[name="reply_to"]');
    if (hiddenReplyTo) hiddenReplyTo.value = passengerEmail;
    // Set from_name so the email appears to come from the passenger
    const hiddenFromName = form.current.querySelector('input[name="from_name"]');
    if (hiddenFromName) hiddenFromName.value = passengerName;

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
          form.current.reset();
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
        subtitle="Schedule a Ride"
        title={<>Book Your <span className="text-highlight">Next Ride</span></>}
        description="Fill out the form below with your ride details and we'll confirm your booking promptly. Safe, reliable, and on-time — every time."
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

      {/* ---- Ride Scheduling Form ---- */}
      <section className="section section--gray contact-form-section" id="schedule-form">
        <div className="container">
          <div className="contact-form__grid">
            <div className="contact-form__left">
              <SectionHeading
                subtitle="Schedule a Ride"
                title="Ride Request Form"
                align="left"
              />
              <form ref={form} onSubmit={sendEmail} className="contact-form" id="schedule-form-element">
                {/* Hidden fields for EmailJS template compatibility */}
                <input type="hidden" name="user_name" />
                <input type="hidden" name="user_email" />
                <input type="hidden" name="subject" />
                <input type="hidden" name="message" />
                <input type="hidden" name="reply_to" />
                <input type="hidden" name="from_name" />

                {/* ---- Passenger Info ---- */}
                <div className="contact-form__section-label">Passenger Information</div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="passenger_name">Full Name *</label>
                    <input type="text" name="passenger_name" id="passenger_name" placeholder="Passenger's full name" required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="passenger_phone">Phone Number *</label>
                    <input type="tel" name="passenger_phone" id="passenger_phone" placeholder="(555) 000-0000" required />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="passenger_email">Email Address *</label>
                  <input type="email" name="passenger_email" id="passenger_email" placeholder="your@email.com" required />
                </div>

                {/* ---- Ride Details ---- */}
                <div className="contact-form__section-label">Ride Details</div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="pickup_date">Pickup Date *</label>
                    <input type="date" name="pickup_date" id="pickup_date" required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="pickup_time">Pickup Time *</label>
                    <input type="time" name="pickup_time" id="pickup_time" required />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="ride_type">Ride Type *</label>
                    <select name="ride_type" id="ride_type" required>
                      <option value="">Select ride type</option>
                      <option value="Ambulatory">Ambulatory</option>
                      <option value="Wheelchair">Wheelchair</option>
                      <option value="Stretcher">Stretcher</option>
                      <option value="Gurney">Gurney</option>
                      <option value="Medical Courier">Medical Courier</option>
                    </select>
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="passenger_count">Number of Passengers</label>
                    <select name="passenger_count" id="passenger_count">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>

                {/* ---- Locations ---- */}
                <div className="contact-form__section-label">Locations</div>
                <div className="contact-form__group">
                  <label htmlFor="pickup_address">Pickup Address *</label>
                  <input type="text" name="pickup_address" id="pickup_address" placeholder="Full pickup address" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="dropoff_address">Drop-off Address *</label>
                  <input type="text" name="dropoff_address" id="dropoff_address" placeholder="Full drop-off address" required />
                </div>

                {/* ---- Return Trip ---- */}
                <div className="contact-form__section-label">Return Trip</div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="return_trip">Need a Return Trip?</label>
                    <select name="return_trip" id="return_trip">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="return_time">Return Pickup Time</label>
                    <input type="time" name="return_time" id="return_time" />
                  </div>
                </div>

                {/* ---- Special Needs ---- */}
                <div className="contact-form__group">
                  <label htmlFor="special_needs">Special Needs / Notes</label>
                  <textarea name="special_needs" id="special_needs" rows="3" placeholder="Any special requirements, mobility aids, or additional notes..." />
                </div>

                {submitStatus === 'success' && (
                  <div className="contact-form__success">
                    ✅ Your ride request has been submitted successfully! Our dispatch team will confirm your booking shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact-form__error">
                    Oops! Something went wrong. Please try again later or call us directly at (555) 123-4567.
                  </div>
                )}

                <button type="submit" className="contact-form__submit" id="schedule-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Request...' : '🚐 Submit Ride Request'}
                </button>
              </form>
            </div>

            <div className="contact-form__right">
              <div className="contact-info-card">
                <h3>Booking Info</h3>
                <p>
                  Please submit your ride request at least <strong>24 hours in advance</strong>.
                  For same-day or urgent rides, call us directly.
                </p>

                <div className="contact-info-card__divider" />

                <h4>What Happens Next?</h4>
                <ol className="contact-info-card__steps">
                  <li>
                    <span className="step-num">1</span>
                    <span>We receive your ride request</span>
                  </li>
                  <li>
                    <span className="step-num">2</span>
                    <span>Our team confirms availability</span>
                  </li>
                  <li>
                    <span className="step-num">3</span>
                    <span>You receive a confirmation call or email</span>
                  </li>
                  <li>
                    <span className="step-num">4</span>
                    <span>Your driver arrives on time, every time</span>
                  </li>
                </ol>

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

                <div className="contact-info-card__divider" />

                <h4>Follow Us</h4>
                <SocialIcons variant="default" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
