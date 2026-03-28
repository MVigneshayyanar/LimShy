import { BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface BlogProps {
  darkMode: boolean;
}

export default function Blog({ darkMode }: BlogProps) {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="blog" ref={ref} className={`relative py-24 lg:py-32 ${darkMode ? 'bg-navy-light' : 'bg-white'}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode ? 'bg-blue-light/10 text-blue-sky border border-blue-light/20' : 'bg-blue-50 text-blue border border-blue-100'}`}>
            Blog & Insights
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-navy'}`}>
            Latest from the <span className="gradient-text">Limshy Blog</span>
          </h2>
        </div>

        {/* Empty State */}
        <div className={`flex flex-col items-center justify-center py-20 rounded-3xl transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${
          darkMode ? 'bg-navy/60 border border-white/5' : 'bg-gray-50 border border-gray-100'
        }`}>
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
            darkMode ? 'bg-blue-light/10' : 'bg-blue-50'
          }`}>
            <BookOpen className={`w-10 h-10 ${darkMode ? 'text-blue-sky' : 'text-blue-light'}`} />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-navy'}`}>
            Blog Coming Soon
          </h3>
          <p className={`text-sm max-w-md text-center ${darkMode ? 'text-slate' : 'text-gray-500'}`}>
            We're preparing our first articles. Stay tuned for insights on tech, development, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
