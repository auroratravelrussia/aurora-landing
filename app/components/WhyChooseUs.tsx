"use client";

import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  Lightbulb,
  Sliders,
  Headphones,
} from "lucide-react";
import { whyChooseUs } from "../lib/data";
import Reveal from "./Reveal";
import { useMemo } from "react";

const iconMap = { Award, Handshake, Lightbulb, Sliders, Headphones };

export default function WhyChooseUs() {

  const stars = useMemo(() => {
    return [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-aurora-900 text-white">
      {/* aurora borealis animated background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-aurora-900 via-aurora-800 to-aurora-900" />
        <div className="absolute top-0 -left-20 w-150 h-100 bg-glow-violet/40 blur-3xl animate-float-y" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-glow-cyan/30 blur-3xl animate-float-y"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-glow-pink/30 blur-3xl animate-float-y"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* stars */}
      <div className="absolute inset-0 opacity-40">
        {stars.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={style}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <p className="text-glow-cyan font-bold uppercase tracking-widest text-sm mb-3">
              Why Aurora
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Why <span className="aurora-text italic">Choose Us?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-aurora-200">
              Five reasons travelers trust Aurora Trip with their most important
              journeys.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-glow-violet/50 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-aurora-gradient flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-aurora-200 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
