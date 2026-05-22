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
import CreativeHero from './creativehero';
import { AnimatePresence,motion } from 'framer-motion';
import AgencySection from './solution-agencys';

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
   const [showCreative, setShowCreative] = useState(true);
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
    // Infinite Toggle Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCreative((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full bg-[var(--neutral-100)] text-[var(--neutral-700)]  font-sans overflow-x-hidden selection:bg-[var(--primary-blue-500)] selection:text-white antialiased">

     

      {/* 
           HERO SECTION (Dynamic Vector Canvas Map via GSAP Node Tracking)
          */}
   <section 
  id="home" 
  ref={heroContainerRef} 
  className="relative min-h-screen flex items-center pt-12 overflow-hidden bg-white"
>
  {/* Clean Background Image - No Fog */}
  <div 
    className="absolute inset-0 bg-[url('/creatikai-hero-bg-big-screen.png')] bg-no-repeat bg-center bg-cover"
    aria-hidden="true"
  />
  
  {/* Sharp Gradient Overlay - No Blur/Fog */}
 

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-32 lg:py-40">
    <div className="max-w-2xl space-y-6">
      
      {/* Premium Eyebrow */}
     <div className="inline-flex items-center gap-3  py-2.5 rounded-full overflow-hidden">
      
      {/* Animated Dot */}
      <span className="relative flex h-2.5 w-2.5">
        {/* <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF4B82] opacity-70 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF4B82]" /> */}
      </span>
      {/* Static + Animated Text */}
{/* Static + Animated Text */}
<div className="flex items-center">
  
  {/* Static Text */}
  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#100556] whitespace-nowrap">
    Welcome to&nbsp;
  </span>

  {/* Animated Brand Name */}
  <div className="relative h-5 overflow-hidden min-w-[110px]">
    <AnimatePresence mode="wait">
      {showCreative ? (
        <motion.div
          key="creative"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-[#100556] via-[#7B2FF7] to-[#FF4B82] bg-clip-text text-transparent">
            Creative AI
          </span>
        </motion.div>
      ) : (
        <motion.div
          key="creatik"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-[#100556] via-[#7B2FF7] to-[#FF4B82] bg-clip-text text-transparent">
            CreatikAi
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>
    </div>

      {/* Headline */}
    <h1 className="space-y-1">
  {/* First Line */}
  <span
    className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] 
    bg-gradient-to-r from-[#100556] via-[#7B2FF7] to-[#FF4B82] 
    bg-clip-text text-transparent"
  >
    Transform Your
  </span>

  {/* Second Line */}
  <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
    
    {/* Business */}
    <span
      className="bg-gradient-to-r from-[#230eaf] via-[#6A11CB] to-[#FF4B82] 
      bg-clip-text text-transparent"
    >
      Business
    </span>{" "}

    {/* Future */}
    <span className="relative inline-block">
      <span
        className="text-[#e627b6] 
       "
      >
        Future
      </span>

      {/* Glow Underline */}
      {/* <span
        className="absolute -bottom-1 left-0 w-full h-1 
        bg-gradient-to-r from-[#7B2FF7] to-[#FF4B82] 
        rounded-full blur-[1px]"
      /> */}
    </span>
  </span>
</h1>

      {/* Subheadline */}
      <p className="text-lg text-[#100556]/70 max-w-xl leading-relaxed font-medium">
        We architect intelligent digital ecosystems that automate processes, 
        unlock data-driven insights, and scale your operations beyond limits.
      </p>

      {/* Premium Tags */}
      <div className="flex flex-wrap gap-3 pt-2">
        {['AI Infrastructure', 'Process Automation', 'Digital Transformation'].map((tag) => (
          <span 
            key={tag}
            className="px-5 py-2.5 rounded-lg bg-white border border-[#100556]/10 text-sm font-semibold text-[#100556] shadow-sm shadow-[#100556]/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Minimal Accent - Sharp Geometric */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0099FF]/5 to-transparent" aria-hidden="true" />
</section>
<CreativeHero/>
  <AgencySection/>


   


  
   
    </div>
  );
}