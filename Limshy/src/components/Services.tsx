import {
  Code2,
  Smartphone,
  Monitor,
  Palette,
  Cloud,
  Server,
  Brain,
  Wrench,
  ChevronDown,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { scrollToSection } from '../hooks/useScroll';

interface ServicesProps {
  darkMode: boolean;
}

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    tech: 'React / Next.js / TypeScript',
    features: [
      'Custom responsive web applications built for performance',
      'E-commerce platforms & complex SaaS solutions',
      'SEO-optimized architecture with blazing fast load times',
      'Progressive Web Apps (PWA) for desktop-like feel',
    ],
    color: 'from-blue-500 to-cyan-400',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    tech: 'Flutter / React Native',
    features: [
      'High-performance cross-platform iOS & Android apps',
      'Native-look UX with smooth animations and transitions',
      'Push notification alerts & offline-first functionality',
      'App Store & Play Store publication management',
    ],
    color: 'from-violet-500 to-purple-400',
    shadowColor: 'shadow-violet-500/20',
  },
  {
    icon: Monitor,
    title: 'Windows Desktop App',
    tech: '.NET MAUI / WPF / C#',
    features: [
      'Modern Windows 11 Fluent Design style applications',
      'Enterprise-grade desktop software for high efficiency',
      'Seamless auto-updater & secure installer setup',
      'Local database integration & hardware interfacing',
    ],
    color: 'from-blue-600 to-blue-400',
    shadowColor: 'shadow-blue-600/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    tech: 'Figma / Adobe Creative Suite',
    features: [
      'In-depth user research & strategic wireframing',
      'High-fidelity interactive prototypes for validation',
      'Comprehensive design systems & brand style guides',
      'Accessibility-first (WCAG) design principles',
    ],
    color: 'from-pink-500 to-rose-400',
    shadowColor: 'shadow-pink-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    tech: 'AWS / Azure / GCP',
    features: [
      'Scalable cloud infrastructure setup & management',
      'Automated CI/CD pipelines for rapid deployment',
      'Serverless architectures & microservices migration',
      'Cloud security audits & cost optimization',
    ],
    color: 'from-sky-500 to-teal-400',
    shadowColor: 'shadow-sky-500/20',
  },
  {
    icon: Server,
    title: 'API / Backend Services',
    tech: 'Node.js / Python / Go / PostgreSQL',
    features: [
      'Highly scalable RESTful & GraphQL API development',
      'Relational & NoSQL database design & optimization',
      'Secure OAuth2, payment gateway & 3rd party integrations',
      'Real-time data processing with WebSockets',
    ],
    color: 'from-emerald-500 to-green-400',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Brain,
    title: 'AI / ML Features',
    tech: 'TensorFlow / PyTorch / OpenAI',
    features: [
      'Custom Machine Learning model training & deployment',
      'Advanced NLP, sentiment analysis & computer vision',
      'AI-powered business process automation',
      'Predictive analytics & intelligent recommendation engines',
    ],
    color: 'from-amber-500 to-orange-400',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    tech: '24/7 Proactive Monitoring',
    features: [
      'Critical bug fixes & continuous performance tuning',
      'Regular security patches & dependency updates',
      'Flexible SLA-based ongoing support plans',
      'Legacy system modernization & cloud hosting support',
    ],
    color: 'from-slate-500 to-gray-400',
    shadowColor: 'shadow-slate-500/20',
  },
];

export default function Services({ darkMode }: ServicesProps) {
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      id="services"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${darkMode ? 'bg-navy-light' : 'bg-white'
        }`}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-sky/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode ? 'bg-blue-light/10 text-blue-sky border border-blue-light/20' : 'bg-blue-50 text-blue border border-blue-100'
            }`}>
            Our Services
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-navy'}`}>
            Everything You Need to{' '}
            <span className="gradient-text">Build & Scale</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate' : 'text-gray-600'}`}>
            From concept to deployment and beyond, we deliver end-to-end software solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${darkMode
                  ? 'bg-navy/60 border border-white/5 hover:border-blue-light/20 hover:bg-navy/80'
                  : 'bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5'
                  } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                id={`service-card-${index}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-navy'}`}>
                  {service.title}
                </h3>
                <p className={`text-xs font-mono mb-4 ${darkMode ? 'text-blue-sky' : 'text-blue-light'}`}>
                  {service.tech}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate' : 'text-gray-600'
                        }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-light mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
 
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className={`flex flex-col items-center gap-2 mx-auto mt-12 transition-opacity cursor-pointer relative z-10 ${darkMode ? 'text-slate/40 hover:text-slate/80' : 'text-gray-400 hover:text-gray-600'
          }`}
      >
        <span className="text-xs font-medium tracking-wider uppercase pointer-events-none">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce pointer-events-none" />
      </button>
    </section>
  );
}
