"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, PhoneCall, Cpu, Network, Cloud, Code, BarChart3, 
  Briefcase, Star, Users, Globe2, CheckCircle2, Play, ChevronLeft, 
  ChevronRight, Sparkles,
  ChevronDown, Menu, X, Mail, MapPin, Terminal, ExternalLink
} from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

// =========================================================================
// INTERFACES & STATIC CONFIGURATIONS
// =========================================================================
interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}

interface MetricItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  subLabel: string;
  borderRight: boolean;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export default function HomePage() {
  // Mobile / Interactive UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);
  const [selectedServiceTab, setSelectedServiceTab] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  // =========================================================================
  // DOM REFS FOR GSAP DYNAMIC SVG NETWORK LINES
  // =========================================================================
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const centerHubRef = useRef<HTMLDivElement>(null);

  // Specific Node Component Handlers
  const nodeAiRef = useRef<HTMLDivElement>(null);
  const nodeAutoRef = useRef<HTMLDivElement>(null);
  const nodeCloudRef = useRef<HTMLDivElement>(null);
  const nodeCustomRef = useRef<HTMLDivElement>(null);
  const nodeDataRef = useRef<HTMLDivElement>(null);

  // Path Vector Refs
  const pathAiRef = useRef<SVGPathElement>(null);
  const pathAutoRef = useRef<SVGPathElement>(null);
  const pathCloudRef = useRef<SVGPathElement>(null);
  const pathCustomRef = useRef<SVGPathElement>(null);
  const pathDataRef = useRef<SVGPathElement>(null);

  // Scroll Lifecycle hook
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // =========================================================================
  // GSAP CALCULATION & INTERACTIVE ENTRANCE ENGINE
  // =========================================================================
  useLayoutEffect(() => {
    if (!heroContainerRef.current || !centerHubRef.current) return;

    const updateNetworkLines = () => {
      const containerRect = heroContainerRef.current!.getBoundingClientRect();
      const centerRect = centerHubRef.current!.getBoundingClientRect();

      // Calculate geometric focal center of the "C" Hub
      const cx = (centerRect.left + centerRect.width / 2) - containerRect.left;
      const cy = (centerRect.top + centerRect.height / 2) - containerRect.top;

      // Inner calculation function to find boundary anchors cleanly
      const connectToPath = (nodeElement: HTMLDivElement | null, pathElement: SVGPathElement | null) => {
        if (!nodeElement || !pathElement) return;
        const nodeRect = nodeElement.getBoundingClientRect();

        // Target focal point of child structural nodes
        const nx = (nodeRect.left + nodeRect.width / 2) - containerRect.left;
        const ny = (nodeRect.top + nodeRect.height / 2) - containerRect.top;

        // Draw perfect linear node coordinates vector string
        pathElement.setAttribute('d', `M ${cx} ${cy} L ${nx} ${ny}`);
      };

      // Map connection nodes explicitly
      connectToPath(nodeAiRef.current, pathAiRef.current);
      connectToPath(nodeAutoRef.current, pathAutoRef.current);
      connectToPath(nodeCloudRef.current, pathCloudRef.current);
      connectToPath(nodeCustomRef.current, pathCustomRef.current);
      connectToPath(nodeDataRef.current, pathDataRef.current);
    };

    // Run layout configurations
    setTimeout(updateNetworkLines, 100);

    // GSAP Entrance Multi-Stage Timeline Animation
    const t1 = gsap.timeline({ defaults: { ease: 'power3.out' } });

    t1.fromTo('.hero-text-item', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    );

    t1.fromTo(centerHubRef.current, 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    t1.fromTo('.floating-node-card',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, onComplete: updateNetworkLines },
      '-=0.2'
    );

    t1.fromTo('.network-vector-path',
      { strokeDashoffset: 100, opacity: 0 },
      { strokeDashoffset: 0, opacity: 0.7, duration: 1.2, stagger: 0.05 },
      '-=0.5'
    );

    // Subtle continuous floating ambient animation loop for nodes
    gsap.to('.floating-node-card', {
      y: '+=8',
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.2, from: 'random' }
    });

    // Resize listener to prevent absolute breakages
    window.addEventListener('resize', updateNetworkLines);
    return () => window.removeEventListener('resize', updateNetworkLines);
  }, []);

  // =========================================================================
  // DATASHEET CONTENT
  // =========================================================================
  const navLinks: NavLinkItem[] = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services", hasDropdown: true, dropdownItems: ["AI & Machine Learning", "Automation Solutions", "Cloud & DevOps", "Custom Software", "Data Analytics"] },
    { label: "Solutions", href: "#solutions", hasDropdown: true, dropdownItems: ["Enterprise Design", "SaaS Structuring"] },
    { label: "Industries", href: "#industries" },
    { label: "Resources", href: "#resources" },
    { label: "Company", href: "#company" }
  ];

  const servicesData = [
    { id: 0, icon: <Cpu />, title: "AI & Machine Learning", tagline: "Cognitive Neural Architecture", description: "Build intelligent systems that learn, adapt, and drive smarter enterprise decisions via deep data mapping models.", badgeText: "Core Tech", features: ["Predictive Analytics Engines", "Natural Language Parsers", "Computer Vision Integration", "Custom LLM Fine-Tuning Models"] },
    { id: 1, icon: <Network />, title: "Automation Solutions", tagline: "Hyper-efficient Systems", description: "Streamline high-volume complex workflows, eliminate system fragmentation, reduce manual errors, and scale throughput.", badgeText: "Efficiency", features: ["Robotic Process Automation (RPA)", "API-First Middleware Hubs", "Event-Driven System Logic"] },
    { id: 2, icon: <Cloud />, title: "Cloud & DevOps", tagline: "Elastic Clusters", description: "Scale infrastructure securely using robust automated deployment pipelines with multi-region cloud resilience architectures.", badgeText: "Infrastructure", features: ["Terraform IaC Frameworks", "CI/CD GitHub Actions Pipelines", "Zero-Downtime Live Migrations"] },
    { id: 3, icon: <Code />, title: "Custom Software Development", tagline: "Distributed Nodes", description: "Tailored multi-platform software solutions purposefully mapped to grow rapidly in parallel with your modern enterprise vectors.", badgeText: "Custom Builds", features: ["High-Concurrency Backends", "NextJS Interactive Frontends", "Cross-Platform Protocol Buffers"] },
    { id: 4, icon: <BarChart3 />, title: "Data & Analytics", tagline: "Real-time Telemetry", description: "Turn unorganized transaction data logs into live operational insights for rapid high-level tactical updates.", badgeText: "Business Intelligence", features: ["Real-time Stream Telemetry", "Apache Kafka Cluster Mapping", "OLAP Data Warehouse Pipelines"] }
  ];

  const metricsData: MetricItem[] = [
    { id: "m1", icon: <Briefcase className="w-4 h-4" />, value: "150+", label: "Projects Delivered", subLabel: "Worldwide Deployment", borderRight: true },
    { id: "m2", icon: <Star className="w-4 h-4" />, value: "95%", label: "Client Satisfaction", subLabel: "Top Net Promoter Score", borderRight: true },
    { id: "m3", icon: <Users className="w-4 h-4" />, value: "50+", label: "Skilled Professionals", subLabel: "Vetted Senior Engineers", borderRight: true },
    { id: "m4", icon: <Globe2 className="w-4 h-4" />, value: "10+", label: "Countries Served", subLabel: "Compliant Framework Crossings", borderRight: false },
  ];

  const testimonialsData: Testimonial[] = [
    { id: 1, quote: "Creatik IT Solution transformed our ideas into a powerful digital product. Their structural implementation team is professional, highly responsive, and exceptionally skilled in data-intensive frameworks.", name: "Rohan Verma", role: "CTO", company: "FinEdge Systems", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80", rating: 5 },
    { id: 2, quote: "Their specialized expertise in automation loops and secure multi-region cloud pipelines helped us cut operational over-allocation by 40% while doubling data parsing speeds safely.", name: "Sneha Patil", role: "Head of Global Operations", company: "LogiNext Logistics", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80", rating: 5 },
    { id: 3, quote: "A rare technology partner that explicitly delivers on time with high-integrity architectural blueprints. They went above and beyond to protect our data pipelines during configuration shifts.", name: "Arjun Mehta", role: "Senior Product Architect", company: "HealthPlus Solutions", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80", rating: 5 }
  ];

  const faqData = [
    { id: 1, question: "How does Creatik IT Solution ensure maximum data layer security?", answer: "We deploy comprehensive transport security protocols (TLS 1.3), complete column-level database envelope encryption, rigorous role-based routing controls, and strict compliance alignment matching SOC2 Type II, ISO 27001, and HIPAA operational specifications." },
    { id: 2, question: "What is the typical integration timeline for enterprise AI systems?", answer: "Standard architectural setups follow an initial 2-3 week optimization scoping period. MVP node alignment usually concludes within 6-8 weeks, followed by comprehensive verification testing layers ensuring completely frictionless multi-region functional scaling." },
    { id: 3, question: "Can legacy monolith systems be hooked into new automation nodes safely?", answer: "Yes, our engineers specialize in custom API wrappers, transactional broker relays, and real-time Kafka event extraction modules that sync data cleanly without compromising existing platform operations." }
  ];

  return (
    <div className="w-full bg-[var(--neutral-100)] text-[var(--neutral-700)] pt-12 font-sans overflow-x-hidden selection:bg-[var(--primary-blue-500)] selection:text-white antialiased">

      {/* =========================================================================
          1. STICKY HEADER SYSTEM
          ========================================================================= */}
      {/* <header className={`sticky top-0 z-50 w-full transition-all duration-300 px-6 lg:px-16 py-4 flex items-center justify-between border-b ${
        scrolled ? 'bg-white/95 shadow-md shadow-[var(--neutral-200)]/50 border-[var(--neutral-400)]/60 backdrop-blur-md' : 'bg-white/80 border-[var(--neutral-300)] backdrop-blur-md'
      }`}>
        <div className="flex items-center space-x-2.5 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[var(--primary-blue-500)] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-[var(--primary-blue-500)]/30">C</div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-[var(--neutral-900)] tracking-tight leading-none">
              Creatik <span className="text-[var(--primary-blue-500)] font-medium text-lg">IT Solution</span>
            </span>
            <span className="text-[9px] text-[var(--neutral-500)] font-bold uppercase tracking-widest mt-0.5">Enterprise Innovation</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[var(--neutral-600)]">
          {navLinks.map((link) => (
            <div 
              key={link.label}
              className="relative py-2"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={link.href} className={`flex items-center space-x-1.5 transition-colors ${link.label === "Home" ? "text-[var(--primary-blue-500)]" : "hover:text-[var(--primary-blue-500)]"}`}>
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-3 h-3 text-[var(--neutral-500)]" />}
              </a>
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-[var(--neutral-300)] rounded-2xl p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1.5">
                    {link.dropdownItems?.map((item, idx) => (
                      <a key={idx} href="#" className="block px-3 py-2 text-xs font-medium text-[var(--neutral-700)] rounded-xl hover:bg-[var(--primary-blue-50)] hover:text-[var(--primary-blue-600)] transition-all">{item}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-3.5">
          <button className="px-5 py-2.5 text-xs font-bold text-[var(--neutral-700)] bg-[var(--neutral-200)] border border-[var(--neutral-400)] rounded-full hover:bg-[var(--neutral-300)] cursor-pointer">Get a Quote</button>
          <button className="px-5 py-2.5 text-xs font-bold text-white bg-[var(--primary-blue-500)] rounded-full hover:bg-[var(--primary-blue-600)] shadow-lg shadow-[var(--primary-blue-500)]/20 cursor-pointer">Contact Us</button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-xl border border-[var(--neutral-400)] text-[var(--neutral-700)]">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header> */}

      {/* =========================================================================
          2. HERO SECTION (Dynamic Vector Canvas Map via GSAP Node Tracking)
          ========================================================================= */}
      <section id="home" ref={heroContainerRef} className="relative pt-16 pb-28 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Dynamic Absolute SVG Layer across whole hero canvas */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none select-none z-0" xmlns="http://www.w3.org/2000/svg">
          <g filter="drop-shadow(0px 4px 12px rgba(91, 124, 255, 0.04))">
            <path ref={pathAiRef} className="network-vector-path stroke-[var(--purple-400)]/50" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <path ref={pathAutoRef} className="network-vector-path stroke-[var(--primary-blue-400)]/60" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <path ref={pathCloudRef} className="network-vector-path stroke-[var(--primary-blue-300)]/50" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <path ref={pathCustomRef} className="network-vector-path stroke-[var(--pink-400)]/50" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <path ref={pathDataRef} className="network-vector-path stroke-[var(--purple-400)]/60" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          </g>
        </svg>

        <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-[var(--primary-blue-400)]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Left Content Column */}
        <div className="lg:col-span-6 space-y-7 text-center lg:text-left relative z-10">
          <div className="hero-text-item inline-flex items-center space-x-2 bg-[var(--primary-blue-50)]/80 border border-[var(--primary-blue-100)] text-[var(--primary-blue-500)] px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3 h-3 text-[var(--primary-blue-500)]" />
            <span>• AI</span><span className="text-[var(--primary-blue-300)]">•</span><span>Automation</span><span className="text-[var(--primary-blue-300)]">•</span><span>Digital Innovation</span>
          </div>

          <h1 className="hero-text-item text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[var(--neutral-900)] leading-[1.12]">
            We Build Intelligent <br className="hidden sm:inline" />
            Solutions That Drive <br />
            Real <span className="text-[var(--primary-blue-500)] relative inline-block">Business Impact<span className="absolute bottom-1 left-0 w-full h-[4px] bg-[var(--primary-blue-100)] -z-10 rounded-full" /></span>
          </h1>

          <p className="hero-text-item text-sm sm:text-base text-[var(--neutral-600)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Creatik IT Solution helps businesses transform, innovate, and scale with cutting-edge artificial intelligence infrastructure, process automation loops, and high-performance digital ecosystems.
          </p>

          <div className="hero-text-item flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
            <button className="flex items-center space-x-2.5 px-7 py-3.5 bg-[var(--primary-blue-500)] text-white font-bold text-sm rounded-xl hover:bg-[var(--primary-blue-600)] shadow-xl shadow-[var(--primary-blue-500)]/20 transition-all cursor-pointer group">
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center space-x-2 px-7 py-3.5 bg-white border border-[var(--neutral-400)] text-[var(--neutral-800)] font-bold text-sm rounded-xl hover:bg-[var(--neutral-200)] transition-all cursor-pointer">
              <span>Let's Talk</span>
              <PhoneCall className="w-4 h-4 text-[var(--neutral-500)]" />
            </button>
          </div>
        </div>

        {/* Hero Right Constellation Graph (Geometric Absolute Coordinates Alignment Mapping) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] mt-12 lg:mt-0 z-10">

          {/* Main Central Hub Ref Anchor */}
          <div ref={centerHubRef} className="relative w-56 h-56 rounded-full border border-[var(--primary-blue-100)]/90 bg-white shadow-2xl flex items-center justify-center p-5 z-20">
            <div className="absolute inset-2 rounded-full border border-dashed border-[var(--primary-blue-400)] animate-spin [animation-duration:50s]" />
            <div className="w-full h-full rounded-full border border-[var(--primary-blue-500)]/10 bg-gradient-to-tr from-white to-[var(--primary-blue-50)]/20 flex items-center justify-center shadow-inner">
              <span className="text-5xl font-black text-[var(--primary-blue-500)] italic tracking-tighter select-none"><img width={130} src="/creatikai-logo.png"/></span>
            </div>
          </div>

          {/* Node 1: AI (Top Right Coordinates) */}
          <div ref={nodeAiRef} className="floating-node-card absolute top-[2%] right-[12%] sm:right-[18%] lg:right-[10%] bg-white border border-[var(--neutral-300)] rounded-xl p-3 shadow-xl flex items-center space-x-2.5 z-30 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--purple-50)] text-[var(--purple-500)]"><Cpu className="w-4 h-4" /></div>
            <span className="text-xs font-bold text-[var(--neutral-800)] tracking-tight pr-1">AI & Machine Learning</span>
          </div>

          {/* Node 2: Automation (Mid Left Coordinates) */}
          <div ref={nodeAutoRef} className="floating-node-card absolute top-[24%] left-[0%] sm:left-[6%] lg:left-[-2%] bg-white border border-[var(--neutral-300)] rounded-xl p-3 shadow-xl flex items-center space-x-2.5 z-30 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--primary-blue-50)] text-[var(--primary-blue-500)]"><Network className="w-4 h-4" /></div>
            <span className="text-xs font-bold text-[var(--neutral-800)] tracking-tight pr-1">Automation Solutions</span>
          </div>

          {/* Node 3: Cloud (Mid Right Coordinates) */}
          <div ref={nodeCloudRef} className="floating-node-card absolute top-[30%] -right-[4%] sm:right-[2%] lg:-right-[6%] bg-white border border-[var(--neutral-300)] rounded-xl p-3 shadow-xl flex items-center space-x-2.5 z-30 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--primary-blue-50)] text-[var(--primary-blue-400)]"><Cloud className="w-4 h-4" /></div>
            <span className="text-xs font-bold text-[var(--neutral-800)] tracking-tight pr-1">Cloud Solutions</span>
          </div>

          {/* Node 4: Custom Software (Lower Right Coordinates) */}
          <div ref={nodeCustomRef} className="floating-node-card absolute bottom-[16%] right-[2%] sm:right-[8%] lg:right-[-2%] bg-white border border-[var(--neutral-300)] rounded-xl p-3 shadow-xl flex items-center space-x-2.5 z-30 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--pink-50)] text-[var(--pink-500)]"><Code className="w-4 h-4" /></div>
            <span className="text-xs font-bold text-[var(--neutral-800)] tracking-tight pr-1">Custom Software</span>
          </div>

          {/* Node 5: Data Analytics (Lower Left Coordinates) */}
          <div ref={nodeDataRef} className="floating-node-card absolute bottom-[4%] left-[16%] sm:left-[22%] lg:left-[14%] bg-white border border-[var(--neutral-300)] rounded-xl p-3 shadow-xl flex items-center space-x-2.5 z-30 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--purple-50)] text-[var(--purple-500)]"><BarChart3 className="w-4 h-4" /></div>
            <span className="text-xs font-bold text-[var(--neutral-800)] tracking-tight pr-1">Data & Analytics</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. LOGO RUNWAY STRIP
          ========================================================================= */}
      <section className=" py-10 px-6 text-center">
        <p className="text-[16px] uppercase tracking-[0.2em] font-extrabold text-[var(--neutral-700)] mb-6">Trusted By Innovative Companies Worldwide</p>
        <div className="max-w-7xl bg-white border-y border-[var(--neutral-400)]/60 shadow-2xl shadow-neutral-500 mx-auto px-6 rounded-xl flex flex-wrap items-center justify-center gap-12 md:gap-10  saturate-50">
          <span className="text-lg font-bold tracking-tight text-[var(--neutral-700)]"><img width={160} src="/microsoft-logo.png"/></span>
          <span className="text-lg font-black tracking-tighter text-[var(--neutral-800)] italic"><img width={90} src="/aws-logo.png"/></span>
          <span className="text-md font-medium text-[var(--neutral-600)]"><img width={210} src="/google-cloude-logo.png"/></span>
          <span className="text-lg font-semibold tracking-wide text-[var(--neutral-800)]"><img width={150} src="/meta-logo.png"/></span>
          <span className="text-md font-extrabold text-[var(--neutral-700)]"><img width={160} src="/nvidia-logo.png"/></span>
          <span className="text-md font-mono font-bold text-[var(--neutral-900)]"><img width={160} src="/openai-logo.png"/></span>
        </div>
      </section>

      {/* =========================================================================
          4. INNOVATIVE SOLUTIONS CATALOG (Services Engine)
          ========================================================================= */}
      <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[var(--primary-blue-500)] tracking-wider uppercase bg-[var(--primary-blue-50)] px-3 py-1 rounded-md">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--neutral-900)] tracking-tight leading-tight">Innovative Solutions. <br />Measurable <span className="text-[var(--primary-blue-500)]">Results</span>.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm text-[var(--neutral-600)] max-w-xl leading-relaxed font-medium">We combine machine precision engineering, technical strategy, and architectural creativity to deliver robust end-to-end digital frameworks that clear internal bottlenecks and unlock market capture pathways.</p>
          </div>
        </div>

        {/* 5-Card High Density Grid layout matching mock layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedServiceTab(index)}
              className={`bg-white border rounded-2xl p-6 shadow-xs transition-all duration-300 flex flex-col justify-between h-full group relative cursor-pointer ${
                selectedServiceTab === index ? 'border-[var(--primary-blue-500)] ring-2 ring-[var(--primary-blue-500)]/10 shadow-xl' : 'border-[var(--neutral-300)] hover:border-[var(--neutral-400)]/80 hover:shadow-lg'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--neutral-200)] text-[var(--neutral-700)] group-hover:bg-[var(--primary-blue-500)] group-hover:text-white transition-colors shadow-xs">
                    {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                  </div>
                  <span className="text-[9px] font-bold text-[var(--neutral-500)] bg-[var(--neutral-200)] px-2 py-0.5 rounded uppercase tracking-wider">{service.badgeText}</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black text-[var(--neutral-900)] tracking-tight leading-snug group-hover:text-[var(--primary-blue-500)] transition-colors">{service.title}</h3>
                  <p className="text-[9px] font-bold text-[var(--neutral-500)] uppercase tracking-wider">{service.tagline}</p>
                  <p className="text-xs text-[var(--neutral-500)] font-medium leading-relaxed pt-1">{service.description}</p>
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-bold text-[var(--primary-blue-500)] group/link">
                <span>Learn More</span><span className="transform group-hover/link:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Spec Sheet Tab Panel Display */}
        <div className="mt-8 w-full bg-white border border-[var(--neutral-300)] rounded-3xl p-6 lg:p-8 shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 space-y-1">
            <span className="text-[9px] font-black text-[var(--primary-blue-500)] uppercase tracking-widest bg-[var(--primary-blue-50)] px-2 py-0.5 rounded">Active Blueprint Inspection</span>
            <h4 className="text-base font-bold text-[var(--neutral-900)]">{servicesData[selectedServiceTab].title}</h4>
            <p className="text-xs text-[var(--neutral-500)] font-medium">{servicesData[selectedServiceTab].description}</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {servicesData[selectedServiceTab].features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center space-x-2.5 p-3 bg-[var(--neutral-200)] rounded-xl border border-[var(--neutral-300)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-blue-500)] shrink-0" />
                <span className="text-xs font-bold text-[var(--neutral-700)] leading-tight">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. METRICS HUD STRIP
          ========================================================================= */}
      <section className="w-full bg-[var(--neutral-900)] text-white py-12 px-6 lg:px-16 border-y border-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metricsData.map((metric) => (
            <div key={metric.id} className={`space-y-1.5 ${metric.borderRight ? 'lg:border-r lg:border-[var(--neutral-800)]/80 pr-2' : ''}`}>
              <div className="inline-flex items-center justify-center p-2 rounded-xl bg-[var(--neutral-800)] text-[var(--primary-blue-400)] border border-[var(--neutral-800)]/60">{metric.icon}</div>
              <h3 className="text-3xl font-black text-white tracking-tight">{metric.value}</h3>
              <div>
                <p className="text-xs font-bold text-[var(--neutral-200)] tracking-tight">{metric.label}</p>
                <p className="text-[10px] text-[var(--neutral-600)] font-medium">{metric.subLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. DIGITAL TRANSFORMATION HUB (Media Badging & Overlays)
          ========================================================================= */}
      <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold text-[var(--primary-blue-500)] tracking-wider uppercase bg-[var(--primary-blue-50)] px-3 py-1 rounded-md">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--neutral-900)] tracking-tight leading-tight">Your Technology Partner <br />in <span className="text-[var(--primary-blue-500)]">Digital Transformation</span></h2>
          <p className="text-sm text-[var(--neutral-600)] leading-relaxed font-medium">Creatik IT Solution is a high-capability, dynamic systems engineering and technological advisory firm dedicated to forging high-performance software modules for complex businesses.</p>
          <p className="text-sm text-[var(--neutral-600)] leading-relaxed font-medium">We inject maximum speed, continuous automation loops, and high-level platform protection systems into every transactional node we launch.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-bold text-[var(--neutral-700)]">
            <div className="flex items-center space-x-2.5"><CheckCircle2 className="w-4 h-4 text-[var(--primary-blue-500)] shrink-0" /> <span>Client-Centric Approach</span></div>
            <div className="flex items-center space-x-2.5"><CheckCircle2 className="w-4 h-4 text-[var(--primary-blue-500)] shrink-0" /> <span>Secure & Reliable Delivery</span></div>
            <div className="flex items-center space-x-2.5"><CheckCircle2 className="w-4 h-4 text-[var(--primary-blue-500)] shrink-0" /> <span>Agile & Scalable Solutions</span></div>
            <div className="flex items-center space-x-2.5"><CheckCircle2 className="w-4 h-4 text-[var(--primary-blue-500)] shrink-0" /> <span>Innovation at the Core</span></div>
          </div>
          <div className="pt-2"><button className="flex items-center space-x-2 px-6 py-3.5 bg-[var(--primary-blue-500)] text-white font-bold text-xs rounded-xl hover:bg-[var(--primary-blue-600)] transition-all cursor-pointer"><span>Know More About Us</span><ArrowRight className="w-4 h-4" /></button></div>
        </div>

        {/* Right Media Frame Overlay block */}
        <div className="lg:col-span-7 relative">
          <div className="relative w-full h-[350px] rounded-3xl bg-[var(--neutral-900)] overflow-hidden shadow-2xl border border-[var(--neutral-800)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--primary-blue-700)] via-[var(--purple-900)] to-[var(--neutral-950)] mix-blend-color-dodge" />
            <div className="absolute top-8 left-8 z-20 text-white font-extrabold flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[var(--primary-blue-500)] text-md">❖</span><span className="tracking-wide text-xs">Creatik IT Labs</span>
            </div>
            <button onClick={() => setVideoModalOpen(true)} className="absolute inset-0 m-auto w-16 h-16 bg-[var(--primary-blue-500)] hover:bg-[var(--primary-blue-600)] text-white rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer">
              <Play className="w-6 h-6 fill-current ml-1" />
            </button>
          </div>

          {/* Three Overlapping Metric Highlight Cards Array mapping from image layout */}
          <div className="absolute -bottom-10 left-4 right-4 grid grid-cols-3 gap-3.5 z-30">
            <div className="bg-white border border-[var(--neutral-300)] p-4 rounded-2xl shadow-xl text-center">
              <h4 className="text-2xl font-black text-[var(--primary-blue-500)]">10+</h4>
              <p className="text-[9px] text-[var(--neutral-500)] mt-0.5 uppercase font-extrabold tracking-wider">Years Experience</p>
            </div>
            <div className="bg-[var(--primary-blue-500)] p-4 rounded-2xl shadow-xl text-center text-white flex flex-col items-center justify-center">
              <Users className="w-4 h-4 mb-0.5 text-[var(--primary-blue-200)]" />
              <p className="text-[9px] font-extrabold uppercase tracking-wider leading-tight">Delivering Digital Excellence</p>
            </div>
            <div className="bg-white border border-[var(--neutral-300)] p-4 rounded-2xl shadow-xl text-center">
              <h4 className="text-2xl font-black text-[var(--primary-blue-500)]">100%</h4>
              <p className="text-[9px] text-[var(--neutral-500)] mt-0.5 uppercase font-extrabold tracking-wider">Client Devotion</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. STRUCTURAL ACCORDION EXPANSE
          ========================================================================= */}
      <section id="solutions" className="pt-28 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-gradient-to-br from-[var(--neutral-900)] to-[var(--primary-blue-950)] text-white rounded-3xl p-6 space-y-5 border border-[var(--neutral-800)] shadow-lg">
            <Terminal className="w-7 h-7 text-[var(--primary-blue-400)]" />
            <h3 className="text-md font-bold tracking-tight">Developer Compliance Ready</h3>
            <p className="text-xs text-[var(--neutral-500)] leading-relaxed font-medium">All deployment endpoints support unified telemetry formatting, OpenAPI specification generation models, and encrypted webhooks natively.</p>
            <div className="pt-2 border-t border-[var(--neutral-800)] text-[11px] font-mono text-[var(--primary-blue-300)] flex items-center justify-between">
              <span>$ curl -X GET https://api.creatik.it</span><ExternalLink className="w-3 h-3" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="bg-white border border-[var(--neutral-300)] rounded-xl overflow-hidden shadow-xs">
                <button onClick={() => setFaqOpen(faqOpen === index ? null : index)} className="w-full flex items-center justify-between p-4 font-bold text-sm text-[var(--neutral-800)] hover:text-[var(--primary-blue-500)] transition-colors text-left cursor-pointer">
                  <span>{faq.question}</span><ChevronDown className={`w-4 h-4 text-[var(--neutral-500)] transition-transform ${faqOpen === index ? 'rotate-180 text-[var(--primary-blue-500)]' : ''}`} />
                </button>
                {faqOpen === index && <div className="px-4 pb-4 pt-1 text-xs text-[var(--neutral-500)] font-medium leading-relaxed border-t border-[var(--neutral-200)]">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TESTIMONIALS SYSTEM (Active Carousel UI Sync)
          ========================================================================= */}
      <section id="resources" className="py-24 px-6 lg:px-16 bg-[var(--neutral-200)]">
        <div className="max-w-7xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold text-[var(--primary-blue-500)] tracking-wider uppercase bg-[var(--primary-blue-50)] px-3 py-1 rounded-md">What Our Clients Say</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--neutral-900)] tracking-tight">Trusted by Businesses. <span className="text-[var(--primary-blue-500)]">Proven by Results.</span></h2>
        </div>

        <div className="max-w-6xl mx-auto relative flex items-center justify-center">
          <button className="absolute left-0 lg:-left-6 z-20 w-11 h-11 bg-white border border-[var(--neutral-400)] text-[var(--neutral-600)] rounded-full flex items-center justify-center shadow-lg hover:text-[var(--primary-blue-500)] cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-10">
            {testimonialsData.map((testimonial, tIdx) => {
              const isCenter = tIdx === currentTestimonialIndex;
              return (
                <div key={testimonial.id} className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between space-y-6 ${isCenter ? 'border-[var(--primary-blue-400)] ring-4 ring-[var(--primary-blue-500)]/5 shadow-xl relative z-10' : 'border-[var(--neutral-400)]/60 opacity-60 hidden md:flex'}`}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-1 text-[var(--warning-400)]">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-xs text-[var(--neutral-600)] font-medium italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center space-x-3 pt-2 border-t border-[var(--neutral-200)]">
                    <img className="w-10 h-10 rounded-full object-cover" src={testimonial.avatarUrl} alt={testimonial.name} />
                    <div>
                      <h4 className="text-xs font-black text-[var(--neutral-900)]">{testimonial.name}</h4>
                      <p className="text-[10px] text-[var(--neutral-500)] font-bold uppercase tracking-wider">{testimonial.role}, <span className="text-[var(--primary-blue-500)]">{testimonial.company}</span></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button  className="absolute right-0 lg:-right-6 z-20 w-11 h-11 bg-white border border-[var(--neutral-400)] text-[var(--neutral-600)] rounded-full flex items-center justify-center shadow-lg hover:text-[var(--primary-blue-500)] cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </section>

      {/* =========================================================================
          9. BOTTOM CTAs
          ========================================================================= */}
      <section className="max-w-6xl mx-auto my-20 px-6">
        <div className="w-full bg-gradient-to-r from-[var(--primary-blue-50)]/80 via-[var(--purple-50)]/50 to-[var(--pink-50)]/60 rounded-3xl border border-[var(--primary-blue-100)]/70 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-1.5 text-center lg:text-left">
            <h3 className="text-2xl font-black text-[var(--neutral-900)] tracking-tight">Ready to Transform Your Business?</h3>
            <p className="text-xs sm:text-sm text-[var(--neutral-500)] font-bold">Let's craft high-throughput infrastructure models and build something truly extraordinary together.</p>
          </div>
          <button className="flex items-center space-x-2 px-8 py-4 bg-[var(--primary-blue-500)] text-white font-extrabold text-xs rounded-xl hover:bg-[var(--primary-blue-600)] shadow-xl shadow-[var(--primary-blue-500)]/10 transition-all cursor-pointer whitespace-nowrap">
            <span>Get in Touch Immediately</span><ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Decorative Video Modal Mock Layer */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-[var(--neutral-950)] border border-[var(--neutral-800)] w-full max-w-3xl rounded-3xl p-3 relative shadow-2xl">
            <div className="flex items-center justify-between px-3 py-1 text-white mb-2">
              <span className="text-xs font-mono text-[var(--neutral-500)]">Stream Buffer</span>
              <button onClick={() => setVideoModalOpen(false)} className="text-[var(--neutral-500)] hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="aspect-video w-full rounded-2xl bg-black flex flex-col items-center justify-center">
              <p className="text-xs font-mono text-[var(--neutral-500)]">Initializing Core Decryption Stream...</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}