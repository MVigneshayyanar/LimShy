import { useState } from 'react';
import { Code2, Send, Link2, Globe, MessageCircle, ArrowUp, Heart } from 'lucide-react';
import { scrollToSection } from '../hooks/useScroll';



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
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollToSection('home')} className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-light to-blue-sky flex items-center justify-center shadow-lg shadow-blue-light/30">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Limshy</span>
            </button>
            <p className="text-slate max-w-sm mb-6 text-sm leading-relaxed">
              Innovative tech solutions — from concept to deployment. Building the future of digital products.
            </p>
            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              {subscribed ? (
                <div className="text-sm text-green-400 font-medium py-3">✓ Subscribed successfully!</div>
              ) : (
                <>
                  <input type="email" required placeholder="your@email.com" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl text-sm bg-navy-lighter border border-white/10 text-white placeholder:text-slate/50 focus:border-blue-light/50 focus:ring-2 focus:ring-blue-light/20 outline-none transition-all"
                    id="newsletter-email" />
                  <button type="submit" id="newsletter-submit"
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue to-blue-light text-white hover:from-blue-light hover:to-blue-sky transition-all shadow-lg shadow-blue/25">
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate flex items-center gap-1">
            © {new Date().getFullYear()} Limshy. All rights reserved. Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
          </p>
          <div className="flex gap-3">
            {[{ icon: Link2, label: 'LinkedIn' }, { icon: Globe, label: 'GitHub' }, { icon: MessageCircle, label: 'Twitter' }].map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.label} href="javascript:void(0)" aria-label={s.label}
                  className="p-2.5 rounded-lg text-slate hover:text-blue-sky hover:bg-white/5 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
