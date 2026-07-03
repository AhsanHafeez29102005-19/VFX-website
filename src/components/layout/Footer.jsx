import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div>
            <div className="navbar__logo-main">MIKRAM</div>
            <p className="footer__tagline">Professional VFX Cleanup Artist</p>
          </div>

          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Mikram VFX Studio. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
