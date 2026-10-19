import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Clock, Phone, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <MessageSquare className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Contact Us
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Have an inquiry, calculation feature request, advertising question, or bug report? Our team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white">Support & Editorial Channels</h2>

            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-white">Email Inquiries</span>
                  <span className="text-slate-400 text-xs">support@calculationhub.com</span>
                  <br />
                  <span className="text-slate-400 text-xs">advertising@calculationhub.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-white">Response Time</span>
                  <span className="text-slate-400 text-xs">Within 24 business hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-medium text-white">Headquarters</span>
                  <span className="text-slate-400 text-xs leading-relaxed">
                    CalculationHub Pro Media LLC<br />
                    100 Montgomery St, Suite 1800<br />
                    San Francisco, CA 94104
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
            <span className="font-semibold text-slate-200 block">Frequently Asked Quick Topics</span>
            <p>
              Looking to advertise or install custom programmatic slots? Select <strong>"Advertising & Sponsorship"</strong> in the dropdown.
            </p>
            <p>
              Spot a typo or formula discrepancy? Let our math engineers know under <strong>"Editorial Correction"</strong>.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-sm">
                  Thank you, <strong className="text-white">{name}</strong>. Your message regarding "{subject}" has been delivered to our engineering and editorial desk. We will respond to <strong className="text-white">{email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="General Feedback">General Feedback & Suggestions</option>
                    <option value="Calculator Feature Request">Request a New Calculator</option>
                    <option value="Editorial Correction">Editorial / Mathematical Correction</option>
                    <option value="Advertising & Sponsorship">Advertising & Sponsorship Inquiries</option>
                    <option value="Technical Bug Report">Technical Bug Report</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Message Description
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details about your question, calculation request, or feedback..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Support</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
