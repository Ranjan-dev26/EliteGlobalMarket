import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  MessageCircle,
  FileCheck,
  Building,
  Activity,
  Server,
  Cpu
} from 'lucide-react';

const TECH_HUBS = [
  { city: 'London (LD4)', desc: 'Enterprise Bridge Matching Engines', address: 'Level 24, One New Change, EC4M 9AF, UK', ip: '102.15.22.148' },
  { city: 'New York (NY4)', desc: 'Core Liquidity Gateways', address: 'Secaucus NY4, New Jersey, USA', ip: '168.4.88.94' },
  { city: 'Tokyo (TY3)', desc: 'East Asian Routing Bridges', address: 'Toyosu TY3, Tokyo, Japan', ip: '44.82.102.5' }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: 'Forex CRM',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        solution: 'Forex CRM',
        message: ''
      });
    }, 1800);
  };

  return (
    <div className="w-full text-white bg-radial from-[#040411] via-neutral-950 to-[#020207] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Introduction */}
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold uppercase bg-cyan-950/40 border border-cyan-800/30 px-3 py-1.5 rounded-full w-fit mx-auto block mb-4">
            REACH WORLDWIDE INTEGRATION TEAM
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-400 bg-clip-text text-transparent">
            Initiate Your Brokerage Scale-up
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Our systems architects remain active 24/7/365 to configure custom API pipelines, provide FIX credentials, or setup initial sandbox database cabinets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT: Contact Informational Details and High-Tech Server Node Maps */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-wider text-[#a855f7] uppercase font-bold">
                Corporate Headquarters
              </span>
              <h2 className="font-sans font-bold text-xl text-white tracking-tight">
                Global matching hubs & connectivity details
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Rather than generic office buildings, our team works embedded across global matching hubs. Connect with us directly on local or encrypted messaging rails.
              </p>
            </div>

            {/* Hub info segments */}
            <div className="space-y-4">
              {TECH_HUBS.map((hub, hIdx) => (
                <div
                  key={hIdx}
                  className="bg-[#090916]/40 backdrop-blur-md rounded-2xl border border-white/5 p-4 flex gap-4 items-start shadow-md hover:border-cyan-500/20 transition-colors"
                >
                  <div className="p-2.5 bg-cyan-950/40 border border-cyan-900/30 rounded-xl text-cyan-400 shrink-0">
                    <Server className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-sans font-extrabold text-xs text-white">{hub.city}</span>
                      <span className="font-mono text-[9px] text-gray-500 bg-neutral-900 px-1.5 py-0.5 rounded border border-white/5">
                        PING ID: {hub.ip}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-400/90">{hub.desc}</span>
                    <span className="text-[10px] text-gray-400 leading-normal">{hub.address}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social handles block */}
            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 shadow-sm">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-500 mb-3.5">
                VERIFIED CRYPTO SECURE COMMUNICATION CHANNELS
              </span>
              <div className="flex gap-3">
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="p-3 bg-white/5 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 rounded-xl border border-white/5 transition-all"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="p-3 bg-white/5 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 rounded-xl border border-white/5 transition-all"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#github"
                  aria-label="GitHub"
                  className="p-3 bg-white/5 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 rounded-xl border border-white/5 transition-all"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#telegram"
                  aria-label="Telegram encrypted portal"
                  className="p-3 bg-white/5 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 rounded-xl border border-white/5 transition-all flex items-center gap-2 text-xs font-mono font-bold"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span className="hidden sm:inline">Encrypted Chat Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Validation powered Contact Form */}
          <div className="lg:col-span-7 bg-[#090916]/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="mb-2">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-cyan-400 mb-1">
                      COMMITTED SECURED SUBMISSION
                    </span>
                    <h3 className="font-sans font-extrabold text-base text-gray-100">
                      Request Technical Quote
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                        Workplace Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@brokerage.com"
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                        Operational Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7911 123456"
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                        Broker Name / Entity
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Trading Group"
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Solution sector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      Desired Forex Technology Module
                    </label>
                    <select
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3.5 text-xs text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="Forex CRM">Module 1: Enterprise Forex CRM & IB Portal</option>
                      <option value="Forex Liquidity">Module 2: Tier-1 Liquidity Price Feeds</option>
                      <option value="Forex Web Design">Module 3: Optimized Portal Web Design</option>
                      <option value="Dedicated Server">Module 4: Low-ping Dedicated Host VPS</option>
                      <option value="Forex Copier">Module 5: Server-side High-speed Account Copier</option>
                      <option value="AI Trading Robot">Module 6: Quantitative AI Trading Robot</option>
                      <option value="Risk Management">Module 7: Dynamic B-Book Risk Shield</option>
                      <option value="Custom Forex Tools">Module 8: Bespoke Calculated Plugins & Bridges</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      Enterprise Project Scope Description *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target timeline, desired licensing jurisdictions, and current transactional terminal support requirements..."
                      className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-neutral-950 py-4 rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/35 active:scale-95 hover:scale-[1.01] border border-amber-400/20 hover:border-amber-300/40 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Aggregating secure uplink parameters...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Submit Secure Integration Brief</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-16 space-y-5"
                >
                  <div className="w-14 h-14 bg-cyan-950/40 border border-cyan-800/40 rounded-full flex items-center justify-center text-cyan-400 mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <FileCheck className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans font-extrabold text-xl text-white">
                    Corporate Brief Received Successfully
                  </h3>
                  <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                    SLA tracking identifier <strong className="text-cyan-400 font-mono">#EGM-{(Math.random() * 90000 + 10000).toFixed(0)}</strong> has been opened. Our core dealer architect will contact you by e-mail or the provided phone terminal in under 90 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-xs text-white font-mono active:scale-95 transition-all cursor-pointer"
                  >
                    Submit another technical request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
