"use client";

import React, { useState } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Zap,
  BarChart3,
  Palette,
  Code2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────
interface Service {
  id: string;
  icon: React.ReactElement;
  badgeText: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string; // gradient class for the active ring / icon bg
}

// ─── Data ──────────────────────────────────────────
const servicesData: Service[] = [
  {
    id: "ai-studio",
    icon: <Sparkles className="w-5 h-5" />,
    badgeText: "AI Core",
    title: "AI Studio",
    tagline: "Generative Intelligence Layer",
    description:
      "End-to-end generative AI pipelines that auto-produce video, copy, and creative assets at scale while maintaining brand voice consistency.",
    features: [
      "GPT-4o / Claude 3.5 Integration",
      "Multi-Modal Asset Generation",
      "Brand Voice Fine-Tuning",
      "Real-Time Content Adaptation",
      "Automated A/B Variant Creation",
      "Compliance & Safety Guardrails",
    ],
    accent: "from-[var(--primary-blue-500)] to-[var(--purple-500)]",
  },
  {
    id: "training",
    icon: <Layers className="w-5 h-5" />,
    badgeText: "Upskill",
    title: "AI Training",
    tagline: "Workforce Transformation",
    description:
      "Immersive training modules and certification tracks that turn teams into AI-native operators with hands-on lab environments.",
    features: [
      "Interactive AI Lab Sandboxes",
      "Role-Based Learning Paths",
      "Live Instructor Workshops",
      "Progress Analytics Dashboard",
      "Certification Badging System",
      "Enterprise LMS Integration",
    ],
    accent: "from-[var(--purple-500)] to-[var(--pink-400)]",
  },
  {
    id: "automation",
    icon: <Zap className="w-5 h-5" />,
    badgeText: "Automate",
    title: "AI Automation",
    tagline: "Workflow Orchestration",
    description:
      "Intelligent process automation that connects your CRM, ERP, and marketing stack to eliminate repetitive tasks and data silos.",
    features: [
      "Visual Workflow Builder",
      "CRM / ERP Bidirectional Sync",
      "Smart Trigger Conditions",
      "Human-in-the-Loop Approval",
      "Error Recovery & Rollback",
      "Performance Analytics",
    ],
    accent: "from-[var(--primary-blue-600)] to-[var(--primary-blue-400)]",
  },
  {
    id: "consulting",
    icon: <BarChart3 className="w-5 h-5" />,
    badgeText: "Strategy",
    title: "AI Consulting",
    tagline: "Strategic Advisory",
    description:
      "Executive-level AI strategy, ROI modeling, and implementation roadmaps tailored to your industry and competitive landscape.",
    features: [
      "AI Readiness Assessment",
      "ROI & TCO Modeling",
      "Vendor Evaluation Matrix",
      "Change Management Playbook",
      "Executive Briefing Decks",
      "Quarterly Strategy Reviews",
    ],
    accent: "from-[var(--pink-400)] to-[var(--primary-blue-500)]",
  },
  {
    id: "creative",
    icon: <Palette className="w-5 h-5" />,
    badgeText: "Design",
    title: "Creative Engine",
    tagline: "Visual Production Suite",
    description:
      "High-velocity creative production with AI-assisted design, motion graphics, and brand asset management for omnichannel campaigns.",
    features: [
      "AI-Assisted Design Canvas",
      "Motion Graphics Automation",
      "Brand Asset Library",
      "Multi-Format Export Pipeline",
      "Version Control & Approval",
      "Creative Performance Scoring",
    ],
    accent: "from-[var(--purple-400)] to-[var(--pink-500)]",
  },
];

// ─── Animation Variants ──────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

// ─── Component ─────────────────────────────────────
export default function ServicesSection() {
  const [selectedServiceTab, setSelectedServiceTab] = useState<number>(0);
  const activeService = servicesData[selectedServiceTab];

  return (
    <section
      id="services"
      className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--glass-blue-10)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[var(--glass-purple-10)] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 relative z-10"
      >
        <div className="lg:col-span-5 space-y-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[var(--primary-blue-600)] tracking-[0.15em] uppercase bg-[var(--primary-blue-50)] border border-[var(--primary-blue-100)] px-4 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[var(--neutral-900)] tracking-tight leading-[1.1]">
            Innovative Solutions.
            <br />
            Measurable{" "}
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Results
            </span>
            .
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pl-12">
          <p className="text-sm sm:text-base text-[var(--neutral-600)] max-w-xl leading-relaxed font-medium">
            We combine machine precision engineering, technical strategy, and
            architectural creativity to deliver robust end-to-end digital
            frameworks that clear internal bottlenecks and unlock market capture
            pathways.
          </p>
        </div>
      </motion.div>

      {/* ── Service Cards Grid ─────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
      >
        {servicesData.map((service, index) => {
          const isActive = selectedServiceTab === index;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onClick={() => setSelectedServiceTab(index)}
              className={`
                relative bg-white rounded-2xl p-6 transition-all duration-300 cursor-pointer
                flex flex-col justify-between h-full group
                border
                ${
                  isActive
                    ? "border-[var(--primary-blue-300)] shadow-[0_8px_40px_rgba(91,124,255,0.15)] scale-[1.02] z-10"
                    : "border-[var(--neutral-300)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[var(--neutral-400)] hover:-translate-y-1"
                }
              `}
            >
              {/* Active gradient border overlay */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-2xl p-[1.5px] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-blue-500), var(--purple-500), var(--pink-400))`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />
              )}

              <div className="space-y-5 relative z-10">
                {/* Icon + Badge row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${service.accent} text-white shadow-lg`
                          : "bg-[var(--neutral-200)] text-[var(--neutral-700)] group-hover:bg-[var(--primary-blue-50)] group-hover:text-[var(--primary-blue-600)]"
                      }
                    `}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={`
                      text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider transition-colors
                      ${
                        isActive
                          ? "bg-[var(--primary-blue-50)] text-[var(--primary-blue-600)]"
                          : "bg-[var(--neutral-200)] text-[var(--neutral-500)]"
                      }
                    `}
                  >
                    {service.badgeText}
                  </span>
                </div>

                {/* Text content */}
                <div className="space-y-2">
                  <h3
                    className={`
                      text-[15px] font-black tracking-tight leading-snug transition-colors duration-300
                      ${
                        isActive
                          ? "text-[var(--primary-blue-700)]"
                          : "text-[var(--neutral-900)] group-hover:text-[var(--primary-blue-600)]"
                      }
                    `}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[10px] font-bold text-[var(--neutral-500)] uppercase tracking-widest">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[var(--neutral-600)] font-medium leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-6 flex items-center justify-between relative z-10">
                <span
                  className={`
                    text-xs font-bold flex items-center gap-1.5 transition-colors duration-300
                    ${
                      isActive
                        ? "text-[var(--primary-blue-600)]"
                        : "text-[var(--primary-blue-500)] group-hover:text-[var(--primary-blue-700)]"
                    }
                  `}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--primary-blue-500)] to-[var(--purple-500)]"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Dynamic Spec Sheet Panel ───────────────── */}
      <div className="mt-10 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full bg-white border border-[var(--neutral-300)] rounded-3xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Subtle gradient accent line at top */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(90deg, var(--primary-blue-500), var(--purple-500), var(--pink-400))`,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left: Service info */}
              <div className="md:col-span-4 space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary-blue-600)] uppercase tracking-[0.2em] bg-[var(--primary-blue-50)] border border-[var(--primary-blue-100)] px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Active Blueprint Inspection
                </div>
                <h4 className="text-xl font-black text-[var(--neutral-900)] tracking-tight">
                  {activeService.title}
                </h4>
                <p className="text-sm text-[var(--neutral-600)] font-medium leading-relaxed">
                  {activeService.description}
                </p>

                {/* Mini stat pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] font-bold text-[var(--purple-600)] bg-[var(--purple-50)] border border-[var(--purple-100)] px-3 py-1 rounded-full">
                    {activeService.features.length} Capabilities
                  </span>
                  <span className="text-[10px] font-bold text-[var(--primary-blue-600)] bg-[var(--primary-blue-50)] border border-[var(--primary-blue-100)] px-3 py-1 rounded-full">
                    Enterprise Ready
                  </span>
                </div>
              </div>

              {/* Right: Features grid */}
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeService.features.map((feature, fIdx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIdx * 0.05, duration: 0.3 }}
                      className="
                        flex items-start gap-3 p-4
                        bg-[var(--neutral-100)] hover:bg-[var(--primary-blue-50)]
                        border border-[var(--neutral-300)] hover:border-[var(--primary-blue-200)]
                        rounded-xl transition-all duration-200 group/feature
                      "
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-md bg-gradient-to-br from-[var(--primary-blue-500)] to-[var(--purple-500)] flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-bold text-[var(--neutral-700)] group-hover/feature:text-[var(--primary-blue-700)] leading-snug transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}