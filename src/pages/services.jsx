import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/serviceCategories';
import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import './Services.css';

const Services = () => {
  return (
    <div className="services-hub">
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">What I Offer</span>
          <h1>All Services</h1>
          <p className="services-hub__lead">
            Pick a category below to see detailed before/after examples for each type of VFX cleanup work.
          </p>
        </div>
      </section>

      <div className="container services-hub__grid">
        {serviceCategories.map((service) => {
          const CardIcon = Icon[service.tabs[0].icon] || Icon.Object;
          return (
            <Link to={`/services/${service.slug}`} className="services-hub__card" key={service.slug}>
              <div className={`services-hub__icon services-hub__icon--${service.color}`}>
                <CardIcon />
              </div>
              <h3>{service.navLabel}</h3>
              <p>{service.description}</p>
              <span className="services-hub__link">Explore →</span>
            </Link>
          );
        })}
      </div>

      <div className="container">
        <div className="services-hub__cta">
          <div>
            <h3>Need Something Else?</h3>
            <p>If you have a specific requirement, just send me your footage and I'll take care of the rest.</p>
          </div>
          <Button to="/quote" variant="primary">Request A Free Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
