import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import SocialIcons from '../SocialIcons';
import LogoImg from '../../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Start Partnership', path: '/partnership' },
  { label: 'Schedule Ride', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      {/* Top bar */}
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <div className="navbar__topbar-left">
            <a href="tel:5551234567" className="navbar__topbar-phone">
              <FiPhone /> (555) 123-4567
            </a>
            <span className="navbar__topbar-divider">|</span>
            <span className="navbar__topbar-text">Serving Communities with Care</span>
          </div>
          <SocialIcons variant="default" className="navbar__topbar-social" />
        </div>
      </div>

      {/* Main nav */}
      <nav className="navbar__main">
        <div className="container navbar__main-inner">
          <Link to="/" className="navbar__logo" id="navbar-logo">
            <div className="navbar__logo-img-wrapper">
              <img src={LogoImg} alt="World Class Transit Logo" className="navbar__logo-img" />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-title">World Class Transit</span>
              <span className="navbar__logo-tagline">The Care You Deserve</span>
            </div>
          </Link>

          <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path} className="navbar__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="navbar__item navbar__item--cta">
              <a href="tel:5551234567" className="navbar__cta">
                <FiPhone />
                <span>Call Us</span>
              </a>
            </li>
          </ul>

          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            id="navbar-toggle"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
