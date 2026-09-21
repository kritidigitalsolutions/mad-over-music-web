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
  X
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
  revenue: asset('revenue-model.png')
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

const legalPoints = [
  ['Structured legal and business framework', FileCheck2],
  ['Artist rights and intellectual property', Scale],
  ['Regulatory compliance', BadgeCheck],
  ['Blockchain-supported transaction records', Blocks],
  ['Transparent platform policies', ShieldCheck],
  ['Secure digital ecosystem', LockKeyhole]
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
        <LegalFoundation />
        <Incubation />
        <ProblemSection />
        <SolutionJourney />
        <Ecosystem />
        <PremiumOfferings />
        <ArtistSection />
        <ArtistJourney />
        <RevenueModel />
        <MarketStrategy />
        <CompetitiveAdvantage />
        <GrowthRoadmap />
        <FranchiseSection />
        <SupportEcosystem />
        <SecurityRecognition />
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
  const items = ['Talent is born out of poverty', 'Employment', 'End monopoly from industry'];
  return (
    <section className="vision section-charcoal" id="vision">
      <div className="container">
        <SectionHeading eyebrow="Vision & Mission" title="A fairer path into music">
          Three company-provided principles shape MOM's mission.
        </SectionHeading>
        <div className="vision-line draw-line" />
        <div className="vision-grid">
          {items.map((item, index) => (
            <article key={item} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalFoundation() {
  return (
    <section className="legal section-ivory">
      <div className="container">
        <SectionHeading eyebrow="Legal Foundation" title="Building MOM on a strong foundation">
          A secure music ecosystem depends on rights, policy, compliance and trust.
        </SectionHeading>
        <div className="legal-grid">
          {legalPoints.map(([label, Icon]) => (
            <article key={label} data-reveal>
              <Icon size={24} />
              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Incubation() {
  return (
    <section className="incubation section-light">
      <div className="container split">
        <div data-reveal>
          <p className="eyebrow">Incubation & Recognition</p>
          <h2>Government-linked incubation support</h2>
          <p>
            MOM is incubated under Government STPI, which falls under the Ministry of Electronics and Information
            Technology. The supplied presentation places MOM within a Haryana Government support context and identifies
            AI and blockchain as key technology sectors.
          </p>
          <p>
            The presentation states that MOM is using Polygon AI Blockchain and references STPI's India-wide network of
            offices as part of the wider expansion context.
          </p>
        </div>
        <div className="recognition-panel" data-reveal>
          <figure className="incubation-image">
            <img src={media.ai} alt="Editorial AI and music technology visual for MOM" loading="lazy" />
          </figure>
          <div>
            <Landmark size={30} />
            <strong>STPI</strong>
            <span>Government incubation</span>
          </div>
          <div>
            <Brain size={30} />
            <strong>AI + Blockchain</strong>
            <span>Key technology sectors</span>
          </div>
          <div>
            <Blocks size={30} />
            <strong>Polygon AI Blockchain</strong>
            <span>Company-provided positioning</span>
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
  const steps = ['Talent', 'Audition', 'Selection', 'Workshop', 'Music Creation', 'Music Ecosystem', 'Monetization', 'Growth'];
  return (
    <section className="artist-journey section-light">
      <div className="container">
        <SectionHeading eyebrow="Artist Journey" title="From local talent to music economy participation" />
        <div className="timeline">
          {steps.map((step, index) => (
            <article key={step} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </article>
          ))}
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
  const factors = ['Population', 'Market Potential', 'Territory Size', 'Audience Reach', 'Business Opportunities'];
  return (
    <section className="franchise section-black" id="franchise">
      <div className="container franchise-grid">
        <div data-reveal>
          <p className="eyebrow">Franchise Opportunity</p>
          <h2>Giving emerging artists the recognition, visibility and opportunities they deserve.</h2>
          <p>
            The District-Wise Exclusive Franchise Model allocates one exclusive franchise per district. Franchise
            valuation is determined based on district-specific market factors.
          </p>
          <Button href="#contact" variant="red">
            Explore Franchise Opportunity
          </Button>
        </div>
        <div className="franchise-factors" data-reveal>
          {factors.map((factor) => (
            <span key={factor}>{factor}</span>
          ))}
        </div>
      </div>
      <div className="container sharing" data-reveal>
        <span>MOM</span>
        <strong>Proposed 50:50 Revenue Sharing</strong>
        <span>Franchise Partner</span>
      </div>
    </section>
  );
}

function SupportEcosystem() {
  const items = [
    ['Market Access Support', Handshake],
    ['Technology Support', Brain],
    ['Legal & Compliance Support', Scale],
    ['Blockchain Infrastructure', Blocks],
    ['India-Wide STPI Network', Building2]
  ];
  return (
    <section className="support section-light">
      <div className="container">
        <SectionHeading eyebrow="Support Ecosystem" title="Institutional support pillars" />
        <div className="support-grid">
          {items.map(([title, Icon]) => (
            <article key={title} data-reveal>
              <Icon size={26} />
              <strong>{title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityRecognition() {
  return (
    <section className="security section-ivory">
      <div className="container security-grid">
        <div className="security-copy" data-reveal>
          <p className="eyebrow">Security & Recognition</p>
          <h2>MOM is incubated with STPI.</h2>
          <p>
            The supplied presentation positions MOM within a government-linked incubation ecosystem under STPI and the
            Ministry of Electronics and Information Technology context.
          </p>
          <div className="security-points">
            <span>Government-linked incubation</span>
            <span>Legal, technology and market access support</span>
            <span>Secure digital ecosystem positioning</span>
          </div>
        </div>
        <div className="security-card" data-reveal>
          <ShieldCheck size={44} />
          <strong>Government-linked incubation</strong>
          <span>STPI under the Ministry of Electronics and Information Technology</span>
          <small>Company-provided positioning from the supplied presentation.</small>
        </div>
      </div>
    </section>
  );
}

function InvestmentSection() {
  const items = ['Transparency', 'Public Interest', 'Risk Free', 'Revenue Generated', 'Trending'];
  return (
    <section className="investment section-charcoal">
      <div className="container investment-grid">
        <figure data-reveal>
          <img src={media.ownership} alt="Premium MOM music ownership visual for investor information" loading="lazy" />
        </figure>
        <div data-reveal>
          <p className="eyebrow">Investment & Valuation</p>
          <h2>What investors want to know before investing.</h2>
          <p>
            This section preserves the company's supplied presentation language and does not add financial guarantees or
            unsupported investment promises.
          </p>
          <div className="investment-row">
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
