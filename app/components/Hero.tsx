"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Layered aurora background */}
      <div className="absolute inset-0 bg-aurora-soft -z-10" />
      <div className="absolute top-1/4 -left-40 w-150 h-150 aurora-glow -z-10" />
      <div className="absolute bottom-0 -right-40 w-175 h-175 aurora-glow -z-10" />
      <div className="absolute top-20 right-10 w-40 h-40 dots-pattern opacity-60 -z-10" />
      <div className="absolute bottom-20 left-10 w-28 h-28 dots-pattern opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-aurora-200 mb-6"
          >
            <Sparkles size={14} className="text-aurora-600" />
            <span className="text-xs font-semibold text-aurora-700 uppercase tracking-widest">
              Premium Travel Across Russia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold text-ink mb-4"
          >
            Discover <br />
            <span className="aurora-text italic">Russia</span> like
            <br />
            never before
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-script text-3xl text-aurora-600 mb-6"
          >
            Aurora Trip
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-muted text-base lg:text-lg max-w-md mb-10 leading-relaxed"
          >
            A professional travel agency specializing in Private, Corporate,
            VIP, and Educational tours — premium experiences in Russia and
            surrounding regions, crafted with care from the first inquiry to the
            last farewell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="/services"
              className="group px-7 py-4 bg-aurora-gradient text-white font-semibold rounded-xl shadow-glow hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-4 rounded-xl border-2 border-aurora-300 text-aurora-700 font-semibold hover:bg-aurora-50 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-aurora-100"
          >
            <div>
              <p className="font-display text-3xl font-bold text-aurora-800">
                500+
              </p>
              <p className="text-xs text-muted uppercase tracking-wider">
                Happy Travelers
              </p>
            </div>
            <div className="w-px h-10 bg-aurora-200" />
            <div>
              <p className="font-display text-3xl font-bold text-aurora-800">
                24/7
              </p>
              <p className="text-xs text-muted uppercase tracking-wider">
                Trip Support
              </p>
            </div>
            <div className="w-px h-10 bg-aurora-200" />
            <div>
              <p className="font-display text-3xl font-bold text-aurora-800">
                4.9★
              </p>
              <p className="text-xs text-muted uppercase tracking-wider">
                Client Rating
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-130 lg:h-155"
        >
          {/* rotated violet frame */}
          <div className="absolute inset-4 rounded-[45%_55%_50%_50%/50%_45%_55%_50%] bg-aurora-gradient opacity-80 animate-float-y" />

          {/* main image — St Petersburg */}
          <div className="absolute inset-6 rounded-[45%_55%_50%_50%/50%_45%_55%_50%] overflow-hidden shadow-card">
            <Image
              src="/hero.avif"
              alt="Aurora Trip - Moscow, Russia"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* floating plane SVG path */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 620"
            fill="none"
          >
            <path
              className="plane-trail"
              d="M20 100 Q 180 30, 340 140 T 450 440"
              stroke="#7B5BE6"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>

          {/* floating badge: northern lights */}
          <div className="absolute top-10 -left-4 glass rounded-2xl p-4 shadow-card w-52 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-aurora-gradient flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-muted">Experience</p>
                <p className="text-sm font-bold text-ink">Northern Lights</p>
              </div>
            </div>
          </div>

          {/* floating badge: trusted */}
          <div className="absolute bottom-12 -right-2 glass rounded-2xl p-4 shadow-card animate-float-slow-delayed">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-muted">Trusted by</p>
                <p className="text-sm font-bold text-ink">500+ travelers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
