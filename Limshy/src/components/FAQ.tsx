import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services does Limshy offer?',
    answer: 'We specialize in custom website development, mobile app creation (iOS & Android), Windows desktop applications, AI/ML integrations, UI/UX design, and scalable cloud infrastructure services.',
  },
  {
    question: 'How long does it take to build a website or app?',
    answer: 'Timelines vary based on complexity. A typical custom website takes 4-8 weeks, while complex mobile or desktop apps can take 12-24 weeks. We provide a detailed project plan during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes, we offer flexible maintenance and support packages, including 24/7 monitoring, security updates, performance tuning, and on-demand bug fixes to keep your platforms running smoothly.',
  },
  {
    question: 'Can you help with app store submissions?',
    answer: 'Absolutely. We handle the entire deployment process, including Apple App Store and Google Play Store submissions, ensuring your app meets all guidelines for a successful launch.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer both project-based (fixed-fee) and hourly models depending on your needs. For most custom builds, we provide a fixed-price quote after a thorough discovery phase.',
  },
];

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? 'bg-navy' : 'bg-slate-50'
      }`}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-sky/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-light/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
              darkMode
                ? 'bg-blue-light/10 text-blue-sky border border-blue-light/20'
                : 'bg-blue-50 text-blue border border-blue-100'
            }`}
          >
            Got Questions?
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-navy'
            }`}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-slate' : 'text-gray-600'
            }`}
          >
            Find answers to common questions about our services, timelines, and processes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 border ${
                darkMode
                  ? 'bg-navy-lighter/30 border-white/5 hover:border-blue-sky/20'
                  : 'bg-white border-gray-100 hover:border-blue/20 shadow-sm'
              } ${
                activeIndex === index
                  ? darkMode
                    ? 'border-blue-sky/40 bg-navy-lighter/60 shadow-lg shadow-blue-sky/10'
                    : 'border-blue/40 bg-white shadow-lg shadow-blue/5'
                  : ''
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex items-center justify-between w-full p-5 lg:p-6 text-left transition-all duration-300 ${
                  activeIndex === index ? 'pb-2 lg:pb-3' : ''
                }`}
              >
                <span
                  className={`text-base font-bold transition-colors ${
                    activeIndex === index
                      ? darkMode
                        ? 'text-blue-sky'
                        : 'text-blue'
                      : darkMode
                      ? 'text-white'
                      : 'text-navy'
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? darkMode
                        ? 'bg-blue-sky/10 text-blue-sky'
                        : 'bg-blue/10 text-blue'
                      : darkMode
                      ? 'bg-white/5 text-slate'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`px-5 lg:px-6 pb-5 lg:pb-6 text-sm leading-relaxed ${
                    darkMode ? 'text-slate-light' : 'text-gray-600'
                  }`}
                >
                  <p className={`border-t pt-4 ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                  {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        })}
      </script>
    </section>
  );
}
