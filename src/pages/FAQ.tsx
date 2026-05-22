import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Info, MessageSquare, Star, Quote, X } from 'lucide-react';
import { faqsData, testimonialsData } from '../data/forexData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // default first open
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = faqsData.map((faq) => faq.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory = selectedCategory === 'All' || faq.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-amber-500/20 text-amber-500 dark:text-amber-300 font-semibold rounded px-0.5">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="w-full text-white bg-radial from-[#040411] via-neutral-950 to-[#020207] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Summary */}
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <span className="font-mono text-[9px] tracking-widest text-amber-400 font-bold uppercase bg-amber-955/40 border border-amber-900/30 px-3 py-1.5 rounded-full w-fit mx-auto block mb-4">
            COMPLIANCE & FAQS DESK
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-400 bg-clip-text text-transparent">
            How Can We Assist Your Desk?
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Get clarified operational parameters on aggregated spreads, custom API connections, low-latency execution routing, and introducing broker (IB) structures.
          </p>
        </div>

        {/* Dynamic Interactive Search Filter Bar & Category Pills */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-amber-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search matching tech specs... (e.g. latency, raw pips, CRM...)"
              className="w-full bg-neutral-900/60 border border-white/5 rounded-xl pl-10 pr-10 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Category Filters & Quick Reset button */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenId(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 border-transparent shadow-md shadow-amber-500/25'
                      : 'bg-neutral-900/40 border-white/5 text-gray-400 hover:text-white hover:border-amber-500/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Metric Counter info bar */}
        <div className="flex items-center justify-between mx-auto mb-6 text-gray-400 font-mono text-[9px] uppercase tracking-widest border-b border-white/5 pb-2">
          <span>Operational Protocols</span>
          <span className="text-amber-500 font-bold">
            {filteredFaqs.length} of {faqsData.length} specifications found
          </span>
        </div>

        {/* Accordion List container */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/20 shadow-md"
                >
                  {/* Trigger Header Row */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-5 flex items-center justify-between gap-4 outline-none focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-tr from-amber-950/40 to-neutral-900 border border-amber-500/10 rounded-lg text-amber-400 shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] text-amber-400 uppercase font-bold tracking-wider">
                          {faq.category} Category
                        </span>
                        <h3 className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight">
                          {highlightText(faq.question, searchTerm)}
                        </h3>
                      </div>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Expand-Collapse transition holder */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1.5 border-t border-white/5">
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pl-1 animate-fadeIn">
                            {highlightText(faq.answer, searchTerm)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center p-12 bg-neutral-900/20 border border-white/5 rounded-2xl">
              <Info className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <p className="text-xs text-gray-400">
                No matching technology protocols found for your query. Try searching general parameters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 shadow-md cursor-pointer hover:opacity-90 active:scale-95 transition-all"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Grid Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-[9px] text-amber-500 tracking-wider uppercase font-extrabold bg-amber-955/40 border border-amber-900/30 px-3 py-1.5 rounded-full">
              VERIFIED PARTNER FEEDBACK
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-white tracking-tight mt-3">
              Endorsed by Leading Brokerages
            </h2>
            <p className="text-gray-400 text-xs mt-2 max-w-xl mx-auto">
              Real-world success stories from international brokerage firms and risk desks leveraging our modular fintech architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="group relative bg-[#090916]/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg"
              >
                {/* Upper body */}
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={`faq-star-${test.id}-${i}`} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-amber-500/10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <p className="text-xs sm:text-xs text-gray-300 leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 my-4 relative z-10" />

                {/* Lower body */}
                <div className="flex items-center gap-3 relative z-10">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-white group-hover:text-amber-400 transition-colors">
                      {test.name}
                    </span>
                    <span className="font-mono text-[9px] text-gray-400">
                      {test.role} &middot; <span className="text-amber-400/95 font-bold">{test.company}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal warning/Notice bottom callout */}
        <section className="mt-16 bg-[#03030c] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <MessageSquare className="w-8 h-8 text-amber-500 shrink-0" />
          <div className="flex flex-col text-justify">
            <span className="font-sans font-bold text-xs text-white">
              Still have unaddressed technical operations questions?
            </span>
            <span className="text-[11px] text-gray-400 mt-1">
              Contact our global legal or pricing bridge architecture departments directly. We provide real SLA parameters on multi-bank routing networks.
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
