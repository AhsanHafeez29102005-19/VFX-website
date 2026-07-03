import { testimonials } from '../../data/stats';
import './Testimonials.css';

const Testimonials = () => {
  const item = testimonials[0];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__card">
          <div className="testimonials__stars">
            {'★'.repeat(item.rating)}
          </div>
          <p className="testimonials__text">{item.text}</p>
          <p className="testimonials__author">— {item.author}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
