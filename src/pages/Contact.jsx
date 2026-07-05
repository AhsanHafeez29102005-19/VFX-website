import { useState } from 'react';
import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import { formatContactMessage, sendViaWhatsapp, sendViaEmail } from '../utils/contactActions';
import workspaceImg from '../assets/images/img.png';
import './Contact.css';

const contactCards = [
  { icon: 'Whatsapp', title: 'WhatsApp', value: '+92 306 1234567', text: 'Chat with me on WhatsApp for quick responses.', color: 'green', href: 'https://wa.me/923061234567' },
  { icon: 'Linkedin', title: 'LinkedIn', value: 'linkedin.com/in/muhammadikram', text: 'Connect on LinkedIn to view my profile and work experience.', color: 'blue', href: 'https://linkedin.com/in/muhammadikram' },
  { icon: 'Email', title: 'Email', value: 'ikramvfxstudio@gmail.com', text: "Send me an email anytime. I'll reply as soon as possible.", color: 'blue', href: 'mailto:ikramvfxstudio@gmail.com' },
  { icon: 'Location', title: 'Location', value: 'Pakistan (Remote)', text: 'Available for projects worldwide.', color: 'blue', href: null },
];

const perks = [
  { icon: 'Clock', title: 'Fast Response', text: 'I usually respond within a few hours.' },
  { icon: 'Shield', title: '100% Confidential', text: 'Your footage and project details are safe with me.' },
  { icon: 'Award', title: 'High Quality Results', text: 'Clean, natural and cinematic VFX results.' },
  { icon: 'Headset', title: 'Dedicated Support', text: "I'm here to help you from start to finish." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = formatContactMessage(form);
    sendViaWhatsapp(message);
    setSubmitted(true);
  };

  const message = formatContactMessage(form);

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Contact Me</span>
            <h1>Let's Work Together.</h1>
            <p className="contact__lead">
              Have a project in mind? Send me your footage and details. I'll review it and get back
              to you with the best solution and a free quote.
            </p>
          </div>
          <div className="media-placeholder">
            <img src={workspaceImg} alt="Workspace" />
          </div>
        </div>
      </section>

      <div className="container contact__grid">
        <div className="contact__cards">
          {contactCards.map((c) => {
            const CIcon = Icon[c.icon] || Icon.Email;
            const CardTag = c.href ? 'a' : 'div';
            const linkProps = c.href
              ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: c.href.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {};
            return (
              <CardTag className="contact__card" key={c.title} {...linkProps}>
                <div className={`contact__card-icon contact__card-icon--${c.color}`}><CIcon width={18} height={18} /></div>
                <div>
                  <h4>{c.title}</h4>
                  <p className="contact__card-value">{c.value}</p>
                  <p className="contact__card-text">{c.text}</p>
                </div>
              </CardTag>
            );
          })}
        </div>

        <div className="contact__form-card">
          <div className="contact__form-header">
            <div className="contact__form-icon"><Icon.Send width={18} height={18} /></div>
            <div>
              <h3>Send Your Project Details</h3>
              <p>Share your project information and footage. I'll review it and send you a clear quote, delivery time and the best solution.</p>
            </div>
          </div>

          {submitted ? (
            <div className="contact__success">
              <Icon.Check width={24} height={24} />
              <p>
                I've opened WhatsApp with your message pre-filled — just hit send there. If it
                didn't open (pop-up blocked), use one of the options below instead.
              </p>
              <div className="contact__success-actions">
                <Button href={`https://wa.me/923061234567?text=${encodeURIComponent(message)}`} variant="primary" icon={<Icon.Whatsapp width={15} height={15} />}>
                  Open WhatsApp
                </Button>
                <Button onClick={() => sendViaEmail('New Contact Message', message)} variant="outline" icon={<Icon.Email width={15} height={15} />}>
                  Send via Email
                </Button>
              </div>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Your Name *</label>
                  <input name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="contact__field">
                  <label>Email Address *</label>
                  <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact__field">
                <label>WhatsApp Number</label>
                <input name="whatsapp" type="text" placeholder="Enter your WhatsApp number" value={form.whatsapp} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label>Project Details *</label>
                <textarea name="message" rows="4" placeholder="Tell me about your project, what you need, any specific instructions..." value={form.message} onChange={handleChange} required />
              </div>
              <div className="contact__upload">
                <Icon.Upload width={22} height={22} />
                <p>Drag &amp; drop files here or click to upload</p>
                <span>Google Drive link works best for large files</span>
              </div>
              <Button type="submit" variant="primary" icon={<Icon.Send width={15} height={15} />}>
                Send Project Details
              </Button>
            </form>
          )}
        </div>

        <div className="contact__perks">
          {perks.map((p) => {
            const PIcon = Icon[p.icon] || Icon.Check;
            return (
              <div className="contact__perk" key={p.title}>
                <div className="contact__perk-icon"><PIcon width={16} height={16} /></div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
