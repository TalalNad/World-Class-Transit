import './MapSection.css';

const MapSection = ({ className = '' }) => {
  return (
    <div className={`map-section ${className}`} id="service-area-map">
      <div className="map-section__wrapper">
        {/* Placeholder for an actual Google Maps / Mapbox embed */}
        <div className="map-section__placeholder">
          <div className="map-section__icon">📍</div>
          <h3 className="map-section__title">Our Service Area</h3>
          <p className="map-section__text">
            We proudly serve communities across the region, connecting people
            to healthcare facilities, medical appointments, and essential services.
          </p>
          <div className="map-section__regions">
            <span className="map-section__region">Metro Area</span>
            <span className="map-section__region">Suburban Communities</span>
            <span className="map-section__region">Rural Access Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
