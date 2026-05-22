import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Activity,
  Globe,
  Server,
  Copy,
  Bot,
  ShieldAlert,
  Briefcase,
  Terminal,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  ChevronDown,
  Layers,
  Smartphone,
  Tablet,
  ShoppingBag
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/forexData';

const IconMap = {
  Cpu: Cpu,
  Activity: Activity,
  Globe: Globe,
  Server: Server,
  Copy: Copy,
  Bot: Bot,
  ShieldAlert: ShieldAlert,
  Briefcase: Briefcase,
  Terminal: Terminal,
  Layers: Layers,
  Smartphone: Smartphone,
  Tablet: Tablet,
  ShoppingBag: ShoppingBag
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBooking = (serviceName: string) => {
    alert(`Your request for private technical documentation on: ${serviceName} is received. A systems engineer will contact you shortly.`);
  };

  return (
    <div className="w-full text-white bg-radial from-[#040411] via-neutral-950 to-[#020207] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Introduction */}
        <div className="relative text-center max-w-3xl mx-auto mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold uppercase bg-cyan-950/40 border border-cyan-900/30 px-3 py-1.5 rounded-full w-fit mx-auto block mb-4">
            B2B FOREX TECHNOLOGY PORTFOLIO
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-400 bg-clip-text text-transparent">
            Comprehensive Broker Infrastructure
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            Deploy elite modular trading setups engineered to streamline server calculations, enhance pricing accuracy, secure margins, and maximize customer retention.
          </p>
        </div>

        {/* Dynamic Services Cards Grid (Animated cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const ResolvedIcon = IconMap[service.iconName] || Cpu;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative bg-[#090916]/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                {/* Background active hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Icon section */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-cyan-950/40 border border-cyan-800/30 rounded-xl text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-900/30 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      <ResolvedIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      EGM-SYS {idx + 1}
                    </span>
                  </div>

                  {/* Title and Short description */}
                  <h3 className="font-sans font-extrabold text-base md:text-lg text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/5 my-4" />

                  {/* Key Feature items */}
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-cyan-400 mb-2 font-semibold">
                    Core Technical Specification:
                  </span>
                  <ul className="flex flex-col gap-2 mb-8">
                    {service.detailedPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[11px] text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="leading-normal">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instant activation trigger */}
                <button
                  onClick={() => handleBooking(service.title)}
                  className="w-full relative z-10 flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-500/5 text-amber-400 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-400 group-hover:text-neutral-950 group-hover:border-transparent transition-all cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.05)] shadow-inner"
                >
                  <span>Integrate {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Callout Section */}
        <section className="mt-24 bg-gradient-to-r from-purple-950/20 via-[#0a0a24]/80 to-cyan-950/20 rounded-3xl border border-white/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[9px] tracking-wider text-cyan-400 font-bold uppercase bg-cyan-950/40 border border-cyan-900/30 px-2.5 py-1 rounded w-fit block mb-4">
              ULTRA SECURED CRYPTONET WORKFLOWS
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight text-white mb-4">
              Need a completely custom white-label configuration?
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our engineering risk desk specializes in writing customized multi-asset bridge parameters, bespoke calculation plugins, and localized client portals. We maintain dedicated deployment nodes to ship production-ready broker solutions in under 10 business days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => handleBooking('Custom White-Label Consultancy')}
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/45 hover:scale-[1.01] active:scale-95 border border-amber-400/20 hover:border-amber-300/40 transition-all cursor-pointer text-center"
            >
              Contact Architect Desk
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
