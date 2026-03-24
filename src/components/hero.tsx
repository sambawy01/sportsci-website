"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon-green/5 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs sm:text-sm text-text-secondary font-medium">
            Coach M8 Platform — Available Now
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-text-primary">One Ecosystem.</span>
          <br />
          <span className="gradient-text-cyan-purple">Complete Intelligence.</span>
        </h1>

        {/* Subline */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
          Camera. Wearables. AI Platform. The first fully integrated sports
          science system.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-gradient text-base flex items-center gap-2 group">
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="#how-it-works" className="btn-ghost text-base flex items-center gap-2">
            See How It Works
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-neon-cyan/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
