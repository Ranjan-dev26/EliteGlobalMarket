import React, { useEffect, useState } from 'react';
import { Activity, Zap, Award, TrendingUp } from 'lucide-react';
import { statsData } from '../data/forexData';

const IconMap = {
  Activity: Activity,
  Zap: Zap,
  Award: Award,
  TrendingUp: TrendingUp
};

export function StatsCounter() {
  const [ticks, setTicks] = useState({
    volume: 14.8,
    latency: 1.25,
    brands: 180,
    affiliates: 35.1
  });

  useEffect(() => {
    // Elegant small ticks to represent active live platform streaming statistics
    const interval = setInterval(() => {
      setTicks((prev) => ({
        volume: parseFloat((14.8 + (Math.random() - 0.4) * 0.15).toFixed(1)),
        latency: parseFloat((1.2 + Math.random() * 0.08).toFixed(2)),
        brands: prev.brands, // static powered clients
        affiliates: parseFloat((35.1 + Math.random() * 0.04).toFixed(1))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 select-none">
      {statsData.map((stat, idx) => {
        // Resolve Lucide icon
        const TargetIcon = IconMap[stat.icon as keyof typeof IconMap] || Activity;

        // Resolve active value with ticks where applicable
        let liveValue = stat.value;
        if (stat.label.includes('Volume')) liveValue = ticks.volume.toString();
        if (stat.label.includes('Latency')) liveValue = ticks.latency.toFixed(2);
        if (stat.label.includes('Affiliates')) liveValue = ticks.affiliates.toString();

        return (
          <div
            key={`stat-${idx}`}
            className="group relative bg-neutral-900/40 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/5 hover:border-cyan-500/20 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.5)] flex flex-col items-start gap-4 overflow-hidden"
          >
            {/* Visual background ambient pulse */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full group-hover:scale-125 transition-transform duration-300" />

            <div className="p-3 bg-cyan-950/40 border border-cyan-800/30 rounded-xl text-cyan-400 group-hover:bg-cyan-900/30 group-hover:text-cyan-300 transition-colors">
              <TargetIcon className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-sans font-extrabold text-2xl md:text-3xl text-white tracking-tight bg-gradient-to-r from-white to-neutral-300 bg-clip-text">
                  {liveValue}
                </span>
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase">
                  {stat.suffix}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
