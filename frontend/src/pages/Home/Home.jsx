import { FiArrowRight, FiPhone } from 'react-icons/fi';
import HeroCarousel from '../../components/HeroCarousel';
import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';
import MapSection from '../../components/MapSection';
import Button from '../../components/Button';
import { services, whyChooseUs } from '../../data/siteData';
import WhoWeAreImg from '../../assets/who-we-are.jpg';
import './Home.css';

/* ---- Client Reviews Data ---- */
const reviews = [
  {
    id: 1,
    name: 'Client',
    role: 'Passenger',
    text: "World Class Transit- If you're looking for transportation that's reliable, trustworthy, and friendly, this is the ride for you. I was in a bind and talked with Jeremy who was helpful and understanding. We set a time and date and everything went as expected. If you're looking for service to get you where you need to go and back, this place is for you.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer R.',
    role: 'Family Member',
    text: "Thank you World Class Transit for transporting my Aunt home to be with her family. Your kindness and dedication to your patients doesn’t go unrecognized.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Client',
    role: 'Family Member',
    text: "World Class Transit provided excellent service from start to finish. The driver was professional, patient, and very caring. They made sure my loved one was comfortable and arrived safely. I truly appreciate their kindness and would definitely recommend them.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Client',
    role: 'Family Member',
    text: "I’m very thankful for World Class Transit. They were on time, respectful, and treated my family member with real care. It’s not easy finding transportation you can trust, but they made the whole experience smooth and stress-free.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Client',
    role: 'Passenger',
    text: "Amazing service and wonderful people. World Class Transit went above and beyond to make sure everything was handled properly. Their team was friendly, reliable, and compassionate. I would absolutely use them again and recommend them to anyone needing safe transportation.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* ---- Hero ---- */}
      <HeroCarousel />

      {/* ---- About Preview ---- */}
      <section className="section home-about" id="home-about">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__image-area">
              <div className="home-about__image-container">
                <img
                  src={WhoWeAreImg}
                  alt="World Class Transit driver helping wheelchair patient board the transit van"
                  className="home-about__image"
                />
              </div>
              <div className="home-about__accent-card">
                <span className="home-about__accent-number">15+</span>
                <span className="home-about__accent-text">Years of Experience</span>
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
                Whether it&apos;s a routine medical appointment, ongoing treatment, or medical courier
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
            title="Comprehensive Transportation Solutions"
            description="World Class Transit Group (WCT) is a dual-service healthcare logistics company providing Non-Emergency Medical Transportation (NEMT) and Medical Courier Services (MCS)."
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
            description="Reliability | Care & Dignity | Accountability | Safety | Innovation"
          />
          <div className="home-why__grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="home-why__card">
                <div className={`home-why__icon ${item.iconClassName || ''}`}>{item.icon}</div>
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
            description="Based in Elgin, IL — we proudly serve communities within a 30-mile radius, ensuring no one is left without access to essential transportation."
          />
          <MapSection />
        </div>
      </section>

      {/* ---- Client Reviews Carousel ---- */}
      <section className="reviews-strip" id="client-reviews">
        <div className="container">
          <div className="reviews-strip__header">
            <h3 className="reviews-strip__title">What Our Clients Say</h3>
          </div>
          <div className="reviews-strip__track-wrapper">
            <div className="reviews-strip__track">
              {reviews.concat(reviews).map((review, i) => (
                <div key={`${review.id}-${i}`} className="reviews-strip__card">
                  <div className="reviews-strip__stars">
                    {Array.from({ length: review.rating }, (_, j) => (
                      <span key={j} className="reviews-strip__star">★</span>
                    ))}
                  </div>
                  <p className="reviews-strip__text">&ldquo;{review.text}&rdquo;</p>
                  <div className="reviews-strip__author">
                    <span className="reviews-strip__name">{review.name}</span>
                    <span className="reviews-strip__role">{review.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA Banner ---- */}
      <section className="home-cta" id="home-cta">
        <div className="home-cta__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="var(--color-white)" />
          </svg>
        </div>
        <div className="home-cta__bg-accent" aria-hidden="true" />
        <div className="container home-cta__inner">
          <div className="home-cta__text">
            <h2>Ready to Schedule a Ride?</h2>
            <p>Contact us today and experience world-class transportation service.</p>
          </div>
          <div className="home-cta__actions">
            <Button variant="secondary" size="lg" href="tel:2248571455" icon={<FiPhone />}>
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
