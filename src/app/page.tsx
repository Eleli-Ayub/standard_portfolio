"use client";

import { useState } from "react";
import Image from "next/image";

type IconName = "arrow" | "code" | "users" | "bulb" | "target" | "book" | "github" | "mail" | "phone" | "pin" | "download" | "external" | "briefcase" | "design" | "rocket" | "chart" | "search" | "layers" | "eye" | "linkedin" | "facebook" | "x" | "server" | "cloud" | "database" | "check" | "grad";

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
    eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V17" /><path d="M8 7.2v.1" /><path d="M12 17v-6.5" /><path d="M12 13.2c0-1.7 1.2-2.8 2.6-2.8 1.5 0 2.4 1 2.4 2.9V17" /></>,
    facebook: <><path d="M14.5 8H17V4.5h-2.5A4 4 0 0 0 10.5 8.5V11H8v3.5h2.5V21H14v-6.5h2.6l.4-3.5h-3V9a1 1 0 0 1 1-1Z" /></>,
    x: <><path d="M4 4l16 16" /><path d="M20 4l-6.6 7.1M10.6 12.9 4 20" /><path d="M4 4h4.5L20 20h-4.5L4 4Z" /></>,
    server: <><rect x="3.5" y="4" width="17" height="6.5" rx="1.6" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" /><path d="M7.5 7.25h.01M7.5 16.75h.01M11 7.25h5M11 16.75h5" /></>,
    cloud: <><path d="M7 18.5h10.5a4 4 0 0 0 .6-8 6 6 0 0 0-11.5-1.3A4.7 4.7 0 0 0 7 18.5Z" /></>,
    database: <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" /><path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" /><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" /></>,
    check: <><path d="m5 12.5 4.5 4.5L19 7.5" /></>,
    grad: <><path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" /><path d="M6.5 11.2v4.6c1.4 1.4 3.3 2.2 5.5 2.2s4.1-.8 5.5-2.2v-4.6" /><path d="M21.5 9v5.5" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const GITHUB = "https://github.com/Eleli-Ayub";
const CV = "/Ayub-Eleli-CV.pdf";
const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "GitHub", href: GITHUB, icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eleli-ayub-32621221a/", icon: "linkedin" },
  { label: "X", href: "https://x.com/eleliayub", icon: "x" },
  { label: "Facebook", href: "https://www.facebook.com/eleliayub/", icon: "facebook" },
];

const skillGroups: { title: string; icon: IconName; items: string[] }[] = [
  { title: "Languages", icon: "code", items: ["Go", "JavaScript", "TypeScript", "Kotlin", "C", "Bash", "Lua", "HCL"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Gin", "gRPC", "RabbitMQ", "Microservices", "REST APIs", "Cobra CLIs", "GORM"] },
  { title: "Frontend & Mobile", icon: "design", items: ["React", "Next.js", "React Native", "Vite", "Tailwind CSS", "Three.js", "Android"] },
  { title: "Databases", icon: "database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"] },
  { title: "Cloud & DevOps", icon: "cloud", items: ["AWS", "DigitalOcean", "GCP", "Terraform", "Ansible", "CloudFormation", "Docker", "Nginx"] },
  { title: "CI/CD & Testing", icon: "check", items: ["GitHub Actions", "GitLab CI", "DockerHub", "Firebase", "Testify", "Testcontainers", "Git"] },
];

type Project = { title: string; summary: string; stack: string; repo?: string; live?: string; tone: string; graphic: string };
const projects: Project[] = [
  { title: "Multivendor Ecommerce", summary: "A storefront where many vendors list and sell through one shop, containerised and shipped with GitHub Actions.", stack: "TypeScript · React · Vite · Docker", repo: "multivendor-ecommerce-web", tone: "peach", graphic: "store" },
  { title: "Ecommerce Admin", summary: "The admin workspace for the marketplace: vendors, catalogues and orders, deployed to a DigitalOcean registry.", stack: "TypeScript · React · Tailwind · Docker", repo: "multivendor-ecommerce-admin", tone: "blue", graphic: "dashboard" },
  { title: "cxy — Personal CLI", summary: "A terminal app for tasks, events, finances, shopping, projects and a journal, backed by SQLite.", stack: "Go · Cobra · GORM · SQLite", repo: "cxy_cli", tone: "cream", graphic: "terminal" },
  { title: "Music Relationship Analyzer", summary: "Scans a folder of songs and finds relationships between them from tempo, pitch, timbre and rhythm.", stack: "C · libaubio · Make", repo: "musicanalysis", tone: "blue", graphic: "wave" },
  { title: "3D Portfolio", summary: "An interactive 3D take on this portfolio, rendered in the browser with React Three Fiber.", stack: "TypeScript · Next.js · Three.js", repo: "3d_portfolio", live: "https://3d-portfolio-alpha-rouge.vercel.app", tone: "peach", graphic: "cube" },
  { title: "Patakazi", summary: "A Kotlin Android client over Go services on AWS, shipped through seven production releases.", stack: "Kotlin · Go · AWS · Firebase", tone: "cream", graphic: "mobile" },
];
const moreProjects: { repo: string; title: string; summary: string; lang: string }[] = [
  { repo: "cli", title: "Task Manager CLI", summary: "Command-line task manager with auth, on MongoDB.", lang: "Go" },
  { repo: "codes-and-tricks", title: "Codes & Tricks", summary: "Go and RabbitMQ messaging experiments.", lang: "Go · TS" },
  { repo: "golang_projects", title: "Duplicate File Finder", summary: "Finds duplicate files by SHA-256 hash.", lang: "Go" },
  { repo: "gin-api-test", title: "Gin API Tests", summary: "A Gin HTTP API with route tests.", lang: "Go" },
  { repo: "mpesa", title: "M-Pesa", summary: "Groundwork for an M-Pesa integration.", lang: "Go" },
  { repo: "terraform_configs", title: "Terraform Configs", summary: "Docker and PostgreSQL provisioned as code.", lang: "HCL" },
  { repo: "github-yamls", title: "GitHub YAMLs", summary: "Reusable GitHub Actions deploy workflows.", lang: "YAML" },
  { repo: "setup_sh", title: "setup_sh", summary: "Bootstraps a Linux dev machine in one script.", lang: "Shell" },
  { repo: "bash_aliases", title: "Bash Aliases", summary: "Everyday shell shortcuts.", lang: "Shell" },
  { repo: "eleli_nvim", title: "Neovim Config", summary: "Personal Neovim setup with lazy.nvim.", lang: "Lua" },
  { repo: "nginx", title: "Nginx Notes", summary: "Rate limiting, SSL, IP rules and timeouts.", lang: "Docs" },
  { repo: "Git-Tricks", title: "Git Tricks", summary: "git-crypt, GitHub and GitLab CLI notes.", lang: "Docs" },
  { repo: "Linux-Tricks", title: "Linux Tricks", summary: "grep, files and desktop-entry how-tos.", lang: "Docs" },
  { repo: "leetcode", title: "LeetCode", summary: "Algorithm practice solutions.", lang: "Go" },
  { repo: "Go-practice", title: "Go Practice", summary: "Early Go language exercises.", lang: "Go" },
  { repo: "c-repo", title: "C Repo", summary: "C fundamentals.", lang: "C" },
];

const experience = [
  { period: "Jan 2025 — Present", role: "Senior Software Engineer", company: "Ziya", summary: "Led the design of a lending, assets and payments platform for 20,000+ customers, with Node.js, Go, gRPC, RabbitMQ and PostgreSQL on Terraform-managed infrastructure.", icon: "briefcase" as IconName },
  { period: "May 2024 — Jan 2025", role: "Lead Product Engineer", company: "Panache Technohub", summary: "Led the team that built a port clearance and document-tracing prototype for KenTrade, on Go, PostgreSQL, Nginx and GitLab CI.", icon: "code" as IconName },
  { period: "Sep 2023 — Apr 2024", role: "Software Engineer", company: "Lasso Technologies", summary: "Built the Patakazi MVP end to end: a Kotlin Android client on Go services, 60%+ backend test coverage and seven Play Store releases.", icon: "users" as IconName },
  { period: "2023", role: "Fullstack Engineer", company: "Innovia Kenya", summary: "Directed an eCommerce build and migrated a legacy WordPress site to a modern React stack.", icon: "layers" as IconName },
];
const stats = [["20k+", "customers served on Ziya"], ["KES 170M+", "in circulation on the platform"], ["7", "production Android releases"], ["60%+", "backend test coverage on Patakazi"]] as const;
const strengths: [IconName, string][] = [["bulb", "Problem solving"], ["server", "Backend architecture"], ["cloud", "Infrastructure as code"], ["users", "Mentoring engineers"], ["target", "Shipping on deadline"], ["book", "Clear documentation"]];
const process = [["01", "Discover", "Understand the problem deeply.", "search"], ["02", "Design", "Plan and craft simple solutions.", "design"], ["03", "Develop", "Write clean code and build features.", "code"], ["04", "Deploy", "Test thoroughly and launch.", "rocket"], ["05", "Improve", "Monitor, iterate and improve.", "chart"]] as const;

function HeroPhoto() {
  return <div className="hero-photo"><Image src="/ayub-eleli.jpg" alt="Ayub Eleli" fill priority sizes="(max-width:680px) 86vw, 440px" className="hero-photo-img" /></div>;
}
function ProjectGraphic({ type }: { type: string }) {
  if (type === "mobile") return <div className="graphic-mobile"><div className="mobile-notch" /><div className="mobile-line" /><div className="mobile-line short" /><div className="mobile-card" /><div className="mobile-card small" /></div>;
  if (type === "terminal") return <div className="graphic-terminal"><div className="browser-top"><i /><i /><i /></div><code><span>$</span> cxy task add<br /><span>$</span> cxy finance ls<br /><b>✓</b> 3 entries</code></div>;
  if (type === "wave") return <div className="graphic-wave">{[14, 30, 46, 24, 54, 38, 20, 44, 28, 12, 34, 50, 22].map((h, i) => <i key={i} style={{ height: h }} />)}</div>;
  if (type === "cube") return <div className="graphic-cube"><i /><i /><i /></div>;
  return <div className={`graphic-browser ${type}`}><div className="browser-top"><i /><i /><i /></div><div className="browser-body"><div className="browser-sidebar"><b /><b /><b /><b /></div><div className="browser-main"><div className="browser-chart"><i /><i /><i /><i /><i /></div><div className="browser-row"><span /><span /><span /></div><div className="browser-row"><span /><span /><span /></div></div></div></div>;
}
function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) { return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>; }
function SocialLinks() {
  return <div className="social-links">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}><Icon name={s.icon} size={18} /></a>)}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["work", "Work"], ["experience", "Experience"], ["contact", "Contact"]];
  return <main className="portfolio-shell">
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ayub Eleli — home"><Image src="/ayub-avatar.jpg" alt="" width={44} height={44} className="brand-avatar" priority /><span>Ayub<b>.</b></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /><span /></button>
      <nav className={menuOpen ? "site-nav open" : "site-nav"}>{nav.map(([id, label], i) => <a key={id} className={i === 0 ? "active" : undefined} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="header-cta" href="mailto:eleliayub@eleliafrika.com">Let&apos;s Talk <Icon name="arrow" size={16} /></a>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="intro-label">Hi, I&apos;m</span>
        <h1>Ayub <em>Eleli</em></h1>
        <p className="hero-role">Senior Software Engineer &amp; Full-Stack Developer</p>
        <p className="hero-description">I build digital products that solve real problems and create meaningful impact. From idea to deployment, I turn complex challenges into simple, beautiful solutions.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">View My Work <Icon name="arrow" size={17} /></a>
          <a className="button secondary" href={CV} target="_blank" rel="noreferrer">View CV <Icon name="eye" size={17} /></a>
          <a className="button secondary" href={CV} download="Ayub-Eleli-CV.pdf">Download CV <Icon name="download" size={17} /></a>
        </div>
      </div>
      <HeroPhoto />
    </section>

    <section className="about section-wrap section-rule" id="about">
      <div className="about-copy">
        <SectionHeading eyebrow="A little about me" title="About Me" />
        <p className="about-lead">I&apos;m a Nairobi-based software engineer who specialises in <strong>backend development and infrastructure</strong>. I work mostly in Go and JavaScript, and I build cloud-native systems on AWS, DigitalOcean and GCP.</p>
        <p>I design database architectures on PostgreSQL and MongoDB, define infrastructure as code with Terraform, Ansible and CloudFormation, and ship containerised workloads through GitHub Actions and GitLab pipelines. I also enjoy guiding junior and mid-level engineers, and turning technical detail into decisions the business can act on.</p>
        <div className="traits">{strengths.map(([icon, label]) => <div key={label}><Icon name={icon} size={20} /><b>{label}</b></div>)}</div>
        <div className="about-meta">
          <span><Icon name="grad" size={18} /> BSc Business Information Technology, Multimedia University of Kenya</span>
          <span><Icon name="pin" size={18} /> Nairobi, Kenya</span>
        </div>
        <div className="about-actions">
          <a className="button primary" href={CV} target="_blank" rel="noreferrer">Read my CV <Icon name="eye" size={17} /></a>
          <SocialLinks />
        </div>
      </div>
      <div className="about-stats">{stats.map(([value, label]) => <div className="stat" key={label}><b>{value}</b><span>{label}</span></div>)}</div>
    </section>

    <section className="skills section-wrap section-rule" id="skills">
      <SectionHeading title="Skills & Technologies" />
      <div className="skill-grid">{skillGroups.map((group) => <div className="skill-card" key={group.title}><div className="skill-head"><span className="skill-icon"><Icon name={group.icon} size={20} /></span><b>{group.title}</b></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
    </section>

    <section className="work section-wrap section-rule" id="work">
      <div className="section-topline"><SectionHeading title="Selected Work" /><a className="text-link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <Icon name="arrow" size={17} /></a></div>
      <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}>
        <div className="project-visual"><ProjectGraphic type={project.graphic} /></div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="project-tags">{project.stack}</span>
          <div className="project-links">
            {project.repo && <a href={`${GITHUB}/${project.repo}`} target="_blank" rel="noreferrer"><Icon name="github" size={14} /> Code</a>}
            {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Icon name="external" size={14} /> Live</a>}
            {!project.repo && <span>Private · client work</span>}
          </div>
        </div>
      </article>)}</div>
      <h3 className="more-title">More on GitHub</h3>
      <div className="more-grid">{moreProjects.map((p) => <a className="more-item" key={p.repo} href={`${GITHUB}/${p.repo}`} target="_blank" rel="noreferrer"><span className="more-lang">{p.lang}</span><b>{p.title}</b><span>{p.summary}</span></a>)}</div>
    </section>

    <section className="experience section-wrap section-rule" id="experience">
      <SectionHeading title="Experience" />
      <div className="experience-grid">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.role}`}><div className="experience-icon"><Icon name={item.icon} size={23} /></div><div className="experience-copy"><span className="period">{item.period}</span><h3>{item.role}</h3><b>{item.company}</b><p>{item.summary}</p></div></article>)}</div>
    </section>

    <section className="process section-wrap section-rule">
      <SectionHeading title="My Process" />
      <div className="process-grid">{process.map(([number, title, copy, icon], index) => <div className="process-item" key={number}><div className="process-icon"><Icon name={icon} size={25} /></div><span className="process-number">{number}</span><h3>{title}</h3><p>{copy}</p>{index < process.length - 1 && <div className="process-dash" />}</div>)}</div>
    </section>

    <footer className="site-footer section-wrap" id="contact">
      <div className="footer-headline">Let&apos;s build something<br /><span>meaningful together.</span></div>
      <div className="footer-details">
        <a href="mailto:eleliayub@eleliafrika.com"><Icon name="mail" size={17} /> eleliayub@eleliafrika.com</a>
        <a href="tel:+254719722292"><Icon name="phone" size={17} /> +254 719 722 292</a>
        <span><Icon name="pin" size={17} /> Nairobi, Kenya</span>
        <a href={CV} download="Ayub-Eleli-CV.pdf"><Icon name="download" size={17} /> Download CV</a>
      </div>
      <div className="footer-connect"><b>Let&apos;s Connect</b><SocialLinks /></div>
      <div className="footer-bottom">© 2026 Ayub Eleli. All rights reserved. <span>♥</span></div>
    </footer>
  </main>;
}
