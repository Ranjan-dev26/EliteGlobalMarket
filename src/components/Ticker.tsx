import React, { useEffect, useState } from 'react';

interface TickerPair {
  symbol: string;
  name: string;
  price: number;
  change: number;
  decimals: number;
}

const INITIAL_PAIRS: TickerPair[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0842, change: +0.21, decimals: 4 },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: 1.2715, change: +0.35, decimals: 4 },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: 156.12, change: -0.14, decimals: 2 },
  { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', price: 0.6654, change: +0.12, decimals: 4 },
  { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', price: 1.3688, change: -0.08, decimals: 4 },
  { symbol: 'XAU/USD', name: 'Gold / US Dollar (Spot)', price: 2382.45, change: +1.18, decimals: 2 },
  { symbol: 'BTC/USD', name: 'Bitcoin / US Dollar', price: 67250.00, change: -0.84, decimals: 2 },
  { symbol: 'GBP/JPY', name: 'British Pound / Japanese Yen', price: 198.54, change: +0.42, decimals: 2 },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', price: 0.9065, change: -0.05, decimals: 4 }
];

export function Ticker() {
  const [pairs, setPairs] = useState<TickerPair[]>(INITIAL_PAIRS);

  useEffect(() => {
    // Proactive micro-tick updater to make the website feel live and technologically advanced
    const interval = setInterval(() => {
      setPairs((prev) =>
        prev.map((p) => {
          const shiftPercent = (Math.random() - 0.5) * 0.04; // tiny adjustment
          const deltaPrice = p.price * (shiftPercent / 100);
          const nextPrice = p.price + deltaPrice;
          const nextChange = parseFloat((p.change + shiftPercent).toFixed(2));
          return {
            ...p,
            price: parseFloat(nextPrice.toFixed(p.decimals)),
            change: nextChange
          };
        })
      );
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#03030c] border-y border-white/5 py-2.5 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm justify-around">
        {/* Duplicate the chain to ensure perfect infinite visual marquee scrolling */}
        <div className="flex gap-12 items-center min-w-full justify-around shrink-0">
          {pairs.map((p) => (
            <div key={`col1-${p.symbol}`} className="flex items-center gap-2.5 shrink-0 px-2">
              <span className="font-mono font-bold text-gray-100">{p.symbol}</span>
              <span className="font-mono text-gray-300 transition-all duration-300">
                {p.price.toFixed(p.decimals)}
              </span>
              <span
                className={`font-mono text-xs font-semibold px-1 rounded-sm ${
                  p.change >= 0
                    ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-900/40'
                    : 'text-rose-400 bg-rose-950/40 border border-rose-900/40'
                }`}
              >
                {p.change >= 0 ? '+' : ''}
                {p.change}%
              </span>
            </div>
          ))}
        </div>

        {/* Second scroll rail to buffer gaps */}
        <div className="flex gap-12 items-center min-w-full justify-around shrink-0" aria-hidden="true">
          {pairs.map((p) => (
            <div key={`col2-${p.symbol}`} className="flex items-center gap-2.5 shrink-0 px-2">
              <span className="font-mono font-bold text-gray-100">{p.symbol}</span>
              <span className="font-mono text-gray-300 transition-all duration-300">
                {p.price.toFixed(p.decimals)}
              </span>
              <span
                className={`font-mono text-xs font-semibold px-1 rounded-sm ${
                  p.change >= 0
                    ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-900/40'
                    : 'text-rose-400 bg-rose-950/40 border border-rose-900/40'
                }`}
              >
                {p.change >= 0 ? '+' : ''}
                {p.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
