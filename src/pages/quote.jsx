import { useState } from 'react';
import { serviceCategories } from '../data/serviceCategories';
import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import { formatQuoteMessage, sendViaWhatsapp, sendViaEmail } from '../utils/contactActions';
import './Quote.css';

const nextSteps = [
  { icon: 'Email', text: 'We review your project and footage.' },
  { icon: 'Clock', text: 'I send you the price, deadline and a small sample (if needed).' },
  { icon: 'Check', text: 'You approve the quote.' },
  { icon: 'Shield', text: 'You make the payment (Payoneer or Bank Transfer).' },
  { icon: 'Award', text: "You'll receive the final high-quality work." },
];

const Quote = () => {
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', service: '', description: '', deadline: '', budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = formatQuoteMessage(form);
    sendViaWhatsapp(message);
    setSubmitted(true);
  };

  const message = formatQuoteMessage(form);

  return (
    <div className="quote">
      <section className="page-hero" style={{ paddingBottom: 24 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Get A Quote</span>
          <h1>Request A Free Quote</h1>
          <p className="quote__lead">Tell me about your project and I'll review it for free.</p>
        </div>
      </section>

      <div className="container quote__grid">
        <div className="quote__form-card">
          <h3>Tell Me About Your Project</h3>

          {submitted ? (
            <div className="quote__success">
              <Icon.Check width={26} height={26} />
              <p>
                I've opened WhatsApp with your request pre-filled — just hit send there. If it
                didn't open (pop-up blocked), use one of the options below instead.
              </p>
              <div className="quote__success-actions">
                <Button href={`https://wa.me/923061234567?text=${encodeURIComponent(message)}`} variant="primary" icon={<Icon.Whatsapp width={15} height={15} />}>
                  Open WhatsApp
                </Button>
                <Button onClick={() => sendViaEmail('New Quote Request', message)} variant="outline" icon={<Icon.Email width={15} height={15} />}>
                  Send via Email
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="quote__row">
                <div className="quote__field">
                  <label>Your Name *</label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} required />
                </div>
                <div className="quote__field">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="quote__row">
                <div className="quote__field">
                  <label>WhatsApp Number (Optional)</label>
                  <input name="whatsapp" type="text" value={form.whatsapp} onChange={handleChange} />
                </div>
                <div className="quote__field">
                  <label>Select Service</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {serviceCategories.map((s) => (
                      <option key={s.slug} value={s.navLabel}>{s.navLabel}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="quote__field">
                <label>Project Description *</label>
                <textarea name="description" rows="4" value={form.description} onChange={handleChange} placeholder="Tell me about your project..." required />
              </div>

              <div className="quote__upload">
                <Icon.Upload width={22} height={22} />
                <p>Drag &amp; drop your files here or click to upload</p>
                <span>Google Drive, Dropbox, WeTransfer, Frame.io links also work</span>
              </div>

              <div className="quote__row">
                <div className="quote__field">
                  <label>Project Deadline</label>
                  <select name="deadline" value={form.deadline} onChange={handleChange}>
                    <option value="">Select timeline</option>
                    <option>ASAP</option>
                    <option>Within 3 days</option>
                    <option>Within a week</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="quote__field">
                  <label>Budget Range (Optional)</label>
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select budget</option>
                    <option>Under $50</option>
                    <option>$50 – $150</option>
                    <option>$150 – $500</option>
                    <option>$500+</option>
                  </select>
                </div>
              </div>

              <Button type="submit" variant="primary" icon={<Icon.Send width={15} height={15} />}>
                Submit Request
              </Button>
            </form>
          )}
        </div>

        <div className="quote__sidebar">
          <div className="quote__side-card">
            <h4>What Happens Next?</h4>
            {nextSteps.map((step, i) => {
              const StepIcon = Icon[step.icon] || Icon.Check;
              return (
                <div className="quote__side-item" key={i}>
                  <span className="quote__side-num">{i + 1}</span>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>

          <div className="quote__side-card">
            <h4>Payment Methods</h4>
            <p className="quote__side-text">We accept payments via:</p>
            <div className="quote__payment-badges">
              <span className="quote__badge">Payoneer</span>
              <span className="quote__badge">Bank Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
