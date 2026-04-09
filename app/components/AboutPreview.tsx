"use client";

import { motion } from "framer-motion";
import { company } from "../lib/data";
import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 aurora-glow -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Reveal>
            <div className="relative h-125 w-full">
              <div className="absolute -inset-4 bg-aurora-gradient rounded-3xl opacity-20 blur-2xl" />
              <Image
                src="/saintp.avif"
                alt="Scenic architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative rounded-3xl shadow-card object-cover"
                priority
                loading="eager"
              />
            </div>
          </Reveal>
          {/* decorative stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-4 lg:-right-8 glass rounded-2xl p-6 shadow-card max-w-60"
          >
            <p className="font-display text-4xl font-bold aurora-text">10+</p>
            <p className="text-sm text-muted mt-1">
              Years of experience crafting premium journeys
            </p>
          </motion.div>
        </div>

        <div>
          <Reveal>
            <p className="text-aurora-600 font-bold uppercase tracking-widest text-sm mb-3">
              About Company
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-3 leading-tight">
              A trusted partner for{" "}
              <span className="aurora-text italic">unforgettable</span>{" "}
              journeys
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-script text-2xl text-aurora-500 mb-6">
              Aurora Trip
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted leading-relaxed mb-5">{company.intro}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-muted leading-relaxed mb-5">
              {company.commitment}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-muted leading-relaxed">{company.networks}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
