"use client";

import {
  ClipboardList,
  HeartPulse,
  Activity,
  Target,
  Shield,
  TrendingUp,
  CalendarDays,
  Radio,
  BarChart3,
  Users,
  Gauge,
} from "lucide-react";
import type { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  label: string;
  color: string;
  subBadge?: string;
}

function FeatureItem({ icon, label, color, subBadge }: FeatureItemProps) {
  return (
    <div className="glass group flex items-start gap-4 p-5 transition-all duration-300 hover:scale-[1.02]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}08)`,
          border: `1px solid ${color}20`,
        }}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-text-primary">{label}</h4>
        {subBadge && (
          <span
            className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-text-secondary"
            style={{ fontFamily: "var(--font-family-jetbrains)" }}
          >
            {subBadge}
          </span>
        )}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="glass overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-neon-red/60" />
          <div className="w-3 h-3 rounded-full bg-neon-orange/60" />
          <div className="w-3 h-3 rounded-full bg-neon-green/60" />
        </div>
        <div className="flex-1 ml-4">
          <div className="max-w-sm mx-auto h-6 rounded-md bg-white/[0.03] border border-border flex items-center px-3">
            <span className="text-[10px] text-text-secondary/50 font-mono" style={{ fontFamily: "var(--font-family-jetbrains)" }}>
              app.sportsci.ai/dashboard
            </span>
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="flex min-h-[350px] sm:min-h-[420px]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-48 border-r border-border p-4 gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
            <Gauge className="w-4 h-4 text-neon-purple" />
            <span className="text-xs text-neon-purple font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary/50 hover:bg-white/[0.02]">
            <Users className="w-4 h-4" />
            <span className="text-xs">Squad</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary/50 hover:bg-white/[0.02]">
            <Activity className="w-4 h-4" />
            <span className="text-xs">Sessions</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary/50 hover:bg-white/[0.02]">
            <BarChart3 className="w-4 h-4" />
            <span className="text-xs">Reports</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary/50 hover:bg-white/[0.02]">
            <Radio className="w-4 h-4" />
            <span className="text-xs">Live HR</span>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 sm:p-6 space-y-4">
          {/* Top stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Squad Size", value: "22", color: "#a855f7" },
              { label: "Avg Readiness", value: "87%", color: "#00ff88" },
              { label: "Injury Risk", value: "2", color: "#ff3355" },
              { label: "Sessions/Week", value: "5", color: "#00d4ff" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 bg-white/[0.02] border border-border"
              >
                <p className="text-[10px] text-text-secondary mb-1">{stat.label}</p>
                <p
                  className="text-xl font-bold"
                  style={{ color: stat.color, fontFamily: "var(--font-family-jetbrains)" }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="rounded-xl p-4 bg-white/[0.02] border border-border flex-1 min-h-[140px] sm:min-h-[200px]">
            <p className="text-[10px] text-text-secondary mb-4">Weekly Load Overview</p>
            <div className="flex items-end gap-2 h-24 sm:h-36 px-2">
              {[65, 85, 55, 90, 70, 80, 45].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(168,85,247,0.3), rgba(0,212,255,0.3))`,
                      border: "1px solid rgba(168,85,247,0.2)",
                    }}
                  />
                  <span className="text-[8px] text-text-secondary/40" style={{ fontFamily: "var(--font-family-jetbrains)" }}>
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoachM8Showcase() {
  const features: FeatureItemProps[] = [
    { icon: <ClipboardList className="w-5 h-5" style={{ color: "#a855f7" }} />, label: "AI Session Design", color: "#a855f7" },
    { icon: <HeartPulse className="w-5 h-5" style={{ color: "#ff3355" }} />, label: "Injury Prediction", color: "#ff3355" },
    { icon: <Activity className="w-5 h-5" style={{ color: "#00ff88" }} />, label: "Match Readiness", color: "#00ff88" },
    { icon: <Target className="w-5 h-5" style={{ color: "#00d4ff" }} />, label: "Opponent Scouting", color: "#00d4ff", subBadge: "Deep Web Research" },
    { icon: <Shield className="w-5 h-5" style={{ color: "#00d4ff" }} />, label: "Squad Builder", color: "#00d4ff" },
    { icon: <TrendingUp className="w-5 h-5" style={{ color: "#00ff88" }} />, label: "Player Progress", color: "#00ff88" },
    { icon: <CalendarDays className="w-5 h-5" style={{ color: "#a855f7" }} />, label: "Weekly Planner", color: "#a855f7" },
    { icon: <Radio className="w-5 h-5" style={{ color: "#ff3355" }} />, label: "Live HR Dashboard", color: "#ff3355" },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Coach M8 — <span className="gradient-text-purple-cyan">AI Performance Analysis</span>
            <br className="hidden sm:block" />
            <span className="text-text-primary"> & Squad Management</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built for The Maker Football Incubator. Ready for every academy.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mb-16 max-w-5xl mx-auto">
          <DashboardMockup />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature) => (
            <FeatureItem key={feature.label} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
