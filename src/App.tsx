import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

// Dynamic viewport manager to push scroll position to top on page switches
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Viewport page transition utility */}
      <ScrollToTop />

      {/* Main app layout container with standard header/footer layout wrappers */}
      <div className="flex flex-col min-h-screen bg-neutral-985 text-white">
        
        {/* Core Navigation Bar */}
        <Navbar />

        {/* Scalable viewports routing switcher */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Base Regulatory Legal Footer */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
