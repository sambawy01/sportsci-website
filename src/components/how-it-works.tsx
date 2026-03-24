"use client";

import { Video, Activity, Brain, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  glowColor: string;
}

function Step({ number, title, description, icon, color, glowColor }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Step circle */}
      <div
        className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}08)`,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 30px ${glowColor}` }}
        />
      </div>

      {/* Step number */}
      <div
        className="text-xs font-mono font-bold mb-3 px-3 py-1 rounded-full border"
        style={{
          color: color,
          borderColor: `${color}30`,
          background: `${color}08`,
          fontFamily: "var(--font-family-jetbrains)",
        }}
      >
        Step {number}
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 px-4 sm:px-6 dot-grid">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan-purple">From Pitch to Decision</span>
            <br />
            <span className="text-text-primary">in Real Time</span>
          </h2>
        </div>

        {/* Steps with connecting lines */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-neon-cyan/30 via-neon-purple/30 to-neon-green/30 rounded-full" />
            {/* Animated dots on the line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-purple animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-neon-cyan/20 via-neon-purple/20 to-neon-green/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            <Step
              number={1}
              title="Capture"
              description="Every movement, every heartbeat, every sprint -- captured automatically during training and matches."
              icon={
                <div className="flex gap-1">
                  <Video className="w-5 h-5 text-neon-cyan" />
                  <Activity className="w-5 h-5 text-neon-cyan" />
                </div>
              }
              color="#00d4ff"
              glowColor="rgba(0,212,255,0.2)"
            />
            <Step
              number={2}
              title="Process"
              description="Our AI engine processes raw data through computer vision, heart rate analysis, and load modeling in real time."
              icon={<Brain className="w-8 h-8 text-neon-purple" />}
              color="#a855f7"
              glowColor="rgba(168,85,247,0.2)"
            />
            <Step
              number={3}
              title="Decide"
              description="Coaches receive actionable intelligence: who to rest, how to train, how to beat the next opponent."
              icon={<Sparkles className="w-8 h-8 text-neon-green" />}
              color="#00ff88"
              glowColor="rgba(0,255,136,0.2)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
