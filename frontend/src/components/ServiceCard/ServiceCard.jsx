import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="service-card__icon-wrap">
        <span className="service-card__icon">{icon}</span>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <div className="service-card__accent" />
    </div>
  );
};

export default ServiceCard;
