"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Sparkles,
  HeartHandshake,
  Clock,
} from "lucide-react";
import { values } from "../lib/data";
import Reveal from "./Reveal";

const iconMap = { ShieldCheck, Globe2, Sparkles, HeartHandshake, Clock };

export default function ValuesPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <p className="text-aurora-600 font-bold uppercase tracking-widest text-sm mb-3">
              Our Values
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
              What we{" "}
              <span className="aurora-text italic">stand for</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted">
              Five principles that guide every interaction, every plan, every
              trip.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 bg-aurora-gradient rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500" />
                  <div className="relative w-full h-full bg-white rounded-full border-2 border-aurora-200 flex items-center justify-center group-hover:border-aurora-500 transition-colors shadow-soft">
                    <Icon size={28} className="text-aurora-600" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
