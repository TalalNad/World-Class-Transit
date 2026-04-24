import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SocialIcons from '../SocialIcons';
import LogoImg from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div className="footer__col footer__col--brand">
              <div className="footer__logo">
                <img src={LogoImg} alt="World Class Transit Group" className="footer__logo-img" />
              </div>
              <p className="footer__brand-desc">
                Providing safe, reliable, and compassionate transportation services
                to healthcare facilities and community destinations. We&apos;re not just
                in the transit business — we&apos;re in the people business.
              </p>
              <SocialIcons variant="footer" />
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__list">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/about" className="footer__link">About Us</Link></li>
                <li><Link to="/services" className="footer__link">Services</Link></li>
                <li><Link to="/contact" className="footer__link">Schedule Ride</Link></li>
                <li><Link to="/partnership" className="footer__link">Start Partnership</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__list">
                <li><Link to="/services" className="footer__link">Medical Transportation</Link></li>
                <li><Link to="/services" className="footer__link">Non-Emergency Transport</Link></li>
                <li><Link to="/services" className="footer__link">Wheelchair Services</Link></li>
                <li><Link to="/services" className="footer__link">Community Transit</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__col">
              <h4 className="footer__heading">Contact Info</h4>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <FiPhone className="footer__contact-icon" />
                  <a href="tel:5551234567" className="footer__link">(555) 123-4567</a>
                </li>
                <li className="footer__contact-item">
                  <FiMail className="footer__contact-icon" />
                  <a href="mailto:info@wctransitgroup.com" className="footer__link">info@wctransitgroup.com</a>
                </li>
                <li className="footer__contact-item">
                  <FiMapPin className="footer__contact-icon" />
                  <span className="footer__link">Service Area, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {currentYear} World Class Transit Group. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/" className="footer__legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
