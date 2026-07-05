import { testimonials } from '../../data/stats';
import './Testimonials.css';

const Testimonials = () => {
  const item = testimonials[0];
  const dotCount = Math.max(testimonials.length, 4);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__card">
          <div className="testimonials__left">
            <span className="testimonials__label">Client Reviews</span>
            <div className="testimonials__stars">{'★'.repeat(item.rating)}</div>
          </div>

          <div className="testimonials__body">
            <p className="testimonials__text">
              {item.text}
              <br />
              — {item.author}
            </p>
          </div>

          <div className="testimonials__dots">
            {Array.from({ length: dotCount }).map((_, i) => (
              <span key={i} className={`testimonials__dot ${i === 0 ? 'testimonials__dot--active' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
