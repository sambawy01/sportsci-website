"use client";

import {
  Watch,
  Dumbbell,
  TrendingUp,
  Share2,
  Search,
  Globe,
  FileText,
  Camera,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

interface ComingSoonCardProps {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  features: { icon: ReactNode; label: string }[];
}

function ComingSoonCard({
  title,
  description,
  badge,
  badgeColor,
  accentColor,
  features,
}: ComingSoonCardProps) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="glass group relative overflow-hidden transition-all duration-500 hover:scale-[1.01]">
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
      />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
          <span
            className={`text-xs font-semibold font-mono px-3 py-1 rounded-full border ${badgeColor}`}
            style={{ fontFamily: "var(--font-family-jetbrains)" }}
          >
            {badge}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}15, transparent)`,
                  border: `1px solid ${accentColor}20`,
                }}
              >
                {feature.icon}
              </div>
              <span className="text-xs text-text-secondary">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => setJoined(true)}
          disabled={joined}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
            joined
              ? "bg-neon-green/10 text-neon-green border border-neon-green/20 cursor-default"
              : "border border-border hover:border-white/20 text-text-primary hover:bg-white/[0.03]"
          }`}
        >
          {joined ? "You're on the list!" : "Join Waitlist"}
        </button>
      </div>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="relative py-24 sm:py-32 px-4 sm:px-6">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan-purple">What&apos;s Next</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComingSoonCard
            title="Fitness M8"
            description="AI-powered personal training. Connect your smartwatch, get intelligent coaching."
            badge="Q4 2026"
            badgeColor="border-neon-orange/30 text-neon-orange bg-neon-orange/5"
            accentColor="#ff6b35"
            features={[
              { icon: <Watch className="w-4 h-4 text-neon-orange" />, label: "Wearable sync" },
              { icon: <Dumbbell className="w-4 h-4 text-neon-orange" />, label: "AI workout plans" },
              { icon: <TrendingUp className="w-4 h-4 text-neon-orange" />, label: "Progress tracking" },
              { icon: <Share2 className="w-4 h-4 text-neon-orange" />, label: "Shareable stats" },
            ]}
          />
          <ComingSoonCard
            title="Scout Network"
            description="Multi-academy talent marketplace. Discover the next generation."
            badge="2027"
            badgeColor="border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5"
            accentColor="#00d4ff"
            features={[
              { icon: <Search className="w-4 h-4 text-neon-cyan" />, label: "Talent showcase" },
              { icon: <Globe className="w-4 h-4 text-neon-cyan" />, label: "Cross-academy scouting" },
              { icon: <FileText className="w-4 h-4 text-neon-cyan" />, label: "AI prospect reports" },
              { icon: <Camera className="w-4 h-4 text-neon-cyan" />, label: "Social media content" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
