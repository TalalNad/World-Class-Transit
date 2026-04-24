import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './HeroCarousel.css';

// Import images
import c1 from '../../assets/carousels/c1.jpeg';
import c2 from '../../assets/carousels/c2.jpeg';
import c3 from '../../assets/carousels/c3.jpeg';

const slides = [
  {
    id: 1,
    image: c1,
    subtitle: 'World Class Transit Group',
    title: 'Your Trusted Partner in Healthcare Transportation',
    description: "Safe, reliable, and compassionate transportation connecting communities to the care they need.",
  },
  {
    id: 2,
    image: c2,
    subtitle: 'Safe & Reliable',
    title: 'Dependable Non-Emergency Medical Transport',
    description: "Our professionally trained drivers ensure you arrive safely, comfortably, and on time for every appointment.",
  },
  {
    id: 3,
    image: c3,
    subtitle: 'Community First',
    title: 'Serving Our Community with Compassion & Care',
    description: "At World Class Transit Group, transportation is just the vehicle — our true mission is connecting people to the care they deserve.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-carousel" id="hero-carousel">
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-carousel__slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-carousel__overlay" />

            {/* Bottom wave transition - matching HeroSection */}
            <div className="hero-carousel__wave" aria-hidden="true">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,80 C360,120 720,20 1080,70 C1260,90 1380,60 1440,40 L1440,120 L0,120 Z" fill="var(--color-white)" />
              </svg>
            </div>

            <div className="container hero-carousel__content">
              <div className="hero-carousel__text">
                <span className="hero-carousel__subtitle">{slide.subtitle}</span>
                <h1 className="hero-carousel__title">
                  {slide.title.includes('Healthcare Transportation') ? (
                    <>Your Trusted Partner in <span className="text-highlight">Healthcare Transportation</span></>
                  ) : slide.title}
                </h1>
                <p className="hero-carousel__desc">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel__dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
