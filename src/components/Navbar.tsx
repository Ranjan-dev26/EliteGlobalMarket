import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/logo2.png';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About Us' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact Us' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Elegant Brand Logo */}
          <Link
            id="nav-brand-logo"
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
          >
            {/* <div className="relative w-9 h-9 flex items-center justify-center bg-amber-950/40 border border-amber-500/30 rounded-lg overflow-hidden group-hover:border-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-yellow-500/10 group-hover:opacity-100 transition-opacity" />
              <Activity className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            </div> */}
            
            <div className="flex items-center justify-center">
              <img
                src={logoImg}
                alt="EliteGlobal Market Logo"
                className="h-18 w-32 object-contain"
              />

              {/* <span className="font-sans font-extrabold text-[16px] leading-[1.1] tracking-tight bg-gradient-to-r from-white via-neutral-100 to-amber-400 bg-clip-text text-transparent">
                EliteGlobal
              </span>
              <span className="font-sans text-[10px] tracking-widest text-amber-400 font-bold uppercase">
                Market
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-2 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  to={link.path}
                  className={`px-4.5 py-2 rounded-full text-sm font-extrabold tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
          </div>

          {/* Mobile hamburger toggle button */}
          <button
            id="mobile-drawer-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 active:scale-95 transition-all text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 md:hidden bg-neutral-950/95 backdrop-blur-lg flex flex-col justify-start px-6 pt-8 pb-12 gap-8 border-t border-white/5 overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] tracking-wider text-cyan-400 font-bold uppercase">
                Enterprise Portals Navigation
              </span>
              <div className="h-px bg-white/5 w-full" />
            </div>

            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    to={link.path}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-extrabold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border-l-4 border-amber-500 text-amber-400'
                        : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-4">

              <div className="bg-gradient-to-r from-purple-950/20 via-[#0a0a24] to-cyan-950/20 p-5 rounded-2xl border border-white/5 text-center">
                <span className="block font-sans font-bold text-sm text-white mb-1">
                  Ready to launch your brokerage?
                </span>
                <span className="block font-sans text-xs text-gray-400 mb-4">
                  Schedule a private tech consultancy session with our risk desk developers today.
                </span>
                <Link
                  id="mobile-drawer-consult-cta"
                  to="/contact"
                  className="block text-center text-xs font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 shadow-md shadow-amber-500/10 active:scale-95 transition-transform"
                >
                  Book Instant Private Session
                </Link>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-cyan-500" />
                <span>FINANCIAL INFRASTRUCTURE GUARANTEED</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
