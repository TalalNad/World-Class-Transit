import { FiPhone, FiArrowRight } from 'react-icons/fi';
import HeroSection from '../../components/HeroSection';
import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';
import Button from '../../components/Button';
import { services } from '../../data/siteData';
import FleetImage from '../../assets/fleet-services.png';
import './Services.css';

const processSteps = [
  { step: '01', title: 'Schedule', description: 'Call us or submit a request online to book your ride.' },
  { step: '02', title: 'Confirm', description: 'Receive confirmation with driver details and pickup time.' },
  { step: '03', title: 'Ride', description: 'Your driver arrives on time — sit back and ride comfortably.' },
  { step: '04', title: 'Arrive', description: 'Reach your destination safely and on schedule. Every time.' },
  { step: '05', title: 'Review', description: 'Happy with our service? Leave us a review and share your feedback.' },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* ---- Hero ---- */}
      <HeroSection
        subtitle="Our Services"
        title={<>Comprehensive <span className="text-highlight">Transportation Solutions</span></>}
        description="From medical appointments to community services, we offer reliable and compassionate transit for every need. Discover how we can help you or your organization."
      />

      {/* ---- All Services ---- */}
      <section className="section services-all" id="services-all">
        <div className="container">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Full Range of Services"
            description="Each service is designed with our passengers' comfort, safety, and dignity as the top priority."
          />
          <div className="services-all__grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- How It Works ---- */}
      <section className="section section--gray services-process" id="services-process">
        <div className="container">
          <SectionHeading
            subtitle="How It Works"
            title="Booking a Ride Is Simple"
            description="We've made it easy to get the transportation you need."
          />
          <div className="services-process__grid">
            {processSteps.map((item, i) => (
              <div key={i} className={`services-process__card ${i === 4 ? 'services-process__card--review' : ''}`}>
                <span className="services-process__step">{item.step}</span>
                <h4 className="services-process__title">{item.title}</h4>
                <p className="services-process__desc">{item.description}</p>
                {i === 4 && (
                   <a href="/contact#schedule-form" className="services-process__review-link">Leave Feedback →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Fleet Info ---- */}
      <section className="section services-fleet" id="services-fleet">
        <div className="container">
          <div className="services-fleet__grid">
            <div className="services-fleet__content">
              <SectionHeading
                subtitle="Our Fleet"
                title="Modern, Safe & Accessible Vehicles"
                align="left"
              />
              <p>Our fleet includes a variety of vehicles to accommodate every need:</p>
              <ul className="services-fleet__list">
                <li>✓ Wheelchair-accessible vans with hydraulic lifts</li>
                <li>✓ Comfortable sedans for ambulatory passengers</li>
                <li>✓ Multi-passenger vehicles for group transit</li>
                <li>✓ All vehicles GPS-tracked and regularly maintained</li>
                <li>✓ Climate-controlled interiors for passenger comfort</li>
              </ul>
            </div>
            <div className="services-fleet__image-area">
              <div className="services-fleet__image-container">
                <img
                  src={FleetImage}
                  alt="World Class Transit comprehensive transport fleet"
                  className="services-fleet__image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="services-cta">
        <div className="services-cta__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="var(--color-off-white)" />
          </svg>
        </div>
        <div className="services-cta__bg-accent" aria-hidden="true" />
        <div className="container services-cta__inner">
          <h2>Need Transportation Services?</h2>
          <p>Contact us today to discuss your transit needs or schedule your first ride.</p>
          <div className="services-cta__actions">
            <Button variant="secondary" size="lg" href="tel:5551234567" icon={<FiPhone />}>
              Call Now
            </Button>
            <Button variant="outline" size="lg" to="/contact" className="services-cta__btn-outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
