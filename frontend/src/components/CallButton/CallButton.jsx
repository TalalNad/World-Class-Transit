import { FiPhone } from 'react-icons/fi';
import './CallButton.css';

const CallButton = ({ phoneNumber = '(555) 123-4567', className = '' }) => {
  return (
    <a
      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
      className={`call-button ${className}`}
      id="call-button"
      aria-label="Call us now"
    >
      <span className="call-button__icon-wrap">
        <FiPhone className="call-button__icon" />
      </span>
      <span className="call-button__text">Call Us Now</span>
    </a>
  );
};

export default CallButton;
