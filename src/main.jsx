import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Brain,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Disc3,
  FileCheck2,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  LockKeyhole,
  MapPin,
  Menu,
  Mic2,
  Network,
  Play,
  Radio,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  WalletCards,
  X,
  Zap,
  CheckCircle2,
  Award
} from 'lucide-react';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const asset = (name) => `/assets/${name}`;

const media = {
  logo: asset('mom-logo-light.png'),
  logoLight: asset('mom-logo-light.png'),
  logoDark: asset('mom-logo-dark.png'),
  motionLogo: asset('motion-logo.mp4'),
  hero: asset('hero.png'),
  about: asset('about.png'),
  industry: asset('industry.png'),
  artistPortrait: asset('artist-portrait.png'),
  artistWide: asset('artist-wide.png'),
  ai: asset('ai-music.png'),
  blockchain: asset('blockchain-security.png'),
  ownership: asset('ownership-marketplace.png'),
  royalty: asset('royalty-transparency.png'),
  exclusive: asset('exclusive-experiences.png'),
  finalCta: asset('final-cta.png'),
  roadmap: asset('roadmap.png'),
  studioWide: asset('studio-wide.png'),
  revenue: asset('revenue-model.png'),
  stpiLogo: asset('stpi-logo.png')
};

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Vision', 'vision'],
  ['Features', 'features'],
  ['For Artists', 'artists'],
  ['Franchise', 'franchise'],
  ['Contact', 'contact']
];

const mobileItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Vision & Mission', 'vision'],
  ['Our Solution', 'solution'],
  ['Ecosystem', 'ecosystem'],
  ['Premium Offerings', 'features'],
  ['For Artists', 'artists'],
  ['Growth Roadmap', 'roadmap'],
  ['Franchise', 'franchise'],
  ['Market Strategy', 'strategy'],
  ['Contact', 'contact']
];

const visionItems = [
  {
    num: '01',
    badge: 'Core Belief',
    title: 'Democratize Grassroots Talent',
    tagline: 'Talent is Born Out of Poverty',
    desc: 'Breaking geographical and economic barriers. MOM creates a direct highway for raw, unrepresented talent in Tier-2, Tier-3 and rural India to get discovered and celebrated.',
    Icon: Sparkles
  },
  {
    num: '02',
    badge: 'Our Commitment',
    title: 'Sustainable Creative Employment',
    tagline: 'Real Careers & Royalty Incomes',
    desc: 'Transforming musical passion into viable livelihoods. Through structured auditions, professional workshops, and ongoing royalty sharing, creators build sustainable careers.',
    Icon: BriefcaseBusiness
  },
  {
    num: '03',
    badge: 'Industry Disruption',
    title: 'Ending Industry Monopolies',
    tagline: 'Decentralized Music Ownership',
    desc: 'Replacing closed gatekeeping with complete transparency. Powered by AI and Polygon Blockchain, creator ownership, licensing, and payouts remain immutable and fair.',
    Icon: Scale
  }
];

const legalPoints = [
  {
    num: '01',
    badge: 'Corporate Governance',
    title: 'Structured Legal & Corporate Framework',
    desc: 'Operating under established corporate governance, statutory entertainment laws, and standardized business contracts.',
    highlights: ['Standardized Legal Contracts', 'Corporate Governance Standards'],
    Icon: FileCheck2,
    tag: 'Govt. Standards'
  },
  {
    num: '02',
    badge: 'Creator Rights',
    title: 'Artist Rights & IP Protection',
    desc: 'Full intellectual property safeguards ensuring artists retain 100% of their core rights, sync licensing, and master ownership.',
    highlights: ['100% Retained IP Rights', 'Zero-Exploitation Escrow'],
    Icon: Scale,
    tag: '100% Retained IP'
  },
  {
    num: '03',
    badge: 'Statutory Standard',
    title: 'Regulatory & Statutory Compliance',
    desc: 'Strict alignment with Indian digital media guidelines, copyright statutory provisions, and e-commerce compliance.',
    highlights: ['MeitY / STPI Framework Alignment', 'Digital Media Compliance'],
    Icon: BadgeCheck,
    tag: 'Statutory Compliant'
  },
  {
    num: '04',
    badge: 'Polygon Ledger',
    title: 'Blockchain-Supported Audit Trails',
    desc: 'Immutable on-chain smart contracts executing real-time digital asset provenance, automated splits, and instant audit trails.',
    highlights: ['Polygon Smart Contract Splits', '100% Immutable Public Ledger'],
    Icon: Blocks,
    tag: 'Polygon zkEVM Audit'
  },
  {
    num: '05',
    badge: 'Zero Blindspots',
    title: 'Transparent Platform Policies',
    desc: 'Crystal-clear revenue-split agreements and franchise agreements with verified zero hidden deductions or blindspots.',
    highlights: ['Transparent 50:50 Revenue Splits', 'Zero Hidden Operational Clauses'],
    Icon: ShieldCheck,
    tag: '100% Audit Trail'
  },
  {
    num: '06',
    badge: 'Bank-Grade Escrow',
    title: 'Secure Digital Ecosystem',
    desc: 'Bank-grade encrypted infrastructure, secure asset escrows, and enterprise access controls safeguarding user data and funds.',
    highlights: ['256-Bit Encrypted Data Rails', 'Automated Smart Escrow Protection'],
    Icon: LockKeyhole,
    tag: 'Bank-Grade Security'
  }
];

const journey = [
  ['Discover', 'Regular auditions to discover new talent.', Mic2],
  ['Develop', 'Development programs like workshops.', Users],
  ['Create', 'Assisting discovered talent in creating music.', Radio],
  ['Connect', 'Connecting created music to the music ecosystem.', Network],
  ['Monetize', 'Enabling music to generate royalties.', WalletCards],
  ['Scale', 'Countrywide expansion through franchisees.', Rocket],
  ['Technology', 'Powered by AI and blockchain.', Brain]
];

const ecosystem = [
  ['Artists', 'Create, showcase and grow.', Mic2],
  ['AI', 'Powers smart discovery and personalized user experiences.', Brain],
  ['Blockchain', 'Supports security and transparency in rights and transactions.', Blocks],
  ['Listeners', 'Discover, engage and participate.', Headphones],
  ['Learning Opportunities', 'Multiple ways for creators and participants to earn.', Sparkles],
  ['Talent', 'Exposure and growth for up-and-coming artists.', Users],
  ['Franchise Network', 'Expands the reach of MOM to every region across India.', Globe2],
  ['District Franchise Model', 'One exclusive franchise will be allocated per district.', MapPin]
];

const premium = [
  {
    title: 'Music Ownership Marketplace',
    text: 'Explore opportunities around digital music ownership and exclusive music assets.',
    image: media.ownership,
    Icon: Disc3,
    className: 'large'
  },
  {
    title: 'Royalty Transparency Tools',
    text: 'Improving transparency and visibility in music-related royalty processes.',
    image: media.royalty,
    Icon: CircleDollarSign,
    className: 'wide'
  },
  {
    title: 'Exclusive Music Experiences',
    text: 'Limited-edition tracks, behind-the-scenes content and special experiences.',
    image: media.exclusive,
    Icon: Ticket,
    className: 'wide'
  },
  {
    title: 'Artist Growth & Promotion',
    text: 'Premium opportunities for artists to build visibility and connect with a larger audience.',
    image: media.artistPortrait,
    Icon: TrendingUp
  },
  {
    title: 'Professional Workshops & Auditions',
    text: 'Industry-focused workshops and auditions designed to identify and develop talent.',
    image: media.artistWide,
    Icon: Mic2,
    className: 'wide'
  },
  {
    title: 'Enhanced Blockchain Security',
    text: 'Additional security and traceability for premium digital music experiences.',
    image: media.blockchain,
    Icon: LockKeyhole
  }
];

const states = [
  'Uttar Pradesh',
  'Bihar',
  'Madhya Pradesh',
  'West Bengal',
  'Chhattisgarh',
  'Uttarakhand',
  'Odisha',
  'Himachal Pradesh',
  'Gujarat',
  'Haryana'
];

const strategies = [
  ['Digital Marketing & Social Media', 'Instagram, YouTube, Facebook and other digital platforms.'],
  ['Events & Music Launches', 'Live events, song launches and promotional campaigns.'],
  ['Community Building', 'Artists, music lovers and industry professionals.'],
  ['Artist & Influencer Collaborations', 'Artists, creators and influencers.'],
  ['Talent Auditions & Workshops', 'Regular auditions and workshops to discover and engage emerging talent.'],
  ['Strategic Partnerships', 'Brands, businesses, studios and entertainment partners.'],
  ['Franchise-Led Expansion', 'City-by-city and district-by-district franchise network across India.']
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

function App() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.hero-copy, .hero-actions, .hero-meta', {
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out'
      });
      gsap.from('.hero-image', {
        scale: 1.05,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out'
      });

      gsap.utils.toArray('[data-reveal]').forEach((node) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: 'top 82%'
          },
          y: 34,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out'
        });
      });

      gsap.utils.toArray('.draw-line').forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 84%'
            }
          }
        );
      });

      gsap.utils.toArray('[data-count]').forEach((node) => {
        const value = Number(node.dataset.count);
        gsap.fromTo(
          node,
          { innerText: 0 },
          {
            innerText: value,
            snap: { innerText: 1 },
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <AboutSection />
        <VisionMission />
        <ProblemSection />
        <SolutionJourney />
        <Ecosystem />
        <CompetitiveAdvantage />
        <Incubation />
        <PremiumOfferings />
        <ArtistSection />
        <ArtistJourney />
        <RevenueModel />
        <MarketStrategy />
        <GrowthRoadmap />
        <FranchiseSection />
        <LegalFoundation />
        <SupportEcosystem />
        <InvestmentSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a className="logo-link" href="#home" aria-label="MAD OVER MUSIC home">
        <img src={scrolled ? media.logoDark : media.logoLight} alt="MAD OVER MUSIC logo" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta desktop-cta" href="#contact">
        Get in Touch
      </a>
      <button className="menu-button" type="button" aria-label="Open navigation menu" onClick={() => setOpen(true)}>
        <Menu size={24} />
      </button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'active' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu-top">
        <img src={media.logo} alt="" />
        <button type="button" aria-label="Close navigation menu" onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        {mobileItems.map(([label, id], index) => (
          <a key={id} href={`#${id}`} style={{ '--i': index }} onClick={onClose}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {label}
          </a>
        ))}
      </nav>
      <a className="button button-light" href="#contact" onClick={onClose}>
        Get in Touch <ArrowRight size={18} />
      </a>
    </div>
  );
}

function Button({ href, children, variant = 'dark' }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`section-heading ${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-dark" id="home">
      <div className="hero-text">
        <p className="eyebrow hero-meta">MAD OVER MUSIC</p>
        <h1 aria-label="More than music. A movement.">
          <span className="hero-line">
            <span className="hero-word">MORE</span>
          </span>
          <span className="hero-line">
            <span className="hero-word">THAN</span>
          </span>
          <span className="hero-line">
            <span className="hero-word red">MUSIC.</span>
          </span>
          <span className="hero-line">
            <span className="hero-word">A</span>
          </span>
          <span className="hero-line">
            <span className="hero-word">MOVEMENT.</span>
          </span>
        </h1>
        <p className="hero-copy">Empowering artists. Connecting listeners. Building a new music economy.</p>
        <div className="hero-actions">
          <Button href="#contact" variant="red">
            Be Part of the Movement
          </Button>
          <Button href="#about" variant="ghost">
            Explore MOM
          </Button>
        </div>
        <div className="hero-meta">
          <span>India's first AI based music platform</span>
          <span>Desi Tune Entertainment Pvt. Ltd.</span>
        </div>
      </div>
      <div className="hero-image">
        <img src={media.hero} alt="Female singer recording in a premium MOM studio" fetchPriority="high" />
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function BrandStrip() {
  const items = [
    ['A Fairer', 'Music Ecosystem', Scale],
    ['Real', 'Opportunities', BriefcaseBusiness],
    ['A Global', 'Community', Globe2],
    ['Creators', 'At the Core', Mic2]
  ];

  return (
    <section className="brand-strip" aria-label="MOM principles">
      {items.map(([top, bottom, Icon]) => (
        <article key={top} data-reveal>
          <Icon size={28} />
          <p>{top}</p>
          <strong>{bottom}</strong>
        </article>
      ))}
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about section-ivory" id="about">
      <div className="container about-grid">
        <div data-reveal>
          <p className="eyebrow">Who We Are</p>
          <h2>
            ABOUT
            <span>MAD OVER MUSIC</span>
          </h2>
          <p className="lead">MOM is India's first AI based music platform.</p>
          <p>
            MAD OVER MUSIC is positioned as a technology-enabled music ecosystem: a platform for people who love to
            listen and create music, supporting talent discovery, music creation, royalty opportunities and employment.
          </p>
          <p>
            The company presentation describes MOM as a new revolution in the music industry, designed to help creators,
            listeners and partners participate in a new music economy.
          </p>
        </div>
        <figure className="about-media" data-reveal>
          <img src={media.about} alt="MOM vinyl disc with red flowing brand curve" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="vision section-charcoal" id="vision">
      <div className="container">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="A fairer path into the future of music"
        >
          Three foundational principles driving MOM's mission to revolutionize India's music economy.
        </SectionHeading>
        <div className="vision-grid">
          {visionItems.map((item) => (
            <article className="vision-card" key={item.title} data-reveal>
              <div className="vision-card-top">
                <div className="vision-num-wrap">
                  <span className="vision-num">{item.num}</span>
                  <span className="vision-badge">{item.badge}</span>
                </div>
                <div className="vision-icon-box" aria-hidden="true">
                  <item.Icon size={22} />
                </div>
              </div>
              <div className="vision-card-body">
                <span className="vision-tagline">{item.tagline}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalFoundation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="legal section-white" id="legal">
      <div className="container">
        <div className="legal-header" data-reveal>
          <p className="eyebrow">Legal Foundation & Trust</p>
          <h2>Building MOM on a rock-solid foundation</h2>
          <p className="legal-sub">
            A secure, sustainable music ecosystem built on creator rights, transparent policy, and regulatory compliance.
          </p>
        </div>

        {/* 6-Card Sharp Bento Grid */}
        <div className="legal-grid">
          {legalPoints.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <article
                key={item.title}
                className="legal-card"
                data-reveal
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="legal-card-top">
                  <div className="legal-card-meta">
                    <span className="legal-card-num">{item.num}</span>
                    <span className="legal-card-badge">{item.badge}</span>
                  </div>
                  <div className="legal-card-icon-box" aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                </div>

                <div className="legal-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <ul className="legal-features-list">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={13} className="legal-check-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="legal-card-footer">
                  <span className="legal-card-tag">
                    <span className="tag-dot" />
                    {item.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Trust Validation Strip */}
        <div className="legal-trust-strip" data-reveal>
          <div className="trust-strip-item">
            <Scale size={20} className="trust-strip-icon" />
            <div>
              <strong>100% Artist IP Protection</strong>
              <span>Creators retain absolute master and songwriting rights</span>
            </div>
          </div>
          <div className="trust-strip-item">
            <Building2 size={20} className="trust-strip-icon" />
            <div>
              <strong>MeitY & STPI Incubation</strong>
              <span>Government-recognized startup & tech framework</span>
            </div>
          </div>
          <div className="trust-strip-item">
            <Blocks size={20} className="trust-strip-icon" />
            <div>
              <strong>Polygon Smart Contracts</strong>
              <span>Automated, immutable, on-chain royalty distribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Incubation() {
  return (
    <section className="incubation section-light" id="incubation">
      <div className="container split">
        <div data-reveal>
          <div className="badge-pill stpi-badge-pill">
            <img src={media.stpiLogo} alt="STPI Logo" className="stpi-inline-logo" />
            <span>MeitY & STPI Govt. Incubated</span>
          </div>
          <h2>Government-Linked Incubation & Tech Backing</h2>
          <p className="lead">
            MAD OVER MUSIC is officially incubated under <strong>STPI (Software Technology Parks of India)</strong>,
            Ministry of Electronics & Information Technology (MeitY), Government of India.
          </p>
          <p>
            Operating within the Haryana Government innovation framework, MOM utilizes STPI's pan-India network of 
            centres and technology infrastructure to accelerate grassroots outreach, artist discovery, and secure adoption.
          </p>
          <div className="incubation-highlights">
            <div className="highlight-item">
              <ShieldCheck size={20} />
              <div>
                <strong>MeitY & STPI Support</strong>
                <span>Government incubation & institutional mentorship</span>
              </div>
            </div>
            <div className="highlight-item">
              <Blocks size={20} />
              <div>
                <strong>Polygon AI Blockchain</strong>
                <span>Decentralized rights & immutable audit logs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="recognition-panel" data-reveal>
          <figure className="incubation-image">
            <img src={media.ai} alt="MOM AI and music technology architecture" loading="lazy" />
          </figure>
          <div className="recognition-card primary stpi-card">
            <div className="stpi-card-logo-box">
              <img src={media.stpiLogo} alt="Software Technology Parks of India Logo" />
            </div>
            <div>
              <strong>STPI Incubated Platform</strong>
              <span>Ministry of Electronics & IT (MeitY), Govt. of India</span>
            </div>
          </div>
          <div className="recognition-card">
            <Brain size={28} />
            <div>
              <strong>AI + Music Intelligence</strong>
              <span>Smart discovery & audio creation toolset</span>
            </div>
          </div>
          <div className="recognition-card">
            <Blocks size={28} />
            <div>
              <strong>Polygon AI Blockchain</strong>
              <span>Decentralized rights & immutable royalty settlement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = ['Limited Monetization', 'High Entry Barriers', 'Hidden Talent', 'Technology Gap'];
  return (
    <section className="problem section-black">
      <div className="container problem-grid">
        <figure data-reveal>
          <img src={media.industry} alt="Independent musician in a documentary-style setting" loading="lazy" />
        </figure>
        <div data-reveal>
          <p className="eyebrow">Industry Problem</p>
          <h2>Music industry has a talent-access and monetization gap.</h2>
          <p>
            Talented artists from smaller cities often lack visibility, professional access and a single scalable pathway
            from local discovery to sustainable income and royalties.
          </p>
          <div className="problem-list">
            {problems.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </article>
            ))}
            <article>
              <span>05</span>
              <strong>Fragmented Talent Discovery</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionJourney() {
  return (
    <section className="solution section-ivory" id="solution">
      <div className="container">
        <SectionHeading eyebrow="Our Solution - MOM" title="A technology enabled ecosystem">
          That connects talent discovery to music creation and monetization.
        </SectionHeading>
        <div className="journey-path draw-line" />
        <div className="journey-grid">
          {journey.map(([title, text, Icon]) => (
            <article key={title} data-reveal>
              <div className="icon-circle">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="ecosystem section-charcoal" id="ecosystem">
      <div className="container">
        <SectionHeading eyebrow="Ecosystem" title="Not just changing how people listen">
          MOM is building a new music economy with artists, listeners, AI, blockchain, learning opportunities, talent and
          a franchise network.
        </SectionHeading>
        <div className="ecosystem-layout">
          <div className="ecosystem-center" data-reveal>
            <video src={media.motionLogo} autoPlay muted loop playsInline aria-label="Animated MOM motion logo" />
          </div>
          {ecosystem.map(([title, text, Icon]) => (
            <article key={title} data-reveal>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumOfferings() {
  return (
    <section className="premium section-ivory" id="features">
      <div className="container">
        <SectionHeading eyebrow="Premium Offerings" title="Unlock premium access to the future of music">
          A connected offering set across ownership, royalties, experiences, artist growth, workshops and security.
        </SectionHeading>
        <div className="premium-grid">
          {premium.map(({ title, text, image, secondaryImage, Icon, className = '' }) => (
            <article className={className} key={title} data-reveal>
              <img className="main-image" src={image} alt={`${title} visual`} loading="lazy" />
              {secondaryImage ? (
                <img className="secondary-image" src={secondaryImage} alt={`${title} supporting visual`} loading="lazy" />
              ) : null}
              <div>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistSection() {
  return (
    <section className="artists section-black" id="artists">
      <figure>
        <img src={media.studioWide} alt="Artist recording in a dark studio with open negative space" loading="lazy" />
      </figure>
      <div className="artist-copy" data-reveal>
        <p className="eyebrow">For Artists</p>
        <h2>Recognition, visibility and professional opportunities.</h2>
        <p>
          MOM focuses on exposure and growth for up-and-coming artists through auditions, development, music creation,
          monetization and royalty opportunities.
        </p>
        <Button href="#contact" variant="red">
          Join the Movement
        </Button>
      </div>
    </section>
  );
}

function ArtistJourney() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const journeySteps = [
    {
      num: '01',
      title: 'Talent Discovery',
      badge: 'Grassroots Scouting',
      desc: 'Identifying raw, unrepresented vocalists, composers, and lyricists from Tier-2, Tier-3 and rural cultural hubs.',
      Icon: Mic2,
      tag: 'Scouting Phase'
    },
    {
      num: '02',
      title: 'Quarterly Auditions',
      badge: 'District Circuit',
      desc: 'Rigorous district auditions conducted every 3 months through exclusive franchise studio networks.',
      Icon: Radio,
      tag: '10,000+ / Year'
    },
    {
      num: '03',
      title: 'AI & Jury Selection',
      badge: 'Smart Verification',
      desc: 'Merit-based filtering combining acoustic ML audio analysis with veteran industry jury evaluations.',
      Icon: Brain,
      tag: 'Top 300 Artists'
    },
    {
      num: '04',
      title: 'Incubation Workshop',
      badge: '30-Day Masterclass',
      desc: 'Intensive month-long masterclasses covering vocal technique, sound mastering, stagecraft, and IP law.',
      Icon: Award,
      tag: 'Skill Mentorship'
    },
    {
      num: '05',
      title: 'Studio Music Creation',
      badge: 'Pro Studio Rails',
      desc: 'High-fidelity audio recording, AI-assisted arrangement, and professional 4K cinematic music video production.',
      Icon: Disc3,
      tag: 'Master Production'
    },
    {
      num: '06',
      title: 'Ecosystem Release',
      badge: 'Global DSP Reach',
      desc: 'Direct distribution across Spotify, Apple Music, YouTube, Wynk, JioSaavn, and regional OTT streaming channels.',
      Icon: Globe2,
      tag: 'Pan-India Release'
    },
    {
      num: '07',
      title: 'Web3 Monetization',
      badge: 'Transparent Splits',
      desc: 'Polygon blockchain smart contracts executing automated, immutable real-time royalty payouts to creators.',
      Icon: WalletCards,
      tag: 'On-Chain Royalty'
    },
    {
      num: '08',
      title: 'Sustainable Growth',
      badge: 'Career Stardom',
      desc: 'National live concerts, brand endorsements, sync licensing deals, and continuous long-term career acceleration.',
      Icon: Rocket,
      tag: 'National Stardom'
    }
  ];

  return (
    <section className="artist-journey section-white" id="journey">
      <div className="container">
        <div className="journey-header" data-reveal>
          <p className="eyebrow">Artist Journey</p>
          <h2>From grassroots talent to national music icon.</h2>
          <p className="journey-sub">
            A structured 8-step incubation highway that transforms raw regional musicians into commercially celebrated,
            royalty-earning music creators.
          </p>
        </div>

        {/* 8-Step Sharp White Cards Grid */}
        <div className="journey-roadmap-grid">
          {journeySteps.map((step, idx) => {
            const IconComponent = step.Icon;
            return (
              <article
                key={step.title}
                className="journey-step-card"
                data-reveal
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="step-card-top">
                  <div className="step-meta">
                    <span className="step-num">{step.num}</span>
                    <span className="step-badge">{step.badge}</span>
                  </div>
                  <div className="step-icon-box" aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                </div>

                <div className="step-card-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>

                <div className="step-card-footer">
                  <span className="step-tag">
                    <span className="tag-dot" />
                    {step.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Fast Metrics / Confidence Bar */}
        <div className="journey-milestones-strip" data-reveal>
          <div className="journey-stat-card">
            <strong>10,000+</strong>
            <span>Auditioned / Year</span>
            <small>Across 10 Target States</small>
          </div>
          <div className="journey-stat-card">
            <strong>300</strong>
            <span>Selected for Workshops</span>
            <small>Direct Producer Mentorship</small>
          </div>
          <div className="journey-stat-card">
            <strong>4 Cycles</strong>
            <span>Quarterly Auditions</span>
            <small>Continuous Talent Pipeline</small>
          </div>
          <div className="journey-stat-card">
            <strong>100%</strong>
            <span>On-Chain Royalty</span>
            <small>Immutable Smart Contracts</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevenueModel() {
  return (
    <section className="revenue section-ivory">
      <div className="container revenue-grid">
        <div data-reveal>
          <p className="eyebrow">Revenue Model</p>
          <h2>Auditions every 3 months with a 1 month workshop included.</h2>
          <div className="stats-row">
            <Stat value="10000" label="Auditioned / Year" />
            <Stat value="300" label="Selected for Workshop" />
            <Stat value="4" label="Auditions / Year" />
          </div>
          <div className="cycle">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
              <article key={quarter}>
                <span>{quarter}</span>
                <strong>Audition</strong>
                <em>Workshop</em>
              </article>
            ))}
          </div>
        </div>
        <figure data-reveal>
          <img src={media.revenue} alt="MOM annual audition and workshop revenue model visual" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <article className="stat">
      <strong data-count={value}>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function MarketStrategy() {
  const [active, setActive] = useState(0);
  return (
    <section className="strategy section-charcoal" id="strategy">
      <div className="container">
        <SectionHeading eyebrow="Market Strategy" title="Think Local, Build Communities, Scale Nationally." />
        <div className="strategy-list">
          {strategies.map(([title, text], index) => (
            <article className={active === index ? 'open' : ''} key={title} data-reveal>
              <button type="button" onClick={() => setActive(active === index ? -1 : index)}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {title}
                <ChevronDown size={20} />
              </button>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const competitiveAdvantages = [
  {
    num: '01',
    title: 'AI-Enabled Music Platform',
    desc: 'Smart curation algorithms and AI creation tools engineered for both emerging artists and listeners.',
    Icon: Brain,
    highlight: true,
    tag: 'Flagship USP'
  },
  {
    num: '02',
    title: 'Technology-Driven Music Ecosystem',
    desc: 'Unified tech infrastructure connecting talent scouting, production, distribution, and transparent rights.',
    Icon: Network
  },
  {
    num: '03',
    title: 'Franchise-Led Scalability',
    desc: 'Exclusive district-wise franchise model facilitating rapid, sustainable pan-India expansion.',
    Icon: Globe2
  },
  {
    num: '04',
    title: 'Regional Talent Discovery',
    desc: 'Hyperlocal audition pipelines uncovering hidden musical talent across Tier 2, Tier 3, and rural India.',
    Icon: Mic2
  },
  {
    num: '05',
    title: 'End-to-End Talent Ecosystem',
    desc: 'Seamless progression from discovery and professional workshops to studio recording, release, and scale.',
    Icon: Rocket
  },
  {
    num: '06',
    title: 'Revenue-Sharing Model',
    desc: 'Transparent, participatory revenue splits empowering franchise partners and ecosystem stakeholders.',
    Icon: CircleDollarSign
  },
  {
    num: '07',
    title: 'Focus on Artist Monetization',
    desc: 'Equipping independent creators with multiple sustainable income streams, royalties, and music ownership.',
    Icon: WalletCards
  }
];

function CompetitiveAdvantage() {
  return (
    <section className="competitive section-light" id="advantage">
      <div className="container">
        <SectionHeading
          eyebrow="Competitive Advantage"
          title="Why MOM is different"
        >
          A unique convergence of AI-driven technology, pan-India franchise reach, and sustainable artist monetization.
        </SectionHeading>
        <div className="advantage-grid">
          {competitiveAdvantages.map((item) => (
            <article
              className={`advantage-card ${item.highlight ? 'highlight' : ''}`}
              key={item.title}
              data-reveal
            >
              <div className="advantage-card-top">
                <div className="advantage-num-wrap">
                  <span className="advantage-num">{item.num}</span>
                  {item.tag ? <span className="advantage-tag">{item.tag}</span> : null}
                </div>
                <div className="advantage-icon-box" aria-hidden="true">
                  <item.Icon size={22} />
                </div>
              </div>
              <div className="advantage-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthRoadmap() {
  return (
    <section className="roadmap section-ivory" id="roadmap">
      <div className="container roadmap-grid">
        <div data-reveal>
          <p className="eyebrow">Growth Roadmap</p>
          <h2>District-wise exclusive franchise expansion across 10 selected states.</h2>
          <p>
            MOM is strategically expanding through a District-Wise Exclusive Franchise Model with only one exclusive
            franchise allocated per district.
          </p>
          <div className="state-list">
            {states.map((state) => (
              <span key={state}>
                <MapPin size={14} /> {state}
              </span>
            ))}
          </div>
        </div>
        <figure data-reveal>
          <img src={media.roadmap} alt="Editorial India map network representing MOM expansion" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

function FranchiseSection() {
  const [activeFactor, setActiveFactor] = useState(0);

  const valuationFactors = [
    {
      num: '01',
      title: 'Population & Demographics',
      badge: 'Primary Factor',
      desc: 'District youth density and regional cultural concentration driving grassroots talent discovery and mass audience volume.',
      Icon: Users,
      tag: 'Scale & Density'
    },
    {
      num: '02',
      title: 'Market Potential',
      badge: 'Growth Index',
      desc: 'Vernacular music consumption, local streaming uptake, and regional live entertainment spending appetite.',
      Icon: TrendingUp,
      tag: 'Revenue Upside'
    },
    {
      num: '03',
      title: 'Territory Size & Monopoly',
      badge: '1:1 Protection',
      desc: 'Geographic exclusivity guaranteeing only one single franchise allocated per district with zero internal competition.',
      Icon: MapPin,
      tag: 'Protected Territory'
    },
    {
      num: '04',
      title: 'Audience Virality',
      badge: 'Omnichannel',
      desc: 'Direct fan engagement across college circuits, regional FM channels, OTT music shows, and digital streaming DSPs.',
      Icon: Radio,
      tag: 'Grassroots Reach'
    },
    {
      num: '05',
      title: 'Commercial Business',
      badge: 'Multi-Stream',
      desc: 'Co-creation recording studios, live concert tours, sync licensing deals, and local brand collaborations.',
      Icon: BriefcaseBusiness,
      tag: 'Monetization Rails'
    }
  ];

  return (
    <section className="franchise section-black" id="franchise">
      <div className="container">
        {/* Top Header & 50:50 Hero Deck Split */}
        <div className="franchise-hero-split">
          <div className="franchise-intro" data-reveal>
            <p className="eyebrow">Franchise Opportunity</p>
            <h2>Giving emerging artists the recognition, visibility and opportunities they deserve.</h2>
            <p className="franchise-lead">
              The District-Wise Exclusive Franchise Model allocates one exclusive franchise per district. Franchise
              valuation is strategically calculated based on 5 district-specific market factors.
            </p>

            <div className="franchise-feature-pills">
              <div className="feature-pill">
                <span className="pill-dot" />
                <span><strong>1 District : 1 Franchise</strong> Territorial Monopoly</span>
              </div>
              <div className="feature-pill">
                <span className="pill-dot" />
                <span><strong>STPI / MeitY</strong> Incubation & AI Tech Rails</span>
              </div>
              <div className="feature-pill">
                <span className="pill-dot" />
                <span><strong>Asset-Backed</strong> IP Co-Monetization</span>
              </div>
            </div>

            <div className="franchise-cta-wrap">
              <Button href="#contact" variant="red">
                Explore Franchise Opportunity
              </Button>
            </div>
          </div>

          <div className="franchise-revenue-card" data-reveal>
            <div className="revenue-card-header">
              <span className="revenue-card-tag">Co-Operative Framework</span>
              <span className="revenue-live-dot" />
            </div>

            <div className="revenue-split-grid">
              <div className="revenue-box mom-side">
                <span className="rev-badge">50% Equity</span>
                <strong>MOM Tech Hub</strong>
                <p>AI Engine, National DSP Distribution, STPI Incubation & Polygon Web3 Rails</p>
              </div>

              <div className="revenue-split-badge">
                <span>VS</span>
              </div>

              <div className="revenue-box partner-side">
                <span className="rev-badge">50% Equity</span>
                <strong>Franchise Partner</strong>
                <p>Exclusive District Studio, Grassroots Artist Scouting, Live Tours & Local IP</p>
              </div>
            </div>

            <div className="revenue-card-footer">
              <strong>Proposed 50:50 Revenue Sharing Model</strong>
              <p>Transparent blockchain-governed payouts with zero operational blindspots.</p>
            </div>
          </div>
        </div>

        {/* 5 Valuation Factor Cards */}
        <div className="franchise-factors-wrap">
          <div className="factors-header" data-reveal>
            <span className="factors-eyebrow">Valuation Framework</span>
            <h3>How District Valuation is Determined</h3>
            <p>Every territory is evaluated across 5 key market metrics to calculate franchise capitalization and launch capacity.</p>
          </div>

          <div className="factors-grid" data-reveal>
            {valuationFactors.map((factor, idx) => {
              const IconComponent = factor.Icon;
              const isActive = activeFactor === idx;
              return (
                <article
                  key={factor.title}
                  className={`factor-card ${idx >= 3 ? 'factor-card-wide' : ''} ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFactor(idx)}
                  onClick={() => setActiveFactor(idx)}
                >
                  <div className="factor-card-top">
                    <div className="factor-num-badge">{factor.num}</div>
                    <div className="factor-icon-box" aria-hidden="true">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  <div className="factor-card-body">
                    <span className="factor-badge-pill">{factor.badge}</span>
                    <h4>{factor.title}</h4>
                    <p>{factor.desc}</p>
                  </div>

                  <div className="factor-card-footer">
                    <span className="factor-metric-tag">
                      <span className="tag-dot" />
                      {factor.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportEcosystem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pillars = [
    {
      num: '01',
      title: 'Market Access Support',
      badge: 'Pan-India Reach',
      desc: 'Direct highway connecting grassroots artists and studio franchises to national streaming DSPs, OTT deals, and brand endorsements.',
      Icon: Handshake,
      tag: 'Distribution Network'
    },
    {
      num: '02',
      title: 'AI & Technology Support',
      badge: 'Proprietary ML',
      desc: 'AI-assisted melody structuring, voice enhancement, automated mastering, and algorithmic viral trend forecasting engines.',
      Icon: Brain,
      tag: 'Audio Intelligence Engine'
    },
    {
      num: '03',
      title: 'Legal & Compliance Support',
      badge: '100% Protected',
      desc: 'Institutional contract frameworks, automated copyright defense, and transparent licensing safeguards for all music assets.',
      Icon: Scale,
      tag: 'Smart IP Escrow'
    },
    {
      num: '04',
      title: 'Blockchain Infrastructure',
      badge: 'Web3 Ledger',
      desc: 'Polygon blockchain backbone providing immutable ownership certificates and instantaneous micro-royalty splits.',
      Icon: Blocks,
      tag: 'Polygon zkEVM Backbone'
    },
    {
      num: '05',
      title: 'India-Wide STPI Network',
      badge: 'MeitY Incubated',
      desc: 'Supported through Software Technology Parks of India (STPI) with government-grade digital infrastructure and mentorship.',
      Icon: Building2,
      tag: 'Govt. Incubation Moat'
    }
  ];

  return (
    <section className="support section-light" id="support">
      <div className="container">
        <div className="support-header-wrap" data-reveal>
          <div className="support-header-left">
            <p className="eyebrow">Support Ecosystem</p>
            <h2>Institutional support pillars backing the revolution.</h2>
            <p className="support-sub">
              MOM delivers a comprehensive institutional foundation combining government incubation, cutting-edge AI,
              secure blockchain rails, and market access for partners and artists.
            </p>
          </div>

          <aside className="support-header-stpi-card" aria-label="STPI Government Incubation Partner">
            <div className="stpi-card-badge-row">
              <span className="stpi-badge-live"><span className="stpi-live-dot" /> MeitY Incubated</span>
              <span className="stpi-badge-id">Official Backing</span>
            </div>
            <div className="stpi-card-content">
              <div className="stpi-logo-container">
                <img
                  src={media.stpiLogo}
                  alt="STPI - Software Technology Parks of India, Ministry of Electronics & IT"
                  className="stpi-logo-img"
                />
              </div>
              <div className="stpi-card-text">
                <h4>Software Technology Parks of India</h4>
                <p>Autonomous Society under Ministry of Electronics &amp; Information Technology (MeitY), Govt. of India</p>
              </div>
            </div>
            <div className="stpi-card-footer">
              <span className="stpi-foot-tag">
                <span className="tag-dot" /> Govt. Digital Infrastructure &amp; Incubation Network
              </span>
            </div>
          </aside>
        </div>

        <div className="support-grid">
          {pillars.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <article
                key={item.title}
                className={`support-card ${idx >= 3 ? 'support-card-wide' : ''}`}
                data-reveal
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="support-card-top">
                  <div className="support-card-meta">
                    <span className="support-card-num">{item.num}</span>
                    <span className="support-card-badge">{item.badge}</span>
                  </div>
                  <div className="support-card-icon-box" aria-hidden="true">
                    <IconComponent size={22} />
                  </div>
                </div>

                <div className="support-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="support-card-footer">
                  <span className="support-card-tag">
                    <span className="tag-dot" />
                    {item.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function InvestmentSection() {
  const [activeCard, setActiveCard] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Transparency',
      badge: 'Zero Blindspots',
      desc: 'Real-time smart contracts with verified immutable on-chain royalty distribution.',
      Icon: ShieldCheck,
      tag: '100% Audit Trail'
    },
    {
      num: '02',
      title: 'Public Interest',
      badge: 'Mass Demand',
      desc: 'Empowering grassroots Tier-2 & Tier-3 music creators with high organic fan adoption.',
      Icon: Users,
      tag: 'High Virality'
    },
    {
      num: '03',
      title: 'Risk Free',
      badge: 'Asset-Backed',
      desc: 'District-exclusive franchise ownership with hedged risk and verified digital rights.',
      Icon: LockKeyhole,
      tag: 'Protected Capital'
    },
    {
      num: '04',
      title: 'Revenue Generated',
      badge: 'Multi-Channel',
      desc: 'Diverse commercial revenue: streaming, sync licensing, live gigs & artist IP merch.',
      Icon: TrendingUp,
      tag: '50:50 Shared Upside'
    },
    {
      num: '05',
      title: 'Trending',
      badge: 'Exponential Scale',
      desc: 'AI-assisted hit generation capitalizing on India’s booming regional music revolution.',
      Icon: Zap,
      tag: 'Regional Growth'
    }
  ];

  const stats = [
    { value: '100%', label: 'Royalty Transparency', sub: 'On-chain Smart Contracts' },
    { value: '50:50', label: 'Co-Operative Model', sub: 'Franchise Revenue Sharing' },
    { value: '1 District : 1', label: 'Territory Exclusivity', sub: 'Zero Internal Competition' },
    { value: 'STPI / MeitY', label: 'Govt. Incubation', sub: 'Institutional Backing' }
  ];

  return (
    <section className="investment section-charcoal" id="investment">
      <div className="container">
        <div className="investment-grid">
          <div className="investment-visual-col" data-reveal>
            <div className="investment-visual-frame">
              <img
                src={media.ownership}
                alt="Premium MOM music ownership visual for investor information"
                loading="lazy"
              />
              <div className="investment-badge-top">
                <span className="live-dot" aria-hidden="true" />
                <span>Institutional Grade</span>
              </div>
              <div className="investment-badge-bottom">
                <div className="badge-bottom-icon">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <strong>STPI & MeitY Incubated</strong>
                  <p>AI-Powered & Web3 Protected Music Ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          <div className="investment-content-col" data-reveal>
            <p className="eyebrow">Investment & Valuation</p>
            <h2>What investors want to know before investing.</h2>
            <p className="investment-intro">
              This section preserves the company's supplied presentation language and does not add financial guarantees
              or unsupported investment promises.
            </p>

            <div className="investment-cards-grid">
              {pillars.map((item, idx) => {
                const IconComponent = item.Icon;
                const isActive = activeCard === idx;
                return (
                  <article
                    key={item.title}
                    className={`investor-card ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCard(idx)}
                    onClick={() => setActiveCard(idx)}
                  >
                    <div className="investor-card-header">
                      <span className="investor-card-num">{item.num}</span>
                      <div className="investor-card-icon">
                        <IconComponent size={20} />
                      </div>
                    </div>
                    <div className="investor-card-body">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="investor-card-footer">
                      <span className="investor-card-tag">
                        <span className="dot" />
                        {item.tag}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="investment-stats-strip" data-reveal>
          {stats.map((stat) => (
            <div key={stat.label} className="investor-stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FinalCTA() {
  return (
    <section className="final-cta section-black">
      <img src={media.finalCta} alt="Massive live concert crowd with stage lights" loading="lazy" />
      <div data-reveal>
        <p className="eyebrow">MAD OVER MUSIC</p>
        <h2>Let's build a stronger, fairer, louder music future together.</h2>
        <div className="hero-actions">
          <Button href="#contact" variant="red">
            Get in Touch
          </Button>
          <Button href="#franchise" variant="ghost">
            Become a Franchise Partner
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact section-ivory" id="contact">
      <div className="container contact-grid">
        <div data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let's build together.</h2>
          <p>
            Send an enquiry for artist opportunities, franchise opportunities, partnerships, business collaboration or
            general questions.
          </p>
        </div>
        <form data-reveal>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            I'm Interested In
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option>Artist Opportunity</option>
              <option>Franchise Opportunity</option>
              <option>Partnership</option>
              <option>Business / Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </label>
          <label className="full">
            Message
            <textarea name="message" rows="5" />
          </label>
          <button className="button button-red" type="submit">
            <span>Send Enquiry</span>
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={media.logoLight} alt="MAD OVER MUSIC logo" />
          <p>A technology enabled ecosystem connecting talent discovery to music creation and monetization.</p>
          <div className="footer-stpi-badge">
            <img src={media.stpiLogo} alt="STPI Software Technology Parks of India" />
            <div>
              <small>Incubated Platform</small>
              <strong>STPI · MeitY Govt. of India</strong>
            </div>
          </div>
          <a className="button button-red" href="#contact">
            <span>Get in Touch</span>
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="footer-col">
          <span>Explore</span>
          <nav aria-label="Footer navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-col">
          <span>Company</span>
          <p>
            Desi Tune Entertainment Pvt. Ltd.
            <br />
            CEO & Producer - Mr. Maninder Hooda
          </p>
          <p>© 2026 Desi Tune Entertainment Pvt. Ltd. All Rights Reserved.</p>
        </div>
        <p>
          Desi Tune Entertainment Pvt. Ltd.
          <br />
          © 2026 Desi Tune Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      <div className="footer-stroke" aria-hidden="true">MOM</div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
