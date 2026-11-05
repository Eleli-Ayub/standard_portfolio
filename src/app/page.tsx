"use client";

import { useState } from "react";
import Image from "next/image";

type IconName = "arrow" | "code" | "users" | "bulb" | "target" | "book" | "github" | "mail" | "phone" | "pin" | "download" | "external" | "briefcase" | "design" | "rocket" | "chart" | "search" | "layers";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M15 5.5a3 3 0 0 1 0 5.8" /><path d="M17 14.5a5.2 5.2 0 0 1 3.5 5" /></>,
    bulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8.3 14.7A6 6 0 1 1 16 14.5c-.8.65-1 1.1-1 2.5H9c0-1.2-.15-1.7-.7-2.3Z" /><path d="M12 4v1" /></>,
    target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /><path d="m17.5 6.5 3-3" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M4 5.5v16" /><path d="M8 7h8" /></>,
    github: <><path d="M9 19c-4.5 1.5-4.5-2.25-6.3-3" /><path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.9-.3 6-1.4 6-6.3a5 5 0 0 0-1.3-3.5A4.6 4.6 0 0 0 19.1 2S18 1.7 15.5 3.2a13.5 13.5 0 0 0-7 0C6 1.7 4.9 2 4.9 2a4.6 4.6 0 0 0-.1 3.7 5 5 0 0 0-1.3 3.5c0 4.9 3.1 6 6 6.3-.6.5-.6 1-.5 2V21" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <><path d="M7 3h3l1.2 4-2 1.5a15 15 0 0 0 6.3 6.3l1.5-2 4 1.2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 5 5.2 2 2 0 0 1 7 3Z" /></>,
    pin: <><path d="M20 10.2c0 5-8 10.3-8 10.3S4 15.2 4 10.2a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    external: <><path d="M14 4h6v6" /><path d="m20 4-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    design: <><path d="m4 20 2.5-7.5L16.5 2.5a2.1 2.1 0 0 1 3 3L9.5 15.5 4 20Z" /><path d="m13.5 5.5 3 3" /><path d="M4 20h4" /></>,
    rocket: <><path d="M14.5 4.5c2.3-2.3 5-2.8 5-2.8s-.5 2.7-2.8 5l-5.2 5.2-3.7-.8-.8-3.7 5.2-5.2Z" /><path d="m7.8 16.2-3 3" /><path d="m4 14 .8-3.2 2.4 2.4L4 14ZM10 20l.8-3.2 2.4 2.4L10 20Z" /><circle cx="16.2" cy="6.8" r="1.2" /></>,
    chart: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    layers: <><path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" /><path d="m3.5 12 8.5 4.5 8.5-4.5" /><path d="m3.5 16.5 8.5 4.5 8.5-4.5" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const skills = [["JavaScript", "code"], ["TypeScript", "TS"], ["React.js", "⚛"], ["Next.js", "N"], ["Node.js", "JS"], ["MongoDB", "leaf"], ["Tailwind CSS", "≈"], ["Git & GitHub", "github"], ["More", "•••"]] as const;
const projects = [
  { title: "Multivendor Ecommerce", label: "TypeScript · Storefront", repo: "multivendor-ecommerce-web", summary: "A multivendor storefront where many sellers list and sell through one shopfront.", tone: "peach", graphic: "store" },
  { title: "Ecommerce Admin", label: "TypeScript · Dashboard", repo: "multivendor-ecommerce-admin", summary: "An admin workspace for vendors, catalogues and orders.", tone: "blue", graphic: "dashboard" },
  { title: "Patakazi", label: "Kotlin · Go · Android", summary: "A Kotlin Android client over Go services on AWS, shipped through seven production releases.", tone: "cream", graphic: "mobile" },
];
const experience = [
  { period: "2025 — Present", role: "Senior Software Engineer", company: "Ziya", summary: "Leading full-stack delivery across React, React Native, Node.js, Go, PostgreSQL and AWS infrastructure.", icon: "briefcase" as IconName },
  { period: "2024 — 2025", role: "Lead Product Engineer", company: "Panache Technohub", summary: "Building Go and PostgreSQL backends with Nginx, GitLab CI, DockerHub and Terraform.", icon: "code" as IconName },
  { period: "2023 — 2024", role: "Software Engineer", company: "Lasso Technologies", summary: "Built the Patakazi MVP end to end: a Kotlin Android client on Go services in AWS.", icon: "users" as IconName },
  { period: "2023", role: "Fullstack Engineer", company: "Innovia Kenya", summary: "Directed an eCommerce build and migrated a legacy WordPress site to a modern React stack.", icon: "layers" as IconName },
];
const process = [["01", "Discover", "Understand the problem deeply.", "search"], ["02", "Design", "Plan and craft simple solutions.", "design"], ["03", "Develop", "Write clean code and build features.", "code"], ["04", "Deploy", "Test thoroughly and launch.", "rocket"], ["05", "Improve", "Monitor, iterate and improve.", "chart"]] as const;

function HeroPhoto() {
  return <div className="hero-photo"><Image src="/portfolio_image.jpg" alt="Ayub Eleli" fill priority sizes="(max-width:680px) 86vw, 44vw" className="hero-photo-img" /></div>;
}
function ProjectGraphic({ type }: { type: string }) {
  if (type === "mobile") return <div className="graphic-mobile"><div className="mobile-notch" /><div className="mobile-line" /><div className="mobile-line short" /><div className="mobile-card" /><div className="mobile-card small" /></div>;
  return <div className={`graphic-browser ${type}`}><div className="browser-top"><i /><i /><i /></div><div className="browser-body"><div className="browser-sidebar"><b /><b /><b /><b /></div><div className="browser-main"><div className="browser-chart"><i /><i /><i /><i /><i /></div><div className="browser-row"><span /><span /><span /></div><div className="browser-row"><span /><span /><span /></div></div></div></div>;
}
function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) { return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  return <main className="portfolio-shell">
    <header className="site-header"><a className="brand" href="#home" aria-label="Ayub home"><span>A</span><b>H</b><i>.</i></a><button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /><span /></button><nav className={menuOpen ? "site-nav open" : "site-nav"}><a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><a className="header-cta" href="mailto:eleliayub@eleliafrika.com">Let&apos;s Talk <Icon name="arrow" size={16} /></a></header>
    <section className="hero section-wrap" id="home"><div className="hero-copy"><span className="intro-label">Hi, I&apos;m</span><h1>Ayub <em>Eleli</em></h1><p className="hero-role">Senior Software Engineer &amp; Full-Stack Developer</p><p className="hero-description">I build digital products that solve real problems and create meaningful impact. From idea to deployment, I turn complex challenges into simple, beautiful solutions.</p><div className="hero-actions"><a className="button primary" href="#work">View My Work <Icon name="arrow" size={17} /></a><a className="button secondary" href="mailto:eleliayub@eleliafrika.com?subject=CV%20Request">Download CV <Icon name="download" size={17} /></a></div></div><HeroPhoto /></section>
    <section className="about section-wrap" id="about"><div className="about-art"><div className="window-frame"><i /><i /><i /><i /></div><div className="about-person"><div className="about-hair" /><div className="about-face" /><div className="about-neck" /><div className="about-shirt" /><div className="about-arm" /><div className="about-mug" /><div className="about-books" /></div></div><div className="about-copy"><SectionHeading eyebrow="A little about me" title="About Me" /><p>Passionate about creating clean, efficient and scalable solutions that great users love. I enjoy working with technologies that push the web forward.</p><div className="traits"><div><Icon name="bulb" size={20} /><b>Problem Solver</b></div><div><Icon name="target" size={20} /><b>Detail Oriented</b></div><div><Icon name="code" size={20} /><b>Clean Code Advocate</b></div><div><Icon name="book" size={20} /><b>Always Learning</b></div><div><Icon name="users" size={20} /><b>Team Player</b></div><div><Icon name="bulb" size={20} /><b>Curious Mind</b></div></div></div></section>
    <section className="skills section-wrap section-rule" id="skills"><SectionHeading title="Skills & Technologies" /><div className="skill-grid">{skills.map(([label, mark]) => <div className="skill-card" key={label}><span className={`skill-mark mark-${mark}`}>{mark === "code" ? "</>" : mark === "github" ? <Icon name="github" size={25} /> : mark}</span><b>{label}</b></div>)}</div></section>
    <section className="work section-wrap section-rule" id="work"><div className="section-topline"><SectionHeading title="Selected Work" /><a className="text-link" href="https://github.com/Eleli-Ayub" target="_blank" rel="noreferrer">View All Projects <Icon name="arrow" size={17} /></a></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-visual"><ProjectGraphic type={project.graphic} /></div><div className="project-content"><h3>{project.title} <a href={project.repo ? `https://github.com/Eleli-Ayub/${project.repo}` : "#contact"} target={project.repo ? "_blank" : undefined} rel={project.repo ? "noreferrer" : undefined} aria-label={`Open ${project.title}`}><Icon name="external" size={14} /></a></h3><p>{project.summary}</p><span className="project-tags">{project.label}</span><button className="project-detail" onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}>{activeProject === project.title ? "Close details" : "Quick view"}</button>{activeProject === project.title && <div className="project-popover">{project.title} is part of Ayub&apos;s public project library. <a href={project.repo ? `https://github.com/Eleli-Ayub/${project.repo}` : "#contact"}>Explore it <Icon name="arrow" size={13} /></a></div>}</div></article>)}</div></section>
    <section className="experience section-wrap section-rule" id="experience"><SectionHeading title="Experience" /><div className="experience-grid">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.role}`}><div className="experience-icon"><Icon name={item.icon} size={23} /></div><div className="experience-copy"><span className="period">{item.period}</span><h3>{item.role}</h3><b>{item.company}</b><p>{item.summary}</p></div></article>)}</div></section>
    <section className="process section-wrap section-rule"><SectionHeading title="My Process" /><div className="process-grid">{process.map(([number, title, copy, icon], index) => <div className="process-item" key={number}><div className="process-icon"><Icon name={icon} size={25} /></div><span className="process-number">{number}</span><h3>{title}</h3><p>{copy}</p>{index < process.length - 1 && <div className="process-dash" />}</div>)}</div></section>
    <footer className="site-footer section-wrap" id="contact"><div className="footer-headline">Let&apos;s build something<br /><span>meaningful together.</span></div><div className="footer-details"><a href="mailto:eleliayub@eleliafrika.com"><Icon name="mail" size={17} /> eleliayub@eleliafrika.com</a><a href="tel:+254719722292"><Icon name="phone" size={17} /> +254 719 722 292</a><span><Icon name="pin" size={17} /> Nairobi, Kenya</span></div><div className="footer-connect"><b>Let&apos;s Connect</b><div className="social-links"><a href="https://github.com/Eleli-Ayub" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={19} /></a><a href="mailto:eleliayub@eleliafrika.com" aria-label="Email"><Icon name="mail" size={19} /></a><a href="tel:+254719722292" aria-label="Phone"><Icon name="phone" size={19} /></a></div></div><div className="footer-bottom">© 2024 Ayub Eleli. All rights reserved. <span>♥</span></div></footer>
  </main>;
}
