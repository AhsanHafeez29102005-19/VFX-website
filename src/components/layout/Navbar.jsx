import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { serviceCategories } from '../../data/serviceCategories';
import { Icon } from '../common/Icons';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith('/services');

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={closeAll}>
          <span className="navbar__logo-main">
            <span className="navbar__logo-accent">MIKRAM</span> VFX STUDIO
          </span>
          <span className="navbar__logo-sub">Professional VFX Cleanup Artist</span>
        </NavLink>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeAll}>
            Home
          </NavLink>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`navbar__link navbar__dropdown-trigger ${isServicesActive ? 'navbar__link--active' : ''}`}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services <Icon.ChevronDown width={14} height={14} />
            </button>
            {servicesOpen && (
              <div className="navbar__dropdown-menu">
                <NavLink to="/services" className="navbar__dropdown-item navbar__dropdown-item--all" onClick={closeAll}>
                  All Services
                </NavLink>
                {serviceCategories.map((s) => (
                  <NavLink key={s.slug} to={`/services/${s.slug}`} className="navbar__dropdown-item" onClick={closeAll}>
                    {s.navLabel}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeAll}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeAll}>
            About Me
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeAll}>
            How It Works
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} onClick={closeAll}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <Button to="/quote" variant="primary" icon={<Icon.Send width={15} height={15} />}>
            Request A Free Quote
          </Button>
        </div>

        <button className="navbar__toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
