import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Award,
  BookOpen,
  Eye,
  Target,
  Trophy,
  Users2,
  Cpu,
  Zap,
  Globe2
} from 'lucide-react';
import { timelineData } from '../data/forexData';

const CORE_VALUE_WIDGETS = [
  {
    icon: Award,
    title: 'Precision Analytics Block',
    desc: 'Our algorithms operate at micro-second resolutions, continuously scraping orders to maintain high pricing execution rates.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-950/20 border-cyan-855/20'
  },
  {
    icon: Trophy,
    title: 'Global Regulatory Bridge',
    desc: 'We support standard White Label licensing frameworks from major offshore units up to elite Tier-1 financial permits.',
    color: 'text-purple-400',
    bg: 'bg-purple-950/20 border-purple-855/20'
  },
  {
    icon: Users2,
    title: '24/7 Deep Dealer Support',
    desc: 'A dedicated trading desk of quantitative systems scientists remains active around the clock to assist you directly.',
    color: 'text-blue-400',
    bg: 'bg-blue-950/20 border-blue-855/20'
  }
];

export default function AboutUs() {
  return (
    <div className="w-full text-white bg-radial from-[#040411] via-neutral-950 to-[#020207] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Introductory Hero Header */}
        <section className="relative flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <span className="font-mono text-[9px] tracking-widest text-[#a855f7] font-bold uppercase bg-purple-950/40 border border-purple-900/30 px-3 py-1.5 rounded-full w-fit mx-auto block mb-4">
            OUR TECHNICAL LEGACY
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-400 bg-clip-text text-transparent">
            Pioneering Global Forex Engineering
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            EliteGlobal Market was founded by a collective of high-frequency quantitative scientists and server architecture engineers to replace outdated bridging tech with modern, light-speed financial interfaces.
          </p>
        </section>

        {/* 2. Mission & Vision - Elegant Side-by-Side Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="relative overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/5 blur-xl rounded-full" />
            <div className="p-3 bg-cyan-950/40 border border-cyan-800/30 rounded-xl text-cyan-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-sans font-extrabold text-xl text-white tracking-tight">
              Our Vision Statement
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              To build a seamless, completely connected global financial playground where starting and expanding a regulated brokerage is instant, secure, and entirely shielded from market execution anomalies.
            </p>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/5 blur-xl rounded-full" />
            <div className="p-3 bg-purple-950/40 border border-purple-800/30 rounded-xl text-purple-400 w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-sans font-extrabold text-xl text-white tracking-tight">
              Our Mission Statement
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              To supply cutting-edge liquidity bridging pipelines and software cabinets that empower businesses of all scales, providing absolute performance and security.
            </p>
          </div>
        </section>

        {/* 3. Why Choose Us (Fintech Grid) */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[9px] tracking-wider text-cyan-400 uppercase">
              STRATEGIC DEPLOYMENT BENEFITS
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white tracking-tight mt-1">
              Why Institutional Brokers Rely on Us
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Our platform blends raw institutional bandwidth with fully customized client cabinets for sovereign broker control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUE_WIDGETS.map((widget, idx) => {
              const WidgetIcon = widget.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#090916]/50 backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col items-start gap-4 shadow-lg hover:border-white/10 transition-colors"
                >
                  <div className={`p-3 rounded-xl border ${widget.bg} ${widget.color}`}>
                    <WidgetIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-white tracking-tight">
                    {widget.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {widget.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Timeline Section (Milestones 2018 - 2026) */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[9px] tracking-wider text-purple-400 uppercase">
              HISTORICAL TRADING BENCHMARKS
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white tracking-tight mt-1">
              Corporate Evolutionary Timeline
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Reflecting years of technical breakthroughs and scaled server architectures across global matching hubs.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
            {/* Center vertical trace line for desktop */}
            <div className="absolute left-[25px] sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 pointer-events-none" />

            <div className="space-y-12">
              {timelineData.map((mile, i) => {
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={mile.year}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45 }}
                    className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between"
                  >
                    {/* Circle Node Indicator */}
                    <div className="absolute left-[25px] sm:left-1/2 -translate-x-1/2 top-[12px] sm:top-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-cyan-400 border-[3px] border-neutral-950 shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10" />

                    {/* Timeline Grid layout split */}
                    <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right order-2 sm:order-1">
                      {isEven && (
                        <div className="p-6 bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-md">
                          <span className="inline-block font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-900/30 px-2.5 py-1 rounded mb-2">
                            {mile.year}
                          </span>
                          <h4 className="font-sans font-bold text-sm text-white mb-2">{mile.title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{mile.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Gap column for centering alignment spacing */}
                    <div className="hidden sm:block w-[8%]" />

                    <div className="w-full sm:w-[45%] pl-12 sm:pl-0 order-3 sm:order-2">
                      {!isEven && (
                        <div className="p-6 bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-md">
                          <span className="inline-block font-mono text-xs font-bold text-purple-400 bg-purple-950/40 border border-purple-900/30 px-2.5 py-1 rounded mb-2">
                            {mile.year}
                          </span>
                          <h4 className="font-sans font-bold text-sm text-white mb-2">{mile.title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{mile.description}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
