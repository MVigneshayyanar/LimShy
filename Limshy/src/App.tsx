import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero darkMode={darkMode} />
        <div className="section-divider" />
        <Services darkMode={darkMode} />
        <div className="section-divider" />
        <About darkMode={darkMode} />
        <div className="section-divider" />
        <Contact darkMode={darkMode} />
      </main>
      <Footer />

      {/* Floating Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="floating-back-to-top"
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-blue to-blue-light text-white shadow-xl shadow-blue/30 hover:shadow-blue-light/40 hover:-translate-y-1 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
