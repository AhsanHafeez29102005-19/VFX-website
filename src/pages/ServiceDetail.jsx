import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, serviceCategories } from '../data/serviceCategories';
import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import refImg from '../assets/images/img.png';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [activeTab, setActiveTab] = useState(0);

  if (!service) return <Navigate to="/services" replace />;

  const tab = service.tabs[activeTab];
  const ActiveIcon = Icon[tab.icon] || Icon.Object;

  return (
    <div className="service-detail">
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">{service.eyebrow}</span>
            <h1 style={{ whiteSpace: 'pre-line' }}>{service.title}</h1>
            <p className="service-detail__breadcrumb">
              <Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt; {service.navLabel}
            </p>
            <p className="service-detail__lead">{service.description}</p>
            <div className="service-detail__actions">
              <Button to="/quote" variant="primary">Request A Free Quote</Button>
              <Button to="/portfolio" variant="outline">View Portfolio</Button>
            </div>
          </div>
          <div className="media-placeholder">
            <img src={refImg} alt={service.navLabel} />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="container">
        <div className="service-tabs">
          {service.tabs.map((t, i) => {
            const TabIcon = Icon[t.icon] || Icon.Object;
            return (
              <button
                key={t.id}
                className={`service-tabs__item ${i === activeTab ? 'service-tabs__item--active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <TabIcon width={18} height={18} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail blocks — render all tabs stacked (matches reference layout) */}
      <div className="container service-detail__blocks">
        {service.tabs.map((t, i) => {
          const BIcon = Icon[t.icon] || Icon.Object;
          return (
            <div className={`service-block ${i === activeTab ? 'service-block--highlight' : ''}`} key={t.id}>
              <div className="service-block__info">
                <div className={`service-block__icon icon-hex service-block__icon--${service.color}`}>
                  <BIcon />
                </div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                {t.features && (
                  <ul className="service-block__features">
                    {t.features.map((f) => (
                      <li key={f}><Icon.Check width={14} height={14} /> {f}</li>
                    ))}
                  </ul>
                )}
                <Button to="/quote" variant="primary" className="service-block__btn">
                  Request Similar Service
                </Button>
              </div>
              <div className="service-block__media">
                <div className="media-placeholder before-after">
                  <img src={refImg} alt={t.title} />
                  <span className="tag tag--before">Before</span>
                  <span className="tag tag--after">After</span>
                  <div className="play-btn"><Icon.Play width={14} height={14} /></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="container">
        <div className="service-detail__cta">
          <div className="service-detail__cta-left">
            <div className="service-detail__cta-icon"><Icon.Send width={18} height={18} /></div>
            <div>
              <h3>Need Something Else {service.slug === 'blur' ? 'Blurred' : service.slug === 'screen-replacement' ? 'Replaced' : 'Removed'}?</h3>
              <p>If you have a specific requirement, just send me your footage and I'll take care of the rest.</p>
            </div>
          </div>
          <Button to="/quote" variant="primary">Request A Free Quote</Button>
        </div>
      </div>

      {/* Other services quick links */}
      <div className="container service-detail__others">
        <h3>Other Services</h3>
        <div className="service-detail__others-grid">
          {serviceCategories.filter((s) => s.slug !== service.slug).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-detail__other-link">
              {s.navLabel} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
