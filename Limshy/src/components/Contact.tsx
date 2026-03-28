import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ContactProps { darkMode: boolean; }

const serviceOptions = [
  'Website Development', 'Mobile App Development', 'Windows Desktop App',
  'UI/UX Design', 'Cloud Integration', 'API/Backend Services',
  'AI/ML Features', 'App Maintenance & Support', 'Other',
];

export default function Contact({ darkMode }: ContactProps) {
  const { ref, isInView } = useInView(0.05);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Web3Forms: Free automated email service (no mail client popup)
      // Get your free Access Key here: https://web3forms.com/#export-your-form
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Inquiry: ${formData.service} from ${formData.name}`,
          from_name: "Limshy Website",
        }),
      });

      if (!web3Response.ok) throw new Error('Web3Forms submission failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      if (error.code === 'permission-denied') {
        alert('Firebase permission denied. Check your Firestore rules.');
      } else if (error.message.includes('Database')) {
        alert('Firebase Firestore Database not found! Please create it in the Firebase Console.');
      } else {
        alert('Something went wrong. Please check your connection or email us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 outline-none ${
    darkMode
      ? 'bg-navy/80 border border-white/10 text-white placeholder:text-slate/50 focus:border-blue-light/50 focus:ring-2 focus:ring-blue-light/20'
      : 'bg-gray-50 border border-gray-200 text-navy placeholder:text-gray-400 focus:border-blue/50 focus:ring-2 focus:ring-blue/10 focus:bg-white'
  }`;

  return (
    <section id="contact" ref={ref} className={`relative py-24 lg:py-32 ${darkMode ? 'bg-navy' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode ? 'bg-blue-light/10 text-blue-sky border border-blue-light/20' : 'bg-blue-50 text-blue border border-blue-100'}`}>
            Contact Us
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-navy'}`}>
            Let's Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-slate' : 'text-gray-600'}`}>
            Ready to start your project? Reach out and let's discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className={`lg:col-span-3 rounded-3xl p-6 sm:p-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${
            darkMode ? 'bg-navy-light/80 border border-white/5' : 'bg-white border border-gray-100 shadow-lg shadow-blue/5'
          }`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-navy'}`}>Message Sent!</h3>
                <p className={`${darkMode ? 'text-slate' : 'text-gray-500'}`}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Full Name</label>
                    <input type="text" required placeholder="John Doe" value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})} className={inputClasses} id="contact-name" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Email</label>
                    <input type="email" required placeholder="john@company.com" value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputClasses} id="contact-email" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputClasses} id="contact-phone" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className={inputClasses} id="contact-service">
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Message</label>
                  <textarea rows={5} required placeholder="Tell us about your project..." value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})} className={`${inputClasses} resize-none`} id="contact-message" />
                </div>
                <button type="submit" id="contact-submit" disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue to-blue-light hover:from-blue-light hover:to-blue-sky shadow-lg shadow-blue/25 hover:shadow-blue-light/30 transition-all duration-300 hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="mailto:limshytech@gmail.com"
              className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode ? 'bg-navy-light/60 border border-white/5 hover:border-blue-light/20' : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
              }`}>
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-light/10 text-blue-sky' : 'bg-blue-50 text-blue'}`}>
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-sm ${darkMode ? 'text-slate' : 'text-gray-500'}`}>Email</div>
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-navy'}`}>limshytech@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
