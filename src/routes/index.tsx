import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cloud,
  Database,
  Server,
  Layers,
  Terminal,
  ShieldCheck,
  MapPin,
  Linkedin,
  ArrowUpRight,
  Download,
  Mail,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const LINKEDIN = "https://www.linkedin.com/in/amit-soni-55805821/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amit Soni — Cloud Infrastructure Leader & OCI Expert" },
      {
        name: "description",
        content:
          "Amit Soni, Cloud Infrastructure Manager at Accenture. 18+ years across Oracle Cloud (OCI), Azure, WebLogic middleware and large-scale cloud migration.",
      },
      { property: "og:title", content: "Amit Soni — Cloud Infrastructure Leader & OCI Expert" },
      {
        property: "og:description",
        content:
          "18+ years turning complex cloud migrations into reliable systems. OCI, Azure, middleware and database infrastructure leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const ROLES = [
  {
    role: "Cloud Infra Manager",
    company: "Accenture",
    dates: "Jun 2025 — Present",
    impact:
      "Leads cloud infrastructure delivery for enterprise clients, owning platform reliability, migration strategy and team capability.",
    current: true,
  },
  {
    role: "Cloud Ops A Manager",
    company: "Accenture",
    dates: "Apr 2021 — Jun 2025",
    impact:
      "Ran day-two cloud operations across OCI and Azure estates, cutting incident recurrence through disciplined root-cause work.",
  },
  {
    role: "Principal Consultant",
    company: "Oracle",
    dates: "Jun 2016 — Apr 2021",
    impact:
      "Architected and delivered Oracle Cloud and middleware implementations for large customers, from assessment to production cutover.",
  },
  {
    role: "Senior Software Engineer",
    company: "Accenture",
    dates: "Oct 2010 — Jun 2016",
    impact:
      "Built and administered WebLogic, SOA and database environments supporting mission-critical enterprise applications.",
  },
  {
    role: "Engineer, Technology Solutions",
    company: "3i Infotech Ltd.",
    dates: "Jan 2008 — Oct 2010",
    impact:
      "Started in hands-on systems and middleware support, laying the operational foundation for a career in infrastructure.",
  },
];

const SKILLS = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    items: "Oracle Cloud Infrastructure (OCI), Microsoft Azure",
  },
  { icon: Layers, title: "Middleware", items: "WebLogic, SOA, OSB, ODI, OIC" },
  { icon: Server, title: "Infrastructure", items: "IaaS, PaaS, DBaaS, Linux" },
  {
    icon: Database,
    title: "Specialties",
    items: "Cloud Migration, Cloud Modernization, Oracle Database Administration",
  },
];

const CERTS = [
  {
    name: "Oracle Cloud Infrastructure Certified Architect Associate",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Multicloud Architect Associate",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/80 text-foreground backdrop-blur-xl"
          : "border-transparent bg-transparent text-primary-foreground"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
        <a href="#top" className="min-w-0 font-display text-lg tracking-tight">
          <span className="font-semibold">Amit Soni</span>
          <span className="ml-2 hidden opacity-55 sm:inline">Cloud Infrastructure</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-current/25 px-3 py-1.5 text-sm opacity-80 transition-opacity hover:opacity-100 md:hidden"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Glows() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-sunset-orange/20 blur-[120px]" />
      <div className="absolute -right-[5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-sunset-rose/25 blur-[100px]" />
      <div className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-sunset-violet/15 blur-[120px]" />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-border/40 py-20 md:py-28 ${className}`}>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl backdrop-blur-xl ${
        gradient
          ? "border border-sunset-rose/20 bg-gradient-to-br from-sunset-rose/10 to-sunset-violet/10"
          : "glass"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Glows />
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 md:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-sunset-orange/30 bg-sunset-orange/10 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sunset-orange opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sunset-orange" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sunset-orange/90">
                    Noida, India — Available for enterprise engagements
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
                  Amit <span className="gradient-text">Soni</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  Cloud Infrastructure Leader — Deployment Test{" "}
                  <span className="text-foreground/30">|</span> Oracle Cloud (OCI) Expert{" "}
                  <span className="text-foreground/30">|</span> 18+ Years Turning Complex
                  Migrations into Reliable Systems
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground/80 md:text-base">
                  On a mission to deliver high-quality cloud solutions and empower the teams that keep
                  them running.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sunset-orange to-sunset-rose px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sunset-orange/20 transition-all hover:-translate-y-0.5 hover:shadow-sunset-orange/30"
                  >
                    View Experience
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:bg-foreground/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Bento stats */}
            <div className="lg:col-span-5">
              <Reveal delay={160}>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard className="p-6">
                    <span className="font-display text-4xl font-semibold text-sunset-orange">18+</span>
                    <p className="mt-1 text-sm text-muted-foreground">Years in consulting</p>
                  </GlassCard>
                  <GlassCard gradient className="p-6">
                    <span className="font-display text-4xl font-semibold text-sunset-rose">12</span>
                    <p className="mt-1 text-sm text-muted-foreground">Oracle Cloud certifications</p>
                  </GlassCard>
                  <GlassCard className="col-span-2 flex items-center justify-between p-6">
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">Enterprise Cloud</p>
                      <p className="text-sm text-muted-foreground">OCI · Azure · WebLogic · Oracle DB</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-sunset-orange to-sunset-rose">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                  </GlassCard>
                  <div className="col-span-2 rounded-3xl bg-gradient-to-r from-sunset-orange via-sunset-rose to-sunset-violet p-1">
                    <div className="h-full rounded-[22px] bg-background p-6">
                      <p className="text-sm font-semibold text-sunset-rose">Currently</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">
                        Cloud Infrastructure Manager at Accenture
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Quiet expertise, built over 18 years.">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I have spent more than eighteen years in consulting and technology, working across
              Accenture, Oracle and 3i Infotech. Today I lead cloud infrastructure at Accenture,
              where my job is to make sure complex environments are designed well, migrated safely,
              and run predictably long after the project ends.
            </p>
            <p>
              My work sits where architecture meets operations: helping clients move and manage
              cloud infrastructure, middleware and databases. I work hands-on across WebLogic, SOA,
              OSB, ODI and OIC, Linux, and both Oracle Cloud Infrastructure and Azure at the IaaS,
              PaaS and DBaaS layers — backed by multiple Oracle Cloud certifications.
            </p>
            <p>
              What I genuinely enjoy is the hard part: the migration that will not cut over, the
              performance problem nobody can reproduce, the middleware stack with no clean
              documentation. My mission is simple — deliver high-quality solutions, keep learning,
              and make the team around me stronger than when I joined it.
            </p>
          </div>
          <Reveal delay={100}>
            <GlassCard className="p-6">
              <p className="eyebrow">Currently</p>
              <p className="mt-3 font-display text-xl font-semibold text-foreground">
                Cloud Infrastructure Manager
              </p>
              <p className="text-sm text-muted-foreground">Accenture</p>
              <div className="mt-6 space-y-3 border-t border-border/40 pt-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-sunset-orange" />
                  Noida, Uttar Pradesh, India
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-sunset-orange" />
                  Oracle Certified Architect Associate
                </p>
                <p className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 shrink-0 text-sunset-orange" />
                  OCI · Azure · WebLogic · Oracle DB
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="A steady line through enterprise cloud.">
        <ol className="relative border-l border-border/40 pl-8 md:pl-12">
          {ROLES.map((r, i) => (
            <li key={r.role + r.dates} className="relative pb-12 last:pb-0">
              <Reveal delay={i * 60}>
                <span
                  className={`absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full md:-left-[57px] ${
                    r.current
                      ? "bg-sunset-orange ring-4 ring-sunset-orange/20"
                      : "bg-border"
                  }`}
                />
                <GlassCard className="p-6 md:p-8">
                  <div className="grid gap-1 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">{r.role}</h3>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {r.dates}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-sunset-orange">{r.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {r.impact}
                  </p>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Expertise" title="Core skills and technical depth.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <GlassCard
                className="h-full p-6"
                gradient={i === 1}
              >
                <s.icon
                  className={`h-6 w-6 ${i === 1 ? "text-sunset-rose" : "text-sunset-orange"}`}
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.items}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" eyebrow="Certifications" title="12 Oracle Cloud certifications.">
        <div className="grid gap-4 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <GlassCard className="h-full p-6">
                <ShieldCheck className="h-5 w-5 text-sunset-violet" strokeWidth={1.75} />
                <p className="mt-5 font-display text-base font-semibold leading-snug text-foreground">
                  {c.name}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <p className="mt-6 border-l-2 border-sunset-violet pl-4 text-sm text-muted-foreground">
            Plus additional Oracle Cloud credentials across infrastructure, database and multicloud
            architecture tracks.
          </p>
        </Reveal>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-border/40">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Planning a migration, a modernization, or an infrastructure reset?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Happy to talk through cloud architecture, OCI and Azure operations, or middleware and
              database challenges.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sunset-orange to-sunset-rose px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sunset-orange/20 transition-all hover:-translate-y-0.5 hover:shadow-sunset-orange/30"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:hello@example.com?subject=Cloud%20infrastructure%20enquiry"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:bg-foreground/10"
              >
                <Mail className="h-4 w-4" />
                Send an email
              </a>
            </div>
          </Reveal>
        </div>
        <div className="border-t border-border/40">
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 text-xs text-muted-foreground">
            <p className="min-w-0 truncate">
              © {new Date().getFullYear()} Amit Soni · Noida, Uttar Pradesh, India
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
