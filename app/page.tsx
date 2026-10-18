"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  ["01", "Salesforce strategy", "A practical roadmap that connects your commercial goals to the platform decisions that matter."],
  ["02", "Implementation & delivery", "Senior hands-on delivery for new orgs, complex programmes, and the next release."],
  ["03", "Data, AI & automation", "Turn clean data and intelligent automation into faster, more confident decisions."],
  ["04", "Optimisation & support", "A clear-eyed review and a dependable partner to keep your Salesforce investment moving."],
];

const stories = [
  ["Financial services", "From fragmented data to one confident client view.", "Sales Cloud · RevOps", "32% faster handover"],
  ["Healthcare & life sciences", "Less time chasing updates. More time creating outcomes.", "Service Cloud · Automation", "18 hours saved monthly"],
  ["Technology & SaaS", "A revenue system built for the pace of growth.", "Sales Cloud · CPQ", "2x forecast confidence"],
  ["Professional services", "A simpler operating rhythm for a specialist team.", "Data · Tableau · Governance", "14% margin recovered"],
  ["Financial services", "A CRM that finally earns its place in the room.", "Health check · Enablement", "91% active adoption"],
];

const faqs = [
  ["How do we get started?", "We begin with a focused conversation about your goals, current Salesforce landscape, and the outcome that would make the biggest difference."],
  ["Do you work with teams outside the UK?", "Yes. Noventri supports teams across the UK, US, and Germany with remote-first delivery and clear, shared ways of working."],
  ["Can you help with an existing Salesforce org?", "Absolutely. We regularly help teams improve adoption, recover stalled implementations, simplify architecture, and plan the next stage."],
];

export default function Home() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setStoryIndex((index) => (index + 1) % stories.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="topline"><span>Salesforce strategy & delivery</span><span>UK · USA · Germany</span></div>
      <header className="alt-header">
        <a href="#top" className="alt-logo" aria-label="Noventrix Global Ltd home"><Image src="/logo.png" alt="Noventrix Global Ltd" width={617} height={201} priority /></a>
        <input className="alt-menu-toggle" id="alt-menu" type="checkbox" />
        <label className="alt-menu-button" htmlFor="alt-menu" aria-label="Toggle navigation"><span /><span /></label>
        <nav className="alt-nav" aria-label="Primary navigation"><a href="#services">Services</a><a href="#process">How we work</a><a href="#stories">Success stories</a><a href="#faq">FAQ</a><a className="alt-nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a></nav>
      </header>

      <section className="alt-hero" id="top">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="alt-hero-copy"><p className="alt-kicker">Salesforce, made useful</p><h1>Move your<br /><em>business</em><br />forward.</h1><p className="alt-lede">We help ambitious teams turn Salesforce into a clearer, smarter way to work, from first decision to lasting delivery.</p><div className="alt-actions"><a className="cyan-button" href="#contact">Book a discovery call <span>↗</span></a><a className="quiet-link" href="#services">Explore our services <span>↓</span></a></div></div>
        <div className="hero-panel"><span className="panel-label">NOVENTRI / 001</span><div className="panel-signal"><span className="signal-dot" /><span className="signal-line" /><span className="signal-dot" /></div><strong>Clarity<br /> in motion.</strong><small>Built around the way<br />your people work.</small></div>
      </section>

      <section className="alt-intro alt-wrap"><div className="alt-overline">01 / The difference</div><div className="alt-intro-content"><h2>The platform is only<br />the beginning.</h2><p>Salesforce can be the clearest, most useful system in your business. Getting there takes more than configuration. It takes sharp thinking, thoughtful design, and a team that stays close to the detail.</p><div className="mini-proof"><div><strong>01</strong><span>Senior people<br />on the work</span></div><div><strong>02</strong><span>Decisions made<br />for momentum</span></div><div><strong>03</strong><span>Progress you<br />can measure</span></div></div></div></section>

      <section className="alt-services alt-wrap" id="services"><div className="section-top"><div><div className="alt-overline">02 / What we do</div><h2>Useful by design.</h2></div><p>Whether you are starting fresh or fixing what is already there, we bring strategy and delivery together.</p></div><div className="alt-service-grid">{services.map(([number, title, description]) => <a className="alt-service-card" href="#contact" key={number}><span className="service-no">{number}</span><span className="service-icon">↗</span><h3>{title}</h3><p>{description}</p><span className="card-link">Explore service <b>↗</b></span></a>)}</div></section>

      <section className="process-band" id="process"><div className="alt-wrap process-inner"><div className="alt-overline">03 / How we work</div><div className="process-heading"><h2>A clear route<br /><em>from here to there.</em></h2><p>Good work feels calm. We make the path visible, keep decisions moving, and leave you with a system your team can own.</p></div><div className="process-steps"><div><span>01</span><h3>Understand</h3><p>We listen first, map the reality, and agree the outcome.</p></div><div><span>02</span><h3>Shape</h3><p>We turn complexity into a plan people can act on.</p></div><div><span>03</span><h3>Deliver</h3><p>We build with your team, making progress visible.</p></div><div><span>04</span><h3>Stay close</h3><p>We help the work keep working after go-live.</p></div></div></div></section>

      <section className="alt-stories alt-wrap" id="stories"><div className="section-top"><div><div className="alt-overline">04 / Success stories</div><h2>Progress,<br /><em>proved.</em></h2></div><div className="story-controls"><span>0{storyIndex + 1} / 0{stories.length}</span><button onClick={() => setStoryIndex((storyIndex + stories.length - 1) % stories.length)} aria-label="Previous success story">←</button><button onClick={() => setStoryIndex((storyIndex + 1) % stories.length)} aria-label="Next success story">→</button></div></div><div className="alt-story-window"><div className="alt-story-track" style={{ transform: `translateX(-${storyIndex * 20}%)` }}>{stories.map(([industry, title, work, outcome], index) => <article className="alt-story-card" key={title}><div className="story-card-head"><span>{industry}</span><b>CASE / 0{index + 1}</b></div><h3>{title}</h3><div className="story-card-meta"><span>{work}</span><strong>{outcome}</strong></div></article>)}</div></div></section>

      <section className="alt-faq alt-wrap" id="faq"><div className="alt-overline">05 / Questions, answered</div><div className="faq-layout"><h2>Start with<br /><em>what&apos;s on your desk.</em></h2><div>{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><b>{openFaq === index ? "−" : "+"}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="alt-contact" id="contact"><div className="alt-wrap contact-inner"><div><div className="alt-overline">06 / Your next move</div><h2>Let&apos;s make<br /><em>something work.</em></h2><p>Tell us where you are, what is changing, and what needs to move. We&apos;ll bring the right people to the first conversation.</p><a className="navy-button" href="mailto:hello@noventri.com">Start a conversation <span>↗</span></a></div><div className="contact-badge"><span>NV</span><small>Salesforce<br />strategy<br />& delivery</small></div></div></section>

      <footer className="alt-footer"><div className="alt-wrap footer-main"><a href="#top" className="alt-logo"><Image src="/logo.png" alt="Noventrix Global Ltd" width={617} height={201} /></a><p>Salesforce strategy and delivery<br />for businesses going places.</p><div className="footer-column"><span>Explore</span><a href="#services">Services</a><a href="#process">How we work</a><a href="#stories">Success stories</a></div><div className="footer-column"><span>Connect</span><a href="mailto:hello@noventri.com">hello@noventri.com</a><a href="#contact">Start a conversation</a></div></div><div className="alt-wrap footer-bottom"><span>© 2026 Noventri Global Ltd.</span><span>Made for better work <b>●</b></span></div></footer>
    </main>
  );
}
