import { useState } from 'react';
import { Send } from 'lucide-react';
import { scrollToSection } from '../hooks/useScroll';
import logo from '../assets/logo.png';



export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer id="footer" className="relative bg-navy text-white">
      {/* Back to Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="back-to-top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-gradient-to-r from-blue to-blue-light text-white shadow-lg shadow-blue/30 hover:shadow-blue-light/40 hover:-translate-y-1 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollToSection('home')} className="inline-flex items-center mb-6 group text-left">
              <img src={logo} alt="Limshy Logo" className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </button>
            <p className="text-slate max-w-sm mb-6 text-sm leading-relaxed">
              Innovative tech solutions — from concept to deployment. Building the future of digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', section: 'home' },
                { label: 'Services', section: 'services' },
                { label: 'About', section: 'about' },
                { label: 'Contact', section: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToSection(link.section)}
                    className="text-sm text-slate hover:text-blue-sky transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Web Development', 'Mobile Apps', 'Desktop Apps', 'UI/UX Design', 'Cloud Integration', 'AI/ML Features'].map((service) => (
                <li key={service}>
                  <button onClick={() => scrollToSection('services')}
                    className="text-sm text-slate hover:text-blue-sky transition-colors duration-200">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} Limshy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
