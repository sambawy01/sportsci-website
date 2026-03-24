"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    academy: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/20 transition-all duration-200";

  if (submitted) {
    return (
      <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 dot-grid">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass p-12 sm:p-16">
            <div className="w-16 h-16 rounded-2xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              We&apos;ll be in touch!
            </h3>
            <p className="text-text-secondary">
              Thanks for your interest in SportSci. Our team will reach out
              within 48 hours to schedule your demo.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 dot-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan-purple">See SportSci in Action</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Request a demo for your academy or join the waitlist for Fitness M8
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs text-text-secondary mb-2 font-medium">
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="academy" className="block text-xs text-text-secondary mb-2 font-medium">
                Academy / Organization *
              </label>
              <input
                id="academy"
                type="text"
                required
                placeholder="Organization name"
                className={inputClasses}
                value={formData.academy}
                onChange={(e) => setFormData({ ...formData, academy: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs text-text-secondary mb-2 font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@academy.com"
                className={inputClasses}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs text-text-secondary mb-2 font-medium">
                Phone <span className="text-text-secondary/30">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+20 xxx xxx xxxx"
                className={inputClasses}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-text-secondary mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your academy and what you're looking for..."
              className={`${inputClasses} resize-none`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn-gradient w-full text-sm flex items-center justify-center gap-2 group"
          >
            <span>Request Demo</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
        </form>
      </div>
    </section>
  );
}
