"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { company } from "../lib/data";
import Reveal from "./Reveal";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-[40px] overflow-hidden shadow-card">
            {/* Background image - perbaikan style & opacity */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/msc.avif"
                alt="Ornate theater"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover brightness-[0.7] contrast-[1.05] saturate-[1.1]"
                priority
              />
            </div>

            {/* Overlay gradien utama (sudah ada) */}
            <div className="absolute inset-0 bg-linear-to-br from-aurora-900/90 via-aurora-800/85 to-aurora-900/90" />

            {/* Tambahan overlay gelap tipis untuk membantu kontras teks */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Efek glow (tetap) */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-glow-violet/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-glow-cyan/20 blur-3xl" />

            <div className="relative p-12 md:p-20 text-center text-white">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-script text-4xl md:text-5xl text-glow-cyan mb-4"
              >
                Get in Touch
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold mb-6"
              >
                Ready to plan your <br /> next{" "}
                <span className="aurora-text italic">journey</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-aurora-100 max-w-xl mx-auto mb-10"
              >
                Tell us where your curiosity leads. We&apos;ll handle every
                detail — from the first flight to the final farewell.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-aurora-800 font-semibold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-2xl"
                >
                  Start Planning
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-aurora-100"
              >
                <span className="flex items-center gap-2">
                  <Phone size={14} /> {company.contact.phone}
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={14} /> {company.contact.email}
                </span>
                <span className="flex items-center gap-2">
                  {company.contact.instagram}
                </span>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}