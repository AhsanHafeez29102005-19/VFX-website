import Button from '../common/Button';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Have A Project In Mind?</h2>
          <p className="cta__text">
            Send me your footage and I'll review it for free and provide the
            best solution for your project.
          </p>
        </div>

        <div className="cta__right">
          <Button to="/quote" variant="primary">Request A Free Quote</Button>
          <div className="cta__perks">
            <span>✓ Free Review</span>
            <span>✓ Fast Response</span>
            <span>✓ No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
