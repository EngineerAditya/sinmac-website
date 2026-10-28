"use client";

import { useEffect, useState } from "react";

const services = ["AI automation", "SEO + GEO", "custom software"];
const offerings = [
  { number: "01", title: "AI & automation", copy: "Make the busywork disappear. We connect your tools and build intelligent workflows around the way your team actually works.", tags: ["AI agents", "Workflow automation", "Integrations"] },
  { number: "02", title: "SEO & GEO", copy: "Be the answer wherever people are searching. Build lasting visibility across search engines and AI-powered discovery.", tags: ["Technical SEO", "AI search", "Content systems"] },
  { number: "03", title: "Product development", copy: "From the first sketch to a product people rely on. We design and build thoughtful software, end to end.", tags: ["Web apps", "MVPs", "Product design"] },
  { number: "04", title: "Custom software", copy: "Have a problem that doesn’t fit a template? We’ll work with you to shape the right solution and make it real.", tags: ["Internal tools", "Platforms", "Consulting"] },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Welcome() {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setTyped("sinmac"); const t = window.setTimeout(() => setVisible(false), 450); return () => window.clearTimeout(t); }
    let i = 0;
    const type = window.setInterval(() => { i += 1; setTyped("sinmac".slice(0, i)); if (i >= 6) window.clearInterval(type); }, 115);
    const exit = window.setTimeout(() => setVisible(false), 1650);
    return () => { window.clearInterval(type); window.clearTimeout(exit); };
  }, []);
  if (!visible) return null;
  return <div className="welcome" aria-hidden="true"><span>{typed}<i /></span></div>;
}

function TypeServices() {
  const [word, setWord] = useState(services[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let service = 0;
    let char = services[0].length;
    let deleting = true;
    let timer: number;
    const tick = () => {
      const current = services[service];
      if (deleting) {
        char -= 1;
        setWord(current.slice(0, Math.max(0, char)));
        if (char <= 0) { deleting = false; service = (service + 1) % services.length; timer = window.setTimeout(tick, 280); return; }
        timer = window.setTimeout(tick, 48);
      } else {
        char += 1;
        setWord(services[service].slice(0, char));
        if (char >= services[service].length) { deleting = true; timer = window.setTimeout(tick, 2100); return; }
        timer = window.setTimeout(tick, 78);
      }
    };
    timer = window.setTimeout(tick, 2300);
    return () => window.clearTimeout(timer);
  }, []);
  return <span className="typed-service" aria-label="AI automation, SEO and GEO, custom software">{word}<i aria-hidden="true" /></span>;
}

export default function Home() {
  return <>
    <Welcome />
    <header className="topbar"><a className="brand" href="#top" aria-label="Sinmac home"><img src="/sinmac-wordmark-light.svg" alt="sinmac" /></a><nav aria-label="Main navigation"><a href="#services">What we do</a><a href="#approach">How we work</a><a className="nav-contact" href="mailto:info@sinmac.in">Let’s talk <Arrow diagonal /></a></nav></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> INDEPENDENT DIGITAL STUDIO <span className="eyebrow-place">· BUILT FOR WHAT’S NEXT</span></p><h1>Good ideas,<br />made <span className="serif-italic">useful.</span></h1><p className="hero-sub">We build <TypeServices /> <span className="hero-after">for people ready to move forward.</span></p><p className="hero-note">A small, thoughtful team for your big, complicated ideas. From the first “what if?” to the finished product.</p><a className="button button-dark" href="mailto:info@sinmac.in?subject=Let%E2%80%99s%20build%20something">Tell us what you’re thinking <Arrow /></a></div><div className="hero-art" aria-hidden="true"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><span className="core-mark">s</span><span className="core-caption">ideas in motion</span></div><span className="art-node node-one">01</span><span className="art-node node-two">✳</span><span className="art-node node-three">↗</span><span className="art-label">HUMAN THINKING<br />MEETS MACHINE SPEED</span></div><div className="hero-bottom"><span>THOUGHTFUL BY DESIGN</span><a href="#services">SCROLL TO EXPLORE <span>↓</span></a><span>01 — 04</span></div></section>
      <section className="intro section-pad"><p className="eyebrow">SMALL TEAM. FULL-SCALE THINKING.</p><div className="intro-grid"><h2>Technology should<br />feel like <span className="serif-italic">possibility.</span></h2><div className="intro-copy"><p>Sinmac is an independent product and technology studio. We partner with ambitious people to solve real problems with smart software, clear strategy, and a little bit of imagination.</p><a className="text-link" href="#approach">A little about how we work <Arrow /></a></div></div></section>
      <section className="services section-pad" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE CAN MAKE POSSIBLE</p><h2>Good work starts<br />with the <span className="serif-italic">right thing.</span></h2></div><p className="section-aside">One clear outcome or the whole journey.<br />We meet you where you are.</p></div><div className="service-list">{offerings.map(item => <article className="service-card" key={item.number}><span className="service-number">{item.number}</span><div className="service-main"><h3>{item.title}</h3><p>{item.copy}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="service-arrow" href={`mailto:info@sinmac.in?subject=${encodeURIComponent(`Let’s talk about ${item.title}`)}`} aria-label={`Ask us about ${item.title}`}><Arrow diagonal /></a></article>)}</div></section>
      <section className="approach section-pad" id="approach"><div className="approach-top"><p className="eyebrow">THE WAY WE LIKE TO WORK</p><span className="approach-aside">NO BIG REVEALS. NO BLACK BOXES.</span></div><div className="approach-grid"><h2>Clear heads.<br />Open process.<br /><span className="serif-italic">Good things.</span></h2><div className="approach-steps"><article><span>01 / LISTEN</span><p>We start with your world: the people, the friction, and what “better” actually looks like.</p></article><article><span>02 / MAKE A PLAN</span><p>A clear scope, shared priorities, and a path you can feel good about before we build.</p></article><article><span>03 / BUILD TOGETHER</span><p>Small steps, honest updates, and useful work in your hands early and often.</p></article></div></div><div className="approach-stamp"><span>CURIOUS<br />BY NATURE</span><span>✳</span><span>BUILT<br />WITH CARE</span></div></section>
      <section className="contact section-pad"><div className="contact-inner"><p className="eyebrow"><span className="live-dot" /> A GOOD PLACE TO START</p><h2>What are you<br />trying to <span className="serif-italic">make?</span></h2><p className="contact-copy">Tell us what’s on your mind. The early, messy, “not sure yet” version is perfect.</p><a className="button button-light" href="mailto:info@sinmac.in?subject=I%20have%20an%20idea">Start a conversation <Arrow diagonal /></a><a className="contact-email" href="mailto:info@sinmac.in">info@sinmac.in</a></div><span className="contact-spark" aria-hidden="true">✳</span></section>
    </main>
    <footer className="footer" aria-label="Site footer"><div className="footer-glow"/><div className="footer-directory"><nav className="footer-column" aria-label="Explore"><span className="footer-label">EXPLORE</span><a className="footer-link" href="#top"><i/>Home</a><a className="footer-link" href="#services"><i/>What we do</a><a className="footer-link" href="#approach"><i/>How we work</a></nav><div className="footer-column"><span className="footer-label">SAY HELLO</span><a className="footer-email" href="mailto:info@sinmac.in">info@sinmac.in <Arrow diagonal /></a><span className="footer-small">Good ideas welcome.</span></div><nav className="footer-column" aria-label="Get in touch"><span className="footer-label">LET’S MAKE SOMETHING</span><a className="footer-link" href="mailto:info@sinmac.in?subject=Product%20development"><i/>Build a product <Arrow diagonal /></a><a className="footer-link" href="mailto:info@sinmac.in?subject=AI%20automation"><i/>Automate a workflow <Arrow diagonal /></a><a className="footer-link" href="mailto:info@sinmac.in?subject=SEO%20%2B%20GEO"><i/>Grow your visibility <Arrow diagonal /></a></nav><div className="footer-column footer-status"><span className="footer-label">INDEPENDENT BY DESIGN</span><p>Thoughtful technology for people with somewhere to go.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SINMAC STUDIO</span><span>MADE WITH INTENTION <b>✳</b></span><a href="#top">BACK TO TOP ↑</a></div><div className="footer-wordmark"><img src="/sinmac-wordmark-dark.svg" alt="Sinmac" /></div></footer>
  </>;
}
