import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/serviceCategories';
import { Icon } from '../common/Icons';
import './ServicesGrid.css';

const ServicesGrid = () => {
  return (
    <section className="services-grid">
      <div className="container services-grid__inner">
        {serviceCategories.map((service) => {
          const CardIcon = Icon[service.tabs[0].icon] || Icon.Object;
          return (
            <div className="service-card" key={service.slug}>
              <div className={`service-card__icon icon-hex service-card__icon--${service.color}`}>
                <CardIcon />
              </div>
              <h3>{service.navLabel}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`} className="service-card__link">
                Learn More →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
