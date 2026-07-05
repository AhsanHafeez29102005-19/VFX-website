import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { portfolioFilters, portfolioItems } from '../data/portfolio';
import Button from '../components/common/Button';
import thumbImg from '../assets/images/img.png';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    return portfolioItems.filter((item) => activeFilter === 'All' || item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="portfolio">
      <section className="page-hero" style={{ paddingBottom: 16 }}>
        <div className="container" style={{ textAlign: 'left' }}>
          <h1>Portfolio</h1>
          <p className="portfolio__breadcrumb">
            <Link to="/">Home</Link> &gt; Portfolio
          </p>
        </div>
      </section>

      <div className="container">
        <div className="portfolio__filters">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              className={`portfolio__filter-btn ${activeFilter === f ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((item) => (
            <div className="portfolio__card" key={item.id}>
              <div className="media-placeholder portfolio__thumb">
                <img src={thumbImg} alt={item.title} />
                <span className="tag tag--before">Before</span>
                <span className="tag tag--after">After</span>
                <div className="play-btn">▶</div>
              </div>
              <p className="portfolio__caption">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="portfolio__more">
          <Button to="/portfolio" variant="primary">View More Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
