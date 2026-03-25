"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.25)" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(10,14,26,0.4) 0%, rgba(10,14,26,0.85) 70%, rgba(10,14,26,0.95) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0a0e1a, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Desktop: side by side | Mobile: stacked */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 lg:gap-12">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">Every Heartbeat.</span>
              <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">Every Sprint.</span>
              <br />
              <span className="gradient-text-cyan-purple drop-shadow-[0_0_40px_rgba(0,212,255,0.2)]">Every Decision.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed lg:mx-0 mx-auto">
              AI performance analysis and squad management that turns raw data into winning decisions, injury prevention, and player development intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a href="#contact" className="btn-gradient text-base flex items-center gap-2 group">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <a href="#how-it-works" className="btn-ghost text-base flex items-center gap-2">
                See How It Works
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <img
              src="/coach-m8-hero.png"
              alt="Coach M8 — AI Performance Analysis & Squad Management"
              className="h-64 sm:h-80 lg:h-[30rem] w-auto object-contain animate-float"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
