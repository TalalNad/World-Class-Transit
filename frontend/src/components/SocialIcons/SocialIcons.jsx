import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './SocialIcons.css';

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
  { name: 'Instagram', icon: <FaInstagram />, url: '#' },
  { name: 'X', icon: <FaXTwitter />, url: '#' },
];

const SocialIcons = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`social-icons social-icons--${variant} ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="social-icons__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          id={`social-${social.name.toLowerCase()}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
