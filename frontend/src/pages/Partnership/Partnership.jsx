import { FiShield, FiFileText, FiUserCheck, FiActivity } from 'react-icons/fi';
import HeroSection from '../../components/HeroSection';
import SectionHeading from '../../components/SectionHeading';
import './Partnership.css';

const insuranceDetails = [
  {
    icon: <FiShield />,
    title: 'Auto Liability',
    amount: '$1,000,000',
    desc: 'Per occurrence coverage for our entire fleet.'
  },
  {
    icon: <FiFileText />,
    title: 'General Liability',
    amount: '$1,000,000',
    desc: 'Comprehensive coverage per occurrence for operational peace of mind.'
  },
  {
    icon: <FiUserCheck />,
    title: 'Professional Liability',
    amount: '$1,000,000',
    desc: 'Full Errors & Omissions (E&O) coverage to protect all stakeholders.'
  },
  {
    icon: <FiActivity />,
    title: 'Abuse & Molestation',
    amount: 'Included',
    desc: 'Highest level of protective coverage for patient safety.'
  }
];

const Partnership = () => {
  return (
    <div className="partnership-page">
      {/* ---- Hero ---- */}
      <HeroSection
        subtitle="Healthcare Partnerships"
        title={<>Better Care Through <span className="text-highlight">Strategic Collaboration</span></>}
        description="We work closely with healthcare facilities, brokers, and regulatory agencies to provide safe, reliable, and compliant non-emergency medical transportation."
      />

      {/* ---- Intro Section ---- */}
      <section className="section partnership-intro">
        <div className="container">
          <div className="partnership-intro__grid">
            <div className="partnership-intro__content">
              <SectionHeading
                subtitle="Why Partner With Us"
                title="Reliable, Fully Insured, and Standards-Compliant"
                align="left"
              />
              <p className="partnership-intro__text">
                World Class Transit Group is more than just a transportation provider; we are a dedicated partner in the continuum of care. We understand the complexities of healthcare logistics and are fully equipped to meet rigorous industry and facility standards.
              </p>
              <p className="partnership-intro__text">
                We are committed to maintaining the highest standards of safety, compliance, and patient care. Our operational protocols are designed to seamlessly integrate with your facility’s workflows while ensuring patient dignity and comfort.
              </p>
            </div>
            <div className="partnership-intro__card">
              <div className="partnership-intro__card-icon">🤝</div>
              <h3>Ready to Start?</h3>
              <p>Contact our partnership team today to discuss how we can support your facility’s transportation needs.</p>
              <a href="/contact" className="partnership-intro__cta">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Insurance Section ---- */}
      <section className="section section--gray partnership-insurance">
        <div className="container">
          <SectionHeading
            subtitle="Security & Compliance"
            title="Comprehensive Insurance Coverage"
            description="Our insurance portfolio is built to meet and exceed the requirements of modern healthcare facilities and regulatory bodies."
          />
          
          <div className="partnership-insurance__grid">
            {insuranceDetails.map((item, index) => (
              <div key={index} className="insurance-card">
                <div className="insurance-card__icon">{item.icon}</div>
                <h4 className="insurance-card__title">{item.title}</h4>
                <div className="insurance-card__amount">{item.amount}</div>
                <p className="insurance-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="partnership-insurance__footer">
            <div className="partnership-insurance__note">
              <FiShield className="note-icon" />
              <p>
                Our team is fully insured and equipped to meet industry standards. We provide COIs (Certificates of Insurance) upon request to all partnering facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
