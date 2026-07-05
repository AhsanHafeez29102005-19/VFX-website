import Button from '../common/Button';
import { Icon } from '../common/Icons';
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
            <span><Icon.Check width={13} height={13} /> Free Review</span>
            <span><Icon.Check width={13} height={13} /> Fast Response</span>
            <span><Icon.Check width={13} height={13} /> No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
