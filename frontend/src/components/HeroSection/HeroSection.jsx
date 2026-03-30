import Button from '../Button';
import './HeroSection.css';

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  children,
}) => {
  return (
    <section
      className="hero"
      id="hero-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {overlay && <div className="hero__overlay" />}
      <div className="hero__particles">
        <div className="hero__particle hero__particle--1" />
        <div className="hero__particle hero__particle--2" />
        <div className="hero__particle hero__particle--3" />
      </div>
      <div className="container hero__content">
        <div className="hero__text">
          {subtitle && <span className="hero__subtitle">{subtitle}</span>}
          <h1 className="hero__title">{title}</h1>
          {description && <p className="hero__desc">{description}</p>}
          <div className="hero__actions">
            {primaryAction && (
              <Button
                variant="secondary"
                size="lg"
                to={primaryAction.to}
                href={primaryAction.href}
                icon={primaryAction.icon}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                to={secondaryAction.to}
                href={secondaryAction.href}
                className="hero__btn-outline"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
        {children && <div className="hero__extra">{children}</div>}
      </div>
    </section>
  );
};

export default HeroSection;
