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

      {/* Layered geometric background elements */}
      <div className="hero__bg-pattern" aria-hidden="true">
        {/* Medical cross pattern */}
        <svg className="hero__cross hero__cross--1" viewBox="0 0 60 60" fill="none">
          <rect x="22" y="0" width="16" height="60" rx="3" fill="currentColor"/>
          <rect x="0" y="22" width="60" height="16" rx="3" fill="currentColor"/>
        </svg>
        <svg className="hero__cross hero__cross--2" viewBox="0 0 60 60" fill="none">
          <rect x="22" y="0" width="16" height="60" rx="3" fill="currentColor"/>
          <rect x="0" y="22" width="60" height="16" rx="3" fill="currentColor"/>
        </svg>
        <svg className="hero__cross hero__cross--3" viewBox="0 0 60 60" fill="none">
          <rect x="22" y="0" width="16" height="60" rx="3" fill="currentColor"/>
          <rect x="0" y="22" width="60" height="16" rx="3" fill="currentColor"/>
        </svg>

        {/* Road/route line accents */}
        <div className="hero__route hero__route--1" />
        <div className="hero__route hero__route--2" />

        {/* Subtle grid dots */}
        <div className="hero__dots" />

        {/* Gradient glow orbs */}
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      {/* Bottom wave transition */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C360,120 720,20 1080,70 C1260,90 1380,60 1440,40 L1440,120 L0,120 Z" fill="var(--color-white)" />
        </svg>
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
