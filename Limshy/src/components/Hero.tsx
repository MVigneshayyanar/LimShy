import { Code2, Smartphone, Cloud, ArrowRight, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../hooks/useScroll';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode ? 'bg-navy' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-light/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-sky/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-3xl" />
        <div className={`absolute inset-0 grid-pattern ${darkMode ? 'opacity-100' : 'opacity-40'}`} />

        {/* Floating Tech Icons */}
        <div className="hidden lg:block absolute top-32 left-[12%] animate-float">
          <div className={`p-4 rounded-2xl ${darkMode ? 'glass-card' : 'glass-card-light shadow-xl'}`}>
            <Code2 className="w-8 h-8 text-blue-light" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-48 right-[15%] animate-float-delayed">
          <div className={`p-4 rounded-2xl ${darkMode ? 'glass-card' : 'glass-card-light shadow-xl'}`}>
            <Smartphone className="w-8 h-8 text-blue-sky" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-40 left-[20%] animate-float-slow">
          <div className={`p-4 rounded-2xl ${darkMode ? 'glass-card' : 'glass-card-light shadow-xl'}`}>
            <Cloud className="w-8 h-8 text-blue-glow" />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-32 right-[10%] animate-float">
          <div className={`p-3 rounded-xl ${darkMode ? 'glass-card' : 'glass-card-light shadow-lg'}`}>
            <div className="font-mono text-xs text-blue-light">
              {'{ "status": "deployed" }'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-slide-up">
            <span className={darkMode ? 'text-white' : 'text-navy'}>Limshy </span>
            <span className="text-glow">–</span>
            <br />
            <span className="gradient-text">Innovative Tech</span>
            <br />
            <span className={darkMode ? 'text-white' : 'text-navy'}>Solutions</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up ${
              darkMode ? 'text-slate' : 'text-gray-600'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Expert{' '}
            <span className={darkMode ? 'text-blue-sky font-medium' : 'text-blue font-medium'}>Website</span>,{' '}
            <span className={darkMode ? 'text-blue-sky font-medium' : 'text-blue font-medium'}>Mobile App</span>,{' '}
            <span className={darkMode ? 'text-blue-sky font-medium' : 'text-blue font-medium'}>Windows Desktop</span>,{' '}
            UI/UX, Cloud, API/Backend, AI/ML & Maintenance
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={() => scrollToSection('services')}
              id="cta-services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue-sky shadow-xl shadow-blue/30 hover:shadow-blue-light/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              View Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              id="cta-quote"
              className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border-2 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center ${
                darkMode
                  ? 'text-blue-sky border-blue-sky/30 hover:bg-blue-sky/10 hover:border-blue-sky/50'
                  : 'text-blue border-blue/20 hover:bg-blue/5 hover:border-blue/40'
              }`}
            >
              Get a Free Quote
            </button>
          </div>

          {/* Trust badges */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 animate-slide-up ${
              darkMode ? 'text-slate/50' : 'text-gray-400'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Technologies</span>
            <div className="flex items-center gap-6 text-xs font-mono opacity-60">
              <span>React</span>
              <span>•</span>
              <span>Flutter</span>
              <span>•</span>
              <span>.NET</span>
              <span>•</span>
              <span>AWS</span>
              <span>•</span>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('services')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity ${
          darkMode ? 'text-slate/40 hover:text-slate/80' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
