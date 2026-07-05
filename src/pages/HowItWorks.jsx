import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import nextImg from '../assets/images/img.png';
import './HowItWorks.css';

const steps = [
  { num: '01', icon: 'Email', title: 'Contact & Send Footage', text: 'Contact me via WhatsApp, LinkedIn or Email and send your project details and footage via Google Drive or any file sharing service.' },
  { num: '02', icon: 'Check', title: 'Footage Review', text: 'I will review your footage carefully and understand your requirements in detail to make sure we are on the same page.' },
  { num: '03', icon: 'Award', title: 'Receive Quote', text: 'You will receive a clear quote, delivery time and project plan. No hidden charges. 100% transparent pricing.' },
  { num: '04', icon: 'Shield', title: 'Start Project', text: 'Once you approve the quote, I will start working on your project and keep you updated on progress.' },
  { num: '05', icon: 'Play', title: 'Delivery', text: 'You will receive the final high quality output via Google Drive or your preferred method.' },
  { num: '06', icon: 'Award', title: 'Review & Support', text: "Review the final results. If you need any changes, I'll make sure you are 100% satisfied." },
];

const whatNext = [
  { icon: 'Clock', title: 'Fast Turnaround', text: 'On-time delivery, every time.' },
  { icon: 'Shield', title: 'Secure & Private', text: 'Your footage is always safe and confidential.' },
  { icon: 'Award', title: 'High Quality Results', text: 'Clean, natural and cinematic results.' },
  { icon: 'Headset', title: 'Dedicated Support', text: "I'm always here to help you." },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <section className="page-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Our Simple Process</span>
          <h1>How It Works</h1>
          <p className="how-it-works__lead">
            I make the process simple, transparent and stress-free so you can get high quality
            VFX results without any hassle.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="how-it-works__steps">
          {steps.map((step, i) => {
            const StepIcon = Icon[step.icon] || Icon.Check;
            return (
              <div className="how-it-works__step" key={step.num}>
                <div className="how-it-works__circle">
                  <StepIcon width={22} height={22} />
                  <span className="how-it-works__num">{step.num}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
                {i < steps.length - 1 && <span className="how-it-works__arrow">→</span>}
              </div>
            );
          })}
        </div>

        <div className="how-it-works__next">
          <div className="how-it-works__next-info">
            <span className="eyebrow">What Happens Next?</span>
            <div className="how-it-works__next-grid">
              {whatNext.map((item) => {
                const ItemIcon = Icon[item.icon] || Icon.Check;
                return (
                  <div className="how-it-works__next-item" key={item.title}>
                    <div className="how-it-works__next-icon"><ItemIcon width={16} height={16} /></div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="media-placeholder how-it-works__next-media">
            <img src={nextImg} alt="Workspace" />
          </div>
        </div>

        <div className="how-it-works__cta">
          <div>
            <h3>Have A Project In Mind?</h3>
            <p>Let's discuss your project and bring your vision to life.</p>
          </div>
          <div className="how-it-works__cta-buttons">
            <Button to="/quote" variant="primary">Request A Free Quote</Button>
            <Button href="https://wa.me/923061234567" variant="outline" icon={<Icon.Whatsapp width={15} height={15} />}>Chat on WhatsApp</Button>
            <Button href="https://linkedin.com/in/muhammadikram" variant="outline" icon={<Icon.Linkedin width={15} height={15} />}>Connect on LinkedIn</Button>
            <Button href="mailto:ikramvfxstudio@gmail.com" variant="outline" icon={<Icon.Email width={15} height={15} />}>Send an Email</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
