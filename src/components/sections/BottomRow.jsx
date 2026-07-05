import { testimonials } from '../../data/stats';
import { Icon } from '../common/Icons';
import Button from '../common/Button';
import './BottomRow.css';

const BottomRow = () => {
  const item = testimonials[0];

  return (
    <section className="bottom-row">
      <div className="container bottom-row__grid">
        <div className="bottom-row__card">
          <span className="eyebrow">Client Reviews</span>
          <div className="bottom-row__stars">{'★'.repeat(item.rating)}</div>
          <p className="bottom-row__quote">{item.text}</p>
          <p className="bottom-row__author">— {item.author}</p>
          <div className="bottom-row__dots">
            <span className="dot dot--active" /><span className="dot" /><span className="dot" /><span className="dot" />
          </div>
        </div>

        <div className="bottom-row__card">
          <h3>Have A Project In Mind?</h3>
          <p className="bottom-row__text">
            Send me your footage and I'll review it for free and provide the best solution for your project.
          </p>
          <Button to="/quote" variant="primary">Request A Free Quote</Button>
        </div>

        <div className="bottom-row__card">
          <span className="eyebrow">Contact Me</span>
          <div className="bottom-row__contact-item"><Icon.Whatsapp width={16} height={16} /> WhatsApp: +92 306 1234567</div>
          <div className="bottom-row__contact-item"><Icon.Linkedin width={16} height={16} /> linkedin.com/in/muhammadikram</div>
          <div className="bottom-row__contact-item"><Icon.Email width={16} height={16} /> ikramvfxstudio@gmail.com</div>
        </div>
      </div>
    </section>
  );
};

export default BottomRow;
