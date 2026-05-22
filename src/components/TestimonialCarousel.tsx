import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/forexData';
import { motion, AnimatePresence } from 'motion/react';

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    resetTimer();
  };

  const current = testimonialsData[activeIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Decorative Outer ambient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Glassmorphic Slate Container */}
      <div className="relative bg-neutral-900/60 backdrop-blur-lg border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Large Quote watermark background */}
        <div className="absolute top-6 right-8 text-cyan-500/10 pointer-events-none">
          <Quote className="w-24 h-24 stroke-[1.5]" />
        </div>

        <div className="min-h-[240px] flex flex-col justify-between">
          
          {/* Animated Carousel Slide Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              {/* Star Ratings Row */}
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={`star-${i}`} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>

              {/* Quote text block */}
              <blockquote className="font-sans text-base md:text-lg text-gray-200 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Reviewer Details Row */}
              <div className="flex items-center gap-4 mt-2">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40"
                />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-white">{current.name}</span>
                  <span className="font-mono text-xs text-gray-400">
                    {current.role}, <span className="text-cyan-400">{current.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls and Pagination dots */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => {
                    setActiveIndex(idx);
                    resetTimer();
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-cyan-400' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Micro Controls */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 active:scale-95 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 active:scale-95 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
