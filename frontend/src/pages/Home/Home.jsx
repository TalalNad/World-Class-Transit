import { FiArrowRight, FiPhone } from 'react-icons/fi';
import HeroSection from '../../components/HeroSection';
import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';
import MapSection from '../../components/MapSection';
import Button from '../../components/Button';
import { services, stats, whyChooseUs } from '../../data/siteData';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* ---- Hero ---- */}
      <HeroSection
        subtitle="World Class Transit Group"
        title={<>Your Trusted Partner in <span className="text-highlight">Healthcare Transportation</span></>}
        description="We're not just in the transit business — we're in the people business. Safe, reliable, and compassionate transportation connecting communities to the care they need."
        primaryAction={{
          label: 'Our Services',
          to: '/services',
          icon: <FiArrowRight />,
        }}
        secondaryAction={{
          label: 'Contact Us',
          to: '/contact',
        }}
      />

      {/* ---- Stats Strip ---- */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-strip__grid">
            {stats.map((stat, i) => (
              <div key={i} className="stats-strip__item">
                <span className="stats-strip__value">{stat.value}</span>
                <span className="stats-strip__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- About Preview ---- */}
      <section className="section home-about" id="home-about">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__image-area">
              <div className="home-about__image-placeholder">
                <div className="home-about__image-icon">🤝</div>
                <p>Caring for our community</p>
              </div>
              <div className="home-about__accent-card">
                <span className="home-about__accent-number">15+</span>
                <span className="home-about__accent-text">Years of Service</span>
              </div>
            </div>
            <div className="home-about__content">
              <SectionHeading
                subtitle="Who We Are"
                title="People-First Transportation You Can Trust"
                align="left"
              />
              <p className="home-about__text">
                At World Class Transit Group, we believe everyone deserves access to reliable
                transportation — especially when it comes to healthcare. Our dedicated team
                goes beyond just driving; we provide a warm, supportive experience for every
                passenger.
              </p>
              <p className="home-about__text">
                Whether it&apos;s a routine medical appointment, ongoing treatment, or community
                services, our professionally trained drivers ensure you arrive safely,
                comfortably, and on time.
              </p>
              <Button variant="primary" to="/about" icon={<FiArrowRight />} iconPosition="right">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Services Preview ---- */}
      <section className="section section--gray home-services" id="home-services">
        <div className="container">
          <SectionHeading
            subtitle="What We Offer"
            title="Comprehensive Transportation Services"
            description="From medical appointments to community access, we provide safe and compassionate transit solutions tailored to your needs."
          />
          <div className="home-services__grid">
            {services.slice(0, 4).map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="home-services__cta">
            <Button variant="primary" to="/services" icon={<FiArrowRight />} iconPosition="right">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ---- Why Choose Us ---- */}
      <section className="section home-why" id="home-why">
        <div className="container">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The World Class Difference"
            description="When you ride with us, you're family. Here's what sets us apart."
          />
          <div className="home-why__grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="home-why__card">
                <div className="home-why__icon">{item.icon}</div>
                <h4 className="home-why__title">{item.title}</h4>
                <p className="home-why__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Service Area Map ---- */}
      <section className="section section--gray home-map" id="home-map">
        <div className="container">
          <SectionHeading
            subtitle="Coverage"
            title="Our Service Area"
            description="We proudly serve communities across the region, ensuring no one is left without access to essential transportation."
          />
          <MapSection />
        </div>
      </section>

      {/* ---- CTA Banner ---- */}
      <section className="home-cta" id="home-cta">
        <div className="container home-cta__inner">
          <div className="home-cta__text">
            <h2>Ready to Schedule a Ride?</h2>
            <p>Contact us today and experience world-class transportation service.</p>
          </div>
          <div className="home-cta__actions">
            <Button variant="secondary" size="lg" href="tel:5551234567" icon={<FiPhone />}>
              Call Us Now
            </Button>
            <Button variant="outline" size="lg" to="/contact" className="home-cta__btn-outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
