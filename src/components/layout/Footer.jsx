import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/serviceCategories';
import { Icon } from '../common/Icons';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="navbar__logo-main">
            <span className="navbar__logo-accent">IKRAM</span> VFX STUDIO
          </div>
          <p className="footer__tagline">Professional VFX Cleanup Artist</p>
          <p className="footer__desc">
            I help filmmakers, agencies, brands and content creators remove unwanted objects,
            clean up footage and deliver invisible visual effects that look completely natural.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/923061234567" target="_blank" rel="noopener noreferrer"><Icon.Whatsapp width={16} height={16} /></a>
            <a href="https://linkedin.com/in/muhammadikram" target="_blank" rel="noopener noreferrer"><Icon.Linkedin width={16} height={16} /></a>
            <a href="mailto:ikramvfxstudio@gmail.com"><Icon.Email width={16} height={16} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Me</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          {serviceCategories.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>{s.navLabel}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Contact Info</h4>
          <p className="footer__contact-item"><Icon.Whatsapp width={14} height={14} /> WhatsApp: +92 306 1234567</p>
          <p className="footer__contact-item"><Icon.Linkedin width={14} height={14} /> linkedin.com/in/muhammadikram</p>
          <p className="footer__contact-item"><Icon.Email width={14} height={14} /> ikramvfxstudio@gmail.com</p>
          <p className="footer__contact-item"><Icon.Location width={14} height={14} /> Pakistan (Remote)</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} MIKRAM VFX STUDIO. All Rights Reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
        <p className="footer__credit">Designed &amp; Developed with ❤️ by MIKRAM VFX STUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
