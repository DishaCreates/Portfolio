import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const skillGroups = [
  { label: 'Development', items: ['Kotlin', 'Android Development', 'XML', 'Firebase'] },
  { label: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Design', items: ['UI/UX', 'Responsive Design'] },
  { label: 'AI-powered', items: ['Cursor', 'Kiro', 'Antigravity', 'AI workflows'] },
];

const projects = [
  {
    number: '01',
    name: 'Redsync',
    type: 'Blood Donation · Mobile Application',
    description: 'A modern blood donation platform designed to help connect donors and recipients, making timely support feel more human and accessible.',
    tags: ['Android Studio', 'Kotlin', 'Firebase', 'Maps', 'AI Tools'],
    className: 'project-red',
    icon: '✦',
  },
  {
    number: '02',
    name: 'Safevia',
    type: 'Personal Safety · Mobile Application',
    description: 'A safety-focused application built around quick access to emergency support, live location and essential moments that need clarity.',
    tags: ['Android', 'Kotlin', 'Firebase', 'Location Services'],
    className: 'project-safe',
    icon: '◌',
  },
  {
    number: '03',
    name: 'Taskbee',
    type: 'Productivity · Task Management',
    description: 'A clean productivity application designed to organize tasks, track progress and make everyday planning feel lighter.',
    tags: ['Android', 'Kotlin', 'XML'],
    className: 'project-task',
    icon: '＋',
  },
];

const principles = [
  ['01', 'Curiosity', 'Always exploring new technologies and better ways to solve problems.'],
  ['02', 'Creativity', 'Finding simple and engaging ways to turn ideas into experiences.'],
  ['03', 'Adaptability', 'Learning quickly and adapting to new tools, technologies and challenges.'],
  ['04', 'Building', 'Turning concepts into working, useful products.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSkill, setActiveSkill] = useState('Kotlin');
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    const handlePointer = (event: PointerEvent) => {
      setCursor({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll<HTMLElement>('.section-pad:not(.hero)').forEach((section) => revealObserver.observe(section));
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointer, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell" style={{ '--cursor-x': `${cursor.x}%`, '--cursor-y': `${cursor.y}%` } as CSSProperties}>
      <div className="ambient-glow" />
      <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
        <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Back to home">DISHA<span>.</span></button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item === 'Home' ? 'home' : item.toLowerCase())}>{item}</button>)}
          <button className="nav-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>
        <button className="talk-link" onClick={() => scrollTo('contact')}>Let&apos;s talk <ArrowUpRight size={15} /></button>
        <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
      </nav>

      <section id="home" className="hero section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> HELLO, I&apos;M DISHA</p>
          <h1>I build digital<br /><em>experiences</em><br />that people <span className="outline-word">remember.</span></h1>
          <div className="hero-bottom">
            <p className="hero-role">Developer <span>•</span> Creative Thinker <span>•</span> Problem Solver</p>
            <p className="hero-intro">I enjoy building useful digital experiences, exploring technology and combining creativity with development to make ideas feel real.</p>
          </div>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo('projects')}>Explore my work <ArrowDownRight size={16} /></button>
            <button className="button button-ghost" onClick={() => scrollTo('contact')}>Let&apos;s connect <ArrowUpRight size={16} /></button>
          </div>
          <p className="availability"><span className="pulse-dot" /> Open to opportunities</p>
        </div>
        <div className="hero-visual" aria-label="Abstract portrait and developer visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="portrait-frame">
              <img className="portrait-photo" src="/compressed_image_under_1MB_(1).jpg" alt="Disha portrait" onLoad={(event) => { event.currentTarget.parentElement?.classList.add('has-photo'); }} onError={(event) => { event.currentTarget.style.display = 'none'; }} />
            <div className="portrait-shade" />
            <div className="portrait-silhouette"><div className="portrait-head" /><div className="portrait-body" /></div>
            <div className="portrait-label"><span>DSH / 24</span><span>CREATIVE DEVELOPER</span></div>
          </div>
          <div className="code-fragment fragment-top">&lt;idea /&gt;<br /><span>build: true</span></div>
          <div className="code-fragment fragment-bottom">digital<br /><span>stories_01</span></div>
          <div className="hero-cross cross-one" /><div className="hero-cross cross-two" />
        </div>
        <div className="scroll-cue"><MousePointer2 size={14} /> Scroll to explore <span /></div>
      </section>

      <section id="about" className="about section-pad section-border">
        <div className="section-label"><span>01</span> About me <span className="label-line" /></div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span>Creative by mindset.</span><br />Builder by choice.</h2>
          <div className="about-copy"><p className="lead-copy">I&apos;m Disha — a developer who likes to work where logic meets imagination.</p><p>I&apos;m curious about how things work, adaptable when the path changes, and drawn to the small details that make a digital product feel considered. From mobile apps to web experiences, I love turning real-world needs into products that are useful, clear and a little more delightful.</p><div className="about-facts"><span><strong>Based in</strong> India</span><span><strong>Focus</strong> Product &amp; mobile</span><span><strong>Currently</strong> Learning in public</span></div></div>
        </div>
      </section>

      <section id="skills" className="skills section-pad section-border">
        <div className="section-label"><span>02</span> Toolkit <span className="label-line" /></div>
        <div className="section-heading-row"><h2>Tools I build <em>with.</em></h2><p>My toolkit is always evolving, but the intention stays the same: make things that work beautifully.</p></div>
        <div className="skills-layout"><div className="skills-list">{skillGroups.map((group) => <div className="skill-group" key={group.label}><p>{group.label}</p>{group.items.map((skill) => <button className={activeSkill === skill ? 'active' : ''} onMouseEnter={() => setActiveSkill(skill)} onFocus={() => setActiveSkill(skill)} key={skill}><span>{skill}</span><ArrowUpRight size={15} /></button>)}</div>)}</div><div className="skill-stage"><div className="stage-grid" /><Sparkles size={18} className="stage-spark" /><p className="stage-index">{activeSkill === 'Kotlin' ? 'K / 01' : 'DS / 0' + (activeSkill.length % 5 + 1)}</p><h3>{activeSkill}</h3><p>Selected tool in Disha&apos;s evolving creative practice.</p><div className="stage-orbit" /></div></div>
      </section>

      <section id="projects" className="projects section-pad section-border">
        <div className="section-label"><span>03</span> Selected work <span className="label-line" /></div>
        <div className="section-heading-row"><h2>A few things<br /><em>I&apos;ve built.</em></h2><p>Ideas become more interesting once they leave the notebook. Here are a few that made it out.</p></div>
        <div className="project-stack">{projects.map((project) => <article className="project-row" key={project.name}><div className={`project-art ${project.className}`}><span className="art-number">{project.number}</span><div className="art-shape"><span>{project.icon}</span></div><p>CASE STUDY / {project.number}</p></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="#contact">View project <ExternalLink size={14} /></a><a href="#contact">GitHub <ArrowUpRight size={14} /></a></div></div></article>)}</div>
      </section>

      <section className="principles section-pad section-border"><div className="section-label"><span>04</span> How I think <span className="label-line" /></div><div className="section-heading-row"><h2>More than<br /><em>just code.</em></h2><p>The best work is built with attention, a willingness to learn and a reason to exist.</p></div><div className="principle-list">{principles.map(([number, title, text]) => <div className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={18} /></div>)}</div></section>

      <section id="journey" className="journey section-pad section-border"><div className="section-label"><span>05</span> The journey <span className="label-line" /></div><div className="journey-grid"><div><h2>Always in<br /><em>progress.</em></h2><p className="journey-intro">A timeline of projects, experiments and the milestones that keep the work moving forward.</p></div><div className="timeline"><div className="timeline-line" />{[['2024', 'Started building', 'First steps into Android development and product thinking.'], ['2025', 'Built in public', 'Created Redsync, Safevia and a growing collection of experiments.'], ['2026', 'Next chapter', 'Exploring bigger ideas, better interfaces and meaningful collaboration.']].map(([year, title, text]) => <div className="timeline-item" key={year}><span className="timeline-dot" /><p>{year}</p><div><h3>{title}</h3><span>{text}</span></div></div>)}</div></div></section>

      <section className="social-proof section-pad section-border"><div className="social-mark"><Github size={26} /></div><div><p className="eyebrow">MORE CODE. MORE EXPERIMENTS.</p><h2>See what&apos;s<br /><em>next.</em></h2></div><div className="social-actions"><p>Explore my projects, experiments<br />and development journey.</p><a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={16} /></a><a className="text-link" href="https://linkedin.com" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div></section>

      <section id="contact" className="contact section-pad"><div className="contact-glow" /><p className="eyebrow">06 / CONTACT</p><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><p className="contact-sub">I&apos;m always interested in learning, building and collaborating on meaningful ideas.</p><a className="contact-button" href="mailto:disha@example.com">Let&apos;s talk <ArrowUpRight size={19} /></a><div className="contact-details"><a href="mailto:disha@example.com"><Mail size={16} /> disha@example.com</a><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div></section>

      <footer className="site-footer"><button className="wordmark" onClick={() => scrollTo('home')}>DISHA<span>.</span></button><p>Designed &amp; built with curiosity.</p><p>© {new Date().getFullYear()} Disha</p></footer>
    </main>
  );
}

export default App;
