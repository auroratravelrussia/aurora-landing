import type { Metadata } from "next";
import {
  ShieldCheck,
  Globe2,
  Sparkles,
  HeartHandshake,
  Clock,
} from "lucide-react";
import { values } from "../lib/data";
import PageHero from "../_components/PageHero";
import Reveal from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Values – Aurora Trip",
  description:
    "The five values that guide every Aurora Trip journey: Integrity, Cultural Respect, Excellence, Customer Focus, and Reliability.",
};

const iconMap = {
  ShieldCheck,
  Globe2,
  Sparkles,
  HeartHandshake,
  Clock,
};

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Stand For"
        title="Our"
        italicWord="Values"
        subtitle="Five principles we carry from the first inquiry to the last farewell — the heart of every Aurora journey."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon as keyof typeof iconMap];
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all overflow-hidden border border-aurora-100 h-full">
                    {/* number background */}
                    <span className="absolute top-4 right-6 font-display text-7xl font-bold text-aurora-100 group-hover:text-aurora-200 transition-colors">
                      0{i + 1}
                    </span>

                    {/* icon */}
                    <div className="relative w-16 h-16 rounded-2xl bg-aurora-gradient flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="relative font-display text-2xl font-bold text-ink mb-3">
                      {v.title}
                    </h3>
                    <p className="relative text-muted leading-relaxed">
                      {v.description}
                    </p>

                    {/* bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-aurora-gradient group-hover:w-full transition-all duration-500" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="relative bg-aurora-900 text-white rounded-3xl p-12 md:p-16 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-glow-violet/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-glow-cyan/30 blur-3xl" />
              <div className="relative">
                <p className="font-script text-4xl md:text-5xl aurora-text mb-6">
                  Our Promise
                </p>
                <p className="font-display text-2xl md:text-3xl leading-snug italic text-aurora-100">
                  &ldquo;Every journey is a chance to earn your trust all over
                  again — and we never take it for granted.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
