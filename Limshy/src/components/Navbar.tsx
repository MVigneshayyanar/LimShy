import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  Smartphone,
  Monitor,
  Palette,
  Cloud,
  Server,
  Brain,
  Wrench,
  ArrowUp,
} from 'lucide-react';
import { scrollToSection } from '../hooks/useScroll';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'Services', section: 'services' },
  { label: 'About', section: 'about' },
  { label: 'Contact', section: 'contact' },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleNav = (section: string) => {
    scrollToSection(section);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? 'bg-navy/90 backdrop-blur-xl shadow-lg shadow-navy/50 border-b border-white/5'
              : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center group"
              id="logo"
            >
              <img src={logo} alt="Limshy Logo" className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleNav(link.section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    darkMode
                      ? 'text-slate hover:text-white'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-light to-blue-sky scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                id="dark-mode-toggle"
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-navy-lighter text-blue-sky hover:bg-navy-light hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-navy'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue-sky shadow-lg shadow-blue/25 hover:shadow-blue-light/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Quote
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                id="mobile-menu-toggle"
                className={`lg:hidden p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'text-white hover:bg-navy-lighter'
                    : 'text-navy hover:bg-gray-100'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full ${
            darkMode ? 'bg-navy border-l border-white/5' : 'bg-white border-l border-gray-200'
          } shadow-2xl transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNav(link.section)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-left ${
                  darkMode
                    ? 'text-slate-light hover:bg-navy-lighter hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-navy'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => handleNav('contact')}
                className="w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue to-blue-light shadow-lg shadow-blue/25 transition-all hover:-translate-y-0.5"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ArrowUp, Code2, Smartphone, Monitor, Palette, Cloud, Server, Brain, Wrench };
