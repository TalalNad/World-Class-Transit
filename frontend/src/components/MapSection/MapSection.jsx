import './MapSection.css';
import ElginMap from '../../assets/Elgin.png';

const MapSection = ({ className = '' }) => {
  return (
    <div className={`map-section ${className}`} id="service-area-map">
      <div className="map-section__wrapper">

        <div className="map-section__map-container">
          <img
            src={ElginMap}
            alt="World Class Transit service area map for Elgin, IL"
            className="map-section__image"
          />
        </div>

        <div className="map-section__info-bar">
          <div className="map-section__info-item">
            <span className="map-section__pin-icon">📍</span>
            <div>
              <strong>Elgin, IL</strong>
              <span className="map-section__info-sep"> — </span>
              <span>Main Hub</span>
            </div>
          </div>
          <div className="map-section__info-item">
            <span className="map-section__radius-badge">30 mi</span>
            <span>Service radius in all directions</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MapSection;