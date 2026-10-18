import React, { forwardRef, useState } from 'react';
import { personalInfo } from '../data/index';
import { GithubIcon, LinkedinIcon, MailIcon, CopyIcon, CheckIcon, LocationIcon, PhoneIcon } from './icons/index';

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Hi Dinu,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-[#00d2b4]">
            <MailIcon className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you're looking for an engineer specializing in low-latency systems and AI, or want to collaborate on research, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="glass-card p-6 rounded-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="font-mono text-sm text-white select-all truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#00d2b4] text-slate-200 hover:text-[#080c14] text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Location Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-sm text-white font-semibold">
                  <LocationIcon className="w-4 h-4 text-[#00d2b4]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-mono text-white font-semibold hover:text-[#00d2b4] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="glass-card p-6 rounded-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Connect Online
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#00d2b4]/40 text-xs font-semibold transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#00d2b4]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#0ea5e9]/40 text-xs font-semibold transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0ea5e9]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Fill in your details below and your mail client will open with this message prefilled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2b4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2b4] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2b4] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Dinu, I came across your portfolio and wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2b4] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00d2b4] via-[#0ea5e9] to-[#6366f1] text-[#080c14] font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-[#00d2b4]/20 hover:shadow-[#00d2b4]/40 hover:opacity-95 transition-all"
                >
                  Send Message to Dinu
                </button>

                {submitted && (
                  <p className="text-xs text-center text-emerald-400 font-mono mt-2 animate-fadeIn">
                    ✓ Opening your email client to send message!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
