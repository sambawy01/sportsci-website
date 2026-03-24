"use client";

import { useEffect, useState, useRef } from "react";
import { Award } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function Counter({ target, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let current = 0;
    const increment = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2"
        style={{ fontFamily: "var(--font-family-jetbrains)" }}
      >
        {visible ? count : 0}
        {suffix}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="proof" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Numbers card */}
        <div className="glass glow-purple p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-6 mb-12">
            <Counter target={80} suffix="+" label="Players Tracked" />
            <Counter target={15} suffix="+" label="AI Features" />
            <Counter target={30} suffix="+" label="Sessions Analyzed" />
            <Counter target={4} label="Report Types" />
            <div className="col-span-2 sm:col-span-1">
              <Counter target={1} label="Founding Academy" />
            </div>
          </div>

          {/* Trust badge */}
          <div className="border-t border-border pt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-border">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center border border-neon-green/20">
                <Award className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Trusted by The Maker Football Incubator
                </p>
                <p className="text-xs text-text-secondary">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
