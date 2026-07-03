import { services } from '../../data/services';
import { iconMap } from '../common/Icons';
import './ServicesGrid.css';

const ServicesGrid = () => {
  return (
    <section className="services-grid">
      <div className="container services-grid__inner">
        {services.map((service) => {
          const Icon = iconMap[service.id];
          return (
            <div className="service-card" key={service.id}>
              <div className={`service-card__icon service-card__icon--${service.color}`}>
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/services" className="service-card__link">
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
