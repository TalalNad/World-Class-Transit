import './SectionHeading.css';

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) => {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''} ${className}`}>
      {subtitle && <span className="section-heading__subtitle">{subtitle}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  );
};

export default SectionHeading;
