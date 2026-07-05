import Button from '../common/Button';
import heroImg from '../../assets/images/img.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Professional VFX Cleanup Services</span>
          <h1 className="hero__heading">
            Invisible VFX Cleanup <span className="hero__dim">That</span>{' '}
            <span className="hero__highlight">Nobody Notices.</span>
          </h1>
          <p className="hero__text">
            I help filmmakers, agencies, brands and content creators remove unwanted
            objects, wires, logos, microphones and distractions from videos naturally.
          </p>
          <div className="hero__actions">
            <Button to="/quote" variant="primary">Request A Free Quote</Button>
            <Button to="/portfolio" variant="outline">View Portfolio</Button>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-placeholder">
            {/* Swap this block for a real <video autoPlay muted loop playsInline src={...} /> once footage is ready */}
            <img src={heroImg} alt="VFX cleanup studio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
