import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Compass
} from 'lucide-react';
import { ThreeDCanvas } from '../components/ThreeDCanvas';
import { Ticker } from '../components/Ticker';
import { StatsCounter } from '../components/StatsCounter';

// Pre-generated 3D technology image assets
import serverTechImg from '../assets/images/egm_server_tech_1779428646684.png';
import riskAiImg from '../assets/images/egm_risk_ai_1779428666489.png';
import liquidityAggImg from '../assets/images/egm_liquidity_agg_1779428683858.png';

const FLOATING_CURRENCIES = [
  { symbol: 'USD', name: 'US Dollar', color: 'from-blue-500 to-cyan-400', delay: 0 },
  { symbol: 'EUR', name: 'Euro', color: 'from-cyan-400 to-teal-400', delay: 0.2 },
  { symbol: 'GBP', name: 'Pound Sterling', color: 'from-purple-500 to-indigo-400', delay: 0.1 },
  { symbol: 'JPY', name: 'Japanese Yen', color: 'from-pink-500 to-rose-400', delay: 0.3 },
  { symbol: 'XAUUSD', name: 'Gold Spot', color: 'from-amber-400 to-yellow-300', delay: 0.15 }
];

export default function Home() {
  return (
    <div className="w-full text-white bg-radial from-[#040411] via-neutral-950 to-[#020207] min-h-screen overflow-x-hidden pt-24 pb-20 relative">
      
      {/* 1. Scrolling Market Ticket */}
      <Ticker />

      {/* Main Bento Grid layout container */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-12 gap-6 auto-rows-auto relative">
        
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[380px] h-[380px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none z-0" />

        {/* BENTO CARD 1: HERO CONTAINER (col-span-12 lg:col-span-8) */}
        <div className="col-span-12 lg:col-span-8 bg-neutral-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 shadow-2xl z-10">
          <div className="absolute inset-0 bg-linear-to-b from-white/[0.01] to-transparent pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-radial from-cyan-500/10 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          
          <div>
            {/* Small premium action signal tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400 mb-6 shadow-lg shadow-black/40 w-fit"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>INSTITUTIONAL FOREX INFRASTRUCTURE 2.0</span>
            </motion.div>

            {/* Huge Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6 flex flex-col gap-1"
            >
              <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                Sovereign Trading Technology.
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Absolute Scalability.
              </span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10"
            >
              Accelerate your brokerage with our Tier-1 liquidity aggregator, multi-tier CRM systems, automated risk management analytics, and ultra-low ping Equinix dedicated server connections.
            </motion.p>
          </div>

          {/* Action Button CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            <Link
              id="hero-cta-get-started"
              to="/contact"
              className="group w-full sm:w-auto text-center text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-neutral-950 px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.55)] hover:scale-[1.01] active:scale-95 border border-amber-400/20 hover:border-amber-300/40 transition-all cursor-pointer"
            >
              Request Private Demo Setup
            </Link>
            <Link
              id="hero-cta-services"
              to="/services"
              className="w-full sm:w-auto text-center text-[11px] font-bold tracking-wider uppercase border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              Explore Core Systems
            </Link>
          </motion.div>
        </div>

        {/* BENTO CARD 2: 3D SPHERE VISUALIZATION (col-span-12 lg:col-span-4) */}
        <div className="col-span-12 lg:col-span-4 bg-radial from-neutral-900/40 to-neutral-950/20 backdrop-blur-xl border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-300 shadow-2xl z-10 min-h-[460px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold uppercase bg-cyan-950/40 border border-cyan-900/30 px-2 py-0.5 rounded">
                LIVE VISUAL CORE
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 mr-2"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </div>
            <h2 className="font-sans font-bold text-lg md:text-xl tracking-tight text-white">
              EGM Quantum Liquidity Sphere
            </h2>
            <p className="text-[11px] text-gray-400 mt-1 leading-normal">
              Orbital projection representing dynamic real-time multi-bank pricing feeds active across LD4, NY4, and TY3 matching centers.
            </p>
          </div>

          <div className="flex-grow flex items-center justify-center my-4 h-[220px]">
            <ThreeDCanvas />
          </div>

          <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>PING: &lt; 0.8ms</span>
            <span>ENG: SPHERE_V2_3D</span>
          </div>
        </div>

        {/* BENTO CARD 3: SUPPORTED SPOT MARGINS (col-span-12 lg:col-span-4) */}
        <div className="col-span-12 lg:col-span-4 bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-500/20 transition-all duration-300 shadow-xl z-10">
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-cyan-400/80 mb-3">
              LIQUIDITY PROFILE
            </span>
            <h3 className="font-sans font-bold text-lg text-white tracking-tight mb-2">
              Supported Spot Liquidity Margins
            </h3>
            <p className="text-xs text-gray-400 leading-normal mb-6">
              Establish cross-margin operations with institutional-grade prime depth across multiple spot asset classes.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {FLOATING_CURRENCIES.map((cur) => (
              <motion.div
                key={cur.symbol}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: cur.delay }}
                className="flex items-center justify-between px-4.5 py-2.5 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-cyan-500/20 shadow-xs cursor-default group/pills"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-tr ${cur.color} group-hover/pills:scale-125 transition-transform duration-300`} />
                  <span className="font-mono text-xs font-bold text-gray-200">{cur.symbol}</span>
                </div>
                <span className="text-[10px] text-gray-400 group-hover/pills:text-cyan-400 transition-colors">
                  {cur.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BENTO CARD 4: LIVE STATISTICS INDEXES (col-span-12 lg:col-span-8) */}
        <div className="col-span-12 lg:col-span-8 bg-neutral-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/20 transition-all duration-300 shadow-xl z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="font-mono text-[9px] tracking-wider text-cyan-400 uppercase font-semibold">
                OPERATIONAL PERFORMANCE INDEXES
              </span>
              <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-0.5">
                Guaranteed Enterprise Execution
              </h2>
            </div>
            <div className="text-[10px] font-mono text-gray-500 border border-white/5 px-2.5 py-0.5 rounded h-fit w-fit">
              LIVE SYSTEM FEED
            </div>
          </div>

          <StatsCounter />
        </div>

        {/* BENTO CARD 5: RISK TERMINAL & CONTEXT MOCK (col-span-12 lg:col-span-12) */}
        <div className="col-span-12 bg-neutral-900/20 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl group hover:border-indigo-500/20 transition-all duration-300 z-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-mono text-[9px] tracking-wider text-purple-400 uppercase bg-purple-950/40 border border-purple-900/30 w-fit px-2.5 py-1 rounded">
                Quantum Analytics Core
              </span>
              <h3 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                Responsive Risk Mitigation Engine
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Experience actual trade routing efficiency. Our technical core tracks multi-routing execution pathways in micro-latency bounds, shielding against retail slippage, high volatility spikes, and B-book exposure anomalies.
              </p>
              
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Real-time Toxic Flow Identifiers</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Interactive FIX Bridge Logs</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Direct Liquidity Sweepers</span>
                </div>
              </div>

              <Link
                to="/services"
                className="group flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 w-fit mt-3"
              >
                <span>Read detailed technical specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Terminal Interface UI Representation */}
            <div className="lg:col-span-7 bg-black/60 border border-white/5 rounded-2xl p-5 md:p-6 font-mono text-[11px] leading-relaxed text-gray-400 shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4 font-sans">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-gray-500 text-[10px] ml-2 font-mono">risk-aggregator-stream-v2.10.sh</span>
                </div>
                <span className="text-cyan-400 text-[10px] bg-cyan-950/40 border border-cyan-900/40 px-2 py-0.5 rounded font-mono animate-pulse">
                  LATENCY: 1.18ms
                </span>
              </div>

              <div className="space-y-1.5 text-gray-300 font-mono">
                <div><span className="text-gray-500">[$]</span> <span className="text-purple-400">tcm-core --init-bridge</span> --region="equinix-ld4"</div>
                <div className="text-gray-500">Connecting gateway nodes to Prime Liquidity Broker pools... SUCCESS.</div>
                <div><span className="text-gray-500">[$]</span> <span className="text-cyan-400">tcm-quotes --stream</span> --pairs="EURUSD,GBPUSD,XAUUSD"</div>
                <div className="text-emerald-400">● [10:04:15.118] EUR/USD Bid: 1.08420 Ask: 1.08422 (Raw Spread: 0.2 pips)</div>
                <div className="text-emerald-400">● [10:04:15.142] GBP/USD Bid: 1.27150 Ask: 1.27154 (Raw Spread: 0.4 pips)</div>
                <div className="text-emerald-400">● [10:04:15.195] XAU/USD Bid: 2382.45 Ask: 2382.55 (Raw Spread: 10c spread)</div>
                <div><span className="text-gray-500">[$]</span> <span className="text-yellow-400">tcm-risk --mitigate-bbook</span> --exposure-limit=5M</div>
                <div className="text-cyan-400 animate-pulse font-bold">INFO: Exposure matches limit. Dynamic cross hedging triggered in NY4 matching engine.</div>
                <div className="text-gray-500">Hedged allocation EURUSD 1.5M via prime node [Vanguard Brokerage].</div>
              </div>
            </div>
          </div>
        </div>

        {/* BENTO CARD 6: CORE TECHNOLOGIES 3D SHOWCASE (col-span-12) */}
        <div className="col-span-12 border-t border-white/5 pt-12 mt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-[#a855f7] uppercase font-bold bg-purple-950/40 border border-purple-900/40 px-2.5 py-1 rounded">
                EGM COMPUTATIONAL CORE
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-1.5">
                Our Proprietary High-Performance Systems
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md leading-relaxed">
              Explore the core electronic building blocks that empower EliteGlobal Market to route, secure, and clear transactions at sub-millisecond execution speeds globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Server Tech Card */}
            <div className="bg-neutral-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#070716]/60 border border-white/5 mb-5 flex items-center justify-center relative">
                  <img
                    src={serverTechImg}
                    alt="Co-Located Server Layer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#03030c]/90 border border-white/10 px-2.5 py-1 rounded-sm font-mono text-[9px] tracking-wide text-cyan-400 font-semibold shadow-md">
                    CO-LOCATED HARDWARE
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  Ultra-Low Latency Serve Stack
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Sub-millisecond trade routing leveraging bespoke enterprise server layers physically cross-connected in Equinix LD4 (London), NY4 (New York), and TY3 (Tokyo) low-ping match units.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 mt-2 flex flex-col gap-1 text-[10px] font-mono text-gray-500">
                <div className="flex items-center justify-between">
                  <span>INTERFACE:</span>
                  <span className="text-gray-300 font-bold">10Gbps Core Fiber</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>METRIC:</span>
                  <span className="text-cyan-400 font-bold">0.2ms Gateway Ping</span>
                </div>
              </div>
            </div>

            {/* AI Risk Engine Card */}
            <div className="bg-neutral-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#070716]/60 border border-white/5 mb-5 flex items-center justify-center relative">
                  <img
                    src={riskAiImg}
                    alt="Neural Optimizer Core"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#03030c]/90 border border-white/10 px-2.5 py-1 rounded-sm font-mono text-[9px] tracking-wide text-[#a855f7] font-semibold shadow-md">
                    AUTOMATED RISK AI
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-2 leading-snug group-hover:text-purple-400 transition-colors">
                  Cognitive Volatility Shield
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Dynamic machine learning engines actively scanning matching corridors for toxic flow anomalies, dynamically pricing margins, and safeguarding co-owned enterprise B-Book capital boundaries.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 mt-2 flex flex-col gap-1 text-[10px] font-mono text-gray-500">
                <div className="flex items-center justify-between">
                  <span>CORE INTEL:</span>
                  <span className="text-gray-300 font-bold">Neural Auto-Hedge</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>METRIC:</span>
                  <span className="text-[#a855f7] font-bold">99.98% Model Uptime</span>
                </div>
              </div>
            </div>

            {/* Liquidity Aggregator Card */}
            <div className="bg-neutral-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#070716]/60 border border-white/5 mb-5 flex items-center justify-center relative">
                  <img
                    src={liquidityAggImg}
                    alt="Liquidity Clearing Node"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#03030c]/90 border border-white/10 px-2.5 py-1 rounded-sm font-mono text-[9px] tracking-wide text-violet-400 font-semibold shadow-md">
                    PRIME INTEGRATIONS
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-2 leading-snug group-hover:text-violet-400 transition-colors">
                  Smart Liquidity Consolidation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Fully aggregated multi-bank pricing channels pooling raw depths from 15+ first-class global investment institutes and premier takers, passing direct un-markup spreads.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 mt-2 flex flex-col gap-1 text-[10px] font-mono text-gray-500">
                <div className="flex items-center justify-between">
                  <span>CONDUIT:</span>
                  <span className="text-gray-300 font-bold">Direct VWAP Router</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>METRIC:</span>
                  <span className="text-violet-400 font-bold">Consolidated 0.1 Spreads</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
