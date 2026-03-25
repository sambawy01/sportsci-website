"use client";

import { useState } from "react";
import {
  Brain,
  Shield,
  TrendingUp,
  Target,
  HeartPulse,
  Zap,
  Eye,
  FileText,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";

interface ShowcaseFeature {
  icon: ReactNode;
  title: string;
  hook: string;
  description: string;
  color: string;
  metric?: string;
  metricLabel?: string;
}

const features: ShowcaseFeature[] = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Opponent Intelligence",
    hook: "Know them before they know themselves",
    description: "AI scans the web in real time — pulling match results, squad rosters, formations, and tactical patterns for any opponent. Walk into the dressing room with a 10-page dossier your rival doesn't know exists.",
    color: "#00d4ff",
    metric: "25+",
    metricLabel: "web sources scanned per report",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Injury Prediction",
    hook: "The injury that never happened",
    description: "Multi-factor risk engine combines workload ratios, recovery trends, training intensity, and historical patterns to flag danger 48 hours before symptoms appear. Your best player stays on the pitch, not in rehab.",
    color: "#ff3355",
    metric: "48hrs",
    metricLabel: "early warning before injury risk peaks",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Session Design",
    hook: "Training plans that think",
    description: "Tell the AI your goal, your squad's current load, and how many days until the match. It designs a session that pushes the right players, protects the tired ones, and peaks fitness exactly when you need it.",
    color: "#a855f7",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Match Readiness",
    hook: "Never guess your starting XI again",
    description: "Every player gets a readiness score 0-100 before every game. Based on load trend, recovery quality, days since last intensity, and recent performance. The AI recommends your strongest XI for this specific matchup.",
    color: "#00ff88",
    metric: "0-100",
    metricLabel: "per-player readiness score",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Development Arc",
    hook: "See three months in thirty seconds",
    description: "Every player's performance trajectory visualized over time. Speed, endurance, work rate, recovery — all trending. AI narrates the story: where they started, where they are, and where they're heading.",
    color: "#06b6d4",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Tactical Analysis",
    hook: "Draw it. AI critiques it.",
    description: "Interactive pitch board where you build formations and the AI tells you what's wrong — exposed zones, mismatched players, better alternatives. Like having a tactical advisor who's watched 10,000 matches.",
    color: "#ff6b35",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "One-Click Reports",
    hook: "Monthly reports that write themselves",
    description: "Monthly team performance, weekly summaries, medical reports, and parent updates — all AI-generated from real data. Exported as branded PDFs. Shared via WhatsApp or email in one tap.",
    color: "#a78bfa",
    metric: "4",
    metricLabel: "report types, zero manual writing",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Ask Anything",
    hook: "Your squad data has a voice",
    description: "'Who should rest tomorrow?' 'What's Ahmed's sprint trend?' 'Design a pressing drill for Wednesday.' Ask Coach M8 anything and get answers backed by every session, every metric, every player.",
    color: "#ffbb00",
  },
];

function FeatureCard({ feature, index }: { feature: ShowcaseFeature; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass relative overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? `${feature.color}30` : undefined,
        boxShadow: hovered ? `0 0 30px ${feature.color}10` : undefined,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* Icon + metric */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: `${feature.color}12`,
            boxShadow: hovered ? `0 0 20px ${feature.color}20` : undefined,
            color: feature.color,
          }}
        >
          {feature.icon}
        </div>
        {feature.metric && (
          <div className="text-right">
            <span className="font-mono text-lg font-bold" style={{ color: feature.color }}>
              {feature.metric}
            </span>
            <p className="text-[9px] text-white/30 max-w-[100px]">{feature.metricLabel}</p>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>

      {/* Hook — the punchy line */}
      <p className="text-sm font-medium mb-3" style={{ color: `${feature.color}cc` }}>
        {feature.hook}
      </p>

      {/* Description */}
      <p className="text-xs text-white/40 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function CoachM8Showcase() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a855f7]/20 bg-[#a855f7]/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
            <span className="text-xs text-[#a855f7] font-medium">Powered by Advanced AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
            Not Another Dashboard.
            <br />
            <span className="gradient-text-purple-cyan">A Coaching Brain.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Coach M8 doesn&apos;t just display numbers. It reads your squad&apos;s data, understands the context, and tells you what to do next — before you even ask.
          </p>
        </div>

        {/* Feature grid — 2x4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #a855f7, #00d4ff)",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
            }}
          >
            See It In Action
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
