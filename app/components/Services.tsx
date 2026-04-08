"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, Briefcase, Crown, GraduationCap, ArrowUpRight } from "lucide-react";
import { services } from "../lib/data";
import Reveal from "./Reveal";

const iconMap = { Compass, Briefcase, Crown, GraduationCap };

export default function Services() {
  return (
    <section className="relative py-28 overflow-hidden bg-linear-to-b from-white via-aurora-50/30 to-white">
      <div className="absolute top-40 left-10 w-32 h-32 dots-pattern opacity-40" />
      <div className="absolute bottom-40 right-10 w-32 h-32 dots-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <p className="text-aurora-600 font-bold uppercase tracking-widest text-sm mb-3">
              Our Services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
              Four ways to travel{" "}
              <span className="aurora-text italic">Russia</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted">
              Every journey is tailored around who you are and what you dream of.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10 }}
                className="gradient-border group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-aurora-600" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-aurora-gradient flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-glow">
                  <Icon size={28} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 text-ink">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.short}</p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-aurora-600 group-hover:gap-2 transition-all"
                >
                  Learn more →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
