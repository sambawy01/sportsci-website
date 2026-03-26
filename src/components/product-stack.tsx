"use client";

import { useState } from "react";
import { Shield, TrendingUp, Brain, Target, HeartPulse, Zap, BarChart3, Users, ChevronDown, Check } from "lucide-react";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  color: string;
  details: string[];
}

function BenefitCard({ icon, title, stat, statLabel, description, color, details }: BenefitCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="glass group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      style={{
        boxShadow: expanded ? `0 0 40px ${color}15` : undefined,
        borderColor: expanded ? `${color}30` : undefined,
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}50)` }} />

      <div className="p-6 sm:p-8">
        {/* Icon + Title */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
              {icon}
            </div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>
          <div
            className={`h-7 w-7 rounded-full flex items-center justify-center transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            style={{ background: `${color}10` }}
          >
            <ChevronDown className="h-3.5 w-3.5" style={{ color }} />
          </div>
        </div>

        {/* Big stat */}
        <div className="mb-4">
          <span className="font-mono text-4xl font-bold" style={{ color }}>{stat}</span>
          <span className="text-sm text-white/40 ml-2">{statLabel}</span>
        </div>

        <p className="text-sm text-white/50 leading-relaxed">{description}</p>

        {/* Expanded details */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[400px] opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-white/[0.08] pt-4 space-y-2.5">
            {details.map((d) => (
              <div key={d} className="flex items-start gap-2">
                <Check className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color }} />
                <span className="text-xs text-white/50">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {!expanded && (
          <p className="text-[10px] text-white/20 mt-4 text-center">Click to learn more</p>
        )}
      </div>
    </div>
  );
}

export default function ProductStack() {
  return (
    <section id="products" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-cyan-purple">What Changes For Your Academy</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real results from AI-powered coaching intelligence. Every number backed by data, every decision smarter than the last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard
            icon={<Shield className="w-5 h-5 text-[#00ff88]" />}
            title="Injury Prevention"
            stat="75%"
            statLabel="reduction in preventable non-contact injuries"
            description="8-factor risk model validated against peer-reviewed sports science research. Predicts injuries up to 7 days before they happen — so your best players stay on the pitch, not in rehab."
            color="#00ff88"
            details={[
              "Multi-factor risk scoring combining 8 independently validated injury predictors",
              "7-day forward risk forecast — know which players reach danger by Thursday if you train hard Monday-Wednesday",
              "Morning readiness assessment: biometric recovery + subjective wellness combined into a single score",
              "Training monotony and strain tracking prevents overtraining from repetitive load patterns",
              "Movement symmetry analysis detects biomechanical imbalances before they cause injury",
              "AI-generated prevention protocols: personalized load caps, recovery plans, and return-to-play criteria for every player",
              "Based on published research: Gabbett 2016, Foster 1998, Plews 2013, Williams 2017",
            ]}
          />
          <BenefitCard
            icon={<Brain className="w-5 h-5 text-[#a855f7]" />}
            title="AI Coaching Intelligence"
            stat="15+"
            statLabel="AI-powered features"
            description="From opponent scouting with live web research to AI session design that adapts to your squad's fitness — intelligence that used to require a team of analysts."
            color="#a855f7"
            details={[
              "Opponent Scout Report — deep web research builds a tactical dossier on any team",
              "AI Session Design — generates training plans adapted to squad load and upcoming fixtures",
              "Match Readiness Score — know exactly who's fit to start before every game",
              "TacticBoard AI — draw formations and get real-time AI tactical feedback",
              "Post-match AI Debrief — automated analysis with player ratings",
              "AI Chat — ask anything about your squad and get data-backed answers instantly",
            ]}
          />
          <BenefitCard
            icon={<TrendingUp className="w-5 h-5 text-[#00d4ff]" />}
            title="Player Development"
            stat="360°"
            statLabel="development visibility"
            description="Track every player's growth trajectory over months. AI identifies strengths, development areas, and projects future potential based on real performance data."
            color="#00d4ff"
            details={[
              "Progress Timeline — visual performance arc over 30+ sessions with trend analysis",
              "Talent Spotlight — composite scoring ranks your top performers automatically",
              "Dual radar charts comparing physical and positional metrics vs squad average",
              "AI Development Insight — personalized growth recommendations per player",
              "Parent Reports — automated monthly updates that prove academy value",
              "Compare tool — side-by-side analysis of any 2-4 players with AI commentary",
            ]}
          />
        </div>

        {/* Second row — more benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { icon: <HeartPulse className="w-4 h-4 text-[#ff3355]" />, title: "Live Monitoring", desc: "Real-time heart rate and intensity during every session", color: "#ff3355" },
            { icon: <Target className="w-4 h-4 text-[#ff6b35]" />, title: "Position Intelligence", desc: "Heatmaps, sprint tracking, and movement analysis from video", color: "#ff6b35" },
            { icon: <Zap className="w-4 h-4 text-[#ffbb00]" />, title: "Load Management", desc: "Weekly periodization with optimal zone tracking", color: "#ffbb00" },
            { icon: <Users className="w-4 h-4 text-[#06b6d4]" />, title: "Squad Builder", desc: "AI-recommended starting XI based on fitness, form, and tactics", color: "#06b6d4" },
          ].map((item) => (
            <div key={item.title} className="glass p-5 group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
