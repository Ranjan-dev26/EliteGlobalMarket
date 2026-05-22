import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to EliteGlobal Market Global Intelligence briefs.');
  };

  return (
    <footer className="bg-[#02020a] border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Corporate Summary */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2 group focus:outline-none">
              <div className="w-8 h-8 flex items-center justify-center bg-cyan-950 border border-cyan-500/50 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                <Activity className="w-4.5 h-4.5 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-sm tracking-tight text-white">
                  EliteGlobal
                </span>
                <span className="font-sans text-[9px] tracking-widest text-cyan-400 font-bold uppercase">
                  Market
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400">
              EliteGlobal Market is a premier global B2B provider of high-grade Forex technology solutions,
              incorporating deep-tier liquidity matching systems, enterprise risk analytics, and custom CRM systems
              for institutional brokers.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-900/30 w-fit px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>SECURED FIX TRADING AGGREGATOR</span>
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="flex flex-col gap-4">
            <span className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Technology Solutions
            </span>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Forex CRM Engine</Link>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Tier-1 Liquidity Aggregator</Link>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">AI Quantitative Robots</Link>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Equinix Dedicated Servers</Link>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Auto Multi-Account Copier</Link>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Custom Broker Tools</Link>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="flex flex-col gap-4">
            <span className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Corporate Office
            </span>
            <div className="flex flex-col gap-3 text-xs leading-relaxed text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Level 24, One New Change, London, EC4M 9AF, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+44 207 946 0192</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>tech-desk@eliteglobalmarket.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Input Column */}
          <div className="flex flex-col gap-4">
            <span className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Market Intelligence
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive private technical updates on FIX bridging, liquidity pools, and AI quantitative algorithm performance.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="enter.workplace.email"
                  className="w-full bg-neutral-900 border border-white/5 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-neutral-950 text-xs font-bold py-2 rounded-lg transition-all shadow-md hover:opacity-95 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                Request Access Brief
              </button>
            </form>
          </div>
        </div>

        {/* Legal Regulatory & Leverage Warnings */}
        <div className="border-t border-white/5 pt-8 mb-8 text-[11px] leading-relaxed text-gray-500 text-justify">
          <p className="mb-4">
            <strong className="text-gray-400">RISK WARNING / LEVERAGE DISCLOSURE:</strong> Trading foreign exchange (Forex), contracts for differences (CFDs), metals, and artificial intelligence-routed trading scripts carries extreme exposure to immediate financial risk. These speculative derivative instruments are highly leveraged; high ratios can amplify downside losses as aggressively as nominal gains. Past performance of AI algorithmic bots or automated copier systems is entirely unreflective of future liquidity outcomes. Our SaaS and technical platforms serve purely as transactional bridging infrastructure and must not be treated as registered financial advice.
          </p>
          <p>
            EliteGlobal Market provides back-office institutional software. We do not solicit retail trading clients or hold individual depository margins. Broker listings, licensing jurisdictions, and credit capabilities should be verified with regional regulatory authorities prior to operational setups.
          </p>
        </div>

        {/* Bottom copyright alignment */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>&copy; {currentYear} EliteGlobal Market Ltd. All intellectual software rights reserved globally.</span>
          <div className="flex gap-6 text-gray-500">
            <Link to="/faq" className="hover:text-cyan-400 transition-colors">Compliance Desk</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">Security Code SLS</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">GDPR Data Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
