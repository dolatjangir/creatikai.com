"use client";

import React from "react";
import { motion,Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  Target,
  Eye,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

// ─── Animation Variants ──────────────────────────────
const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn:Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2 + i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

// ─── Decorative Dot Component ────────────────────────
const DecoDot = ({
  color,
  size = "w-3 h-3",
  position,
}: {
  color: string;
  size?: string;
  position: string;
}) => (
  <div
    className={`absolute ${position} ${size} rounded-full ${color} pointer-events-none`}
  />
);

// ─── Team Member Avatar (replace with actual images) ─
const TeamAvatar = ({
  className,
}: {
  className?: string;
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--neutral-200)] to-[var(--neutral-300)] border border-[var(--neutral-300)] shadow-lg ${className}`}
  >
    {/* REPLACE THIS with: <img src="/team-member.jpg" className="w-full h-full object-cover" /> */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Users className="w-12 h-12 text-[var(--neutral-400)]" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--neutral-400)]/20 to-transparent" />
  </div>
);

// ─── Stat Card ─────────────────────────────────────
const StatCard = ({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    custom={delay}
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex items-center gap-3"
  >
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-sm`}>
      <TrendingUp className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-xl font-black text-[var(--neutral-900)]">{value}</p>
      <p className="text-[10px] font-bold text-[var(--neutral-500)] uppercase tracking-wider">
        {label}
      </p>
    </div>
  </motion.div>
);

// ─── Numbered List Item ────────────────────────────
const NumberedItem = ({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    custom={delay}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex gap-4 group"
  >
    <div className="flex flex-col items-center gap-1">
      <span className="w-7 h-7 rounded-full bg-[var(--primary-blue-50)] border border-[var(--primary-blue-200)] text-[var(--primary-blue-600)] text-[10px] font-black flex items-center justify-center shrink-0">
        {number}
      </span>
      <div className="w-[1px] flex-1 bg-[var(--neutral-300)] group-last:hidden" />
    </div>
    <div className="pb-6">
      <h4 className="text-sm font-bold text-[var(--neutral-900)] mb-1">{title}</h4>
      <p className="text-xs text-[var(--neutral-600)] font-medium leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

// ─── Main Page Component ───────────────────────────
export default function AboutPage() {
  return (
    <main className="relative bg-[var(--neutral-100)] min-h-screen overflow-hidden">
      {/* ═══════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        {/* Decorative dots */}
        <DecoDot color="bg-[var(--success-400)]" position="top-20 left-[15%]" />
        <DecoDot color="bg-[var(--warning-400)]" size="w-4 h-4" position="top-32 right-[20%]" />
        <DecoDot color="bg-[var(--primary-blue-400)]" position="top-40 left-[8%]" />
        <DecoDot color="bg-[var(--pink-400)]" size="w-2 h-2" position="top-24 right-[8%]" />
        <DecoDot color="bg-[var(--purple-400)]" size="w-3 h-3" position="bottom-20 left-[25%]" />

        <div className="text-center max-w-3xl mx-auto relative z-10">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[var(--neutral-900)] tracking-tight leading-[1.1]"
          >
            We&apos;re changing the
            <br />
            whole game.
          </motion.h1>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-4 mt-8"
          >
            <button className="px-7 py-3 bg-[var(--neutral-900)] text-white font-bold text-sm rounded-full hover:bg-[var(--neutral-800)] transition-all duration-300 cursor-pointer shadow-lg shadow-[var(--neutral-900)]/10">
              Get Started
            </button>
            <button className="px-7 py-3 bg-white border border-[var(--neutral-400)] text-[var(--neutral-800)] font-bold text-sm rounded-full hover:bg-[var(--neutral-100)] hover:border-[var(--neutral-500)] transition-all duration-300 cursor-pointer flex items-center gap-2">
              <Play className="w-3.5 h-3.5 fill-[var(--neutral-800)]" />
              View Pricing
            </button>
          </motion.div>
        </div>

        {/* Team Images Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-end justify-center gap-3 sm:gap-5 mt-12 lg:mt-16"
        >
       
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUR STORY SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            <DecoDot color="bg-[var(--pink-400)]" size="w-2 h-2" position="-top-4 -left-2" />
            <DecoDot color="bg-[var(--warning-400)]" size="w-3 h-3" position="top-20 -left-6" />

            <span className="inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary-blue-600)] tracking-[0.2em] uppercase bg-[var(--primary-blue-50)] border border-[var(--primary-blue-100)] px-3 py-1.5 rounded-lg">
              <BookOpen className="w-3.5 h-3.5" />
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[var(--neutral-900)] tracking-tight leading-snug">
              We&apos;re building the economic infrastructure for the internet. Businesses of every size,
            </h2>

            <p className="text-sm text-[var(--neutral-600)] font-medium leading-relaxed max-w-md">
              A living place for curiosity and collaboration. Moving and mapping the heart of a creative community where innovation meets execution.
            </p>

            {/* Decorative arc */}
            <div className="relative w-20 h-20 mt-4">
              <div className="absolute inset-0 rounded-full border-[3px] border-[var(--warning-400)] border-t-transparent rotate-45" />
              <div className="absolute inset-2 rounded-full border-[3px] border-[var(--pink-400)] border-b-transparent -rotate-12" />
            </div>
          </motion.div>

          {/* Right Column — Numbered List */}
          <div className="space-y-2">
            <NumberedItem
              number="01"
              title="6 years of intense research"
              description="A long history of data analysis, collaboration, meeting and mapping. We spent years refining our approach to deliver solutions that truly matter."
              delay={0}
            />
            <NumberedItem
              number="02"
              title="Audience segmentation"
              description="Improve audience engagement by targeting subsets from your contacts. Drag them content they love with precision targeting and smart filtering."
              delay={1}
            />
            <NumberedItem
              number="03"
              title="Contact monitoring"
              description="Just import your contacts and we'll keep your contacts updated. Get a detailed real-time report of their activity and engagement metrics."
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUR MISSION SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-blue-50)] flex items-center justify-center">
                <Target className="w-6 h-6 text-[var(--primary-blue-600)]" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[var(--primary-blue-700)] tracking-tight">
                Our Mission
              </h2>
            </div>

            <p className="text-sm text-[var(--neutral-600)] font-medium leading-relaxed max-w-md">
              We're building the economic infrastructure for the internet. Businesses of every size, be it now startups or public companies, use our software to accept payments and manage their businesses online.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <StatCard value="94%" label="Satisfaction" color="bg-[var(--success-500)]" delay={0} />
              <StatCard value="70M+" label="Users Worldwide" color="bg-[var(--primary-blue-500)]" delay={1} />
              <StatCard value="10k+" label="Enterprise Clients" color="bg-[var(--purple-500)]" delay={2} />
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            custom={1}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--neutral-200)] to-[var(--neutral-300)] border border-[var(--neutral-300)] shadow-xl">
              {/* REPLACE with: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDBmX5_yeqhgQ7tvpeorg_J3W6OJgM1Qszw&s" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="w-16 h-16 text-[var(--neutral-400)]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--neutral-400)]/20 to-transparent" />
              
              <DecoDot color="bg-[var(--primary-blue-400)]" size="w-3 h-3" position="-top-2 -right-2" />
              <DecoDot color="bg-[var(--pink-400)]" size="w-2 h-2" position="top-8 -left-3" />
              <DecoDot color="bg-[var(--warning-400)]" size="w-3 h-3" position="-bottom-2 right-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUR VISION SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            custom={0}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--neutral-200)] to-[var(--neutral-300)] border border-[var(--neutral-300)] shadow-xl">
              {/* REPLACE with: <img src="/vision-person.jpg" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Eye className="w-16 h-16 text-[var(--neutral-400)]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--neutral-400)]/20 to-transparent" />
              
              <DecoDot color="bg-[var(--purple-400)]" size="w-3 h-3" position="-top-2 left-8" />
              <DecoDot color="bg-[var(--success-400)]" size="w-2 h-2" position="bottom-4 -right-2" />
              <DecoDot color="bg-[var(--primary-blue-400)]" size="w-2 h-2" position="top-12 -left-2" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[var(--purple-50)] flex items-center justify-center">
                <Eye className="w-6 h-6 text-[var(--purple-600)]" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[var(--primary-blue-700)] tracking-tight">
                Our Vision
              </h2>
            </div>

            <p className="text-sm text-[var(--neutral-600)] font-medium leading-relaxed max-w-md">
              We believe the future of work is collaborative, borderless, and powered by intelligent systems. Our vision is to democratize access to cutting-edge AI tools so every creator, developer, and business can build without limits.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                "Democratize AI for every business size",
                "Build borderless collaborative ecosystems",
                "Drive measurable impact through innovation",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--success-100)] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[var(--success-500)]" />
                  </div>
                  <span className="text-sm font-bold text-[var(--neutral-700)]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BOTTOM CTA SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-[var(--neutral-300)] rounded-3xl p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* Gradient accent line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, var(--primary-blue-500), var(--purple-500), var(--pink-400))`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--neutral-900)] tracking-tight">
                Ready to change the game?
              </h3>
              <p className="text-sm text-[var(--neutral-600)] font-medium max-w-lg">
                Join thousands of businesses already using CreatikAi to transform their operations and scale with confidence.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <button className="flex items-center gap-2.5 px-8 py-4 bg-[var(--primary-blue-500)] text-white font-bold text-sm rounded-xl hover:bg-[var(--primary-blue-600)] shadow-xl shadow-[var(--primary-blue-500)]/20 hover:shadow-[var(--primary-blue-500)]/30 transition-all duration-300 cursor-pointer group">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20" />
    </main>
  );
}