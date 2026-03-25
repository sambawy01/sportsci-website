"use client";

import { Wifi, Brain, Trophy } from "lucide-react";
import type { ReactNode } from "react";

interface StepProps {
  number: string;
  title: string;
  hook: string;
  details: string[];
  icon: ReactNode;
  color: string;
}

function Step({ number, title, hook, details, icon, color }: StepProps) {
  return (
    <div className="relative group">
      {/* Card */}
      <div
        className="glass p-7 transition-all duration-500 group-hover:scale-[1.03]"
        style={{
          borderColor: `${color}15`,
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        {/* Number + Icon row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono text-5xl font-black opacity-15"
            style={{ color }}
          >
            {number}
          </span>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}20`,
            }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {/* Hook */}
        <p className="text-sm font-medium mb-4" style={{ color: `${color}cc` }}>
          {hook}
        </p>

        {/* Detail bullets */}
        <div className="space-y-2.5">
          {details.map((d) => (
            <div key={d} className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}60` }} />
              <span className="text-xs text-white/40 leading-relaxed">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 px-4 sm:px-6">
      {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00d4ff]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            <span className="text-white">Data Walks In.</span>
            <br />
            <span className="gradient-text-cyan-purple">Decisions Walk Out.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Three steps between raw noise and match-winning clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step
            number="01"
            title="Collect"
            hook="The pitch becomes a sensor."
            icon={<Wifi className="w-7 h-7 text-[#00d4ff]" />}
            color="#00d4ff"
            details={[
              "Wearables stream heart rate, intensity zones, and recovery data for every player simultaneously",
              "Video captures position, speed, distance, and sprint patterns across the full session",
              "Load data accumulates automatically — acute vs chronic workload builds after every session",
              "Zero manual input required. Coach focuses on coaching, not data entry.",
            ]}
          />
          <Step
            number="02"
            title="Understand"
            hook="AI reads what humans miss."
            icon={<Brain className="w-7 h-7 text-[#a855f7]" />}
            color="#a855f7"
            details={[
              "Cross-references biometric data with position data to find patterns invisible to the eye",
              "Compares today's session against 4 weeks of history to detect fatigue, overload, and improvement",
              "Scans the web for opponent intelligence — results, formations, key players, weaknesses",
              "Generates injury risk predictions by combining workload, recovery, and intensity trends",
            ]}
          />
          <Step
            number="03"
            title="Act"
            hook="The coach is always one step ahead."
            icon={<Trophy className="w-7 h-7 text-[#00ff88]" />}
            color="#00ff88"
            details={[
              "Match day: AI tells you exactly who's fit, who's sharp, and your strongest XI for this opponent",
              "Training: AI designs the next session based on where your squad actually is, not where you think it is",
              "Prevention: flagged players get modified protocols before they feel the first twinge",
              "Reports: parents, staff, and scouts get professional updates without the coach writing a word",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
