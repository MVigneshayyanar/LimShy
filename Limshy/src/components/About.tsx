import { useInView } from '../hooks/useInView';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-navy-light' : 'bg-white'
        }`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-light/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode ? 'bg-blue-light/10 text-blue-sky border border-blue-light/20' : 'bg-blue-50 text-blue border border-blue-100'
            }`}>
            About Us
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-navy'}`}>
            Building the Future,{' '}
            <span className="gradient-text">One Line at a Time</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate' : 'text-gray-600'}`}>
            Limshy delivers cutting-edge tech solutions that drive growth and innovation.
            We combine technical excellence with creative vision to turn ambitious ideas into reality.
          </p>
        </div>

        {/* Company Story */}
        <div className={`rounded-3xl p-8 lg:p-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${darkMode
            ? 'bg-gradient-to-br from-navy to-navy-lighter border border-white/5'
            : 'bg-gradient-to-br from-blue-50 to-white border border-blue-100/50'
          }`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-navy'}`}>Our Story</h3>
              <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-slate' : 'text-gray-600'}`}>
                <p>
                  Limshy is a full-service software development company
                  building solutions for businesses of all sizes.
                </p>
                <p>
                  We specialize in high-performance web applications, cross-platform mobile apps,
                  AI-powered features, and cloud-native solutions using every major technology stack.
                </p>
                <p>
                  At Limshy, we don't just write code — we architect solutions that scale, adapt, and deliver
                  measurable business impact.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-2xl p-6 text-center ${darkMode ? 'bg-navy/60 border border-white/5' : 'bg-white shadow-sm border border-gray-100'}`}>
                <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                <div className={`text-sm ${darkMode ? 'text-slate' : 'text-gray-500'}`}>Support</div>
              </div>
              <div className={`rounded-2xl p-6 text-center ${darkMode ? 'bg-navy/60 border border-white/5' : 'bg-white shadow-sm border border-gray-100'}`}>
                <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                <div className={`text-sm ${darkMode ? 'text-slate' : 'text-gray-500'}`}>Commitment</div>
              </div>
              <div className={`rounded-2xl p-6 text-center ${darkMode ? 'bg-navy/60 border border-white/5' : 'bg-white shadow-sm border border-gray-100'}`}>
                <div className="text-3xl font-bold gradient-text mb-1">∞</div>
                <div className={`text-sm ${darkMode ? 'text-slate' : 'text-gray-500'}`}>Possibilities</div>
              </div>
              <div className={`rounded-2xl p-6 text-center ${darkMode ? 'bg-navy/60 border border-white/5' : 'bg-white shadow-sm border border-gray-100'}`}>
                <div className="text-3xl font-bold gradient-text mb-1">🚀</div>
                <div className={`text-sm ${darkMode ? 'text-slate' : 'text-gray-500'}`}>Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
