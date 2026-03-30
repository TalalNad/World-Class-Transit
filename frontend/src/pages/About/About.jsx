import { FiCheckCircle, FiHeart, FiShield, FiUsers, FiTarget } from 'react-icons/fi';
import HeroSection from '../../components/HeroSection';
import SectionHeading from '../../components/SectionHeading';
import './About.css';

const values = [
  {
    icon: <FiHeart />,
    title: 'Compassion',
    description: 'Every ride is delivered with genuine care and empathy for our passengers.',
  },
  {
    icon: <FiShield />,
    title: 'Safety',
    description: 'Rigorous vehicle maintenance, thorough driver vetting, and strict safety protocols.',
  },
  {
    icon: <FiUsers />,
    title: 'Community',
    description: 'We invest in the communities we serve and build lasting relationships.',
  },
  {
    icon: <FiTarget />,
    title: 'Reliability',
    description: 'On-time, every time. Our passengers count on us and we deliver.',
  },
];

const milestones = [
  { year: '2010', event: 'World Class Transit Group founded with a mission to serve.' },
  { year: '2013', event: 'Expanded fleet to include wheelchair-accessible vehicles.' },
  { year: '2016', event: 'Partnered with regional healthcare facilities for dedicated transport.' },
  { year: '2019', event: 'Reached 5,000+ rides per year milestone.' },
  { year: '2022', event: 'Launched community transit program for underserved areas.' },
  { year: 'Today', event: 'Continuing to grow and serve — one ride, one person at a time.' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* ---- Hero ---- */}
      <HeroSection
        subtitle="About Us"
        title={<>We&apos;re in the <span className="text-highlight">People Business</span></>}
        description="At World Class Transit Group, transportation is just the vehicle — our true mission is connecting people to the care, services, and opportunities they deserve."
      />

      {/* ---- Mission & Vision ---- */}
      <section className="section about-mission" id="about-mission">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__card">
              <div className="about-mission__icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide safe, reliable, and compassionate transportation services that
                empower individuals to access healthcare and community resources with dignity
                and ease.
              </p>
            </div>
            <div className="about-mission__card about-mission__card--accent">
              <div className="about-mission__icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted name in healthcare transportation — known for our
                unwavering commitment to the well-being of every passenger we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Our Story ---- */}
      <section className="section section--gray about-story" id="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <SectionHeading
                subtitle="Our Story"
                title="Built on Care, Driven by Purpose"
                align="left"
              />
              <p>
                World Class Transit Group was born from a simple observation: too many
                people in our community were missing critical healthcare appointments
                because they lacked reliable transportation. We set out to change that.
              </p>
              <p>
                What started as a small operation with a handful of dedicated drivers
                has grown into a comprehensive transit service covering hundreds of
                communities. But no matter how much we grow, our core principle remains
                the same — every person deserves to be treated with respect, dignity,
                and genuine care.
              </p>
              <ul className="about-story__list">
                <li><FiCheckCircle className="about-story__check" /> Professionally trained and certified drivers</li>
                <li><FiCheckCircle className="about-story__check" /> Modern, well-maintained fleet</li>
                <li><FiCheckCircle className="about-story__check" /> Full ADA compliance on all vehicles</li>
                <li><FiCheckCircle className="about-story__check" /> 24/7 dispatch and support</li>
              </ul>
            </div>
            <div className="about-story__image-area">
              <div className="about-story__image-placeholder">
                <div className="about-story__image-icon">🚐</div>
                <p>Our dedicated fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="section about-values" id="about-values">
        <div className="container">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us Every Day"
            description="These core values guide every decision we make and every ride we provide."
          />
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div key={i} className="about-values__card">
                <div className="about-values__icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="section section--gray about-timeline" id="about-timeline">
        <div className="container">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones Along the Way"
          />
          <div className="about-timeline__track">
            {milestones.map((m, i) => (
              <div key={i} className={`about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'}`}>
                <div className="about-timeline__dot" />
                <div className="about-timeline__card">
                  <span className="about-timeline__year">{m.year}</span>
                  <p className="about-timeline__event">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
