import { portfolioItems } from '../../data/portfolio';
import Button from '../common/Button';
import './BeforeAfterGallery.css';

const BeforeAfterGallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__header">
          <div>
            <span className="gallery__eyebrow">Featured Work</span>
            <h2>Before &amp; After Examples</h2>
            <p className="gallery__subtext">
              See how I can transform your footage with professional VFX cleanup
              and make it look perfect.
            </p>
          </div>
          <Button to="/portfolio" variant="outline">View All Projects</Button>
        </div>

        <div className="gallery__grid">
          {portfolioItems.map((item) => (
            <div className="gallery__item" key={item.id}>
              <div className="gallery__thumb">
                <span className="gallery__tag gallery__tag--before">Before</span>
                <span className="gallery__tag gallery__tag--after">After</span>
                <div className="gallery__play">▶</div>
              </div>
              <p className="gallery__caption">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
