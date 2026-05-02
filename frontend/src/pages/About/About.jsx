import { FiHeart, FiShield, FiUsers, FiTarget } from 'react-icons/fi';
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
  { year: '2017', event: 'World Class Transit began delivering safe, dependable non-emergency medical transportation across Elgin and surrounding communities — quickly earning a reputation for reliability and patient-first care.' },
  { year: '2018', event: 'Rapid growth took us from one van to a fleet of seven. We proudly gave back by supporting over 1,200 local students with school supplies through community partnerships and outreach initiatives.' },
  { year: '2022', event: 'Rebranded as World Class Transit Group, we expanded our services to better serve a growing network of healthcare partners.' },
  { year: '2026', event: 'With advanced leadership, cutting-edge dispatch technology, and new medical courier services, we now deliver faster, smarter, and fully integrated transportation solutions.' },
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

      {/* ---- Leadership Team ---- */}
      <section className="section section--gray about-leadership" id="about-leadership">
        <div className="container">
          <SectionHeading
            subtitle="Our Leadership"
            title="Meet the Team Behind World Class Transit"
            description="Our leadership team brings decades of combined experience in transportation, public affairs, and fleet operations."
          />
          <div className="about-leadership__grid">
            {/* Jeremy Hawkins */}
            <div className="about-leadership__card">
              <div className="about-leadership__photo">
                <div className="about-leadership__photo-placeholder">
                  <span>JH</span>
                </div>
              </div>
              <div className="about-leadership__info">
                <h3 className="about-leadership__name">Jeremy Hawkins</h3>
                <span className="about-leadership__title">Founder &amp; Chief Executive Officer</span>
                <p className="about-leadership__bio">
                  Jeremy Hawkins is an experienced sales and operations professional with over 15 years of success in boosting revenue, improving margins, and optimizing processes across transportation, manufacturing, and B2B service industries. He has a proven track record of building scalable sales systems, enhancing team performance, and fostering strong relationships in fast-paced, high-demand environments.
                </p>
              </div>
            </div>

            {/* Corey Dixon */}
            <div className="about-leadership__card">
              <div className="about-leadership__photo">
                <div className="about-leadership__photo-placeholder">
                  <span>CD</span>
                </div>
              </div>
              <div className="about-leadership__info">
                <h3 className="about-leadership__name">Corey D. Dixon, MPA</h3>
                <span className="about-leadership__title">Chief Strategy &amp; Public Affairs Officer</span>
                <p className="about-leadership__bio">
                  Corey Dixon is a public affairs and operations leader with over a decade of experience at the intersection of government, business, and community engagement. As a City Councilman in Elgin, he provides strategic oversight for a city of 115,000+ residents and a $400M+ budget. He has led impactful programs in public safety, reduced recidivism, secured grant funding, and built partnerships that connect people to jobs and drive community growth.
                </p>
              </div>
            </div>

            {/* Demetrious Dixon */}
            <div className="about-leadership__card">
              <div className="about-leadership__photo">
                <div className="about-leadership__photo-placeholder">
                  <span>DD</span>
                </div>
              </div>
              <div className="about-leadership__info">
                <h3 className="about-leadership__name">Demetrious Dixon</h3>
                <span className="about-leadership__title">Director of Fleet Operations</span>
                <p className="about-leadership__bio">
                  Demetrious Dixon is a transportation and logistics professional in roadway operations, fleet management, and safety compliance. Having a background with the Illinois Department of Transportation, he is responsible for maintaining critical infrastructure, operating heavy equipment, and responding to emergency roadway situations. He holds a Class A Commercial Driver&apos;s License (CDL) and has extensive experience in safety compliance, workforce coordination, and operational execution.
                </p>
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
