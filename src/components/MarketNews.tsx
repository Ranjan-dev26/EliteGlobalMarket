import React, { useEffect, useState } from 'react';
import { Newspaper, RefreshCw, ExternalLink, Globe, AlertCircle, Linkedin, Share2 } from 'lucide-react';

interface NewsItem {
  title: string;
  summary: string;
  source: string;
  url: string;
}

export function MarketNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshCount, setRefreshCount] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState<string>('local');

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError(null);
      try {
        const url = refreshCount > 0 ? '/api/news?refresh=true' : '/api/news';
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.news && Array.isArray(data.news)) {
          setNews(data.news);
          setDataSource(data.source || 'real-time-grounding');
        } else {
          throw new Error('Malformed response. Raw data has no news array.');
        }
      } catch (err) {
        console.error('Failed to fetch grounded market news:', err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    }

    fetchNews();
  }, [refreshCount]);

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isRefreshing) return;
    setIsRefreshing(true);
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <div id="market-news-container" className="col-span-12 bg-neutral-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/20 transition-all duration-300 shadow-xl z-10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/[0.02] to-transparent rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] tracking-wider text-amber-400 uppercase bg-amber-950/40 border border-amber-900/30 px-2.5 py-1 rounded-md font-bold">
              REAL-TIME MARGIN INTELLIGENCE
            </span>
            {(dataSource === 'real-time-grounding' || dataSource === 'cached-grounding' || dataSource === 'cached-fallback-after-error') ? (
              <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-1 rounded-md font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {dataSource === 'real-time-grounding' ? 'LIVE GROUNDED' : 'SECURE CACHE'}
              </span>
            ) : (
              <span className="flex items-center gap-1 font-mono text-[9px] text-purple-400 bg-purple-950/40 border border-purple-900/30 px-2.5 py-1 rounded-md font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                MARKET FEED CORRELATOR
              </span>
            )}
          </div>
          <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-1.5 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-amber-400" />
            Global Market News & Intelligence
          </h2>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl">
            Live consolidated market coverage powered by Gemini Search Grounding. Real-time trends mapped over international trading sessions.
          </p>
        </div>

        <button
          onClick={handleRefresh}
          disabled={loading || isRefreshing}
          className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-center px-4.5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer select-none"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading || isRefreshing ? 'animate-spin' : ''}`} />
          <span>{loading || isRefreshing ? 'Grounding feeds...' : 'Sync Market Feed'}</span>
        </button>
      </div>

      {/* Grid of latest stories/news */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-neutral-950/20 border border-white/5 rounded-2xl p-5 space-y-4 animate-pulse">
              <div className="h-4 bg-white/5 rounded-md w-1/3" />
              <div className="space-y-2">
                <div className="h-5 bg-white/10 rounded-md w-full" />
                <div className="h-5 bg-white/10 rounded-md w-4/5" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3.5 bg-white/5 rounded-md w-full" />
                <div className="h-3.5 bg-white/5 rounded-md w-5/6" />
              </div>
              <div className="h-8 bg-white/5 rounded-xl w-full pt-1" />
            </div>
          ))}
        </div>
      ) : error && news.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-amber-950/10 border border-amber-900/20 rounded-2xl text-center">
          <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />
          <h3 className="font-sans font-bold text-white text-sm">Failed to connect to Grounded News Uplink</h3>
          <p className="text-xs text-gray-400 mt-1 max-w-md">{error}</p>
          <button
            onClick={handleRefresh}
            className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-neutral-950 text-xs font-bold hover:bg-amber-400 transition-all cursor-pointer"
          >
            Retry News Connection
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
          {news.map((item, index) => (
            <div
              key={`news-${index}`}
              className="group/card relative bg-neutral-950/30 hover:bg-neutral-900/40 border border-white/5 hover:border-amber-500/20 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Card content top */}
              <div className="flex-grow">
                <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[9px] uppercase tracking-wider mb-2.5">
                  <Globe className="w-3 h-3 text-amber-400/80" />
                  <span className="truncate max-w-[200px] font-bold text-gray-400">{item.source || 'Global Markets'}</span>
                </div>

                <h3 className="font-sans font-extrabold text-sm text-white leading-snug tracking-tight mb-2 group-hover/card:text-amber-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 leading-normal line-clamp-3 mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Action Button & Social Share Controls */}
              <div className="pt-3 border-t border-white/5 mt-4 flex items-center gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-center text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-500/10 active:scale-[0.98] transition-all cursor-pointer border border-purple-500/10"
                >
                  <span>Read Story</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* Share to X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this finance insight: "${item.title}"`)}&url=${encodeURIComponent(item.url)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Share on X"
                  className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 text-gray-400 hover:text-white hover:border-amber-500/20 active:scale-[0.95] transition-all cursor-pointer flex items-center justify-center"
                >
                  <span className="font-mono text-[11px] font-extrabold w-3.5 h-3.5 flex items-center justify-center select-none leading-none">𝕏</span>
                </a>

                {/* Share to LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(item.url)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Share on LinkedIn"
                  className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 text-gray-400 hover:text-[#0a66c2] hover:border-amber-500/20 active:scale-[0.95] transition-all cursor-pointer flex items-center justify-center"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Powered by tag */}
      <div className="border-t border-white/5 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-500">
        <span className="mb-2 sm:mb-0">SOURCE AGGREGATOR: INSTITUTIONAL_GROUNDING_POOL</span>
        <span>ENGINE: GEMINI_3.5_FLASH // SECURE_UPLINK</span>
      </div>
    </div>
  );
}
