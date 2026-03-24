"use client";

import { Video, Activity, Brain } from "lucide-react";
import type { ReactNode } from "react";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  specs: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  glowClass: string;
}

function ProductCard({
  icon,
  title,
  description,
  specs,
  badge,
  badgeColor,
  accentColor,
  glowClass,
}: ProductCardProps) {
  return (
    <div
      className={`glass group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:${glowClass}`}
    >
      {/* Colored top border */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${accentColor}`} />

      <div className="p-6 sm:p-8">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColor.replace(
              "bg-gradient",
              "bg"
            )} bg-opacity-10`}
            style={{
              background: `linear-gradient(135deg, ${
                accentColor.includes("cyan")
                  ? "rgba(0,212,255,0.1)"
                  : accentColor.includes("red")
                  ? "rgba(255,51,85,0.1)"
                  : "rgba(168,85,247,0.1)"
              }, transparent)`,
            }}
          >
            {icon}
          </div>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColor}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap gap-2">
          {specs.split(" · ").map((spec) => (
            <span
              key={spec}
              className="text-xs font-mono text-text-secondary/70 px-2.5 py-1 rounded-md bg-white/[0.03] border border-border"
              style={{ fontFamily: "var(--font-family-jetbrains)" }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductStack() {
  return (
    <section id="products" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan-purple">The Full Stack</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Everything your academy needs. Nothing it doesn&apos;t.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            icon={<Video className="w-6 h-6 text-neon-cyan" />}
            title="SportSci Camera"
            description="4K auto-tracking match camera. AI-powered highlight detection. Feeds directly into your analytics pipeline."
            specs="4K · Auto-Pan · Weather-Resistant · WiFi/4G Upload"
            badge="Coming 2027"
            badgeColor="border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5"
            accentColor="bg-gradient-to-r from-neon-cyan to-neon-cyan/50"
            glowClass="glow-cyan"
          />
          <ProductCard
            icon={<Activity className="w-6 h-6 text-neon-red" />}
            title="Sensor Kit"
            description="HR chest straps + ESP32 gateway. Real-time biometric streaming for every player on the pitch."
            specs="BLE 5.1 · 22 Players · Real-Time · 8hr Battery"
            badge="Coming 2027"
            badgeColor="border-neon-red/30 text-neon-red/80 bg-neon-red/5"
            accentColor="bg-gradient-to-r from-neon-red to-neon-red/50"
            glowClass="glow-red"
          />
          <ProductCard
            icon={<Brain className="w-6 h-6 text-neon-purple" />}
            title="Coach M8 Platform"
            description="AI coaching intelligence. 15+ AI features turn raw data into decisions. The brain of SportSci."
            specs="15+ AI Features · Live Dashboard · PDF Reports · Mobile Ready"
            badge="Available Now"
            badgeColor="border-neon-green/30 text-neon-green bg-neon-green/5"
            accentColor="bg-gradient-to-r from-neon-purple to-neon-cyan/50"
            glowClass="glow-purple"
          />
        </div>
      </div>
    </section>
  );
}
