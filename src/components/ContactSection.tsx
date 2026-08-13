import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onSendMessageLog?: (name: string, email: string, message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSendMessageLog }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSendMessageLog) {
        onSendMessageLog(formData.name, formData.email, formData.message);
      }
    }, 800);
  };

  return (
    <section id="contact" className="px-4 sm:px-8 md:px-16 py-32 max-w-[1200px] mx-auto text-center">
      <h2 className="font-code-label text-xs text-[#28e98c] mb-3 uppercase tracking-widest font-semibold">
        04. What's Next?
      </h2>

      <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#28e98c] tracking-tight">
        Seeking Full-Time New Grad SWE Roles
      </h3>

      <p className="font-body text-base md:text-lg max-w-2xl mx-auto mb-12 text-[#999999] leading-relaxed">
        I'm a May 2025 Computer Science graduate from Marist College with internship experience at Microsoft &amp; Google, actively interviewing for full-time New Grad Software Engineering positions (Backend, Full-Stack, Systems, or AI/ML).
      </p>

      {/* Direct Contact Badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1D23] border border-[#2D3139] rounded font-code-label text-xs text-[#e2e2e8] hover:border-[#28e98c] hover:text-[#28e98c] transition-all"
        >
          <Mail className="w-4 h-4 text-[#28e98c]" />
          <span>{PERSONAL_INFO.email}</span>
        </a>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1D23] border border-[#2D3139] rounded font-code-label text-xs text-[#999999]">
          <MapPin className="w-4 h-4 text-[#28e98c]" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Form Container */}
      {submitted ? (
        <div className="max-w-md mx-auto p-8 bg-[#1A1D23] border border-[#28e98c] rounded-lg text-center space-y-4 shadow-2xl animate-fade-in">
          <div className="w-12 h-12 bg-[#28e98c]/20 text-[#28e98c] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-headline text-xl font-bold text-white">Message Transmitted!</h4>
          <p className="font-body text-sm text-[#999999]">
            Thank you <strong className="text-white">{formData.name}</strong>. Your note has been logged to Descartes' terminal queue. He will get back to you at <span className="text-[#28e98c]">{formData.email}</span> shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', message: '' });
            }}
            className="font-code-label text-xs bg-[#28e98c] text-black px-6 py-2.5 rounded font-medium cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1A1D23] border border-[#2D3139] rounded px-4 py-3 text-white focus:border-[#b9f1ff] focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_rgba(185,241,255,0.15)] transition-all font-body text-sm placeholder-[#999999]"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#1A1D23] border border-[#2D3139] rounded px-4 py-3 text-white focus:border-[#b9f1ff] focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_rgba(185,241,255,0.15)] transition-all font-body text-sm placeholder-[#999999]"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1A1D23] border border-[#2D3139] rounded px-4 py-3 text-white focus:border-[#b9f1ff] focus:ring-0 focus:outline-none focus:shadow-[0_0_15px_rgba(185,241,255,0.15)] transition-all font-body text-sm resize-none placeholder-[#999999]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-code-label text-xs bg-[#28e98c] text-[#000000] py-4 rounded font-bold hover:bg-[#59ffa3] transition-colors mt-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Packet...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
};
