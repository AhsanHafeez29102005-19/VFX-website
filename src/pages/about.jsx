import { Icon } from '../components/common/Icons';
import Button from '../components/common/Button';
import profileImg from '../assets/images/img.png';
import './About.css';

const specialize = [
  { icon: 'Object', color: 'green', title: 'VFX Cleanup & Object Removal', text: 'Removing objects, wires, logos, people, shadows, reflections and anything that distracts from your scene.' },
  { icon: 'Roto', color: 'purple', title: 'Rotoscoping', text: 'Accurate roto for people, objects, hair, and complex motion.' },
  { icon: 'ComputerScreen', color: 'orange', title: 'Screen Tracking & Replacement', text: 'Advanced tracking and screen replacement for phones, TVs, billboards and more.' },
  { icon: 'Blur', color: 'pink', title: 'Blur Sensitive Information', text: 'Blurring faces, license plates, documents, screens and any sensitive details.' },
];

const tools = [
  { code: 'Ae', name: 'Adobe After Effects', text: 'Compositing, cleanup, tracking, rotoscoping' },
  { code: 'M', name: 'Mocha Pro', text: 'Planar tracking, object tracking, roto' },
  { code: 'DR', name: 'DaVinci Resolve', text: 'Color correction and delivery' },
  { code: 'Ps', name: 'Adobe Photoshop', text: 'Image cleanup and detailed touch-ups' },
];

const approach = [
  { icon: 'Object', title: 'Understand', text: 'I carefully analyze your footage and requirements.' },
  { icon: 'Roto', title: 'Create', text: 'I apply the right techniques with precision and care.' },
  { icon: 'Check', title: 'Deliver', text: 'You get clean, natural results delivered on time, every time.' },
];

const software = ['Ae', 'Pr', 'Ps', 'Mocha', 'Primatte', 'Sapphire', 'Boris FX', 'Red Giant', 'Flow', 'Duik', 'fxphd', 'and more...'];

const About = () => {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">About Me</span>
            <h1>Hi, I'm Muhammad Ikram</h1>
            <h2 className="about__subheading">Professional VFX Cleanup Artist</h2>
            <p className="about__lead">
              I have 6+ years of experience in professional VFX cleanup, rotoscoping, object removal,
              screen replacement and blurring sensitive information. I work with filmmakers, agencies,
              brands and YouTubers from all over the world.
            </p>
            <div className="about__tools-row">
              {[
                { code: 'Ae', name: 'After Effects', color: '#9999f7' },
                { code: 'Mo', name: 'Mocha Pro', color: '#3b82f6' },
                { code: 'Ps', name: 'Photoshop', color: '#31a8ff' },
                { code: 'Pr', name: 'Premiere Pro', color: '#9b6bf0' },
                { code: 'DR', name: 'DaVinci Resolve', color: '#f97316' },
              ].map((t) => (
                <div className="about__tool-icon" key={t.code} style={{ background: t.color }} title={t.name}>
                  {t.code}
                </div>
              ))}
            </div>
          </div>
          <div className="media-placeholder">
            <img src={profileImg} alt="Ikram - VFX Cleanup Artist" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="about__perks-row">
          <div className="about__perk"><Icon.Check width={18} height={18} /> High Quality Work</div>
          <div className="about__perk"><Icon.Clock width={18} height={18} /> Fast Turnaround</div>
          <div className="about__perk"><Icon.Award width={18} height={18} /> Unlimited Revisions</div>
          <div className="about__perk"><Icon.Shield width={18} height={18} /> 100% Satisfaction</div>
        </div>
      </div>

      <div className="container about__columns">
        <div className="about__card">
          <span className="eyebrow">My Story</span>
          <p>
            I started my journey as a video editor and over the years I found my true passion in VFX cleanup.
            I love solving complex problems in footage and making the impossible look invisible.
          </p>
          <p>
            From removing tiny wires and mic cables to replacing screens, logos, and cleaning up busy
            environments — I focus on the details that make your story look perfect.
          </p>
          <p>
            Every project is personal for me. I treat your footage like my own and deliver results that
            exceed expectations.
          </p>
          <p className="about__signature">Ikram — Ikram VFX Studio</p>
        </div>

        <div className="about__card">
          <span className="eyebrow">What I Specialize In</span>
          <div className="about__list">
            {specialize.map((item) => {
              const ItemIcon = Icon[item.icon] || Icon.Object;
              return (
                <div className="about__list-item" key={item.title}>
                  <div className={`about__list-icon icon-hex about__list-icon--${item.color}`}><ItemIcon width={18} height={18} /></div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about__card">
          <span className="eyebrow">Tools I Use</span>
          <div className="about__list">
            {tools.map((tool) => (
              <div className="about__list-item" key={tool.name}>
                <div className="about__tool-badge">{tool.code}</div>
                <div>
                  <h4>{tool.name}</h4>
                  <p>{tool.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container about__row2">
        <div className="about__card about__software">
          <span className="eyebrow">Software &amp; Plugins</span>
          <div className="about__chips">
            {software.map((s) => (
              <span className="about__chip" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="about__card about__approach">
          <span className="eyebrow">My Approach</span>
          <div className="about__approach-grid">
            {approach.map((a) => {
              const AIcon = Icon[a.icon] || Icon.Check;
              return (
                <div className="about__approach-item" key={a.title}>
                  <div className="about__approach-icon"><AIcon width={18} height={18} /></div>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about__cta">
          <div className="about__cta-left">
            <div className="about__cta-icon"><Icon.Send width={18} height={18} /></div>
            <div>
              <h3>Let's Work Together</h3>
              <p>If you have a project in mind, I'd love to help you bring your vision to life.</p>
            </div>
          </div>
          <div className="about__cta-right">
            <Button to="/quote" variant="primary">Request A Free Quote</Button>
            <div className="about__cta-perks">
              <span>✓ Free Review</span>
              <span>✓ Fast Response</span>
              <span>✓ No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
